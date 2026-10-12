import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { createFeatures } from "./features/index.js";
import { openScreenEditor } from "./features/screens-ui.js";
import { siteFrame, localToPlan, resolveParts, partsFromLayout, doorSpec, stallCenters, PART_LABELS, DOOR_SIDES } from "./lib/site.js";
import { wedge } from "./lib/camera.js";
import { CarFeature } from "./features/car.js";
import { uid, snap, domainOf, clone, inPoly, bbox, distSeg, polyArea, labelPoint, furnitureCorners, rad } from "./util.js";
import { newFloor, emptyPlan, normalizePlan, elevation, wallNetwork, roofSections, newSiteBuilding, applyLevels } from "./plan.js";
import { buildBuilding, setSprite, THEMES } from "./build3d.js";
import { convertNeonPlan, unwrapBuilding } from "./neonplan-import.js";

const AUTO_DOMAINS = ["light", "switch", "cover", "fan", "lock", "input_boolean", "media_player"];
const OFF_STATES = ["off", "closed", "unavailable", "unknown", "idle", "locked", "docked", "standby", "paused"];

const FD = {
  bed: [1.8, 2, 0.5], sofa_l: [2.4, 1.6, 0.85], table: [1.6, 0.9, 0.75], chair: [0.45, 0.45, 0.9], desk: [1.4, 0.7, 0.75], office_chair: [0.6, 0.6, 1],
  wardrobe: [1, 0.6, 2.1], dresser: [1.2, 0.5, 0.9], shelf: [0.8, 0.3, 1.8], tv_board: [1.6, 0.45, 0.5], sideboard: [1.4, 0.45, 0.85],
  kitchen: [2.4, 0.62, 0.9], kitchen_tall: [0.6, 0.62, 2.1], kitchen_wall: [1, 0.35, 0.7], island: [1.8, 0.9, 0.9], fridge: [0.6, 0.65, 1.8],
  stove: [0.6, 0.6, 0.9], sink: [0.8, 0.6, 0.9], dishwasher: [0.6, 0.6, 0.85], washer: [0.6, 0.6, 0.85], shower: [0.9, 0.9, 2.1],
  bathtub: [1.7, 0.75, 0.55], wc: [0.4, 0.7, 0.8], washbasin: [0.6, 0.45, 0.85], stairs: [0.9, 2.4, 2.8], stairs_u: [1.9, 3.2, 2.8], rug: [2, 3, 0.02], stool: [0.35, 0.35, 0.45],
  bench: [1.2, 0.4, 0.45], robot_vacuum: [0.36, 0.36, 0.1], led_strip: [1, 0.05, 0.05], inverter: [0.5, 0.2, 0.65], meter: [0.5, 0.2, 1.1],
  tv: [1.2, 0.06, 0.7], monitor: [0.6, 0.05, 0.36], speaker: [0.22, 0.22, 0.32], soundbar: [0.9, 0.09, 0.07], car: [1.9, 4.6, 1.5], battery: [0.6, 0.25, 1.1], wallbox: [0.25, 0.12, 0.35],
};
const FURN_TYPES = Object.keys(FD);

const getPath = (o, k) => k.split(".").reduce((a, p) => a?.[p], o);
const setPath = (o, k, v) => {
  const ps = k.split(".");
  const last = ps.pop();
  const t = ps.reduce((a, p) => (a[p] ??= {}), o);
  t[last] = v;
};
const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const CSS = `
:host{display:block;height:100%;--bg:#07080f;--fg:#dfe8ff;--neon:#19e6ff;--pink:#ff2bd6;color:var(--fg);font-family:var(--paper-font-body1_-_font-family,system-ui,sans-serif)}
.wrap{display:flex;flex-direction:column;height:100%;min-height:360px;background:var(--bg);position:relative}
.bar{display:flex;gap:6px;flex-wrap:wrap;align-items:center;padding:6px 8px;background:#0d1020;border-bottom:1px solid #1d2a4a}
.bar>span{display:inline-flex;gap:4px;flex-wrap:wrap}
.main{flex:1;display:flex;min-height:0}
#ed{flex:1;min-width:0;background:#0a0d1a;cursor:crosshair;touch-action:none;outline:none}
#view{flex:1;min-width:0;position:relative}
#view canvas{display:block;width:100%;height:100%}
.side{width:250px;background:#0d1020;border-left:1px solid #1d2a4a;padding:8px;overflow:auto;font-size:13px}
.hidden{display:none!important}
button,select,input{background:#141a33;color:var(--fg);border:1px solid #2a3b6a;border-radius:6px;padding:5px 9px;font:inherit;font-size:13px}
button{cursor:pointer}button:hover{border-color:var(--neon)}
button.on{background:#0b3c4a;border-color:var(--neon);box-shadow:0 0 8px var(--neon)}
.side label{display:block;margin:8px 0 2px;opacity:.7;font-size:12px}
.side input,.side select{width:100%;box-sizing:border-box}
.side input[type=checkbox]{width:auto;margin-right:6px}
.side h4{margin:12px 0 4px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--neon)}
.side .row{display:flex;gap:6px}.side .row>*{flex:1}
.side button.full{width:100%;margin-top:6px;text-align:left}
.dev{display:flex;justify-content:space-between;align-items:center;padding:6px 4px;border-bottom:1px solid #1d2a4a;cursor:pointer}
.dev span.s{font-size:11px;opacity:.7}
.dev.on b{color:var(--neon)}
.hint{position:absolute;left:8px;bottom:8px;font-size:12px;opacity:.6;pointer-events:none}
.msg{position:absolute;left:50%;top:10px;transform:translateX(-50%);background:#0b3c4a;border:1px solid var(--neon);padding:6px 12px;border-radius:8px;font-size:13px;z-index:5}
.sp{flex:1}
#chips{position:absolute;top:8px;right:8px;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;pointer-events:none;z-index:3}
#chips span{background:rgba(7,8,15,.75);border:1px solid #2a3b6a;border-radius:14px;padding:3px 10px;font-size:12px}
#labels{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.card3d{background:rgba(10,16,34,.72);border:1px solid rgba(25,230,255,.55);border-radius:10px;padding:6px 10px;font-size:12px;color:#dfe8ff;backdrop-filter:blur(4px);box-shadow:0 0 14px rgba(25,230,255,.25);white-space:nowrap;transform:translateY(-6px)}
.card3d b{color:#19e6ff}
.card3d .sub{opacity:.7;font-size:11px}
.card3d button{padding:2px 8px;font-size:12px}
.holo .en{min-width:210px}
.holo .r{display:flex;gap:8px;align-items:baseline;justify-content:space-between;margin:2px 0}
.holo .r b{color:#fff}.holo .r .sub{opacity:.65;font-size:11px}
.holo canvas{display:block;margin-top:4px;width:100%}
.pw{padding:2px 8px;font-size:11px}
.pin{padding:3px 9px;font-size:11px}
.carcard{min-width:210px}
.carcard .r{display:flex;justify-content:space-between;gap:12px;margin:2px 0}
.carcard .bar{height:7px;border-radius:4px;background:#1b2440;margin:6px 0;overflow:hidden}.carcard .bar i{display:block;height:100%}
.carcard .btns{display:flex;gap:4px;margin-top:6px;flex-wrap:wrap}
.prow{border:1px solid #1d2a4a;border-radius:8px;padding:4px;margin:4px 0}
.prow .l1,.prow .l2,.prow .l3{display:flex;gap:3px;margin:2px 0}.prow .l1 select,.prow .l3 select{flex:1}.prow .l2 input{min-width:0}
.prow button{padding:2px 6px}
.np{display:flex;gap:8px;align-items:center;min-width:220px}
.np img{width:46px;height:46px;border-radius:6px;object-fit:cover;background:#111}
.np .t{max-width:160px;overflow:hidden;text-overflow:ellipsis}
.np .ctl{display:flex;gap:4px;align-items:center;margin-top:3px}
.np input[type=range]{width:90px;padding:0}
.overlay h4{color:var(--neon);text-transform:none;letter-spacing:0}
.overlay label{display:block;margin:6px 0 2px;opacity:.7;font-size:12px}
.overlay input,.overlay select{width:100%;box-sizing:border-box}
.overlay .row{display:flex;gap:8px}.overlay .row>*{flex:1}
.overlay .dev{border-radius:6px}.overlay .dev:hover{background:#141a33}
.overlay{position:absolute;z-index:6;background:rgba(9,13,28,.94);border:1px solid #2a3b6a;border-radius:12px;padding:12px;font-size:13px;box-shadow:0 8px 30px rgba(0,0,0,.5)}
@media(max-width:700px){.main{flex-direction:column}.side{width:auto;max-height:38%;border-left:0;border-top:1px solid #1d2a4a}}
`;

class HomePlan3DView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.plan = emptyPlan();
    this.fi = 0;
    this.cut = false;
    this.editing = false;
    this.tool = "select";
    this.sel = null;
    this.draft = [];
    this.cam2 = { x: 5, z: 4, s: 40 };
    this.dyn = [];
    this.pickables = [];
    this.cfg = {};
    this._ready = false;
    this.panelRoom = null;
    this.pendingEntity = "";
    this.furnType = "table";
    this.grid = 0.1;
    this.showRoof = true;
    this.showSite = true;
    this.showClimate = true;
    this.heatmap = false;
    this.hasClimate = false;
    this.multi = [];
    this.theme = "neon";
    this.undoStack = [];
    this._labels = new Map();
    this.chips = {};
    this.holo = true;
    this.features = createFeatures(this);
  }

  set hass(h) {
    const first = !this._hass;
    this._hass = h;
    if (first && this._ready) this.load();
    this.updateStates();
    if (!this.editing && this.panelRoom) this.renderRoomPanel();
  }
  get hass() { return this._hass; }
  getStates() { return this._replayStates || this._hass?.states; }
  fxOn(id) {
    if (this.cfg[id] != null) return !!this.cfg[id];
    try { const v = localStorage.getItem("hp3d.fx." + id); if (v != null) return v === "1"; } catch { /* storage unavailable */ }
    return true;
  }
  setFx(id, on) {
    try { localStorage.setItem("hp3d.fx." + id, on ? "1" : "0"); } catch { /* storage unavailable */ }
    const f = this.features.find((x) => x.id === id);
    if (!f) return;
    f.on = on;
    f.group.visible = on;
    if (!on) f.reset();
    else f.update(this.getStates() || {});
    this.renderBar();
  }
  openFxMenu() {
    this.closeOverlay();
    const box = document.createElement("div");
    box.className = "overlay";
    box.style.cssText = "right:12px;top:52px;width:230px";
    box.innerHTML = `<h4 style="margin:0 0 6px">Funktionen einrichten</h4>${this.features.filter((f) => f.settingsLabel).map((f, i) => `<button class="full" data-i="${i}">${f.settingsLabel}</button>`).join("")}`;
    box.onclick = (e) => {
      const i = e.target.closest("[data-i]")?.dataset.i;
      if (i != null) this.features.filter((f) => f.settingsLabel)[+i].openSettings();
    };
    this.shadowRoot.querySelector(".wrap").append(box);
    this._overlay = box;
  }
  closeOverlay() {
    if (this._overlay) { this._overlay.remove(); this._overlay = null; }
  }
  setChip(id, html) {
    if (html) this.chips[id] = html; else delete this.chips[id];
    const el = this.$("#chips");
    if (el) el.innerHTML = Object.values(this.chips).map((h) => `<span>${h}</span>`).join("");
  }
  set config(c) {
    this.cfg = c || {};
    this.theme = this.cfg.theme === "day" ? "day" : "neon";
    this.showRoof = this.cfg.show_roof !== false;
    this.showSite = this.cfg.show_site !== false;
    this.showClimate = this.cfg.show_climate !== false;
    this.heatmap = !!this.cfg.heatmap;
    if (this._ready) { this.renderBar(); this.rebuild3D(); }
  }

  connectedCallback() {
    if (this._ready) return;
    this._ready = true;
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
    <div class="wrap">
      <div class="bar">
        <span id="floors"></span>
        <span id="toggles"></span>
        <span id="tools" class="hidden"></span>
        <span class="sp"></span>
        <button id="undo" class="hidden" title="Rückgängig (Strg+Z)">↶</button>
        <button id="edit" class="hidden">✏️ Editor</button>
        <button id="save" class="hidden">💾 Speichern</button>
      </div>
      <div class="main">
        <canvas id="ed" class="hidden"></canvas>
        <div id="view"><div id="labels"></div><div id="chips"></div><div class="hint" id="hint"></div></div>
        <div class="side hidden" id="side"></div>
      </div>
    </div>`;
    const $ = (s) => this.shadowRoot.querySelector(s);
    this.$ = $;
    this.edCanvas = $("#ed");
    this.viewEl = $("#view");
    $("#edit").onclick = () => this.setEditing(!this.editing);
    $("#save").onclick = () => this.save();
    $("#undo").onclick = () => this.undo();
    this.init3D();
    this.initEditor();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(this.shadowRoot.querySelector(".wrap"));
    if (this._hass) this.load();
    else this.setPlan(this.plan, { fit: true });
  }
  disconnectedCallback() {
    this.ro?.disconnect();
    cancelAnimationFrame(this._raf);
    this.renderer?.dispose();
    this._ready = false;
  }

  // ---------------------------------------------------------- data
  async load() {
    let plan = null;
    try { plan = await this._hass.callWS({ type: "homeplan3d/get" }); } catch (e) { console.error(e); }
    this.setPlan(plan || emptyPlan(), { fit: true });
  }
  setPlan(plan, { fit = false } = {}) {
    this.plan = normalizePlan(plan);
    if (!this.plan.floors.length) this.plan.floors = [newFloor(1)];
    const last = this.plan.floors.length - 1;
    this.fi = this.cfg.floor != null ? Math.max(0, Math.min(this.cfg.floor, last)) : last;
    this.cut = this.cfg.floor != null;
    this.sel = null; this.draft = []; this.panelRoom = null;
    const isAdmin = this._hass?.user?.is_admin !== false && this.cfg.mode !== "card" && !!this._hass;
    this.$("#edit").classList.toggle("hidden", !isAdmin);
    this.renderBar();
    this.rebuild3D();
    if (fit) this.fit();
    this.draw2D();
  }
  async save() {
    try {
      await this._hass.callWS({ type: "homeplan3d/save", plan: this.plan });
      this.msg("✅ Gespeichert");
    } catch (e) {
      this.msg("❌ Speichern fehlgeschlagen: " + (e.message || e.code));
    }
  }
  msg(t) {
    const el = document.createElement("div");
    el.className = "msg";
    el.textContent = t;
    this.shadowRoot.querySelector(".wrap").append(el);
    setTimeout(() => el.remove(), 3500);
  }
  get floor() { return this.plan.floors[this.fi]; }

  pushUndo() {
    this.undoStack.push(JSON.stringify(this.plan));
    if (this.undoStack.length > 40) this.undoStack.shift();
  }
  undo() {
    const s = this.undoStack.pop();
    if (!s) return;
    this.plan = normalizePlan(JSON.parse(s));
    this.fi = Math.min(this.fi, this.plan.floors.length - 1);
    this.sel = null; this.draft = [];
    this.renderBar(); this.rebuild3D(); this.renderSide(); this.draw2D();
  }
  changed({ side = false } = {}) {
    this.rebuild3D();
    this.draw2D();
    if (side) this.renderSide();
  }

  // ---------------------------------------------------------- bar
  renderBar() {
    const f = this.$("#floors");
    f.innerHTML = "";
    const mk = (label, cls, fn, title) => {
      const b = document.createElement("button");
      b.textContent = label; b.className = cls || ""; if (title) b.title = title; b.onclick = fn;
      return b;
    };
    if (!this.editing && this.plan.floors.length > 1) {
      f.append(mk("Alle", !this.cut ? "on" : "", () => { this.cut = false; this.renderBar(); this.rebuild3D(); }, "Ganzes Gebäude"));
    }
    for (let i = this.plan.floors.length - 1; i >= 0; i--) {
      const fl = this.plan.floors[i];
      f.append(mk(fl.name, i === this.fi && (this.editing || this.cut) ? "on" : "", () => {
        this.fi = i; this.cut = true; this.sel = null; this.renderBar(); this.rebuild3D(); this.draw2D(); this.renderSide();
      }));
    }
    if (this.editing) f.append(mk("+", "", () => {
      this.pushUndo();
      this.plan.floors.push(newFloor(this.plan.floors.length + 1));
      this.fi = this.plan.floors.length - 1;
      this.renderBar(); this.changed({ side: true });
    }, "Etage hinzufügen"));

    const t = this.$("#toggles");
    t.innerHTML = "";
    if (roofSections(this.plan).length) t.append(mk("Dach", this.showRoof ? "on" : "", () => { this.showRoof = !this.showRoof; this.renderBar(); this.rebuild3D(); }));
    if (this.plan.site?.buildings?.length) t.append(mk("Gelände", this.showSite ? "on" : "", () => { this.showSite = !this.showSite; this.renderBar(); this.rebuild3D(); this.draw2D(); }, "Weitere Gebäude auf dem Flurstück"));
    this.features.forEach((f) => {
      if (!f.available()) return;
      t.append(mk(f.label, f.on ? "on" : "", () => this.setFx(f.id, !f.on), f.title));
      if (f.on) f.toolbar().forEach((b) => t.append(mk(b.label, b.on ? "on" : "", b.fn, b.title)));
    });
    if (this.features.some((f) => f.usesHolo && f.available())) t.append(mk("◈ Karten", this.holo ? "on" : "", () => { this.holo = !this.holo; this.renderBar(); this.updateStates(); }, "Karten und Hologramme im Raum ein- oder ausblenden"));
    if (this.hasClimate) {
      t.append(mk("🌡 Klima", this.showClimate ? "on" : "", () => { this.showClimate = !this.showClimate; this.renderBar(); this.updateStates(); }, "Temperatur und Luftfeuchte in den Räumen"));
      t.append(mk("🔥 Wärme", this.heatmap ? "on" : "", () => { this.heatmap = !this.heatmap; this.renderBar(); this.updateStates(); }, "Räume nach Temperatur einfärben"));
    }
    t.append(mk(this.theme === "day" ? "☀" : "🌙", "", () => { this.theme = this.theme === "day" ? "neon" : "day"; this.renderBar(); this.rebuild3D(); }, "Darstellung wechseln"));

    const tools = this.$("#tools");
    tools.innerHTML = "";
    const defs = [["select", "↖ Auswahl"], ["rect", "▭ Raum"], ["room", "⬠ Polygon"], ["wall", "▬ Wand"], ["door", "🚪 Tür"], ["window", "🪟 Fenster"], ["furn", "🪑 Möbel"], ["device", "💡 Gerät"], ["building", "🏠 Gebäude"], ["erase", "🗑"]];
    defs.forEach(([k, label]) => tools.append(mk(label, this.tool === k ? "on" : "", () => { this.tool = k; this.draft = []; this.renderBar(); this.renderSide(); this.draw2D(); })));
    tools.append(mk("⤢", "", () => { this.fit2D(); this.draw2D(); }, "Ansicht einpassen"));
    tools.append(mk("⚙ Funktionen", "", () => this.openFxMenu(), "Wetter, Energie, Auto, Kameras … einrichten"));
  }
  setEditing(v) {
    this.editing = v;
    this.panelRoom = null;
    for (const [id, show] of [["#tools", v], ["#save", v], ["#undo", v]]) this.$(id).classList.toggle("hidden", !show);
    this.edCanvas.classList.toggle("hidden", !v);
    this.$("#side").classList.toggle("hidden", !v);
    this.$("#edit").classList.toggle("on", v);
    this.renderBar();
    this.renderSide();
    this.rebuild3D();
    this.resize();
    if (v) this.fit2D();
    this.draw2D();
  }
  fit2D() {
    const c = this.edCanvas;
    if (!c.width) return;
    // fit the house (current floor); the outbuildings are usually far away and can be reached by zooming out
    let pts = this.floor.rooms.flatMap((r) => r.points);
    if (!pts.length) pts = this.plan.floors.flatMap((f) => f.rooms.flatMap((r) => r.points));
    if (!pts.length) pts = (this.plan.site?.buildings || []).flatMap((b) => b.points);
    if (!pts.length) return;
    const [x0, z0, x1, z1] = bbox(pts);
    this.cam2.x = (x0 + x1) / 2;
    this.cam2.z = (z0 + z1) / 2;
    this.cam2.s = Math.max(5, Math.min(120, Math.min(c.width / ((x1 - x0) * 1.15 + 1), c.height / ((z1 - z0) * 1.15 + 1))));
  }
  hint(t) { this.$("#hint").textContent = t || ""; }

  // ---------------------------------------------------------- side panel (editor)
  formHtml(obj, defs) {
    return defs.map((d) => {
      const v = getPath(obj, d.k) ?? d.def;
      const a = `data-k="${d.k}" data-t="${d.t || "text"}"`;
      if (d.t === "select") return `<label>${d.l}</label><select ${a}>${d.o.map((o) => { const [val, lab] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(val)}" ${val === v ? "selected" : ""}>${esc(lab)}</option>`; }).join("")}</select>`;
      if (d.t === "checkbox") return `<label><input type="checkbox" ${a} ${v ? "checked" : ""}>${d.l}</label>`;
      if (d.t === "number") return `<label>${d.l}</label><input ${a} type="number" step="${d.s || 0.05}" value="${v ?? ""}" placeholder="${d.p || ""}">`;
      return `<label>${d.l}</label><input ${a} ${d.t === "color" ? 'type="color"' : ""} ${d.list ? `list="${d.list}"` : ""} ${d.p ? `placeholder="${esc(d.p)}"` : ""} value="${esc(v ?? "")}">`;
    }).join("");
  }
  bindForm(root, obj, after) {
    root.querySelectorAll("[data-k]").forEach((el) => {
      if (el._bound) return;
      el._bound = true;
      el.onchange = () => {
        this.pushUndo();
        const t = el.dataset.t;
        let v = el.value;
        if (t === "number") v = el.value === "" ? null : +el.value;
        else if (t === "checkbox") v = el.checked;
        else if (v === "" ) v = null;
        setPath(obj, el.dataset.k, v);
        after?.(el);
        this.changed();
      };
    });
  }

  renderSide() {
    const side = this.$("#side");
    if (!this.editing) return;
    const h = this._hass;
    const fl = this.floor;
    const hints = {
      select: "Ziehen verschiebt · Entf löscht · leere Fläche aufziehen wählt mehrere · Umschalt+Klick fügt hinzu · Strg+Z",
      rect: "Diagonal aufziehen", room: "Punkte klicken, Doppelklick schließt", wall: "Start/Ende klicken, Esc beendet",
      door: "Auf eine Wand klicken", window: "Auf eine Wand klicken", furn: "Typ wählen, dann in den Raum klicken",
      device: "Entität wählen, dann in den Raum klicken", building: "Gebäude auf dem Gelände diagonal aufziehen", erase: "Element anklicken",
    };
    this.hint(hints[this.tool]);
    const ents = Object.keys(h?.states || {}).sort();
    let html = `<datalist id="ents">${ents.map((e) => `<option value="${e}">`).join("")}</datalist>`;

    html += `<h4>Etage</h4><div data-obj="floor">${this.formHtml(fl, [
      { k: "name", l: "Name" },
      { k: "height", l: "Raumhöhe (m)", t: "number" },
      { k: "elevation", l: "Höhe Fußboden (m, leer = automatisch)", t: "number", p: "auto" },
    ])}</div>`;
    html += `<label><input type="checkbox" data-plan="autoDevices" ${this.plan.settings.autoDevices ? "checked" : ""}>Geräte aus HA-Bereichen automatisch platzieren</label>`;
    html += `<label>Raster</label><select id="grid">${[0.05, 0.1, 0.25, 0.5].map((g) => `<option ${g === this.grid ? "selected" : ""}>${g}</option>`).join("")}</select>`;

    if (this.tool === "device" || this.tool === "door" || this.tool === "window")
      html += `<h4>${this.tool === "device" ? "Gerät" : "Kontaktsensor"}</h4><label>Entität</label><input id="pent" list="ents" value="${esc(this.pendingEntity)}" placeholder="light.wohnzimmer">`;
    if (this.tool === "furn")
      html += `<h4>Möbel</h4><label>Typ</label><select id="ftype">${FURN_TYPES.map((t) => `<option ${t === this.furnType ? "selected" : ""}>${t}</option>`).join("")}</select>`;

    const s = this.sel;
    const find = (arr, id) => arr.find((x) => x.id === id);
    let obj = null, selHtml = "";
    if (this.multi.length > 1) {
      const kinds = {};
      this.multi.forEach((m) => (kinds[m.kind] = (kinds[m.kind] || 0) + 1));
      const names = { device: "Geräte", furniture: "Möbel", opening: "Öffnungen", room: "Räume", wall: "Wände", site: "Gebäude" };
      selHtml += `<h4>Auswahl</h4><div style="font-size:12px;opacity:.85">${this.multi.length} Elemente: ${Object.entries(kinds).map(([k, n]) => `${n} ${names[k] || k}`).join(", ")}</div>
        <button class="full" id="multi-del">🗑 Auswahl entfernen</button>
        <div style="font-size:11px;opacity:.6;margin-top:4px">Automatisch platzierte Geräte werden ausgeblendet. Ziehen verschiebt die ganze Auswahl.</div>`;
    } else if (s?.kind === "room") {
      obj = find(fl.rooms, s.id);
      if (obj) {
        const areas = Object.values(h?.areas || {});
        const auto = this.areaClimate(obj.area);
        selHtml += `<h4>Raum</h4>${this.formHtml(obj, [
          { k: "name", l: "Name" },
          { k: "area", l: "HA-Bereich (Geräte automatisch)", t: "select", o: [["", "– keiner –"], ...areas.map((a) => [a.area_id, a.name]), ...(obj.area && !areas.some((a) => a.area_id === obj.area) ? [[obj.area, obj.area]] : [])] },
          { k: "color", l: "Farbe", t: "color" },
          { k: "autoDevices", l: "Geräte aus dem HA-Bereich automatisch platzieren", t: "checkbox", def: true },
          { k: "climate.temperature", l: "Temperatur-Sensor", list: "ents", p: auto.temperature ? `automatisch: ${auto.temperature}` : "" },
          { k: "climate.humidity", l: "Feuchte-Sensor", list: "ents", p: auto.humidity ? `automatisch: ${auto.humidity}` : "" },
          { k: "climate.co2", l: "CO₂-Sensor", list: "ents", p: auto.co2 ? `automatisch: ${auto.co2}` : "" },
        ])}<div class="hint2" style="opacity:.6;font-size:11px;margin-top:6px">${polyArea(obj.points).toFixed(1)} m²</div>`;
      }
    } else if (s?.kind === "wall") {
      obj = find(fl.walls, s.id);
      if (obj) selHtml += `<h4>Wand</h4>${this.formHtml(obj, [{ k: "t", l: "Stärke (m)", t: "number", p: "auto" }, { k: "h", l: "Höhe (m, leer = voll)", t: "number" }])}`;
    } else if (s?.kind === "device") {
      obj = find(fl.devices, s.id);
      if (obj) selHtml += `<h4>Gerät</h4>${this.formHtml(obj, [
        { k: "entity", l: "Entität", list: "ents" }, { k: "name", l: "Anzeigename" }, { k: "showName", l: "Name anzeigen", t: "checkbox" }, { k: "y", l: "Höhe (m)", t: "number", p: "auto" },
        ...(domainOf(obj.entity) === "camera" ? [
          { k: "rot", l: "Blickrichtung (° im Uhrzeigersinn, 0 = im Plan nach unten)", t: "number", s: 5, p: "0" },
          { k: "tilt", l: "Neigung nach unten (°)", t: "number", s: 5, p: "25" },
          { k: "fov", l: "Öffnungswinkel (°)", t: "number", s: 5, p: "90" },
          { k: "reach", l: "Reichweite im Plan (m)", t: "number", s: 0.5, p: "7" },
          { k: "motion", l: "Bewegungsmelder (leer = am Kamera-Gerät suchen)", list: "ents" },
        ] : []),
      ])}`;
      else if (this.isAuto(s)) {
        const d = this.itemOf(s);
        if (d) selHtml += `<h4>Gerät (automatisch)</h4><div style="font-size:12px;opacity:.85;word-break:break-all">${esc(d.entity)}</div>
          <div style="font-size:11px;opacity:.6;margin:4px 0">Aus dem HA-Bereich des Raums platziert. Ziehen setzt es fest, Entf blendet es aus.</div>
          <button class="full" id="auto-pin">📌 Festsetzen</button><button class="full" id="auto-hide">🙈 Ausblenden</button>`;
      }
    } else if (s?.kind === "opening") {
      obj = find(fl.openings, s.id);
      if (obj) selHtml += `<h4>${obj.type === "door" ? "Tür" : "Fenster"}</h4>${this.formHtml(obj, [
        { k: "w", l: "Breite (m)", t: "number" }, { k: "h", l: "Höhe (m)", t: "number" }, { k: "sill", l: "Brüstung (m)", t: "number" },
        { k: "style", l: "Art", t: "select", o: [["", "Standard"], "front", "interior", "passage"] },
        { k: "hinge", l: "Angel", t: "select", o: ["left", "right"] }, { k: "swing", l: "Öffnet nach", t: "select", o: ["in", "out"] },
        { k: "entity", l: "Kontaktsensor", list: "ents" },
      ])}`;
    } else if (s?.kind === "furniture") {
      obj = find(fl.furniture, s.id);
      if (obj) selHtml += `<h4>Möbel</h4>${this.formHtml(obj, [
        { k: "type", l: "Typ", t: "select", o: FURN_TYPES }, { k: "name", l: "Name" }, { k: "color", l: "Farbe (leer = Standard)", t: "color" },
        ...(obj.type === "stairs_u" ? [{ k: "landings", l: "Podeste (1 = zwei Läufe, 2 = drei Läufe um die Ecken)", t: "number", s: 1, p: "1" }, { k: "flip", l: "Gespiegelt (Anfang auf der anderen Seite)", t: "checkbox" }] : []),
        ...(obj.type === "car" ? [{ k: "body", l: "Karosserie", t: "select", o: [["", "einfach"], ["sedan", "Limousine"], ["wagon", "Kombi"], ["hatch", "Schrägheck / Crossover"], ["van", "Kastenwagen"], ["roadster", "Roadster"]] }] : []), { k: "rot", l: "Drehung (°)", t: "number", s: 5 },
        { k: "w", l: "Breite", t: "number" }, { k: "d", l: "Tiefe", t: "number" }, { k: "h", l: "Höhe", t: "number" }, { k: "mountY", l: "Höhe über Boden", t: "number", p: "0" },
        { k: "entity", l: "Entität (Zustand/Leuchten)", list: "ents" }, { k: "power", l: "Leistungs-Sensor", list: "ents" },
      ])}${obj.type === "tv" || obj.type === "monitor" ? `<button class="full" id="scr-edit">🖥 Bildschirm-Regeln …</button>` : ""}${obj.type === "car" ? `<button class="full" id="car-edit">🚗 Auto zuordnen …</button>` : ""}`;
    } else if (s?.kind === "site") {
      obj = find(this.plan.site?.buildings || [], s.id);
      if (obj) selHtml += `<h4>Gebäude</h4>${this.formHtml(obj, [
        { k: "name", l: "Name" }, { k: "levels", l: "Geschosse (richten sich nach den Haus-Etagen)", t: "number", s: 1, p: "1" }, { k: "height", l: "Traufhöhe (m)", t: "number", s: 0.1 },
        { k: "roof.type", l: "Dach", t: "select", o: [["flat", "Flach"], ["gable", "Satteldach"], ["shed", "Pultdach"]] }, { k: "roof.pitch", l: "Neigung (°)", t: "number", s: 1 },
        ...(obj.roof?.type === "shed" ? [{ k: "roof.high", l: "Hohe Seite (zum Nachbarn)", t: "select", o: [["south", "Süd"], ["north", "Nord"], ["east", "Ost"], ["west", "West"]], def: "south" }] : []),
        { k: "visible", l: "Sichtbar", t: "checkbox" },
      ])}${obj.roof?.type === "shed" ? `${this.partsHtml(obj)}<h4>Photovoltaik auf dem Dach</h4>${this.formHtml(obj, [
        { k: "pv.enabled", l: "PV-Module auf dem Dach", t: "checkbox" }, { k: "pv.fill", l: "Dachfläche füllen", t: "checkbox", def: true },
        { k: "pv.orientation", l: "Modulausrichtung", t: "select", o: [["auto", "automatisch (mehr Module)"], ["landscape", "quer"], ["portrait", "hochkant"]], def: "auto" }, { k: "pv.rows", l: "Reihen (ohne Füllen)", t: "number", s: 1 }, { k: "pv.cols", l: "Module je Reihe (ohne Füllen)", t: "number", s: 1 },
        { k: "pv.over", l: "Lage entlang des Dachs", t: "select", o: [["", "Mitte"], ...this.partOptions(obj)] },
        { k: "pv.edge", l: "Lage am Hang", t: "select", o: [["center", "Mitte"], ["low", "unten an der Traufe"], ["high", "oben am First"]], def: "center" },
        { k: "pv.wp", l: "Leistung je Modul (Wp)", t: "number", s: 10, p: "420" }, { k: "pv.entity", l: "Leistungs-Sensor dieser Anlage", list: "ents" },
      ])}` : ""}`;
    }

    if (selHtml) html += `<div data-obj="sel">${selHtml}</div>`;

    const devs = this.deviceList(fl);
    const nAuto = devs.filter((d) => !d.explicit).length;
    const nHidden = (this.plan.settings.hiddenEntities || []).length;
    html += `<h4>Geräte dieser Etage (${devs.length})</h4>
      <input id="devfilter" placeholder="Filter …" value="${esc(this._devFilter || "")}">
      <div id="devlist" style="max-height:220px;overflow:auto;margin-top:4px"></div>
      <div class="row"><button id="dev-selall">Alle wählen</button><button id="dev-hideauto" ${nAuto ? "" : "disabled"}>Auto ausblenden (${nAuto})</button></div>
      <button class="full" id="dev-restore" ${nHidden ? "" : "disabled"}>↺ Ausgeblendete zeigen (${nHidden})</button>`;

    html += `<h4>Import</h4>
      <button class="full" id="imp-live">⇩ Von NeonPlan 3D übernehmen</button>
      <button class="full" id="imp-file">📂 Datei laden (NeonPlan / Plan / Gelände)</button>
      <button class="full" id="exp-file">⬆ Plan als Datei sichern</button>`;
    side.innerHTML = html;

    this.bindForm(side.querySelector('[data-obj="floor"]'), fl, (el) => { if (el.dataset.k === "name") this.renderBar(); });
    if (obj) this.bindForm(side.querySelector('[data-obj="sel"]'), obj, (el) => {
      if (el.dataset.k === "levels" && s?.kind === "site") { applyLevels(this.plan, obj, obj.levels || 1); this.renderSide(); }
      if (el.dataset.k === "height" && s?.kind === "site") { obj.storeys = (obj.storeys || []).filter((e) => e < obj.height - 0.3); }
      if (el.dataset.k === "type" || el.dataset.k === "style" || (el.dataset.k === "entity" && s?.kind === "device")) this.renderSide();
    });
    side.querySelector("[data-plan]")?.addEventListener("change", (e) => { this.plan.settings.autoDevices = e.target.checked; this.changed(); });
    side.querySelector("#grid").onchange = (e) => { this.grid = +e.target.value; };
    side.querySelector("#pent")?.addEventListener("change", (e) => (this.pendingEntity = e.target.value));
    side.querySelector("#ftype")?.addEventListener("change", (e) => (this.furnType = e.target.value));
    if (s?.kind === "site" && obj) this.bindParts(side, obj);
    side.querySelector("#scr-edit")?.addEventListener("click", () => openScreenEditor(this, obj));
    side.querySelector("#car-edit")?.addEventListener("click", () => this.features.find((f) => f instanceof CarFeature).openCarSettings(obj));
    this.fillDevList();
    side.querySelector("#devfilter").oninput = (e) => { this._devFilter = e.target.value; this.fillDevList(); };
    side.querySelector("#dev-selall").onclick = () => {
      this.multi = this.deviceList(this.floor).map((d) => ({ kind: "device", id: d.id }));
      this.sel = this.multi.length === 1 ? this.multi[0] : null;
      this.renderSide(); this.draw2D();
    };
    side.querySelector("#dev-hideauto").onclick = () => {
      this.pushUndo();
      this.deviceList(this.floor).filter((d) => !d.explicit).forEach((d) => this.hideEntity(d.entity));
      this.changed({ side: true });
    };
    side.querySelector("#dev-restore").onclick = () => { this.pushUndo(); this.plan.settings.hiddenEntities = []; this.changed({ side: true }); };
    side.querySelector("#multi-del")?.addEventListener("click", () => this.deleteHits([...this.multi]));
    side.querySelector("#auto-hide")?.addEventListener("click", () => this.deleteHits([s]));
    side.querySelector("#auto-pin")?.addEventListener("click", () => {
      const src = this.itemOf(s);
      if (!src) return;
      this.pushUndo();
      const d = { id: uid(), entity: src.entity, x: src.x, z: src.z };
      fl.devices.push(d);
      this.sel = { kind: "device", id: d.id };
      this.changed({ side: true });
    });
    side.querySelector("#imp-live").onclick = () => this.importLive();
    side.querySelector("#imp-file").onclick = () => this.importFile();
    side.querySelector("#exp-file").onclick = () => this.exportFile();
  }
  // ---------------------------------------------------------- parts of a shed building (garages, carport, ...)
  siteLength(b) { return siteFrame(b.points, b.roof, this.plan.site?.north ?? 0).L; }
  ensureParts(b) {
    if (!b.parts && b.layout) { b.parts = partsFromLayout(this.siteLength(b), b.layout); delete b.layout; }
    return b.parts || [];
  }
  partOptions(b) {
    return this.ensureParts(b).map((p, i) => [`#${i}`, `${i + 1}. ${p.name || PART_LABELS[p.type] || p.type}`]);
  }
  partsHtml(b) {
    const parts = this.ensureParts(b);
    const types = Object.entries(PART_LABELS);
    const rows = parts.map((p, i) => `<div class="prow" data-i="${i}">
      <div class="l1"><select data-f="type">${types.map(([k, l]) => `<option value="${k}" ${p.type === k ? "selected" : ""}>${l}</option>`).join("")}</select>
        <button data-a="up" title="nach links (West)">←</button><button data-a="down" title="nach rechts (Ost)">→</button><button data-a="del" title="Teil entfernen">🗑</button></div>
      <div class="l2">${p.type === "carport"
        ? `<input data-f="stalls" type="number" step="1" value="${p.stalls ?? 4}" title="Stellplätze"><input data-f="stallWidth" type="number" step="0.1" value="${p.stallWidth ?? 2.9}" title="Breite je Stellplatz (m)">`
        : `<input data-f="len" type="number" step="0.1" value="${p.len ?? ""}" placeholder="Länge: Rest" title="Länge (m), leer = Rest">`}
        ${p.type === "garage" || p.type === "bike" ? `<input data-f="door" type="number" step="0.1" value="${p.door ?? ""}" placeholder="Tür (m)" title="Türbreite (m)">` : ""}</div>
      ${p.type === "garage" || p.type === "bike"
        ? `<div class="l3"><select data-f="doorSide" title="An welcher Wand das Tor sitzt">${Object.entries(DOOR_SIDES).map(([k, l]) => `<option value="${k}" ${(p.doorSide || "low") === k ? "selected" : ""}>Tor: ${l}</option>`).join("")}</select></div>`
        : p.type === "carport"
          ? `<div class="l3"><select data-f="numberFrom" title="Von welchem Ende die Stellplätze gezählt werden"><option value="east" ${p.numberFrom !== "west" ? "selected" : ""}>Nummer 1 im Osten</option><option value="west" ${p.numberFrom === "west" ? "selected" : ""}>Nummer 1 im Westen</option></select></div>`
          : ""}</div>`).join("");
    return `<h4>Aufteilung (West → Ost)</h4>${rows}<button class="full" id="part-add">+ Teil hinzufügen</button>
      <div style="opacity:.6;font-size:11px;margin-top:4px">Länge leer = Rest · Gesamtlänge ${this.siteLength(b).toFixed(1)} m · Carport: Stellplätze × Breite</div>`;
  }
  bindParts(side, b) {
    side.querySelectorAll(".prow").forEach((row) => {
      const i = +row.dataset.i;
      row.querySelectorAll("[data-f]").forEach((inp) => {
        inp.onchange = () => {
          this.pushUndo();
          const p = b.parts[i], f = inp.dataset.f;
          if (f === "type") { p.type = inp.value; if (p.type === "carport") { p.stalls ??= 4; p.stallWidth ??= 2.9; } }
          else if (f === "doorSide" || f === "numberFrom") { if (inp.value === (f === "doorSide" ? "low" : "east")) delete p[f]; else p[f] = inp.value; } // defaults are not stored
          else p[f] = inp.value === "" ? null : +inp.value;
          this.changed({ side: f === "type" });
        };
      });
      row.querySelectorAll("[data-a]").forEach((btn) => {
        btn.onclick = () => {
          this.pushUndo();
          const a = btn.dataset.a;
          if (a === "del") b.parts.splice(i, 1);
          else { const j = a === "up" ? i - 1 : i + 1; if (j >= 0 && j < b.parts.length) [b.parts[i], b.parts[j]] = [b.parts[j], b.parts[i]]; }
          this.changed({ side: true });
        };
      });
    });
    side.querySelector("#part-add")?.addEventListener("click", () => { this.pushUndo(); (b.parts ||= []).push({ type: "garage", len: null }); this.changed({ side: true }); });
  }

  fillDevList() {
    const box = this.$("#devlist");
    if (!box) return;
    const f = (this._devFilter || "").toLowerCase();
    const st = this._hass?.states || {};
    const nameOf = (d) => d.name || st[d.entity]?.attributes?.friendly_name || d.entity;
    const rows = this.deviceList(this.floor).filter((d) => !f || d.entity.toLowerCase().includes(f) || nameOf(d).toLowerCase().includes(f));
    box.innerHTML = "";
    rows.slice(0, 300).forEach((d) => {
      const row = document.createElement("div");
      row.className = "dev" + (this.isSel(d.id) ? " on" : "");
      row.innerHTML = `<div style="min-width:0;flex:1"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(nameOf(d))}</b><span class="s">${d.explicit ? "" : "auto · "}${esc(d.entity)}</span></div><button title="Entfernen" data-del>🗑</button>`;
      row.onclick = (e) => {
        if (e.target.closest("[data-del]")) { this.deleteHits([{ kind: "device", id: d.id }]); return; }
        this.sel = { kind: "device", id: d.id };
        this.multi = [];
        this.cam2.x = d.x; this.cam2.z = d.z;
        this.renderSide(); this.draw2D();
      };
      box.append(row);
    });
    if (!rows.length) box.innerHTML = '<div style="opacity:.6;padding:6px">Keine Geräte</div>';
  }

  // ---------------------------------------------------------- import / export
  async importLive() {
    try {
      const res = await this._hass.callWS({ type: "neonplan3d/building/get" });
      this.applyImport(res, "NeonPlan 3D (live)");
    } catch (e) {
      this.msg("NeonPlan 3D nicht erreichbar: " + (e.message || e.code || e));
    }
  }
  importFile() {
    const inp = document.createElement("input");
    inp.type = "file"; inp.accept = ".json,application/json";
    inp.onchange = async () => {
      try {
        const data = JSON.parse(await inp.files[0].text());
        this.applyImport(data, inp.files[0].name);
      } catch (e) { this.msg("Datei nicht lesbar: " + e.message); }
    };
    inp.click();
  }
  exportFile() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(this.plan, null, 1)], { type: "application/json" }));
    a.download = "homeplan3d-plan.json";
    a.click();
  }
  applyImport(data, label) {
    const d = data?.result ?? data;
    const hasContent = this.plan.floors.some((f) => f.rooms.length || f.walls.length);
    // a site-only file (cadastre buildings) is merged into the current plan
    if (d?.buildings && !d.floors) {
      this.pushUndo();
      this.plan.site = { ...(this.plan.site || {}), ...d };
      this.plan = normalizePlan(this.plan);
      this.showSite = true;
      this.renderBar(); this.changed({ side: true }); this.fit();
      this.msg(`${d.buildings.length} Gebäude aus ${label} übernommen`);
      return;
    }
    let plan;
    const b = d?.building ?? d;
    const isNeon = b?.settings && ("wall_exterior" in b.settings || "buttons" in b.settings) || b?.floors?.some((f) => "placements" in f || "cut_height" in f);
    try { plan = isNeon ? convertNeonPlan(data) : normalizePlan(clone(d)); } catch (e) { this.msg("Import fehlgeschlagen: " + e.message); return; }
    if (hasContent && !confirm("Den vorhandenen Plan durch den importierten ersetzen?")) return;
    this.pushUndo();
    const oldSite = this.plan.site;
    if (!plan.site && oldSite) plan.site = oldSite;
    this.setPlan(plan, { fit: true });
    if (this.editing) this.renderSide();
    this.msg(`${plan.floors.length} Etagen aus ${label} übernommen – mit 💾 speichern`);
  }

  // ---------------------------------------------------------- devices (explicit + by HA area)
  deviceList(floor) {
    const h = this._hass;
    const list = floor.devices.map((d) => ({ ...d, explicit: true }));
    if (!h?.entities || !this.plan.settings.autoDevices) return list;
    const placed = new Set(this.plan.floors.flatMap((f) => f.devices.map((d) => d.entity)));
    const hidden = new Set(this.plan.settings.hiddenEntities || []);
    floor.rooms.forEach((r) => {
      if (!r.area || r.autoDevices === false) return;
      // layout over all candidates so positions stay put when single devices are pinned or hidden
      const ents = Object.keys(h.states).sort().filter((e) => {
        if (!AUTO_DOMAINS.includes(domainOf(e))) return false;
        const reg = h.entities[e];
        if (!reg || reg.hidden) return false;
        const area = reg.area_id || h.devices?.[reg.device_id]?.area_id;
        return area === r.area;
      });
      const [x0, z0, x1, z1] = bbox(r.points);
      const cols = Math.max(1, Math.floor((x1 - x0) / 0.8));
      let n = 0, tries = 0;
      const out = [];
      while (out.length < ents.length && tries++ < 400) {
        const col = n % cols, row = Math.floor(n / cols);
        const p = [x0 + 0.5 + col * 0.8, z0 + 0.5 + row * 0.8];
        n++;
        if (p[1] > z1) { out.push([(x0 + x1) / 2, (z0 + z1) / 2]); continue; }
        if (inPoly(p, r.points)) out.push(p);
      }
      ents.forEach((e, i) => { if (!placed.has(e) && !hidden.has(e)) list.push({ id: "auto:" + e, entity: e, x: out[i][0], z: out[i][1], explicit: false }); });
    });
    return list;
  }

  // ---------------------------------------------------------- room climate (temperature / humidity)
  /** Climate sensors of a room: explicit ones from the plan, otherwise detected from the HA area. */
  climateFor(room) {
    const c = room.climate || {};
    const auto = room.area ? this.areaClimate(room.area) : {};
    return { temperature: c.temperature || auto.temperature || null, humidity: c.humidity || auto.humidity || null, co2: c.co2 || auto.co2 || null };
  }
  areaClimate(area) {
    const out = { temperature: null, humidity: null, co2: null };
    const h = this._hass;
    if (!area || !h?.entities) return out;
    const sig = Object.keys(h.entities).length + "|" + Object.keys(h.states).length;
    if (this._areaClimate?.sig !== sig) this._areaClimate = { sig, map: new Map() };
    if (this._areaClimate.map.has(area)) return this._areaClimate.map.get(area);
    const classes = { temperature: "temperature", humidity: "humidity", carbon_dioxide: "co2" };
    for (const e of Object.keys(h.states).sort()) {
      if (domainOf(e) !== "sensor") continue;
      const reg = h.entities[e];
      if (!reg || reg.hidden || (reg.entity_category && reg.entity_category !== "none")) continue;
      if ((reg.area_id || h.devices?.[reg.device_id]?.area_id) !== area) continue;
      const k = classes[h.states[e].attributes?.device_class];
      if (k && !out[k]) out[k] = e;
    }
    this._areaClimate.map.set(area, out);
    return out;
  }
  updateClimate(d) {
    const st = this._hass?.states;
    if (!st) return;
    const num = (e) => { const v = e && st[e] ? parseFloat(st[e].state) : NaN; return Number.isFinite(v) ? v : null; };
    const t = num(d.temperature), hu = num(d.humidity), co = num(d.co2);
    const parts = [];
    if (t != null) parts.push(`${t.toFixed(1)} °C`);
    if (hu != null) parts.push(`${Math.round(hu)} %`);
    if (co != null) parts.push(`${Math.round(co)} ppm`);
    const col = new THREE.Color().setHSL((220 - ((Math.max(15, Math.min(28, t ?? 21)) - 15) / 13) * 220) / 360, 0.85, 0.55);
    if (parts.length) setSprite(d.sprite, parts.join(" · "), t != null ? "#" + col.getHexString() : "#19e6ff");
    d.sprite.visible = this.showClimate && parts.length > 0;
    if (this.heatmap && t != null) {
      d.mat.color.copy(col).multiplyScalar(0.35);
      d.mat.emissive.copy(col);
      d.mat.emissiveIntensity = 0.6;
    } else {
      d.mat.color.copy(d.base.color);
      d.mat.emissive.copy(d.base.emissive);
      d.mat.emissiveIntensity = d.base.ei;
    }
  }

  // ---------------------------------------------------------- 3D
  init3D() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
    this.camera.position.set(14, 14, 18);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.viewEl.prepend(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.maxPolarAngle = Math.PI / 2.02;
    this.ambient = new THREE.AmbientLight(0x8090c0, 0.9);
    this.scene.add(this.ambient);
    this.sunLight = new THREE.DirectionalLight(0xffffff, 0.7);
    this.sunLight.position.set(5, 18, 8);
    this.scene.add(this.sunLight);
    this.labelRenderer = new CSS2DRenderer({ element: this.$("#labels") });
    this.world = new THREE.Group();
    this.scene.add(this.world);
    this.ray = new THREE.Raycaster();

    const el = this.renderer.domElement;
    let down = null;
    el.addEventListener("pointerdown", (e) => { down = { x: e.clientX, y: e.clientY, t: Date.now() }; });
    el.addEventListener("pointerup", (e) => {
      if (!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5;
      const long = Date.now() - down.t > 500;
      down = null;
      if (!moved) this.pick3D(e, long);
    });
    let last = performance.now() / 1000;
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      this.controls.update();
      const t = performance.now() / 1000, dt = Math.min(0.1, t - last);
      last = t;
      this.dyn.forEach((d) => { if (d.pulse && d.on) d.glow.scale.setScalar(d.baseScale * (1 + 0.05 * Math.sin(t * 3))); });
      this.features.forEach((f) => { if (f.on) f.tick(dt, t); });
      this.renderer.render(this.scene, this.camera);
      this.labelRenderer.render(this.scene, this.camera);
    };
    loop();
  }
  resize() {
    const w = this.viewEl.clientWidth, h = this.viewEl.clientHeight;
    if (w && h) {
      this.renderer.setSize(w, h, false);
      this.labelRenderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
    const c = this.edCanvas;
    if (c.clientWidth) { c.width = c.clientWidth * devicePixelRatio; c.height = c.clientHeight * devicePixelRatio; this.draw2D(); }
  }
  extent() {
    const pts = this.plan.floors.flatMap((f) => f.rooms.flatMap((r) => r.points));
    if (this.showSite) (this.plan.site?.buildings || []).forEach((b) => b.visible !== false && pts.push(...b.points));
    return pts.length ? bbox(pts) : null;
  }
  fit() {
    const bb = this.extent();
    if (!bb) return;
    const [x0, z0, x1, z1] = bb;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, size = Math.max(x1 - x0, z1 - z0, 4);
    const top = elevation(this.plan, this.plan.floors.length - 1) / 2;
    this.controls.target.set(cx, top / 2, cz);
    this.camera.position.set(cx + size * 0.55, top + size * 0.75, cz + size * 0.95);
    this.cam2 = { x: cx, z: cz, s: Math.max(8, Math.min(120, 500 / size)) };
  }

  rebuild3D() {
    if (!this.world) return;
    this.features.forEach((f) => f.dispose());
    this.$("#labels")?.replaceChildren();
    this.world.traverse((o) => { o.geometry?.dispose(); if (o.material && !o.material.map) o.material.dispose?.(); });
    this.world.clear();
    const th = THEMES[this.theme] || THEMES.neon;
    this.scene.background = new THREE.Color(th.bg);
    this.scene.fog = new THREE.Fog(th.bg, 60, 160);
    const maxFloor = this.editing || this.cut ? this.fi : Infinity;
    const res = buildBuilding(this.plan, {
      theme: this.theme,
      maxFloor,
      showRoof: this.showRoof,
      showSite: this.showSite,
      devicesFor: (f) => this.deviceList(f),
      climateFor: (r) => this.climateFor(r),
      glowTex: () => this.glowTex(),
      label: (t, theme) => this.label(t, theme),
    });
    this.world.add(res.root);
    this.dyn = res.dyn;
    this.pickables = res.pickables;
    this.anchors = res.anchors;
    this.features.forEach((f) => {
      f.group = new THREE.Group();
      f.on = this.fxOn(f.id);
      f.group.visible = f.on;
      this.world.add(f.group);
      f.build(res.anchors);
    });
    const hc = this.dyn.some((d) => d.kind === "roomclimate");
    const sig = this.features.map((f) => (f.available() ? "1" : "0")).join("");
    if (hc !== this.hasClimate || sig !== this._fxSig) { this.hasClimate = hc; this._fxSig = sig; this.renderBar(); }
    const ext = this.extent();
    if (ext) {
      const grid = new THREE.GridHelper(120, 120, this.theme === "day" ? 0xb8c2d6 : 0x1d3057, this.theme === "day" ? 0xcfd6e6 : 0x101c36);
      grid.position.set((ext[0] + ext[2]) / 2, Math.min(0, elevation(this.plan, 0)) - (this.plan.settings.slab ?? 0.18) - 0.02, (ext[1] + ext[3]) / 2);
      this.world.add(grid);
    }
    this.updateStates();
  }
  glowTex() {
    if (this._glow) return this._glow;
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const x = c.getContext("2d");
    const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.3, "rgba(255,255,255,.35)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    return (this._glow = new THREE.CanvasTexture(c));
  }
  label(text, theme) {
    const key = theme + "|" + text;
    let tex = this._labels.get(key);
    if (!tex) {
      const c = document.createElement("canvas");
      c.width = 384; c.height = 64;
      const x = c.getContext("2d");
      x.font = "bold 30px sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillStyle = THEMES[theme]?.text || "#dfe8ff"; x.shadowColor = THEMES[theme]?.glow || "#19e6ff"; x.shadowBlur = 8;
      x.fillText(text, 192, 32, 370);
      tex = new THREE.CanvasTexture(c);
      this._labels.set(key, tex);
    }
    const m = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.5), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    m.rotation.x = -Math.PI / 2;
    m.renderOrder = 5;
    return m;
  }

  updateStates() {
    const st = this.getStates();
    if (!st) return;
    this.features.forEach((f) => { if (f.on) f.update(st); });
    for (const d of this.dyn) {
      if (d.kind === "roomclimate") { this.updateClimate(d); continue; }
      const s = st[d.entity];
      if (!s) continue;
      const on = !OFF_STATES.includes(s.state);
      d.on = on;
      if (d.kind === "opening") {
        const open = ["on", "open", "opening", "tilted"].includes(s.state);
        if (d.pivot) d.pivot.rotation.y = open ? d.sign * d.maxAngle : 0;
        if (d.mat) { d.mat.emissiveIntensity = open ? 1.2 : 0.5; d.mat.opacity = open ? 0.35 : d.type === "door" ? 0.75 : 0.35; }
      } else if (d.kind === "value") {
        const v = parseFloat(s.state);
        if (Number.isNaN(v)) { d.sprite.visible = false; continue; }
        const unit = s.attributes.unit_of_measurement || "";
        const text = unit === "W" && Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(2)} kW` : `${Math.round(v * 10) / 10} ${unit}`;
        setSprite(d.sprite, text);
        const cards = this.features.some((f) => f.id === "energy" && f.on && f.available()) && this.holo;
        d.sprite.visible = !cards && (d.always || Math.abs(v) > 5);
      } else if (d.kind === "solar") {
        const v = parseFloat(s.state) || 0;
        d.mat.emissiveIntensity = 0.15 + Math.min(1, v / d.wp) * 1.2;
      } else if (d.kind === "furniture") {
        d.glow.visible = on;
        d.mats.forEach((m) => (m.emissiveIntensity = on ? 0.9 : 0.18));
      } else if (d.kind === "camera") {
        // the camera feature draws the field of view; the body just glows while the camera is reachable
        d.glow.visible = false;
        d.mesh.material.emissive.setHex(s.state === "unavailable" ? 0 : 0x19e6ff);
        d.mesh.material.emissiveIntensity = 0.55;
      } else {
        let col = new THREE.Color(0xffd08a);
        const a = s.attributes;
        if (a.rgb_color) col = new THREE.Color(`rgb(${a.rgb_color.join(",")})`);
        else if (d.kind !== "light") col = new THREE.Color(0x19e6ff);
        const br = a.brightness != null ? a.brightness / 255 : 1;
        d.glow.visible = on;
        d.glow.material.color.copy(col);
        d.glow.material.opacity = 0.3 + 0.7 * br;
        d.mesh.material.emissive.copy(on ? col : new THREE.Color(0));
        d.mesh.material.emissiveIntensity = on ? 0.4 + br : 0;
      }
    }
  }

  pick3D(e, long) {
    const r = this.renderer.domElement.getBoundingClientRect();
    this.ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), this.camera);
    const hit = this.ray.intersectObjects(this.pickables, false)[0];
    if (!hit) { if (!this.editing && this.panelRoom) { this.panelRoom = null; this.$("#side").classList.add("hidden"); } return; }
    const u = hit.object.userData;
    if (!this.editing && this.features.some((f) => f.on && (long ? f.onLongPress(u, e) : f.onTap(u, e)))) return;
    if (u.entity) {
      if (long || this.editing) return this.moreInfo(u.entity);
      const dom = domainOf(u.entity);
      if (["light", "switch", "input_boolean", "fan"].includes(dom)) this._hass.callService("homeassistant", "toggle", { entity_id: u.entity });
      else if (dom === "cover") this._hass.callService("cover", "toggle", { entity_id: u.entity });
      else if (dom === "lock") this._hass.callService("lock", this._hass.states[u.entity]?.state === "locked" ? "unlock" : "lock", { entity_id: u.entity });
      else this.moreInfo(u.entity);
    } else if (u.room && !this.editing) {
      this.panelRoom = u.room;
      this.renderRoomPanel();
    }
  }
  moreInfo(entityId) {
    this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
  }
  renderRoomPanel() {
    const side = this.$("#side");
    const fl = this.plan.floors.find((f) => f.rooms.some((r) => r.id === this.panelRoom));
    const room = fl?.rooms.find((r) => r.id === this.panelRoom);
    if (!room) return;
    side.classList.remove("hidden");
    const st = this._hass.states;
    const devs = this.deviceList(fl).filter((d) => inPoly([d.x, d.z], room.points));
    const cl = this.climateFor(room);
    const val = (e, unit) => (e && st[e] && st[e].state !== "unavailable" ? `${st[e].state}${unit}` : null);
    const climate = [val(cl.temperature, " °C"), val(cl.humidity, " %"), val(cl.co2, " ppm")].filter(Boolean).join(" · ");
    side.innerHTML = `<b>${esc(room.name)}</b>${climate ? `<div style="opacity:.8;margin:4px 0 6px">${climate}</div>` : ""}${devs.length ? "" : "<p style='opacity:.6'>Keine Geräte</p>"}`;
    devs.forEach((d) => {
      const s = st[d.entity];
      if (!s) return;
      const row = document.createElement("div");
      const on = s.state === "on" || s.state === "open";
      row.className = "dev" + (on ? " on" : "");
      row.innerHTML = `<div><b>${esc(d.name || s.attributes.friendly_name || d.entity)}</b><br><span class="s">${esc(s.state)}</span></div>`;
      if (domainOf(d.entity) === "light") {
        const r = document.createElement("input");
        r.type = "range"; r.min = 1; r.max = 255; r.style.width = "70px";
        r.value = s.attributes.brightness || (on ? 255 : 1);
        r.onclick = (e) => e.stopPropagation();
        r.onchange = () => this._hass.callService("light", "turn_on", { entity_id: d.entity, brightness: +r.value });
        row.append(r);
      }
      row.onclick = () => (["light", "switch", "input_boolean", "fan"].includes(domainOf(d.entity)) ? this._hass.callService("homeassistant", "toggle", { entity_id: d.entity }) : this.moreInfo(d.entity));
      row.oncontextmenu = (e) => { e.preventDefault(); this.moreInfo(d.entity); };
      side.append(row);
    });
  }

  // ---------------------------------------------------------- 2D editor
  initEditor() {
    const c = this.edCanvas;
    this.mouse = [0, 0];
    const w2s = (p) => [(p[0] - this.cam2.x) * this.cam2.s + c.width / 2, (p[1] - this.cam2.z) * this.cam2.s + c.height / 2];
    const s2w = (x, y) => [(x * devicePixelRatio - c.width / 2) / this.cam2.s + this.cam2.x, (y * devicePixelRatio - c.height / 2) / this.cam2.s + this.cam2.z];
    this.w2s = w2s;
    const pos = (e) => { const r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const world = (e, doSnap = true) => { const p = s2w(...pos(e)); return doSnap && !e.altKey ? [snap(p[0], this.grid), snap(p[1], this.grid)] : p; };
    let drag = null, pan = null;

    c.addEventListener("wheel", (e) => {
      e.preventDefault();
      const before = s2w(...pos(e));
      this.cam2.s = Math.max(5, Math.min(250, this.cam2.s * (e.deltaY < 0 ? 1.12 : 0.89)));
      const after = s2w(...pos(e));
      this.cam2.x += before[0] - after[0]; this.cam2.z += before[1] - after[1];
      this.draw2D();
    }, { passive: false });

    c.addEventListener("pointerdown", (e) => {
      c.setPointerCapture(e.pointerId);
      c.focus();
      if (e.button === 1 || e.button === 2) { pan = { x: e.clientX, y: e.clientY, cx: this.cam2.x, cz: this.cam2.z }; return; }
      const p = world(e), raw = world(e, false), fl = this.floor, t = this.tool;
      if (t === "select") {
        const hit = this.hit2D(raw);
        if (e.shiftKey && hit) { // add to / remove from the multi selection
          const cur = this.multi.length ? this.multi : this.sel ? [this.sel] : [];
          this.multi = cur.some((m) => m.id === hit.id) ? cur.filter((m) => m.id !== hit.id) : [...cur, hit];
          this.sel = this.multi.length === 1 ? this.multi[0] : null;
        } else if (hit) {
          const inMulti = this.multi.length > 1 && this.multi.some((m) => m.id === hit.id);
          if (!inMulti) { this.multi = []; this.sel = hit; }
          const group = inMulti ? this.multi : [hit];
          drag = { items: group.map((h) => ({ hit: h, orig: this.snapshotFor(h) })), start: p, undone: false };
        } else {
          this.sel = null; this.multi = [];
          drag = { marquee: raw };
        }
        this.renderSide(); this.draw2D();
      } else if (t === "erase") {
        const hit = this.hit2D(raw);
        if (hit) this.deleteHits([hit]);
      } else if (t === "rect" || t === "building") drag = { rect: p };
      else if (t === "room") {
        if (this.draft.length > 2 && Math.hypot(p[0] - this.draft[0][0], p[1] - this.draft[0][1]) < 0.01) this.finishRoom();
        else this.draft.push(p);
      } else if (t === "wall") {
        if (this.draft.length) { this.pushUndo(); fl.walls.push({ id: uid(), a: this.draft[0], b: p, t: null, h: null }); this.draft = [p]; this.changed(); }
        else this.draft = [p];
      } else if (t === "door" || t === "window") this.placeOpening(raw, t);
      else if (t === "furn") {
        this.pushUndo();
        const [w, d, h] = FD[this.furnType] || [0.6, 0.6, 0.8];
        const f = { id: uid(), type: this.furnType, x: p[0], z: p[1], rot: 0, w, d, h };
        fl.furniture.push(f);
        this.sel = { kind: "furniture", id: f.id };
        this.changed({ side: true });
      } else if (t === "device") {
        if (!this.pendingEntity) { this.hint("Erst eine Entität im rechten Panel eingeben"); return; }
        this.pushUndo();
        const d = { id: uid(), entity: this.pendingEntity, x: p[0], z: p[1] };
        fl.devices.push(d);
        this.sel = { kind: "device", id: d.id };
        this.changed({ side: true });
      }
      this.draw2D();
    });
    c.addEventListener("pointermove", (e) => {
      this.mouse = world(e);
      if (pan) {
        this.cam2.x = pan.cx - ((e.clientX - pan.x) * devicePixelRatio) / this.cam2.s;
        this.cam2.z = pan.cz - ((e.clientY - pan.y) * devicePixelRatio) / this.cam2.s;
      } else if (drag?.rect) { drag.cur = this.mouse; this.rectPrev = [drag.rect, this.mouse]; }
      else if (drag?.marquee) this.marquee = [drag.marquee, world(e, false)];
      else if (drag?.items) {
        if (!drag.undone) { this.pushUndo(); drag.undone = true; this.pinAutos(drag); }
        this.moveItems(drag, this.mouse, world(e, false));
      }
      this.draw2D();
    });
    c.addEventListener("pointerup", () => {
      if (drag?.rect && drag.cur) {
        const [a, b] = [drag.rect, drag.cur];
        if (Math.abs(a[0] - b[0]) >= this.grid && Math.abs(a[1] - b[1]) >= this.grid) {
          this.pushUndo();
          const pts = [[a[0], a[1]], [b[0], a[1]], [b[0], b[1]], [a[0], b[1]]];
          if (this.tool === "building") {
            this.plan.site = this.plan.site || { buildings: [] };
            const nb = newSiteBuilding(pts, this.plan.site.buildings.length + 1);
            this.plan.site.buildings.push(nb);
            this.showSite = true;
            this.sel = { kind: "site", id: nb.id };
          } else {
            const r = { id: uid(), name: `Raum ${this.floor.rooms.length + 1}`, color: "#19e6ff", area: null, points: pts };
            this.floor.rooms.push(r);
            this.sel = { kind: "room", id: r.id };
          }
          this.tool = "select"; this.renderBar(); this.changed({ side: true });
        }
      } else if (drag?.marquee && this.marquee) {
        const [a, b] = this.marquee;
        if ((Math.hypot(b[0] - a[0], b[1] - a[1]) * this.cam2.s) / devicePixelRatio > 6) { this.selectInRect(a, b); this.renderSide(); }
      } else if (drag?.items) this.rebuild3D();
      drag = null; pan = null; this.rectPrev = null; this.marquee = null; this.draw2D();
    });
    c.addEventListener("dblclick", () => { if (this.tool === "room") { this.draft.pop(); this.finishRoom(); } else if (this.tool === "wall") this.draft = []; });
    c.addEventListener("contextmenu", (e) => e.preventDefault());
    c.tabIndex = 0;
    c.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { this.draft = []; this.draw2D(); }
      if ((e.key === "Delete" || e.key === "Backspace") && (this.multi.length || this.sel)) this.deleteHits(this.multi.length > 1 ? this.multi : [this.sel]);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); this.undo(); }
    });
  }
  finishRoom() {
    if (this.draft.length >= 3) {
      this.pushUndo();
      const r = { id: uid(), name: `Raum ${this.floor.rooms.length + 1}`, color: "#19e6ff", area: null, points: this.draft };
      this.floor.rooms.push(r);
      this.sel = { kind: "room", id: r.id };
      this.tool = "select"; this.renderBar(); this.changed({ side: true });
    }
    this.draft = [];
    this.draw2D();
  }
  segs() { return wallNetwork(this.floor, this.plan.settings); }
  nearestWall(p, tol = 0.6) {
    let best = null;
    for (const s of this.segs()) {
      const r = distSeg(p, s.a, s.b);
      if (r.d < tol + s.t / 2 && (!best || r.d < best.d)) best = { ...r, s };
    }
    return best;
  }
  placeOpening(p, type) {
    const best = this.nearestWall(p);
    if (!best) { this.hint("Näher an eine Wand klicken"); return; }
    this.pushUndo();
    const u = snap(best.t * best.s.len, 0.05);
    const k = u / best.s.len;
    const o = {
      id: uid(), type,
      x: +(best.s.a[0] + (best.s.b[0] - best.s.a[0]) * k).toFixed(3), z: +(best.s.a[1] + (best.s.b[1] - best.s.a[1]) * k).toFixed(3),
      rot: best.s.rot, w: type === "door" ? 0.9 : 1.2, h: type === "door" ? 2.1 : 1.3, sill: type === "door" ? 0 : 0.9, hinge: "left", swing: "in",
    };
    if (this.pendingEntity && domainOf(this.pendingEntity) !== "light") o.entity = this.pendingEntity;
    this.floor.openings.push(o);
    this.sel = { kind: "opening", id: o.id };
    this.changed({ side: true });
  }
  hit2D(p) {
    const fl = this.floor, tol = 12 / this.cam2.s;
    for (const d of this.deviceList(fl)) if (Math.hypot(p[0] - d.x, p[1] - d.z) < tol) return { kind: "device", id: d.id };
    for (const o of fl.openings) if (Math.hypot(p[0] - o.x, p[1] - o.z) < Math.max(tol, o.w / 2)) return { kind: "opening", id: o.id };
    for (const f of [...fl.furniture].reverse()) {
      const dx = p[0] - f.x, dz = p[1] - f.z, r = rad(f.rot || 0);
      const lx = dx * Math.cos(r) + dz * Math.sin(r), lz = -dx * Math.sin(r) + dz * Math.cos(r);
      if (Math.abs(lx) <= (f.w || 0.5) / 2 && Math.abs(lz) <= (f.d || 0.5) / 2) return { kind: "furniture", id: f.id };
    }
    for (const r of fl.rooms) {
      const i = r.points.findIndex((q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < tol);
      if (i >= 0) return { kind: "room", id: r.id, vertex: i };
    }
    if (this.showSite) for (const b of this.plan.site?.buildings || []) {
      const i = b.points.findIndex((q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < tol);
      if (i >= 0) return { kind: "site", id: b.id, vertex: i };
    }
    for (const w of fl.walls) if (distSeg(p, w.a, w.b).d < tol) return { kind: "wall", id: w.id };
    for (const r of [...fl.rooms].reverse()) if (inPoly(p, r.points)) return { kind: "room", id: r.id };
    if (this.showSite) for (const b of this.plan.site?.buildings || []) if (inPoly(p, b.points)) return { kind: "site", id: b.id };
    return null;
  }
  itemOf(hit) {
    const fl = this.floor;
    const arr = { room: fl.rooms, wall: fl.walls, device: fl.devices, opening: fl.openings, furniture: fl.furniture, site: this.plan.site?.buildings || [] }[hit.kind];
    const it = arr?.find((x) => x.id === hit.id);
    if (!it && hit.kind === "device" && String(hit.id).startsWith("auto:")) return this.deviceList(fl).find((d) => d.id === hit.id);
    return it;
  }
  isSel(id) { return this.sel?.id === id || this.multi.some((m) => m.id === id); }
  isAuto(hit) { return hit?.kind === "device" && String(hit.id).startsWith("auto:"); }
  hideEntity(e) {
    const arr = (this.plan.settings.hiddenEntities ||= []);
    if (!arr.includes(e)) arr.push(e);
  }
  // would this entity be placed automatically by the HA area of one of the rooms?
  isAutoCandidate(e) {
    const h = this._hass, reg = h?.entities?.[e];
    if (!reg || !AUTO_DOMAINS.includes(domainOf(e))) return false;
    const area = reg.area_id || h.devices?.[reg.device_id]?.area_id;
    return !!area && this.plan.floors.some((f) => f.rooms.some((r) => r.area === area && r.autoDevices !== false));
  }
  // turn automatically placed devices of a drag into real (pinned) devices before they move
  pinAutos(drag) {
    const srcs = drag.items.map((it) => (this.isAuto(it.hit) ? this.itemOf(it.hit) : null)); // read all positions first
    drag.items.forEach((it, i) => {
      if (!srcs[i]) return;
      const d = { id: uid(), entity: srcs[i].entity, x: srcs[i].x, z: srcs[i].z };
      this.floor.devices.push(d);
      const old = it.hit.id;
      it.hit = { kind: "device", id: d.id };
      it.orig = [d.x, d.z];
      if (this.sel?.id === old) this.sel = it.hit;
      this.multi = this.multi.map((m) => (m.id === old ? it.hit : m));
    });
  }
  selectInRect(a, b) {
    const fl = this.floor;
    const [x0, x1] = [Math.min(a[0], b[0]), Math.max(a[0], b[0])], [z0, z1] = [Math.min(a[1], b[1]), Math.max(a[1], b[1])];
    const inside = (x, z) => x >= x0 && x <= x1 && z >= z0 && z <= z1;
    const hits = [];
    // the rectangle only picks devices (bulk removal of furniture or doors by accident would be too easy);
    // shift+click adds anything else
    this.deviceList(fl).forEach((d) => inside(d.x, d.z) && hits.push({ kind: "device", id: d.id }));
    this.multi = hits;
    this.sel = hits.length === 1 ? hits[0] : null;
  }
  snapshotFor(hit) {
    const it = this.itemOf(hit);
    if (hit.kind === "room" || hit.kind === "site") return clone(it.points);
    if (hit.kind === "wall") return clone([it.a, it.b]);
    return [it.x, it.z];
  }
  moveItems(drag, m, raw) {
    drag.items.forEach((it) => this.moveOne(it.hit, it.orig, drag.start, m, raw));
  }
  moveOne(hit, orig, start, m, raw) {
    const it = this.itemOf(hit);
    if (!it) return;
    const dx = m[0] - start[0], dz = m[1] - start[1];
    if (hit.kind === "room" || hit.kind === "site") {
      it.points = orig.map((p, i) => (hit.vertex != null ? (i === hit.vertex ? [orig[i][0] + dx, orig[i][1] + dz] : p) : [p[0] + dx, p[1] + dz]));
    } else if (hit.kind === "wall") {
      it.a = [orig[0][0] + dx, orig[0][1] + dz]; it.b = [orig[1][0] + dx, orig[1][1] + dz];
    } else if (hit.kind === "opening") {
      const best = this.nearestWall(raw);
      if (best) {
        const u = snap(best.t * best.s.len, 0.05), k = u / best.s.len;
        it.x = best.s.a[0] + (best.s.b[0] - best.s.a[0]) * k; it.z = best.s.a[1] + (best.s.b[1] - best.s.a[1]) * k; it.rot = best.s.rot;
      }
    } else { it.x = orig[0] + dx; it.z = orig[1] + dz; }
  }
  // delete one or many items as a single undo step; automatically placed devices are hidden instead
  deleteHits(hits) {
    if (!hits.length) return;
    this.pushUndo();
    hits.forEach((h) => this.deleteOne(h));
    this.sel = null;
    this.multi = [];
    this.changed({ side: true });
  }
  deleteOne(hit) {
    const fl = this.floor;
    if (hit.kind === "room" && hit.vertex != null && this.tool === "erase") {
      const r = fl.rooms.find((x) => x.id === hit.id);
      if (r.points.length > 3) { r.points.splice(hit.vertex, 1); return; }
    }
    if (hit.kind === "device") {
      const dev = this.itemOf(hit);
      if (!dev) return;
      if (!this.isAuto(hit)) fl.devices = fl.devices.filter((x) => x.id !== hit.id);
      if (this.isAuto(hit) || this.isAutoCandidate(dev.entity)) this.hideEntity(dev.entity); // would otherwise reappear from the HA area
    } else if (hit.kind === "site") this.plan.site.buildings = this.plan.site.buildings.filter((x) => x.id !== hit.id);
    else {
      const key = { room: "rooms", wall: "walls", opening: "openings", furniture: "furniture" }[hit.kind];
      fl[key] = fl[key].filter((x) => x.id !== hit.id);
    }
  }

  draw2D() {
    if (!this.editing) return;
    const c = this.edCanvas, x = c.getContext("2d"), s = this.cam2.s, w2s = this.w2s, fl = this.floor, dpr = devicePixelRatio;
    x.clearRect(0, 0, c.width, c.height);
    x.fillStyle = "#0a0d1a"; x.fillRect(0, 0, c.width, c.height);
    const tl = [this.cam2.x - c.width / 2 / s, this.cam2.z - c.height / 2 / s];
    const br = [this.cam2.x + c.width / 2 / s, this.cam2.z + c.height / 2 / s];
    x.lineWidth = 1;
    for (let gx = Math.floor(tl[0]); gx <= br[0]; gx++) { const a = w2s([gx, 0])[0]; x.strokeStyle = gx % 5 ? "#141b33" : "#25345e"; x.beginPath(); x.moveTo(a, 0); x.lineTo(a, c.height); x.stroke(); }
    for (let gz = Math.floor(tl[1]); gz <= br[1]; gz++) { const a = w2s([0, gz])[1]; x.strokeStyle = gz % 5 ? "#141b33" : "#25345e"; x.beginPath(); x.moveTo(0, a); x.lineTo(c.width, a); x.stroke(); }

    // other buildings on the parcel + cadastre outline of the main building
    if (this.showSite) {
      x.setLineDash([8 * dpr, 5 * dpr]);
      (this.plan.site?.buildings || []).forEach((b) => {
        if (b.visible === false) return;
        const sel = this.isSel(b.id);
        this.path(x, b.points, true);
        x.fillStyle = "rgba(255,179,71,.08)"; x.fill();
        x.strokeStyle = sel ? "#fff" : "#ffb347"; x.lineWidth = (sel ? 3 : 2) * dpr; x.stroke();
        const lp = this.w2s(labelPoint(b.points));
        x.fillStyle = "#ffb347"; x.font = `${12 * dpr}px sans-serif`; x.textAlign = "center";
        x.fillText(`${b.name} (${polyArea(b.points).toFixed(0)} m²${b.levels > 1 ? `, ${b.levels} Geschosse` : ""})`, lp[0], lp[1]);
        if (sel) b.points.forEach((p) => { const q = this.w2s(p); x.fillStyle = "#fff"; x.fillRect(q[0] - 4 * dpr, q[1] - 4 * dpr, 8 * dpr, 8 * dpr); });
        (b.balconies || []).forEach((bc) => {
          if (!bc.points?.length) return;
          this.path(x, bc.points, true);
          x.fillStyle = "rgba(255,179,71,.18)"; x.fill();
          x.strokeStyle = "#ffb347"; x.lineWidth = dpr; x.stroke();
          const lp2 = this.w2s(labelPoint(bc.points));
          x.fillStyle = "#ffb347"; x.font = `${10 * dpr}px sans-serif`; x.textAlign = "center";
          x.fillText(bc.name || "Balkon", lp2[0], lp2[1]);
        });
        if (b.roof?.type === "shed") {
          const fr = siteFrame(b.points, b.roof, this.plan.site?.north ?? 0);
          x.setLineDash([]);
          x.strokeStyle = "#ffb347"; x.lineWidth = dpr;
          (resolveParts(fr.L, b) || []).forEach((pt) => {
            const carport = pt.type === "carport";
            const n = carport ? pt.stalls : 1;
            for (let k = 0; k <= n; k++) {
              const t = pt.t0 + (k * (pt.t1 - pt.t0)) / n;
              const a = w2s(localToPlan(fr, fr.tToU(t), -fr.W / 2)), c2 = w2s(localToPlan(fr, fr.tToU(t), fr.W / 2));
              x.beginPath(); x.moveTo(...a); x.lineTo(...c2); x.stroke();
            }
            if (pt.type === "garage" || pt.type === "bike") {
              // door: magenta bar on the wall it sits in
              const d = doorSpec({ side: pt.doorSide, pt, f: fr, W: fr.W, hLow: b.height || 2.8, bike: pt.type === "bike", width: pt.door });
              const along = d.sx > d.sz ? [d.sx / 2, 0] : [0, d.sz / 2];
              const p1 = w2s(localToPlan(fr, d.x - along[0], d.z - along[1])), p2 = w2s(localToPlan(fr, d.x + along[0], d.z + along[1]));
              x.strokeStyle = "#ff2bd6"; x.lineWidth = 3 * dpr; x.beginPath(); x.moveTo(...p1); x.lineTo(...p2); x.stroke();
              x.strokeStyle = "#ffb347"; x.lineWidth = dpr;
            }
            if (sel) {
              // names of the parts and the stall numbers, for checking the order
              x.fillStyle = "#ffb347"; x.font = `${10 * dpr}px sans-serif`; x.textAlign = "center";
              const text = (s, t, w) => { const q = w2s(localToPlan(fr, fr.tToU(t), w)); x.fillText(s, q[0], q[1]); };
              if (carport) stallCenters(pt, pt.numberFrom).forEach((s) => text(String(s.n), s.t, fr.W * 0.3));
              else text(pt.name || PART_LABELS[pt.type] || "", (pt.t0 + pt.t1) / 2, fr.W * 0.3);
            }
          });
          // high side marker: small triangles along the edge
          const mid = w2s(localToPlan(fr, 0, -fr.W / 2 + 0.25));
          x.fillStyle = "#ffb347"; x.font = `${10 * dpr}px sans-serif`; x.textAlign = "center";
          x.fillText("▲ hoch", mid[0], mid[1]);
          x.setLineDash([8 * dpr, 5 * dpr]);
        }
      });
      if (this.plan.site?.cadastreHouse) { this.path(x, this.plan.site.cadastreHouse, true); x.strokeStyle = "#3ddc84"; x.lineWidth = 1.5 * dpr; x.stroke(); }
      x.setLineDash([]);
    }

    const below = this.plan.floors[this.fi - 1];
    if (below) { x.strokeStyle = "#2b3558"; x.lineWidth = dpr; below.rooms.forEach((r) => { this.path(x, r.points, true); x.stroke(); }); }

    fl.rooms.forEach((r) => {
      const sel = this.isSel(r.id);
      this.path(x, r.points, true);
      x.fillStyle = (r.color || "#19e6ff") + "22"; x.fill();
      x.strokeStyle = sel ? "#fff" : r.color || "#19e6ff"; x.lineWidth = (sel ? 3 : 1.5) * dpr; x.shadowColor = r.color || "#19e6ff"; x.shadowBlur = sel ? 8 : 0; x.stroke(); x.shadowBlur = 0;
      if (sel) r.points.forEach((p) => { const q = w2s(p); x.fillStyle = "#fff"; x.fillRect(q[0] - 4 * dpr, q[1] - 4 * dpr, 8 * dpr, 8 * dpr); });
      const lp = w2s(labelPoint(r.points));
      x.fillStyle = "#dfe8ff"; x.font = `${12 * dpr}px sans-serif`; x.textAlign = "center";
      x.fillText(`${r.name} (${polyArea(r.points).toFixed(1)} m²)`, lp[0], lp[1]);
    });

    // walls as built (thickness to scale)
    this.segs().forEach((sg) => {
      const sel = sg.ids.includes(this.sel?.id);
      x.strokeStyle = sel ? "#fff" : sg.free ? "#ff9a3c" : "#6b7bb0";
      x.lineWidth = Math.max(2 * dpr, sg.t * s);
      x.globalAlpha = 0.75;
      x.beginPath(); x.moveTo(...w2s(sg.a)); x.lineTo(...w2s(sg.b)); x.stroke();
      x.globalAlpha = 1;
    });

    fl.openings.forEach((o) => {
      const q = w2s([o.x, o.z]), half = (o.w / 2) * s;
      x.save(); x.translate(...q); x.rotate(-(o.rot || 0));
      x.fillStyle = o.type === "door" ? "#ff2bd6" : "#6fa8ff";
      x.fillRect(-half, -3 * dpr, half * 2, 6 * dpr);
      if (o.type === "door" && o.style !== "passage") {
        const hx = o.hinge === "right" ? half : -half, sw = o.swing === "out" ? -1 : 1;
        x.strokeStyle = "#ff2bd6"; x.lineWidth = dpr; x.beginPath();
        x.moveTo(hx, 0); x.lineTo(hx, sw * o.w * s); x.arc(hx, 0, o.w * s, sw * Math.PI / 2, o.hinge === "right" ? (sw > 0 ? Math.PI : -Math.PI) : 0, o.hinge === "right" ? sw < 0 : sw > 0); x.stroke();
      }
      if (this.isSel(o.id)) { x.strokeStyle = "#fff"; x.lineWidth = 2 * dpr; x.strokeRect(-half, -6 * dpr, half * 2, 12 * dpr); }
      x.restore();
    });

    fl.furniture.forEach((f) => {
      const cs = furnitureCorners(f).map(w2s);
      x.beginPath(); cs.forEach((q, i) => (i ? x.lineTo(...q) : x.moveTo(...q))); x.closePath();
      x.fillStyle = f.type === "rug" ? "rgba(143,107,179,.25)" : "rgba(224,176,128,.28)"; x.fill();
      x.strokeStyle = this.isSel(f.id) ? "#fff" : "#e0b080"; x.lineWidth = (this.isSel(f.id) ? 2.5 : 1) * dpr; x.stroke();
      if (s > 25) { const q = w2s([f.x, f.z]); x.fillStyle = "#e8d5bd"; x.font = `${9 * dpr}px sans-serif`; x.textAlign = "center"; x.fillText(f.name || f.type, q[0], q[1] + 3 * dpr); }
    });

    this.deviceList(fl).forEach((d) => {
      const q = w2s([d.x, d.z]);
      if (domainOf(d.entity) === "camera") {
        // field of view of a camera
        const w = wedge(d.x, d.z, d.rot ?? 0, d.fov ?? 90, d.reach ?? 7).map(w2s);
        x.beginPath(); w.forEach((p, i) => (i ? x.lineTo(...p) : x.moveTo(...p))); x.closePath();
        x.fillStyle = "rgba(25,230,255,.12)"; x.fill();
        x.strokeStyle = this.isSel(d.id) ? "#fff" : "rgba(25,230,255,.7)"; x.lineWidth = dpr; x.stroke();
      }
      x.beginPath(); x.arc(q[0], q[1], 6 * dpr, 0, 7);
      x.fillStyle = d.explicit ? "#ffd08a" : "#88889a"; x.fill();
      x.strokeStyle = this.isSel(d.id) ? "#fff" : "#000"; x.lineWidth = (this.isSel(d.id) ? 3 : 2) * dpr; x.stroke();
      if (s > 25) { x.fillStyle = "#cdd6f4"; x.font = `${9 * dpr}px sans-serif`; x.textAlign = "left"; x.fillText(d.name || d.entity.split(".")[1] || d.entity, q[0] + 9 * dpr, q[1] + 3 * dpr); }
    });

    if (this.draft.length) {
      x.strokeStyle = "#fff"; x.setLineDash([6, 4]); x.lineWidth = 2 * dpr;
      this.path(x, [...this.draft, this.mouse], false); x.stroke(); x.setLineDash([]);
      if (this.tool === "wall") this.dim(x, this.draft[0], this.mouse);
    }
    if (this.marquee) {
      const [a, b] = this.marquee.map(w2s);
      x.fillStyle = "rgba(25,230,255,.08)"; x.fillRect(a[0], a[1], b[0] - a[0], b[1] - a[1]);
      x.strokeStyle = "#19e6ff"; x.setLineDash([5, 4]); x.lineWidth = dpr; x.strokeRect(a[0], a[1], b[0] - a[0], b[1] - a[1]); x.setLineDash([]);
    }
    if (this.rectPrev) {
      const [a, b] = this.rectPrev.map(w2s);
      x.strokeStyle = "#fff"; x.setLineDash([6, 4]); x.strokeRect(a[0], a[1], b[0] - a[0], b[1] - a[1]); x.setLineDash([]);
      this.dim(x, this.rectPrev[0], this.rectPrev[1]);
    }
    const m = w2s(this.mouse);
    x.fillStyle = "#19e6ff"; x.fillRect(m[0] - 3, m[1] - 3, 6, 6);
  }
  dim(x, a, b) {
    const m = this.w2s([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]);
    x.fillStyle = "#fff"; x.font = `${12 * devicePixelRatio}px sans-serif`; x.textAlign = "left";
    x.fillText(Math.abs(b[0] - a[0]).toFixed(2) + " × " + Math.abs(b[1] - a[1]).toFixed(2) + " m", m[0] + 6, m[1] - 6);
  }
  path(x, pts, close) {
    x.beginPath();
    pts.forEach((p, i) => { const q = this.w2s(p); i ? x.lineTo(...q) : x.moveTo(...q); });
    if (close) x.closePath();
  }
}

if (!customElements.get("homeplan3d-view")) customElements.define("homeplan3d-view", HomePlan3DView);

// ---------- Panel ----------
class HomePlan3DPanel extends HTMLElement {
  set hass(h) { this._h = h; this._v && (this._v.hass = h); }
  set narrow(_) {}
  set panel(_) {}
  connectedCallback() {
    this.style.display = "block";
    this.style.height = "100vh";
    this._v = document.createElement("homeplan3d-view");
    this._v.config = { mode: "panel" };
    this._v.style.height = "100%";
    this.append(this._v);
    if (this._h) this._v.hass = this._h;
  }
}
if (!customElements.get("homeplan3d-panel")) customElements.define("homeplan3d-panel", HomePlan3DPanel);

// ---------- Card ----------
class HomePlan3DCard extends HTMLElement {
  setConfig(c) { this._c = { ...c, mode: "card" }; this._v && (this._v.config = this._c); }
  set hass(h) { this._h = h; this._v && (this._v.hass = h); }
  getCardSize() { return 8; }
  getGridOptions() { return { columns: 12, rows: 8, min_rows: 4 }; }
  static getStubConfig() { return { type: "custom:homeplan3d-card", height: 450 }; }
  connectedCallback() {
    this._v = document.createElement("homeplan3d-view");
    this._v.config = this._c || { mode: "card" };
    this._v.style.cssText = `display:block;height:${this._c?.height || 450}px;border-radius:12px;overflow:hidden`;
    this.append(this._v);
    if (this._h) this._v.hass = this._h;
  }
}
if (!customElements.get("homeplan3d-card")) customElements.define("homeplan3d-card", HomePlan3DCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "homeplan3d-card", name: "Home Plan 3D", description: "3D-Grundriss mit Gerätesteuerung" });
