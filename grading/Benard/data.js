// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Benard Teatim",
    project: "The Explorer (coastexplorer)",
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
      tooltip: "Django app (coastexplorer) — manage.py and settings confirmed. Full tourism/booking platform with URL routing and template editing. Team debugged urls.py and views.py together."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 14,
      maxScore: 15,
      tooltip: "Clean code across views.py, urls.py, and home.html template. Benard led editing and debugging, maintaining consistent quality throughout."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 14,
      maxScore: 15,
      tooltip: "Full tourism/booking platform. URL routing confirmed. Template editing done. Team debugged views.py and urls.py together — errors resolved under Benard's coordination."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 12,
      maxScore: 15,
      tooltip: "home.html template edited and functional. Tourism/booking platform layout reflects a real-world user experience for a coastal explorer platform."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 12,
      maxScore: 15,
      tooltip: "Django ORM used within the coastexplorer project. Database integration confirmed alongside the full booking platform backend."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 11,
      maxScore: 15,
      tooltip: "URL routing and views correctly structured. Benard debugged views.py and coordinated error fixing — shows strong understanding of Django request/response flow."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 9,
      maxScore: 10,
      tooltip: "Stepped up as Team Lead in the second session. Strongest leadership contribution in the BTD group. Debugged views.py, edited home.html, and coordinated error fixing across the team."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Django app (coastexplorer) — manage.py and settings confirmed. Full tourism/booking platform with URL routing and template editing. Team debugged urls.py and views.py together. Benard stepped up as Team Lead in the second session, driving the group's technical progress through active debugging and template work.",
    effort: "Led the BTD group: debugged views.py, edited home.html template, and coordinated error fixing. Strongest leadership contribution in the BTD group. Stepping up mid-course as Team Lead while actively debugging shows both technical skill and team ownership — a standout combination at the fundamentals level."
  },

  instructorComments: [
    "Stepping up as Team Lead in the second session without being asked is exactly the kind of initiative that makes a developer valuable.",
    "Debugging views.py and urls.py alongside teammates shows hands-on problem solving, not just coordination.",
    "coastexplorer is a well-structured Django app — manage.py, settings, URL routing, and templates all confirmed.",
    "Strongest leadership contribution in the BTD group — sets the standard for team dynamics.",
    "home.html template editing alongside backend work demonstrates full-stack awareness.",
    "Next step: add authentication and booking CRUD to complete the tourism platform end-to-end."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
