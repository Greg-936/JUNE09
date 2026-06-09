// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Abdallah Hamid Suleiman",
    project: "TalentConnect",
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
      tooltip: "Two-repo approach: polished static HTML/CSS frontend and a separate Django backend with Django 6 + Jupyter environment. Frontend and backend not yet wired together."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 12,
      maxScore: 15,
      tooltip: "Readability, consistent naming conventions, and overall code organisation across both repos."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 13,
      maxScore: 15,
      tooltip: "Static frontend has logo, nav, hero, discover/upload/contact/admin pages. Django backend views and models exist but are not yet wired to the frontend."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 9,
      maxScore: 15,
      tooltip: "Polished static frontend with strong visual identity — logo, nav, hero section. Interaction limited until backend is connected."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 8,
      maxScore: 15,
      tooltip: "Django backend models defined but not yet connected to the frontend. Challenged by video upload and page linking."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 12,
      maxScore: 15,
      tooltip: "Concept is strong — a talent showcase platform. Good initiative starting backend separately. Application architecture shows clear vision even without full integration."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 8,
      maxScore: 10,
      tooltip: "Solo effort across two repos. Good initiative setting up Django 6 + Jupyter environment separately. Concept scope is ambitious for the fundamentals level."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Two repos — a polished static HTML/CSS frontend (logo, nav, hero, discover/upload/contact/admin pages) and a separate Django backend with Django 6 + Jupyter environment. Backend views and models exist but are not yet wired to the frontend. Concept is strong: a talent showcase platform with clear separation of concerns already in place.",
    effort: "Solo effort across two repos. Challenged by video upload and page linking. Good initiative starting the backend separately rather than mixing concerns. Next step: connect the frontend to the Django backend using template rendering or a REST API layer."
  },

  instructorComments: [
    "Strong concept — TalentConnect as a talent showcase platform shows product-level thinking.",
    "Polished frontend with logo, nav, hero, and multiple pages is above average for the fundamentals level.",
    "Django 6 + Jupyter environment setup shows good initiative and curiosity.",
    "The clear next step is wiring the frontend to the Django backend — templates or a REST API.",
    "Challenged by video upload and page linking — these are real-world problems worth persisting through.",
    "Two-repo approach shows awareness of separation of concerns; now bring them together."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
