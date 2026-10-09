import { useState } from 'react';
import {
  GitBranch,
  Compass,
  Code2,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface BranchGraphNavigatorProps {
  onSelectBranch: (sectionId: string) => void;
  activeBranch: string;
}

export function BranchGraphNavigator({
  onSelectBranch,
  activeBranch,
}: BranchGraphNavigatorProps) {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  const branches = [
    {
      id: 'about',
      number: '01',
      title: 'About & Mindset',
      category: 'Core Philosophy',
      description: 'Systems engineering approach, problem solving, and data-driven application focus.',
      icon: Compass,
      subItems: ['Systems Architecture', 'Data-Driven Apps', 'Applied Engineering'],
    },
    {
      id: 'skills',
      number: '02',
      title: 'Technical Toolkit',
      category: 'Competencies',
      description: 'Languages (C, Python, Java), Core CS (DSA, DBMS), and Embedded Hardware (Arduino).',
      icon: Code2,
      subItems: ['C / Python / Java', 'DSA & Complexity', 'Relational DBMS', 'Arduino IoT'],
    },
    {
      id: 'projects',
      number: '03',
      title: 'Featured Projects',
      category: 'Implementations',
      description: 'DSA execution visualizer, relational query engine, and Arduino hardware telemetry.',
      icon: FolderGit2,
      subItems: ['Project 01: DSA Visualizer', 'Project 02: DBMS Engine', 'Project 03: IoT Bridge'],
    },
    {
      id: 'education',
      number: '04',
      title: 'Academic Foundation',
      category: 'Undergraduate',
      description: 'B.Tech in Computer Science & Data Science with core computing coursework.',
      icon: GraduationCap,
      subItems: ['CSD Curriculum', 'Data Structures', 'Database Systems', 'Algorithms'],
    },
    {
      id: 'hackathons',
      number: '05',
      title: 'Hackathons & Events',
      category: 'Competitions',
      description: 'High-intensity collaboration in Smart India Hackathon, Zignasa, Ignia, and SAE.',
      icon: Trophy,
      subItems: ['SIH National', 'Zignasa Arena', 'Ignia Sprint', 'SAE Engineering'],
    },
    {
      id: 'certifications',
      number: '06',
      title: 'Certifications',
      category: 'Credentials',
      description: 'Verified coursework slots for technical specializations and certifications.',
      icon: Award,
      subItems: ['Coursework Badges', 'Algorithm Verification', 'Database Normalization'],
    },
    {
      id: 'contact',
      number: '07',
      title: 'Contact & Connect',
      category: 'Inquiries',
      description: 'Channels open for internships, technical project collaboration, and networking.',
      icon: Mail,
      subItems: ['Direct Email', 'GitHub Repos', 'LinkedIn Profile', 'Quick Message'],
    },
  ];

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Systems Architecture Graph</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Knowledge & Project Branches
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm text-slate-400 max-w-md">
          A structured topology of my background. Select any branch below to navigate smoothly into that domain.
        </p>
      </div>

      {/* Central Trunk Header Node */}
      <div className="relative mb-10 flex justify-center">
        <div className="surface-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 border border-sky-500/30 shadow-lg shadow-blue-950/40">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-sky-400/40 text-sky-400 flex items-center justify-center font-black text-sm">
            SSK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                Root Node
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400">Thatikonda Sai Shiva Kumar</span>
            </div>
            <p className="text-sm font-bold text-white">
              B.Tech Computer Science & Data Science (CSD)
            </p>
          </div>
        </div>
      </div>

      {/* Branch Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {branches.map((branch) => {
          const Icon = branch.icon;
          const isActive = activeBranch === branch.id;
          const isHovered = hoveredBranch === branch.id;

          return (
            <div
              key={branch.id}
              onClick={() => onSelectBranch(branch.id)}
              onMouseEnter={() => setHoveredBranch(branch.id)}
              onMouseLeave={() => setHoveredBranch(null)}
              className={`surface-card rounded-2xl p-6 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                isActive
                  ? 'border-sky-400 bg-slate-900/90 shadow-xl shadow-blue-950/50'
                  : 'hover:border-sky-500/40 hover:bg-slate-900/80 hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Branch Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-blue-600/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-300 transition-colors">
                    0{branch.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                  {branch.category}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                  {branch.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {branch.description}
                </p>
              </div>

              {/* Sub-items List (Unboxed metadata with subtle technical dividers) */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400 font-mono mb-4">
                  {branch.subItems.map((item, idx) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <span className="text-slate-300">{item}</span>
                      {idx < branch.subItems.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
                  <span>Open Branch Section</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
