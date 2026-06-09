// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Precious Mukiri",
    project: "Green Guard — Waste Reporting Platform",
    type: "Individual Project",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 13,
      maxScore: 15,
      tooltip: "Django project set up correctly — GreenGuard settings confirmed. Templates and models partially built. Frontend-focused with backend scaffolding in place."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 11,
      maxScore: 15,
      tooltip: "Readability and code organisation across the Django project. Consistent structure maintained despite server-running challenges."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 13,
      maxScore: 15,
      tooltip: "Django project correctly configured. Templates and models partially built. Core waste reporting concept implemented at frontend level."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 8,
      maxScore: 15,
      tooltip: "Frontend work present. Visual design and user experience of the waste reporting interface still in progress."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 8,
      maxScore: 15,
      tooltip: "Models partially built. Database integration not fully complete — server-running challenges impacted this area."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 9,
      maxScore: 15,
      tooltip: "Application structure follows Django conventions. Logic not fully wired due to server errors, but the foundation is correctly laid."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 8,
      maxScore: 10,
      tooltip: "Three progress updates show consistent engagement throughout the project period. Persisted through server errors across three submissions."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Django project set up correctly — GreenGuard settings confirmed. Socially relevant concept: a waste reporting platform for the community. Templates and models are partially built. Had server-running challenges but persisted across three progress submissions, showing consistent engagement with the project.",
    effort: "Three progress updates demonstrate steady commitment throughout the course. Struggled with server errors but did not give up. Persistence and the social impact of the idea are commendable for a beginner — tackling a real community problem at this stage shows strong motivation."
  },

  instructorComments: [
    "Socially relevant concept — a waste reporting platform addresses a real community need.",
    "Django project correctly configured with GreenGuard settings confirmed — solid foundation.",
    "Three progress submissions show consistent engagement, not a last-minute submission.",
    "Server-running challenges are common at this stage; persisting through them is the right approach.",
    "Templates and models are partially built — the next step is wiring views to complete the CRUD loop.",
    "With the foundation in place, completing the reporting flow and adding a map view would make this a standout project."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
