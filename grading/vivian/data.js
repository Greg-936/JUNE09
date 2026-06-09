// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Vivian Achieng",
    project: "Local Job Alert System",
    type: "Individual Project",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 14,
      maxScore: 15,
      tooltip: "Covers both frontend and backend — Django views, templates, URL routing, and server-side logic with employer/seeker dashboards in progress."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 14,
      maxScore: 15,
      tooltip: "Readability, consistent naming conventions, comments, and overall code organisation. README quality shows professional thinking."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 15,
      maxScore: 15,
      tooltip: "Core features fully working — Job model with title, company, location, salary, posted_by FK, is_active flag. Q-based search filter on job_list view."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 14,
      maxScore: 15,
      tooltip: "Visual design, layout, responsiveness, and overall user experience of the job alert application."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 13,
      maxScore: 15,
      tooltip: "Job model with relational FK (posted_by), is_active flag for job status management. Solid ORM usage and data integrity."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 11,
      maxScore: 15,
      tooltip: "Application architecture and logical flow. Q-based search filter demonstrates strong query logic. Email alert system planned."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 9,
      maxScore: 10,
      tooltip: "Going beyond requirements — full README with venv, migrate, createsuperuser setup. Employer/seeker dashboards and email alerts planned."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Most complete individual project in the cohort. Job model with title, company, location, salary, posted_by FK, and is_active flag. Views include job_list with Q-based search filter. README documents full setup — venv, migrate, createsuperuser. Employer/seeker dashboards and email alerts are planned as next steps.",
    effort: "Solo work throughout. Challenged by login implementation but kept working through it. README quality shows professional thinking beyond the curriculum level. Best-documented individual project in the cohort."
  },

  instructorComments: [
    "Most complete individual project in the cohort — a benchmark for peers.",
    "Q-based search filter on job_list shows strong understanding of Django ORM querying.",
    "README documentation is at a professional standard — venv setup, migrations, and superuser creation all covered.",
    "Challenged by login but persisted and resolved it — shows strong problem-solving character.",
    "Planned employer/seeker dashboards and email alerts show excellent product thinking.",
    "Ready to move into authentication flows, REST APIs, and asynchronous tasks (Celery/email)."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
