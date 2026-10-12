// Find the entities of a car (battery, range, charging, lock, climate ...) from one entity of its device. Pure.

const ROLES = ["battery", "range", "charging", "power", "lock", "climate", "switch", "tracker"];

/**
 * @param base       any entity of the car (its siblings on the same device are searched)
 * @param entities   hass.entities (registry display entries: { device_id, hidden, ... })
 * @param states     hass.states
 * @param overrides  manually chosen entities per role (win over detection)
 */
export function detectCarRoles(base, entities, states, overrides = {}) {
  const dev = base ? entities?.[base]?.device_id : null;
  const sibs = dev ? Object.keys(entities).filter((e) => entities[e].device_id === dev && states[e] && !entities[e].hidden) : base && states[base] ? [base] : [];
  const cls = (e) => states[e]?.attributes?.device_class;
  const find = (pred) => sibs.find(pred) || null;
  const sensor = (e) => e.startsWith("sensor.");
  const found = {
    battery: find((e) => sensor(e) && cls(e) === "battery" && !/12v|aux|key|fob/.test(e)) || find((e) => sensor(e) && /battery_level|state_of_charge|soc|charge_level|ladestand/.test(e)),
    range: find((e) => sensor(e) && /range|reichweite/.test(e) && !/charge_time|time/.test(e)),
    charging: find((e) => e.startsWith("binary_sensor.") && (cls(e) === "battery_charging" || /charging|laden/.test(e))),
    power: find((e) => sensor(e) && cls(e) === "power" && /charg|lade/.test(e)),
    lock: find((e) => e.startsWith("lock.")),
    climate: find((e) => e.startsWith("climate.")),
    switch: find((e) => (e.startsWith("switch.") || e.startsWith("button.")) && /charg|lade/.test(e)),
    tracker: find((e) => e.startsWith("device_tracker.")),
  };
  const out = {};
  for (const r of ROLES) out[r] = overrides[r] || found[r] || null;
  return out;
}

/** Colour for a charge level (hex number). */
export function chargeColor(pct) {
  if (pct == null || Number.isNaN(pct)) return 0x19e6ff;
  if (pct < 20) return 0xff3b3b;
  if (pct < 50) return 0xffb347;
  return 0x3dff9a;
}

/** Readable summary values from the role states. */
export function carSummary(roles, states) {
  const num = (e) => { const v = e && states[e] ? parseFloat(states[e].state) : NaN; return Number.isFinite(v) ? v : null; };
  const unit = (e) => states[e]?.attributes?.unit_of_measurement || "";
  const on = (e) => !!e && ["on", "heat", "cool", "heat_cool", "auto", "charging"].includes(states[e]?.state);
  const trackerState = roles.tracker ? states[roles.tracker]?.state : null;
  let power = num(roles.power);
  if (power != null && unit(roles.power).toLowerCase() === "w") power /= 1000;
  return {
    battery: num(roles.battery),
    range: num(roles.range),
    rangeUnit: unit(roles.range) || "km",
    charging: on(roles.charging) || (power != null && power > 0.05),
    power,
    locked: roles.lock ? states[roles.lock]?.state === "locked" : null,
    climateOn: on(roles.climate),
    away: trackerState != null && trackerState !== "home" && trackerState !== "unknown",
  };
}
