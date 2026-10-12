import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";

/**
 * A feature adds live behaviour on top of the building (weather, energy flows, cameras, ...).
 * The view builds the scene, then calls `build(anchors)` once per rebuild; `update(states)` on every
 * state change and `tick(dt, t)` on every frame while the feature is switched on.
 */
export class Feature {
  constructor(view) {
    this.view = view;
    this.group = new THREE.Group();
    this.on = true;
  }
  get id() { return "feature"; }
  get label() { return this.id; }
  get title() { return ""; }
  /** Show a toggle for this feature? */
  available() { return false; }
  build(_anchors) {}
  update(_states) {}
  tick(_dt, _t) {}
  /** Switched off: put everything back. */
  reset() {}
  dispose() {}
  /** Tap / long press on a 3D object (userData of the picked mesh). Return true when handled. */
  onTap(_userData, _event) { return false; }
  onLongPress(_userData, _event) { return false; }
  get plan() { return this.view.plan; }
  get settings() { return this.view.plan.settings; }
  get states() { return this.view.getStates() || {}; }
}

/** HTML card anchored in 3D (CSS2D). Interactive cards receive pointer events. */
export function card3d(html, { cls = "", interactive = false } = {}) {
  const el = document.createElement("div");
  el.className = "card3d " + cls;
  el.innerHTML = html;
  el.style.pointerEvents = interactive ? "auto" : "none";
  return new CSS2DObject(el);
}

export const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function glowTexture(inner = "rgba(255,255,255,1)", outer = "rgba(255,255,255,0)") {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, inner);
  g.addColorStop(0.35, "rgba(255,255,255,.35)");
  g.addColorStop(1, outer);
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
