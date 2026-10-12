import test from "node:test";
import assert from "node:assert/strict";
import { forward, wedge, viewFov, detectionKind, onEvents, tokenOf, hhmm } from "../src/lib/camera.js";

const near = (a, b, e = 1e-9) => Math.abs(a - b) < e;

test("forward follows the furniture convention", () => {
  assert.ok(near(forward(0)[0], 0) && near(forward(0)[1], 1));
  assert.ok(near(forward(90)[0], -1) && near(forward(90)[1], 0));
});

test("wedge is a fan around the viewing direction", () => {
  const w = wedge(2, 3, 0, 90, 8, 4);
  assert.deepEqual(w[0], [2, 3]);
  assert.equal(w.length, 6);
  // the middle point lies straight ahead (+z)
  const mid = w[3];
  assert.ok(near(mid[0], 2, 1e-6) && near(mid[1], 3 + 8, 1e-6));
  // all arc points are `reach` away
  assert.ok(w.slice(1).every((p) => near(Math.hypot(p[0] - 2, p[1] - 3), 8, 1e-6)));
});

test("vertical fov from horizontal fov", () => {
  assert.ok(near(viewFov(90, 1), 90, 1e-6));
  assert.ok(viewFov(90, 16 / 9) < 60);
});

test("detection kinds", () => {
  assert.equal(detectionKind("binary_sensor.hof_person_occupancy").kind, "person");
  assert.equal(detectionKind("binary_sensor.hof_vehicle").icon, "🚗");
  assert.equal(detectionKind("binary_sensor.x", "Hund erkannt").kind, "animal");
  assert.equal(detectionKind("binary_sensor.y", "", "motion").kind, "motion");
  assert.equal(detectionKind("binary_sensor.door", "", "door"), null);
});

test("on events inside the window only", () => {
  const now = 10_000_000;
  const series = [
    { t: now - 3_000_000, s: "on" }, // too old for a 30 min window
    { t: now - 2_500_000, s: "off" },
    { t: now - 900_000, s: "on" },
    { t: now - 800_000, s: "on" }, // still on: not a new event
    { t: now - 100_000, s: "off" },
    { t: now - 50_000, s: "on" },
  ];
  const ev = onEvents(series, now, 1_800_000);
  assert.equal(ev.length, 2);
  assert.ok(ev[0].age > ev[1].age && ev[1].age < 0.05);
});

test("token and time", () => {
  assert.equal(tokenOf("/api/camera_proxy/camera.hof?token=abc123&x=1"), "abc123");
  assert.equal(tokenOf("/img.png"), null);
  assert.match(hhmm(Date.UTC(2026, 0, 1, 12, 30)), /\d\d:\d\d/);
});
