// Geometry helpers for buildings on the site (shed roof, garage + carport layout). Pure, no THREE/DOM.
import { obb, compassVectors } from "../util.js";

/**
 * Local frame of a building with a shed roof. Local x runs along the long side, local z across it;
 * local -z points to the HIGH side of the roof (which compass side that is: roof.high, default "south").
 * Plan coordinates of a local point: [cx + u cos(theta) + w sin(theta), cz - u sin(theta) + w cos(theta)].
 * `tToU(t)` maps a distance t from the WEST end of the building to local x.
 */
export function siteFrame(points, roof = {}, north = 0) {
  const o = obb(points);
  const cv = compassVectors(north);
  const want = cv[roof?.high || "south"] || cv.south;
  const across = [-Math.sin(o.ang), Math.cos(o.ang)];
  const dHigh = across[0] * want[0] + across[1] * want[1] >= 0 ? across : [-across[0], -across[1]];
  const theta = Math.atan2(-dHigh[0], -dHigh[1]);
  const flip = Math.cos(theta) < 0; // local +x points west
  return { cx: o.cx, cz: o.cz, L: o.len, W: o.wid, theta, dHigh, flip, tToU: (t) => (flip ? o.len / 2 - t : t - o.len / 2) };
}

export function localToPlan(f, u, w) {
  return [f.cx + u * Math.cos(f.theta) + w * Math.sin(f.theta), f.cz - u * Math.sin(f.theta) + w * Math.cos(f.theta)];
}

/**
 * Split a building of length L (m) into garage / open bay / carport / bicycle garage along its long side,
 * measured from the west end.
 * layout: { garage: "west" | "east" | "none", carportStalls, stallWidth, garageLen?, bike?: "east" | "west" | "none", bikeWidth?, bikeDoor? }.
 * The garage takes what is left unless garageLen is given. Returns null without a layout.
 */
export function layoutParts(L, layout) {
  if (!layout) return null;
  const stalls = Math.max(0, Math.round(Number(layout.carportStalls) || 0));
  const sw = Number(layout.stallWidth) || 2.9;
  const bikeSide = layout.bike && layout.bike !== "none" ? layout.bike : null;
  const side = layout.garage || (stalls || bikeSide ? "west" : "none");
  if (!stalls && side === "none" && !bikeSide) return null;
  const carLen = Math.min(L, stalls * sw);
  const bikeLen = bikeSide ? Math.min(Math.max(0, L - carLen), Number(layout.bikeWidth) || 3) : 0;
  const rest = Math.max(0, L - carLen - bikeLen);
  const garLen = side === "none" ? 0 : layout.garageLen != null && layout.garageLen !== "" ? Math.min(Number(layout.garageLen), rest) : rest;
  const gap = Math.max(0, rest - garLen);
  const carport = { stalls, stallWidth: stalls ? carLen / stalls : sw };
  const bike = { door: Number(layout.bikeDoor) || 1.2 };
  // order from west to east: the garage sits on its side, the bicycle garage at the opposite end by default
  const seq = [];
  const garageWest = side !== "east";
  const bikeWest = bikeSide ? bikeSide === "west" : !garageWest;
  if (bikeSide && bikeWest) seq.push(["bike", bikeLen, bike]);
  if (garageWest) { seq.push(["garage", garLen]); if (gap > 0.05) seq.push(["open", gap]); seq.push(["carport", carLen, carport]); }
  else { seq.push(["carport", carLen, carport]); if (gap > 0.05) seq.push(["open", gap]); seq.push(["garage", garLen]); }
  if (bikeSide && !bikeWest) seq.push(["bike", bikeLen, bike]);
  const out = [];
  let t = 0;
  for (const [type, len, extra] of seq) {
    if (len > 0.05) out.push({ type, t0: t, t1: t + len, ...(extra || {}) });
    t += len;
  }
  return out;
}

/**
 * PV module grid on a shed roof: columns along the ridge, rows up the slope. Sizes in metres.
 * orientation: "landscape" | "portrait" | "auto" (whichever fits more modules; legacy `portrait` boolean is honoured).
 */
export function pvGrid({ L, W, pitchDeg, orientation, portrait, fill = true, rows, cols, margin = 0.25, gap = 0.02, align = "center", uCenter = 0 }) {
  const Ls = W / Math.cos((pitchDeg * Math.PI) / 180);
  const grid = (por) => {
    const mw = por ? 1.134 : 1.722; // along the ridge
    const mh = por ? 1.722 : 1.134; // up the slope
    const c = fill ? Math.max(0, Math.floor((L - 2 * margin + gap) / (mw + gap))) : Math.max(0, Math.round(cols ?? 1));
    const r = fill ? Math.max(0, Math.floor((Ls - 2 * margin + gap) / (mh + gap))) : Math.max(0, Math.round(rows ?? 1));
    const modules = [];
    // rows are counted from the low eave upwards; align places the block at the low edge, the middle or the high edge
    const s0 = align === "low" ? margin + mh / 2 : align === "high" ? Ls - margin - mh / 2 - (r - 1) * (mh + gap) : Ls / 2 - ((r - 1) / 2) * (mh + gap);
    for (let i = 0; i < c; i++)
      for (let j = 0; j < r; j++) modules.push({ u: uCenter + (i - (c - 1) / 2) * (mw + gap), s: s0 + j * (mh + gap), mw, mh });
    return { cols: c, rows: r, modules, slope: Ls, portrait: por };
  };
  const o = orientation && orientation !== "auto" ? orientation : portrait != null && orientation !== "auto" ? (portrait ? "portrait" : "landscape") : "auto";
  if (o === "portrait") return grid(true);
  if (o === "landscape") return grid(false);
  const a = grid(false), b = grid(true);
  return b.modules.length > a.modules.length ? b : a;
}

export const PART_LABELS = { garage: "Garage", carport: "Carport", bike: "Fahrradgarage", open: "Unterstand" };

/**
 * Ordered parts of a building, west to east: [{ type: garage|carport|bike|open, len?, stalls?, stallWidth?, door?, name? }].
 * Parts without a length share what is left of L (carports are stalls * stallWidth long). When the fixed lengths
 * exceed L they are scaled down to fit.
 */
export function partsFromList(L, list) {
  const fixed = (p) => (p.type === "carport" ? Math.max(0, Math.round(Number(p.stalls) || 0)) * (Number(p.stallWidth) || 2.9) : p.len != null && p.len !== "" && Number(p.len) > 0 ? Number(p.len) : null);
  const lens = list.map(fixed);
  const sum = lens.reduce((s, v) => s + (v ?? 0), 0);
  const free = lens.filter((v) => v == null).length;
  const each = free ? Math.max(0, L - sum) / free : 0;
  const scale = !free && sum > L ? L / sum : 1;
  const out = [];
  let t = 0;
  list.forEach((p, i) => {
    const len = (lens[i] ?? each) * scale;
    if (len > 0.05) {
      const stalls = p.type === "carport" ? Math.max(1, Math.round(Number(p.stalls) || 1)) : undefined;
      out.push({ ...p, type: p.type || "garage", t0: t, t1: t + len, ...(stalls ? { stalls, stallWidth: len / stalls } : {}), index: i });
    }
    t += len;
  });
  return out;
}

/** Parts of a building from either its explicit `parts` list or the older single `layout`. */
export function resolveParts(L, b) {
  if (b?.parts?.length) return partsFromList(L, b.parts);
  return layoutParts(L, b?.layout);
}

/** Editable list that reproduces what an older `layout` object described. */
export function partsFromLayout(L, layout) {
  return (layoutParts(L, layout) || []).map((p) => (p.type === "carport" ? { type: "carport", stalls: p.stalls, stallWidth: +p.stallWidth.toFixed(2) } : p.type === "garage" || p.type === "open" ? { type: p.type, len: null } : { type: p.type, len: +(p.t1 - p.t0).toFixed(2), door: p.door }));
}
