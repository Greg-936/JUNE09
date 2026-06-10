// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Ibrahim Ngwaruto",
    project: "TerraBloom Global",
    type: "Group Project — Team Tiger",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 14,
      maxScore: 15,
      tooltip: "Backend and database fully built. index.html polished with correct Django template tags (url, static). Live deployment on GitHub Pages — most visible deployment in the cohort."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 14,
      maxScore: 15,
      tooltip: "Clean, readable code across backend and frontend. Correct use of Django template tags shows good coding standards."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 14,
      maxScore: 15,
      tooltip: "Hero with Farm-to-Table CTAs (Place Order, List Produce), How-It-Works section. Backend and database built. Challenge: farmer uploads not yet visible to consumers."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 12,
      maxScore: 15,
      tooltip: "Polished index.html with hero section, clear CTAs and How-It-Works layout. Strong visual identity for a farm-to-table platform."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 11,
      maxScore: 15,
      tooltip: "Database built and connected to backend. Farmer upload data not yet visible to consumers — the data visibility layer is the active challenge being solved."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 13,
      maxScore: 15,
      tooltip: "Well-structured Django app. Farm-to-table concept clearly implemented in architecture. Actively working on resolving farmer-to-consumer data visibility."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 9,
      maxScore: 10,
      tooltip: "LIVE deployment on GitHub Pages — most visible deployment in the cohort. Helped teammates with Git. Actively solving the farmer-to-consumer data visibility issue."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Farm-to-table platform connecting Kenyan farmers to consumers. index.html is polished — hero with Farm-to-Table CTAs (Place Order, List Produce) and a How-It-Works section, with correct Django template tags (url, static). Backend and database built. LIVE deployment on GitHub Pages. Active challenge: farmer uploads are not yet visible to consumers — the data visibility layer is currently being resolved.",
    effort: "Built the backend and database, and pushed to a live site on GitHub Pages — the most visible deployment in the cohort. Helped teammates with Git. Actively investigating and solving the farmer-to-consumer data visibility issue, showing strong ownership of the project's core technical challenge."
  },

  instructorComments: [
    "Live deployment on GitHub Pages is the most visible delivery in the cohort — sets the bar.",
    "Correct use of Django template tags (url, static) shows solid grasp of the framework.",
    "Polished hero with CTAs and How-It-Works section demonstrates product thinking beyond just code.",
    "Helping teammates with Git is a leadership quality worth recognising early.",
    "Farmer-to-consumer data visibility is the right problem to be solving — it's the core feature.",
    "Once uploads are visible to consumers, TerraBloom will be a fully end-to-end platform."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
