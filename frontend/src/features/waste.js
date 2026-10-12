import * as THREE from "three";
import { Feature, glowTexture } from "./base.js";
import { binKind, dateKey, findSource, kindsFromAttributes, kindsFromEvents, KINDS } from "../lib/waste.js";
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
      const col = new THREE.Color(a.f.color || "#9aa5c0");
      // very dark bins would not show a glow: lift them
      const hsl = {};
      col.getHSL(hsl);
      if (hsl.l < 0.3) col.setHSL(hsl.h, Math.min(hsl.s, 0.2), 0.62);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: col, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }));
      glow.position.set(a.x, a.top - a.h * 0.45, a.z);
      glow.scale.setScalar(2.2);
      glow.renderOrder = 7;
      glow.visible = false;
      this.group.add(glow);
      return { a, kind, glow, col, base: a.mats.map((m) => ({ m, e: m.emissive.clone(), i: m.emissiveIntensity })), lit: false };
    });
    this.cal = null;
    this.calAt = 0;
    this.kinds = new Set();
  }

  /** Kinds collected on the target day, from the configured / detected source. */
  collect(states) {
    const c = this.cfg(), key = dateKey(Date.now(), c.days);
    const src = findSource(states, c.entity);
    this.src = src;
    if (!src) return new Set();
    if (src.type === "sensor") return new Set(kindsFromAttributes(states[src.entity]?.attributes, key));
    // calendar: fetch the day's events now and then
    const now = Date.now();
    if (now - this.calAt > 30 * 60000 && this.view.hass?.callApi) {
      this.calAt = now;
      const start = new Date(); start.setDate(start.getDate() + c.days); start.setHours(0, 0, 0, 0);
      const end = new Date(start); end.setDate(end.getDate() + 1);
      this.view.hass.callApi("GET", `calendars/${src.entity}?start=${encodeURIComponent(start.toISOString())}&end=${encodeURIComponent(end.toISOString())}`)
        .then((ev) => { this.cal = kindsFromEvents(ev, key); this.update(this.states); })
        .catch(() => { this.cal = []; });
    }
    return new Set(this.cal || []);
  }

  update(states) {
    if (!this.bins) return;
    this.kinds = this.collect(states);
    const names = [];
    this.bins.forEach((b) => {
      b.lit = !!b.kind && this.kinds.has(b.kind);
      b.glow.visible = b.lit;
      b.base.forEach((x) => {
        if (b.lit) { x.m.emissive.copy(b.col); x.m.emissiveIntensity = 1; } else { x.m.emissive.copy(x.e); x.m.emissiveIntensity = x.i; }
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
      b.base.forEach((x) => (x.m.emissiveIntensity = 0.7 + 0.5 * k));
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
      note: `Quelle der Abholtermine: ein Sensor, dessen Attribute Datum → Müllart enthalten (Waste Collection Schedule), oder ein Müll-Kalender. Leer = automatisch${this.src ? ` (gefunden: ${this.src.entity})` : ""}. Die Tonnen sind Möbel vom Typ <b>bin</b>; Blau = Papier, Gelb = Gelber Sack, Schwarz = Restmüll, Braun = Bio, erkannt am Namen.`,
      fields: [
        { k: "entity", l: "Sensor oder Kalender (leer = automatisch)", t: "entity", p: "sensor.naechste_leerung" },
        { k: "days", l: "Tage vor der Abholung leuchten", t: "number", s: 1 },
      ],
    });
  }
}
