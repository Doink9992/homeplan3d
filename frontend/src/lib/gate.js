// Gate helpers. Pure, no THREE/DOM.

const OPEN = ["auf", "offen", "open", "opened", "opening", "on", "geöffnet"];
const CLOSED = ["zu", "geschlossen", "closed", "closing", "off", "closed_"];

/** "open" | "closed" | null for the state of a gate entity (a Frigate state classification says "Auf" / "Zu"). */
export function gateState(state, cfg = {}) {
  const s = String(state ?? "").trim().toLowerCase();
  if (!s || s === "unknown" || s === "unavailable") return null;
  if ((cfg.openStates || OPEN).map((x) => x.toLowerCase()).includes(s)) return "open";
  if ((cfg.closedStates || CLOSED).map((x) => x.toLowerCase()).includes(s)) return "closed";
  return null;
}

/** Shortest signed angle (rad) from a to b. */
export function angleDelta(a, b) {
  let d = (b - a) % (2 * Math.PI);
  if (d > Math.PI) d -= 2 * Math.PI;
  if (d <= -Math.PI) d += 2 * Math.PI;
  return d;
}

/**
 * Plan directions (angle of the leaf in plan axes, atan2(dz, dx)) of the two leaves of a double gate across the
 * line a -> b, closed and swung open towards `inward` (a direction vector, default east).
 * Leaf A hangs at a and points to b, leaf B hangs at b and points to a.
 */
export function leafAngles(a, b, inward = [1, 0]) {
  const A = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const B = A + Math.PI;
  const open = Math.atan2(inward[1], inward[0]);
  return { A: { closed: A, open: A + angleDelta(A, open) }, B: { closed: B, open: B + angleDelta(B, open) } };
}
