# Home Plan 3D

Zeichne deinen Grundriss (oder importiere ihn), sieh dein Haus als **leuchtendes 3D-Modell** und steuere Geräte direkt darin – als Seitenleisten-Panel und als Dashboard-Karte für Home Assistant.

![Vorschau](docs/preview.jpg)

## Funktionen

- **Editor** im Browser: Etagen, Räume (Rechteck/Polygon), Wände, Türen, Fenster, Möbel, Geräte, Rückgängig (Strg+Z), Raster, 2D-Plan neben der Live-3D-Vorschau.
- **3D-Ansicht**: Wände mit echten Öffnungen und Wandstärken, Treppen mit Deckenöffnung, Satteldach mit PV-Modulen, Etagen einzeln oder ganz, Neon- und Tag-Darstellung, Kompass.
- **Live-Zustände**: Lampen leuchten in ihrer Farbe/Helligkeit, Kontakte öffnen Türen und Fenster, Leistungssensoren zeigen Werte am Möbel, Tippen schaltet, langes Drücken öffnet More-Info. Raum antippen: Geräteliste mit Dimmer und Klimawerten.
- **Beides**: Geräte manuell platzieren **oder** einen Raum einem HA-Bereich zuordnen – dessen Lampen, Schalter und Rollos erscheinen automatisch im Raum.
- **Gelände**: weitere Gebäude auf dem Grundstück (Garage, Scheune, Anbau …), auch mehrgeschossig und mit Dach.
- **Import** aus [NeonPlan 3D](https://github.com/Mastershort/neonplan3d) (live aus dessen Websocket-API oder aus einer Backup-Datei). Es wird nur das Datenformat gelesen, kein Code übernommen.

## Installation

**HACS (empfohlen):** HACS → ⋮ → *Benutzerdefinierte Repositories* → `https://github.com/Doink9992/homeplan3d`, Typ **Integration** → *Home Plan 3D* herunterladen → Home Assistant neu starten → *Einstellungen → Geräte & Dienste → Integration hinzufügen → Home Plan 3D*.

**Manuell:** Ordner `custom_components/homeplan3d` nach `config/custom_components/` kopieren und neu starten.

Danach erscheint **Home Plan 3D** in der Seitenleiste. Mit **✏️ Editor** (nur Admins) zeichnest du; **💾 Speichern** legt den Plan in Home Assistant ab.

## Plan aus NeonPlan 3D übernehmen

Editor → **⇩ Von NeonPlan 3D übernehmen**. Etagen, Räume, Wände, Öffnungen, Möbel, Platzierungen und das Dach werden umgerechnet. Alternativ **📂 Datei laden** mit einem NeonPlan-Backup. Auf der Kommandozeile: `node scripts/convert-neonplan.mjs export.json`.

## Weitere Gebäude aus dem Katasterplan

`scripts/site-from-kataster.py` liest die Gebäudeumrisse aus einem Screenshot der Liegenschaftskarte, richtet sie am Hauptgebäude aus und schreibt eine Datei, die du im Editor mit **📂 Datei laden** einfügst. Der Maßstab wird aus dem Flächenvergleich mit dem Haus geschätzt (`--scale` überschreibt ihn). Beispiel-Konfiguration: `scripts/site-config.example.json`.

```bash
python scripts/site-from-kataster.py screenshot.png site.json --config site-config.json --plan plan.json
```

## Dashboard-Karte

```yaml
type: custom:homeplan3d-card
height: 500        # Pixel
floor: 2           # optional: nur bis zu dieser Etage (0 = unterste)
theme: neon        # neon | day
show_roof: true
show_site: true
```

## Entwicklung

```bash
cd frontend && npm install && npm run build   # baut custom_components/homeplan3d/www/homeplan3d.js
python -m http.server 8765                    # dann http://127.0.0.1:8765/preview/index.html (Demo ohne Home Assistant)
pip install pytest-homeassistant-custom-component && pytest   # Backend-Tests
```

Die Vorschau lädt `preview/demo-plan.json`; mit `?plan=…` kannst du einen eigenen Plan laden.

## Hinweise

- Nur Satteldächer; Walm- und Pultdächer fehlen noch.
- Der Plan liegt in `.storage/homeplan3d.plan`. Speichern dürfen nur Admins, ansehen alle Benutzer.

## Lizenz

MIT
