// Helpers for recorder history (from `history/history_during_period`). Pure.

/** Convert the compressed websocket result into { entity: [{ t (ms), s (state), a (attributes) }] }, sorted by time. */
export function normalizeHistory(res) {
  const out = {};
  for (const [id, arr] of Object.entries(res || {})) {
    out[id] = (arr || [])
      .map((e) => {
        const secs = e.lu ?? e.lc;
        const t = secs != null ? secs * 1000 : Date.parse(e.last_updated || e.last_changed || 0);
        return { t, s: e.s ?? e.state, a: e.a ?? e.attributes ?? null };
      })
      .filter((e) => Number.isFinite(e.t))
      .sort((x, y) => x.t - y.t);
  }
  return out;
}

/** State of a series at time t (ms): the last entry at or before t, or undefined. */
export function stateAt(series, t) {
  if (!series?.length || t < series[0].t) return undefined;
  let lo = 0, hi = series.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (series[mid].t <= t) lo = mid; else hi = mid - 1;
  }
  return series[lo];
}

export function numericPoints(series) {
  return (series || []).map((e) => ({ t: e.t, v: Number(e.s) })).filter((p) => Number.isFinite(p.v));
}

/** Energy in kWh for a power series in watts (step-wise hold), between t0 and t1 (ms). */
export function integrateKwh(points, t0, t1) {
  let e = 0;
  for (let i = 0; i < points.length; i++) {
    const a = Math.max(points[i].t, t0);
    const b = Math.min(i + 1 < points.length ? points[i + 1].t : t1, t1);
    if (b > a) e += Math.max(0, points[i].v) * ((b - a) / 3.6e6); // W * h
  }
  return e / 1000;
}

/** n evenly spaced values over [t0, t1] (last known value, hold) for sparklines. */
export function bucket(points, t0, t1, n) {
  const out = new Array(n).fill(null);
  let j = 0, last = null;
  for (let i = 0; i < n; i++) {
    const t = t0 + ((t1 - t0) * (i + 0.5)) / n;
    while (j < points.length && points[j].t <= t) { last = points[j].v; j++; }
    out[i] = last;
  }
  return out;
}
