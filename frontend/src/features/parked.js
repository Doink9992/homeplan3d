import { Feature } from "./base.js";

/**
 * Parked cars (furniture with `presence`): the car is shown while that entity (an input_boolean or any
 * on/off entity) is not "off", and hidden while it is away. A long press switches the entity by hand,
 * for when the plate reader missed a trip. No toolbar button: it simply works.
 */
export class ParkedFeature extends Feature {
  get id() { return "parked"; }
  available() { return false; }

  build(anchors) {
    this.cars = anchors.furniture.filter((a) => a.f.presence).map((a) => ({ a, entity: a.f.presence, shown: true }));
  }

  update(states) {
    this.cars?.forEach((c) => {
      const s = states[c.entity]?.state;
      c.shown = s == null || (s !== "off" && s !== "unavailable");
      c.a.group.visible = c.shown;
    });
  }

  onLongPress(u) {
    const c = this.cars?.find((x) => x.a.f.id === u?.furnId);
    if (!c || !c.shown || !this.view.hass) return false;
    const [domain] = c.entity.split(".");
    this.view.hass.callService(domain, "turn_off", { entity_id: c.entity });
    this.view.msg(`${c.a.f.name || "Auto"}: als „weg“ markiert`);
    return true;
  }

  reset() { this.cars?.forEach((c) => { c.a.group.visible = true; }); }
  dispose() { this.cars = null; }
}
