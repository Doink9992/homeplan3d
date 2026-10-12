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
