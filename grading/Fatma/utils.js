// ============================================================
//  Utility Functions
// ============================================================

function computeScore(criteria, maxTotal) {
  const raw = criteria.reduce((sum, c) => sum + Number(c.score), 0);
  const possible = criteria.reduce((sum, c) => sum + Number(c.maxScore), 0);
  const percentage = Math.round((raw / possible) * maxTotal);
  return { raw, possible, percentage };
}

function getGradeInfo(pct) {
  return GRADE_SCALE.find(g => pct >= g.min && pct <= g.max) || GRADE_SCALE[GRADE_SCALE.length - 1];
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "className") node.className = v;
    else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null || child === false) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function exportPDF() {
  const btn = document.getElementById("export-btn");
  const adminPanel = document.getElementById("admin-panel");
  if (btn) btn.style.display = "none";
  if (adminPanel) adminPanel.style.display = "none";
  window.print();
  setTimeout(() => {
    if (btn) btn.style.display = "";
    if (adminPanel) adminPanel.style.display = "";
  }, 1000);
}
