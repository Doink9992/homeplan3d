import { uid, rad, distSeg, inPoly, furnitureCorners } from "./util.js";

export const DEFAULTS = { wallExterior: 0.24, wallInterior: 0.12, slab: 0.18 };

export function newFloor(n) {
  return { id: uid(), name: `Etage ${n}`, height: 2.6, rooms: [], walls: [], openings: [], devices: [], furniture: [] };
}

/**
 * Give a site building n storeys that line up with the main building's floors
 * (ground level and above): slab elevations -> storeys, top of the last level -> height.
 */
export function applyLevels(plan, b, n) {
  const above = plan.floors
    .map((f, i) => ({ e: elevation(plan, i), h: f.height || 2.6 }))
    .filter((x) => x.e > -0.01)
    .sort((a, c) => a.e - c.e);
  n = Math.max(1, Math.round(n) || 1);
  b.levels = n;
  if (!above.length) { b.storeys = Array.from({ length: n }, (_, i) => +(i * 2.8).toFixed(2)); b.height = +(n * 2.8).toFixed(2); return b; }
  const last = above[above.length - 1];
  b.storeys = Array.from({ length: n }, (_, i) => +(above[i]?.e ?? last.e + (i - above.length + 1) * last.h).toFixed(2));
  const top = above[n - 1] || { e: last.e + (n - above.length) * (last.h + 0.18), h: last.h };
  b.height = +(top.e + top.h).toFixed(2);
  return b;
}

export function newSiteBuilding(points, n = 1) {
  return { id: uid(), name: `Gebäude ${n}`, points, height: 3, visible: true, roof: { type: "gable", pitch: 25, overhang: 0.3 } };
}

export function emptyPlan() {
  return { version: 2, settings: {}, floors: [newFloor(1)] };
}

/** Fill defaults so older/foreign plans render. Mutates and returns p. */
export function normalizePlan(p) {
  p.version = 2;
  p.settings = { ...DEFAULTS, autoDevices: true, ...(p.settings || {}) };
  p.floors = p.floors || [];
  if (p.site) {
    p.site.buildings = p.site.buildings || [];
    p.site.buildings.forEach((b) => {
      b.height = b.height || 3;
      b.roof = { type: "flat", pitch: 25, overhang: 0.3, ...(b.roof || {}) };
      if (b.visible == null) b.visible = true;
    });
  }
  p.floors.forEach((f) => {
    f.height = f.height || 2.6;
    for (const k of ["rooms", "walls", "openings", "devices", "furniture"]) f[k] = f[k] || [];
    f.openings.forEach((o) => {
      const door = o.type === "door";
      o.w = o.w || (door ? 0.9 : 1.2);
      o.h = o.h || (door ? 2.1 : 1.1);
      if (o.sill == null) o.sill = door ? 0 : 0.9;
    });
  });
  (p.site?.buildings || []).forEach((b) => { if (b.levels > 1 && !b.storeys) applyLevels(p, b, b.levels); });
  return p;
}

export function elevation(plan, i) {
  const f = plan.floors[i];
  if (!f) return 0;
  if (f.elevation != null) return f.elevation;
  let y = 0;
  for (let k = 0; k < i; k++) y += (plan.floors[k].height || 2.6) + (plan.settings?.slab ?? DEFAULTS.slab);
  return y;
}

// ---------------------------------------------------------------- roof
const geomCache = new WeakMap();
export function roofGeom(s) {
  let g = geomCache.get(s);
  if (g) return g;
  const horiz = s.axis !== "z"; // ridge along x: the profile runs across z
  const flip = !!s.flip;
  const eaveA = flip ? s.eaveB : s.eaveA, eaveB = flip ? s.eaveA : s.eaveB;
  const pa = flip ? s.pitchB : s.pitchA, pb = flip ? s.pitchA : s.pitchB;
  const c0 = horiz ? s.z0 : s.x0, c1 = horiz ? s.z1 : s.x1;
  const s0 = horiz ? s.x0 : s.z0, s1 = horiz ? s.x1 : s.z1;
  const ta = Math.tan(rad(pa)), tb = Math.tan(rad(pb));
  const cr = (eaveB - eaveA + ta * c0 + tb * c1) / (ta + tb);
  const yr = eaveA + ta * (cr - c0);
  g = { horiz, c0, c1, s0, s1, eaveA, eaveB, pa, pb, ta, tb, cr, yr, base: s.base ?? Math.min(eaveA, eaveB), overhang: s.overhang ?? 0.5 };
  geomCache.set(s, g);
  return g;
}

export function roofSections(plan) {
  return plan.settings?.roof?.sections || [];
}

/** Height of the roof underside at plan position (x, z); Infinity when no section covers it. */
export function roofHeightAt(plan, x, z, pad = 0.06) {
  let best = Infinity, any = false;
  for (const s of roofSections(plan)) {
    const g = roofGeom(s);
    const c = g.horiz ? z : x, t = g.horiz ? x : z;
    if (t < g.s0 - pad || t > g.s1 + pad || c < g.c0 - pad || c > g.c1 + pad) continue;
    const y = Math.min(g.eaveA + g.ta * (c - g.c0), g.eaveB + g.tb * (g.c1 - c));
    if (!any || y > best) best = y;
    any = true;
  }
  return any ? best : Infinity;
}

// ---------------------------------------------------------------- walls
const NODE_TOL = 0.03;
const hv = (v) => (typeof v === "number" ? v : Infinity); // null/undefined/array = full height; 0 = no wall

/**
 * Turn room outlines and free walls into one clean set of wall segments:
 * nearby corners are merged, T-junctions split, shared edges deduplicated
 * (thickest wins) and corner ends extended so thick walls close up.
 */
export function wallNetwork(floor, st = DEFAULTS) {
  const nodes = [];
  const canon = (p) => {
    for (const n of nodes) if (Math.hypot(n[0] - p[0], n[1] - p[1]) < NODE_TOL) return n;
    const n = [p[0], p[1]];
    n.i = nodes.length;
    nodes.push(n);
    return n;
  };
  const raw = [];
  floor.rooms.forEach((r) => {
    const n = r.points.length;
    r.points.forEach((p, i) => {
      raw.push({ a: canon(p), b: canon(r.points[(i + 1) % n]), t: r.wallT?.[i] ?? null, h: hv(r.wallH?.[i]), room: r.id, free: false });
    });
  });
  floor.walls.forEach((w) => raw.push({ a: canon(w.a), b: canon(w.b), t: w.t ?? null, h: w.h != null ? w.h : Infinity, room: null, free: true, id: w.id }));

  const groups = new Map();
  raw.forEach((s) => {
    if (s.a === s.b) return;
    const cuts = [{ t: 0, n: s.a }, { t: 1, n: s.b }];
    for (const n of nodes) {
      if (n === s.a || n === s.b) continue;
      const r = distSeg(n, s.a, s.b);
      if (r.d < NODE_TOL && r.t > 0.0005 && r.t < 0.9995) cuts.push({ t: r.t, n });
    }
    cuts.sort((x, y) => x.t - y.t);
    for (let k = 0; k < cuts.length - 1; k++) {
      const a = cuts[k].n, b = cuts[k + 1].n;
      if (a === b) continue;
      const key = a.i < b.i ? `${a.i}|${b.i}` : `${b.i}|${a.i}`;
      let g = groups.get(key);
      if (!g) groups.set(key, (g = { a, b, ts: [], hs: [], rooms: new Set(), free: false, ids: [] }));
      if (s.t != null) g.ts.push(s.t);
      g.hs.push(s.h);
      if (s.room) g.rooms.add(s.room);
      if (s.free) { g.free = true; if (s.id) g.ids.push(s.id); }
    }
  });

  const segs = [];
  groups.forEach((g) => {
    const h = Math.max(...g.hs);
    if (h <= 0) return;
    const t = g.ts.length ? Math.max(...g.ts) : g.free || g.rooms.size >= 2 ? st.wallInterior : st.wallExterior;
    segs.push({ a: g.a, b: g.b, t, h: Number.isFinite(h) ? h : null, extA: 0, extB: 0, rooms: [...g.rooms], free: g.free, ids: g.ids });
  });

  const at = new Map();
  segs.forEach((s) => {
    for (const [n, other] of [[s.a, s.b], [s.b, s.a]]) {
      if (!at.has(n)) at.set(n, []);
      at.get(n).push({ s, dir: norm([other[0] - n[0], other[1] - n[1]]) });
    }
  });
  at.forEach((list, n) => {
    if (list.length === 1 || list.length > 2) return;
    const [p, q] = list;
    const cross = p.dir[0] * q.dir[1] - p.dir[1] * q.dir[0];
    const dot = p.dir[0] * q.dir[0] + p.dir[1] * q.dir[1];
    if (Math.abs(cross) < 0.05 && dot < 0) return; // straight continuation
    for (const e of list) {
      if (e.s.a === n) e.s.extA = e.s.t / 2;
      else e.s.extB = e.s.t / 2;
    }
  });
  segs.forEach((s) => {
    s.len = Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1]);
    s.rot = -Math.atan2(s.b[1] - s.a[1], s.b[0] - s.a[0]);
  });
  return segs;
}
const norm = (v) => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };

/** The wall segment an opening sits in, with its position along that segment. */
export function hostSegment(o, segs) {
  let best = null;
  for (const s of segs) {
    const r = distSeg([o.x, o.z], s.a, s.b);
    if (r.d > s.t / 2 + 0.2) continue;
    if (o.rot != null && Math.abs(Math.sin(o.rot - s.rot)) > 0.15) continue;
    if (!best || r.d < best.d) best = { s, d: r.d, u: r.t * s.len, q: r.q };
  }
  return best;
}

// ---------------------------------------------------------------- stairs
export const isStairs = (f) => f.type === "stairs" || f.type === "stairs_u";

/** Floor openings (polygons) in floor i where stairs from lower floors arrive. */
export function stairHoles(plan, i) {
  const out = [];
  const top = elevation(plan, i);
  for (let k = 0; k < i; k++) {
    const base = elevation(plan, k);
    plan.floors[k].furniture.filter(isStairs).forEach((f) => {
      if (base + (f.h || 2.7) < top - 0.35 || base >= top) return;
      const poly = furnitureCorners(f);
      if (plan.floors[i].rooms.some((r) => poly.every((p) => inPoly(p, r.points)))) out.push(poly);
    });
  }
  return out;
}
