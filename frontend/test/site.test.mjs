import test from "node:test";
import assert from "node:assert/strict";
import { siteFrame, localToPlan, layoutParts, pvGrid } from "../src/lib/site.js";

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

test("shed roof: the high side faces the requested compass side", () => {
  // long building along x, plan north up: south is +z
  const pts = [[0, 10], [23, 10], [23, 13], [0, 13]];
  const f = siteFrame(pts, { high: "south" }, 0);
  assert.ok(Math.abs(f.L - 23) < 1e-9 && Math.abs(f.W - 3) < 1e-9);
  assert.ok(f.dHigh[1] > 0.99); // towards +z = south
  assert.ok(siteFrame(pts, { high: "north" }, 0).dHigh[1] < -0.99);
  // local -z of the frame points to the high side: world = localToPlan(u, w) with w = -1
  const a = localToPlan(f, 0, 0), b = localToPlan(f, 0, -1);
  assert.ok(dot([b[0] - a[0], b[1] - a[1]], f.dHigh) > 0.99);
});

test("plan north rotation is respected", () => {
  const pts = [[0, 0], [23, 0], [23, 3], [0, 3]];
  // north points to plan-right: "south" is plan-left (-x) for an across axis along x? the building is long along x, so across is z: both ±z are ~perpendicular -> any, but unit length
  const f = siteFrame(pts, { high: "east" }, 90); // east = plan-down (+z)
  assert.ok(f.dHigh[1] > 0.99);
});

test("west end mapping", () => {
  const pts = [[0, 10], [23, 10], [23, 13], [0, 13]];
  const f = siteFrame(pts, { high: "south" }, 0);
  const west = localToPlan(f, f.tToU(0), 0), east = localToPlan(f, f.tToU(f.L), 0);
  assert.ok(west[0] < east[0]);
  assert.ok(Math.abs(west[0] - 0) < 1e-6 && Math.abs(east[0] - 23) < 1e-6);
});

test("garage at the west end, four carport stalls at the east end", () => {
  const parts = layoutParts(23, { garage: "west", carportStalls: 4, stallWidth: 2.9 });
  assert.deepEqual(parts.map((p) => p.type), ["garage", "carport"]);
  const car = parts.find((p) => p.type === "carport");
  assert.ok(Math.abs(car.t1 - car.t0 - 11.6) < 1e-9 && car.t1 === 23 && car.stalls === 4);
  const g = parts.find((p) => p.type === "garage");
  assert.ok(Math.abs(g.t1 - 11.4) < 1e-9 && g.t0 === 0);
});

test("garage on the east side, explicit garage length leaves an open bay", () => {
  const p = layoutParts(23, { garage: "east", carportStalls: 2, stallWidth: 3, garageLen: 5 });
  assert.deepEqual(p.map((x) => x.type), ["carport", "open", "garage"]);
  assert.equal(p[0].t1, 6);
  assert.equal(p[2].t0, 18);
});

test("no layout, or nothing to lay out", () => {
  assert.equal(layoutParts(10, null), null);
  assert.equal(layoutParts(10, { garage: "none", carportStalls: 0 }), null);
});

test("pv grid fills the roof", () => {
  const g = pvGrid({ L: 23, W: 2.9, pitchDeg: 12, orientation: "landscape" });
  assert.equal(g.rows, 2);
  assert.equal(g.cols, 12);
  assert.equal(g.modules.length, 24);
  // automatic orientation picks whichever fits more modules, the legacy boolean still works
  assert.equal(pvGrid({ L: 23, W: 2.9, pitchDeg: 12 }).modules.length, 24);
  assert.equal(pvGrid({ L: 23, W: 2.6, pitchDeg: 12 }).portrait, true); // too shallow for two landscape rows -> portrait
  assert.equal(pvGrid({ L: 23, W: 2.9, pitchDeg: 12, portrait: false }).portrait, false);
  const manual = pvGrid({ L: 23, W: 2.9, pitchDeg: 12, fill: false, rows: 1, cols: 3 });
  assert.equal(manual.modules.length, 3);
  // modules stay on the roof
  assert.ok(g.modules.every((m) => m.s - m.mh / 2 >= 0 && m.s + m.mh / 2 <= g.slope));
});

test("garage, four carport stalls and a bicycle garage at the east end", () => {
  const parts = layoutParts(23, { garage: "west", carportStalls: 4, stallWidth: 2.9, bike: "east", bikeWidth: 3, bikeDoor: 1.2 });
  assert.deepEqual(parts.map((p) => p.type), ["garage", "carport", "bike"]);
  const [g, c, b] = parts;
  assert.ok(Math.abs(g.t1 - 8.4) < 1e-9 && g.t0 === 0);
  assert.ok(Math.abs(c.t1 - c.t0 - 11.6) < 1e-9 && Math.abs(c.t0 - 8.4) < 1e-9);
  assert.ok(Math.abs(b.t1 - 23) < 1e-9 && Math.abs(b.t1 - b.t0 - 3) < 1e-9 && b.door === 1.2);
});

test("a bicycle garage next to the garage on the other side", () => {
  const p = layoutParts(20, { garage: "east", carportStalls: 2, stallWidth: 3, bike: "west" });
  assert.deepEqual(p.map((x) => x.type), ["bike", "carport", "garage"]);
  assert.equal(p[0].t0, 0);
});

test("pv block above the low eave and over a given position", () => {
  const g = pvGrid({ L: 23, W: 2.9, pitchDeg: 12, fill: false, rows: 1, cols: 2, orientation: "portrait", align: "low", uCenter: -7 });
  assert.equal(g.modules.length, 2);
  assert.ok(g.modules.every((m) => Math.abs(m.s - (0.25 + m.mh / 2)) < 1e-9));
  assert.ok(Math.abs((g.modules[0].u + g.modules[1].u) / 2 - -7) < 1e-9);
  const hi = pvGrid({ L: 23, W: 2.9, pitchDeg: 12, fill: false, rows: 1, cols: 1, orientation: "landscape", align: "high" });
  assert.ok(Math.abs(hi.modules[0].s + hi.modules[0].mh / 2 - (hi.slope - 0.25)) < 1e-9);
});

import { partsFromList, resolveParts, partsFromLayout } from "../src/lib/site.js";

test("explicit parts: far-left garage, a free garage, four stalls, bicycle room", () => {
  const parts = partsFromList(22.9, [
    { type: "garage", len: 5.3 },
    { type: "garage" },
    { type: "carport", stalls: 4, stallWidth: 2.9 },
    { type: "bike", len: 3, door: 1.2 },
  ]);
  assert.deepEqual(parts.map((p) => p.type), ["garage", "garage", "carport", "bike"]);
  assert.equal(parts[0].t0, 0);
  assert.ok(Math.abs(parts[0].t1 - 5.3) < 1e-9);
  assert.ok(Math.abs(parts[1].t1 - parts[1].t0 - 3.0) < 1e-9); // the free garage takes the rest
  assert.ok(Math.abs(parts[2].t1 - parts[2].t0 - 11.6) < 1e-9 && parts[2].stalls === 4);
  assert.ok(Math.abs(parts[3].t1 - 22.9) < 1e-9 && parts[3].door === 1.2);
  assert.deepEqual(parts.map((p) => p.index), [0, 1, 2, 3]);
});

test("several free parts share the rest, too much fixed length is scaled down", () => {
  const shared = partsFromList(10, [{ type: "garage" }, { type: "garage" }, { type: "bike", len: 2 }]);
  assert.ok(Math.abs(shared[0].t1 - 4) < 1e-9 && Math.abs(shared[1].t1 - 8) < 1e-9);
  const scaled = partsFromList(10, [{ type: "garage", len: 8 }, { type: "bike", len: 4 }]);
  assert.ok(Math.abs(scaled[1].t1 - 10) < 1e-9);
});

test("older layout objects still work and convert to a list", () => {
  const layout = { garage: "west", carportStalls: 4, stallWidth: 2.9, bike: "east", bikeWidth: 3, bikeDoor: 1.2 };
  assert.deepEqual(resolveParts(23, { layout }).map((p) => p.type), ["garage", "carport", "bike"]);
  const list = partsFromLayout(23, layout);
  assert.deepEqual(list.map((p) => p.type), ["garage", "carport", "bike"]);
  assert.deepEqual(resolveParts(23, { parts: list }).map((p) => [p.t0.toFixed(2), p.t1.toFixed(2)]), resolveParts(23, { layout }).map((p) => [p.t0.toFixed(2), p.t1.toFixed(2)]));
  assert.equal(resolveParts(23, {}), null);
});
