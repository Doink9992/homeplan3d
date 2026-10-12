// Picture rules for screens: when an entity's state/attribute matches, a picture is shown. Pure logic.

/** equal-or-contains (case-insensitive); `*` alone matches anything, `*` inside is a wildcard */
export function matchValue(value, pattern) {
  if (pattern == null) return false;
  const p = String(pattern).trim().toLowerCase();
  if (p === "") return false;
  if (p === "*") return true;
  const v = String(value ?? "").toLowerCase();
  if (p.includes("*")) {
    const re = new RegExp("^" + p.split("*").map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join(".*") + "$");
    return re.test(v);
  }
  return v === p || v.includes(p);
}

/** First rule that matches the current states. A rule: { entity?, attr?, match, image, bg? }. */
export function pickRule(rules, states, defaultEntity) {
  for (const r of rules || []) {
    const s = states[r.entity || defaultEntity];
    if (!s) continue;
    const value = r.attr ? s.attributes?.[r.attr] : s.state;
    if (matchValue(value, r.match)) return r;
  }
  return null;
}

const APP_COLORS = [
  ["netflix", "#e50914"], ["youtube", "#ff1a1a"], ["prime", "#00a8e1"], ["amazon", "#00a8e1"], ["disney", "#1b46c9"], ["spotify", "#1db954"],
  ["plex", "#e5a00d"], ["kodi", "#17b2e7"], ["max", "#5822b4"], ["hbo", "#5822b4"], ["apple", "#9aa0a6"], ["twitch", "#9146ff"],
  ["tagesschau", "#0a3a78"], ["zdf", "#fa7d19"], ["ard", "#0a56b8"], ["rtl", "#e30613"], ["sky", "#0072c9"], ["dazn", "#d6ff00"], ["paramount", "#0064ff"],
];

/** Brand-ish colour for a running app / source name, or null. */
export function appColor(name) {
  const n = String(name || "").toLowerCase();
  if (!n) return null;
  return APP_COLORS.find(([k]) => n.includes(k))?.[1] || null;
}

/** Is this a reference to a camera entity (rule image) rather than a URL? */
export const isCameraRef = (img) => typeof img === "string" && /^camera\.[\w]+$/.test(img);
