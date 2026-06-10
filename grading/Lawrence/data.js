// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Lawrence Kazungu",
    project: "The Explorer",
    type: "Group Project — BTD",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 14,
      maxScore: 15,
      tooltip: "Same BTD Explorer project. Lawrence maintained his own fork (lukazb17/The-Explorer), contributing UI/UX work alongside the backend built by the team."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 13,
      maxScore: 15,
      tooltip: "Clean styling and template code. Visual error fixes maintained consistent code quality across the design-focused fork."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 14,
      maxScore: 15,
      tooltip: "Designed webpage appearance and fixed visual errors. Login dashboard design in progress — functional UI contributions to the Explorer platform."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 11,
      maxScore: 15,
      tooltip: "Focused on UI/UX — login dashboard design and overall appearance. Had styling challenges but persisted. Design-focused contribution is a clear strength."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 10,
      maxScore: 15,
      tooltip: "Database work handled primarily by backend teammates. Lawrence's contribution is design-focused; database integration is limited but the platform backend is confirmed."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 13,
      maxScore: 15,
      tooltip: "Maintained a personal fork (lukazb17/The-Explorer) — shows good Git workflow understanding. Structured design work around the team's backend architecture."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 8,
      maxScore: 10,
      tooltip: "Maintained own fork of the project. Persisted through styling challenges. Working on a polished login dashboard as an ongoing design contribution."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Same BTD Explorer project. Lawrence maintained his own fork (lukazb17/The-Explorer), focused on UI/UX — login dashboard design and overall appearance. Designed the webpage appearance, fixed visual errors, and is working on a polished login dashboard. Had styling challenges but persisted through them.",
    effort: "Good design-focused contribution to the BTD group. Maintaining a personal fork shows initiative and a clean approach to collaborative development. Persisted through styling challenges rather than deferring the work. The login dashboard polish is a real product-quality goal — keep pushing it to completion."
  },

  instructorComments: [
    "Maintaining a personal fork (lukazb17/The-Explorer) shows good Git workflow understanding — not everyone does this.",
    "Design-focused contribution is valuable in a team — UI/UX work is often underappreciated but very visible.",
    "Login dashboard design shows product-level thinking: user experience matters from the first screen.",
    "Persisting through styling challenges is the right approach — CSS and layout issues are normal at this stage.",
    "Next step: complete the login dashboard polish and integrate it with the Django authentication backend.",
    "Consider learning CSS frameworks like Tailwind or Bootstrap to accelerate future UI work."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
