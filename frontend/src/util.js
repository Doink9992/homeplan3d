export const SNAP = 0.25;
export const uid = () => Math.random().toString(36).slice(2, 9);
export const snap = (v, s = SNAP) => Math.round(v / s) * s;
export const domainOf = (e) => (e || "").split(".")[0];
export const clone = (o) => JSON.parse(JSON.stringify(o));
export const rad = (d) => (d * Math.PI) / 180;

export function inPoly(p, pts) {
  let c = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, zi] = pts[i], [xj, zj] = pts[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) c = !c;
  }
  return c;
}

export function bbox(pts) {
  const xs = pts.map((p) => p[0]), zs = pts.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...zs), Math.max(...xs), Math.max(...zs)];
}

export function distSeg(p, a, b) {
  const dx = b[0] - a[0], dz = b[1] - a[1];
  const l2 = dx * dx + dz * dz;
  let t = l2 ? ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  const q = [a[0] + t * dx, a[1] + t * dz];
  return { d: Math.hypot(p[0] - q[0], p[1] - q[1]), q, t };
}

export function polyArea(p) {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const [x1, z1] = p[i], [x2, z2] = p[(i + 1) % p.length];
    a += x1 * z2 - x2 * z1;
  }
  return Math.abs(a / 2);
}

/** A point inside the polygon, close to its centroid (for labels). */
export function labelPoint(pts) {
  let a = 0, cx = 0, cz = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, z1] = pts[i], [x2, z2] = pts[(i + 1) % pts.length];
    const k = x1 * z2 - x2 * z1;
    a += k; cx += (x1 + x2) * k; cz += (z1 + z2) * k;
  }
  const [x0, z0, x1, z1] = bbox(pts);
  if (Math.abs(a) < 1e-9) return [(x0 + x1) / 2, (z0 + z1) / 2];
  const c = [cx / (3 * a), cz / (3 * a)];
  if (inPoly(c, pts)) return c;
  let best = null, bd = Infinity;
  for (let x = x0; x <= x1; x += 0.1)
    for (let z = z0; z <= z1; z += 0.1) {
      const d = Math.hypot(x - c[0], z - c[1]);
      if (d < bd && inPoly([x, z], pts)) { bd = d; best = [x, z]; }
    }
  return best || c;
}

/** World position of a furniture-local point (NeonPlan convention: x right, z down, rotation clockwise in plan). */
export function localToWorld(f, lx, lz) {
  const r = rad(f.rot || 0), c = Math.cos(r), s = Math.sin(r);
  return [f.x + lx * c - lz * s, f.z + lx * s + lz * c];
}

export function furnitureCorners(f) {
  const hw = (f.w || 0.5) / 2, hd = (f.d || 0.5) / 2;
  return [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([x, z]) => localToWorld(f, x, z));
}

/** Convex hull (Andrew's monotone chain) of [x, z] points. */
export function convexHull(points) {
  const pts = [...new Map(points.map((p) => [p.join(","), p])).values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (pts.length < 3) return pts;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const p of pts) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); }
  const upper = [];
  for (const p of [...pts].reverse()) { while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p); }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}

/**
 * Smallest enclosing rectangle of a polygon: centre, length (long side), width and the direction
 * `ang` (radians, atan2(dz, dx)) of the long side.
 */
export function obb(points) {
  const hull = convexHull(points);
  let best = null;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const c = Math.cos(-ang), s = Math.sin(-ang);
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const p of hull) {
      const x = p[0] * c - p[1] * s, z = p[0] * s + p[1] * c;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
    }
    const area = (x1 - x0) * (z1 - z0);
    if (!best || area < best.area - 1e-9) best = { area, ang, x0, x1, z0, z1 };
  }
  const { ang, x0, x1, z0, z1 } = best;
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const c = Math.cos(ang), s = Math.sin(ang);
  let len = x1 - x0, wid = z1 - z0, a = ang;
  if (wid > len) { [len, wid] = [wid, len]; a += Math.PI / 2; }
  return { cx: cx * c - cz * s, cz: cx * s + cz * c, len, wid, ang: a };
}

/** Horizontal unit vectors (plan x right, z down) of the compass directions, for a plan whose north is rotated `northDeg` clockwise from plan-up. */
export function compassVectors(northDeg = 0) {
  const n = (northDeg * Math.PI) / 180;
  return { north: [Math.sin(n), -Math.cos(n)], south: [-Math.sin(n), Math.cos(n)], east: [Math.cos(n), Math.sin(n)], west: [-Math.cos(n), -Math.sin(n)] };
}
