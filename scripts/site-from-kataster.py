#!/usr/bin/env python3
"""Extract building footprints from a cadastral map screenshot (ALKIS style) and
calibrate them against the main building's plan outline.

Colours in the screenshot: dark grey (178) = main building with house number,
light grey (229) = outbuildings, pink = land use, black = lines.

Usage:
  python scripts/site-from-kataster.py screenshot.png site.json --config site-config.json --plan plan.json \
      [--scale 0.056] [--debug debug.png]

The scale (metres per pixel) is not known from the screenshot; by default it is
chosen so the main building's cadastral footprint has the same area as the
building outline in the plan. Pass --scale (or --house-length) to override.
"""
import argparse
import json
import math

import cv2
import numpy as np
from PIL import Image, ImageDraw

def house_from_plan(path):
    """Outer outline (x0, z0, x1, z1) of the ground floor of a Home Plan 3D plan, incl. half the exterior wall."""
    plan = json.load(open(path, encoding="utf8"))
    floors = [f for f in plan["floors"] if -0.01 <= (f.get("elevation") or 0) <= 0.5] or plan["floors"][:1]
    pts, half = [], plan.get("settings", {}).get("wallExterior", 0.24) / 2
    for f in floors:
        for r in f["rooms"]:
            pts += r["points"]
            half = max([half] + [t / 2 for t in (r.get("wallT") or []) if t])
    xs, zs = [p[0] for p in pts], [p[1] for p in pts]
    return {"x0": min(xs) - half, "z0": min(zs) - half, "x1": max(xs) + half, "z1": max(zs) + half}


def near(im, c, tol):
    return (np.abs(im.astype(int) - np.array(c)).max(axis=2) <= tol).astype(np.uint8)


def component_polygon(mask, seed, eps=3.0, rect_ratio=0.9):
    n, lab, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=4)
    i = lab[seed[1], seed[0]]
    if i == 0:
        raise SystemExit(f"seed {seed} is not inside a building area")
    m = (lab == i).astype(np.uint8)
    # the black outline is ~1-2 px wide: grow the region to the line centre
    m = cv2.dilate(m, np.ones((3, 3), np.uint8))
    cnts, _ = cv2.findContours(m, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    c = max(cnts, key=cv2.contourArea)
    x, y, w, h, _a = stats[i]
    clipped = x <= 0 or y <= 0 or x + w >= mask.shape[1] or y + h >= mask.shape[0]
    rect = cv2.minAreaRect(c)
    box_area = rect[1][0] * rect[1][1]
    if box_area > 0 and cv2.contourArea(c) / box_area >= rect_ratio:
        pts = cv2.boxPoints(rect)
        kind = "rect"
    else:
        # outlines are jagged where a thick boundary line runs along the edge: smooth via convex hull
        pts = cv2.approxPolyDP(cv2.convexHull(c), 4.0, True).reshape(-1, 2).astype(float)
        kind = "poly"
    return pts, kind, clipped, rect


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("image")
    ap.add_argument("out")
    ap.add_argument("--config", required=True, help='JSON: {"buildings": [{"seed": [x, y], "id", "name", "height", "levels", "roof", "pitch"}]}; '
                    "seed = a pixel inside the building's light-grey area")
    ap.add_argument("--plan", help="Home Plan 3D plan JSON; its ground floor outline is the main building")
    ap.add_argument("--house", help="main building outline as x0,z0,x1,z1 in plan metres (instead of --plan)")
    ap.add_argument("--scale", type=float, help="metres per pixel")
    ap.add_argument("--house-length", type=float, help="length of the main building in the cadastre (m), sets the scale")
    ap.add_argument("--anchor", choices=["ne", "center"], default="ne",
                    help="ne: the cadastre outline's top-right corner is put on the plan house's top-right corner "
                         "(annex touches the east wall, both sit on the north boundary); center: align centres")
    ap.add_argument("--rotate180", action="store_true", help="plan +x points left-down instead of right-up")
    ap.add_argument("--debug")
    a = ap.parse_args()

    im = np.array(Image.open(a.image).convert("RGB"))
    light = near(im, (229, 229, 229), 3)
    dark = near(im, (178, 178, 178), 3)

    # main building: largest dark component that is not touching the border
    n, lab, stats, _ = cv2.connectedComponentsWithStats(dark, connectivity=4)
    best = None
    for i in range(1, n):
        x, y, w, h, area = stats[i]
        if x > 0 and y > 0 and x + w < im.shape[1] and y + h < im.shape[0] and (best is None or area > stats[best][4]):
            best = i
    ys, xs = np.where(lab == best)
    seed = (int(xs.mean()), int(ys.mean()))
    main_pts, _, _, rect = component_polygon(dark, seed, rect_ratio=0.0)
    (cx, cy), (rw, rh), ang = rect
    # long axis direction of the main building in the image
    box = cv2.boxPoints(rect)
    edges = [(box[(k + 1) % 4] - box[k]) for k in range(4)]
    long_e = max(edges, key=lambda e: np.hypot(*e))
    theta = math.atan2(long_e[1], long_e[0])
    if theta > math.pi / 2:
        theta -= math.pi
    elif theta <= -math.pi / 2:
        theta += math.pi
    if a.rotate180:
        theta += math.pi
    long_px, short_px = max(rw, rh), min(rw, rh)

    if a.house:
        x0, z0, x1, z1 = (float(v) for v in a.house.split(","))
        HOUSE = {"x0": x0, "z0": z0, "x1": x1, "z1": z1}
    elif a.plan:
        HOUSE = house_from_plan(a.plan)
    else:
        raise SystemExit("give --plan or --house so the cadastre can be aligned with the main building")
    BUILDINGS = json.load(open(a.config, encoding="utf8"))["buildings"]
    house_len = HOUSE["x1"] - HOUSE["x0"]
    house_wid = HOUSE["z1"] - HOUSE["z0"]
    if a.scale:
        k = a.scale
    elif a.house_length:
        k = a.house_length / long_px
    else:
        k = math.sqrt(house_len * house_wid / (long_px * short_px))  # equal footprint area
    print(f"main building in image: {long_px:.1f} x {short_px:.1f} px, axis {math.degrees(theta):.1f} deg")
    print(f"scale {k:.4f} m/px -> cadastre footprint {long_px * k:.1f} x {short_px * k:.1f} m (plan: {house_len:.2f} x {house_wid:.2f} m)")

    ex = np.array([math.cos(theta), math.sin(theta)])
    ez = np.array([-math.sin(theta), math.cos(theta)])
    c_plan = np.array([(HOUSE["x0"] + HOUSE["x1"]) / 2, (HOUSE["z0"] + HOUSE["z1"]) / 2])
    c_img = np.array([cx, cy])

    off = np.zeros(2)

    def to_plan(p):
        d = np.asarray(p, float) - c_img
        return [round(float(d @ ex * k + c_plan[0] + off[0]), 2), round(float(d @ ez * k + c_plan[1] + off[1]), 2)]

    if a.anchor == "ne":
        cad = [to_plan(p) for p in main_pts]
        off[:] = [HOUSE["x1"] - max(p[0] for p in cad), HOUSE["z0"] - min(p[1] for p in cad)]
        print(f"anchor ne: shift ({off[0]:+.2f}, {off[1]:+.2f}) m")

    def ordered(pts):
        # consistent winding in plan space (counter-clockwise on screen)
        pl = [to_plan(p) for p in pts]
        s = sum(pl[i][0] * pl[(i + 1) % len(pl)][1] - pl[(i + 1) % len(pl)][0] * pl[i][1] for i in range(len(pl)))
        return pl if s > 0 else pl[::-1]

    site = {
        "source": {
            "type": "kataster-screenshot",
            "file": a.image.replace("\\", "/").split("/")[-1],
            "scale": round(k, 5),
            "axisDeg": round(math.degrees(theta), 2),
            "note": "Maßstab aus Flächenvergleich mit dem Hausgrundriss geschätzt - ungefähr!",
        },
        "cadastreHouse": ordered(main_pts),
        "buildings": [],
    }
    # compass: image north (0,-1) expressed in plan axes, as clockwise angle from plan-up
    nvec = np.array([0.0, -1.0])
    site["north"] = round(math.degrees(math.atan2(nvec @ ex, -(nvec @ ez))), 2)

    dbg = Image.fromarray(im).convert("RGB")
    dd = ImageDraw.Draw(dbg)
    for b in BUILDINGS:
        pts, kind, clipped, _ = component_polygon(light, b["seed"])
        poly = ordered(pts)
        if clipped:
            print("skip (clipped by image border):", b["id"])
            continue
        site["buildings"].append({
            "id": b["id"], "name": b["name"], "visible": True,
            "points": poly, "height": b["height"], **({"levels": b["levels"]} if b.get("levels") else {}),
            "roof": {"type": b["roof"] if (kind == "rect" or b["roof"] == "shed") else "flat", "pitch": b["pitch"], "overhang": 0.3,
                     **({"high": b["high"]} if b.get("high") else {})},
            **{k: b[k] for k in ("layout", "parts", "pv") if b.get(k)},
            "fromImage": kind,
        })
        dd.polygon([tuple(map(float, p)) for p in pts], outline=(255, 0, 0))
        dd.text((b["seed"][0] - 20, b["seed"][1]), b["id"], fill=(0, 0, 0))
    dd.polygon([tuple(map(float, p)) for p in main_pts], outline=(0, 160, 0))
    if a.debug:
        dbg.save(a.debug)
    json.dump(site, open(a.out, "w", encoding="utf8"), ensure_ascii=False, indent=1)
    print("wrote", a.out, len(site["buildings"]), "buildings, north =", site["north"])
    for b in site["buildings"]:
        xs = [p[0] for p in b["points"]]; zs = [p[1] for p in b["points"]]
        print(f"  {b['id']:14s} {b['fromImage']:4s} {max(xs)-min(xs):5.1f} x {max(zs)-min(zs):5.1f} m")


if __name__ == "__main__":
    main()
