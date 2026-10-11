import { useEffect, useState } from 'react';
import {
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Send,
  GraduationCap,
  MapPin,
  Trophy,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface DrawerProps {
  isOpen: boolean;
  activeBranchId: string | null;
  onClose: () => void;
  onSelectBranch: (branchId: string) => void;
  onSelectProject?: (project: ProjectItem) => void;
  onOpenResume?: () => void;
}

export function Drawer({
  isOpen,
  activeBranchId,
  onClose,
  onSelectBranch,
}: DrawerProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');

  const branches = [
    {
      id: 'about',
      number: '01',
      tag: 'BRANCH 01 • ABOUT ME',
      name: 'About Me',
      color: '#10B981',
    },
    {
      id: 'skills',
      number: '02',
      tag: 'BRANCH 02 • TECHNICAL SKILLS',
      name: 'Technical Skills',
      color: '#06B6D4',
    },
    {
      id: 'projects',
      number: '03',
      tag: 'BRANCH 03 • PROJECTS SHOWCASE',
      name: 'Projects Showcase',
      color: '#6366F1',
    },
    {
      id: 'education',
      number: '04',
      tag: 'BRANCH 04 • ACADEMIC FOUNDATION',
      name: 'Education & Foundation',
      color: '#F59E0B',
    },
    {
      id: 'hackathons',
      number: '05',
      tag: 'BRANCH 05 • HACKATHONS & EVENTS',
      name: 'Hackathons & Events',
      color: '#F43F5E',
    },
    {
      id: 'certifications',
      number: '06',
      tag: 'BRANCH 06 • CERTIFICATIONS',
      name: 'Certifications',
      color: '#8B5CF6',
    },
    {
      id: 'contact',
      number: '07',
      tag: 'BRANCH 07 • CONTACT & CONNECT',
      name: 'Contact & Connect',
      color: '#14B8A6',
    },
  ];

  const currentIndex = branches.findIndex((b) => b.id === activeBranchId);
  const currentBranch = branches[currentIndex >= 0 ? currentIndex : 0];

  const prevBranch =
    currentIndex > 0
      ? branches[currentIndex - 1]
      : branches[branches.length - 1];

  const nextBranch =
    currentIndex < branches.length - 1
      ? branches[currentIndex + 1]
      : branches[0];

  // Close on Escape key, Left/Right arrow quick-switch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectBranch(prevBranch.id);
      } else if (e.key === 'ArrowRight') {
        onSelectBranch(nextBranch.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectBranch, prevBranch.id, nextBranch.id]);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setContactSubject('');
      setContactMessage('');
    }, 3000);
  };

  if (!isOpen && !activeBranchId) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Translucent Backdrop with proper touch handling */}
      <div
        onClick={onClose}
        onTouchMove={(e) => e.stopPropagation()}
        className={`fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300 touch-pan-y ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-Out Drawer: Responsive, Width w-full max-w-full sm:max-w-xl with overflow-x-hidden */}
      <aside
        onTouchMove={(e) => e.stopPropagation()}
        className={`fixed bottom-0 right-0 sm:inset-y-0 w-full max-w-full sm:max-w-xl h-full max-h-[88vh] sm:max-h-full flex flex-col overflow-x-hidden bg-[#0b0f1d]/95 backdrop-blur-2xl border-t sm:border-t-0 sm:border-l border-white/[0.1] shadow-2xl z-50 transform transition-transform duration-300 ease-out text-slate-100 ${
          isOpen
            ? 'translate-y-0 sm:translate-x-0'
            : 'translate-y-full sm:translate-x-full sm:translate-y-0'
        }`}
      >
        {/* ========================================================
            PROMINENT TOP NAVIGATION BAR WITH TOP-LEFT BACK ARROW
           ======================================================== */}
        <div className="px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[#090d1a]/95 border-b border-white/[0.08] flex items-center justify-between gap-3 shrink-0">
          {/* Top-Left: Prominent Back Arrow button (←) */}
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white rounded-xl bg-white/[0.06] hover:bg-white/[0.12] active:bg-cyan-500/20 border border-white/[0.1] transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
              aria-label="Back to Tree"
              title="Back to Tree"
            >
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full animate-pulse shadow-md shrink-0"
                  style={{ backgroundColor: currentBranch.color }}
                />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-400 truncate">
                  {currentBranch.tag}
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug truncate">
                {currentBranch.name}
              </h2>
            </div>
          </div>

          {/* Top-Right: Clean Close Button (✕) */}
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-white/[0.04] hover:bg-white/[0.09] active:bg-white/[0.15] border border-white/[0.08] transition-colors cursor-pointer shrink-0"
            aria-label="Close drawer"
            title="Close (Esc)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* ========================================================
            BRANCH NUMBER TABS: HORIZONTALLY SCROLLABLE WITH NO-SCROLLBAR
           ======================================================== */}
        <div className="px-3 sm:px-4 py-2 bg-[#060913] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar w-full shrink-0 touch-pan-x">
          {branches.map((b) => {
            const isActive = b.id === currentBranch.id;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap text-xs flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-slate-800 text-white font-bold border shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
                style={{
                  borderColor: isActive ? b.color : 'transparent',
                  color: isActive ? b.color : undefined,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: b.color }}
                />
                <span className="font-mono">{b.number}</span>
                <span className="text-[11px] hidden sm:inline">{b.name}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            SCROLLABLE CONTENT AREA (No horizontal clipping, pb-20)
           ======================================================== */}
        <div
          key={currentBranch.id}
          className="flex-1 overflow-y-auto overscroll-contain p-4 pb-20 space-y-4 touch-pan-y animate-in fade-in duration-200"
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* BRANCH 01: ABOUT ME */}
          {currentBranch.id === 'about' && (
            <div className="space-y-4 w-full box-border">
              <div className="w-full box-border p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                  Engineering Philosophy
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {PORTFOLIO_DATA.personal.aboutIntro}
                </p>
              </div>

              <div className="w-full box-border">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
                  Core Development Pillars
                </h3>
                <div className="space-y-2.5 w-full box-border">
                  {PORTFOLIO_DATA.personal.aboutCards.map((card, idx) => (
                    <div
                      key={idx}
                      className="w-full box-border p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full box-border p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Undergraduate Status:</span>
                <span className="text-emerald-400 font-semibold">Active CSD Student</span>
              </div>
            </div>
          )}

          {/* BRANCH 02: TECHNICAL SKILLS */}
          {currentBranch.id === 'skills' && (
            <div className="space-y-4 w-full box-border">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 w-full box-border">
                {['all', 'Languages', 'Computer Science', 'Hardware & IoT'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all ${
                      selectedSkillCategory === cat
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                        : 'bg-white/[0.04] text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {cat === 'all' ? 'All Skills' : cat}
                  </button>
                ))}
              </div>

              {/* Categorized Skills Breakdown */}
              <div className="space-y-3 w-full box-border">
                {PORTFOLIO_DATA.skills.map((group, idx) => {
                  if (
                    selectedSkillCategory !== 'all' &&
                    !group.name.toLowerCase().includes(selectedSkillCategory.toLowerCase())
                  ) {
                    return null;
                  }

                  return (
                    <div
                      key={idx}
                      className="w-full box-border p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
                    >
                      <div className="mb-2.5">
                        <h4 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                          <span>{group.name}</span>
                          <span className="text-[10px] font-mono text-cyan-400 font-normal">
                            {group.skills.length} skills
                          </span>
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {group.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[11px] font-medium text-slate-200 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* BRANCH 03: PROJECTS SHOWCASE */}
          {currentBranch.id === 'projects' && (
            <div className="space-y-3 w-full box-border">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="w-full box-border p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                      PROJECT {proj.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/20">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-400 mb-2.5 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex items-center gap-2 pt-2.5 border-t border-white/[0.06] w-full box-border">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-indigo-500/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Code Repo</span>
                    </a>

                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm border border-indigo-400/30 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* BRANCH 04: EDUCATION & FOUNDATION */}
          {currentBranch.id === 'education' && (
            <div className="space-y-4 w-full box-border">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="w-full box-border p-4 rounded-2xl bg-amber-950/15 border border-amber-500/25 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 shrink-0" />
                      <span>{edu.status}</span>
                    </span>
                    <span>{edu.period}</span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{edu.institution} • {edu.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1.5">
                      Coursework & Computing Theory
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-900/90 text-amber-200 border border-amber-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full box-border p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200">Academic Focus:</span> Computer Science & Data Science foundational theory, algorithms, and practical systems development.
              </div>
            </div>
          )}

          {/* BRANCH 05: HACKATHONS & EVENTS */}
          {currentBranch.id === 'hackathons' && (
            <div className="space-y-3 w-full box-border">
              <div className="w-full box-border p-3.5 rounded-2xl bg-rose-950/20 border border-rose-500/25">
                <div className="flex items-center gap-2 mb-1 text-xs font-mono text-rose-400 font-bold">
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>Competition Mindset</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {PORTFOLIO_DATA.hackathonsStatement}
                </p>
              </div>

              <div className="space-y-2.5 w-full box-border">
                {PORTFOLIO_DATA.hackathons.map((hack, idx) => (
                  <div
                    key={idx}
                    className="w-full box-border p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-rose-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white">{hack.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-500/20">
                        {hack.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium mb-1">
                      {hack.focus}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {hack.learnings}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BRANCH 06: CERTIFICATIONS */}
          {currentBranch.id === 'certifications' && (
            <div className="space-y-3 w-full box-border">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="w-full box-border p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-violet-400 font-bold">
                      {cert.organization} • {cert.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/60 text-violet-300 border border-violet-500/20">
                      {cert.badgeLabel}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* BRANCH 07: CONTACT & CONNECT */}
          {currentBranch.id === 'contact' && (
            <div className="space-y-4 w-full box-border">
              <div className="w-full box-border p-3.5 rounded-2xl bg-teal-950/20 border border-teal-500/25">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                  Let's Connect
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.contactDescription}
                </p>
              </div>

              {/* Interactive Links */}
              <div className="space-y-2 w-full box-border">
                <div className="w-full box-border p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block">Email</span>
                      <span className="text-xs font-semibold text-white truncate block">
                        {PORTFOLIO_DATA.personal.contactInfo.emailPlaceholder}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopyEmail(PORTFOLIO_DATA.personal.contactInfo.emailPlaceholder)
                    }
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.contactInfo.githubPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full box-border p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-teal-500/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0">
                      <Github className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block">GitHub</span>
                      <span className="text-xs font-semibold text-white truncate block">
                        Explore Repositories
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors shrink-0" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.contactInfo.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full box-border p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-teal-500/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-900/40 border border-blue-700/50 flex items-center justify-center text-blue-300 shrink-0">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block">LinkedIn</span>
                      <span className="text-xs font-semibold text-white truncate block">
                        Professional Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors shrink-0" />
                </a>
              </div>

              {/* Direct Quick Message Widget */}
              <form onSubmit={handleSendMessage} className="space-y-2.5 pt-1 w-full box-border">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Send a Quick Note
                </span>
                <input
                  type="text"
                  placeholder="Subject or Topic"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full box-border px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                  required
                />
                <textarea
                  rows={2}
                  placeholder="Your message..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full box-border px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full box-border inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-950/60 border border-teal-400/30 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{messageSent ? 'Message Queued!' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* ========================================================
            STICKY BOTTOM NAVIGATION (Neatly pinned)
           ======================================================== */}
        <div className="p-3 border-t border-cyan-500/10 bg-slate-950/80 backdrop-blur-md shrink-0 flex items-center justify-between text-xs">
          <button
            onClick={() => onSelectBranch(prevBranch.id)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 font-semibold border border-white/[0.08] transition-colors cursor-pointer text-xs"
            title={`Previous: ${prevBranch.name}`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>&lt; {prevBranch.name}</span>
          </button>

          <button
            onClick={() => onSelectBranch(nextBranch.id)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold border border-cyan-400/30 transition-colors cursor-pointer shadow-sm text-xs"
            title={`Next: ${nextBranch.name}`}
          >
            <span>{nextBranch.name} &gt;</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>
    </div>
  );
}
