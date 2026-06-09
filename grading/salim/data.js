// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Khalid Salim",
    project: "Online Store Management",
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
      tooltip: "Covers both frontend and backend implementation — Django views, templates, URL routing and server-side logic."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 14,
      maxScore: 15,
      tooltip: "Readability, consistent naming conventions, comments, and overall code organisation."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 15,
      maxScore: 15,
      tooltip: "All required features work correctly — product listing, detail pages, contact form, and home view."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 14,
      maxScore: 15,
      tooltip: "Visual design, layout, responsiveness, and overall user experience of the application."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 13,
      maxScore: 15,
      tooltip: "Proper model design, ORM usage, and data integrity. Bonus for raw SQL cursor alongside ORM."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 12,
      maxScore: 15,
      tooltip: "Application architecture, separation of concerns, and logical flow throughout the project."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 9,
      maxScore: 10,
      tooltip: "Going beyond requirements — raw SQL initiative, error resolution, and additional feature polish."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Well-structured Django e-commerce app. Product & Message models confirmed. Views for home, contact, product list & detail. URL routing correct. Used raw SQL cursor alongside ORM — shows initiative beyond basics. Homepage and contact form built and pushed.",
    effort: "Solo project — all work his own. Built homepage, product pages, contact form. Resolved product page errors. Excellent effort for fundamentals level."
  },

  instructorComments: [
    "Strong grasp of Django's MVT pattern demonstrated throughout the project.",
    "Using raw SQL alongside ORM shows curiosity and willingness to go beyond the curriculum.",
    "Minor improvements possible in code comments and inline documentation.",
    "Product page error resolution without assistance reflects solid debugging skills.",
    "Ready to progress to more advanced topics such as authentication and REST APIs."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
