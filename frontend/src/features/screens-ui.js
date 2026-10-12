import { esc } from "./base.js";
import { pickRule } from "../lib/rules.js";

/** Downscale an uploaded picture to at most 512 px and return a data URL (PNG keeps transparency). */
export function scaleImageFile(file, max = 512) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(img.naturalWidth * s));
      c.height = Math.max(1, Math.round(img.naturalHeight * s));
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(file.type === "image/png" || file.type === "image/svg+xml" ? c.toDataURL("image/png") : c.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Bild nicht lesbar")); };
    img.src = url;
  });
}

/** Dialog for a TV / monitor: which entity drives it, background, picture rules. */
export function openScreenEditor(view, f) {
  view.closeOverlay();
  const scr = (f.screen ||= { bg: "dark", rules: [] });
  scr.rules ||= [];
  const root = view.shadowRoot.querySelector(".wrap");
  const box = document.createElement("div");
  box.className = "overlay";
  box.style.cssText = "left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,94%);max-height:84%;overflow:auto";
  view._overlay = box;
  root.append(box);

  const apply = () => { view.rebuild3D(); view.draw2D(); };
  let undone = false;
  const touch = () => { if (!undone) { view.pushUndo(); undone = true; } };

  const render = () => {
    const states = view.getStates() || {};
    const ents = Object.keys(states).sort();
    const entity = scr.entity || f.entity || "";
    const active = pickRule(scr.rules, states, entity);
    box.innerHTML = `
      <h4 style="margin:0 0 8px">🖥 Bildschirm ${esc(f.name || f.type)}</h4>
      <datalist id="scr-ents">${ents.map((e) => `<option value="${esc(e)}">`).join("")}</datalist>
      <div class="row"><div><label>Bildschirm-Entität (z. B. media_player)</label><input id="scr-entity" list="scr-ents" value="${esc(scr.entity || "")}" placeholder="${esc(f.entity || "media_player.tv")}"></div>
      <div><label>Hintergrund</label><select id="scr-bg"><option value="dark" ${scr.bg !== "white" ? "selected" : ""}>dunkel</option><option value="white" ${scr.bg === "white" ? "selected" : ""}>weiß</option></select></div></div>
      <div style="margin:10px 0 4px;opacity:.8">Bild-Regeln – die erste passende gewinnt. Ohne Regel zeigt der Bildschirm Cover und Farbe der laufenden App.</div>
      <div id="scr-rules">${scr.rules.map((r, i) => `
        <div class="rule" data-i="${i}" style="display:grid;grid-template-columns:1.2fr 1fr 1fr 1.4fr auto auto auto;gap:4px;margin:4px 0;align-items:center">
          <input data-f="entity" list="scr-ents" placeholder="Entität (leer = Bildschirm)" value="${esc(r.entity || "")}">
          <input data-f="attr" placeholder="Attribut (leer = Zustand)" value="${esc(r.attr || "")}">
          <input data-f="match" placeholder="Wert (enthält, * = alles)" value="${esc(r.match || "")}">
          <input data-f="image" placeholder="Bild-URL oder camera.xyz" value="${esc(String(r.image || "").startsWith("data:") ? "" : r.image || "")}">
          <button data-act="upload" title="Bild hochladen">${String(r.image || "").startsWith("data:") ? "🖼 ✓" : "⬆"}</button>
          <button data-act="del" title="Regel löschen">🗑</button>
          <span title="trifft gerade zu" style="color:${active === r ? "#19e6ff" : "#35405f"}">●</span>
        </div>`).join("")}</div>
      <div style="display:flex;gap:6px;margin-top:8px"><button id="scr-add">+ Regel</button><span style="flex:1"></span><button id="scr-close" class="on">Fertig</button></div>`;

    box.querySelector("#scr-entity").onchange = (e) => { touch(); scr.entity = e.target.value || null; apply(); render(); };
    box.querySelector("#scr-bg").onchange = (e) => { touch(); scr.bg = e.target.value; apply(); };
    box.querySelector("#scr-add").onclick = () => { touch(); scr.rules.push({ match: "", image: "" }); render(); };
    box.querySelector("#scr-close").onclick = () => view.closeOverlay();
    box.querySelectorAll(".rule").forEach((row) => {
      const r = scr.rules[+row.dataset.i];
      row.querySelectorAll("input[data-f]").forEach((inp) => {
        inp.onchange = () => {
          touch();
          const key = inp.dataset.f, val = inp.value.trim();
          if (key === "image") { if (val) r.image = val; else if (!String(r.image || "").startsWith("data:")) r.image = ""; } // an upload stays unless replaced
          else r[key] = val;
          apply(); render();
        };
      });
      row.querySelector('[data-act="del"]').onclick = () => { touch(); scr.rules.splice(+row.dataset.i, 1); apply(); render(); };
      row.querySelector('[data-act="upload"]').onclick = () => {
        const inp = document.createElement("input");
        inp.type = "file"; inp.accept = "image/*";
        inp.onchange = async () => {
          try { touch(); r.image = await scaleImageFile(inp.files[0]); apply(); render(); } catch (err) { view.msg("Bild nicht lesbar: " + err.message); }
        };
        inp.click();
      };
    });
  };
  render();
}
