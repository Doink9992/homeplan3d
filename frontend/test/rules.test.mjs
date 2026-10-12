import test from "node:test";
import assert from "node:assert/strict";
import { matchValue, pickRule, appColor, isCameraRef } from "../src/lib/rules.js";

test("equal or contains, case-insensitive", () => {
  assert.ok(matchValue("Netflix", "netflix"));
  assert.ok(matchValue("com.netflix.ninja", "netflix"));
  assert.ok(!matchValue("youtube", "netflix"));
});

test("star matches anything, inner star is a wildcard, empty never matches", () => {
  assert.ok(matchValue("whatever", "*"));
  assert.ok(matchValue("Disney+ Hotstar", "disney*star"));
  assert.ok(!matchValue("x", ""));
  assert.ok(!matchValue("x", null));
});

test("first matching rule wins, attribute or state", () => {
  const states = {
    "media_player.tv": { state: "playing", attributes: { app_name: "YouTube" } },
    "alarm.home": { state: "triggered", attributes: {} },
  };
  const rules = [
    { entity: "alarm.home", match: "triggered", image: "alarm" },
    { attr: "app_name", match: "youtube", image: "yt" },
    { match: "playing", image: "generic" },
  ];
  assert.equal(pickRule(rules, states, "media_player.tv").image, "alarm");
  assert.equal(pickRule(rules.slice(1), states, "media_player.tv").image, "yt");
  assert.equal(pickRule([{ match: "off", image: "x" }], states, "media_player.tv"), null);
  assert.equal(pickRule([{ entity: "missing.one", match: "*", image: "x" }], states, null), null);
});

test("app colours and camera references", () => {
  assert.equal(appColor("Netflix"), "#e50914");
  assert.equal(appColor("some unknown app"), null);
  assert.ok(isCameraRef("camera.hof"));
  assert.ok(!isCameraRef("https://x/y.png"));
});
