# Home Plan 3D – Hinweise für die Weiterentwicklung

Home-Assistant-Integration (Domain `homeplan3d`): Seitenleisten-Panel und Karte `custom:homeplan3d-card`. 3D mit Three.js, 2D-Editor, Import aus NeonPlan 3D, Gelände (Nebengebäude), Live-Zustände.

## Aufbau

- `custom_components/homeplan3d/` – Backend. `__init__.py` registriert Panel, statische Dateien und die Websocket-Befehle `homeplan3d/get` und `homeplan3d/save` (nur Admin). `www/homeplan3d.js` ist das **gebaute und eingecheckte** Frontend, HACS liefert genau diese Datei aus.
- `frontend/src/`
  - `util.js` Geometrie-Helfer · `plan.js` Datenmodell, Wandnetz (Ecken, T-Stöße, Stärken), Dach, Treppenöffnungen
  - `build3d.js` baut die Three.js-Szene (Böden, Wände mit Öffnungen, Möbel, Dach/PV, Gelände, Kompass, Klima-Labels)
  - `neonplan-import.js` rechnet NeonPlan-3D-Daten um · `main.js` UI (Ansicht, 2D-Editor, Seitenpanel, Panel- und Karten-Element)
- `preview/` – Demo ohne Home Assistant: `python -m http.server 8765`, dann `http://127.0.0.1:8765/preview/index.html` (`?plan=…`, `?card=1`, `?door=open`).
- `scripts/` – `convert-neonplan.mjs`, `site-from-kataster.py` (Beispiel-Konfiguration: `site-config.example.json`).
- `tests/` – Backend-Tests mit `pytest-homeassistant-custom-component` (unter Windows nur mit den Platzhaltern in `tests/conftest.py` und Stub-Modulen `fcntl`/`resource` im venv).

## Befehle

```bash
cd frontend && npm install && npm run build      # schreibt custom_components/homeplan3d/www/homeplan3d.js
pip install pytest-homeassistant-custom-component && pytest
```

## Release / Update in Home Assistant

1. Frontend bauen, Tests laufen lassen.
2. `version` in `custom_components/homeplan3d/manifest.json` erhöhen.
3. Committen, pushen, `gh release create vX.Y.Z --generate-notes`.
4. HACS → Home Plan 3D → aktualisieren (oder `ha_manage_hacs` update_information/download).
5. Browser hart neu laden (Strg+Shift+R). Ein HA-Neustart ist nur bei Python-Änderungen nötig; danach hängt die JS-URL an der Dateizeit, sodass sich spätere Updates ohne Neustart durchsetzen.

## Datenmodell (Plan v2, gespeichert in `.storage/homeplan3d.plan`)

Koordinaten in Metern, x nach rechts, z nach unten (Draufsicht), y nach oben. Möbeldrehung in Grad im Uhrzeigersinn.

```
floors[]  { id, name, elevation?, height, rooms[], walls[], openings[], devices[], furniture[] }
  rooms[]      { id, name, area, color, points[[x,z]], wallT[], wallH[], climate{temperature,humidity,co2}, autoDevices? }
  walls[]      { id, a, b, t, h }                      freie Wände
  openings[]   { id, type door|window, x, z, rot, w, h, sill, style, hinge, swing, entity }
  devices[]    { id, entity, x, z, y, name, showName }
  furniture[]  { id, type, x, z, rot, w, d, h, mountY, name, color?, entity, power }
  devices[]    camera.*: + rot, tilt, fov, reach, motion (Sichtfeld, Melder)
settings  { wallExterior, wallInterior, slab, autoDevices, hiddenEntities[], roof{sections,solar,windows}, north }
site      { north, cadastreHouse, buildings[ { id, name, points, height, levels, storeys, roof{type,pitch,overhang,high}, visible,
                                             parts[], pv{} } ] }
  parts[]      West → Ost: { type garage|bike|carport|open, len?, name?, door?, doorSide?, stalls?, stallWidth?, numberFrom? }
               len leer = teilt sich den Rest; doorSide low|high|west|east (Standard low); numberFrom east|west (Standard east)
  balconies[]  { name?, points[[x,z]] (Kante 0 liegt an der Wand), elev? (Standard: erstes Geschoss), rail? }
  pv{}         { enabled, fill, rows, cols, orientation, over ("#<Index eines Teils>"), edge, wp, entity }
```

Geräte erscheinen automatisch, wenn ein Raum einen HA-Bereich (`area`) hat; `hiddenEntities` blendet einzelne aus, Ziehen setzt ein automatisches Gerät fest (wird zu `devices[]`). Temperatur und Feuchte eines Raums kommen aus `climate` oder werden aus den Sensoren des HA-Bereichs erkannt (`device_class`).

## Regeln

- **Repo immer aktuell halten.** Jede Änderung sofort committen und pushen (ausgelieferte Stände zusätzlich als Release), damit man von jedem Rechner aus weitermachen kann. Vor dem Push: Frontend bauen (das gebaute `www/homeplan3d.js` gehört ins Repo) und Tests laufen lassen.
- **Keine persönlichen Daten ins Repo.** Der Ordner `import/` ist ignoriert (NeonPlan-Export, Katasterplan, erzeugte Plan-/Gelände-Dateien). Das Gebäude liegt in Home Assistant und lässt sich im Editor mit „Plan als Datei sichern“ exportieren.
- Beim Ändern des Datenmodells `normalizePlan` in `plan.js` abwärtskompatibel halten.
- NeonPlan 3D wird nur als Datenquelle gelesen (Websocket `neonplan3d/building/get`), es wird nichts verändert.
