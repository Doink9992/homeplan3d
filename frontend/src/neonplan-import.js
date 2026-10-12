// Converts a NeonPlan 3D building (websocket `neonplan3d/building/get`, or the
// `building` of a `neonplan3d/backup/export`) into a Home Plan 3D plan.
import { normalizePlan } from "./plan.js";

const MATERIAL_COLOR = { wood: "#e0a458", tiles: "#58c4dd", stone: "#9aa5b8", carpet: "#b48ad8", concrete: "#8d99ae" };
const PX = (v) => (v == null ? null : Number(v));
const entityOrNull = (e) => (e && e !== "none" ? e : null);

/** Accepts the raw websocket result, a backup export, or the building itself. */
export function unwrapBuilding(data) {
  const d = data?.result ?? data;
  const building = d?.building ?? d;
  if (!building || !Array.isArray(building.floors)) throw new Error("Keine NeonPlan-3D-Daten (floors fehlen)");
  return { building, meta: { version: d?.version, revision: d?.revision } };
}

export function convertNeonPlan(data) {
  const { building: b, meta } = unwrapBuilding(data);
  const st = b.settings || {};
  const plan = {
    version: 2,
    settings: {
      wallExterior: st.wall_exterior ?? 0.24,
      wallInterior: st.wall_interior ?? 0.12,
      north: st.north ?? 0,
      autoDevices: true,
      energy: b.energy || null,
      roof: convertRoof(st.roof),
      source: { app: "neonplan3d", version: meta.version ?? null, revision: meta.revision ?? null },
    },
    floors: [],
  };

  const floors = [...b.floors].sort((x, y) => (x.elevation ?? 0) - (y.elevation ?? 0));
  floors.forEach((f) => {
    const rooms = (f.rooms || []).map((r) => ({
      id: r.id,
      name: r.name || "",
      area: r.area_id || null,
      color: MATERIAL_COLOR[r.floor_material] || "#19e6ff",
      material: r.floor_material || null,
      points: r.points.map((p) => [p[0], p[1]]),
      wallT: r.wall_thickness || null,
      wallH: r.wall_heights || null,
      climate: r.climate && Object.values(r.climate).some(Boolean) ? r.climate : null,
    }));
    const walls = (f.walls || []).map((w) => ({ id: w.id, a: [...w.a], b: [...w.b], t: PX(w.thickness), h: PX(w.height) }));

    const openings = [];
    (f.openings || []).forEach((o) => {
      let a, b2;
      if (o.wall) {
        const w = (f.walls || []).find((x) => x.id === o.wall);
        if (!w) return;
        [a, b2] = [w.a, w.b];
      } else {
        const r = (f.rooms || []).find((x) => x.id === o.room_id);
        if (!r) return;
        const e = o.edge || 0;
        [a, b2] = [r.points[e % r.points.length], r.points[(e + 1) % r.points.length]];
      }
      const dx = b2[0] - a[0], dz = b2[1] - a[1], len = Math.hypot(dx, dz) || 1;
      const off = o.offset ?? len / 2; // distance of the opening's centre from the start point
      const door = o.type === "door";
      openings.push({
        id: o.id,
        type: o.type,
        x: +(a[0] + (dx / len) * off).toFixed(4),
        z: +(a[1] + (dz / len) * off).toFixed(4),
        rot: -Math.atan2(dz, dx),
        w: o.width ?? (door ? 0.9 : 1.2),
        h: o.height ?? (door ? 2.1 : 1.1),
        sill: o.sill ?? (door ? 0 : 0.9),
        style: o.style || null,
        hinge: o.hinge || "left",
        swing: o.swing || "in",
        leaves: o.leaves || 1,
        entity: entityOrNull(o.contact) || entityOrNull(o.sensor),
        cover: entityOrNull(o.cover),
      });
    });

    const furniture = (f.furniture || []).map((x) => ({
      id: x.id,
      type: x.type,
      x: x.x ?? 0,
      z: x.z ?? 0,
      rot: x.rotation || 0,
      w: x.w,
      d: x.d,
      h: x.h,
      mountY: x.mount_y ?? null,
      name: x.name || null,
      showName: !!x.show_name,
      entity: entityOrNull(x.entity),
      power: entityOrNull(x.power),
      stateEntity: entityOrNull(x.state_entity),
      marker: x.marker || null,
    }));

    const devices = (f.placements || []).map((p, i) => ({
      id: `${f.id}_dev${i}`,
      entity: p.entity_id,
      x: p.x,
      z: p.z,
      y: p.y ?? null,
      name: p.name || null,
      showName: !!p.show_name,
    }));

    plan.floors.push({
      id: f.id,
      name: f.name,
      elevation: f.elevation ?? 0,
      height: f.height ?? 2.6,
      rooms,
      walls,
      openings,
      devices,
      furniture,
    });
  });
  return normalizePlan(plan);
}

function convertRoof(r) {
  if (!r || !Array.isArray(r.sections) || !r.sections.length) return null;
  return {
    overhang: r.overhang ?? 0.5,
    sections: r.sections.map((s) => ({
      id: s.id,
      shape: s.shape || "gable",
      axis: s.axis || "x",
      x0: s.x0, x1: s.x1, z0: s.z0, z1: s.z1,
      base: s.base,
      eaveA: s.eave_a, eaveB: s.eave_b,
      pitchA: s.pitch_a ?? r.pitch ?? 40, pitchB: s.pitch_b ?? r.pitch ?? 40,
      overhang: s.overhang ?? r.overhang ?? 0.5,
      flip: !!s.flip,
    })),
    solar: (r.solar || []).map((p) => ({
      id: p.id, face: p.face, u: p.u, v: p.v, rows: p.rows || 1, cols: p.cols || 1,
      portrait: p.portrait !== false, entity: entityOrNull(p.entity), wp: p.wp || null, name: p.name || null,
      moduleW: p.module_w ?? null, moduleH: p.module_h ?? null,
    })),
    windows: (r.windows || []).map((w) => ({ id: w.id, face: w.face, u: w.u, v: w.v, w: w.w || 1, h: w.h || 1.2, entity: entityOrNull(w.contact) })),
  };
}
