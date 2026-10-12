import * as THREE from "three";
import { Feature } from "./base.js";
import { gateState, leafAngles } from "../lib/gate.js";
import { hhmm } from "../lib/camera.js";

/**
 * Double-leaf gates (plan.site.gates): { name, entity, a: [x, z], b: [x, z], h?, inward?: [dx, dz], openStates?, closedStates?, bars? }.
 * The leaves swing open / shut with the state of the entity (a Frigate state classification says "Auf" / "Zu").
 * Every change shows a short message and, while the gate is open, a chip.
 */
export class GatesFeature extends Feature {
  get id() { return "gates"; }
  get label() { return "🚧 Tor"; }
  get title() { return "Hoftor: Auf / Zu nach dem Zustand aus Frigate"; }
  available() { return !!this.gates?.length; }

  build() {
    const day = this.view.theme === "day";
    const col = day ? 0x5a6578 : 0x9aa5c0;
    const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.2, transparent: true, opacity: day ? 0.9 : 0.4, side: THREE.DoubleSide, depthWrite: false });
    const edge = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.95 });
    const posts = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.3 });
    this.gates = (this.plan.site?.gates || []).filter((g) => g.a && g.b).map((cfg) => {
      const h = cfg.h || 2.0;
      const len = Math.hypot(cfg.b[0] - cfg.a[0], cfg.b[1] - cfg.a[1]), half = cfg.single ? len : len / 2; // single: one leaf hung at a (a small door)
      const ang = leafAngles(cfg.a, cfg.b, cfg.inward || [1, 0]);
      const mkLeaf = (hinge, pts, withBars) => {
        const g = new THREE.Group();
        g.position.set(hinge[0], 0, hinge[1]);
        const panel = new THREE.Mesh(new THREE.BoxGeometry(half - 0.12, h - 0.2, 0.05), mat);
        panel.position.set(half / 2 + 0.03, 0.1 + (h - 0.2) / 2, 0);
        panel.add(new THREE.LineSegments(new THREE.EdgesGeometry(panel.geometry), edge));
        if (withBars) {
          // wrought-iron look: vertical bars on the upper part
          for (let x = 0.2; x < half - 0.2; x += 0.22) {
            const bar = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.55, 0.025), posts);
            bar.position.set(x - (half - 0.12) / 2, (h - 0.2) / 2 - 0.3, 0);
            panel.add(bar);
          }
        }
        panel.userData = { entity: cfg.entity, gate: true };
        g.add(panel);
        this.pickList.push(panel);
        this.group.add(g);
        return g;
      };
      this.pickList = this.pickList || [];
      const A = mkLeaf(cfg.a, ang.A, !!cfg.barsA), B = cfg.single ? null : mkLeaf(cfg.b, ang.B, true);
      // posts at both ends
      for (const p of [cfg.a, cfg.b]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.2, h + 0.1, 0.2), posts);
        post.position.set(p[0], (h + 0.1) / 2, p[1]);
        this.group.add(post);
      }
      return { cfg, A, B, ang, cur: 0, target: 0, known: false, last: null };
    });
    this.view.pickables.push(...(this.pickList || []));
  }

  update(states) {
    this.gates?.forEach((g) => {
      const s = g.cfg.entity ? states[g.cfg.entity] : null; // without an entity the gate just stays shut
      const st = gateState(s?.state, g.cfg);
      if (st) {
        const to = st === "open" ? 1 : 0;
        if (g.known && st !== g.last) this.view.msg(`${g.cfg.name || "Tor"} ist jetzt ${st === "open" ? "auf" : "zu"}`);
        if (!g.known) g.cur = to; // first reading: no swing, just show it
        g.target = to; g.last = st; g.known = true;
        g.since = s.last_changed ? hhmm(Date.parse(s.last_changed)) : null;
      }
    });
    const open = this.gates?.filter((g) => g.last === "open") || [];
    this.view.setChip("gates", open.length ? `🚧 ${open.map((g) => g.cfg.name || "Tor").join(", ")}: auf${open[0].since ? ` seit ${open[0].since}` : ""}` : "");
    this.pose();
  }

  pose() {
    this.gates?.forEach((g) => {
      const set = (leaf, a) => { if (leaf) leaf.rotation.y = -(a.closed + (a.open - a.closed) * g.cur); };
      set(g.A, g.ang.A);
      set(g.B, g.ang.B);
    });
  }

  tick(dt) {
    let moving = false;
    this.gates?.forEach((g) => {
      if (Math.abs(g.target - g.cur) > 0.002) { g.cur += Math.sign(g.target - g.cur) * Math.min(Math.abs(g.target - g.cur), dt * 0.9); moving = true; }
    });
    if (moving) this.pose();
  }

  reset() { this.view.setChip("gates", ""); }
  dispose() { this.view.setChip("gates", ""); this.gates = null; this.pickList = null; }
}
