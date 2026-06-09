// ============================================================
//  App – main render loop
// ============================================================

(function () {
  // ── State ─────────────────────────────────────────────────
  let state = {
    criteria: GRADING_DATA.criteria.map(c => ({ ...c })),
    adminMode: false
  };

  // ── Derived ───────────────────────────────────────────────
  function derive() {
    const { percentage, raw, possible } = computeScore(state.criteria, GRADING_DATA.maxTotal);
    const info  = getGradeInfo(percentage);
    const grade = info.grade;
    return { percentage, raw, possible, info, grade };
  }

  // ── Mutations ─────────────────────────────────────────────
  function updateScore(id, newScore) {
    state.criteria = state.criteria.map(c =>
      c.id === id ? { ...c, score: newScore } : c
    );
    render();
  }

  function toggleAdmin() {
    state.adminMode = !state.adminMode;
    render();
  }

  // ── Full Render ───────────────────────────────────────────
  function render() {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const { percentage, raw, possible, info, grade } = derive();
    const { student, evaluation, instructorComments } = GRADING_DATA;

    const app = el("div", { className: "app" });

    app.appendChild(NavBar(student, grade, info));
    app.appendChild(AdminToggleBar(state.adminMode, toggleAdmin));
    app.appendChild(StudentHero(student, grade, info, percentage));

    const main = el("main", { className: "main container" });

    const left = el("div", { className: "col-left" });
    left.appendChild(GradingTable(state.criteria, state.adminMode, updateScore));
    left.appendChild(EvaluationCard("Project Evaluation", "📋", evaluation.technical));
    left.appendChild(EvaluationCard("Student Effort", "🎯", evaluation.effort));
    left.appendChild(InstructorComments(instructorComments));

    const right = el("div", { className: "col-right" });
    right.appendChild(SummaryCard(percentage, grade, info, raw, possible));
    right.appendChild(MetaCard(student));

    main.appendChild(left);
    main.appendChild(right);
    app.appendChild(main);
    app.appendChild(Footer());

    root.appendChild(app);

    requestAnimationFrame(() => {
      document.querySelectorAll(".mini-bar-fill").forEach(bar => {
        const w = bar.style.width;
        bar.style.width = "0";
        requestAnimationFrame(() => { bar.style.width = w; });
      });
    });
  }

  // ── Meta Card ────────────────────────────────────────────
  function MetaCard(student) {
    const rows = [
      ["Course", student.course],
      ["Project Type", student.type],
      ["Submitted", student.submittedDate],
      ["Stack", "HTML/CSS + Django / Python"],
      ["Evaluator", "Course Instructor"]
    ];

    const items = rows.map(([k, v]) =>
      el("div", { className: "meta-row" },
        el("span", { className: "meta-key" }, k),
        el("span", { className: "meta-val" }, v)
      )
    );

    return el("div", { className: "card meta-card" },
      el("div", { className: "card-header" },
        el("h2", { className: "card-title" }, "Project Info")
      ),
      ...items
    );
  }

  // ── Footer ───────────────────────────────────────────────
  function Footer() {
    return el("footer", { className: "footer" },
      el("div", { className: "container footer-inner" },
        el("span", {}, "Grading Dashboard"),
        el("span", { className: "footer-dot" }, "·"),
        el("span", {}, "Generated " + new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }))
      )
    );
  }

  // ── Boot ─────────────────────────────────────────────────
  render();
})();
