// ============================================================
//  Student Grading Management System — React App
// ============================================================
const { useState, useEffect, useRef, useCallback } = React;

// ── Icons (inline SVG components) ──────────────────────────
const Icon = {
  Search:   () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  Download: () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Eye:      () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Back:     () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>,
  Sort:     () => <svg width="10" height="10" fill="currentColor" viewBox="0 0 10 10"><path d="M5 1l3 4H2z"/><path d="M5 9L2 5h6z" opacity=".4"/></svg>,
  Moon:     () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun:      () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  CSV:      () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  Chevron:  ({ open }) => <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '180ms' }}><polyline points="6 9 12 15 18 9"/></svg>,
  Bulk:     () => <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
};

// ── Grade CSS class helper ──────────────────────────────────
function gradeCls(g) {
  return { A: 'grade-a', B: 'grade-b', C: 'grade-c', D: 'grade-d', F: 'grade-f' }[g] || 'grade-f';
}

// ── Score bar mini component ────────────────────────────────
function ScoreBar({ pct, color, showLabel = true, height = 6 }) {
  return (
    <div className="score-bar-wrap">
      <div className="score-bar-track" style={{ height }}>
        <div className="score-bar-fill" style={{ width: `${pct}%`, background: color, height: '100%', borderRadius: 3 }} />
      </div>
      {showLabel && <span className="score-bar-val" style={{ color }}>{pct}</span>}
    </div>
  );
}

// ── PDF Generation ──────────────────────────────────────────
function generatePDF(student) {
  const el = document.getElementById('pdf-target');
  if (!el) return;

  // Build PDF content
  el.innerHTML = `
    <div class="pdf-print">
      <div class="pdf-header">
        <div class="pdf-title">Student Grading Report</div>
        <div class="pdf-sub">Web Development Fundamentals — June 2026</div>
        <div class="pdf-meta">
          <div class="pdf-meta-item"><strong>Student</strong>${student.name}</div>
          <div class="pdf-meta-item"><strong>Project</strong>${student.project}</div>
          <div class="pdf-meta-item"><strong>Category</strong>${student.type}${student.group ? ' — ' + student.group : ''}</div>
          <div class="pdf-meta-item"><strong>Role</strong>${student.role}</div>
        </div>
      </div>

      <div class="pdf-score-section">
        <div class="pdf-section-title">Grading Breakdown</div>
        <table class="pdf-criteria-table">
          <thead><tr><th>Criterion</th><th>Score</th><th>Max</th><th>%</th></tr></thead>
          <tbody>
            ${student.criteria.map(c => {
              const pct = Math.round((c.score / c.maxScore) * 100);
              return `<tr><td>${c.label}</td><td>${c.score}</td><td>${c.maxScore}</td><td>${pct}%</td></tr>`;
            }).join('')}
            <tr class="pdf-total-row">
              <td><strong>TOTAL</strong></td>
              <td><strong>${student.raw}</strong></td>
              <td><strong>${student.possible}</strong></td>
              <td><strong>${student.total}%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-bottom:20px">
        <div class="pdf-section-title">Final Grade</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px">
          <span class="pdf-grade-box" style="background:${student.gradeInfo.bg};color:${student.gradeInfo.color};border:2px solid ${student.gradeInfo.border}">${student.grade}</span>
          <div>
            <div style="font-size:18px;font-weight:bold;color:${student.gradeInfo.barColor}">${student.total}%</div>
            <div style="font-size:12px;color:#64748b">${student.gradeInfo.label}</div>
          </div>
        </div>
      </div>

      <div style="margin-bottom:20px">
        <div class="pdf-section-title">Project Evaluation</div>
        <p class="pdf-feedback">${student.feedback}</p>
      </div>

      <div style="margin-bottom:20px">
        <div class="pdf-section-title">Student Effort</div>
        <p class="pdf-feedback">${student.effort}</p>
      </div>

      <div>
        <div class="pdf-section-title">Instructor Comments</div>
        ${student.comments.map(c => `<div class="pdf-comment-li">▸ ${c}</div>`).join('')}
      </div>

      <div style="margin-top:30px;border-top:1px solid #e2e8f0;padding-top:12px;font-size:10px;color:#94a3b8;text-align:center">
        Generated ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · Student Grading Management System
      </div>
    </div>
  `;

  const opt = {
    margin: [10, 10],
    filename: `${student.name.replace(/\s+/g, '-')}-Grade-Report.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(el).save().then(() => {
    el.innerHTML = '';
  });
}

// ── Bulk PDF ────────────────────────────────────────────────
function generateBulkPDF(students) {
  students.forEach((s, i) => {
    setTimeout(() => generatePDF(s), i * 800);
  });
}

// ── Export CSV ──────────────────────────────────────────────
function exportCSV(students) {
  const headers = ['#', 'Name', 'Project', 'Category', 'Group', 'Role', 'Full Stack', 'Code Quality', 'Functionality', 'UI/UX', 'Database', 'Logic', 'Extra', 'Total', 'Grade'];
  const rows = students.map(s => [
    s.number, s.name, `"${s.project}"`, s.type, s.group || '-', s.role,
    ...s.criteria.map(c => c.score),
    s.total, s.grade
  ]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'grading-report-june-2026.csv';
  a.click();
}

// ── Top Navbar ──────────────────────────────────────────────
function TopNav({ darkMode, onToggleDark }) {
  return (
    <nav className="topnav">
      <div className="topnav-brand">
        <div className="topnav-logo">GS</div>
        <div>
          <div className="topnav-title">Student Grading Management System</div>
          <div className="topnav-sub">Instructor Dashboard · Web Development Fundamentals</div>
        </div>
      </div>
      <div className="topnav-right">
        <span className="welcome-badge">Welcome, Instructor</span>
        <button className="dark-btn" onClick={onToggleDark}>
          {darkMode ? <Icon.Sun /> : <Icon.Moon />}
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}

// ── Stat Card ────────────────────────────────────────────────
function StatCard({ icon, value, label, bg, color }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: bg, color }}>{icon}</div>
      <div className="stat-body">
        <div className="stat-val" style={{ color }}>{value}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  );
}

// ── Dashboard Page ───────────────────────────────────────────
function Dashboard({ onView }) {
  const [search, setSearch]       = useState('');
  const [sortKey, setSortKey]     = useState('number');
  const [sortDir, setSortDir]     = useState('asc');
  const [typeFilter, setType]     = useState('all');
  const [gradeFilter, setGrade]   = useState('all');
  const [page, setPage]           = useState(1);
  const PER_PAGE = 8;

  // Filter
  const filtered = STUDENTS_COMPUTED.filter(s => {
    const q = search.toLowerCase();
    const matchSearch = s.name.toLowerCase().includes(q) || s.project.toLowerCase().includes(q);
    const matchType  = typeFilter === 'all' || s.type === typeFilter;
    const matchGrade = gradeFilter === 'all' || s.grade === gradeFilter;
    return matchSearch && matchType && matchGrade;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    let av = a[sortKey], bv = b[sortKey];
    if (typeof av === 'string') av = av.toLowerCase(), bv = bv.toLowerCase();
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  // Paginate
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paged = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function toggleSort(key) {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
    setPage(1);
  }

  useEffect(() => setPage(1), [search, typeFilter, gradeFilter]);

  // Stats
  const avgScore = Math.round(STUDENTS_COMPUTED.reduce((s, x) => s + x.total, 0) / STUDENTS_COMPUTED.length);
  const topScore = Math.max(...STUDENTS_COMPUTED.map(s => s.total));
  const gradeA   = STUDENTS_COMPUTED.filter(s => s.grade === 'A').length;

  const ThBtn = ({ label, k }) => (
    <th onClick={() => toggleSort(k)}>
      <span className="th-sort">{label} {sortKey === k ? (sortDir === 'asc' ? '↑' : '↓') : <Icon.Sort />}</span>
    </th>
  );

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="page-title">Student Records</div>
          <div className="page-sub">June 2026 · {STUDENTS_COMPUTED.length} students enrolled</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn btn-outline btn-sm" onClick={() => exportCSV(sorted)}>
            <Icon.CSV /> Export CSV
          </button>
          <button className="btn btn-success btn-sm" onClick={() => generateBulkPDF(sorted)}>
            <Icon.Bulk /> Bulk PDF
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <StatCard icon="👥" value={STUDENTS_COMPUTED.length} label="Total Students"  bg="#ede9fe" color="#7c3aed" />
        <StatCard icon="📊" value={avgScore + '%'} label="Class Average"   bg="#dbeafe" color="#1e40af" />
        <StatCard icon="🏆" value={gradeA}         label="Grade A Students" bg="#d1fae5" color="#065f46" />
        <StatCard icon="⭐" value={topScore + '%'} label="Top Score"        bg="#fef3c7" color="#92400e" />
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <div className="search-wrap">
          <Icon.Search />
          <input
            className="search-input"
            placeholder="Search by name or project…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="filter-select" value={typeFilter} onChange={e => setType(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
        </select>
        <select className="filter-select" value={gradeFilter} onChange={e => setGrade(e.target.value)}>
          <option value="all">All Grades</option>
          {['A','B','C','D','F'].map(g => <option key={g} value={g}>Grade {g}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <ThBtn label="#"        k="number" />
                <ThBtn label="Student"  k="name" />
                <th>Project</th>
                <ThBtn label="Category" k="type" />
                <ThBtn label="Score"    k="total" />
                <ThBtn label="Grade"    k="grade" />
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.length === 0 ? (
                <tr><td colSpan="7">
                  <div className="empty-state">
                    <div className="empty-icon">🔍</div>
                    <div className="empty-msg">No students match your filters</div>
                    <div className="empty-sub">Try adjusting your search or filter criteria</div>
                  </div>
                </td></tr>
              ) : paged.map(s => (
                <tr key={s.id} className="table-row">
                  <td style={{ color: 'var(--text-muted)', fontWeight: 600, width: 40 }}>{s.number}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: s.avatarColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>
                        {s.initials}
                      </div>
                      <div>
                        <div className="td-name">{s.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.role}</div>
                      </div>
                    </div>
                  </td>
                  <td><div className="td-project">{s.project}</div></td>
                  <td>
                    <span className={`badge ${s.type === 'Individual' ? 'type-ind' : 'type-grp'}`}>
                      {s.type}{s.group ? ` · ${s.group}` : ''}
                    </span>
                  </td>
                  <td style={{ minWidth: 150 }}>
                    <ScoreBar pct={s.total} color={s.gradeInfo.barColor} />
                  </td>
                  <td>
                    <span className={`badge ${gradeCls(s.grade)}`} style={{ fontSize: 13, padding: '4px 12px' }}>
                      {s.grade} · {s.gradeInfo.label}
                    </span>
                  </td>
                  <td className="td-actions">
                    <button className="btn btn-view btn-sm" onClick={() => onView(s.id)}>
                      <Icon.Eye /> View
                    </button>
                    <button className="btn btn-pdf btn-sm" onClick={() => generatePDF(s)}>
                      <Icon.Download /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <span>Showing {Math.min((page - 1) * PER_PAGE + 1, sorted.length)}–{Math.min(page * PER_PAGE, sorted.length)} of {sorted.length} students</span>
            <div className="page-btns">
              <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
              ))}
              <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Student Detail Page ──────────────────────────────────────
function StudentDetail({ studentId, onBack }) {
  const student = STUDENTS_COMPUTED.find(s => s.id === studentId);
  const [commentsOpen, setCommentsOpen] = useState(false);

  if (!student) return (
    <div className="page">
      <div className="empty-state">
        <div className="empty-icon">❌</div>
        <div className="empty-msg">Student not found</div>
        <button className="back-btn" style={{ marginTop: 16 }} onClick={onBack}><Icon.Back /> Back to Dashboard</button>
      </div>
    </div>
  );

  const { gradeInfo } = student;

  return (
    <div className="page">
      {/* Top bar */}
      <div className="page-header">
        <button className="back-btn" onClick={onBack}><Icon.Back /> Back to Dashboard</button>
        <button className="btn btn-pdf" onClick={() => generatePDF(student)}>
          <Icon.Download /> Download PDF
        </button>
      </div>

      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-avatar" style={{ background: student.avatarColor }}>{student.initials}</div>
        <div className="detail-info">
          <div className="detail-name">{student.name}</div>
          <div className="detail-project">{student.project}</div>
          <div className="detail-tags">
            <span className={`badge ${student.type === 'Individual' ? 'type-ind' : 'type-grp'}`}>
              {student.type}{student.group ? ` · ${student.group}` : ''}
            </span>
            <span className="badge" style={{ background: '#f1f5f9', color: '#475569', borderColor: '#e2e8f0' }}>{student.role}</span>
            <span className="badge" style={{ background: '#f1f5f9', color: '#475569', borderColor: '#e2e8f0' }}>{student.submittedDate}</span>
          </div>
        </div>
        <div className="detail-grade-box" style={{ borderColor: gradeInfo.border, background: gradeInfo.bg }}>
          <div className="detail-grade-letter" style={{ color: gradeInfo.barColor }}>{student.grade}</div>
          <div className="detail-grade-pct" style={{ color: gradeInfo.color }}>{student.total}%</div>
          <div className="detail-grade-lbl" style={{ color: gradeInfo.barColor }}>{gradeInfo.label}</div>
        </div>
      </div>

      {/* Grid */}
      <div className="detail-grid">
        {/* Left */}
        <div className="detail-left">
          {/* Criteria Table */}
          <div className="card">
            <div className="card-head">
              <span>📋</span>
              <span className="card-head-title">Grading Breakdown</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Score per criterion</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Score</th>
                    <th>Progress</th>
                    <th style={{ textAlign: 'right' }}>%</th>
                  </tr>
                </thead>
                <tbody>
                  {student.criteria.map(c => {
                    const pct = Math.round((c.score / c.maxScore) * 100);
                    const info = getGradeInfo(pct);
                    return (
                      <tr key={c.id} className="criteria-row">
                        <td className="criteria-label">{c.label}</td>
                        <td>
                          <span className="criteria-chip" style={{ background: info.bg, color: info.color, borderColor: info.border }}>
                            {c.score} / {c.maxScore}
                          </span>
                        </td>
                        <td>
                          <div className="mini-track" style={{ minWidth: 90 }}>
                            <div className="mini-fill" style={{ width: `${pct}%`, background: info.barColor }} />
                          </div>
                        </td>
                        <td className="criteria-pct" style={{ color: info.barColor }}>{pct}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Feedback */}
          <div className="card">
            <div className="card-head"><span>🧑‍💻</span><span className="card-head-title">Project Evaluation</span></div>
            <div className="eval-body">{student.feedback}</div>
          </div>

          {/* Effort */}
          <div className="card">
            <div className="card-head"><span>🎯</span><span className="card-head-title">Student Effort</span></div>
            <div className="eval-body">{student.effort}</div>
          </div>

          {/* Comments */}
          <div className="card">
            <button className="comments-toggle-btn" onClick={() => setCommentsOpen(o => !o)}>
              <span>Instructor Comments</span>
              <Icon.Chevron open={commentsOpen} />
            </button>
            {commentsOpen && (
              <ul className="comments-body">
                {student.comments.map((c, i) => (
                  <li key={i} className="comment-li">
                    <span className="comment-dot">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="detail-right">
          {/* Summary */}
          <div className="card">
            <div className="card-head"><span>📊</span><span className="card-head-title">Score Summary</span></div>
            <div className="summary-body" style={{ borderTop: `4px solid ${gradeInfo.barColor}` }}>
              <div className="summary-score-row">
                <div className="summary-big" style={{ color: gradeInfo.barColor }}>{student.total}</div>
                <div className="summary-of">/ 100</div>
                <span className={`badge ${gradeCls(student.grade)}`} style={{ fontSize: 16, padding: '5px 12px' }}>{student.grade}</span>
              </div>
              <div className="summary-raw">Raw: {student.raw} / {student.possible} points</div>
              <div className="summary-bar">
                <div className="summary-track">
                  <div className="summary-fill" style={{ width: `${student.total}%`, background: gradeInfo.barColor }} />
                </div>
                <span className="summary-bar-lbl" style={{ color: gradeInfo.barColor }}>{student.total}%</span>
              </div>
              <div className="summary-status" style={{ color: gradeInfo.color, background: gradeInfo.bg }}>
                {gradeInfo.label}
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="card">
            <div className="card-head"><span>ℹ️</span><span className="card-head-title">Student Info</span></div>
            {[
              ['Course', 'Web Development Fundamentals'],
              ['Category', student.type],
              ['Group', student.group || 'N/A'],
              ['Role', student.role],
              ['Submitted', student.submittedDate],
              ['Stack', 'Django / Python'],
              ['Evaluator', 'Course Instructor'],
            ].map(([k, v]) => (
              <div key={k} className="meta-row-item">
                <span className="meta-k">{k}</span>
                <span className="meta-v">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="app-footer">
      Student Grading Management System · Web Development Fundamentals · June 2026 ·
      Generated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
    </footer>
  );
}

// ── App Root ─────────────────────────────────────────────────
function App() {
  const [page, setPage]       = useState('dashboard'); // 'dashboard' | 'detail'
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  function handleView(id) {
    setSelected(id);
    setPage('detail');
    window.scrollTo(0, 0);
  }

  function handleBack() {
    setPage('dashboard');
    setSelected(null);
    window.scrollTo(0, 0);
  }

  return (
    <div className="app-shell">
      <TopNav darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />

      {page === 'dashboard'
        ? <Dashboard onView={handleView} />
        : <StudentDetail studentId={selected} onBack={handleBack} />
      }

      <Footer />

      {/* Hidden PDF target */}
      <div id="pdf-target" style={{ position: 'absolute', left: '-9999px', top: 0 }} />
    </div>
  );
}

// ── Mount ─────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
