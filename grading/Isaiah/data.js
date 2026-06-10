// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Isaiah Washe",
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
      tooltip: "Same BTD Explorer project. Isaiah forked to isaiahwashe123/The-Explorer and concentrated specifically on the Django login/authentication system."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 13,
      maxScore: 15,
      tooltip: "Clean, focused code on the Django authentication system. Maintaining an independent fork shows disciplined, organised development practice."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 14,
      maxScore: 15,
      tooltip: "Built the Django login system — a concrete and valuable backend contribution. Login/authentication is a core feature of any real-world Django application."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 11,
      maxScore: 15,
      tooltip: "UI/UX handled primarily by the designer teammate. Isaiah's contribution is authentication-focused — login forms and flow are both functional and user-facing."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 11,
      maxScore: 15,
      tooltip: "Django authentication system integrates with the User model and database. Auth work requires solid understanding of Django's ORM and session management."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 10,
      maxScore: 15,
      tooltip: "Django login/auth logic correctly implemented. Maintained own fork showing independent Git workflow and structured contribution to the team project."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 8,
      maxScore: 10,
      tooltip: "Maintained personal fork (isaiahwashe123/The-Explorer) — independent Git workflow. Focused on authentication, one of the most important and reusable features in any web app."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Same BTD Explorer project. Isaiah forked to isaiahwashe123/The-Explorer and concentrated specifically on the Django login/authentication system. Built the Django login system — a concrete and valuable backend contribution that directly serves user-facing functionality. Maintained his own fork, showing an independent and organised Git workflow.",
    effort: "Building Django authentication is one of the most reusable and production-relevant skills at this level. Focusing on a single, well-defined backend feature and delivering it is a solid strategy. Maintaining an independent fork shows discipline and ownership. The login system is a strong foundation — next step is connecting it to the rest of the application's access control."
  },

  instructorComments: [
    "Building Django authentication is one of the highest-value skills at the fundamentals level — used in every real project.",
    "Maintaining a personal fork (isaiahwashe123/The-Explorer) shows independent Git workflow — a professional habit.",
    "Focused contribution on a specific, well-defined feature is a strong approach — depth over breadth.",
    "Login/auth is the gateway to every other user-specific feature in the app — this work unlocks the rest.",
    "Next step: wire the auth system to role-based views (tourist vs admin) to complete the Explorer's access model.",
    "Consider extending the auth system with password reset and profile management for a complete implementation."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
