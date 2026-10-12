import test from "node:test";
import assert from "node:assert/strict";
import { mapWeather, skyDirection, windToKmh } from "../src/lib/weathermap.js";

test("rain and clouds from the state", () => {
  const w = mapWeather("rainy", {}, { state: "above_horizon", attributes: { elevation: 30, azimuth: 180 } });
  assert.ok(w.rain > 0 && w.snow === 0 && w.cloud > 0.5 && !w.night);
});

test("cloud_coverage overrides the state default", () => {
  assert.equal(mapWeather("sunny", { cloud_coverage: 40 }).cloud, 0.4);
});

test("night follows the sun entity", () => {
  assert.equal(mapWeather("cloudy", {}, { state: "below_horizon", attributes: {} }).night, true);
  assert.equal(mapWeather("clear-night").night, true);
});

test("wind speed units and slant", () => {
  assert.equal(windToKmh(10, "m/s"), 36);
  const w = mapWeather("rainy", { wind_speed: 60, wind_speed_unit: "km/h" });
  assert.equal(Math.round(w.windAngle), 35);
});

test("sun direction: south at noon with north up is +z", () => {
  const d = skyDirection(180, 0, 0);
  assert.ok(Math.abs(d.x) < 1e-9 && Math.abs(d.z - 1) < 1e-9 && Math.abs(d.y) < 1e-9);
  const east = skyDirection(90, 0, 0);
  assert.ok(Math.abs(east.x - 1) < 1e-9);
  const up = skyDirection(0, 90, 0);
  assert.ok(Math.abs(up.y - 1) < 1e-9);
});

test("plan north offset rotates the sky", () => {
  const d = skyDirection(0, 0, 90); // north points to plan-right
  assert.ok(Math.abs(d.x - 1) < 1e-9);
});
