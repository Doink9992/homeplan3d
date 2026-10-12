import { normalizeHistory } from "../lib/history.js";

/** Recorder history for some entities: { entity: [{ t, s, a }] }. Throws when the recorder/history is unavailable. */
export async function fetchHistory(hass, entityIds, start, end, { attrs = false } = {}) {
  const ids = [...new Set(entityIds.filter(Boolean))];
  if (!ids.length) return {};
  const res = await hass.callWS({
    type: "history/history_during_period",
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    entity_ids: ids,
    include_start_time_state: true,
    significant_changes_only: false,
    minimal_response: !attrs,
    no_attributes: !attrs,
  });
  return normalizeHistory(res);
}
