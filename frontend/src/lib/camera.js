// Camera geometry and detection helpers. Pure, no THREE/DOM.

/** Viewing direction in plan axes for a yaw in degrees (same convention as furniture: 0 looks along +z). */
export function forward(rotDeg) {
  const r = (rotDeg * Math.PI) / 180;
  return [-Math.sin(r), Math.cos(r)];
}

/** Floor wedge of a camera's field of view: apex first, then points along the arc. */
export function wedge(x, z, rotDeg, fovDeg, reach, steps = 18) {
  const f = forward(rotDeg);
  const base = Math.atan2(f[1], f[0]);
  const half = (fovDeg * Math.PI) / 360;
  const pts = [[x, z]];
  for (let i = 0; i <= steps; i++) {
    const a = base - half + (2 * half * i) / steps;
    pts.push([x + reach * Math.cos(a), z + reach * Math.sin(a)]);
  }
  return pts;
}

/** Vertical field of view (degrees) for a horizontal one and the viewport aspect ratio (w / h). */
export function viewFov(hfovDeg, aspect) {
  return (2 * Math.atan(Math.tan((hfovDeg * Math.PI) / 360) / Math.max(0.2, aspect)) * 180) / Math.PI;
}

const KINDS = [
  ["person", "🚶", /person|human|people|mensch|face|gesicht/i],
  ["vehicle", "🚗", /vehicle|car\b|truck|auto|fahrzeug|bus\b|motorcycle|bicycle|lkw|pkw/i],
  ["animal", "🐾", /animal|dog|cat\b|bird|tier|pet\b|hund|katze|vogel/i],
  ["package", "📦", /package|paket|parcel/i],
  ["motion", "〰", /motion|bewegung|movement|moving/i],
];

/** What a sensor on a camera's device detects: { kind, icon } or null. */
export function detectionKind(entityId, name = "", deviceClass = "") {
  const text = `${entityId} ${name}`;
  for (const [kind, icon, re] of KINDS) if (re.test(text)) return { kind, icon };
  if (["motion", "occupancy", "moving"].includes(deviceClass)) return { kind: "motion", icon: "〰" };
  return null;
}

/** Times (ms) at which a binary series switched on within the last `windowMs`. */
export function onEvents(series, now, windowMs) {
  const out = [];
  let prev = null;
  for (const e of series || []) {
    if (e.s === "on" && prev !== "on" && e.t >= now - windowMs && e.t <= now) out.push({ t: e.t, age: (now - e.t) / windowMs });
    prev = e.s;
  }
  return out;
}

export const hhmm = (ms) => new Date(ms).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });

/** Camera token from an entity_picture URL (…?token=…), for the MJPEG stream. */
export function tokenOf(picture) {
  return /[?&]token=([^&]+)/.exec(picture || "")?.[1] || null;
}
