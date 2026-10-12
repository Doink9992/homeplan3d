import test from "node:test";
import assert from "node:assert/strict";
import { readPowers, computeFlows, fmtPower, flowSpeed } from "../src/lib/energy.js";
import { normalizeHistory, stateAt, numericPoints, integrateKwh, bucket } from "../src/lib/history.js";

const st = (state, unit) => ({ state: String(state), attributes: unit ? { unit_of_measurement: unit } : {} });

test("readPowers normalises units and inverts signs", () => {
  const p = readPowers(
    { solar: "s", grid: "g", grid_invert: true, battery: "b", battery_soc: "soc" },
    { s: st(1.5, "kW"), g: st(400, "W"), b: st(-200, "W"), soc: st(63, "%") },
  );
  assert.equal(p.solar, 1500);
  assert.equal(p.grid, -400); // inverted: the sensor reports export as positive
  assert.equal(p.battery, -200);
  assert.equal(p.soc, 63);
  assert.equal(readPowers({ solar: "x" }, {}).solar, null);
});

test("flows: solar covers the house, rest is exported", () => {
  const f = computeFlows({ solar: 2000, grid: -1000, battery: 0, consumption: 1000 });
  assert.equal(f.s2h, 1000);
  assert.equal(f.s2g, 1000);
  assert.equal(f.g2h, 0);
  assert.equal(f.autarky, 1);
});

test("flows: import when solar is not enough", () => {
  const f = computeFlows({ solar: 300, grid: 350, battery: 0, consumption: 650 });
  assert.equal(f.s2h, 300);
  assert.equal(f.g2h, 350);
  assert.ok(Math.abs(f.autarky - (1 - 350 / 650)) < 1e-9);
});

test("flows: battery charging from surplus, discharging into the house", () => {
  const c = computeFlows({ solar: 2400, grid: -1000, battery: -800, consumption: 600 });
  assert.equal(c.s2h, 600);
  assert.equal(c.s2b, 800);
  assert.equal(c.s2g, 1000);
  const d = computeFlows({ solar: 0, grid: 0, battery: 500, consumption: 500 });
  assert.equal(d.b2h, 500);
  assert.equal(d.autarky, 1);
});

test("consumption is derived when missing", () => {
  assert.equal(computeFlows({ solar: 500, grid: 200, battery: 100 }).H, 800);
});

test("formatting and speed", () => {
  assert.equal(fmtPower(1240), "1,24 kW");
  assert.equal(fmtPower(-35.4), "-35 W");
  assert.ok(flowSpeed(10) < flowSpeed(5000));
});

test("history: normalise, lookup, integrate, bucket", () => {
  const h = normalizeHistory({ "sensor.p": [{ s: "100", lu: 10 }, { s: "300", lu: 20 }, { s: "0", lc: 30 }] });
  const s = h["sensor.p"];
  assert.equal(s[0].t, 10000);
  assert.equal(stateAt(s, 25000).s, "300");
  assert.equal(stateAt(s, 5000), undefined);
  assert.equal(stateAt(s, 99999).s, "0");
  const pts = numericPoints([{ t: 0, s: "1000" }, { t: 3.6e6, s: "0" }, { t: 7.2e6, s: "bad" }]);
  assert.equal(pts.length, 2);
  assert.equal(integrateKwh(pts, 0, 7.2e6), 1); // 1 kW for 1 h
  assert.deepEqual(bucket([{ t: 0, v: 1 }, { t: 50, v: 2 }], 0, 100, 4), [1, 1, 2, 2]);
});

import { parseEnergyPrefs } from "../src/lib/energy.js";
test("energy dashboard preferences give power sensors", () => {
  const p = parseEnergyPrefs({
    energy_sources: [
      { type: "grid", flow_from: [], power: [{ stat_rate: "sensor.grid_w" }] },
      { type: "solar", stat_energy_from: "sensor.pv_kwh", stat_rate: "sensor.pv_w" },
      { type: "battery", stat_rate: "sensor.bat_w" },
      { type: "gas", stat_energy_from: "sensor.gas" },
    ],
  });
  assert.deepEqual(p, { grid: "sensor.grid_w", solar: "sensor.pv_w", battery: "sensor.bat_w" });
  assert.deepEqual(parseEnergyPrefs({ energy_sources: [{ type: "solar", stat_energy_from: "sensor.x" }] }), {});
});

test("grid flow is derived from consumption when there is no grid sensor", () => {
  const f = computeFlows({ solar: 265, grid: null, battery: null, consumption: 1500 });
  assert.equal(f.g, 1235);
  assert.equal(f.g2h, 1235);
  const e = computeFlows({ solar: 2000, grid: null, battery: null, consumption: 500 });
  assert.equal(e.g, -1500);
  assert.equal(e.s2g, 1500);
});
