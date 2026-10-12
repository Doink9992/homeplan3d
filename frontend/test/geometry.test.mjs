import test from "node:test";
import assert from "node:assert/strict";
import { convexHull, obb, compassVectors } from "../src/util.js";

test("hull of a rectangle with inner points", () => {
  const h = convexHull([[0, 0], [4, 0], [4, 2], [0, 2], [2, 1], [1, 1]]);
  assert.equal(h.length, 4);
});

test("obb of an axis-aligned rectangle", () => {
  const o = obb([[0, 0], [10, 0], [10, 3], [0, 3]]);
  assert.ok(Math.abs(o.len - 10) < 1e-9 && Math.abs(o.wid - 3) < 1e-9);
  assert.ok(Math.abs(o.cx - 5) < 1e-9 && Math.abs(o.cz - 1.5) < 1e-9);
  assert.ok(Math.abs(Math.cos(o.ang)) > 0.999); // long side along x
});

test("obb of a rotated, slightly irregular polygon", () => {
  const a = 0.3, c = Math.cos(a), s = Math.sin(a);
  const rot = ([x, z]) => [x * c - z * s + 5, x * s + z * c + 2];
  const o = obb([[0, 0], [20, 0], [20.4, 3], [0, 3]].map(rot));
  assert.ok(o.len > 20 && o.len < 20.6 && o.wid > 2.9 && o.wid < 3.1);
  assert.ok(Math.abs(Math.atan2(Math.sin(o.ang - a), Math.cos(o.ang - a))) < 0.05 || Math.abs(Math.abs(o.ang - a) - Math.PI) < 0.05);
});

test("a tall rectangle reports its long side first", () => {
  const o = obb([[0, 0], [2, 0], [2, 9], [0, 9]]);
  assert.ok(Math.abs(o.len - 9) < 1e-9 && Math.abs(o.wid - 2) < 1e-9);
  assert.ok(Math.abs(Math.sin(o.ang)) > 0.999);
});

test("compass vectors follow the plan north", () => {
  const v = compassVectors(0);
  assert.deepEqual(v.north.map((x) => Math.round(x) + 0), [0, -1]);
  assert.deepEqual(v.south.map((x) => Math.round(x) + 0), [0, 1]);
  assert.deepEqual(v.east.map((x) => Math.round(x) + 0), [1, 0]);
  const r = compassVectors(90); // north points to plan-right
  assert.deepEqual(r.north.map((x) => Math.round(x) + 0), [1, 0]);
  assert.deepEqual(r.south.map((x) => Math.round(x) + 0), [-1, 0]);
});
