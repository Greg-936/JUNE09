// ============================================================
//  Grading Data – stored as JSON for easy backend integration
// ============================================================

const GRADING_DATA = {
  student: {
    name: "Briggite Kathambi",
    project: "Donation Platform / Bei-Tracker (Group)",
    type: "Individual / Group — Young Developers",
    submittedDate: "June 2026",
    course: "Web Development Fundamentals"
  },

  criteria: [
    {
      id: "full_stack",
      label: "Full Stack",
      score: 10,
      maxScore: 15,
      tooltip: "Personal repo (briggite/New-Bei-Tracker) was not publicly accessible for review. Joined the Young Developers group and contributed to Bei-Tracker."
    },
    {
      id: "code_quality",
      label: "Code Quality",
      score: 5,
      maxScore: 15,
      tooltip: "Code quality could not be fully assessed — personal repo was inaccessible. Score reflects what could be observed from group contributions."
    },
    {
      id: "functionality",
      label: "Functionality",
      score: 8,
      maxScore: 15,
      tooltip: "Personal donation platform idea is good but repo was inaccessible. Functionality assessed through group participation in Bei-Tracker."
    },
    {
      id: "ui_ux",
      label: "UI / UX",
      score: 5,
      maxScore: 15,
      tooltip: "UI/UX could not be assessed from the inaccessible personal repo. Group project contributions noted."
    },
    {
      id: "database",
      label: "Database Usage",
      score: 5,
      maxScore: 15,
      tooltip: "Database work could not be reviewed due to inaccessible personal repo."
    },
    {
      id: "logic",
      label: "Logic & Structure",
      score: 5,
      maxScore: 15,
      tooltip: "Logic and structure could not be fully assessed. Participated in group sessions and tried to keep up with the curriculum."
    },
    {
      id: "extra",
      label: "Extra Effort",
      score: 6,
      maxScore: 10,
      tooltip: "Honestly reported learning things she didn't know — shows self-awareness. Participated in group sessions. Personal donation platform concept shows initiative."
    }
  ],

  maxTotal: 100,

  evaluation: {
    technical: "Personal repo (briggite/New-Bei-Tracker) was not publicly accessible for review. Joined the Young Developers group and contributed to Bei-Tracker. Personal donation platform idea is good but the repo inaccessibility prevented full technical assessment. Score reflects engagement and learning attitude rather than a complete technical review.",
    effort: "Honestly reported that she was learning things she didn't know — this level of self-awareness is a strength at the beginner stage. Participated in group sessions and tried to keep up. The donation platform idea shows she is thinking beyond exercises. Next step: push the personal repo public so work can be properly reviewed and credited."
  },

  instructorComments: [
    "Self-awareness about what you don't yet know is one of the most important qualities in a developer — keep that.",
    "Joined Young Developers group and contributed to Bei-Tracker — that initiative counts.",
    "Personal donation platform is a good idea — the concept shows social and financial thinking.",
    "The single most impactful next step: make the personal repo (briggite/New-Bei-Tracker) public.",
    "Score reflects engagement and attitude — a public repo in the next session will make a significant difference.",
    "Keep showing up, keep asking questions — the learning curve gets easier."
  ]
};

const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A",  label: "Excellent",    color: "#10b981", bg: "#d1fae5", border: "#6ee7b7" },
  { min: 80, max: 89,  grade: "B",  label: "Good",         color: "#3b82f6", bg: "#dbeafe", border: "#93c5fd" },
  { min: 70, max: 79,  grade: "C",  label: "Satisfactory", color: "#f59e0b", bg: "#fef3c7", border: "#fcd34d" },
  { min: 60, max: 69,  grade: "D",  label: "Needs Work",   color: "#f97316", bg: "#ffedd5", border: "#fdba74" },
  { min: 0,  max: 59,  grade: "F",  label: "Failing",      color: "#ef4444", bg: "#fee2e2", border: "#fca5a5" }
];
