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
 * Split a building of length L (m) into garage / open bay / carport along its long side, measured from the west end.
 * layout: { garage: "west" | "east" | "none", carportStalls, stallWidth, garageLen? }. Returns null without a layout.
 */
export function layoutParts(L, layout) {
  if (!layout) return null;
  const stalls = Math.max(0, Math.round(Number(layout.carportStalls) || 0));
  const sw = Number(layout.stallWidth) || 2.9;
  const side = layout.garage || (stalls ? "west" : "none");
  if (!stalls && side === "none") return null;
  const carLen = Math.min(L, stalls * sw);
  const garLen = side === "none" ? 0 : Math.max(0, layout.garageLen != null && layout.garageLen !== "" ? Math.min(Number(layout.garageLen), L - carLen) : L - carLen);
  const gap = Math.max(0, L - carLen - garLen);
  const part = (type, t0, t1, extra = {}) => (t1 - t0 > 0.05 ? [{ type, t0, t1, ...extra }] : []);
  const carport = { stalls, stallWidth: stalls ? carLen / stalls : sw };
  if (side === "east") return [...part("carport", 0, carLen, carport), ...part("open", carLen, carLen + gap), ...part("garage", L - garLen, L)];
  return [...part("garage", 0, garLen), ...part("open", garLen, garLen + gap), ...part("carport", L - carLen, L, carport)];
}

/**
 * PV module grid on a shed roof: columns along the ridge, rows up the slope. Sizes in metres.
 * orientation: "landscape" | "portrait" | "auto" (whichever fits more modules; legacy `portrait` boolean is honoured).
 */
export function pvGrid({ L, W, pitchDeg, orientation, portrait, fill = true, rows, cols, margin = 0.25, gap = 0.02 }) {
  const Ls = W / Math.cos((pitchDeg * Math.PI) / 180);
  const grid = (por) => {
    const mw = por ? 1.134 : 1.722; // along the ridge
    const mh = por ? 1.722 : 1.134; // up the slope
    const c = fill ? Math.max(0, Math.floor((L - 2 * margin + gap) / (mw + gap))) : Math.max(0, Math.round(cols ?? 1));
    const r = fill ? Math.max(0, Math.floor((Ls - 2 * margin + gap) / (mh + gap))) : Math.max(0, Math.round(rows ?? 1));
    const modules = [];
    for (let i = 0; i < c; i++)
      for (let j = 0; j < r; j++) modules.push({ u: (i - (c - 1) / 2) * (mw + gap), s: Ls / 2 + (j - (r - 1) / 2) * (mh + gap), mw, mh });
    return { cols: c, rows: r, modules, slope: Ls, portrait: por };
  };
  const o = orientation && orientation !== "auto" ? orientation : portrait != null && orientation !== "auto" ? (portrait ? "portrait" : "landscape") : "auto";
  if (o === "portrait") return grid(true);
  if (o === "landscape") return grid(false);
  const a = grid(false), b = grid(true);
  return b.modules.length > a.modules.length ? b : a;
}
