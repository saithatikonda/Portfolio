import { useState } from 'react';
import {
  User,
  Compass,
  Wrench,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail,
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface InteractiveTreeCanvasProps {
  onSelectBranch: (branchId: string) => void;
  selectedBranchId: string | null;
}

export function InteractiveTreeCanvas({
  onSelectBranch,
  selectedBranchId,
}: InteractiveTreeCanvasProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // 7 Distinct Branch Definitions with organic branch coordinates & vibrant colors
  const branches = [
    {
      id: 'about',
      name: 'About Me',
      subtitle: 'Philosophy & Mindset',
      color: '#10B981', // Emerald
      glow: 'rgba(16, 185, 129, 0.5)',
      icon: Compass,
      tag: 'Code & Challenges',
      pos: { x: 180, y: 340 },
      ctrl: { cx1: 420, cy1: 460, cx2: 240, cy2: 400 },
      badge: '01',
    },
    {
      id: 'skills',
      name: 'Technical Skills',
      subtitle: 'C, Python, Java, DSA, DBMS',
      color: '#06B6D4', // Cyan
      glow: 'rgba(6, 182, 212, 0.5)',
      icon: Wrench,
      tag: 'Core Toolkit',
      pos: { x: 140, y: 190 },
      ctrl: { cx1: 400, cy1: 380, cx2: 200, cy2: 250 },
      badge: '02',
    },
    {
      id: 'projects',
      name: 'Projects',
      subtitle: 'DSA, DBMS & Arduino',
      color: '#6366F1', // Indigo
      glow: 'rgba(99, 102, 241, 0.5)',
      icon: FolderGit2,
      tag: 'Things I Build',
      pos: { x: 300, y: 80 },
      ctrl: { cx1: 450, cy1: 320, cx2: 320, cy2: 170 },
      badge: '03',
    },
    {
      id: 'education',
      name: 'Education',
      subtitle: 'B.Tech in CSD',
      color: '#F59E0B', // Amber
      glow: 'rgba(245, 158, 11, 0.5)',
      icon: GraduationCap,
      tag: 'Academics',
      pos: { x: 500, y: 50 },
      ctrl: { cx1: 500, cy1: 300, cx2: 500, cy2: 130 },
      badge: '04',
    },
    {
      id: 'hackathons',
      name: 'Hackathons',
      subtitle: 'SIH, Zignasa, Ignia, SAE',
      color: '#F43F5E', // Rose
      glow: 'rgba(244, 63, 94, 0.5)',
      icon: Trophy,
      tag: 'Competitions',
      pos: { x: 700, y: 80 },
      ctrl: { cx1: 550, cy1: 320, cx2: 680, cy2: 170 },
      badge: '05',
    },
    {
      id: 'certifications',
      name: 'Certifications',
      subtitle: 'Verified Credentials',
      color: '#8B5CF6', // Purple
      glow: 'rgba(139, 92, 246, 0.5)',
      icon: Award,
      tag: 'Coursework',
      pos: { x: 860, y: 190 },
      ctrl: { cx1: 600, cy1: 380, cx2: 800, cy2: 250 },
      badge: '06',
    },
    {
      id: 'contact',
      name: 'Contact & Connect',
      subtitle: 'Email, GitHub, LinkedIn',
      color: '#14B8A6', // Teal
      glow: 'rgba(20, 184, 166, 0.5)',
      icon: Mail,
      tag: 'Get In Touch',
      pos: { x: 820, y: 340 },
      ctrl: { cx1: 580, cy1: 460, cx2: 760, cy2: 400 },
      badge: '07',
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 p-4 sm:p-8 rounded-3xl bg-[#080E1C]/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
      
      {/* Background Starry Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-teal-500/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 text-center mb-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/60 text-sky-300 border border-sky-500/30 mb-3 shadow-md shadow-sky-950/50">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Interactive Tree of Branches · Click Any Branch to Open</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Explore My Skills & Journey
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Every branch represents a dimension of my engineering background. Press any node below to smoothly unfold its details.
        </p>
      </div>

      {/* ========================================================
          DESKTOP SVG TREE CANVAS (Visual Organic Branching)
         ======================================================== */}
      <div className="relative hidden lg:block w-full h-[550px]">
        <svg
          viewBox="0 0 1000 550"
          className="w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            {/* Trunk Gradient */}
            <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Glowing filter for branch limbs */}
            <filter id="branchGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Trunk Base */}
          <path
            d="M 485 530 Q 500 480 500 430 Q 500 480 515 530 Z"
            fill="url(#trunkGrad)"
            opacity="0.9"
          />

          {/* Organic Branch Limbs stretching to each category */}
          {branches.map((b) => {
            const isHovered = hoveredNode === b.id || selectedBranchId === b.id;
            return (
              <g key={b.id}>
                {/* Outer Glow Path */}
                <path
                  d={`M 500 460 C ${b.ctrl.cx1} ${b.ctrl.cy1}, ${b.ctrl.cx2} ${b.ctrl.cy2}, ${b.pos.x} ${b.pos.y}`}
                  fill="none"
                  stroke={b.color}
                  strokeWidth={isHovered ? '5' : '2.5'}
                  strokeOpacity={isHovered ? '0.9' : '0.4'}
                  filter="url(#branchGlow)"
                  className="transition-all duration-300"
                />

                {/* Animated Pulsing Energy Trace */}
                <path
                  d={`M 500 460 C ${b.ctrl.cx1} ${b.ctrl.cy1}, ${b.ctrl.cx2} ${b.ctrl.cy2}, ${b.pos.x} ${b.pos.y}`}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={isHovered ? '2' : '1'}
                  strokeDasharray="8 12"
                  strokeOpacity={isHovered ? '0.8' : '0.2'}
                  className="animate-pulse"
                />

                {/* Small Leaf Ring at Branch Junction */}
                <circle
                  cx={b.pos.x}
                  cy={b.pos.y}
                  r={isHovered ? '7' : '4'}
                  fill={b.color}
                  className="transition-all duration-300"
                  filter="url(#branchGlow)"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Trunk Node Button (Thatikonda Sai Shiva Kumar) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 shadow-xl shadow-blue-950/60">
            <div className="px-5 py-3 rounded-[14px] bg-[#0A1128] border border-slate-700 text-center flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-sky-400/50 flex items-center justify-center font-black text-sky-300 text-base">
                SSK
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-sky-400 font-bold block uppercase tracking-wider">
                  Trunk & Root
                </span>
                <span className="text-sm font-bold text-white block">
                  Thatikonda Sai Shiva Kumar
                </span>
                <span className="text-[11px] text-slate-300 block">
                  CSD Student · Developer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Positioned Interactive Branch Node Cards (Desktop) */}
        {branches.map((b) => {
          const Icon = b.icon;
          const isSelected = selectedBranchId === b.id;
          const isHovered = hoveredNode === b.id;

          return (
            <button
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              onMouseEnter={() => setHoveredNode(b.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 p-3 rounded-2xl border text-left transition-all duration-300 cursor-pointer group shadow-xl ${
                isSelected
                  ? 'bg-slate-900 border-white ring-2 scale-105'
                  : 'bg-[#0B132B]/95 border-slate-800 hover:border-slate-600 hover:scale-105'
              }`}
              style={{
                left: `${(b.pos.x / 1000) * 100}%`,
                top: `${(b.pos.y / 550) * 100}%`,
                boxShadow: isHovered || isSelected ? `0 10px 25px -5px ${b.glow}` : undefined,
                borderColor: isHovered || isSelected ? b.color : undefined,
              }}
              aria-label={`Open branch: ${b.name}`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${b.color}15`,
                    borderColor: `${b.color}40`,
                    color: b.color,
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      BRANCH {b.badge}
                    </span>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.2 rounded"
                      style={{ backgroundColor: `${b.color}20`, color: b.color }}
                    >
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white group-hover:text-sky-200 transition-colors">
                    {b.name}
                  </h3>

                  <p className="text-[10px] text-slate-400 max-w-[130px] truncate">
                    {b.subtitle}
                  </p>
                </div>

                <div
                  className="p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: b.color }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          MOBILE & TABLET RESPONSIVE BRANCHES GRID
         ======================================================== */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
        {branches.map((b) => {
          const Icon = b.icon;
          const isSelected = selectedBranchId === b.id;

          return (
            <button
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 border-sky-400 ring-1 ring-sky-400'
                  : 'bg-[#0B132B]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${b.color}15`,
                    borderColor: `${b.color}40`,
                    color: b.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      BRANCH {b.badge}
                    </span>
                    <span
                      className="text-[10px] font-mono px-1.5 py-0.2 rounded"
                      style={{ backgroundColor: `${b.color}20`, color: b.color }}
                    >
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white">
                    {b.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {b.subtitle}
                  </p>
                </div>
              </div>

              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${b.color}20`, color: b.color }}
              >
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
