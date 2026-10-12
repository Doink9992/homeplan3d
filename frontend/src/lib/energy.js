// Power flows of a house with PV, grid, battery. Pure, no THREE/DOM.
// Conventions (same as the Home Assistant energy dashboard, in watts):
//   solar >= 0, grid > 0 = import / < 0 = export, battery > 0 = discharging / < 0 = charging.

const num = (v) => (Number.isFinite(Number(v)) ? Number(v) : null);

/** Read the configured entities and normalise signs to the convention above. Units kW -> W. */
export function readPowers(cfg, states) {
  const read = (id, invert = false) => {
    const s = id ? states[id] : null;
    if (!s) return null;
    let v = num(s.state);
    if (v == null) return null;
    const unit = String(s.attributes?.unit_of_measurement || "W").toLowerCase();
    if (unit === "kw") v *= 1000;
    else if (unit === "mw") v *= 1e6;
    return invert ? -v : v;
  };
  const soc = cfg.battery_soc && states[cfg.battery_soc] ? num(states[cfg.battery_soc].state) : null;
  return {
    solar: read(cfg.solar),
    grid: read(cfg.grid, !!cfg.grid_invert),
    battery: read(cfg.battery, !!cfg.battery_invert),
    consumption: read(cfg.consumption),
    wallbox: read(cfg.wallbox),
    soc,
  };
}

/** Flows between the nodes plus a few derived numbers. Missing values count as zero. */
export function computeFlows(p) {
  const S = Math.max(0, p.solar ?? 0);
  const b = p.battery ?? 0;
  // without a grid sensor the grid flow follows from house consumption, solar and battery
  const g = p.grid ?? (p.consumption != null ? p.consumption - S - b : 0);
  const H = p.consumption != null ? Math.max(0, p.consumption) : Math.max(0, S + g + b);
  const charge = Math.max(0, -b);
  const discharge = Math.max(0, b);
  const s2h = Math.min(S, H);
  const surplus = S - s2h;
  const s2b = Math.min(surplus, charge);
  const s2g = Math.max(0, Math.min(surplus - s2b, Math.max(0, -g) || surplus - s2b));
  const g2h = Math.max(0, g);
  const g2b = Math.max(0, charge - s2b);
  const b2h = discharge;
  const autarky = H > 0 ? Math.max(0, Math.min(1, 1 - g2h / H)) : 1;
  return { S, H, g, b, s2h, s2b, s2g, g2h, g2b, b2h, autarky, import: g2h, export: Math.max(0, -g) };
}

export function fmtPower(w) {
  const a = Math.abs(w);
  if (a >= 1000) return `${(w / 1000).toFixed(2).replace(".", ",")} kW`;
  return `${Math.round(w)} W`;
}

/** Dot speed (m/s) for a flow of w watts. */
export function flowSpeed(w) {
  return Math.max(0.25, Math.min(2.6, 0.25 + Math.log10(1 + Math.abs(w)) * 0.65));
}

/** Power sensors from the Home Assistant energy dashboard preferences (`energy/get_prefs`). */
export function parseEnergyPrefs(prefs) {
  const out = {};
  for (const src of prefs?.energy_sources || []) {
    const rate = src.stat_rate || src.power?.[0]?.stat_rate || src.power_config?.stat_rate || null;
    if (!rate) continue;
    if (src.type === "solar" && !out.solar) out.solar = rate;
    if (src.type === "grid" && !out.grid) out.grid = rate;
    if (src.type === "battery" && !out.battery) out.battery = rate;
  }
  return out;
}
