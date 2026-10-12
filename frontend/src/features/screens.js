import { Feature } from "./base.js";
import { pickRule, appColor, isCameraRef } from "../lib/rules.js";

const OFF_STATES = ["off", "unavailable", "unknown", "standby", "idle"];

/**
 * Live screens: TVs and monitors show the running app's colour and the media player's artwork;
 * picture rules (entity state/attribute -> logo / uploaded picture / camera feed) take priority.
 */
export class ScreensFeature extends Feature {
  get id() { return "screens"; }

  build(anchors) {
    this.items = (anchors.screens || []).map((a) => ({ a, ctx: a.canvas.getContext("2d"), sig: "" }));
    this.images = new Map();
    this.camTimer = 0;
    this.bust = Date.now();
  }

  imageFor(src) {
    if (!src) return null;
    let e = this.images.get(src);
    if (!e) {
      const img = new Image();
      if (/^https?:\/\//i.test(src) && !src.startsWith(location.origin)) img.crossOrigin = "anonymous";
      e = { img, ok: false };
      img.onload = () => { e.ok = true; this.items.forEach((it) => (it.sig = "")); this.update(this.states); };
      img.onerror = () => { e.failed = true; };
      img.src = src;
      this.images.set(src, e);
    }
    return e.ok ? e.img : null;
  }

  /** What a screen should show right now. */
  model(it, states) {
    const f = it.a.f, scr = f.screen || {};
    const ent = scr.entity || f.entity || null;
    const st = ent ? states[ent] : null;
    const on = st ? !OFF_STATES.includes(st.state) : false;
    const rule = pickRule(scr.rules, states, ent);
    const bg = rule?.bg || scr.bg || "dark";
    if (rule?.image) {
      let src = rule.image;
      const cam = isCameraRef(src);
      if (cam) {
        const pic = states[src]?.attributes?.entity_picture;
        src = pic ? `${pic}${pic.includes("?") ? "&" : "?"}_=${this.bust}` : null;
      }
      return { mode: "rule", bg, src, cam, key: `rule|${bg}|${src}` };
    }
    if (st && on) {
      const art = st.attributes?.entity_picture;
      const app = st.attributes?.app_name || st.attributes?.source || st.attributes?.media_title || "";
      if (st.state === "playing" && art) return { mode: "art", bg, src: art, tint: appColor(app), key: `art|${art}|${app}` };
      const tint = appColor(app) || "#2d6cff";
      return { mode: "app", bg, tint, text: app, key: `app|${tint}|${app}|${st.state}` };
    }
    if (on) return { mode: "on", bg, key: "on" };
    return { mode: "off", bg, key: "off" };
  }

  update(states) {
    if (!this.items) return;
    for (const it of this.items) {
      const m = this.model(it, states);
      if (m.key === it.sig) continue;
      it.sig = m.key;
      this.draw(it, m);
    }
  }

  tick(dt) {
    if (!this.items?.length) return;
    this.camTimer += dt;
    if (this.camTimer < 5) return;
    this.camTimer = 0;
    // camera feeds refresh every 5 s
    const hasCam = this.items.some((it) => (it.a.f.screen?.rules || []).some((r) => isCameraRef(r.image)));
    if (!hasCam) return;
    this.bust = Date.now();
    this.images.forEach((e, k) => { if (k.includes("_=")) this.images.delete(k); });
    this.items.forEach((it) => { if (it.sig.startsWith("rule|") && it.sig.includes("_=")) it.sig = ""; });
    this.update(this.states);
  }

  draw(it, m) {
    const { ctx } = it, W = it.a.canvas.width, H = it.a.canvas.height;
    const dark = m.bg !== "white";
    ctx.clearRect(0, 0, W, H);
    const fill = (c) => { ctx.fillStyle = c; ctx.fillRect(0, 0, W, H); };
    const contain = (img, pad = 0.12, cover = false) => {
      const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
      const bw = W * (1 - pad * 2), bh = H * (1 - pad * 2);
      const s = cover ? Math.max(W / iw, H / ih) : Math.min(bw / iw, bh / ih);
      const w = iw * s, h = ih * s;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
    };
    if (m.mode === "off") {
      fill("#04060b");
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, "rgba(255,255,255,.07)"); g.addColorStop(0.4, "rgba(255,255,255,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    } else if (m.mode === "on") {
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "#2a3f8f"); g.addColorStop(1, "#0b1330");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    } else if (m.mode === "app") {
      fill("#05070d");
      const g = ctx.createRadialGradient(W / 2, H / 2, 10, W / 2, H / 2, W * 0.6);
      g.addColorStop(0, m.tint); g.addColorStop(1, "#05070d");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      if (m.text) {
        ctx.fillStyle = "#fff"; ctx.font = `bold ${Math.round(H * 0.16)}px sans-serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(m.text, W / 2, H / 2, W * 0.86);
      }
    } else if (m.mode === "art") {
      fill("#05070d");
      if (m.tint) { ctx.fillStyle = m.tint; ctx.globalAlpha = 0.28; ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1; }
      const img = this.imageFor(m.src);
      if (img) contain(img, 0.06);
    } else if (m.mode === "rule") {
      fill(dark ? "#05070d" : "#f4f6fb");
      const img = this.imageFor(m.src);
      if (img) contain(img, m.cam ? 0 : 0.14, m.cam);
    }
    // glass edge
    ctx.strokeStyle = "rgba(255,255,255,.12)"; ctx.lineWidth = 3; ctx.strokeRect(1.5, 1.5, W - 3, H - 3);
    it.a.tex.needsUpdate = true;
  }

  dispose() { this.items = null; }
}
