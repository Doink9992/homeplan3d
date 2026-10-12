// Usage: node scripts/convert-neonplan.mjs import/neonplan-raw.json [import/site.json] [out.json]
// Converts a NeonPlan 3D building (websocket result / backup export) into a Home Plan 3D plan.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { convertNeonPlan } from "../frontend/src/neonplan-import.js";
import { normalizePlan } from "../frontend/src/plan.js";

const [, , src = "import/neonplan-raw.json", siteFile = "import/site.json", out = "import/plan.json"] = process.argv;
const plan = convertNeonPlan(JSON.parse(readFileSync(src, "utf8")));
if (existsSync(siteFile)) plan.site = JSON.parse(readFileSync(siteFile, "utf8"));
normalizePlan(plan);
writeFileSync(out, JSON.stringify(plan, null, 1));
const n = (k) => plan.floors.reduce((a, f) => a + f[k].length, 0);
console.log(`${out}: ${plan.floors.length} Etagen, ${n("rooms")} Räume, ${n("walls")} Wände, ${n("openings")} Öffnungen, ${n("furniture")} Möbel, ${n("devices")} Geräte, ` +
  `${plan.site?.buildings?.length ?? 0} Nebengebäude, Dach: ${plan.settings.roof?.sections?.length ?? 0} Fläche(n), ${plan.settings.roof?.solar?.length ?? 0} PV-Feld(er)`);
