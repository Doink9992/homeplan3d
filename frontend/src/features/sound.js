import * as THREE from "three";
import { Feature, card3d, esc, clamp } from "./base.js";
import { domainOf } from "../util.js";

const PLAYING = "playing";

/**
 * Sound & cinema: now-playing cards, rings around playing speakers (scaled by volume),
 * multiroom lines (group_members) and a quick menu (long press) with transport, volume, sources and a media browser.
 */
export class SoundFeature extends Feature {
  get id() { return "sound"; }
  get label() { return "🔊 Sound"; }
  get title() { return "Wiedergabe: Karten, Klangringe, Multiroom; langes Drücken öffnet das Menü"; }
  get usesHolo() { return true; }
  available() { return !!this.players?.length; }

  build(anchors) {
    this.players = [];
    const seen = new Set();
    const add = (entity, x, y, z, floor) => {
      if (!entity || domainOf(entity) !== "media_player" || seen.has(entity)) return;
      seen.add(entity);
      this.players.push({ entity, x, y, z, floor });
    };
    anchors.devices.forEach((d) => add(d.entity, d.x, d.y, d.z, d.floor));
    anchors.furniture.forEach((a) => add(a.f.entity, a.x, a.top + 0.05, a.z, a.floor));

    const ringMat = (c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
    this.players.forEach((p) => {
      p.root = new THREE.Group();
      p.root.position.set(p.x, p.y, p.z);
      p.rings = [0, 1, 2].map(() => {
        const m = new THREE.Mesh(new THREE.RingGeometry(0.94, 1, 56), ringMat(0xff2bd6));
        m.rotation.x = -Math.PI / 2;
        m.visible = false;
        p.root.add(m);
        return m;
      });
      p.card = card3d(this.cardHtml(p), { cls: "np", interactive: true });
      p.card.position.set(0, 0.55, 0);
      p.card.visible = false;
      p.card.element.addEventListener("click", (e) => this.cardClick(p, e));
      p.card.element.addEventListener("change", (e) => this.cardClick(p, e));
      p.root.add(p.card);
      this.group.add(p.root);
    });
    this.lines = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xff2bd6, transparent: true, opacity: 0.7 }));
    this.lines.frustumCulled = false;
    this.group.add(this.lines);
    this.phase = 0;
  }

  cardHtml(p) {
    return `<div class="np"><img alt=""><div><div class="t"><b data-t></b></div><div class="sub" data-s></div>
      <div class="ctl"><button data-a="prev">⏮</button><button data-a="play">⏯</button><button data-a="next">⏭</button>
      <input type="range" min="0" max="100" data-a="vol" title="Lautstärke"></div></div></div>`;
  }

  cardClick(p, e) {
    const el = e.target.closest?.("[data-a]");
    if (!el) return;
    e.stopPropagation();
    const svc = { prev: "media_previous_track", play: "media_play_pause", next: "media_next_track" }[el.dataset.a];
    if (svc && e.type === "click") this.view.hass.callService("media_player", svc, { entity_id: p.entity });
    if (el.dataset.a === "vol" && e.type === "change") this.view.hass.callService("media_player", "volume_set", { entity_id: p.entity, volume_level: +el.value / 100 });
  }

  update(states) {
    if (!this.players) return;
    const holo = this.view.holo !== false;
    let shown = 0;
    const byFloorMembers = [];
    this.players.forEach((p) => {
      const s = states[p.entity];
      p.playing = s?.state === PLAYING;
      p.vol = clamp(Number(s?.attributes?.volume_level ?? 0.35), 0, 1);
      p.members = s?.attributes?.group_members || [];
      p.rings.forEach((r) => { r.visible = p.playing; });
      const showCard = holo && p.playing && shown < 3;
      p.card.visible = showCard;
      if (showCard) shown++;
      if (s && showCard) {
        const a = s.attributes || {};
        const sig = [s.state, a.media_title, a.media_artist, a.entity_picture, a.friendly_name].join("|");
        if (sig !== p.sig) {
          p.sig = sig;
          const el = p.card.element;
          el.querySelector("[data-t]").textContent = a.media_title || a.friendly_name || p.entity;
          el.querySelector("[data-s]").textContent = [a.media_artist, a.friendly_name].filter(Boolean).join(" · ");
          const img = el.querySelector("img");
          img.style.display = a.entity_picture ? "" : "none";
          if (a.entity_picture) img.src = a.entity_picture;
        }
        const range = p.card.element.querySelector("[data-a=vol]");
        if (range && document.activeElement !== range) range.value = Math.round(p.vol * 100);
      }
      if (p.playing) byFloorMembers.push(p);
    });

    // multiroom lines between players that list each other in group_members (same floor)
    const pts = [], done = new Set();
    this.players.forEach((a) => {
      a.members.forEach((m) => {
        const b = this.players.find((q) => q.entity === m);
        if (!b || b === a || a.floor !== b.floor) return;
        const key = [a.entity, b.entity].sort().join("|");
        if (done.has(key)) return;
        done.add(key);
        pts.push(new THREE.Vector3(a.x, a.y, a.z), new THREE.Vector3(b.x, b.y, b.z));
      });
    });
    this.lines.geometry.setFromPoints(pts);
    this.lines.visible = pts.length > 0;
    if (this.menu) this.refreshMenu();
  }

  tick(dt) {
    if (!this.players) return;
    this.phase = (this.phase + dt * 0.55) % 1;
    this.players.forEach((p) => {
      if (!p.playing) return;
      const rmax = 0.35 + p.vol * 1.25;
      p.rings.forEach((r, i) => {
        const f = (this.phase + i / 3) % 1;
        r.scale.setScalar(0.2 + f * rmax);
        r.material.opacity = (1 - f) * (0.35 + 0.5 * p.vol);
      });
    });
  }

  onLongPress(u) {
    if (!u?.entity || domainOf(u.entity) !== "media_player") return false;
    this.openMenu(u.entity);
    return true;
  }

  // ---------------------------------------------------------- quick menu
  closeMenu() {
    this.menu?.box.remove();
    this.menu = null;
  }
  openMenu(entity) {
    this.view.closeOverlay();
    const box = document.createElement("div");
    box.className = "overlay";
    box.style.cssText = "left:50%;bottom:16px;transform:translateX(-50%);width:min(460px,94%);max-height:70%;overflow:auto";
    this.view.shadowRoot.querySelector(".wrap").append(box);
    this.view._overlay = box;
    this.menu = { entity, box, mode: "main", stack: [], list: null, sig: "" };
    const origClose = box.remove.bind(box);
    box.remove = () => { origClose(); if (this.menu?.box === box) this.menu = null; };
    this.refreshMenu(true);
  }

  refreshMenu(force = false) {
    const m = this.menu;
    if (!m) return;
    const s = this.states[m.entity];
    if (!s) return;
    const a = s.attributes || {};
    const sig = [m.mode, s.state, a.media_title, a.media_artist, a.entity_picture, a.source, a.is_volume_muted, m.list?.title].join("|");
    if (!force && sig === m.sig) return;
    m.sig = sig;
    const call = (svc, data = {}) => this.view.hass.callService("media_player", svc, { entity_id: m.entity, ...data });
    if (m.mode === "browse") return this.renderBrowse();
    const sources = a.source_list || [];
    m.box.innerHTML = `
      <div style="display:flex;gap:10px;align-items:center">
        ${a.entity_picture ? `<img src="${esc(a.entity_picture)}" style="width:64px;height:64px;border-radius:8px;object-fit:cover">` : ""}
        <div style="flex:1;min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(a.media_title || a.friendly_name || m.entity)}</b>
        <span style="opacity:.7">${esc([a.media_artist, a.friendly_name, s.state].filter(Boolean).join(" · "))}</span></div>
        <button data-a="x" title="Schließen">✕</button></div>
      <div style="display:flex;gap:6px;align-items:center;margin:10px 0">
        <button data-a="prev">⏮</button><button data-a="play" class="on">${s.state === PLAYING ? "⏸" : "▶"}</button><button data-a="next">⏭</button>
        <button data-a="mute">${a.is_volume_muted ? "🔇" : "🔈"}</button>
        <input type="range" min="0" max="100" value="${Math.round((a.volume_level ?? 0) * 100)}" data-a="vol" style="flex:1">
      </div>
      <div style="display:flex;gap:6px">
        ${sources.length ? `<select data-a="src" style="flex:1"><option value="">Quelle …</option>${sources.map((x) => `<option ${x === a.source ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>` : ""}
        <button data-a="browse" style="flex:1">▶ Abspielen …</button>
        <button data-a="info">ℹ</button>
      </div>`;
    m.box.onclick = (e) => {
      const t = e.target.closest("[data-a]");
      if (!t) return;
      const act = t.dataset.a;
      if (act === "x") this.view.closeOverlay();
      else if (act === "prev") call("media_previous_track");
      else if (act === "next") call("media_next_track");
      else if (act === "play") call("media_play_pause");
      else if (act === "mute") call("volume_mute", { is_volume_muted: !a.is_volume_muted });
      else if (act === "info") { this.view.closeOverlay(); this.view.moreInfo(m.entity); }
      else if (act === "browse") { m.mode = "browse"; m.stack = []; this.browse(); }
    };
    m.box.onchange = (e) => {
      const t = e.target.closest("[data-a]");
      if (t?.dataset.a === "vol") call("volume_set", { volume_level: +t.value / 100 });
      if (t?.dataset.a === "src" && t.value) call("select_source", { source: t.value });
    };
  }

  async browse(id, type) {
    const m = this.menu;
    if (!m) return;
    try {
      const args = { type: "media_player/browse_media", entity_id: m.entity };
      if (id != null) { args.media_content_id = id; args.media_content_type = type; }
      m.list = await this.view.hass.callWS(args);
      m.err = null;
    } catch (e) {
      m.err = e.message || "Durchsuchen nicht möglich";
      m.list = null;
    }
    this.renderBrowse();
  }

  renderBrowse() {
    const m = this.menu;
    if (!m) return;
    const l = m.list;
    m.box.innerHTML = `<div style="display:flex;gap:6px;align-items:center;margin-bottom:8px">
      <button data-a="back">←</button><b style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(l?.title || "Medien")}</b><button data-a="x">✕</button></div>
      ${m.err ? `<div style="opacity:.7">${esc(m.err)}</div>` : ""}
      <div>${(l?.children || []).map((c, i) => `<div class="dev" data-i="${i}"><div style="display:flex;gap:8px;align-items:center;min-width:0">
        ${c.thumbnail ? `<img src="${esc(c.thumbnail)}" style="width:36px;height:36px;border-radius:5px;object-fit:cover">` : `<span style="width:36px;text-align:center">${c.can_expand ? "📁" : "♪"}</span>`}
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(c.title)}</span></div>
        <span>${c.can_play ? `<button data-play="${i}" title="Abspielen">▶</button>` : ""}${c.can_expand ? "›" : ""}</span></div>`).join("") || (m.err ? "" : "<div style='opacity:.7'>Leer</div>")}</div>`;
    m.box.onclick = (e) => {
      const act = e.target.closest("[data-a]")?.dataset.a;
      if (act === "x") return this.view.closeOverlay();
      if (act === "back") {
        const prev = m.stack.pop();
        if (!prev) { m.mode = "main"; return this.refreshMenu(true); }
        return this.browse(prev.id, prev.type);
      }
      const playIdx = e.target.closest("[data-play]")?.dataset.play;
      const idx = playIdx ?? e.target.closest("[data-i]")?.dataset.i;
      if (idx == null) return;
      const c = l.children[+idx];
      if (playIdx != null || (c.can_play && !c.can_expand)) {
        this.view.hass.callService("media_player", "play_media", { entity_id: m.entity, media_content_id: c.media_content_id, media_content_type: c.media_content_type });
        m.mode = "main";
        return this.refreshMenu(true);
      }
      if (c.can_expand) { m.stack.push({ id: l.media_content_id, type: l.media_content_type }); this.browse(c.media_content_id, c.media_content_type); }
    };
    m.box.onchange = null;
  }

  reset() { this.closeMenu(); }
  dispose() { this.closeMenu(); this.players = null; }
}
