// ============================================================
//  UI Components  (vanilla JS, component-based pattern)
// ============================================================

// ── Tooltip wrapper ─────────────────────────────────────────
function Tooltip(text, child) {
  const wrapper = el("div", { className: "tooltip-host" },
    child,
    el("span", { className: "tooltip-box" }, text)
  );
  return wrapper;
}

// ── Grade Badge ──────────────────────────────────────────────
function GradeBadge(grade, info, large = false) {
  return el("div", {
    className: `grade-badge ${large ? "grade-badge--lg" : ""}`,
    style: { background: info.bg, borderColor: info.border, color: info.color }
  },
    el("span", { className: "grade-badge__letter" }, grade),
    large ? el("span", { className: "grade-badge__label" }, info.label) : null
  );
}

// ── Progress Bar ─────────────────────────────────────────────
function ProgressBar(percentage, color) {
  const bar = el("div", { className: "progress-fill", style: { background: color } });
  const track = el("div", { className: "progress-track" }, bar);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bar.style.width = `${clamp(percentage, 0, 100)}%`;
    });
  });

  return el("div", { className: "progress-wrapper" },
    track,
    el("span", { className: "progress-label", style: { color } }, `${percentage}%`)
  );
}

// ── Score Row (table row for criteria) ───────────────────────
function ScoreRow(criterion, adminMode, onUpdate) {
  const pct = Math.round((criterion.score / criterion.maxScore) * 100);
  const info = getGradeInfo(pct);

  const scoreCell = adminMode
    ? el("td", { className: "td-score" },
        el("input", {
          className: "score-input",
          type: "number",
          min: "0",
          max: String(criterion.maxScore),
          value: String(criterion.score),
          onInput: (e) => onUpdate(criterion.id, clamp(Number(e.target.value), 0, criterion.maxScore))
        })
      )
    : el("td", { className: "td-score" },
        el("span", { className: "score-chip", style: { background: info.bg, color: info.color, borderColor: info.border } },
          `${criterion.score} / ${criterion.maxScore}`
        )
      );

  const miniBar = el("div", { className: "mini-bar-track" },
    el("div", {
      className: "mini-bar-fill",
      style: { width: `${pct}%`, background: info.color }
    })
  );

  const row = el("tr", { className: "score-row", "data-id": criterion.id },
    el("td", { className: "td-label" },
      Tooltip(criterion.tooltip,
        el("span", { className: "label-text" },
          el("span", { className: "info-icon" }, "i"),
          criterion.label
        )
      )
    ),
    scoreCell,
    el("td", { className: "td-bar" }, miniBar),
    el("td", { className: "td-pct", style: { color: info.color } }, `${pct}%`)
  );

  return row;
}

// ── Grading Table ────────────────────────────────────────────
function GradingTable(criteria, adminMode, onUpdate) {
  const tbody = el("tbody", { id: "score-tbody" });
  criteria.forEach(c => tbody.appendChild(ScoreRow(c, adminMode, onUpdate)));

  return el("div", { className: "card" },
    el("div", { className: "card-header" },
      el("h2", { className: "card-title" }, "Grading Breakdown"),
      el("span", { className: "card-subtitle" }, "Score per evaluation criterion")
    ),
    el("div", { className: "table-wrap" },
      el("table", { className: "score-table" },
        el("thead", {},
          el("tr", {},
            el("th", {}, "Criterion"),
            el("th", {}, "Score"),
            el("th", {}, "Progress"),
            el("th", {}, "%")
          )
        ),
        tbody
      )
    )
  );
}

// ── Summary Card ─────────────────────────────────────────────
function SummaryCard(percentage, grade, info, raw, possible) {
  return el("div", { className: "card summary-card", style: { borderTop: `4px solid ${info.color}` } },
    el("div", { className: "summary-top" },
      el("div", { className: "summary-score", style: { color: info.color } }, `${percentage}`),
      el("div", { className: "summary-unit" }, "/ 100"),
      GradeBadge(grade, info, true)
    ),
    el("div", { className: "summary-sub" }, `Raw: ${raw} / ${possible} points`),
    ProgressBar(percentage, info.color),
    el("div", { className: "summary-status", style: { color: info.color, background: info.bg } },
      info.label
    )
  );
}

// ── Evaluation Card ──────────────────────────────────────────
function EvaluationCard(title, icon, text) {
  return el("div", { className: "card eval-card" },
    el("div", { className: "card-header" },
      el("span", { className: "eval-icon" }, icon),
      el("h2", { className: "card-title" }, title)
    ),
    el("p", { className: "eval-text" }, text)
  );
}

// ── Instructor Comments (expandable) ─────────────────────────
function InstructorComments(comments) {
  let open = false;
  const body = el("ul", { className: "comments-list", style: { display: "none" } });
  comments.forEach(c => body.appendChild(el("li", { className: "comment-item" },
    el("span", { className: "comment-bullet" }, "▸"),
    c
  )));

  const chevron = el("span", { className: "chevron" }, "▾");
  const toggle = el("button", { className: "comments-toggle",
    onClick: () => {
      open = !open;
      body.style.display = open ? "block" : "none";
      chevron.textContent = open ? "▴" : "▾";
      toggle.setAttribute("aria-expanded", String(open));
    },
    "aria-expanded": "false"
  },
    el("span", {}, "Instructor Comments"),
    chevron
  );

  return el("div", { className: "card comments-card" }, toggle, body);
}

// ── Admin Panel ───────────────────────────────────────────────
function AdminToggleBar(adminMode, onToggle) {
  return el("div", { className: "admin-bar", id: "admin-panel" },
    el("span", { className: "admin-label" },
      el("span", { className: `admin-dot ${adminMode ? "admin-dot--on" : ""}` }),
      adminMode ? "Admin Mode — editing enabled" : "Admin Mode — read only"
    ),
    el("button", {
      className: `toggle-btn ${adminMode ? "toggle-btn--on" : ""}`,
      onClick: onToggle,
      title: adminMode ? "Disable admin mode" : "Enable admin mode"
    },
      el("span", { className: "toggle-thumb" })
    )
  );
}

// ── Top Navbar ────────────────────────────────────────────────
function NavBar(student, grade, info) {
  return el("header", { className: "navbar" },
    el("div", { className: "navbar-inner container" },
      el("div", { className: "navbar-brand" },
        el("div", { className: "navbar-logo" }, "GS"),
        el("div", { className: "navbar-text" },
          el("span", { className: "navbar-course" }, student.course),
          el("span", { className: "navbar-divider" }, "·"),
          el("span", { className: "navbar-semester" }, student.submittedDate)
        )
      ),
      el("div", { className: "navbar-actions" },
        el("button", {
          className: "btn btn-export",
          id: "export-btn",
          onClick: exportPDF,
          title: "Export as PDF"
        },
          el("svg", { html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' }),
          "Export PDF"
        )
      )
    )
  );
}

// ── Student Hero ──────────────────────────────────────────────
function StudentHero(student, grade, info, percentage) {
  return el("div", { className: "hero container" },
    el("div", { className: "hero-avatar", style: { background: info.color } },
      student.name.split(" ").map(w => w[0]).join("")
    ),
    el("div", { className: "hero-info" },
      el("h1", { className: "hero-name" }, student.name),
      el("p", { className: "hero-project" }, student.project),
      el("span", { className: "hero-tag" }, student.type)
    ),
    el("div", { className: "hero-grade", style: { borderColor: info.border, background: info.bg } },
      el("div", { className: "hero-grade-letter", style: { color: info.color } }, grade),
      el("div", { className: "hero-grade-pct" }, `${percentage}%`),
      el("div", { className: "hero-grade-label", style: { color: info.color } }, info.label)
    )
  );
}
