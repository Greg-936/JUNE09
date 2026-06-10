// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Rashid Nzai",
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
      tooltip: "Same BTD Explorer project. Rashid forked to Rashidlama12/The-Explorer. Backend role — fixing errors and resolving the server not-running issue."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 13,
      maxScore: 15,
      tooltip: "Consistent code quality maintained throughout backend error fixing and server resolution work on the forked project."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 14,
      maxScore: 15,
      tooltip: "Fixed project errors and resolved server issues. Still in progress on the backend — server challenges limited the extent of functionality delivered."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 11,
      maxScore: 15,
      tooltip: "UI/UX handled primarily by the designer teammate. Rashid's contribution is backend-focused — frontend presentation relies on the team's design work."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 11,
      maxScore: 15,
      tooltip: "Backend database work in progress. Server challenges affected the pace of database integration but the backend foundation is being actively worked on."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 10,
      maxScore: 15,
      tooltip: "Backend logic being developed. Error fixing and server resolution show understanding of Django's request/response cycle and project structure."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 7,
      maxScore: 10,
      tooltip: "Maintained personal fork (Rashidlama12/The-Explorer). Consistent contribution despite server challenges. Still actively working through backend issues."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Same BTD Explorer project. Rashid forked to Rashidlama12/The-Explorer. Backend role — fixing errors and resolving the server not-running issue. Fixed project errors and resolved server issues. Still in process on the backend. Server challenges limited overall progress but the contribution is consistent and the work is ongoing.",
    effort: "Fixed project errors and resolved server issues despite repeated challenges. Consistent contribution throughout the project period. Server problems at the fundamentals level are common and working through them builds durable debugging skills. The backend is still in process — completing the server setup will unlock the remaining backend features."
  },

  instructorComments: [
    "Maintaining a personal fork (Rashidlama12/The-Explorer) shows ownership and good Git practice.",
    "Fixing server not-running issues is foundational backend work — every Django developer faces this early on.",
    "Consistent contribution despite server challenges is more valuable than a quick result with no obstacles.",
    "Still in process on the backend — the path is clear, keep working through the server setup.",
    "Next step: get the server running stably, then focus on wiring the backend views to the frontend templates.",
    "Debugging server issues builds the kind of muscle memory that makes you faster on every future project."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
