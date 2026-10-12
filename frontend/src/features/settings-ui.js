import { esc } from "./base.js";

/**
 * Small settings dialog for a feature. fields: [{ k, l, t: "entity"|"text"|"number"|"checkbox"|"select", o?, p?, s? }].
 * Values are written into `obj`; every change is one undo step and rebuilds the scene.
 * `extra(box, rerender)` may add buttons below the form.
 */
export function openSettings(view, { title, obj, fields, extra, note }) {
  view.closeOverlay();
  const box = document.createElement("div");
  box.className = "overlay";
  box.style.cssText = "left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,94%);max-height:84%;overflow:auto";
  view.shadowRoot.querySelector(".wrap").append(box);
  view._overlay = box;
  let undone = false, timer = 0;
  const get = (k) => k.split(".").reduce((a, p) => a?.[p], obj);
  const set = (k, v) => {
    const ps = k.split("."), last = ps.pop();
    ps.reduce((a, p) => (a[p] ??= {}), obj)[last] = v;
  };
  const rebuildSoon = () => { clearTimeout(timer); timer = setTimeout(() => { view.rebuild3D(); view.draw2D(); }, 250); };

  const render = () => {
    const ents = Object.keys(view.getStates() || {}).sort();
    box.innerHTML = `<h4 style="margin:0 0 6px">${esc(title)}</h4>
      <datalist id="set-ents">${ents.map((e) => `<option value="${esc(e)}">`).join("")}</datalist>
      ${note ? `<div style="opacity:.7;font-size:12px;margin-bottom:6px">${note}</div>` : ""}
      ${fields.map((f) => {
        const v = get(f.k);
        const a = `data-k="${f.k}" data-t="${f.t || "text"}"`;
        if (f.t === "checkbox") return `<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" ${a} ${v ? "checked" : ""} style="width:auto">${esc(f.l)}</label>`;
        if (f.t === "select") return `<label>${esc(f.l)}</label><select ${a}>${f.o.map((o) => { const [val, lab] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(val)}" ${val === (v ?? "") ? "selected" : ""}>${esc(lab)}</option>`; }).join("")}</select>`;
        return `<label>${esc(f.l)}</label><input ${a} ${f.t === "entity" ? 'list="set-ents"' : ""} ${f.t === "number" ? `type="number" step="${f.s || 1}"` : ""} value="${esc(v ?? "")}" placeholder="${esc(f.p || "")}">`;
      }).join("")}
      <div class="extra" style="margin-top:8px"></div>
      <div style="display:flex;margin-top:10px"><span style="flex:1"></span><button id="set-close" class="on">Fertig</button></div>`;
    box.querySelectorAll("[data-k]").forEach((el) => {
      el.onchange = () => {
        if (!undone) { view.pushUndo(); undone = true; }
        const t = el.dataset.t;
        let v = el.value.trim();
        if (t === "checkbox") v = el.checked;
        else if (t === "number") v = v === "" ? null : +v;
        else if (v === "") v = null;
        set(el.dataset.k, v);
        rebuildSoon();
      };
    });
    box.querySelector("#set-close").onclick = () => view.closeOverlay();
    extra?.(box.querySelector(".extra"), render, () => { if (!undone) { view.pushUndo(); undone = true; } rebuildSoon(); });
  };
  render();
}
