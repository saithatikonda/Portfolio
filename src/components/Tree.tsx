import { useState } from 'react';
import {
  Compass,
  Wrench,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail,
  GitBranch,
  Camera,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export interface TreeBranchDef {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  categoryNumber: string;
  color: string;
  glow: string;
  icon: any;
  tags: string[];
}

interface TreeProps {
  onSelectBranch: (branchId: string) => void;
  activeBranchId: string | null;
  onOpenResume?: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
  onSelectProject?: (project: ProjectItem) => void;
}

export function Tree({
  onSelectBranch,
  activeBranchId,
  onOpenPhotoModal,
  customPhotoUrl,
}: TreeProps) {
  const [rootImageError, setRootImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');

  const profileSrc = customPhotoUrl || '/profile.jpg';

  const branches: TreeBranchDef[] = [
    {
      id: 'about',
      name: 'About Me',
      shortName: 'About',
      subtitle: 'Engineering Mindset & Core Pillars',
      categoryNumber: '01',
      color: '#10B981', // Emerald
      glow: 'rgba(16, 185, 129, 0.45)',
      icon: Compass,
      tags: ['Engineering Mindset', 'Systems Curiosity', 'Problem Solving'],
    },
    {
      id: 'skills',
      name: 'Technical Skills',
      shortName: 'Skills',
      subtitle: 'C, Python, Java, SQL, DSA, DBMS',
      categoryNumber: '02',
      color: '#06B6D4', // Cyan
      glow: 'rgba(6, 182, 212, 0.45)',
      icon: Wrench,
      tags: ['C / Python / Java', 'SQL & DBMS', 'DSA & Complexity', 'Arduino IoT'],
    },
    {
      id: 'projects',
      name: 'Projects Showcase',
      shortName: 'Projects',
      subtitle: 'DSA Visualizer, DBMS Engine, IoT',
      categoryNumber: '03',
      color: '#6366F1', // Indigo
      glow: 'rgba(99, 102, 241, 0.45)',
      icon: FolderGit2,
      tags: ['DSA Visualizer', 'DBMS Analytics', 'Arduino Telemetry'],
    },
    {
      id: 'education',
      name: 'Education & Foundation',
      shortName: 'Education',
      subtitle: 'B.Tech in CS & Data Science',
      categoryNumber: '04',
      color: '#F59E0B', // Amber
      glow: 'rgba(245, 158, 11, 0.45)',
      icon: GraduationCap,
      tags: ['B.Tech CSD', 'Core Computing Theory', 'Data Analysis'],
    },
    {
      id: 'hackathons',
      name: 'Hackathons & Events',
      shortName: 'Hackathons',
      subtitle: 'SIH, Zignasa, Ignisia, SAE',
      categoryNumber: '05',
      color: '#F43F5E', // Crimson
      glow: 'rgba(244, 63, 94, 0.45)',
      icon: Trophy,
      tags: ['Smart India Hackathon', 'Zignasa', 'Ignisia', 'Rapid Sprints'],
    },
    {
      id: 'certifications',
      name: 'Certifications',
      shortName: 'Certs',
      subtitle: 'Verified Credentials & Badges',
      categoryNumber: '06',
      color: '#8B5CF6', // Violet
      glow: 'rgba(139, 92, 246, 0.45)',
      icon: Award,
      tags: ['DSA Verified', 'Database Systems', 'Course Badges'],
    },
    {
      id: 'contact',
      name: 'Contact & Connect',
      shortName: 'Contact',
      subtitle: 'Direct Messaging & Links',
      categoryNumber: '07',
      color: '#14B8A6', // Teal
      glow: 'rgba(20, 184, 166, 0.45)',
      icon: Mail,
      tags: ['Direct Email', 'GitHub Repo', 'LinkedIn Profile'],
    },
  ];

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

  // Tailored accordion content for each branch
  const renderBranchContent = (branchId: string) => {
    switch (branchId) {
      case 'about':
        return (
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
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
                Core Development Pillars
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full box-border">
                {PORTFOLIO_DATA.personal.aboutCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="w-full box-border p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <h5 className="text-xs sm:text-sm font-semibold text-white">
                        {card.title}
                      </h5>
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
        );

      case 'skills':
        return (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full box-border">
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
                      <h5 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between">
                        <span>{group.name}</span>
                        <span className="text-[10px] font-mono text-cyan-400 font-normal">
                          {group.skills.length} skills
                        </span>
                      </h5>
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
        );

      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full box-border">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <div
                key={proj.id}
                className="w-full box-border p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                      PROJECT {proj.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/20">
                      {proj.category}
                    </span>
                  </div>

                  <h5 className="text-sm sm:text-base font-bold text-white mb-1">
                    {proj.title}
                  </h5>
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
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 pt-2.5 border-t border-white/[0.06] w-full box-border">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-indigo-500/40 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Code</span>
                  </a>

                  <a
                    href={proj.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm border border-indigo-400/30 transition-colors"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
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
                  <h5 className="text-sm sm:text-base font-extrabold text-white">
                    {edu.degree}
                  </h5>
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
        );

      case 'hackathons':
        return (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full box-border">
              {PORTFOLIO_DATA.hackathons.map((hack, idx) => (
                <div
                  key={idx}
                  className="w-full box-border p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-rose-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="text-xs sm:text-sm font-bold text-white">{hack.name}</h5>
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
        );

      case 'certifications':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full box-border">
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
                <h5 className="text-xs sm:text-sm font-bold text-white mb-1">{cert.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4 w-full box-border">
            <div className="w-full box-border p-3.5 rounded-2xl bg-teal-950/20 border border-teal-500/25">
              <h5 className="text-xs sm:text-sm font-bold text-white mb-1">
                Let's Connect
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.personal.contactDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 w-full box-border">
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
                      Explore Repos
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

            {/* Quick Note Form */}
            <form onSubmit={handleSendMessage} className="space-y-2.5 pt-1 w-full box-border">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Send a Quick Note
              </span>
              <input
                type="text"
                placeholder="Subject or Topic"
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-full box-border px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                required
              />
              <textarea
                rows={2}
                placeholder="Your message..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full box-border px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 resize-none"
                required
              />
              <button
                type="submit"
                className="w-full box-border inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-950/60 border border-teal-400/30 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{messageSent ? 'Message Queued!' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="tree"
      className="relative min-h-fit py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-start transition-all duration-300 w-full box-border scroll-mt-20"
    >
      {/* Background Bioluminescent Nebula Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Screen 2 Header */}
      <div className="relative z-10 text-center mb-8 max-w-2xl mx-auto w-full box-border">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0B1528]/80 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-950/40 mb-3 backdrop-blur-md">
          <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Knowledge Tree</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Knowledge & Project Tree
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
          Click any branch to expand its full details in place.
        </p>
      </div>

      {/* ========================================================
          VERTICAL ACCORDION TREE STRUCTURE
         ======================================================== */}
      <div className="w-full relative box-border">
        {/* Continuous Bioluminescent Trunk Spine */}
        <div className="absolute left-5 sm:left-6 top-3 bottom-16 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] z-0" />

        {/* 7 Vertical Expandable Branch Cards */}
        <div className="space-y-4 relative z-10 pl-0.5 w-full box-border">
          {branches.map((b) => {
            const Icon = b.icon;
            const isOpen = activeBranchId === b.id;

            return (
              <div
                key={b.id}
                id={b.id}
                data-branch-id={b.id}
                className="relative flex items-start gap-3 sm:gap-4 w-full box-border scroll-mt-24"
              >
                {/* Branch Node Point on Spine */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-lg transition-transform duration-200 mt-1"
                  style={{
                    backgroundColor: isOpen ? b.color : '#0B1324',
                    borderColor: b.color,
                    color: isOpen ? '#FFFFFF' : b.color,
                    boxShadow: isOpen ? `0 0 16px ${b.glow}` : `0 0 8px ${b.glow}`,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                </div>

                {/* Collapsible Card Container */}
                <div
                  id={`branch-${b.id}`}
                  className={`flex-1 min-w-0 box-border rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#0B1528] border-cyan-400/80 ring-2 ring-cyan-400/40 shadow-2xl'
                      : 'bg-[#0B1324]/95 border-white/[0.08] hover:border-slate-700 hover:bg-[#0c162b]'
                  }`}
                  style={{
                    boxShadow: isOpen ? `0 12px 30px -5px ${b.glow}` : undefined,
                  }}
                >
                  {/* Clickable Header Bar */}
                  <button
                    type="button"
                    onClick={() => onSelectBranch(b.id)}
                    className="w-full box-border p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 cursor-pointer touch-manipulation select-none"
                    aria-expanded={isOpen}
                    aria-label={`Toggle branch: ${b.name}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          BRANCH {b.categoryNumber}
                        </span>
                        <span
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                          style={{ backgroundColor: `${b.color}25`, color: b.color }}
                        >
                          {b.shortName}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {b.name}
                      </h3>

                      <p className="text-[11px] sm:text-xs text-slate-400 truncate mt-0.5">
                        {b.subtitle}
                      </p>
                    </div>

                    {/* Chevron Indicator Flips Down When Opened */}
                    <div
                      className="p-1.5 rounded-lg bg-white/[0.04] shrink-0 transition-transform duration-200"
                      style={{ color: b.color }}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Vertical In-Place Accordion Expansion */}
                  {isOpen && (
                    <div className="w-full box-border max-h-none h-auto overflow-visible transition-all duration-200 ease-in-out px-3.5 sm:px-4 pb-4 pt-1 border-t border-white/[0.08] animate-in fade-in duration-200">
                      {renderBranchContent(b.id)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            BOTTOM ROOT / TRUNK CAPSULE
           ======================================================== */}
        <div className="mt-8 ml-0 sm:ml-4 p-4 rounded-2xl bg-[#0A1124] border border-cyan-500/30 text-center flex items-center gap-3.5 shadow-xl w-full box-border">
          {/* Avatar Portrait */}
          <div className="relative w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-cyan-400 shadow-md group">
            {!rootImageError ? (
              <img
                src={profileSrc}
                alt="Sai Shiva Kumar"
                onError={() => setRootImageError(true)}
                className="w-11 h-11 rounded-full object-cover object-top border border-cyan-400"
              />
            ) : (
              <div className="w-full h-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-300 text-xs">
                SSK
              </div>
            )}
            <button
              onClick={onOpenPhotoModal}
              className="absolute inset-0 bg-slate-950/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              title="Upload Portrait"
            >
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

          <div className="text-left flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                ROOT / TRUNK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] text-emerald-400 font-semibold">Open to Opportunities</span>
            </div>
            <h4 className="text-sm font-bold text-white truncate">{PORTFOLIO_DATA.personal.fullName}</h4>
            <p className="text-[11px] text-slate-400 font-mono truncate">{PORTFOLIO_DATA.personal.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
