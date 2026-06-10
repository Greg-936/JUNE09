// ============================================================
//  Student Dataset — Web Development Fundamentals, June 2026
// ============================================================

const STUDENTS = [
  {
    id: "khalid-salim",
    number: 1,
    name: "Khalid Salim",
    project: "Online Store Management",
    type: "Individual",
    group: null,
    role: "Full Stack",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 13, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 14, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 15, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 14, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 13, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 12, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 9,  maxScore: 10 }
    ],
    feedback: "Well-structured Django e-commerce app. Product & Message models confirmed. Views for home, contact, product list & detail. URL routing correct. Used raw SQL cursor alongside ORM — shows initiative beyond basics. Homepage and contact form built and pushed.",
    effort: "Solo project — all work his own. Built homepage, product pages, contact form. Resolved product page errors. Excellent effort for fundamentals level.",
    comments: [
      "Strong grasp of Django's MVT pattern demonstrated throughout the project.",
      "Using raw SQL alongside ORM shows curiosity and willingness to go beyond the curriculum.",
      "Minor improvements possible in code comments and inline documentation.",
      "Product page error resolution without assistance reflects solid debugging skills.",
      "Ready to progress to more advanced topics such as authentication and REST APIs."
    ]
  },
  {
    id: "vivian-achieng",
    number: 2,
    name: "Vivian Achieng",
    project: "Local Job Alert System",
    type: "Individual",
    group: null,
    role: "Backend",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 14, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 15, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 14, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 13, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 11, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 9,  maxScore: 10 }
    ],
    feedback: "Most complete individual project in the cohort. Job model with title, company, location, salary, posted_by FK, and is_active flag. Views include job_list with Q-based search filter. README documents full setup — venv, migrate, createsuperuser. Employer/seeker dashboards and email alerts are planned as next steps.",
    effort: "Solo work throughout. Challenged by login implementation but kept working through it. README quality shows professional thinking beyond the curriculum level. Best-documented individual project in the cohort.",
    comments: [
      "Most complete individual project in the cohort — a benchmark for peers.",
      "Q-based search filter on job_list shows strong understanding of Django ORM querying.",
      "README documentation is at a professional standard — venv setup, migrations, and superuser creation all covered.",
      "Challenged by login but persisted and resolved it — shows strong problem-solving character.",
      "Planned employer/seeker dashboards and email alerts show excellent product thinking.",
      "Ready to move into authentication flows, REST APIs, and asynchronous tasks (Celery/email)."
    ]
  },
  {
    id: "abdallah-hamid",
    number: 3,
    name: "Abdallah Hamid Suleiman",
    project: "TalentConnect",
    type: "Individual",
    group: null,
    role: "Full Stack",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 13, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 12, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 13, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 9,  maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 8,  maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 12, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 8,  maxScore: 10 }
    ],
    feedback: "Two repos — a polished static HTML/CSS frontend (logo, nav, hero, discover/upload/contact/admin pages) and a separate Django backend with Django 6 + Jupyter environment. Backend views and models exist but are not yet wired to the frontend. Concept is strong: a talent showcase platform with clear separation of concerns already in place.",
    effort: "Solo effort across two repos. Challenged by video upload and page linking. Good initiative starting the backend separately rather than mixing concerns. Next step: connect the frontend to the Django backend using template rendering or a REST API layer.",
    comments: [
      "Strong concept — TalentConnect as a talent showcase platform shows product-level thinking.",
      "Polished frontend with logo, nav, hero, and multiple pages is above average for the fundamentals level.",
      "Django 6 + Jupyter environment setup shows good initiative and curiosity.",
      "The clear next step is wiring the frontend to the Django backend — templates or a REST API.",
      "Challenged by video upload and page linking — these are real-world problems worth persisting through.",
      "Two-repo approach shows awareness of separation of concerns; now bring them together."
    ]
  },
  {
    id: "precious-mukiri",
    number: 4,
    name: "Precious Mukiri",
    project: "Green Guard — Waste Reporting Platform",
    type: "Individual",
    group: null,
    role: "Frontend",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 13, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 11, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 13, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 8,  maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 8,  maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 9,  maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 8,  maxScore: 10 }
    ],
    feedback: "Django project set up correctly — GreenGuard settings confirmed. Socially relevant concept: a waste reporting platform for the community. Templates and models are partially built. Had server-running challenges but persisted across three progress submissions, showing consistent engagement with the project.",
    effort: "Three progress updates demonstrate steady commitment throughout the course. Struggled with server errors but did not give up. Persistence and the social impact of the idea are commendable for a beginner — tackling a real community problem at this stage shows strong motivation.",
    comments: [
      "Socially relevant concept — a waste reporting platform addresses a real community need.",
      "Django project correctly configured with GreenGuard settings confirmed — solid foundation.",
      "Three progress submissions show consistent engagement, not a last-minute submission.",
      "Server-running challenges are common at this stage; persisting through them is the right approach.",
      "Templates and models are partially built — the next step is wiring views to complete the CRUD loop.",
      "With the foundation in place, completing the reporting flow and adding a map view would make this a standout project."
    ]
  },
  {
    id: "briggite-kathambi",
    number: 5,
    name: "Briggite Kathambi",
    project: "Donation Platform / Bei-Tracker",
    type: "Group",
    group: "Young Developers",
    role: "Learner",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 10, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 5,  maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 8,  maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 5,  maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 5,  maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 5,  maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 6,  maxScore: 10 }
    ],
    feedback: "Personal repo (briggite/New-Bei-Tracker) was not publicly accessible for review. Joined the Young Developers group and contributed to Bei-Tracker. Personal donation platform idea is good but the repo inaccessibility prevented full technical assessment. Score reflects engagement and learning attitude.",
    effort: "Honestly reported that she was learning things she didn't know — this level of self-awareness is a strength at the beginner stage. Participated in group sessions and tried to keep up. The donation platform idea shows she is thinking beyond exercises. Next step: push the personal repo public so work can be properly reviewed and credited.",
    comments: [
      "Self-awareness about what you don't yet know is one of the most important qualities in a developer — keep that.",
      "Joined Young Developers group and contributed to Bei-Tracker — that initiative counts.",
      "Personal donation platform is a good idea — the concept shows social and financial thinking.",
      "The single most impactful next step: make the personal repo (briggite/New-Bei-Tracker) public.",
      "Score reflects engagement and attitude — a public repo in the next session will make a significant difference.",
      "Keep showing up, keep asking questions — the learning curve gets easier."
    ]
  },
  {
    id: "ibrahim-ngwaruto",
    number: 6,
    name: "Ibrahim Ngwaruto",
    project: "TerraBloom Global",
    type: "Group",
    group: "Team Tiger",
    role: "Backend",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 14, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 14, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 12, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 11, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 13, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 9,  maxScore: 10 }
    ],
    feedback: "Farm-to-table platform connecting Kenyan farmers to consumers. index.html polished with correct Django template tags (url, static). Backend and database built. LIVE deployment on GitHub Pages. Active challenge: farmer uploads not yet visible to consumers — the data visibility layer is currently being resolved.",
    effort: "Built the backend and database, and pushed to a live site on GitHub Pages — the most visible deployment in the cohort. Helped teammates with Git. Actively investigating and solving the farmer-to-consumer data visibility issue, showing strong ownership of the project's core technical challenge.",
    comments: [
      "Live deployment on GitHub Pages is the most visible delivery in the cohort — sets the bar.",
      "Correct use of Django template tags (url, static) shows solid grasp of the framework.",
      "Polished hero with CTAs and How-It-Works section demonstrates product thinking beyond just code.",
      "Helping teammates with Git is a leadership quality worth recognising early.",
      "Farmer-to-consumer data visibility is the right problem to be solving — it's the core feature.",
      "Once uploads are visible to consumers, TerraBloom will be a fully end-to-end platform."
    ]
  },
  {
    id: "fatma-mfaki",
    number: 7,
    name: "Fatma Mfaki",
    project: "— No Project Entry Found —",
    type: "Group",
    group: "Young Developers",
    role: "Learner",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 10, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 5,  maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 8,  maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 5,  maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 5,  maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 5,  maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 6,  maxScore: 10 }
    ],
    feedback: "Personal repo was not publicly accessible for review. Joined the Young Developers group and contributed to Bei-Tracker. Personal donation platform idea is good but the repo inaccessibility prevented full technical assessment. Score reflects engagement and learning attitude.",
    effort: "Honestly reported that she was learning things she didn't know — this level of self-awareness is a strength at the beginner stage. Participated in group sessions and tried to keep up. Next step: push the personal repo public so work can be properly reviewed and credited.",
    comments: [
      "Self-awareness about what you don't yet know is one of the most important qualities in a developer — keep that.",
      "Joined Young Developers group and contributed to Bei-Tracker — that initiative counts.",
      "Personal donation platform is a good idea — the concept shows social thinking.",
      "The single most impactful next step: make the personal repo public so your work can be seen and credited.",
      "Score reflects engagement and attitude — a public repo in the next session will make a significant difference.",
      "Keep showing up, keep asking questions — the learning curve gets easier."
    ]
  },
  {
    id: "benard-teatim",
    number: 8,
    name: "Benard Teatim",
    project: "The Explorer (coastexplorer)",
    type: "Group",
    group: "BTD",
    role: "Backend / Team Lead",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 14, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 14, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 12, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 12, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 11, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 9,  maxScore: 10 }
    ],
    feedback: "Django app (coastexplorer) — manage.py and settings confirmed. Full tourism/booking platform with URL routing and template editing. Team debugged urls.py and views.py together. Benard stepped up as Team Lead in the second session, driving the group's technical progress through active debugging and template work.",
    effort: "Led the BTD group: debugged views.py, edited home.html template, and coordinated error fixing. Strongest leadership contribution in the BTD group. Stepping up mid-course as Team Lead while actively debugging shows both technical skill and team ownership.",
    comments: [
      "Stepping up as Team Lead in the second session without being asked is exactly the kind of initiative that makes a developer valuable.",
      "Debugging views.py and urls.py alongside teammates shows hands-on problem solving, not just coordination.",
      "coastexplorer is a well-structured Django app — manage.py, settings, URL routing, and templates all confirmed.",
      "Strongest leadership contribution in the BTD group — sets the standard for team dynamics.",
      "home.html template editing alongside backend work demonstrates full-stack awareness.",
      "Next step: add authentication and booking CRUD to complete the tourism platform end-to-end."
    ]
  },
  {
    id: "lawrence-kazungu",
    number: 9,
    name: "Lawrence Kazungu",
    project: "The Explorer",
    type: "Group",
    group: "BTD",
    role: "Designer",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 13, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 14, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 11, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 10, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 13, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 8,  maxScore: 10 }
    ],
    feedback: "Same BTD Explorer project. Lawrence maintained his own fork (lukazb17/The-Explorer), focused on UI/UX — login dashboard design and overall appearance. Designed the webpage appearance, fixed visual errors, and is working on a polished login dashboard. Had styling challenges but persisted through them.",
    effort: "Good design-focused contribution to the BTD group. Maintaining a personal fork shows initiative and a clean approach to collaborative development. Persisted through styling challenges rather than deferring the work. The login dashboard polish is a real product-quality goal.",
    comments: [
      "Maintaining a personal fork (lukazb17/The-Explorer) shows good Git workflow understanding.",
      "Design-focused contribution is valuable in a team — UI/UX work is often underappreciated but very visible.",
      "Login dashboard design shows product-level thinking: user experience matters from the first screen.",
      "Persisting through styling challenges is the right approach — CSS and layout issues are normal at this stage.",
      "Next step: complete the login dashboard polish and integrate it with the Django authentication backend.",
      "Consider learning CSS frameworks like Tailwind or Bootstrap to accelerate future UI work."
    ]
  },
  {
    id: "rashid-nzai",
    number: 10,
    name: "Rashid Nzai",
    project: "The Explorer",
    type: "Group",
    group: "BTD",
    role: "Backend",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 13, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 14, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 11, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 11, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 10, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 7,  maxScore: 10 }
    ],
    feedback: "Same BTD Explorer project. Rashid forked to Rashidlama12/The-Explorer. Backend role — fixing errors and resolving the server not-running issue. Fixed project errors and resolved server issues. Still in process on the backend. Server challenges limited overall progress but the contribution is consistent.",
    effort: "Fixed project errors and resolved server issues despite repeated challenges. Consistent contribution throughout the project period. Server problems at the fundamentals level are common and working through them builds durable debugging skills. The backend is still in process.",
    comments: [
      "Maintaining a personal fork (Rashidlama12/The-Explorer) shows ownership and good Git practice.",
      "Fixing server not-running issues is foundational backend work — every Django developer faces this early on.",
      "Consistent contribution despite server challenges is more valuable than a quick result with no obstacles.",
      "Still in process on the backend — the path is clear, keep working through the server setup.",
      "Next step: get the server running stably, then focus on wiring the backend views to the frontend templates.",
      "Debugging server issues builds the kind of muscle memory that makes you faster on every future project."
    ]
  },
  {
    id: "isaiah-washe",
    number: 11,
    name: "Isaiah Washe",
    project: "The Explorer",
    type: "Group",
    group: "BTD",
    role: "Backend — Auth",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 14, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 13, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 14, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 11, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 11, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 10, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 8,  maxScore: 10 }
    ],
    feedback: "Same BTD Explorer project. Isaiah forked to isaiahwashe123/The-Explorer and concentrated specifically on the Django login/authentication system. Built the Django login system — a concrete and valuable backend contribution. Maintained his own fork, showing an independent and organised Git workflow.",
    effort: "Building Django authentication is one of the most reusable and production-relevant skills at this level. Focusing on a single, well-defined backend feature and delivering it is a solid strategy. Maintaining an independent fork shows discipline and ownership.",
    comments: [
      "Building Django authentication is one of the highest-value skills at the fundamentals level — used in every real project.",
      "Maintaining a personal fork (isaiahwashe123/The-Explorer) shows independent Git workflow — a professional habit.",
      "Focused contribution on a specific, well-defined feature is a strong approach — depth over breadth.",
      "Login/auth is the gateway to every other user-specific feature in the app — this work unlocks the rest.",
      "Next step: wire the auth system to role-based views (tourist vs admin) to complete the Explorer's access model.",
      "Consider extending the auth system with password reset and profile management for a complete implementation."
    ]
  },
  {
    id: "naima-rashid",
    number: 12,
    name: "Naima Rashid",
    project: "Bei Tracker",
    type: "Group",
    group: "Young Developers",
    role: "Frontend",
    submittedDate: "June 2026",
    criteria: [
      { id: "full_stack",    label: "Full Stack",        score: 15, maxScore: 15 },
      { id: "code_quality",  label: "Code Quality",      score: 13, maxScore: 15 },
      { id: "functionality", label: "Functionality",     score: 13, maxScore: 15 },
      { id: "ui_ux",         label: "UI / UX",           score: 11, maxScore: 15 },
      { id: "database",      label: "Database Usage",    score: 10, maxScore: 15 },
      { id: "logic",         label: "Logic & Structure", score: 12, maxScore: 15 },
      { id: "extra",         label: "Extra Effort",      score: 8,  maxScore: 10 }
    ],
    feedback: "Contributed to the shared Young Developers repo. Worked on homepage design and base.html. Fixed URL errors so products appear on the prices page — a backend-adjacent task that shows understanding of Django's URL routing beyond just frontend design. Had code-running issues but resolved them independently.",
    effort: "Steady and focused frontend contribution throughout the project. The URL fix is a meaningful backend-adjacent task — it shows Naima understood the codebase beyond just design. Resolving code-running issues without giving up reflects strong persistence and problem-solving for a frontend-focused contributor.",
    comments: [
      "Fixing URL errors so products appear on the prices page is backend-adjacent work — shows codebase understanding beyond design.",
      "Working on base.html means understanding how Django's template inheritance works — not just surface styling.",
      "Homepage design is the first thing users see — a strong visual foundation benefits the whole team.",
      "Resolving code-running issues independently shows solid problem-solving at the fundamentals level.",
      "Steady, focused contribution throughout the project is exactly what good team members do.",
      "Next step: explore Django views to start connecting frontend templates to backend data directly."
    ]
  }
];

// Grade scale
const GRADE_SCALE = [
  { min: 90, max: 100, grade: "A", label: "Excellent",    color: "#065f46", bg: "#d1fae5", border: "#6ee7b7", barColor: "#10b981" },
  { min: 80, max: 89,  grade: "B", label: "Good",         color: "#1e40af", bg: "#dbeafe", border: "#93c5fd", barColor: "#3b82f6" },
  { min: 70, max: 79,  grade: "C", label: "Satisfactory", color: "#92400e", bg: "#fef3c7", border: "#fcd34d", barColor: "#f59e0b" },
  { min: 60, max: 69,  grade: "D", label: "Needs Work",   color: "#9a3412", bg: "#ffedd5", border: "#fdba74", barColor: "#f97316" },
  { min: 0,  max: 59,  grade: "F", label: "Failing",      color: "#991b1b", bg: "#fee2e2", border: "#fca5a5", barColor: "#ef4444" }
];

// Avatar colors cycle
const AVATAR_COLORS = [
  "#1e3a5f","#7c3aed","#0891b2","#065f46","#9d174d",
  "#92400e","#1d4ed8","#166534","#7e22ce","#be185d","#0369a1","#0f766e"
];

// Helpers
function computeScore(criteria) {
  const raw      = criteria.reduce((s, c) => s + c.score, 0);
  const possible = criteria.reduce((s, c) => s + c.maxScore, 0);
  const pct      = Math.round((raw / possible) * 100);
  return { raw, possible, pct };
}

function getGradeInfo(pct) {
  return GRADE_SCALE.find(g => pct >= g.min && pct <= g.max) || GRADE_SCALE[GRADE_SCALE.length - 1];
}

// Pre-compute scores for all students
const STUDENTS_COMPUTED = STUDENTS.map((s, i) => {
  const { raw, possible, pct } = computeScore(s.criteria);
  const info = getGradeInfo(pct);
  return {
    ...s,
    raw,
    possible,
    total: pct,
    grade: info.grade,
    gradeInfo: info,
    avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
    initials: s.name.split(" ").map(w => w[0]).join("").slice(0, 2)
  };
});
