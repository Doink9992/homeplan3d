// Waste collection helpers. Pure, no THREE/DOM.

export const KINDS = {
  paper: { label: "Papier", re: /papier|pappe|karton|blau/i },
  yellow: { label: "Gelber Sack", re: /gelb|wertstoff|leichtverp|verpack/i },
  rest: { label: "Restmüll", re: /rest|schwarz|hausm|grau/i },
  bio: { label: "Bio", re: /bio|braun|küche|kueche|organ/i },
};

/** Which kinds of bin a collection text names ("BioMüll", "Papier, Restmüll" ...). */
export function kindsOf(text) {
  const t = String(text ?? "");
  return Object.keys(KINDS).filter((k) => KINDS[k].re.test(t));
}

/** Kind of a bin furniture item: explicit `waste`, else by its name. */
export function binKind(f) {
  if (KINDS[f.waste]) return f.waste;
  return kindsOf(`${f.name || ""}`)[0] || null;
}

const pad = (n) => String(n).padStart(2, "0");
/** Local date key YYYY-MM-DD, `days` after `now`. */
export function dateKey(now, days = 0) {
  const d = new Date(now);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const ISO = /^\d{4}-\d{2}-\d{2}$/;
export const isoKeys = (attrs) => Object.keys(attrs || {}).filter((k) => ISO.test(k));

/** Kinds collected on `key`, from a sensor whose attributes map dates to waste types (Waste Collection Schedule). */
export function kindsFromAttributes(attrs, key) {
  const v = attrs?.[key];
  return v == null ? [] : kindsOf(Array.isArray(v) ? v.join(", ") : v);
}

/** Kinds from calendar events ({ summary, start: {date|dateTime}, end }) that cover the day `key`. */
export function kindsFromEvents(events, key) {
  const out = new Set();
  for (const e of events || []) {
    const s = (e.start?.date || e.start?.dateTime || "").slice(0, 10);
    let en = (e.end?.date || e.end?.dateTime || "").slice(0, 10);
    if (!s) continue;
    const allDay = !!e.start?.date;
    if (!en || en < s) en = s;
    if (key >= s && (allDay ? key < en || s === en : key <= en)) kindsOf(e.summary).forEach((k) => out.add(k));
  }
  return [...out];
}

/** All waste calendars that are available (several years / several streams can live in separate calendars). */
function wasteCalendars(states) {
  return Object.keys(states).filter((e) => e.startsWith("calendar.") && states[e].state !== "unavailable" && /müll|muell|abfall|waste|leerung/i.test(`${e} ${states[e].attributes?.friendly_name || ""}`));
}

/**
 * The entity that knows the collection dates: the configured one, else a sensor with several date attributes
 * (preferring "Leerung" in its name), else a waste calendar. Returns { entity, type: "sensor" | "calendar" } or null.
 */
export function findSource(states, configured) {
  if (configured && states[configured]) return { entity: configured, type: configured.startsWith("calendar.") ? "calendar" : "sensor" };
  const sensors = Object.keys(states).filter((e) => e.startsWith("sensor.") && isoKeys(states[e].attributes).length >= 2);
  const score = (e) => (/leerung|abfall|müll|muell|waste/i.test(`${e} ${states[e].attributes?.friendly_name || ""}`) ? 1 : 0) * 100 + isoKeys(states[e].attributes).length;
  sensors.sort((a, b) => score(b) - score(a));
  if (sensors.length) return { entity: sensors[0], type: "sensor" };
  const cals = wasteCalendars(states);
  return cals.length ? { entity: cals[0], type: "calendar" } : null;
}

/**
 * Every entity to read the dates from. `configured` may be one entity, a comma separated list or an array; without it
 * the best date sensor, else ALL waste calendars (a calendar per year, e.g. "Müll26" and "Müll27", are read together).
 */
export function findSources(states, configured) {
  const list = (Array.isArray(configured) ? configured : String(configured ?? "").split(/[\s,;]+/)).filter((e) => e && states[e]);
  if (list.length) return list.map((entity) => ({ entity, type: entity.startsWith("calendar.") ? "calendar" : "sensor" }));
  const first = findSource(states, null);
  if (!first) return [];
  if (first.type === "sensor") return [first];
  return wasteCalendars(states).map((entity) => ({ entity, type: "calendar" }));
}
