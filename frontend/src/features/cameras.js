import * as THREE from "three";
import { Feature, card3d, esc, clamp, glowTexture } from "./base.js";
import { forward, wedge, viewFov, detectionKind, onEvents, hhmm, tokenOf } from "../lib/camera.js";
import { fetchHistory } from "./history.js";
import { openSettings } from "./settings-ui.js";
import { domainOf, rad } from "../util.js";

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const MOTION_CLASSES = ["motion", "occupancy", "presence", "moving"];

/**
 * Camera cockpit: field of view on the floor (red on motion), detection pins, snapshot card, "look through the
 * camera" (the 3D view flies to the camera and blends its live picture over the scene), a wall of snapshots and a
 * motion trail of the last 30 minutes.
 */
export class CameraFeature extends Feature {
  get id() { return "cameras"; }
  get label() { return "🎥 Kameras"; }
  get title() { return "Kameras: Sichtfeld, Erkennungs-Pins, Standbild, Durch-die-Kamera-sehen"; }
  get settingsLabel() { return "🎥 Kameras"; }
  get usesHolo() { return true; }
  cfg() { return { pins: true, fov: true, trail_minutes: 30, ...(this.settings.cameras || {}) }; }
  available() { return !!this.cams?.length; }
  toolbar() {
    return [
      { label: "🖼 Wand", title: "Standbilder aller Kameras als Raster, alle 5 s aktualisiert", on: !!this.wall, fn: () => this.toggleWall() },
      { label: "👣 Spur", title: "Bewegung der letzten 30 Minuten", on: !!this.trailOn, fn: () => this.toggleTrail() },
    ];
  }

  // ---------------------------------------------------------- scene
  build(anchors) {
    this.anchors = anchors;
    const floorElev = (i) => anchors.rooms.find((r) => r.floor === i)?.elev ?? 0;
    this.cams = anchors.devices.filter((a) => a.kind === "camera").map((a) => {
      const d = a.d;
      const cam = { a, d, entity: a.entity, rot: d.rot ?? 0, tilt: d.tilt ?? 25, fov: d.fov ?? 90, reach: d.reach ?? 7, fe: floorElev(a.floor) };
      // field of view on the floor
      const pts = wedge(a.x, a.z, cam.rot, cam.fov, cam.reach);
      const pos = [];
      for (let i = 1; i < pts.length - 1; i++) pos.push(pts[0][0], cam.fe + 0.05, pts[0][1], pts[i][0], cam.fe + 0.05, pts[i][1], pts[i + 1][0], cam.fe + 0.05, pts[i + 1][1]);
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      cam.mat = new THREE.MeshBasicMaterial({ color: 0x19e6ff, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false });
      cam.cone = new THREE.Mesh(g, cam.mat);
      const edge = [V(a.x, cam.fe + 0.05, a.z), ...pts.slice(1).map((p) => V(p[0], cam.fe + 0.05, p[1])), V(a.x, cam.fe + 0.05, a.z)];
      cam.edge = new THREE.Line(new THREE.BufferGeometry().setFromPoints(edge), new THREE.LineBasicMaterial({ color: 0x19e6ff, transparent: true, opacity: 0.7 }));
      cam.cone.visible = cam.edge.visible = this.cfg().fov !== false;
      // viewing direction marker
      const f = forward(cam.rot), t = Math.cos(rad(cam.tilt));
      const tip = V(a.x + f[0] * 0.6 * t, a.y - Math.sin(rad(cam.tilt)) * 0.6, a.z + f[1] * 0.6 * t);
      cam.dir = new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(a.x, a.y, a.z), tip]), new THREE.LineBasicMaterial({ color: 0xff2bd6 }));
      // pin with detections
      cam.pin = card3d(`<span></span>`, { cls: "pin", interactive: true });
      cam.pin.position.set(a.x + f[0] * 0.7, a.y + 0.35, a.z + f[1] * 0.7);
      cam.pin.visible = false;
      cam.pin.element.style.cursor = "pointer";
      cam.pin.element.addEventListener("click", () => this.openCard(cam));
      this.group.add(cam.cone, cam.edge, cam.dir, cam.pin);
      return cam;
    });
    this.trailGroup = new THREE.Group();
    this.group.add(this.trailGroup);
    this.sibs = new Map();
    this.timer = 0;
    this.trailTimer = 999;
    this.look = null;
    if (this.trailOn) this.loadTrail();
  }

  /** Detection sensors on the same device as the camera. */
  siblings(cam) {
    let r = this.sibs.get(cam.entity);
    if (r) return r;
    const h = this.view.hass, st = this.states;
    const dev = h?.entities?.[cam.entity]?.device_id;
    const motion = cam.d.motion && st[cam.d.motion] ? [{ entity: cam.d.motion, kind: "motion", icon: "〰" }] : [];
    const list = dev ? Object.keys(h.entities).filter((e) => e !== cam.entity && h.entities[e].device_id === dev && st[e]) : [];
    for (const e of list) {
      if (!e.startsWith("binary_sensor.") && !e.startsWith("sensor.")) continue;
      const s = st[e];
      const k = detectionKind(e, s.attributes?.friendly_name, s.attributes?.device_class);
      if (k && !motion.some((m) => m.entity === e)) motion.push({ entity: e, ...k, count: e.startsWith("sensor.") });
    }
    this.sibs.set(cam.entity, (r = motion));
    return r;
  }

  update(states) {
    if (!this.cams) return;
    const holo = this.view.holo !== false;
    this.cams.forEach((cam) => {
      const sens = this.siblings(cam);
      const active = sens.filter((x) => (x.count ? parseFloat(states[x.entity]?.state) > 0 : states[x.entity]?.state === "on"));
      const motion = active.length > 0;
      cam.motion = motion;
      cam.mat.color.setHex(motion ? 0xff3b3b : 0x19e6ff);
      cam.edge.material.color.setHex(motion ? 0xff3b3b : 0x19e6ff);
      cam.mat.opacity = motion ? 0.3 : 0.16;
      cam.recording = states[cam.entity]?.state === "recording";
      const pins = this.cfg().pins !== false;
      if (pins && holo && motion) {
        const html = active.map((x) => {
          const s = states[x.entity];
          return `${x.icon} <b>${hhmm(Date.parse(s.last_changed || s.last_updated || Date.now()))}</b>`;
        }).join(" · ");
        if (html !== cam.pinSig) { cam.pinSig = html; cam.pin.element.firstChild.innerHTML = html; }
        cam.pin.visible = true;
      } else cam.pin.visible = false;
    });
    if (this.wall) this.refreshWall(false);
    if (this.card) this.refreshCard(false);
  }

  // ---------------------------------------------------------- pictures
  picture(cam, bust = true) {
    const pic = this.states[cam.entity]?.attributes?.entity_picture;
    if (!pic) return null;
    return bust ? `${pic}${pic.includes("?") ? "&" : "?"}_=${Date.now()}` : pic;
  }
  streamUrl(cam) {
    const tok = tokenOf(this.states[cam.entity]?.attributes?.entity_picture);
    return tok ? `/api/camera_proxy_stream/${cam.entity}?token=${tok}` : null;
  }

  // ---------------------------------------------------------- tap -> card
  onTap(u) {
    const cam = this.cams?.find((c) => c.entity === u?.entity);
    if (!cam) return false;
    this.openCard(cam);
    return true;
  }
  openCard(cam) {
    this.view.closeOverlay();
    const box = document.createElement("div");
    box.className = "overlay";
    box.style.cssText = "left:50%;bottom:16px;transform:translateX(-50%);width:min(480px,94%)";
    this.view.shadowRoot.querySelector(".wrap").append(box);
    this.view._overlay = box;
    const origRemove = box.remove.bind(box);
    box.remove = () => { origRemove(); if (this.card?.box === box) this.card = null; };
    const name = this.states[cam.entity]?.attributes?.friendly_name || cam.entity;
    box.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><b>🎥 ${esc(name)}</b><button data-a="x">✕</button></div>
      <img data-img style="width:100%;border-radius:8px;margin:8px 0;background:#000;min-height:120px;object-fit:cover" alt="">
      <div style="display:flex;gap:6px;flex-wrap:wrap"><button data-a="look" class="on">👁 Durch die Kamera sehen</button><button data-a="live">▶ Live</button><button data-a="info">ℹ</button></div>`;
    box.onclick = (e) => {
      const a = e.target.closest("[data-a]")?.dataset.a;
      if (a === "x") this.view.closeOverlay();
      else if (a === "look") { this.view.closeOverlay(); this.lookThrough(cam); }
      else if (a === "live") this.openLive(cam);
      else if (a === "info") { this.view.closeOverlay(); this.view.moreInfo(cam.entity); }
    };
    this.card = { cam, box, timer: 0 };
    this.refreshCard(true);
  }
  refreshCard(force) {
    const c = this.card;
    if (!c) return;
    const img = c.box.querySelector("[data-img]");
    const src = this.picture(c.cam, false);
    if (img && src && (force || img.dataset.src !== src)) { img.dataset.src = src; img.src = this.picture(c.cam); }
  }

  // ---------------------------------------------------------- live picture (MJPEG)
  openLive(cam) {
    this.view.closeOverlay();
    const url = this.streamUrl(cam);
    const box = document.createElement("div");
    box.className = "overlay";
    box.style.cssText = "left:50%;top:50%;transform:translate(-50%,-50%);width:min(860px,94%)";
    this.view.shadowRoot.querySelector(".wrap").append(box);
    this.view._overlay = box;
    box.innerHTML = `<div style="display:flex;justify-content:space-between"><b>🎥 ${esc(this.states[cam.entity]?.attributes?.friendly_name || cam.entity)} · Live</b><button data-a="x">✕</button></div>
      <img style="width:100%;border-radius:8px;margin-top:8px;background:#000" alt="">
      <div style="opacity:.6;font-size:11px;margin-top:4px">${url ? "Live-Strom (MJPEG)" : "Dieses Kamera-Gerät liefert keinen Live-Strom – das Bild wird jede Sekunde neu geladen."}</div>`;
    const img = box.querySelector("img");
    let timer = 0;
    const still = () => { img.src = this.picture(cam); };
    if (url) { img.onerror = () => { img.onerror = null; timer = setInterval(still, 1000); still(); }; img.src = url; }
    else { still(); timer = setInterval(still, 1000); }
    const origRemove = box.remove.bind(box);
    box.remove = () => { clearInterval(timer); img.src = ""; origRemove(); };
    box.onclick = (e) => { if (e.target.closest("[data-a=x]")) this.view.closeOverlay(); };
  }

  // ---------------------------------------------------------- look through the camera
  lookThrough(cam) {
    const v = this.view;
    if (this.look) return;
    const a = cam.a;
    const f = forward(cam.rot), t = Math.cos(rad(cam.tilt));
    const to = { pos: V(a.x, a.y, a.z), target: V(a.x + f[0] * t, a.y - Math.sin(rad(cam.tilt)), a.z + f[1] * t), hfov: cam.fov };
    this.look = { cam, t: 0, from: { pos: v.camera.position.clone(), target: v.controls.target.clone(), fov: v.camera.fov }, to, done: false };
    v.controls.enabled = false;
    const wrap = v.shadowRoot.querySelector("#view");
    const img = document.createElement("img");
    img.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.6;pointer-events:none;z-index:2";
    const bar = document.createElement("div");
    bar.className = "overlay";
    bar.style.cssText = "left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:8px;align-items:center;z-index:7";
    const admin = !!v.hass?.user?.is_admin && v.cfg.mode !== "card";
    bar.innerHTML = `<span>Bild</span><input type="range" min="0" max="100" value="60" data-a="op" style="width:110px">
      ${admin ? `<span>Drehung</span><input type="range" min="0" max="360" value="${cam.rot}" data-a="rot" style="width:90px"><span>Neigung</span><input type="range" min="0" max="80" value="${cam.tilt}" data-a="tilt" style="width:80px">` : ""}
      <button data-a="back" class="on">← Zurück zur Ansicht</button>`;
    wrap.append(img, bar);
    const aim = () => {
      const f2 = forward(cam.rot), t2 = Math.cos(rad(cam.tilt));
      this.look.to.target.set(a.x + f2[0] * t2, a.y - Math.sin(rad(cam.tilt)), a.z + f2[1] * t2);
      v.controls.target.copy(this.look.to.target);
      v.camera.lookAt(this.look.to.target);
    };
    bar.oninput = (e) => {
      const k = e.target.dataset.a;
      if (k === "op") img.style.opacity = e.target.value / 100;
      if (k === "rot" || k === "tilt") {
        cam[k] = +e.target.value;
        cam.d[k] = cam[k]; // saved with the plan (Speichern)
        this.look.moved = true;
        aim();
      }
    };
    bar.onclick = (e) => { if (e.target.closest("[data-a=back]")) this.endLook(); };
    this.look.ui = { img, bar };
    const refresh = () => { const s = this.picture(cam); if (s) img.src = s; };
    refresh();
    this.look.timer = setInterval(refresh, 2000);
  }
  endLook() {
    const l = this.look, v = this.view;
    if (!l) return;
    clearInterval(l.timer);
    l.ui.img.remove(); l.ui.bar.remove();
    v.camera.position.copy(l.from.pos);
    v.controls.target.copy(l.from.target);
    v.camera.fov = l.from.fov;
    v.camera.updateProjectionMatrix();
    v.controls.enabled = true;
    this.look = null;
    if (l.moved) { v.msg("Drehung/Neigung geändert – mit 💾 speichern"); v.rebuild3D(); }
  }

  // ---------------------------------------------------------- wall of pictures
  toggleWall() {
    if (this.wall) { this.wall.remove(); this.wall = null; this.view.renderBar(); return; }
    const w = document.createElement("div");
    w.style.cssText = "position:absolute;left:8px;top:48px;z-index:4;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;width:min(520px,60%);max-height:70%;overflow:auto";
    this.cams.forEach((cam) => {
      const t = document.createElement("div");
      t.style.cssText = "position:relative;border:2px solid #2a3b6a;border-radius:8px;overflow:hidden;background:#000;cursor:pointer;aspect-ratio:16/9";
      t.innerHTML = `<img style="width:100%;height:100%;object-fit:cover;display:block" alt=""><span style="position:absolute;left:4px;bottom:3px;font-size:11px;background:rgba(0,0,0,.6);padding:1px 5px;border-radius:4px">${esc(this.states[cam.entity]?.attributes?.friendly_name || cam.entity)}</span><i data-rec style="position:absolute;right:6px;top:4px;color:#ff3b3b;display:none">●</i>`;
      t.onclick = () => this.openLive(cam);
      cam.tile = t;
      w.append(t);
    });
    this.view.shadowRoot.querySelector("#view").append(w);
    this.wall = w;
    this.view.renderBar();
    this.refreshWall(true);
  }
  refreshWall(reload) {
    this.cams.forEach((cam) => {
      const t = cam.tile;
      if (!t) return;
      t.style.borderColor = cam.motion ? "#ff3b3b" : "#2a3b6a";
      t.querySelector("[data-rec]").style.display = cam.recording ? "" : "none";
      if (reload) { const s = this.picture(cam); if (s) t.querySelector("img").src = s; }
    });
  }

  // ---------------------------------------------------------- motion trail
  toggleTrail() {
    this.trailOn = !this.trailOn;
    if (this.trailOn) this.loadTrail(); else this.clearTrail();
    this.view.renderBar();
  }
  clearTrail() {
    this.trailGroup?.clear();
    this.trailLabels?.forEach((l) => l.element.remove());
    this.trailLabels = [];
  }
  /** World position of a motion sensor: placed device, camera, or the centre of the room of its HA area. */
  positionOf(entity) {
    const a = this.anchors;
    const dev = a.devices.find((d) => d.entity === entity);
    if (dev) return V(dev.x, dev.y, dev.z);
    const cam = this.cams.find((c) => this.siblings(c).some((s) => s.entity === entity));
    if (cam) {
      // a detection by the camera happened somewhere in its field of view: mark the middle of it
      const f = forward(cam.rot);
      return V(cam.a.x + f[0] * cam.reach * 0.5, cam.fe + 0.5, cam.a.z + f[1] * cam.reach * 0.5);
    }
    const h = this.view.hass, reg = h?.entities?.[entity];
    const area = reg?.area_id || h?.devices?.[reg?.device_id]?.area_id;
    const room = area ? a.rooms.find((r) => r.area === area) : null;
    return room ? V(room.x, room.elev + 1.1, room.z) : null;
  }
  async loadTrail() {
    if (!this.trailOn || !this.view.hass?.callWS) return;
    const st = this.states;
    const ids = Object.keys(st).filter((e) => e.startsWith("binary_sensor.") && MOTION_CLASSES.includes(st[e].attributes?.device_class)).filter((e) => this.positionOf(e));
    const camSens = this.cams.flatMap((c) => this.siblings(c).filter((s) => !s.count).map((s) => s.entity));
    const entities = [...new Set([...ids, ...camSens])].slice(0, 60);
    if (!entities.length) { this.view.msg("Keine Bewegungsmelder im Plan oder an Kameras gefunden"); return; }
    const now = Date.now(), win = (this.cfg().trail_minutes || 30) * 60000;
    try {
      const h = await fetchHistory(this.view.hass, entities, new Date(now - win), new Date(now));
      if (!this.trailOn) return;
      const ev = entities.flatMap((e) => onEvents(h[e], now, win).map((x) => ({ ...x, entity: e, pos: this.positionOf(e) }))).filter((x) => x.pos).sort((a, b) => a.t - b.t);
      this.drawTrail(ev);
    } catch (e) { this.view.msg("Verlauf nicht verfügbar: " + (e.message || e.code)); }
  }
  drawTrail(events) {
    this.clearTrail();
    if (!events.length) return;
    const tex = glowTexture();
    events.forEach((x) => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0x19e6ff, transparent: true, opacity: clamp(1 - x.age * 0.85, 0.12, 1), depthTest: false, blending: THREE.AdditiveBlending }));
      s.position.copy(x.pos);
      s.scale.setScalar(0.9 * (1 - 0.55 * x.age) + 0.25);
      s.renderOrder = 8;
      this.trailGroup.add(s);
    });
    // one label per spot with its latest times (several detections share a spot, e.g. everything a camera saw)
    const spots = new Map();
    events.forEach((x) => {
      const k = `${x.pos.x.toFixed(2)}|${x.pos.z.toFixed(2)}`;
      if (!spots.has(k)) spots.set(k, { pos: x.pos, times: [] });
      spots.get(k).times.push(x.t);
    });
    spots.forEach((sp) => {
      const c = card3d(`<span>${sp.times.slice(-4).reverse().map(hhmm).join(" · ")}${sp.times.length > 4 ? " …" : ""}</span>`, { cls: "pw" });
      c.position.copy(sp.pos).add(V(0, 0.3, 0));
      this.trailGroup.add(c);
      this.trailLabels.push(c);
    });
    if (events.length > 1) {
      const pts = [], cols = [];
      events.forEach((x) => { pts.push(x.pos.x, x.pos.y, x.pos.z); const k = clamp(1 - x.age, 0.1, 1); cols.push(0.1 * k, 0.9 * k, 1 * k); });
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      g.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
      const line = new THREE.Line(g, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthTest: false }));
      line.renderOrder = 8;
      this.trailGroup.add(line);
    }
  }

  // ---------------------------------------------------------- frame loop
  tick(dt) {
    const v = this.view;
    if (this.look) {
      const l = this.look;
      if (!l.done) {
        l.t = Math.min(1, l.t + dt / 0.9);
        const k = l.t * l.t * (3 - 2 * l.t);
        v.camera.position.lerpVectors(l.from.pos, l.to.pos, k);
        v.controls.target.lerpVectors(l.from.target, l.to.target, k);
        const w = v.viewEl.clientWidth || 1, h = v.viewEl.clientHeight || 1;
        v.camera.fov = l.from.fov + (viewFov(l.to.hfov, w / h) - l.from.fov) * k;
        v.camera.updateProjectionMatrix();
        if (l.t >= 1) l.done = true;
      }
    }
    this.timer += dt;
    if (this.timer > 5) { this.timer = 0; if (this.wall) this.refreshWall(true); if (this.card) this.refreshCard(true); }
    this.trailTimer += dt;
    if (this.trailOn && this.trailTimer > 60) { this.trailTimer = 0; this.loadTrail(); }
  }

  reset() {
    this.endLook();
    this.clearTrail();
    if (this.wall) { this.wall.remove(); this.wall = null; }
  }
  dispose() {
    this.endLook();
    this.wall?.remove(); this.wall = null;
    this.cams = null;
  }

  // ---------------------------------------------------------- settings
  openSettings() {
    const obj = (this.settings.cameras = { pins: true, fov: true, trail_minutes: 30, ...(this.settings.cameras || {}) });
    openSettings(this.view, {
      title: "🎥 Kameras",
      obj,
      note: "Kameras sind Geräte vom Typ camera. Drehung, Neigung, Öffnungswinkel und Reichweite stellst du am Gerät ein (Gerät anklicken). Die Melder werden am selben HA-Gerät gefunden oder dort eingetragen.",
      fields: [
        { k: "fov", l: "Sichtfeld auf dem Boden zeigen", t: "checkbox" },
        { k: "pins", l: "Erkennungs-Pins (Person, Fahrzeug, Tier …)", t: "checkbox" },
        { k: "trail_minutes", l: "Bewegungsspur: Minuten zurück", t: "number", s: 5 },
      ],
    });
  }
}
