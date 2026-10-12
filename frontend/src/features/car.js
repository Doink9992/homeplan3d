import * as THREE from "three";
import { Feature, card3d, esc, clamp } from "./base.js";
import { detectCarRoles, chargeColor, carSummary } from "../lib/car.js";
import { openSettings } from "./settings-ui.js";

/**
 * Car: the vehicle wears a light band coloured by charge level (warm while the climate runs),
 * a pin shows charge, range, charging power and lock state ("away" when it is out), a tap opens a
 * card with buttons for lock, climate and charging.
 */
export class CarFeature extends Feature {
  get id() { return "car"; }
  get label() { return "🚗 Auto"; }
  get title() { return "Fahrzeug: Ladestand, Reichweite, Laden, Verriegelung und Klima"; }
  get usesHolo() { return true; }
  get settingsLabel() { return "🚗 Auto"; }
  available() { return !!this.cars?.length; }

  build(anchors) {
    this.cars = anchors.cars.map((c) => {
      const a = anchors.furniture.find((x) => x.f === c.f);
      const pin = card3d(`<span data-pin>🚗</span>`, { cls: "pin", interactive: true });
      pin.position.set(a.x, a.top + 0.5, a.z);
      pin.element.style.cursor = "pointer";
      pin.element.addEventListener("click", () => this.toggleCard(car));
      const dlg = card3d(`<div class="car"></div>`, { cls: "carcard", interactive: true });
      dlg.position.set(a.x, a.top + 1.4, a.z);
      dlg.visible = false;
      dlg.element.addEventListener("click", (e) => this.cardClick(car, e));
      this.group.add(pin, dlg);
      const car = { ...c, a, pin, dlg, open: false, roles: null, sig: "", dlgSig: "" };
      return car;
    });
  }

  roles(car) {
    const f = car.f, o = f.car || {};
    return detectCarRoles(o.entity || f.entity, this.view.hass?.entities || {}, this.states, o);
  }

  toggleCard(car) {
    car.open = !car.open;
    this.cars.forEach((c) => { if (c !== car) { c.open = false; } });
    this.update(this.states);
  }
  onTap(u) {
    const car = this.cars?.find((c) => c.f.id === u?.furnId);
    if (!car) return false;
    this.toggleCard(car);
    return true;
  }

  update(states) {
    if (!this.cars) return;
    const holo = this.view.holo !== false;
    this.cars.forEach((car) => {
      const roles = (car.roles = this.roles(car));
      const s = (car.s = carSummary(roles, states));
      const hasData = s.battery != null || s.range != null || roles.lock || roles.climate;
      car.band.color.setHex(s.climateOn ? 0xff9a3c : chargeColor(s.battery));
      car.band.opacity = s.away ? 0.2 : 0.9;
      car.group.visible = true;

      const name = car.f.car?.name || car.f.name || "Auto";
      const bits = s.away ? ["unterwegs"] : [
        s.battery != null ? `🔋 ${Math.round(s.battery)} %` : null,
        s.range != null ? `${Math.round(s.range)} ${esc(s.rangeUnit)}` : null,
        s.charging ? `⚡ ${s.power != null ? s.power.toFixed(1).replace(".", ",") + " kW" : "lädt"}` : null,
        s.locked != null ? (s.locked ? "🔒" : "🔓") : null,
        s.climateOn ? "❄" : null,
      ].filter(Boolean);
      const pinHtml = `${esc(name)}${bits.length ? " · " + bits.join(" · ") : ""}`;
      if (pinHtml !== car.sig) { car.sig = pinHtml; car.pin.element.firstChild.innerHTML = pinHtml; }
      car.pin.visible = holo;

      // card
      car.dlg.visible = holo && car.open;
      if (car.open) {
        const pct = s.battery != null ? clamp(s.battery, 0, 100) : 0;
        const html = `<b>🚗 ${esc(name)}</b>
          ${s.battery != null ? `<div class="bar"><i style="width:${pct}%;background:#${chargeColor(s.battery).toString(16).padStart(6, "0")}"></i></div>` : ""}
          <div class="r"><span>Ladestand</span><b>${s.battery != null ? Math.round(s.battery) + " %" : "–"}</b></div>
          <div class="r"><span>Reichweite</span><b>${s.range != null ? Math.round(s.range) + " " + esc(s.rangeUnit) : "–"}</b></div>
          <div class="r"><span>Laden</span><b>${s.charging ? (s.power != null ? s.power.toFixed(1).replace(".", ",") + " kW" : "ja") : "nein"}</b></div>
          <div class="btns">
            ${roles.lock ? `<button data-a="lock">${s.locked ? "🔒 Verriegelt" : "🔓 Offen"}</button>` : ""}
            ${roles.climate ? `<button data-a="climate" class="${s.climateOn ? "on" : ""}">❄ Klima</button>` : ""}
            ${roles.switch ? `<button data-a="charge" class="${s.charging ? "on" : ""}">⚡ Laden</button>` : ""}
            <button data-a="close">✕</button></div>`;
        if (html !== car.dlgSig) { car.dlgSig = html; car.dlg.element.firstChild.innerHTML = html; }
      }
    });
  }

  cardClick(car, e) {
    const act = e.target.closest("[data-a]")?.dataset.a;
    if (!act) return;
    e.stopPropagation();
    const { roles, s } = car;
    const hass = this.view.hass;
    if (act === "close") { car.open = false; return this.update(this.states); }
    if (act === "lock" && roles.lock) {
      if (s.locked && !confirm("Auto entriegeln?")) return;
      hass.callService("lock", s.locked ? "unlock" : "lock", { entity_id: roles.lock });
    }
    if (act === "climate" && roles.climate) hass.callService("climate", s.climateOn ? "turn_off" : "turn_on", { entity_id: roles.climate });
    if (act === "charge" && roles.switch) {
      if (roles.switch.startsWith("button.")) hass.callService("button", "press", { entity_id: roles.switch });
      else hass.callService("switch", s.charging ? "turn_off" : "turn_on", { entity_id: roles.switch });
    }
  }

  tick(dt, t) {
    this.cars?.forEach((c) => {
      if (c.s?.charging && !c.s.away) c.band.opacity = 0.55 + 0.35 * Math.sin(t * 4);
    });
  }

  // ---------------------------------------------------------- settings
  openSettings() {
    const car = this.cars?.[0];
    if (!car) return this.view.msg("Erst ein Fahrzeug (Möbeltyp „car“) im Plan platzieren.");
    this.openCarSettings(car.f);
  }
  openCarSettings(f) {
    const obj = (f.car ||= {});
    openSettings(this.view, {
      title: "🚗 Auto zuordnen",
      obj,
      note: "Nenne eine beliebige Entität des Autos; die anderen Entitäten desselben Geräts werden automatisch gefunden. Eigene Zuordnungen unten haben Vorrang.",
      fields: [
        { k: "name", l: "Name", t: "text" },
        { k: "entity", l: "Entität des Autos (z. B. Ladestand)", t: "entity" },
        { k: "battery", l: "Ladestand (%)", t: "entity" }, { k: "range", l: "Reichweite", t: "entity" },
        { k: "charging", l: "Lädt (binary_sensor)", t: "entity" }, { k: "power", l: "Ladeleistung", t: "entity" },
        { k: "lock", l: "Zentralverriegelung (lock)", t: "entity" }, { k: "climate", l: "Klima (climate)", t: "entity" },
        { k: "switch", l: "Laden starten/stoppen (switch/button)", t: "entity" }, { k: "tracker", l: "Standort (device_tracker)", t: "entity" },
      ],
    });
  }
}
