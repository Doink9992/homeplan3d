import * as THREE from "three";
import polygonClipping from "polygon-clipping";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { elevation, wallNetwork, hostSegment, roofHeightAt, roofSections, roofGeom, stairHoles, stairOpening, isStairs, DEFAULTS } from "./plan.js";
import { labelPoint, rad, domainOf, inPoly, bbox, furnitureCorners } from "./util.js";
import { siteFrame, localToPlan, resolveParts, pvGrid, doorSpec, stallCenters, PART_LABELS } from "./lib/site.js";

export const THEMES = {
  neon: { bg: 0x07080f, wall: 0x19e6ff, wallOp: 0.2, edgeOp: 0.85, floorK: 0.25, floorEm: 0.14, door: 0xff2bd6, win: 0x6fa8ff, roof: 0xff9a3c, text: "#dfe8ff", glow: "#19e6ff" },
  day: { bg: 0xdfe6f2, wall: 0xf2f4f8, wallOp: 0.92, edgeOp: 0.5, floorK: 0.85, floorEm: 0.0, door: 0x9a6b3f, win: 0x8ec5ff, roof: 0xb5543c, text: "#1d2740", glow: "#ffffff" },
};

// -------------------------------------------------------------- furniture
const COL = {
  kitchen: "#ffb347", kitchen_tall: "#ffb347", kitchen_wall: "#ffb347", island: "#ffb347", sink: "#9ad7ff", stove: "#ff6b6b",
  dishwasher: "#c0c8d8", fridge: "#e8f1ff", washer: "#e8f1ff", dryer: "#e8f1ff", bed: "#b388ff", dresser: "#c08a5a", wardrobe: "#c08a5a",
  tall_cabinet: "#c08a5a", sideboard: "#c08a5a", shelf: "#c08a5a", desk: "#4aa3ff", office_chair: "#4aa3ff", chair: "#e0b080", stool: "#e0b080",
  table: "#e0b080", bench: "#e0b080", sofa_l: "#7bd88f", sofa: "#7bd88f", tv_board: "#7bd88f", rug: "#8f6bb3", shower: "#7fdbff", wc: "#e8f1ff",
  washbasin: "#e8f1ff", bathtub: "#e8f1ff", robot_vacuum: "#00ff9d", led_strip: "#fff29a", inverter: "#ffd166", meter: "#ffd166",
  grid_point: "#ffd166", stairs: "#c9d1e6", stairs_u: "#c9d1e6",
  tv: "#5a6bff", monitor: "#5a6bff", speaker: "#ff2bd6", soundbar: "#ff2bd6", car: "#9aa5c0", battery: "#7bd88f", wallbox: "#19e6ff",
};
const DIM = {
  bin: [0.58, 0.72, 1.07], stairs: [1, 3.2, 2.75], stairs_u: [1.9, 3.2, 2.75], bed: [1.8, 2, 0.5], table: [1.6, 0.9, 0.75], chair: [0.45, 0.45, 0.9], stool: [0.35, 0.35, 0.45], rug: [2, 3, 0.02],
  tv: [1.2, 0.06, 0.7], monitor: [0.6, 0.05, 0.36], speaker: [0.22, 0.22, 0.32], soundbar: [0.9, 0.09, 0.07], car: [1.9, 4.6, 1.5], battery: [0.6, 0.25, 1.1], wallbox: [0.25, 0.12, 0.35],
};
const MOUNT = { kitchen_wall: 1.4, tv: 0.8, monitor: 0.74, soundbar: 0.45 };

export function valueSprite(w = 256) {
  const c = document.createElement("canvas");
  c.width = w; c.height = 64;
  const tex = new THREE.CanvasTexture(c);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sp.scale.set((w / 256) * 1.2, 0.3, 1);
  sp.renderOrder = 10;
  sp.visible = false;
  sp.userData = { canvas: c, tex, text: "" };
  return sp;
}
export function setSprite(sp, text, color = "#19e6ff") {
  const u = sp.userData;
  if (u.text === text) return;
  u.text = text;
  const x = u.canvas.getContext("2d");
  const W = u.canvas.width;
  x.clearRect(0, 0, W, 64);
  x.fillStyle = "rgba(7,8,15,.75)";
  x.beginPath(); x.roundRect(4, 8, W - 8, 48, 12); x.fill();
  x.strokeStyle = color; x.lineWidth = 2; x.stroke();
  x.fillStyle = "#fff"; x.font = "bold 30px sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText(text, W / 2, 33, W - 24);
  u.tex.needsUpdate = true;
}

function box(w, h, d, y0 = 0, x0 = 0, z0 = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x0, y0 + h / 2, z0);
  return g;
}

// 3D models of cars (furniture.model: URL of a GLB, e.g. /local/homeplan3d/sandero.glb), loaded once per URL
const modelCache = new Map();
function loadModel(url) {
  if (!modelCache.has(url)) modelCache.set(url, new Promise((resolve, reject) => new GLTFLoader().load(url, (g) => resolve(g.scene), undefined, reject)));
  return modelCache.get(url);
}

// side profiles of car bodies: [position along the length 0 = rear .. 1 = front, height 0 = sill .. 1 = roof]
const CAR_BODIES = {
  sedan: [[0, 0], [0, 0.42], [0.08, 0.5], [0.3, 0.55], [0.4, 1], [0.64, 1], [0.78, 0.58], [1, 0.5], [1, 0]],
  wagon: [[0, 0], [0, 0.78], [0.03, 0.97], [0.08, 1], [0.58, 1], [0.8, 0.58], [1, 0.5], [1, 0]],
  hatch: [[0, 0], [0, 0.72], [0.06, 0.96], [0.12, 1], [0.54, 1], [0.76, 0.64], [1, 0.54], [1, 0]],
  van: [[0, 0], [0, 0.95], [0.03, 1], [0.72, 1], [0.86, 0.66], [1, 0.58], [1, 0]],
  roadster: [[0, 0], [0, 0.55], [0.12, 0.62], [0.5, 0.62], [0.58, 1], [0.7, 1], [0.8, 0.64], [1, 0.52], [1, 0]],
};

function buildFurniture(f, elev, ctx) {
  const dim = DIM[f.type] || [0.6, 0.6, 0.8];
  const w = f.w || dim[0], d = f.d || dim[1], h = f.h || dim[2];
  const col = new THREE.Color(f.color || COL[f.type] || "#9aa5c0");
  const dark = ctx.theme === "day" ? 1 : 0.5;
  const mat = new THREE.MeshStandardMaterial({ color: col.clone().multiplyScalar(f.color ? 1 : dark), emissive: col, emissiveIntensity: ctx.theme === "day" ? 0 : f.color ? 0.3 : 0.18, transparent: true, opacity: ctx.theme === "day" ? 1 : 0.88 });
  // own colours (a black car) would vanish on the dark background: lighten the outline
  const lineMat = new THREE.LineBasicMaterial({ color: f.color ? col.clone().lerp(new THREE.Color(0xffffff), 0.4) : col, transparent: true, opacity: 0.9 });
  const y0 = f.mountY ?? MOUNT[f.type] ?? 0;
  const geos = [];
  const mats = [mat];
  const g = new THREE.Group();
  g.position.set(f.x, elev + (f.baseY || 0), f.z); // baseY: foot of the item below / above the floor (e.g. a stair going down to the garden)
  g.rotation.y = -rad(f.rot || 0);

  const add = (geo, m = mat) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), lineMat));
    g.add(mesh);
    mesh.userData.entity = f.entity || null;
    mesh.userData.furnId = f.id;
    ctx.pickables.push(mesh);
    geos.push(mesh);
    return mesh;
  };

  switch (f.type) {
    case "bin": {
      // wheelie bin: body and a slightly wider lid (colour = the lid / body colour of the bin)
      add(box(w, h - 0.06, d, 0.04));
      add(box(w + 0.04, 0.06, d + 0.04, h - 0.06));
      break;
    }
    case "stairs_u": {
      if (f.landings === 2) {
        // U opening to the west with two landings: the lower flight runs east along the front (+z) arm, landing in the
        // front-east corner, up along the east arm, landing in the back-east corner, then west along the back arm
        const n = Math.max(12, 2 * Math.round(h / 0.18 / 2)), r = h / n, aw = Math.min(1.2, w / 3, d / 3), m = f.flip ? -1 : 1;
        const a = Math.max(2, Math.round(n * 0.31)), b = Math.max(1, n - 2 - 2 * a), L1 = w - aw, L2 = d - 2 * aw;
        for (let i = 0; i < a; i++) add(box(L1 / a, (i + 1) * r, aw, 0, m * (-w / 2 + (i + 0.5) * (L1 / a)), d / 2 - aw / 2));
        add(box(aw, (a + 1) * r, aw, 0, m * (w / 2 - aw / 2), d / 2 - aw / 2));
        for (let k = 0; k < b; k++) add(box(aw, (a + 2 + k) * r, L2 / b, 0, m * (w / 2 - aw / 2), d / 2 - aw - (k + 0.5) * (L2 / b)));
        add(box(aw, (a + b + 2) * r, aw, 0, m * (w / 2 - aw / 2), -d / 2 + aw / 2));
        for (let j = 0; j < a; j++) add(box(L1 / a, (a + b + 3 + j) * r, aw, 0, m * (w / 2 - aw - (j + 0.5) * (L1 / a)), -d / 2 + aw / 2));
        break;
      }
      // U-shaped: the lower flight starts at the front (+z) on the east half, a landing at the back, the upper flight returns on the west half
      const n = Math.max(8, 2 * Math.round(h / 0.18 / 2)), half = n / 2, land = Math.min(1.2, d * 0.25), sd = (d - land) / half, fw = w / 2 - 0.02;
      const m = f.flip ? -1 : 1; // flip mirrors the stair: the lower flight on the west half
      for (let i = 0; i < half; i++) add(box(fw, ((i + 1) * h) / n, sd, 0, (m * w) / 4, d / 2 - (i + 0.5) * sd));
      add(box(w, h / 2, land, 0, 0, -d / 2 + land / 2));
      for (let j = 0; j < half; j++) add(box(fw, h / 2 + ((j + 1) * h) / n, sd, 0, (-m * w) / 4, -d / 2 + land + (j + 0.5) * sd));
      break;
    }
    case "stairs": {
      const n = Math.max(4, Math.round(h / 0.18)), sd = d / n;
      for (let i = 0; i < n; i++) add(box(w, ((i + 1) * h) / n, sd, 0, 0, d / 2 - (i + 0.5) * sd));
      break;
    }
    case "table":
    case "desk":
    case "bench": {
      add(box(w, 0.05, d, h - 0.05));
      const lx = w / 2 - 0.05, lz = d / 2 - 0.05;
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(box(0.05, h - 0.05, 0.05, 0, sx * lx, sz * lz));
      break;
    }
    case "chair":
    case "office_chair":
    case "stool": {
      const seat = Math.min(0.46, h * 0.5);
      add(box(w, 0.06, d, seat));
      add(box(0.06, seat, 0.06));
      if (f.type !== "stool") add(box(w, h - seat, 0.05, seat, 0, -d / 2 + 0.025));
      break;
    }
    case "sofa_l":
    case "sofa": {
      add(box(w, Math.min(0.45, h), d));
      add(box(w, h, 0.22, 0, 0, -d / 2 + 0.11));
      break;
    }
    case "robot_vacuum": {
      const geo = new THREE.CylinderGeometry(Math.max(w, d) / 2, Math.max(w, d) / 2, h, 24);
      geo.translate(0, y0 + h / 2, 0);
      add(geo);
      break;
    }
    case "tv":
    case "monitor": {
      add(box(w, h, d, y0)); // frame
      // screen: canvas texture that the screens feature draws into
      const cw = 512, ch = Math.max(64, Math.round((512 * h) / w));
      const canvas = document.createElement("canvas");
      canvas.width = cw; canvas.height = ch;
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const sw = Math.max(0.1, w - 0.06), sh = Math.max(0.1, h - 0.06);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
      screen.position.set(0, y0 + h / 2, d / 2 + 0.003);
      screen.userData.entity = f.entity || null;
      g.add(screen);
      ctx.pickables.push(screen);
      ctx.anchors.screens.push({ f, canvas, tex, mesh: screen, w: sw, h: sh, floor: ctx.cur.i });
      break;
    }
    case "car": {
      // body: a side profile of the model's shape (wagon, hatch, van, roadster, sedan) extruded across the width;
      // without `body` the old simple body + cabin. The glow band around the base shows charge level / climate
      const prof = CAR_BODIES[f.body];
      if (f.model) {
        // placeholder body now, the real model replaces it when it has loaded (a model that cannot be loaded leaves the placeholder)
        const pick = ctx.pickables, before = geos.length;
        loadModel(f.model).then((src) => {
          const model = src.clone(true);
          const tint = new THREE.Color(f.color || "#d8dde8");
          const mm = new THREE.MeshStandardMaterial({ vertexColors: true, color: tint, emissive: tint, emissiveIntensity: ctx.theme === "day" ? 0 : 0.12, roughness: 0.55, metalness: 0.15 });
          model.traverse((o) => { if (o.isMesh) { o.material = mm; o.userData = { entity: f.entity || null, furnId: f.id }; pick.push(o); } });
          const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
          model.position.set(-c.x, -box.min.y, -c.z);
          const holder = new THREE.Group();
          holder.add(model);
          holder.scale.set(w / size.x, h / size.y, d / size.z);
          holder.rotation.y = rad(f.modelRot || 0);
          for (const m of geos.splice(before)) { g.remove(m); const i = pick.indexOf(m); if (i >= 0) pick.splice(i, 1); }
          g.add(holder);
        }).catch(() => { /* keep the placeholder */ });
      }
      if (prof) {
        const lo = 0.2, sy = (v) => lo + v * (h - lo);
        const shape = new THREE.Shape(prof.map(([s, y]) => new THREE.Vector2((s - 0.5) * d, sy(y))));
        const geo = new THREE.ExtrudeGeometry(shape, { depth: w, bevelEnabled: false });
        geo.applyMatrix4(new THREE.Matrix4().set(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1)); // (x,y,z) -> (z,y,x)
        geo.translate(-w / 2, 0, 0);
        add(geo);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111418, emissive: 0x20242c, emissiveIntensity: 0.5 });
        const r = Math.min(0.34, h * 0.27);
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
          const wg = new THREE.CylinderGeometry(r, r, 0.22, 16);
          wg.rotateZ(Math.PI / 2);
          const wm = new THREE.Mesh(wg, wheelMat);
          wm.position.set(sx * (w / 2 - 0.1), r, sz * d * 0.31);
          g.add(wm);
        }
      } else {
        add(box(w, h * 0.42, d, 0.18));
        add(box(w * 0.86, h * 0.34, d * 0.5, 0.18 + h * 0.42, 0, -d * 0.04));
      }
      const bandMat = new THREE.MeshBasicMaterial({ color: 0x19e6ff, transparent: true, opacity: 0.9 });
      const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.08, 0.06, d + 0.08), bandMat);
      band.position.set(0, 0.1, 0);
      band.visible = !!f.car || (!prof && !f.model); // the charge band only makes sense for a linked vehicle
      g.add(band);
      ctx.anchors.cars.push({ f, band: bandMat, group: g, floor: ctx.cur.i, w, d, h });
      if (f.name && !f.car) {
        // parked car without a vehicle integration: just show what it is
        const sp = valueSprite();
        setSprite(sp, f.name);
        sp.visible = true;
        sp.position.set(0, h + 0.45, 0);
        g.add(sp);
      }
      break;
    }
    default:
      add(box(w, h, d, y0));
  }

  const entry = { mats, group: g };
  const top = y0 + h + (f.baseY || 0);
  ctx.anchors.furniture.push({ f, floor: ctx.cur.i, other: !!ctx.cur.other, x: f.x, z: f.z, y: ctx.cur.elev + y0 + (f.baseY || 0), top: ctx.cur.elev + top, w, d, h, group: g, mats });
  if (f.entity || f.stateEntity) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: ctx.glowTex(), color: col, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.setScalar(Math.max(1, w * 2));
    glow.position.set(0, top / 2, 0);
    glow.visible = false;
    g.add(glow);
    ctx.dyn.push({ kind: "furniture", entity: f.entity || f.stateEntity, mats, glow, baseScale: glow.scale.x });
  }
  if (f.power && !ctx.cur.other) {
    const sp = valueSprite();
    sp.position.set(0, top + 0.35, 0);
    g.add(sp);
    ctx.dyn.push({ kind: "value", entity: f.power, sprite: sp, always: f.marker === "always" });
  }
  if (f.name && f.showName) {
    const sp = valueSprite();
    setSprite(sp, f.name, "#19e6ff");
    sp.visible = true;
    sp.position.set(0, top + 0.3, 0);
    g.add(sp);
  }
  return entry.group;
}

// -------------------------------------------------------------- walls
function wallMesh(seg, floor, elev, plan, th, mats, ops) {
  const L = seg.len + seg.extA + seg.extB;
  const dx = (seg.b[0] - seg.a[0]) / seg.len, dz = (seg.b[1] - seg.a[1]) / seg.len;
  const maxH = seg.h != null ? Math.min(seg.h, floor.height) : floor.height;
  const hasRoof = roofSections(plan).length > 0;
  const topAt = (u) => {
    if (!hasRoof) return maxH;
    const dd = u - seg.extA;
    const ry = roofHeightAt(plan, seg.a[0] + dx * dd, seg.a[1] + dz * dd);
    return ry === Infinity ? maxH : Math.max(0.05, Math.min(maxH, ry - elev - 0.02));
  };
  const sh = new THREE.Shape();
  sh.moveTo(0, 0);
  sh.lineTo(L, 0);
  const n = hasRoof ? Math.max(1, Math.ceil(L / 0.25)) : 1;
  for (let k = n; k >= 0; k--) {
    const u = (L * k) / n;
    sh.lineTo(u, topAt(u));
  }
  sh.closePath();

  const holes = ops
    .map((o) => ({ u0: o.u + seg.extA - o.w / 2, u1: o.u + seg.extA + o.w / 2, y0: Math.max(o.sill, 0.003), y1: o.sill + o.h }))
    .sort((a, b) => a.u0 - b.u0);
  let lastU = -1;
  holes.forEach((hl) => {
    const u0 = Math.max(hl.u0, 0.01), u1 = Math.min(hl.u1, L - 0.01);
    const y1 = Math.min(hl.y1, Math.min(topAt(u0), topAt(u1)) - 0.01);
    if (u1 - u0 < 0.05 || y1 - hl.y0 < 0.05 || u0 < lastU + 0.01) return;
    lastU = u1;
    const p = new THREE.Path();
    p.moveTo(u0, hl.y0); p.lineTo(u1, hl.y0); p.lineTo(u1, y1); p.lineTo(u0, y1); p.closePath();
    sh.holes.push(p);
  });

  const geo = new THREE.ExtrudeGeometry(sh, { depth: seg.t, bevelEnabled: false, curveSegments: 1 });
  geo.translate(0, 0, -seg.t / 2);
  const mesh = new THREE.Mesh(geo, mats.wall);
  mesh.position.set(seg.a[0] - dx * seg.extA, elev, seg.a[1] - dz * seg.extA);
  mesh.rotation.y = seg.rot;
  mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), mats.edge));
  mesh.renderOrder = 1;
  return mesh;
}

// -------------------------------------------------------------- openings
function buildOpening(o, seg, elev, ctx, plan) {
  const th = ctx.th;
  const door = o.type === "door";
  const g = new THREE.Group();
  const dx = seg ? (seg.s.b[0] - seg.s.a[0]) / seg.s.len : Math.cos(-o.rot);
  const dz = seg ? (seg.s.b[1] - seg.s.a[1]) / seg.s.len : Math.sin(-o.rot);
  const px = seg ? seg.s.a[0] + dx * seg.u : o.x, pz = seg ? seg.s.a[1] + dz * seg.u : o.z;
  g.position.set(px, elev + o.sill, pz);
  g.rotation.y = seg ? seg.s.rot : o.rot;
  const t = seg ? seg.s.t : 0.15;
  const w = o.w, h = Math.min(o.h, 3);
  const col = door ? (o.style === "front" ? 0xff2bd6 : th.door) : th.win;
  const lineMat = new THREE.LineBasicMaterial({ color: col });

  // frame
  const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, t + 0.02)), lineMat);
  frame.position.y = h / 2;
  g.add(frame);

  const entry = { kind: "opening", entity: o.entity || null, type: o.type, open: 0 };
  if (door && o.style === "passage") {
    ctx.dyn.push(entry);
    return g;
  }
  const pivot = new THREE.Group();
  const hingeX = o.hinge === "right" ? w / 2 : -w / 2;
  pivot.position.set(hingeX, 0, 0);
  const sign = (o.hinge === "right" ? -1 : 1) * (o.swing === "out" ? -1 : 1);
  const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: door ? 0.5 : 0.7, transparent: true, opacity: door ? 0.75 : 0.35, depthWrite: false, side: THREE.DoubleSide });
  const leafW = door || o.leaves !== 2 ? w : w / 2;
  const leaf = new THREE.Mesh(new THREE.BoxGeometry(leafW - 0.04, h - 0.04, door ? 0.045 : 0.02), mat);
  leaf.position.set(-hingeX > 0 ? leafW / 2 : -leafW / 2, h / 2, 0);
  pivot.add(leaf);
  if (!door && o.leaves === 2) {
    const l2 = new THREE.Mesh(leaf.geometry, mat);
    l2.position.set(-leaf.position.x, h / 2, 0);
    g.add(l2);
  }
  g.add(pivot);
  entry.pivot = pivot;
  entry.mat = mat;
  entry.sign = sign;
  entry.maxAngle = door ? rad(75) : rad(28);
  ctx.dyn.push(entry);
  return g;
}

// -------------------------------------------------------------- roof
function mapC(g, c, y, s) {
  return g.horiz ? [s, y, c] : [c, y, s];
}

/** Roof surface + gable walls of one section, added to `group`. */
function addRoofSection(group, s, m, depth = 0.5) {
  const g = roofGeom(s);
  const o = s.overhang ?? g.overhang;
  const sa = g.s0 - o, sb = g.s1 + o;
  const cA = g.c0 - o, cB = g.c1 + o;
  const yA = g.eaveA - g.ta * o, yB = g.eaveB - g.tb * o;
  const v = [mapC(g, cA, yA, sa), mapC(g, cA, yA, sb), mapC(g, g.cr, g.yr, sb), mapC(g, g.cr, g.yr, sa), mapC(g, cB, yB, sa), mapC(g, cB, yB, sb)];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(v.flat(), 3));
  geo.setIndex([0, 1, 2, 0, 2, 3, 3, 2, 5, 3, 5, 4]);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo, m.surf);
  mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 5), m.line));
  mesh.renderOrder = 2;
  group.add(mesh);

  // gable walls from the wall top (base) up to the roof line
  for (const [s0, dir] of [[g.s0, 1], [g.s1, -1]]) {
    const sh = new THREE.Shape();
    sh.moveTo(g.c0, g.base); sh.lineTo(g.c1, g.base); sh.lineTo(g.c1, Math.max(g.eaveB, g.base)); sh.lineTo(g.cr, g.yr); sh.lineTo(g.c0, Math.max(g.eaveA, g.base)); sh.closePath();
    const gg = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: false });
    const mm = new THREE.Matrix4();
    if (g.horiz) mm.set(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1); // (x,y,z) -> (z,y,x)
    gg.applyMatrix4(mm);
    const shift = dir > 0 ? s0 : s0 - depth;
    if (g.horiz) gg.translate(shift, 0, 0); else gg.translate(0, 0, shift);
    const gm = new THREE.Mesh(gg, m.gable);
    gm.add(new THREE.LineSegments(new THREE.EdgesGeometry(gg, 25), m.edge));
    group.add(gm);
  }
}

export function buildRoof(plan, ctx) {
  const roof = plan.settings?.roof;
  const group = new THREE.Group();
  if (!roof?.sections?.length) return group;
  const th = ctx.th;
  const surf = new THREE.MeshStandardMaterial({ color: th.roof, emissive: th.roof, emissiveIntensity: ctx.theme === "day" ? 0 : 0.25, transparent: true, opacity: ctx.theme === "day" ? 0.95 : 0.3, side: THREE.DoubleSide, depthWrite: false });
  const lineMat = new THREE.LineBasicMaterial({ color: th.roof, transparent: true, opacity: 0.9 });
  const gableMat = new THREE.MeshStandardMaterial({ color: th.wall, emissive: th.wall, emissiveIntensity: 0.2, transparent: true, opacity: th.wallOp + 0.05, side: THREE.DoubleSide, depthWrite: false });

  roof.sections.forEach((s) => addRoofSection(group, s, { surf, line: lineMat, gable: gableMat, edge: ctx.mats.edge }));

  const secOf = (face) => {
    const [id, side] = String(face).split(":");
    const s = roof.sections.find((x) => x.id === id);
    return s ? { g: roofGeom(s), side: side === "b" ? "b" : "a" } : null;
  };
  const place = (face, u, v, lift, w, len) => {
    const r = secOf(face);
    if (!r) return null;
    const { g, side } = r;
    const t = rad(side === "a" ? g.pa : g.pb);
    let c = side === "a" ? g.c0 + v * Math.cos(t) : g.c1 - v * Math.cos(t);
    let y = (side === "a" ? g.eaveA : g.eaveB) + v * Math.sin(t);
    c += (side === "a" ? -Math.sin(t) : Math.sin(t)) * lift;
    y += Math.cos(t) * lift;
    const pos = mapC(g, c, y, g.s0 + u);
    const geo = g.horiz ? new THREE.BoxGeometry(w, 0.04, len) : new THREE.BoxGeometry(len, 0.04, w);
    const m = new THREE.Mesh(geo, null);
    m.position.set(...pos);
    if (g.horiz) m.rotation.x = side === "a" ? -t : t;
    else m.rotation.z = side === "a" ? t : -t;
    return m;
  };

  (roof.solar || []).forEach((p) => {
    const mw = p.moduleW || (p.portrait ? 1.134 : 1.722), mh = p.moduleH || (p.portrait ? 1.722 : 1.134);
    const cols = p.cols || 1, rows = p.rows || 1;
    const mat = new THREE.MeshStandardMaterial({ color: 0x0b1530, emissive: 0x1f6bff, emissiveIntensity: 0.15, metalness: 0.4, roughness: 0.3 });
    const line = new THREE.LineBasicMaterial({ color: 0x5aa0ff });
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        const u = p.u + (i - (cols - 1) / 2) * (mw + 0.02);
        const v = p.v + (j - (rows - 1) / 2) * (mh + 0.02);
        const m = place(p.face, u, v, 0.05, mw, mh);
        if (!m) continue;
        m.material = mat;
        m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), line));
        group.add(m);
        ctx.anchors.pv.push({ mesh: m, mat, entity: p.entity || null, wp: p.wp || 400 });
      }
    if (p.entity) ctx.dyn.push({ kind: "solar", entity: p.entity, mat, wp: p.wp || 400 });
  });
  (roof.windows || []).forEach((w) => {
    const m = place(w.face, w.u, w.v, 0.05, w.w || 1, w.h || 1.2);
    if (!m) return;
    m.material = new THREE.MeshStandardMaterial({ color: th.win, emissive: th.win, emissiveIntensity: 0.5, transparent: true, opacity: 0.55 });
    group.add(m);
  });
  return group;
}


// -------------------------------------------------------------- shed-roof building (garage / carport) with PV
/**
 * A building with a shed roof (Pultdach). Optionally split along its long side into garage, open bay and
 * carport stalls, and covered with PV modules. Built in a local frame (see lib/site.js).
 */
function buildShedBuilding(plan, b, ctx, opts, m) {
  const g = new THREE.Group();
  const north = plan.site?.north ?? plan.settings?.north ?? 0;
  const roof = b.roof || {};
  const f = siteFrame(b.points, roof, north);
  const pitch = rad(roof.pitch ?? 12), tan = Math.tan(pitch);
  const hLow = b.height || 2.8, L = f.L, W = f.W, ov = roof.overhang ?? 0.3;
  const hHigh = hLow + W * tan;
  const yAt = (z) => hLow + (W / 2 - z) * tan; // local z: -W/2 = high side, +W/2 = low side
  const fg = new THREE.Group();
  fg.position.set(f.cx, 0, f.cz);
  fg.rotation.y = f.theta;
  g.add(fg);

  // roof surface
  const xs = L / 2 + ov, zH = -W / 2 - ov, zL = W / 2 + ov;
  const rg = new THREE.BufferGeometry();
  rg.setAttribute("position", new THREE.Float32BufferAttribute([-xs, yAt(zH), zH, xs, yAt(zH), zH, xs, yAt(zL), zL, -xs, yAt(zL), zL], 3));
  rg.setIndex([0, 1, 2, 0, 2, 3]);
  rg.computeVertexNormals();
  const roofMesh = new THREE.Mesh(rg, m.roofMats.surf);
  roofMesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(rg, 5), m.lineMat));
  roofMesh.renderOrder = 2;
  fg.add(roofMesh);

  const labelAt = (text, u, w, y) => {
    if (!opts.label) return;
    const sp = opts.label(text, ctx.theme);
    const p = localToPlan(f, u, w);
    sp.position.set(p[0], y, p[1]);
    g.add(sp);
  };

  const parts = resolveParts(L, b) || [{ type: "solid", t0: 0, t1: L }];
  const hasParts = !!(b.parts?.length || b.layout);
  parts.forEach((pt) => {
    const u0 = Math.min(f.tToU(pt.t0), f.tToU(pt.t1)), u1 = Math.max(f.tToU(pt.t0), f.tToU(pt.t1)), len = u1 - u0, uc = (u0 + u1) / 2;
    if (pt.type === "garage" || pt.type === "solid" || pt.type === "bike") {
      // wedge prism under the sloped roof: side profile (z, y) extruded along the long side
      const sh = new THREE.Shape([new THREE.Vector2(-W / 2, 0), new THREE.Vector2(W / 2, 0), new THREE.Vector2(W / 2, hLow), new THREE.Vector2(-W / 2, hHigh)]);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: len, bevelEnabled: false });
      geo.applyMatrix4(new THREE.Matrix4().set(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1)); // (x,y,z) -> (z,y,x)
      geo.translate(u0, 0, 0);
      const mesh = new THREE.Mesh(geo, m.wallMat);
      mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), m.lineMat));
      mesh.userData = { site: b.id };
      mesh.renderOrder = 1;
      fg.add(mesh);
      ctx.pickables.push(mesh);
      if ((pt.type === "garage" || pt.type === "bike") && hasParts) {
        // door in the middle of the room on a long side, or on the end wall (doorSide west / east)
        const d = doorSpec({ side: pt.doorSide, pt, f, W, hLow, bike: pt.type === "bike", width: pt.door });
        const door = new THREE.Mesh(new THREE.BoxGeometry(d.sx, d.sy, d.sz), new THREE.MeshStandardMaterial({ color: 0xff2bd6, emissive: 0xff2bd6, emissiveIntensity: 0.5, transparent: true, opacity: 0.5, depthWrite: false }));
        door.position.set(d.x, d.y, d.z);
        door.add(new THREE.LineSegments(new THREE.EdgesGeometry(door.geometry), new THREE.LineBasicMaterial({ color: 0xff2bd6 })));
        fg.add(door);
      }
      labelAt(pt.name || (pt.type === "solid" ? b.name || "" : PART_LABELS[pt.type] || ""), uc, 0, 0.06);
    } else {
      // carport / open bay: back wall on the high side, posts, floor marks
      const back = new THREE.BoxGeometry(len, hHigh, 0.1);
      const bw = new THREE.Mesh(back, m.wallMat);
      bw.position.set(uc, hHigh / 2, -W / 2 + 0.05);
      bw.add(new THREE.LineSegments(new THREE.EdgesGeometry(back), m.lineMat));
      bw.userData = { site: b.id };
      fg.add(bw);
      ctx.pickables.push(bw);
      const n = pt.type === "carport" ? pt.stalls : 1;
      const w = len / n;
      const marks = [];
      for (let k = 0; k <= n; k++) {
        const u = u0 + k * w;
        const post = (z, h) => {
          const pm = new THREE.Mesh(new THREE.BoxGeometry(0.14, h, 0.14), m.wallMat);
          pm.position.set(u, h / 2, z);
          pm.add(new THREE.LineSegments(new THREE.EdgesGeometry(pm.geometry), m.lineMat));
          fg.add(pm);
        };
        post(W / 2 - 0.08, hLow);
        post(-W / 2 + 0.08, hHigh);
        marks.push(new THREE.Vector3(u, 0.03, -W / 2), new THREE.Vector3(u, 0.03, W / 2));
      }
      if (pt.type === "carport") fg.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(marks), new THREE.LineBasicMaterial({ color: m.col, transparent: true, opacity: 0.8 })));
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(len, W), new THREE.MeshBasicMaterial({ color: m.col, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.set(uc, 0.02, 0);
      fg.add(floor);
      // stalls are numbered from the east end unless the part says otherwise (numberFrom: "west")
      if (pt.type === "carport") stallCenters(pt, pt.numberFrom).forEach((s) => labelAt(String(s.n), f.tToU(s.t), 0, 0.05));
    }
  });
  if (hasParts && parts.some((p) => p.type === "carport")) {
    const c = parts.find((p) => p.type === "carport");
    labelAt(`Carport · ${c.stalls} Stellplätze`, f.tToU((c.t0 + c.t1) / 2), W / 2 + 0.9, 0.06);
  }

  // PV modules on the roof
  const pv = b.pv;
  if (pv && pv.enabled !== false) {
    // optionally centred over a part (e.g. above the garage door) and pushed to the low eave
    const over = pv.over ? (String(pv.over).startsWith("#") ? parts.find((p) => p.index === Number(String(pv.over).slice(1))) : parts.find((p) => p.type === pv.over)) : null;
    const grid = pvGrid({
      L, W, pitchDeg: roof.pitch ?? 12, orientation: pv.orientation, portrait: pv.portrait, fill: pv.fill !== false, rows: pv.rows, cols: pv.cols,
      align: pv.edge || "center", uCenter: over ? f.tToU((over.t0 + over.t1) / 2) : 0,
    });
    const mat = new THREE.MeshStandardMaterial({ color: 0x0b1530, emissive: 0x1f6bff, emissiveIntensity: 0.15, metalness: 0.4, roughness: 0.3 });
    const line = new THREE.LineBasicMaterial({ color: 0x5aa0ff });
    const cos = Math.cos(pitch), sin = Math.sin(pitch);
    fg.updateMatrixWorld(true);
    grid.modules.forEach((q) => {
      const z = W / 2 - q.s * cos + 0.06 * sin;
      const y = hLow + q.s * sin + 0.06 * cos;
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(q.mw, 0.04, q.mh), mat);
      mesh.position.set(q.u, y, z);
      mesh.rotation.x = pitch; // plane falls towards +z (the low side)
      mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry), line));
      fg.add(mesh);
      const world = new THREE.Vector3();
      fg.updateMatrixWorld(true);
      mesh.updateWorldMatrix(true, false);
      mesh.getWorldPosition(world);
      ctx.anchors.pv.push({ mesh, mat, entity: pv.entity || null, wp: pv.wp || 420, pos: world, site: b.id });
    });
  }
  return g;
}

// -------------------------------------------------------------- yard floor (cobblestones)
const cobbleCache = {};
/** Seamless cobblestone texture for 2 x 2 m: rounded stones in staggered rows, dark joints with a little moss. */
function cobbleTexture(day) {
  const key = day ? "day" : "neon";
  if (cobbleCache[key]) return cobbleCache[key];
  const S = 512, rows = 14, cols = 14, cw = S / cols, rh = S / rows;
  const c = document.createElement("canvas");
  c.width = c.height = S;
  const x = c.getContext("2d");
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  x.fillStyle = day ? "#5d6155" : "#1c2230";
  x.fillRect(0, 0, S, S);
  for (let r = 0; r < rows; r++) {
    for (let k = 0; k < cols; k++) {
      const cx = (k + 0.5 + (r % 2 ? 0.5 : 0)) * cw + (rnd() - 0.5) * 5, cy = (r + 0.5) * rh + (rnd() - 0.5) * 5;
      const g = (day ? 120 : 98) + Math.floor(rnd() * (day ? 70 : 56)), warm = Math.floor(rnd() * 14), moss = rnd() < 0.08;
      const rx = cw * (0.4 + rnd() * 0.07), ry = rh * (0.4 + rnd() * 0.07);
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { // wrap around the edges so the tile is seamless
        const px = cx + ox, py = cy + oy;
        if (px < -cw || px > S + cw || py < -rh || py > S + rh) continue;
        x.beginPath();
        x.ellipse(px, py, rx, ry, (rnd() - 0.5) * 0.4, 0, Math.PI * 2);
        const grad = x.createRadialGradient(px - rx * 0.3, py - ry * 0.3, 1, px, py, Math.max(rx, ry));
        grad.addColorStop(0, `rgb(${g + 22 + warm},${g + 20},${g + 16})`);
        grad.addColorStop(1, moss ? `rgb(${g - 30},${g - 5},${g - 35})` : `rgb(${g - 22 + warm},${g - 22},${g - 26})`);
        x.fillStyle = grad;
        x.fill();
      }
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(0.5, 0.5); // shape units are metres: one tile per 2 m
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return (cobbleCache[key] = tex);
}

// -------------------------------------------------------------- site (other buildings on the parcel)
export function buildSite(plan, ctx, opts = {}) {
  const group = new THREE.Group();
  const buildings = plan.site?.buildings || [];
  if (!buildings.length && !plan.site?.decks?.length && !plan.site?.yard) return group;
  const day = ctx.theme === "day";
  // the yard floor: site.yard = { points: [[x, z] ...] } covered with cobblestones, on the yard level
  const yard = plan.site?.yard;
  if (yard?.points?.length > 2) {
    // pits (yard.pits: { points, y, openEdges? }, e.g. a stairwell down to a cellar door) are cut out of the floor and get their own floor and walls
    const pits = (yard.pits || []).filter((p) => p.points?.length > 2);
    const toS = (ring, hs = []) => {
      const s = new THREE.Shape(ring.map((p) => new THREE.Vector2(p[0], -p[1])));
      hs.forEach((h) => s.holes.push(new THREE.Path(h.map((p) => new THREE.Vector2(p[0], -p[1])))));
      return s;
    };
    const groundY0 = plan.site?.groundY ?? 0;
    pits.forEach((pit) => {
      const py = pit.y ?? groundY0 - 0.6;
      const floor = new THREE.Mesh(new THREE.ShapeGeometry(toS(pit.points)), new THREE.MeshStandardMaterial({ color: day ? 0x8a8f99 : 0x39435a, emissive: day ? 0 : 0x0a0f1c, roughness: 1, side: THREE.DoubleSide }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = py - 0.01;
      group.add(floor);
      const wallPts = [], skip = pit.openEdges || [];
      pit.points.forEach((p, i) => {
        if (skip.includes(i)) return;
        const q = pit.points[(i + 1) % pit.points.length];
        wallPts.push(p[0], py, p[1], q[0], py, q[1], q[0], groundY0, q[1], p[0], py, p[1], q[0], groundY0, q[1], p[0], groundY0, p[1]);
      });
      if (wallPts.length) {
        const wg = new THREE.BufferGeometry();
        wg.setAttribute("position", new THREE.Float32BufferAttribute(wallPts, 3));
        wg.computeVertexNormals();
        const pcol = day ? 0xd8c3a5 : 0xffb347; // same colour as the other site buildings
        const wm = new THREE.Mesh(wg, new THREE.MeshStandardMaterial({ color: pcol, emissive: pcol, emissiveIntensity: day ? 0 : 0.2, transparent: true, opacity: day ? 0.9 : 0.3, side: THREE.DoubleSide, depthWrite: false }));
        wm.add(new THREE.LineSegments(new THREE.EdgesGeometry(wg, 20), new THREE.LineBasicMaterial({ color: pcol, transparent: true, opacity: 0.9 })));
        group.add(wm);
      }
    });
    const cut = pits.length ? polygonClipping.difference([[yard.points.map((p) => [p[0], p[1]])]], ...pits.map((p) => [[p.points.map((q) => [q[0], q[1]])]])) : null;
    const shapes = cut ? cut.map((poly) => toS(poly[0], poly.slice(1))) : [toS(yard.points)];
    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shapes), new THREE.MeshStandardMaterial({ map: cobbleTexture(day), color: day ? 0xffffff : 0xb8c0d4, roughness: 1, metalness: 0, side: THREE.DoubleSide }));
    mesh.rotation.x = -Math.PI / 2; // shape (x, -z) -> world (x, up, z)
    mesh.position.y = (plan.site?.groundY ?? 0) - 0.012;
    mesh.userData = { yard: true };
    mesh.renderOrder = 0;
    group.add(mesh);
  }
  const col = day ? 0xd8c3a5 : 0xffb347;
  const wallMat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.18, transparent: true, opacity: day ? 0.95 : 0.22, depthWrite: false, side: THREE.DoubleSide });
  const lineMat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.9 });
  const roofMats = {
    surf: new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.25, transparent: true, opacity: day ? 0.95 : 0.32, side: THREE.DoubleSide, depthWrite: false }),
    line: lineMat, gable: wallMat, edge: lineMat,
  };
  /**
   * Platform (balcony / terrace) on the level `e` with a railing on every edge except the skipped ones
   * (default: edge 0, the one on the wall; `railSkip: [0, 3]` also leaves edge 3 open, e.g. where a stair starts).
   */
  const addDeck = (bc, e, owner) => {
    if (!bc.points || bc.points.length < 3) return;
    const rail = bc.rail ?? 1.0, skip = bc.railSkip || [0];
    const slab = new THREE.ExtrudeGeometry(new THREE.Shape(bc.points.map((p) => new THREE.Vector2(p[0], -p[1]))), { depth: 0.18, bevelEnabled: false, curveSegments: 1 });
    const sm = new THREE.Mesh(slab, new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.35, transparent: true, opacity: day ? 0.9 : 0.5, side: THREE.DoubleSide, depthWrite: false }));
    sm.rotation.x = -Math.PI / 2;
    sm.position.y = e - 0.18;
    sm.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab, 25), lineMat));
    sm.userData = { site: owner };
    group.add(sm);
    ctx.pickables.push(sm);
    const pos = [];
    for (let i = 0; i < bc.points.length; i++) {
      if (skip.includes(i)) continue;
      const p = bc.points[i], q = bc.points[(i + 1) % bc.points.length];
      pos.push(p[0], e, p[1], q[0], e, q[1], q[0], e + rail, q[1], p[0], e, p[1], q[0], e + rail, q[1], p[0], e + rail, p[1]);
    }
    if (pos.length) {
      const rg = new THREE.BufferGeometry();
      rg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      rg.computeVertexNormals();
      const rm = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
      rm.add(new THREE.LineSegments(new THREE.EdgesGeometry(rg, 5), lineMat));
      group.add(rm);
    }
    if (opts.label && bc.name) {
      const sp = opts.label(bc.name, ctx.theme);
      const c = labelPoint(bc.points);
      sp.position.set(c[0], e + 0.06, c[1]);
      group.add(sp);
    }
  };
  // terraces and other platforms that belong to the main house (site.decks), on the level of the floor they open from
  (plan.site?.decks || []).forEach((d) => addDeck(d, d.elev ?? 0, "deck"));

  // The yard can lie lower than the house's ground floor (site.groundY, e.g. -1.7). Buildings that follow the house
  // floors (levels > 1, or baseY set) keep their heights from the house datum and reach down to the yard; all others
  // stand on the yard, so their heights count from it.
  const groundY = plan.site?.groundY ?? 0;
  buildings.forEach((b) => {
    if (b.visible === false || !b.points || b.points.length < 3) return;
    if (b.roof?.type === "shed" || b.layout || b.parts?.length) {
      const sg = buildShedBuilding(plan, b, ctx, opts, { wallMat, lineMat, roofMats, col });
      if (groundY) {
        sg.position.y = groundY;
        ctx.anchors.pv.forEach((a) => { if (a.site === b.id) a.pos.y += groundY; });
      }
      group.add(sg);
      return;
    }
    const abs = b.levels > 1 || b.baseY != null;
    const base = abs ? Math.min(0, b.baseY ?? groundY) : 0;
    const n0 = group.children.length;
    const h = b.height || 3;
    const geo = new THREE.ExtrudeGeometry(new THREE.Shape(b.points.map((p) => new THREE.Vector2(p[0], -p[1]))), { depth: h - base, bevelEnabled: false, curveSegments: 1 });
    const prism = new THREE.Mesh(geo, wallMat);
    prism.rotation.x = -Math.PI / 2; // shape (x,-z) -> world (x, up, z)
    prism.position.y = base;
    prism.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), lineMat));
    prism.userData = { site: b.id };
    prism.renderOrder = 1;
    group.add(prism);
    ctx.pickables.push(prism);

    // intermediate floors (storeys above ground level): translucent slab + outline
    (b.storeys || []).filter((e) => e > 0.05 && e < h - 0.3).forEach((e) => {
      // openings of the slab: stairs from the house floors below that end inside this building ...
      const holes = [];
      plan.floors.forEach((fl2, k) => {
        const base = elevation(plan, k);
        if (base >= e) return;
        fl2.furniture.filter(isStairs).forEach((s) => {
          const poly = stairOpening(s);
          if (base + (s.h || 2.7) >= e - 0.35 && poly.every((p) => inPoly(p, b.points))) holes.push(poly);
        });
      });
      // ... and rooms of a house floor on this level with a lower floor (room.dy < 0), which have their own floor
      plan.floors.forEach((fl2, k) => {
        if (Math.abs(elevation(plan, k) - e) > 0.02) return;
        fl2.rooms.filter((r) => r.dy < 0 && r.points.every((p) => inPoly(p, b.points))).forEach((r) => holes.push(r.points));
      });
      // openings that touch or overlap become one (no thin strips of slab in between)
      const toShape = (ring, hs = []) => {
        const s = new THREE.Shape(ring.map((p) => new THREE.Vector2(p[0], -p[1])));
        hs.forEach((h) => s.holes.push(new THREE.Path(h.map((p) => new THREE.Vector2(p[0], -p[1])))));
        return s;
      };
      let slabShapes = [toShape(b.points)];
      if (holes.length) {
        const cut = polygonClipping.difference([[b.points.map((p) => [p[0], p[1]])]], ...holes.map((h) => [[h.map((p) => [p[0], p[1]])]]));
        slabShapes = cut.map((poly) => toShape(poly[0], poly.slice(1)));
      }
      const slab = new THREE.ExtrudeGeometry(slabShapes, { depth: 0.18, bevelEnabled: false, curveSegments: 1 });
      const sm = new THREE.Mesh(slab, new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: day ? 0 : 0.35, transparent: true, opacity: day ? 0.9 : 0.45, side: THREE.DoubleSide, depthWrite: false }));
      sm.rotation.x = -Math.PI / 2;
      sm.position.y = e - 0.18;
      sm.add(new THREE.LineSegments(new THREE.EdgesGeometry(slab, 25), lineMat));
      group.add(sm);
    });

    // archways / doors drawn as a frame on a wall of the building: { type: "arch" | "door", x, z, rot (deg, direction of the wall), w, h, elev }
    (b.openings || []).forEach((op) => {
      const w = op.w || 1.1, hh = op.h || 2.2, r = op.type === "door" ? 0 : w / 2;
      const sh = new THREE.Shape();
      sh.moveTo(-w / 2, 0); sh.lineTo(w / 2, 0); sh.lineTo(w / 2, hh - r);
      if (r) sh.absarc(0, hh - r, r, 0, Math.PI, false); else { sh.lineTo(w / 2, hh); sh.lineTo(-w / 2, hh); }
      sh.lineTo(-w / 2, 0);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.16, bevelEnabled: false, curveSegments: 16 });
      geo.translate(0, 0, -0.08);
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xff2bd6, emissive: 0xff2bd6, emissiveIntensity: 0.5, transparent: true, opacity: 0.5, depthWrite: false }));
      m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), new THREE.LineBasicMaterial({ color: 0xff2bd6 })));
      m.position.set(op.x, op.elev || 0, op.z);
      m.rotation.y = -rad(op.rot || 0);
      m.userData = { site: b.id };
      group.add(m);
      ctx.pickables.push(m);
    });

    // balconies: platform on the level of a storey (default: the first one above ground) with a railing on every edge
    // except the first one, which is the one on the building wall
    (b.balconies || []).forEach((bc) => addDeck(bc, bc.elev ?? (b.storeys || []).find((s) => s > 0.05) ?? 2.8, b.id));

    let top = h;
    const roof = b.roof || {};
    if (roof.type === "gable" && b.points.length === 4) {
      const [p0, p1, p2] = b.points;
      const e0 = [p1[0] - p0[0], p1[1] - p0[1]], e1 = [p2[0] - p1[0], p2[1] - p1[1]];
      const l0 = Math.hypot(...e0), l1 = Math.hypot(...e1);
      const ridge = l0 >= l1 ? e0 : e1;
      const len = Math.max(l0, l1), wid = Math.min(l0, l1);
      const pitch = roof.pitch || 25;
      const sec = { axis: "x", x0: -len / 2, x1: len / 2, z0: -wid / 2, z1: wid / 2, base: h, eaveA: h, eaveB: h, pitchA: pitch, pitchB: pitch, overhang: roof.overhang ?? 0.3 };
      const rg = new THREE.Group();
      addRoofSection(rg, sec, roofMats, 0.05);
      rg.position.set(b.points.reduce((a, p) => a + p[0], 0) / b.points.length, 0, b.points.reduce((a, p) => a + p[1], 0) / b.points.length);
      rg.rotation.y = -Math.atan2(ridge[1], ridge[0]);
      group.add(rg);
      top = roofGeom(sec).yr;
    }
    if (b.name && opts.label) {
      const lp = labelPoint(b.points);
      const sp = opts.label(b.name, ctx.theme);
      sp.position.set(lp[0], top + 0.1, lp[1]);
      group.add(sp);
    }
    if (!abs && groundY) group.children.slice(n0).forEach((c) => { c.position.y += groundY; });
  });
  return group;
}

export function buildCompass(north, pos, ctx) {
  const g = new THREE.Group();
  g.position.set(pos[0], 0.05, pos[1]);
  const n = rad(north || 0);
  const dir = new THREE.Vector3(Math.sin(n), 0, -Math.cos(n));
  const col = ctx.theme === "day" ? 0x334155 : 0x19e6ff;
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.18, 48), new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }));
  ring.rotation.x = -Math.PI / 2;
  g.add(ring);
  g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([dir.clone().multiplyScalar(-0.9), dir.clone().multiplyScalar(1.5)]), new THREE.LineBasicMaterial({ color: 0xff2bd6 })));
  const sp = valueSprite();
  setSprite(sp, "N", "#ff2bd6");
  sp.visible = true;
  sp.scale.set(0.9, 0.22, 1);
  sp.position.copy(dir.clone().multiplyScalar(1.9));
  sp.position.y = 0.3;
  g.add(sp);
  return g;
}

// -------------------------------------------------------------- building
/**
 * Build the whole building as THREE objects.
 * opts: { theme, maxFloor, devicesFor(floor) -> device list, glowTex(), label(text), showRoof }
 */
export function buildBuilding(plan, opts) {
  const theme = opts.theme || "neon";
  const th = THEMES[theme] || THEMES.neon;
  const mats = {
    wall: new THREE.MeshStandardMaterial({ color: th.wall, emissive: th.wall, emissiveIntensity: theme === "day" ? 0 : 0.25, transparent: true, opacity: th.wallOp, depthWrite: false }),
    edge: new THREE.LineBasicMaterial({ color: theme === "day" ? 0x667085 : th.wall, transparent: true, opacity: th.edgeOp }),
  };
  const anchors = { rooms: [], furniture: [], devices: [], pv: [], screens: [], cars: [] };
  const ctx = { theme, th, mats, dyn: [], pickables: [], glowTex: opts.glowTex, anchors, cur: { elev: 0, i: 0 } };
  const root = new THREE.Group();
  const st = { ...DEFAULTS, ...(plan.settings || {}) };

  plan.floors.forEach((fl, i) => {
    if (i > opts.maxFloor) return;
    const elev = elevation(plan, i);
    // a floor below the selected one is only context: its live values (climate, power, devices) are left out
    const other = i < opts.maxFloor && opts.maxFloor !== Infinity;
    ctx.cur = { elev, i, other };
    const g = new THREE.Group();
    const dim = other ? 0.7 : 1;

    // floors + slabs
    const holes = stairHoles(plan, i);
    fl.rooms.forEach((r) => {
      const shape = new THREE.Shape(r.points.map((p) => new THREE.Vector2(p[0], p[1])));
      holes.forEach((h) => {
        if (h.every((p) => inPoly(p, r.points))) shape.holes.push(new THREE.Path(h.map((p) => new THREE.Vector2(p[0], p[1]))));
      });
      const c = new THREE.Color(r.color || "#19e6ff");
      const mat = new THREE.MeshStandardMaterial({ color: c.clone().multiplyScalar(th.floorK), emissive: c, emissiveIntensity: th.floorEm * dim, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: st.slab, bevelEnabled: false, curveSegments: 1 }), mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.y = r.dy || 0; // dy: this room's floor lies lower (negative) or higher than the storey
      mesh.userData = { room: r.id, floor: fl.id };
      g.add(mesh);
      ctx.pickables.push(mesh);
      const lp0 = labelPoint(r.points);
      anchors.rooms.push({ id: r.id, name: r.name, area: r.area, room: r, floor: i, x: lp0[0], z: lp0[1], y: elev + fl.height * 0.5, elev });
      if (r.name) {
        const lp = labelPoint(r.points);
        const sp = opts.label(r.name, theme);
        sp.position.set(lp[0], 0.04, lp[1]);
        g.add(sp);
      }
      // temperature / humidity (live): label above the room, optional floor tint
      const cl = other ? null : opts.climateFor?.(r);
      if (cl && (cl.temperature || cl.humidity || cl.co2)) {
        const lp = labelPoint(r.points);
        const sp = valueSprite(448);
        sp.scale.set(3.15, 0.45, 1);
        sp.position.set(lp[0], 1.05, lp[1]);
        g.add(sp);
        ctx.dyn.push({ kind: "roomclimate", ...cl, sprite: sp, mat, base: { color: mat.color.clone(), emissive: mat.emissive.clone(), ei: mat.emissiveIntensity } });
      }
    });

    // walls + openings
    const segs = wallNetwork(fl, st);
    const hosted = new Map();
    const free = [];
    fl.openings.forEach((o) => {
      const hs = hostSegment(o, segs);
      if (hs) {
        if (!hosted.has(hs.s)) hosted.set(hs.s, []);
        hosted.get(hs.s).push({ ...o, u: hs.u });
      }
      g.add(buildOpening(o, hs, 0, ctx, plan));
      if (!hs) free.push(o);
    });
    segs.forEach((s) => {
      const m = wallMesh(s, fl, elev, plan, th, mats, hosted.get(s) || []);
      m.position.y = 0;
      g.add(m);
    });

    // furniture
    fl.furniture.forEach((f) => g.add(buildFurniture(f, 0, ctx)));

    // devices
    (other ? [] : opts.devicesFor(fl)).forEach((d) => {
      const dom = domainOf(d.entity);
      const y = d.y ?? (dom === "light" ? fl.height - 0.4 : dom === "camera" ? Math.min(2.4, fl.height - 0.25) : 0.9);
      const geo = dom === "light" ? new THREE.SphereGeometry(0.14, 16, 12) : dom === "cover" ? new THREE.BoxGeometry(0.5, 0.08, 0.08) : new THREE.BoxGeometry(0.22, 0.22, 0.22);
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x444a66, emissive: 0x000000 }));
      mesh.position.set(d.x, y, d.z);
      mesh.userData = { entity: d.entity };
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: opts.glowTex(), color: 0xffd08a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      glow.position.copy(mesh.position);
      const bs = dom === "light" ? 2.4 : 1.1;
      glow.scale.setScalar(bs);
      glow.visible = false;
      g.add(mesh, glow);
      ctx.pickables.push(mesh);
      anchors.devices.push({ d, entity: d.entity, floor: i, x: d.x, y: elev + y, z: d.z, kind: dom, mesh });
      ctx.dyn.push({ kind: dom, entity: d.entity, mesh, glow, baseScale: bs, pulse: dom === "light" });
      if (d.name && d.showName) {
        const sp = valueSprite();
        setSprite(sp, d.name);
        sp.visible = true;
        sp.position.set(d.x, y + 0.35, d.z);
        g.add(sp);
      }
    });

    g.position.y = elev;
    root.add(g);
  });

  if (opts.showRoof && opts.maxFloor >= plan.floors.length - 1) root.add(buildRoof(plan, ctx));
  if (opts.showSite !== false) root.add(buildSite(plan, ctx, opts));

  // compass in the south-west corner of everything that is drawn
  const all = [...plan.floors.flatMap((f) => f.rooms.flatMap((r) => r.points)), ...(plan.site?.buildings || []).flatMap((b) => b.points)];
  if (all.length && plan.site?.north != null) {
    const [x0, , , z1] = bbox(all);
    root.add(buildCompass(plan.site.north, [x0 - 2.5, z1 + 2.5], ctx));
  }
  return { root, dyn: ctx.dyn, pickables: ctx.pickables, anchors };
}
