// Turn the STL parts of a car into one small GLB for the plan.
//   node tools/stl-to-glb.mjs --out sandero.glb --length 4.09 --width 1.85 --height 1.58 [--tris 30000] [--flip] part1.stl [part2.stl ...]
// - reads binary or ASCII STL, welds the vertices, simplifies to about --tris triangles (meshoptimizer)
// - orients the car (longest axis = length, middle = width, smallest = height, wheels down, nose to +z) and scales it to the given size in metres
// - writes a GLB with positions, normals and vertex colours (dark lower part = tyres / sills)
import fs from "node:fs";
import { MeshoptSimplifier } from "meshoptimizer";

const args = process.argv.slice(2);
const opt = { tris: 30000 }, files = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--out") opt.out = args[++i];
  else if (a === "--length") opt.length = +args[++i];
  else if (a === "--width") opt.width = +args[++i];
  else if (a === "--height") opt.height = +args[++i];
  else if (a === "--tris") opt.tris = +args[++i];
  else if (a === "--flip") opt.flip = true; // swap nose and tail
  else files.push(a);
}
if (!opt.out || !opt.length || !opt.width || !opt.height || !files.length) { console.error("usage: see the header of this file"); process.exit(1); }

function readStl(path) {
  const b = fs.readFileSync(path);
  const asText = b.length > 84 && b.slice(0, 5).toString("latin1") === "solid" && b.slice(0, 1000).toString("latin1").includes("facet");
  if (!asText) {
    const n = b.readUInt32LE(80);
    const out = new Float32Array(n * 9);
    for (let i = 0, o = 84; i < n; i++, o += 50) for (let k = 0; k < 9; k++) out[i * 9 + k] = b.readFloatLE(o + 12 + k * 4);
    return out;
  }
  const v = [];
  for (const m of b.toString("latin1").matchAll(/vertex\s+(\S+)\s+(\S+)\s+(\S+)/g)) v.push(+m[1], +m[2], +m[3]);
  return Float32Array.from(v);
}

// ---- read all parts
const parts = files.map(readStl);
const total = parts.reduce((s, p) => s + p.length, 0);
const tri = new Float32Array(total);
let off = 0;
for (const p of parts) { tri.set(p, off); off += p.length; }
const nTri = tri.length / 9;
console.log(`read ${files.length} part(s), ${nTri} triangles`);

// ---- bounding box and weld
let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
for (let i = 0; i < tri.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], tri[i + k]); mx[k] = Math.max(mx[k], tri[i + k]); }
const diag = Math.hypot(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]);
const cell = diag / 150000;
const map = new Map();
const pos = [];
const idx = new Uint32Array(nTri * 3);
for (let i = 0; i < nTri * 3; i++) {
  const x = tri[i * 3], y = tri[i * 3 + 1], z = tri[i * 3 + 2];
  const key = `${Math.round(x / cell)},${Math.round(y / cell)},${Math.round(z / cell)}`;
  let id = map.get(key);
  if (id === undefined) { id = pos.length / 3; map.set(key, id); pos.push(x, y, z); }
  idx[i] = id;
}
map.clear();
let positions = Float32Array.from(pos);
console.log(`welded: ${positions.length / 3} vertices`);

// drop degenerate triangles
const good = [];
for (let i = 0; i < idx.length; i += 3) if (idx[i] !== idx[i + 1] && idx[i + 1] !== idx[i + 2] && idx[i] !== idx[i + 2]) good.push(idx[i], idx[i + 1], idx[i + 2]);
let indices = Uint32Array.from(good);

// ---- simplify
await MeshoptSimplifier.ready;
const target = Math.min(indices.length, opt.tris * 3);
let simplified;
try {
  [simplified] = MeshoptSimplifier.simplify(indices, positions, 3, target, 0.5, ["Prune"]);
} catch {
  [simplified] = MeshoptSimplifier.simplify(indices, positions, 3, target, 0.5);
}
console.log(`simplified: ${simplified.length / 3} triangles`);

// compact the vertices
const remap = new Map(), vp = [];
const ni = new Uint32Array(simplified.length);
for (let i = 0; i < simplified.length; i++) {
  const v = simplified[i];
  let n = remap.get(v);
  if (n === undefined) { n = vp.length / 3; remap.set(v, n); vp.push(positions[v * 3], positions[v * 3 + 1], positions[v * 3 + 2]); }
  ni[i] = n;
}
const P = Float32Array.from(vp);
const nv = P.length / 3;

// ---- orientation: longest axis = length, middle = width, smallest = height
mn = [Infinity, Infinity, Infinity]; mx = [-Infinity, -Infinity, -Infinity];
for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], P[i + k]); mx[k] = Math.max(mx[k], P[i + k]); }
const ext = [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]];
const order = [0, 1, 2].sort((a, b) => ext[b] - ext[a]);
const [aL, aW, aH] = order;
console.log(`extent ${ext.map((e) => e.toFixed(2)).join(" x ")} -> length axis ${aL}, width axis ${aW}, height axis ${aH}`);

// which side is up: the bottom (wheels, chassis) has more vertices than the roof
const hMid = (mn[aH] + mx[aH]) / 2;
let low = 0, high = 0;
for (let i = 0; i < nv; i++) { const h = P[i * 3 + aH]; if (h < mn[aH] + ext[aH] * 0.3) low++; else if (h > mx[aH] - ext[aH] * 0.3) high++; }
const up = low >= high ? 1 : -1; // 1: min along aH is the ground
console.log(`vertices low/high: ${low}/${high} -> ground at ${up === 1 ? "min" : "max"} of axis ${aH}`);
const hOf = (h) => (up === 1 ? h - mn[aH] : mx[aH] - h); // height above the ground (STL units)

// nose: the end whose roof line is lower (bonnet) is the front
let maxA = 0, maxB = 0;
for (let i = 0; i < nv; i++) {
  const l = P[i * 3 + aL] - mn[aL], h = hOf(P[i * 3 + aH]);
  if (l < ext[aL] * 0.25) maxA = Math.max(maxA, h);
  else if (l > ext[aL] * 0.75) maxB = Math.max(maxB, h);
}
let front = maxA < maxB ? -1 : 1; // front end is at the min (-1) or max (+1) of the length axis
if (opt.flip) front = -front;
console.log(`roof height at the two ends: min end ${maxA.toFixed(2)}, max end ${maxB.toFixed(2)} -> nose at the ${front === 1 ? "max" : "min"} end`);

// new coordinates: x = width, y = height above the ground, z = length with the nose at +z; scaled to metres
const sL = opt.length / ext[aL], sW = opt.width / ext[aW], sH = opt.height / ext[aH];
const cL = (mn[aL] + mx[aL]) / 2, cW = (mn[aW] + mx[aW]) / 2;
const Q = new Float32Array(P.length);
for (let i = 0; i < nv; i++) {
  Q[i * 3] = (P[i * 3 + aW] - cW) * sW;
  Q[i * 3 + 1] = hOf(P[i * 3 + aH]) * sH;
  Q[i * 3 + 2] = (P[i * 3 + aL] - cL) * sL * front;
}
// the axis permutation / signs may mirror the mesh: keep the winding right
const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // rows: new axes, columns: old axes
M[0][aW] = 1; M[1][aH] = up; M[2][aL] = front;
const det = M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
if (det < 0) for (let i = 0; i < ni.length; i += 3) { const t = ni[i + 1]; ni[i + 1] = ni[i + 2]; ni[i + 2] = t; }

// ---- normals (smooth) and vertex colours
const N = new Float32Array(Q.length);
for (let i = 0; i < ni.length; i += 3) {
  const a = ni[i], b = ni[i + 1], c = ni[i + 2];
  const ux = Q[b * 3] - Q[a * 3], uy = Q[b * 3 + 1] - Q[a * 3 + 1], uz = Q[b * 3 + 2] - Q[a * 3 + 2];
  const vx = Q[c * 3] - Q[a * 3], vy = Q[c * 3 + 1] - Q[a * 3 + 1], vz = Q[c * 3 + 2] - Q[a * 3 + 2];
  const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
  for (const v of [a, b, c]) { N[v * 3] += nx; N[v * 3 + 1] += ny; N[v * 3 + 2] += nz; }
}
for (let i = 0; i < nv; i++) { const l = Math.hypot(N[i * 3], N[i * 3 + 1], N[i * 3 + 2]) || 1; N[i * 3] /= l; N[i * 3 + 1] /= l; N[i * 3 + 2] /= l; }
const C = new Uint8Array(nv * 4);
for (let i = 0; i < nv; i++) {
  const y = Q[i * 3 + 1];
  const dark = y < 0.22 || (y < 0.45 && Math.abs(Q[i * 3 + 2]) > opt.length * 0.17 && Math.abs(Q[i * 3 + 2]) < opt.length * 0.4 && Math.abs(Q[i * 3]) > opt.width * 0.36); // tyres and the wheel arches
  const g = dark ? 40 : 255;
  C[i * 4] = C[i * 4 + 1] = C[i * 4 + 2] = g; C[i * 4 + 3] = 255;
}

// ---- GLB
const pad4 = (n) => (n + 3) & ~3;
const bufs = [Buffer.from(Q.buffer), Buffer.from(N.buffer), Buffer.from(C.buffer), Buffer.from(ni.buffer)];
const lens = bufs.map((b) => b.length), starts = [];
let s = 0;
for (const l of lens) { starts.push(s); s += pad4(l); }
const bin = Buffer.alloc(s);
bufs.forEach((b, i) => b.copy(bin, starts[i]));
const bmin = [Infinity, Infinity, Infinity], bmax = [-Infinity, -Infinity, -Infinity];
for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { bmin[k] = Math.min(bmin[k], Q[i * 3 + k]); bmax[k] = Math.max(bmax[k], Q[i * 3 + k]); }
const json = {
  asset: { version: "2.0", generator: "homeplan3d stl-to-glb" },
  scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0, name: "car" }],
  meshes: [{ primitives: [{ attributes: { POSITION: 0, NORMAL: 1, COLOR_0: 2 }, indices: 3, material: 0 }] }],
  materials: [{ pbrMetallicRoughness: { baseColorFactor: [1, 1, 1, 1], metallicFactor: 0.2, roughnessFactor: 0.6 }, doubleSided: true }],
  buffers: [{ byteLength: bin.length }],
  bufferViews: bufs.map((b, i) => ({ buffer: 0, byteOffset: starts[i], byteLength: lens[i], target: i === 3 ? 34963 : 34962 })),
  accessors: [
    { bufferView: 0, componentType: 5126, count: nv, type: "VEC3", min: bmin, max: bmax },
    { bufferView: 1, componentType: 5126, count: nv, type: "VEC3" },
    { bufferView: 2, componentType: 5121, normalized: true, count: nv, type: "VEC4" },
    { bufferView: 3, componentType: 5125, count: ni.length, type: "SCALAR" },
  ],
};
let jsonBuf = Buffer.from(JSON.stringify(json));
jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc(pad4(jsonBuf.length) - jsonBuf.length, 0x20)]);
const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(12 + 8 + jsonBuf.length + 8 + bin.length, 8);
const jh = Buffer.alloc(8); jh.writeUInt32LE(jsonBuf.length, 0); jh.writeUInt32LE(0x4e4f534a, 4);
const bh = Buffer.alloc(8); bh.writeUInt32LE(bin.length, 0); bh.writeUInt32LE(0x004e4942, 4);
fs.writeFileSync(opt.out, Buffer.concat([header, jh, jsonBuf, bh, bin]));
console.log(`wrote ${opt.out}: ${nv} vertices, ${ni.length / 3} triangles, ${(fs.statSync(opt.out).size / 1024).toFixed(0)} KB, size ${(bmax[0] - bmin[0]).toFixed(2)} x ${(bmax[1] - bmin[1]).toFixed(2)} x ${(bmax[2] - bmin[2]).toFixed(2)} m`);
