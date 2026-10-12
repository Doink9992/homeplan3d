import * as THREE from "three";
import { Feature, glowTexture, clamp } from "./base.js";
import { mapWeather, weatherLabel, skyDirection } from "../lib/weathermap.js";

const DEFAULTS = { rain: true, snow: true, lightning: true, fog: false, clouds: true, sun: true };

function cloudTexture() {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 128;
  const x = c.getContext("2d");
  for (let i = 0; i < 14; i++) {
    const cx = 40 + Math.random() * 176, cy = 50 + Math.random() * 40, r = 22 + Math.random() * 30;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, "rgba(255,255,255,.55)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = g;
    x.fillRect(0, 0, 256, 128);
  }
  return new THREE.CanvasTexture(c);
}

function moonTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const x = c.getContext("2d");
  x.fillStyle = "#e6ecff";
  x.beginPath(); x.arc(64, 64, 40, 0, Math.PI * 2); x.fill();
  x.globalCompositeOperation = "destination-out"; // crescent
  x.beginPath(); x.arc(84, 56, 36, 0, Math.PI * 2); x.fill();
  return new THREE.CanvasTexture(c);
}

export class WeatherFeature extends Feature {
  get id() { return "weather"; }
  get label() { return "☁ Wetter"; }
  get title() { return "Wetter draußen: Regen, Schnee, Gewitter, Wolken, Sonne und Mond"; }
  cfg() { return { ...DEFAULTS, ...(this.settings.weather || {}) }; }

  entity() {
    const st = this.states;
    const e = this.cfg().entity;
    if (e && st[e]) return e;
    return Object.keys(st).find((k) => k.startsWith("weather.")) || null;
  }
  available() { return !!this.entity(); }

  build() {
    const v = this.view;
    const ext = v.extent() || [0, 0, 10, 10];
    const q = v.cfg.quality === "tablet" ? 0.3 : 1;
    this.center = new THREE.Vector3((ext[0] + ext[2]) / 2, 0, (ext[1] + ext[3]) / 2);
    this.box = { x0: ext[0] - 14, x1: ext[2] + 14, z0: ext[1] - 14, z1: ext[3] + 14, top: 26 };
    const bw = this.box.x1 - this.box.x0, bd = this.box.z1 - this.box.z0;
    const rnd = (a, b) => a + Math.random() * (b - a);

    // rain: short line segments falling (slanted by the wind)
    this.rainN = Math.round(2400 * q);
    this.rainPos = new Float32Array(this.rainN * 6);
    this.rainHead = new Float32Array(this.rainN * 3);
    this.rainSpeed = new Float32Array(this.rainN);
    for (let i = 0; i < this.rainN; i++) {
      this.rainHead.set([rnd(this.box.x0, this.box.x1), rnd(0, this.box.top), rnd(this.box.z0, this.box.z1)], i * 3);
      this.rainSpeed[i] = rnd(16, 24);
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute("position", new THREE.BufferAttribute(this.rainPos, 3).setUsage(THREE.DynamicDrawUsage));
    rg.setDrawRange(0, 0);
    this.rain = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0x9cc8ff, transparent: true, opacity: 0.5, depthWrite: false }));
    this.rain.frustumCulled = false;

    // snow: slowly drifting points
    this.snowN = Math.round(1800 * q);
    this.snowPos = new Float32Array(this.snowN * 3);
    this.snowPhase = new Float32Array(this.snowN);
    for (let i = 0; i < this.snowN; i++) {
      this.snowPos.set([rnd(this.box.x0, this.box.x1), rnd(0, this.box.top), rnd(this.box.z0, this.box.z1)], i * 3);
      this.snowPhase[i] = rnd(0, 6.28);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute("position", new THREE.BufferAttribute(this.snowPos, 3).setUsage(THREE.DynamicDrawUsage));
    sg.setDrawRange(0, 0);
    this.snow = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.2, color: 0xffffff, map: glowTexture(), transparent: true, depthWrite: false, opacity: 0.9 }));
    this.snow.frustumCulled = false;

    // lightning bolt
    this.bolt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 9 }, () => new THREE.Vector3())), new THREE.LineBasicMaterial({ color: 0xeaf2ff }));
    this.bolt.visible = false;
    this.bolt.frustumCulled = false;

    // sun, moon, clouds
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture("rgba(255,244,200,1)"), color: 0xffe9a8, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.sunSprite.scale.setScalar(16);
    this.moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(), transparent: true, depthWrite: false, fog: false }));
    this.moonSprite.scale.setScalar(6);
    this.sunSprite.visible = this.moonSprite.visible = false;
    const cloudTex = cloudTexture();
    this.clouds = Array.from({ length: 9 }, () => {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, transparent: true, depthWrite: false, opacity: 0, fog: false }));
      s.scale.set(rnd(26, 40), rnd(10, 16), 1);
      s.position.set(rnd(this.box.x0 - 10, this.box.x1 + 10), rnd(24, 36), rnd(this.box.z0 - 10, this.box.z1 + 10));
      s.visible = false;
      return s;
    });
    this.group.add(this.rain, this.snow, this.bolt, this.sunSprite, this.moonSprite, ...this.clouds);
    void bw; void bd;

    this.base = { amb: v.ambient.intensity, dl: v.sunLight.intensity, bg: v.scene.background.clone(), fogNear: v.scene.fog.near, fogFar: v.scene.fog.far, dlPos: v.sunLight.position.clone(), dlColor: v.sunLight.color.clone() };
    this.flash = 0;
    this.nextStrike = 4;
    this.wx = 0; this.wz = 0;
    this.w = null;
    this.lit = { amb: this.base.amb, dl: this.base.dl };
  }

  update(states) {
    const e = this.entity();
    if (!e || !this.base) return;
    const s = states[e];
    const cfg = this.cfg();
    const north = this.plan.site?.north ?? this.settings.north ?? 0;
    const w = (this.w = mapWeather(s.state, s.attributes || {}, states["sun.sun"] || null));
    const v = this.view;

    this.rain.geometry.setDrawRange(0, cfg.rain ? Math.round(this.rainN * w.rain) * 2 : 0);
    this.snow.geometry.setDrawRange(0, cfg.snow ? Math.round(this.snowN * w.snow) : 0);
    // wind: precipitation drifts downwind (bearing = direction the wind comes from)
    const slant = Math.tan((w.windAngle * Math.PI) / 180);
    const d = skyDirection(w.windBearing + 180, 0, north);
    this.wx = d.x * slant; this.wz = d.z * slant;

    // sun / moon
    const day = !w.night;
    const el = Number.isFinite(w.sunElevation) ? w.sunElevation : day ? 40 : -20;
    const az = Number.isFinite(w.sunAzimuth) ? w.sunAzimuth : 180;
    const R = 62;
    const place = (sprite, dir) => sprite.position.set(this.center.x + dir.x * R, Math.max(4, dir.y * R), this.center.z + dir.z * R);
    this.sunSprite.visible = cfg.sun && day && el > -2;
    if (this.sunSprite.visible) place(this.sunSprite, skyDirection(az, Math.max(el, 6), north));
    this.sunSprite.material.opacity = 1 - w.cloud * 0.75;
    this.moonSprite.visible = cfg.sun && w.night;
    if (this.moonSprite.visible) place(this.moonSprite, skyDirection(az + 180, clamp(-el + 10, 14, 60), north));
    this.moonSprite.material.opacity = 1 - w.cloud * 0.8;

    // clouds
    this.clouds.forEach((c, i) => {
      const show = cfg.clouds && i < Math.ceil(this.clouds.length * w.cloud);
      c.visible = show;
      c.material.opacity = show ? 0.2 + 0.35 * w.cloud : 0;
    });

    // light follows the sky
    const dir = day ? skyDirection(az, Math.max(el, 12), north) : skyDirection(az + 180, 35, north);
    v.sunLight.position.set(this.center.x + dir.x * 30, dir.y * 30, this.center.z + dir.z * 30);
    v.sunLight.color.set(day ? 0xfff1d8 : 0x7f95d6);
    this.target = {
      amb: this.base.amb * (day ? 1 : 0.75) * (1 - 0.25 * w.cloud),
      dl: this.base.dl * (day ? 1 : 0.4) * (1 - 0.7 * w.cloud),
      fog: cfg.fog ? w.fog : 0,
      tint: v.theme === "neon" ? (day ? 0.55 * (1 - w.cloud * 0.6) : 0) : 0,
    };

    v.setChip("weather", `${w.lightning ? "⛈" : w.rain ? "🌧" : w.snow ? "❄" : w.fog ? "🌫" : day ? (w.cloud > 0.6 ? "☁" : w.cloud > 0.25 ? "⛅" : "☀") : "🌙"} ${weatherLabel(s.state)}${s.attributes?.temperature != null ? ` · ${s.attributes.temperature}°` : ""}${w.windKmh >= 5 ? ` · ${Math.round(w.windKmh)} km/h` : ""}`);
  }

  tick(dt) {
    if (!this.w || !this.target) return;
    const v = this.view, w = this.w, cfg = this.cfg();
    const k = Math.min(1, dt * 1.5);
    this.lit.amb += (this.target.amb - this.lit.amb) * k;
    this.lit.dl += (this.target.dl - this.lit.dl) * k;

    // lightning
    if (cfg.lightning && w.lightning) {
      this.nextStrike -= dt;
      if (this.nextStrike <= 0) {
        this.flash = 1;
        this.nextStrike = 3 + Math.random() * 7;
        const x = this.box.x0 + Math.random() * (this.box.x1 - this.box.x0), z = this.box.z0 + Math.random() * (this.box.z1 - this.box.z0);
        const p = this.bolt.geometry.attributes.position;
        for (let i = 0; i < 9; i++) p.setXYZ(i, x + (Math.random() - 0.5) * 3 * (i > 0 && i < 8 ? 1 : 0), 28 - i * 3.5, z + (Math.random() - 0.5) * 3 * (i > 0 && i < 8 ? 1 : 0));
        p.needsUpdate = true;
        this.bolt.visible = true;
      }
    }
    this.flash = Math.max(0, this.flash - dt * 4);
    if (this.flash < 0.3) this.bolt.visible = false;
    v.ambient.intensity = this.lit.amb + this.flash * 1.4;
    v.sunLight.intensity = this.lit.dl + this.flash * 1.8;

    // sky tint + fog
    const bg = v.scene.background;
    bg.copy(this.base.bg).lerp(new THREE.Color(0x1a2a4d), this.target.tint).lerp(new THREE.Color(0xdde8ff), this.flash * 0.5);
    if (this.target.fog > 0) {
      v.scene.fog.near = this.base.fogNear * (1 - 0.85 * this.target.fog);
      v.scene.fog.far = this.base.fogFar * (1 - 0.7 * this.target.fog);
    } else { v.scene.fog.near = this.base.fogNear; v.scene.fog.far = this.base.fogFar; }

    // precipitation
    const nRain = Math.round(this.rainN * w.rain);
    if (cfg.rain && nRain) {
      const len = 0.7, slantX = this.wx, slantZ = this.wz;
      for (let i = 0; i < nRain; i++) {
        let x = this.rainHead[i * 3], y = this.rainHead[i * 3 + 1], z = this.rainHead[i * 3 + 2];
        const sp = this.rainSpeed[i] * dt;
        y -= sp; x += slantX * sp; z += slantZ * sp;
        if (y < 0) { y = this.box.top; x = this.box.x0 + Math.random() * (this.box.x1 - this.box.x0); z = this.box.z0 + Math.random() * (this.box.z1 - this.box.z0); }
        this.rainHead.set([x, y, z], i * 3);
        this.rainPos.set([x, y, z, x - slantX * len, y + len, z - slantZ * len], i * 6);
      }
      this.rain.geometry.attributes.position.needsUpdate = true;
    }
    const nSnow = Math.round(this.snowN * w.snow);
    if (cfg.snow && nSnow) {
      const tt = performance.now() / 1000;
      for (let i = 0; i < nSnow; i++) {
        let x = this.snowPos[i * 3], y = this.snowPos[i * 3 + 1], z = this.snowPos[i * 3 + 2];
        y -= 1.3 * dt;
        x += (Math.sin(tt * 0.7 + this.snowPhase[i]) * 0.5 + this.wx * 4) * dt;
        z += (Math.cos(tt * 0.5 + this.snowPhase[i]) * 0.5 + this.wz * 4) * dt;
        if (y < 0) { y = this.box.top; x = this.box.x0 + Math.random() * (this.box.x1 - this.box.x0); z = this.box.z0 + Math.random() * (this.box.z1 - this.box.z0); }
        this.snowPos[i * 3] = x; this.snowPos[i * 3 + 1] = y; this.snowPos[i * 3 + 2] = z;
      }
      this.snow.geometry.attributes.position.needsUpdate = true;
    }
    // clouds drift with the wind
    const drift = (0.4 + w.windKmh * 0.05) * dt;
    this.clouds.forEach((c) => { if (c.visible) { c.position.x += drift; if (c.position.x > this.box.x1 + 20) c.position.x = this.box.x0 - 20; } });
  }

  reset() {
    const v = this.view;
    if (!this.base) return;
    v.ambient.intensity = this.base.amb;
    v.sunLight.intensity = this.base.dl;
    v.sunLight.position.copy(this.base.dlPos);
    v.sunLight.color.copy(this.base.dlColor);
    v.scene.background.copy(this.base.bg);
    v.scene.fog.near = this.base.fogNear; v.scene.fog.far = this.base.fogFar;
    v.setChip("weather", "");
  }
  dispose() { this.reset(); this.base = null; this.w = null; this.target = null; }
}
