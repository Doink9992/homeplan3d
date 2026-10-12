import test from "node:test";
import assert from "node:assert/strict";
import { detectCarRoles, chargeColor, carSummary } from "../src/lib/car.js";

const entities = {
  "sensor.ev_battery": { device_id: "ev" }, "sensor.ev_range": { device_id: "ev" }, "binary_sensor.ev_charging": { device_id: "ev" },
  "sensor.ev_charging_power": { device_id: "ev" }, "lock.ev_doors": { device_id: "ev" }, "climate.ev_preheat": { device_id: "ev" },
  "switch.ev_charge": { device_id: "ev" }, "device_tracker.ev": { device_id: "ev" }, "sensor.ev_12v_battery": { device_id: "ev" },
  "sensor.other": { device_id: "x" },
};
const states = {
  "sensor.ev_12v_battery": { state: "12.4", attributes: { device_class: "battery" } },
  "sensor.ev_battery": { state: "78", attributes: { device_class: "battery", unit_of_measurement: "%" } },
  "sensor.ev_range": { state: "312", attributes: { unit_of_measurement: "km" } },
  "binary_sensor.ev_charging": { state: "on", attributes: { device_class: "battery_charging" } },
  "sensor.ev_charging_power": { state: "11000", attributes: { device_class: "power", unit_of_measurement: "W" } },
  "lock.ev_doors": { state: "locked", attributes: {} },
  "climate.ev_preheat": { state: "off", attributes: {} },
  "switch.ev_charge": { state: "on", attributes: {} },
  "device_tracker.ev": { state: "home", attributes: {} },
  "sensor.other": { state: "1", attributes: {} },
};

test("roles are found on the same device", () => {
  const r = detectCarRoles("sensor.ev_range", entities, states);
  assert.equal(r.battery, "sensor.ev_battery"); // not the 12 V battery
  assert.equal(r.range, "sensor.ev_range");
  assert.equal(r.charging, "binary_sensor.ev_charging");
  assert.equal(r.power, "sensor.ev_charging_power");
  assert.equal(r.lock, "lock.ev_doors");
  assert.equal(r.climate, "climate.ev_preheat");
  assert.equal(r.switch, "switch.ev_charge");
  assert.equal(r.tracker, "device_tracker.ev");
});

test("overrides win, unknown base gives nothing", () => {
  assert.equal(detectCarRoles("sensor.ev_range", entities, states, { lock: "lock.other" }).lock, "lock.other");
  assert.equal(detectCarRoles("sensor.nope", entities, states).battery, null);
});

test("summary and colours", () => {
  const roles = detectCarRoles("sensor.ev_range", entities, states);
  const s = carSummary(roles, states);
  assert.equal(s.battery, 78);
  assert.equal(s.power, 11);
  assert.ok(s.charging && s.locked && !s.climateOn && !s.away);
  assert.equal(chargeColor(10), 0xff3b3b);
  assert.equal(chargeColor(35), 0xffb347);
  assert.equal(chargeColor(80), 0x3dff9a);
  assert.equal(chargeColor(null), 0x19e6ff);
  assert.equal(carSummary({ tracker: "device_tracker.ev" }, { "device_tracker.ev": { state: "not_home", attributes: {} } }).away, true);
});
