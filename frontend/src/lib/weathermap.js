// Map a Home Assistant weather entity (+ sun.sun) to what the 3D scene should show. Pure, no THREE/DOM.
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const BY_STATE = {
  sunny: { cloud: 0 },
  "clear-night": { cloud: 0 },
  partlycloudy: { cloud: 0.45 },
  cloudy: { cloud: 0.85 },
  rainy: { rain: 0.55, cloud: 0.9 },
  pouring: { rain: 1, cloud: 1 },
  snowy: { snow: 0.7, cloud: 0.9 },
  "snowy-rainy": { rain: 0.35, snow: 0.5, cloud: 0.9 },
  hail: { rain: 0.8, snow: 0.3, cloud: 1 },
  lightning: { lightning: true, cloud: 0.95 },
  "lightning-rainy": { lightning: true, rain: 0.8, cloud: 1 },
  fog: { fog: 0.8, cloud: 0.75 },
  windy: { cloud: 0.3, wind: 1 },
  "windy-variant": { cloud: 0.7, wind: 1 },
  exceptional: { cloud: 0.6 },
};

const TO_KMH = { "km/h": 1, "m/s": 3.6, mph: 1.609, kn: 1.852, "ft/s": 1.097, "mm/s": 0.0036 };

export function windToKmh(value, unit = "km/h") {
  const v = Number(value);
  if (!Number.isFinite(v)) return 0;
  return v * (TO_KMH[String(unit).toLowerCase()] ?? 1);
}

/** What to show for a weather state. `sun` is the sun.sun state object ({state, attributes}). */
export function mapWeather(state, attrs = {}, sun = null) {
  const base = BY_STATE[state] || {};
  const out = { rain: 0, snow: 0, fog: 0, cloud: 0, lightning: false, windKmh: 0, ...base };
  if (attrs.cloud_coverage != null && Number.isFinite(Number(attrs.cloud_coverage))) out.cloud = clamp01(Number(attrs.cloud_coverage) / 100);
  out.windKmh = windToKmh(attrs.wind_speed, attrs.wind_speed_unit);
  if (!out.windKmh && base.wind) out.windKmh = 35;
  out.windAngle = clamp01(out.windKmh / 60) * 35; // slant of rain/snow in degrees
  out.windBearing = Number(attrs.wind_bearing) || 0;
  out.night = state === "clear-night" || sun?.state === "below_horizon";
  out.sunElevation = Number(sun?.attributes?.elevation);
  out.sunAzimuth = Number(sun?.attributes?.azimuth);
  return out;
}

export function weatherLabel(state) {
  return (
    {
      sunny: "Sonnig", "clear-night": "Klar", partlycloudy: "Teils bewölkt", cloudy: "Bewölkt", rainy: "Regen", pouring: "Starkregen",
      snowy: "Schnee", "snowy-rainy": "Schneeregen", hail: "Hagel", lightning: "Gewitter", "lightning-rainy": "Gewitter mit Regen",
      fog: "Nebel", windy: "Windig", "windy-variant": "Windig, bewölkt", exceptional: "Außergewöhnlich",
    }[state] || state
  );
}

/** Position of the sun/moon for the 3D scene: compass azimuth + elevation -> unit direction in plan axes (x right, z down, y up). */
export function skyDirection(azimuthDeg, elevationDeg, northDeg = 0) {
  const theta = ((northDeg + azimuthDeg) * Math.PI) / 180; // clockwise from plan-up (-z)
  const el = (elevationDeg * Math.PI) / 180;
  return { x: Math.sin(theta) * Math.cos(el), y: Math.sin(el), z: -Math.cos(theta) * Math.cos(el) };
}
