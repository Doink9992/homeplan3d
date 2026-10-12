import test from "node:test";
import assert from "node:assert/strict";
import { gateState, angleDelta, leafAngles } from "../src/lib/gate.js";

test("gate states from a Frigate classification or a contact", () => {
  assert.equal(gateState("Auf"), "open");
  assert.equal(gateState("Zu"), "closed");
  assert.equal(gateState("open"), "open");
  assert.equal(gateState("closed"), "closed");
  assert.equal(gateState("unknown"), null);
  assert.equal(gateState("irgendwas"), null);
  assert.equal(gateState("Offen", { openStates: ["Offen"], closedStates: ["Dicht"] }), "open");
  assert.equal(gateState("dicht", { openStates: ["Offen"], closedStates: ["Dicht"] }), "closed");
});

test("shortest angle between two directions", () => {
  assert.ok(Math.abs(angleDelta(0, Math.PI / 2) - Math.PI / 2) < 1e-9);
  assert.ok(Math.abs(angleDelta(Math.PI / 2, -Math.PI / 2 + 0.2) - (-Math.PI + 0.2)) < 1e-9);
  assert.ok(Math.abs(angleDelta(3, -3)) < 0.3); // across the wrap-around
});

test("a gate across a north-south line swings its leaves east", () => {
  const l = leafAngles([-3, 4.58], [-3, 10.82], [1, 0]);
  // leaf A hangs in the north and points south (+z) when closed: a quarter turn to the east (+x)
  assert.ok(Math.abs(l.A.closed - Math.PI / 2) < 1e-9);
  assert.ok(Math.abs(l.A.open - 0) < 1e-9);
  // leaf B hangs in the south and points north when closed
  assert.ok(Math.abs(l.B.closed - (Math.PI / 2 + Math.PI)) < 1e-9);
  assert.ok(Math.abs(((l.B.open % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) < 1e-9);
});
