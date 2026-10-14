import * as THREE from "three";
import { Feature, glowTexture } from "./base.js";
import { binKind, dateKey, findSources, kindsFromAttributes, kindsFromEvents, KINDS } from "../lib/waste.js";
import { openSettings } from "./settings-ui.js";

/**
 * Waste bins glow the day before their collection. The dates come from a sensor whose attributes map dates to waste
 * types (Waste Collection Schedule) or from a waste calendar; bins are furniture of type `bin`, matched by `waste`
 * (paper | yellow | rest | bio) or by their name (Blaue Tonne, Gelbe Tonne, Schwarze Tonne, Braune Tonne ...).
 */
export class WasteFeature extends Feature {
  get id() { return "waste"; }
  get label() { return "🗑 Müll"; }
  get title() { return "Mülltonnen leuchten am Tag vor der Abholung"; }
  get settingsLabel() { return "🗑 Müllabfuhr"; }
  available() { return !!this.bins?.length; }
  cfg() { return { days: 1, ...(this.settings.waste || {}) }; }

  build(anchors) {
    const tex = glowTexture();
    this.bins = anchors.furniture.filter((a) => a.f.type === "bin").map((a) => {
      const kind = binKind(a.f);
      const col = new THREE.Color(a.f.color || "#9aa5c0"); // the bin keeps its own colour while it glows
      // only the halo of a very dark bin is lifted (a black halo would not show at all)
      const halo = col.clone();
      const hsl = {};
      halo.getHSL(hsl);
      if (hsl.l < 0.3) halo.setHSL(hsl.h, Math.min(hsl.s, 0.2), 0.55);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: halo, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }));
      glow.position.set(a.x, a.top - a.h * 0.45, a.z);
      glow.scale.setScalar(2.2);
      glow.renderOrder = 7;
      glow.visible = false;
      this.group.add(glow);
      return { a, kind, glow, col, base: a.mats.map((m) => ({ m, e: m.emissive.clone(), i: m.emissiveIntensity })), lit: false };
    });
    this.cal = null;
    this.calAt = 0;
    this.calKey = null;
    this.kinds = new Set();
  }

  /** Kinds collected on the target day, from the configured / detected sources (all sensors and all calendars together). */
  collect(states) {
    const c = this.cfg(), key = dateKey(Date.now(), c.days);
    const srcs = findSources(states, c.entity);
    this.srcs = srcs;
    this.src = srcs[0] || null;
    const out = new Set();
    for (const s of srcs) if (s.type === "sensor") kindsFromAttributes(states[s.entity]?.attributes, key).forEach((k) => out.add(k));
    const cals = srcs.filter((s) => s.type === "calendar");
    if (cals.length) {
      // calendars: fetch the day's events now and then (and again when the target day changes)
      const now = Date.now();
      if ((now - this.calAt > 30 * 60000 || this.calKey !== key) && this.view.hass?.callApi) {
        this.calAt = now;
        this.calKey = key;
        const start = new Date(); start.setDate(start.getDate() + c.days); start.setHours(0, 0, 0, 0);
        const end = new Date(start); end.setDate(end.getDate() + 1);
        const q = `start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`;
        Promise.all(cals.map((s) => this.view.hass.callApi("GET", `calendars/${s.entity}?${q}`).then((ev) => kindsFromEvents(ev, key)).catch(() => [])))
          .then((all) => { this.cal = [...new Set(all.flat())]; this.update(this.states); });
      }
      (this.cal || []).forEach((k) => out.add(k));
    }
    return out;
  }

  update(states) {
    if (!this.bins) return;
    this.kinds = this.collect(states);
    const names = [];
    this.bins.forEach((b) => {
      b.lit = !!b.kind && this.kinds.has(b.kind);
      b.glow.visible = b.lit;
      b.base.forEach((x) => {
        if (b.lit) { x.m.emissive.copy(b.col); x.m.emissiveIntensity = 0.5; } else { x.m.emissive.copy(x.e); x.m.emissiveIntensity = x.i; }
      });
      if (b.lit) names.push(KINDS[b.kind].label);
    });
    const c = this.cfg();
    this.view.setChip("waste", names.length ? `🗑 ${c.days === 1 ? "Morgen" : `In ${c.days} Tagen`}: ${[...new Set(names)].join(", ")}` : "");
  }

  tick(_dt, t) {
    this.bins?.forEach((b) => {
      if (!b.lit) return;
      const k = 0.75 + 0.25 * Math.sin(t * 3);
      b.glow.material.opacity = k;
      b.glow.scale.setScalar(2.0 + 0.4 * Math.sin(t * 3));
      b.base.forEach((x) => (x.m.emissiveIntensity = 0.35 + 0.35 * k)); // gentle: the colour of the bin must stay recognisable
    });
  }

  reset() {
    this.bins?.forEach((b) => {
      b.lit = false;
      b.glow.visible = false;
      b.base.forEach((x) => { x.m.emissive.copy(x.e); x.m.emissiveIntensity = x.i; });
    });
    this.view.setChip("waste", "");
  }
  dispose() {
    this.view.setChip("waste", "");
    this.bins = null;
  }

  openSettings() {
    const obj = (this.settings.waste = { days: 1, ...(this.settings.waste || {}) });
    openSettings(this.view, {
      title: "🗑 Müllabfuhr",
      obj,
      note: `Quelle der Abholtermine: ein Sensor, dessen Attribute Datum → Müllart enthalten (Waste Collection Schedule), oder ein Müll-Kalender. Leer = automatisch (alle Müll-Kalender zusammen, z. B. ein Kalender je Jahr${this.srcs?.length ? `; gefunden: ${this.srcs.map((x) => x.entity).join(", ")}` : ""}). Mehrere Quellen mit Komma trennen. Die Tonnen sind Möbel vom Typ <b>bin</b>; Blau = Papier, Gelb = Gelber Sack, Schwarz = Restmüll, Braun = Bio, erkannt am Namen.`,
      fields: [
        { k: "entity", l: "Sensor oder Kalender, mehrere mit Komma (leer = automatisch)", t: "entity", p: "sensor.naechste_leerung" },
        { k: "days", l: "Tage vor der Abholung leuchten", t: "number", s: 1 },
      ],
    });
  }
}
