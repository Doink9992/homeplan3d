import * as THREE from "three";
import { Feature, card3d, esc, clamp, glowTexture } from "./base.js";
import { readPowers, computeFlows, fmtPower, flowSpeed, parseEnergyPrefs } from "../lib/energy.js";
import { numericPoints, integrateKwh, bucket } from "../lib/history.js";
import { fetchHistory } from "./history.js";
import { openSettings } from "./settings-ui.js";

const COLORS = { solar: 0xffd166, import: 0x4aa3ff, export: 0x7bd88f, discharge: 0x00ff9d, charge: 0xff2bd6, wallbox: 0x19e6ff };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

/**
 * Energy: animated cables with flow dots (colour = type, speed = power), shimmering solar modules,
 * a hologram card (PV, house, grid, battery, self-sufficiency, day curve) and power cards on devices.
 */
export class EnergyFeature extends Feature {
  get id() { return "energy"; }
  get label() { return "⚡ Energie"; }
  get title() { return "Energiefluss: Kabel mit Leistungspunkten, leuchtende Solarmodule, Hologramm"; }
  get usesHolo() { return true; }
  get settingsLabel() { return "⚡ Energie"; }
  cfg() { return { hide_below_w: 5, device_cards: true, ...(this.settings.energy || {}) }; }
  effective() { const c = this.cfg(); return { ...c, solar: c.solar || this.pvEntity || null, consumption: c.consumption || this.meterPower || null }; }
  available() { const c = this.effective(); return !!(c.solar || c.grid || c.battery || c.consumption); }

  // ---------------------------------------------------------- scene
  build(anchors) {
    this.anchors = anchors;
    this.pvEntity = anchors.pv.find((p) => p.entity)?.entity || null;
    this.meterPower = anchors.furniture.find((a) => a.f.type === "meter" && a.f.power)?.f.power || null; // the meter's power sensor = house consumption
    // arrays with their own power sensor are the live ones; without any, all arrays share the solar sensor
    const own = anchors.pv.some((p) => p.entity);
    const live = anchors.pv.filter((p) => !own || p.entity);
    const where = (p) => p.pos || p.mesh.position;
    const fur = (type) => anchors.furniture.find((a) => a.f.type === type);
    const nodeOf = (a) => (a ? V(a.x, (a.y + a.top) / 2, a.z) : null);

    // house connection = meter (or the middle of the ground floor)
    const ground = anchors.rooms.filter((r) => r.elev <= 0.3);
    const rooms = ground.length ? ground : anchors.rooms;
    const meter = fur("meter"), gridPt = fur("grid_point") || meter;
    const centre = rooms.length ? V(rooms.reduce((s, r) => s + r.x, 0) / rooms.length, 1.2, rooms.reduce((s, r) => s + r.z, 0) / rooms.length) : V(0, 1.2, 0);
    this.nodes = { house: nodeOf(meter) || centre };
    const ext = this.view.extent() || [0, 0, 10, 10];
    this.nodes.grid = nodeOf(gridPt) || V(ext[0] - 4, 1, (ext[1] + ext[3]) / 2);
    if (live.length) {
      const c = live.reduce((s, p) => s.add(where(p)), V(0, 0, 0)).multiplyScalar(1 / live.length);
      this.nodes.solar = c.add(V(0, 0.25, 0));
    } else this.nodes.solar = nodeOf(fur("inverter"));
    this.nodes.battery = nodeOf(fur("battery"));
    this.nodes.wallbox = nodeOf(fur("wallbox"));
    const top = Math.max(...anchors.rooms.map((r) => r.elev + 2.8), ...live.map((p) => where(p).y), 3);
    this.nodes.holo = V(this.nodes.house.x, top + 1.4, this.nodes.house.z);

    // cables
    this.edges = [];
    const dotTex = glowTexture();
    const edge = (key, a, b) => {
      if (!a || !b) return;
      const path = this.route(a, b);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(path.pts), new THREE.LineBasicMaterial({ color: 0x3a4a78, transparent: true, opacity: 0.45 }));
      const n = Math.max(6, Math.round(path.len * 1.1));
      const dots = new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(new Float32Array(n * 3), 3)), new THREE.PointsMaterial({ size: 0.34, map: dotTex, color: COLORS.solar, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      dots.frustumCulled = false;
      dots.visible = false;
      this.group.add(line, dots);
      this.edges.push({ key, path, line, dots, n, u: 0, dir: 1, w: 0 });
    };
    edge("solar", this.nodes.solar, this.nodes.house);
    edge("grid", this.nodes.grid, this.nodes.house);
    edge("battery", this.nodes.battery, this.nodes.house);
    edge("wallbox", this.nodes.house, this.nodes.wallbox);

    // living solar modules: a light band that runs faster with more power
    this.pvTex = (() => {
      const c = document.createElement("canvas");
      c.width = 4; c.height = 64;
      const x = c.getContext("2d");
      const g = x.createLinearGradient(0, 0, 0, 64);
      g.addColorStop(0, "#102040"); g.addColorStop(0.5, "#9fd0ff"); g.addColorStop(1, "#102040");
      x.fillStyle = g; x.fillRect(0, 0, 4, 64);
      const t = new THREE.CanvasTexture(c);
      t.wrapT = THREE.RepeatWrapping;
      return t;
    })();
    this.pvMats = [...new Set(live.map((p) => p.mat))];
    this.pvMats.forEach((m) => { m.emissiveMap = this.pvTex; m.emissive.set(0xffffff); m.emissiveIntensity = 0.12; m.needsUpdate = true; });
    this.pvWp = live.reduce((s, p) => s + (p.wp || 400), 0) || 400;
    this.level = 0;

    // hologram card
    this.holo = card3d(`<div class="en"><b>⚡ Energie</b><div data-rows></div><canvas data-spark width="220" height="40"></canvas></div>`, { cls: "holo" });
    this.holo.position.copy(this.nodes.holo);
    this.group.add(this.holo);
    this.holo.visible = false;

    // device power cards
    this.devCards = anchors.furniture.filter((a) => a.f.power && !a.other).map((a) => {
      const c = card3d(`<span>⚡ <b>– W</b></span>`, { cls: "pw" });
      c.position.set(a.x, a.top + 0.45, a.z);
      c.visible = false;
      this.group.add(c);
      return { a, c, sig: "" };
    });

    this._html = null; // the card element is new after every rebuild
    this.curveTimer = 0;
    this.loadCurve();
  }

  /** Cable route: up/down at the first node, along x then z at a common height, up/down at the second node. */
  route(a, b) {
    const yr = Math.max(a.y, b.y) + 0.35;
    const raw = [a.clone(), V(a.x, yr, a.z), V(b.x, yr, a.z), V(b.x, yr, b.z), b.clone()];
    const pts = raw.filter((p, i) => i === 0 || p.distanceTo(raw[i - 1]) > 1e-3);
    const cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
    return { pts, cum, len: cum[cum.length - 1] || 1 };
  }
  at(path, d, out) {
    const { pts, cum } = path;
    let i = 1;
    while (i < cum.length - 1 && cum[i] < d) i++;
    const t = (d - cum[i - 1]) / Math.max(1e-6, cum[i] - cum[i - 1]);
    return out.copy(pts[i - 1]).lerp(pts[i], clamp(t, 0, 1));
  }

  // ---------------------------------------------------------- data
  async loadCurve() {
    const c = this.effective();
    if ((!c.solar && !c.grid && !c.consumption) || !this.view.hass?.callWS) return;
    try {
      const t1 = new Date(), t0 = new Date(t1);
      t0.setHours(0, 0, 0, 0);
      const ents = [c.solar, c.grid, c.consumption].filter(Boolean);
      const h = await fetchHistory(this.view.hass, ents, t0, t1);
      if (c.grid) {
        // grid import today: only the positive (import) part of the grid power is integrated
        const sign = c.grid_invert ? -1 : 1;
        const gp = numericPoints(h[c.grid]).map((p) => ({ ...p, v: Math.max(0, this.unitW(c.grid, p.v) * sign) }));
        this.importKwh = integrateKwh(gp, t0.getTime(), t1.getTime());
      } else if (c.consumption && !c.battery) {
        // no grid sensor: the card derives grid = house - PV, so integrate the same thing from history
        const hp = numericPoints(h[c.consumption]).map((p) => ({ ...p, v: this.unitW(c.consumption, p.v) }));
        const sp = c.solar ? numericPoints(h[c.solar]).map((p) => ({ ...p, v: this.unitW(c.solar, p.v) })) : [];
        let hi = 0, si = 0, hv = 0, sv = 0;
        const ts = [...new Set([...hp, ...sp].map((p) => p.t))].sort((x, y) => x - y);
        const gpts = ts.map((t) => {
          while (hi < hp.length && hp[hi].t <= t) hv = hp[hi++].v;
          while (si < sp.length && sp[si].t <= t) sv = sp[si++].v;
          return { t, v: Math.max(0, hv - sv) };
        });
        this.importKwh = integrateKwh(gpts, t0.getTime(), t1.getTime());
      }
      if (!c.solar) { this.update(this.states); return; }
      const pts = numericPoints(h[c.solar]).map((p) => ({ ...p, v: this.unitW(c.solar, p.v) }));
      this.curve = bucket(pts, t0.getTime(), t0.getTime() + 864e5, 48);
      this.nowBucket = Math.min(47, Math.floor(((t1 - t0) / 864e5) * 48));
      this.yieldKwh = integrateKwh(pts, t0.getTime(), t1.getTime());
      this.drawCurve();
      this.update(this.states);
    } catch { /* no recorder history: the card simply has no curve */ }
  }
  unitW(entity, v) {
    const u = String(this.states[entity]?.attributes?.unit_of_measurement || "W").toLowerCase();
    return u === "kw" ? v * 1000 : v;
  }
  drawCurve() {
    const cv = this.holo?.element.querySelector("[data-spark]");
    if (!cv || !this.curve) return;
    const x = cv.getContext("2d"), W = cv.width, H = cv.height;
    x.clearRect(0, 0, W, H);
    const max = Math.max(1, ...this.curve.map((v) => v || 0));
    const bw = W / this.curve.length;
    this.curve.forEach((v, i) => {
      if (v == null) return;
      const h = Math.max(1, (v / max) * (H - 4));
      x.fillStyle = i === this.nowBucket ? "#ffd166" : "rgba(255,209,102,.55)";
      x.fillRect(i * bw, H - h, bw - 1, h);
    });
  }

  update(states) {
    if (!this.edges) return;
    const c = this.effective();
    const p = (this.p = readPowers(c, states));
    const f = (this.f = computeFlows(p));
    const set = (key, w, dir, color) => {
      const e = this.edges.find((x) => x.key === key);
      if (!e) return;
      e.w = w; e.dir = dir;
      e.dots.visible = w >= 10;
      e.dots.material.color.setHex(color);
      e.line.material.color.setHex(w >= 10 ? color : 0x3a4a78);
      e.line.material.opacity = w >= 10 ? 0.75 : 0.35;
    };
    set("solar", f.S, 1, COLORS.solar);
    set("grid", Math.abs(f.g), f.g >= 0 ? 1 : -1, f.g >= 0 ? COLORS.import : COLORS.export);
    set("battery", Math.abs(f.b), f.b >= 0 ? 1 : -1, f.b >= 0 ? COLORS.discharge : COLORS.charge);
    set("wallbox", Math.max(0, p.wallbox ?? 0), 1, COLORS.wallbox);
    this.level = clamp(f.S / this.pvWp, 0, 1);

    // hologram
    const holoOn = this.view.holo !== false;
    const row = (icon, label, val, sub = "") => `<div class="r"><span>${icon} ${label}</span><b>${val}</b>${sub ? `<span class="sub">${sub}</span>` : ""}</div>`;
    const rows = [];
    if (p.solar != null || this.pvEntity) rows.push(row("☀", "PV", fmtPower(f.S), this.yieldKwh != null ? `heute ${this.yieldKwh.toFixed(1).replace(".", ",")} kWh` : ""));
    rows.push(row("🏠", "Haus", fmtPower(f.H)));
    if (p.grid != null || p.consumption != null) rows.push(row("🔌", "Netz", fmtPower(Math.abs(f.g)), [this.importKwh != null ? `heute ${this.importKwh.toFixed(1).replace(".", ",")} kWh Bezug` : "", f.g > 10 ? "Bezug" : f.g < -10 ? "Einspeisung" : ""].filter(Boolean).join(" · ")));
    if (p.battery != null || p.soc != null) rows.push(row("🔋", p.soc != null ? `${Math.round(p.soc)} %` : "Akku", fmtPower(Math.abs(f.b)), f.b > 10 ? "entlädt" : f.b < -10 ? "lädt" : ""));
    if (p.wallbox != null && p.wallbox > 10) rows.push(row("🚗", "Wallbox", fmtPower(p.wallbox)));
    if (f.H > 0) rows.push(row("🌱", "Autarkie", `${Math.round(f.autarky * 100)} %`));
    for (const [k, icon, label] of [["gas", "🔥", "Gas"], ["water", "💧", "Wasser"]]) {
      const s = c[k] ? states[c[k]] : null;
      if (s && s.state !== "unavailable") rows.push(row(icon, label, `${esc(s.state)} ${esc(s.attributes?.unit_of_measurement || "")}`));
    }
    const html = rows.join("");
    const el = this.holo.element;
    if (html !== this._html) { this._html = html; el.querySelector("[data-rows]").innerHTML = html; }
    this.holo.visible = holoOn && rows.length > 0;
    el.querySelector("[data-spark]").style.display = this.curve ? "" : "none";

    // device cards
    this.devCards.forEach((d) => {
      const s = states[d.a.f.power];
      const v = s ? parseFloat(s.state) : NaN;
      const w = Number.isFinite(v) ? this.unitW(d.a.f.power, v) : null;
      d.c.visible = c.device_cards !== false && holoOn && w != null && Math.abs(w) >= (c.hide_below_w ?? 5);
      const txt = w == null ? "" : fmtPower(w);
      if (txt !== d.sig) { d.sig = txt; d.c.element.querySelector("b").textContent = txt; }
    });
  }

  tick(dt) {
    if (!this.edges) return;
    const tmp = V(0, 0, 0);
    for (const e of this.edges) {
      if (!e.dots.visible) continue;
      e.u = (e.u + e.dir * flowSpeed(e.w) * dt / e.path.len + 1) % 1;
      const pos = e.dots.geometry.attributes.position;
      for (let i = 0; i < e.n; i++) {
        const d = (((e.u + i / e.n) % 1) + 1) % 1;
        this.at(e.path, d * e.path.len, tmp);
        pos.setXYZ(i, tmp.x, tmp.y, tmp.z);
      }
      pos.needsUpdate = true;
    }
    // solar shimmer
    if (this.level > 0.01) this.pvTex.offset.y = (this.pvTex.offset.y - dt * (0.15 + 1.4 * this.level)) % 1;
    this.pvMats.forEach((m) => { m.emissiveIntensity = 0.1 + 1.2 * this.level; });
    // refresh the day curve every 5 minutes
    this.curveTimer += dt;
    if (this.curveTimer > 300) { this.curveTimer = 0; this.loadCurve(); }
  }

  reset() {
    (this.pvMats || []).forEach((m) => { m.emissiveMap = null; m.emissive.set(0x1f6bff); m.emissiveIntensity = 0.15; m.needsUpdate = true; });
  }
  dispose() { this.reset(); this.edges = null; this.pvMats = []; }

  // ---------------------------------------------------------- settings
  openSettings() {
    const obj = (this.settings.energy ||= {});
    openSettings(this.view, {
      title: "⚡ Energie einrichten",
      obj,
      note: "Leistungs-Sensoren in Watt. Netz: Bezug positiv. Akku: Entladen positiv. Mit „umkehren“ drehst du das Vorzeichen um. Kabel und Karte brauchen mindestens PV, Netz oder Verbrauch.",
      fields: [
        { k: "solar", l: "PV-Leistung", t: "entity" },
        { k: "grid", l: "Netz-Leistung", t: "entity" },
        { k: "grid_invert", l: "Netz-Vorzeichen umkehren", t: "checkbox" },
        { k: "battery", l: "Akku-Leistung", t: "entity" },
        { k: "battery_invert", l: "Akku-Vorzeichen umkehren", t: "checkbox" },
        { k: "battery_soc", l: "Akku-Ladestand (%)", t: "entity" },
        { k: "consumption", l: "Hausverbrauch (sonst berechnet)", t: "entity" },
        { k: "wallbox", l: "Wallbox-Leistung", t: "entity" },
        { k: "gas", l: "Gas (Anzeige)", t: "entity" },
        { k: "water", l: "Wasser (Anzeige)", t: "entity" },
        { k: "device_cards", l: "Leistungskarten an Geräten", t: "checkbox" },
        { k: "hide_below_w", l: "Karten unter … W ausblenden", t: "number", p: "5" },
      ],
      extra: (el, rerender, touch) => {
        const btn = document.createElement("button");
        btn.textContent = "⇩ Vom Energie-Dashboard übernehmen";
        btn.onclick = async () => {
          try {
            const found = parseEnergyPrefs(await this.view.hass.callWS({ type: "energy/get_prefs" }));
            if (!Object.keys(found).length) return this.view.msg("Im Energie-Dashboard sind keine Leistungs-Sensoren hinterlegt – bitte oben wählen.");
            touch();
            Object.assign(obj, found);
            this.view.msg(`Übernommen: ${Object.keys(found).join(", ")}`);
            rerender();
          } catch (e) { this.view.msg("Energie-Dashboard nicht lesbar: " + (e.message || e.code)); }
        };
        el.append(btn);
      },
    });
  }
}
