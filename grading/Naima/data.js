// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Naima Rashid",
    project: "Bei Tracker",
    type: "Group Project — Young Developers",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 15,
      maxScore: 15,
      tooltip: "Contributed to the shared Young Developers repo. Worked on homepage design and base.html. Fixed URL errors so products appear on the prices page — a backend-adjacent contribution."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 13,
      maxScore: 15,
      tooltip: "Clean, consistent frontend code across homepage and base.html. URL fix shows understanding of Django URL patterns beyond surface-level design work."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 13,
      maxScore: 15,
      tooltip: "Fixed URL errors so products appear correctly on the prices page — a meaningful functional fix. Had code-running issues but resolved them independently."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 11,
      maxScore: 15,
      tooltip: "Worked on homepage design and base.html — the visual foundation of the Bei Tracker app. Steady and focused frontend contribution throughout the project."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 10,
      maxScore: 15,
      tooltip: "Database work handled by backend teammates. Naima's URL fix bridges the frontend and database — products displaying on the prices page requires understanding of both layers."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 12,
      maxScore: 15,
      tooltip: "URL fix demonstrates understanding of Django's URL routing and how it connects views to templates — goes beyond frontend-only thinking."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 8,
      maxScore: 10,
      tooltip: "Resolved code-running issues independently. URL fix is a backend-adjacent task that shows she understood the codebase beyond just design — standout contribution for a frontend role."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Contributed to the shared Young Developers repo. Worked on homepage design and base.html. Fixed URL errors so products appear on the prices page — a backend-adjacent task that shows understanding of Django's URL routing beyond just frontend design. Had code-running issues but resolved them independently.",
    effort: "Steady and focused frontend contribution throughout the project. The URL fix is a meaningful backend-adjacent task — it shows Naima understood the codebase beyond just design. Resolving code-running issues without giving up reflects strong persistence and problem-solving for a frontend-focused contributor."
  },

  instructorComments: [
    "Fixing URL errors so products appear on the prices page is backend-adjacent work — shows codebase understanding beyond design.",
    "Working on base.html means understanding how Django's template inheritance works — not just surface styling.",
    "Homepage design is the first thing users see — a strong visual foundation benefits the whole team.",
    "Resolving code-running issues independently shows solid problem-solving at the fundamentals level.",
    "Steady, focused contribution throughout the project is exactly what good team members do.",
    "Next step: explore Django views to start connecting frontend templates to backend data directly."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
