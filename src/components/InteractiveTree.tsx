import { useState } from 'react';
import {
  Compass,
  Wrench,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail,
  Sparkles,
  ArrowRight,
  GitBranch,
  FileText,
  Camera
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface TreeNode {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  categoryNumber: string;
  color: string;
  glow: string;
  icon: any;
  pos: { x: number; y: number };
  ctrl: { cx1: number; cy1: number; cx2: number; cy2: number };
  tags: string[];
}

interface InteractiveTreeProps {
  onSelectBranch: (branchId: string) => void;
  activeBranchId: string | null;
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
}

export function InteractiveTree({
  onSelectBranch,
  activeBranchId,
  onOpenResume,
  onOpenPhotoModal,
  customPhotoUrl,
}: InteractiveTreeProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // 7 Distinct Branch Definitions with organic curved coordinates & vibrant colors
  const branches: TreeNode[] = [
    {
      id: 'about',
      name: 'About Me',
      shortName: 'About',
      subtitle: 'Code, challenges & engineering mindset',
      categoryNumber: '01',
      color: '#10B981', // Emerald
      glow: 'rgba(16, 185, 129, 0.45)',
      icon: Compass,
      pos: { x: 190, y: 350 },
      ctrl: { cx1: 430, cy1: 460, cx2: 260, cy2: 410 },
      tags: ['Systems Mindset', 'Data-Driven Apps', 'Core Pillars'],
    },
    {
      id: 'skills',
      name: 'Technical Skills',
      shortName: 'Skills',
      subtitle: 'C, Python, Java, DSA, DBMS, Arduino',
      categoryNumber: '02',
      color: '#06B6D4', // Cyan
      glow: 'rgba(6, 182, 212, 0.45)',
      icon: Wrench,
      pos: { x: 140, y: 200 },
      ctrl: { cx1: 410, cy1: 390, cx2: 210, cy2: 260 },
      tags: ['C / Python / Java', 'DSA & Complexity', 'DBMS / SQL', 'Arduino IoT'],
    },
    {
      id: 'projects',
      name: 'Projects Showcase',
      shortName: 'Projects',
      subtitle: 'DSA Visualizer, DBMS Engine, Arduino IoT',
      categoryNumber: '03',
      color: '#6366F1', // Indigo
      glow: 'rgba(99, 102, 241, 0.45)',
      icon: FolderGit2,
      pos: { x: 300, y: 85 },
      ctrl: { cx1: 450, cy1: 330, cx2: 330, cy2: 175 },
      tags: ['DSA Visualizer', 'DBMS Analytics', 'Arduino Telemetry'],
    },
    {
      id: 'education',
      name: 'Education & Foundation',
      shortName: 'Education',
      subtitle: 'B.Tech in Computer Science & Data Science',
      categoryNumber: '04',
      color: '#F59E0B', // Amber
      glow: 'rgba(245, 158, 11, 0.45)',
      icon: GraduationCap,
      pos: { x: 500, y: 55 },
      ctrl: { cx1: 500, cy1: 310, cx2: 500, cy2: 140 },
      tags: ['B.Tech CSD', 'Core Coursework', 'Academic Timeline'],
    },
    {
      id: 'hackathons',
      name: 'Hackathons & Events',
      shortName: 'Hackathons',
      subtitle: 'SIH, Zignasa, Ignia, SAE Competitions',
      categoryNumber: '05',
      color: '#F43F5E', // Rose
      glow: 'rgba(244, 63, 94, 0.45)',
      icon: Trophy,
      pos: { x: 700, y: 85 },
      ctrl: { cx1: 550, cy1: 330, cx2: 670, cy2: 175 },
      tags: ['Smart India Hackathon', 'Zignasa', 'Ignia', 'SAE Engineering'],
    },
    {
      id: 'certifications',
      name: 'Certifications',
      shortName: 'Certs',
      subtitle: 'Coursework credentials & verified badges',
      categoryNumber: '06',
      color: '#8B5CF6', // Purple
      glow: 'rgba(139, 92, 246, 0.45)',
      icon: Award,
      pos: { x: 860, y: 200 },
      ctrl: { cx1: 590, cy1: 390, cx2: 790, cy2: 260 },
      tags: ['DSA Verification', 'DBMS Architecture', 'Course Credentials'],
    },
    {
      id: 'contact',
      name: 'Contact & Connect',
      shortName: 'Contact',
      subtitle: 'Email, GitHub, LinkedIn & direct messaging',
      categoryNumber: '07',
      color: '#14B8A6', // Teal
      glow: 'rgba(20, 184, 166, 0.45)',
      icon: Mail,
      pos: { x: 810, y: 350 },
      ctrl: { cx1: 570, cy1: 460, cx2: 740, cy2: 410 },
      tags: ['Direct Email', 'GitHub Repo', 'LinkedIn Profile', 'Message Form'],
    },
  ];

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-teal-500/10 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Banner Tag */}
      <div className="relative z-10 text-center mb-8 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-900/90 text-sky-300 border border-sky-500/30 shadow-lg shadow-sky-950/40 mb-3 backdrop-blur-md">
          <GitBranch className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span>Interactive Tree of Branches · Press Branch to Slide Out</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Knowledge & Project Tree
        </h1>

        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl mx-auto">
          Every branch represents a pillar of my background. Click any branch to smoothly slide in its full details from the side.
        </p>
      </div>

      {/* ========================================================
          DESKTOP & TABLET SVG TREE CANVAS (Visible Organic Branching)
         ======================================================== */}
      <div className="relative hidden md:block w-full h-[580px] rounded-3xl bg-[#090F1E]/90 border border-slate-800 shadow-2xl backdrop-blur-xl p-4 overflow-hidden mb-8">
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

        <svg
          viewBox="0 0 1000 560"
          className="w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            <linearGradient id="treeTrunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="40%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Trunk Base */}
          <path
            d="M 480 540 Q 500 480 500 440 Q 500 480 520 540 Z"
            fill="url(#treeTrunkGrad)"
            opacity="0.95"
          />

          {/* Organic Branch Limbs to each node */}
          {branches.map((b) => {
            const isHovered = hoveredNode === b.id || activeBranchId === b.id;
            return (
              <g key={b.id}>
                {/* Outer Glow Path */}
                <path
                  d={`M 500 460 C ${b.ctrl.cx1} ${b.ctrl.cy1}, ${b.ctrl.cx2} ${b.ctrl.cy2}, ${b.pos.x} ${b.pos.y}`}
                  fill="none"
                  stroke={b.color}
                  strokeWidth={isHovered ? '6' : '3'}
                  strokeOpacity={isHovered ? '0.95' : '0.45'}
                  filter="url(#glowEffect)"
                  className="transition-all duration-300"
                />

                {/* Animated Energy Particles along branch */}
                <path
                  d={`M 500 460 C ${b.ctrl.cx1} ${b.ctrl.cy1}, ${b.ctrl.cx2} ${b.ctrl.cy2}, ${b.pos.x} ${b.pos.y}`}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={isHovered ? '2.5' : '1.5'}
                  strokeDasharray="6 14"
                  strokeOpacity={isHovered ? '0.95' : '0.35'}
                  className="animate-pulse"
                />

                {/* Leaf Node Endpoint */}
                <circle
                  cx={b.pos.x}
                  cy={b.pos.y}
                  r={isHovered ? '9' : '6'}
                  fill={b.color}
                  className="transition-all duration-300"
                  filter="url(#glowEffect)"
                />
              </g>
            );
          })}
        </svg>

        {/* Central Trunk Root Node (Thatikonda Sai Shiva Kumar) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 shadow-2xl shadow-blue-950/80">
            <div className="px-5 py-3.5 rounded-[14px] bg-[#0A1128] border border-slate-700 text-center flex items-center gap-3.5">
              
              {/* Photo or Monogram */}
              <div className="relative w-12 h-12 rounded-xl bg-blue-600/25 border border-sky-400/50 flex items-center justify-center font-black text-sky-300 text-base shrink-0 overflow-hidden group">
                {customPhotoUrl ? (
                  <img src={customPhotoUrl} alt="Sai Shiva Kumar" className="w-full h-full object-cover" />
                ) : (
                  <span>SSK</span>
                )}
                <button
                  onClick={onOpenPhotoModal}
                  className="absolute inset-0 bg-slate-950/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Upload Photo"
                >
                  <Camera className="w-4 h-4 text-sky-400" />
                </button>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">
                    Root Trunk
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-semibold text-emerald-400">Open to Opportunities</span>
                </div>
                <h2 className="text-sm font-extrabold text-white">
                  {PORTFOLIO_DATA.personal.fullName}
                </h2>
                <p className="text-[11px] text-slate-300 font-mono">
                  {PORTFOLIO_DATA.personal.role}
                </p>
              </div>

              <button
                onClick={onOpenResume}
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/30 transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

            </div>
          </div>
        </div>

        {/* Positioned Branch Cards (Desktop) */}
        {branches.map((b) => {
          const Icon = b.icon;
          const isActive = activeBranchId === b.id;
          const isHovered = hoveredNode === b.id;

          return (
            <button
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              onMouseEnter={() => setHoveredNode(b.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer group shadow-xl ${
                isActive
                  ? 'bg-slate-900 border-white ring-2 scale-105'
                  : 'bg-[#0B132B]/95 border-slate-800 hover:border-slate-600 hover:scale-105'
              }`}
              style={{
                left: `${(b.pos.x / 1000) * 100}%`,
                top: `${(b.pos.y / 560) * 100}%`,
                boxShadow: isHovered || isActive ? `0 12px 30px -5px ${b.glow}` : undefined,
                borderColor: isHovered || isActive ? b.color : undefined,
              }}
              aria-label={`Open branch: ${b.name}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
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
                      BRANCH {b.categoryNumber}
                    </span>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                      style={{ backgroundColor: `${b.color}20`, color: b.color }}
                    >
                      {b.shortName}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-white group-hover:text-sky-200 transition-colors">
                    {b.name}
                  </h3>

                  <p className="text-[10px] text-slate-400 max-w-[140px] truncate mt-0.5">
                    {b.subtitle}
                  </p>
                </div>

                <div
                  className="p-1 rounded-lg opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  style={{ color: b.color }}
                >
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          );
        })}

      </div>

      {/* ========================================================
          MOBILE VERTICAL BRANCHING TREE (Clear Tree on Mobile)
         ======================================================== */}
      <div className="w-full md:hidden relative mb-12">
        {/* Vertical Glowing Trunk Spine */}
        <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] z-0" />

        <div className="space-y-4 relative z-10 pl-1">
          {branches.map((b) => {
            const Icon = b.icon;
            const isActive = activeBranchId === b.id;

            return (
              <div key={b.id} className="relative flex items-center gap-3">
                {/* Branch Node Point on Trunk */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border shadow-lg transition-transform"
                  style={{
                    backgroundColor: isActive ? b.color : '#0B132B',
                    borderColor: b.color,
                    color: isActive ? '#FFFFFF' : b.color,
                    boxShadow: `0 0 14px ${b.glow}`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Branch Card Button */}
                <button
                  onClick={() => onSelectBranch(b.id)}
                  className={`flex-1 p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-sky-400 ring-2 ring-sky-400/50 shadow-xl'
                      : 'bg-[#0B132B]/95 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        BRANCH {b.categoryNumber}
                      </span>
                      <span
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                        style={{ backgroundColor: `${b.color}20`, color: b.color }}
                      >
                        {b.shortName}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white">
                      {b.name}
                    </h3>

                    <p className="text-[11px] text-slate-400">
                      {b.subtitle}
                    </p>
                  </div>

                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ml-2"
                    style={{ backgroundColor: `${b.color}20`, color: b.color }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
