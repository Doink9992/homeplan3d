import test from "node:test";
import assert from "node:assert/strict";
import { kindsOf, binKind, dateKey, kindsFromAttributes, kindsFromEvents, findSource, findSources } from "../src/lib/waste.js";

test("collection texts map to bin kinds", () => {
  assert.deepEqual(kindsOf("BioMüll"), ["bio"]);
  assert.deepEqual(kindsOf("Restmüll"), ["rest"]);
  assert.deepEqual(kindsOf("Papier, Gelbe Tonne"), ["paper", "yellow"]);
  assert.deepEqual(kindsOf("Gelber Sack"), ["yellow"]);
  assert.deepEqual(kindsOf("Schulferien"), []);
});

test("a bin's kind comes from `waste` or its name", () => {
  assert.equal(binKind({ waste: "bio", name: "x" }), "bio");
  assert.equal(binKind({ name: "Blaue Tonne" }), "paper");
  assert.equal(binKind({ name: "Schwarze Tonne" }), "rest");
  assert.equal(binKind({ name: "Braune Tonne" }), "bio");
  assert.equal(binKind({ name: "Gelbe Tonne" }), "yellow");
  assert.equal(binKind({ name: "Eimer" }), null);
});

test("tomorrow as a local date key, also over a month end", () => {
  assert.equal(dateKey(new Date(2026, 9, 12, 20, 0), 1), "2026-10-13");
  assert.equal(dateKey(new Date(2026, 9, 31, 23, 30), 1), "2026-11-01");
});

test("sensor attributes with dates", () => {
  const a = { "2026-10-13": "Papier, Restmüll", "2026-10-14": "BioMüll", friendly_name: "x" };
  assert.deepEqual(kindsFromAttributes(a, "2026-10-13"), ["paper", "rest"]);
  assert.deepEqual(kindsFromAttributes(a, "2026-10-15"), []);
});

test("calendar events: all-day end is exclusive", () => {
  const ev = [{ summary: "Gelbe Tonne", start: { date: "2026-10-13" }, end: { date: "2026-10-14" } }, { summary: "BioMüll", start: { date: "2026-10-12" }, end: { date: "2026-10-13" } }];
  assert.deepEqual(kindsFromEvents(ev, "2026-10-13"), ["yellow"]);
  assert.deepEqual(kindsFromEvents(ev, "2026-10-12"), ["bio"]);
});

test("finds the source: configured, date sensor, calendar", () => {
  const states = {
    "sensor.nachste_leerung": { state: "x", attributes: { friendly_name: "Nächste Leerung", "2026-10-14": "BioMüll", "2026-10-21": "Restmüll" } },
    "sensor.other": { state: "1", attributes: { "2026-10-14": "a", "2026-10-15": "b", "2026-10-16": "c" } },
    "calendar.muell": { state: "on", attributes: { friendly_name: "Müll" } },
  };
  assert.equal(findSource(states, "calendar.muell").type, "calendar");
  assert.equal(findSource(states).entity, "sensor.nachste_leerung");
  delete states["sensor.nachste_leerung"]; delete states["sensor.other"];
  assert.deepEqual(findSource(states), { entity: "calendar.muell", type: "calendar" });
  assert.equal(findSource({}), null);
});

test("findSources reads every waste calendar (one per year) and honours a list", () => {
  const states = {
    "calendar.ics_2": { state: "unavailable", attributes: { friendly_name: "Müll 25" } },
    "calendar.ics_3": { state: "on", attributes: { friendly_name: "Waste Collection Schedule Müll26" } },
    "calendar.mull27": { state: "off", attributes: { friendly_name: "Müll27" } },
    "calendar.privat": { state: "on", attributes: { friendly_name: "Privat" } },
    "sensor.restmull": { state: "unknown", attributes: { friendly_name: "Restmüll" } },
  };
  assert.deepEqual(findSources(states).map((s) => s.entity), ["calendar.ics_3", "calendar.mull27"]);
  assert.deepEqual(findSources(states, "calendar.mull27, calendar.ics_3").map((s) => s.entity), ["calendar.mull27", "calendar.ics_3"]);
  assert.deepEqual(findSources(states, ["calendar.mull27", "calendar.gibtsnicht"]).map((s) => s.entity), ["calendar.mull27"]);
  states["sensor.leerung"] = { state: "x", attributes: { "2026-10-14": "BioMüll", "2026-10-21": "Restmüll" } };
  assert.deepEqual(findSources(states), [{ entity: "sensor.leerung", type: "sensor" }]);
  assert.deepEqual(findSources({}), []);
});
