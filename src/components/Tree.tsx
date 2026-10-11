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
  Camera,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface TreeBranchDef {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  categoryNumber: string;
  color: string;
  glow: string;
  icon: any;
  pos: { x: number; y: number };
  mainPath: string;
  tendrilPath?: string;
  tags: string[];
}

interface TreeProps {
  onSelectBranch: (branchId: string) => void;
  activeBranchId: string | null;
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
  isDrawerOpen?: boolean;
}

export function Tree({
  onSelectBranch,
  activeBranchId,
  onOpenPhotoModal,
  customPhotoUrl,
  isDrawerOpen = false,
}: TreeProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // 7 Branch Definitions strictly aligned with requirements
  const branches: TreeBranchDef[] = [
    {
      id: 'about',
      name: 'About Me',
      shortName: 'About',
      subtitle: 'Mindset & Core Pillars',
      categoryNumber: '01',
      color: '#10B981', // Emerald
      glow: 'rgba(16, 185, 129, 0.55)',
      icon: Compass,
      pos: { x: 190, y: 440 },
      mainPath: 'M 540 470 C 430 480, 310 465, 190 440',
      tendrilPath: 'M 380 475 C 310 510, 240 500, 190 440',
      tags: ['Engineering Mindset', 'Systems Curiosity', 'Problem Solving'],
    },
    {
      id: 'skills',
      name: 'Technical Skills',
      shortName: 'Skills',
      subtitle: 'C, Python, Java, DSA, DBMS',
      categoryNumber: '02',
      color: '#06B6D4', // Cyan
      glow: 'rgba(6, 182, 212, 0.55)',
      icon: Wrench,
      pos: { x: 150, y: 250 },
      mainPath: 'M 545 425 C 410 420, 270 320, 150 250',
      tendrilPath: 'M 350 380 C 270 340, 200 310, 150 250',
      tags: ['C / Python / Java', 'DSA & Complexity', 'DBMS / SQL', 'Arduino IoT'],
    },
    {
      id: 'projects',
      name: 'Projects Showcase',
      shortName: 'Projects',
      subtitle: 'DSA Visualizer, DBMS, IoT',
      categoryNumber: '03',
      color: '#6366F1', // Indigo
      glow: 'rgba(99, 102, 241, 0.55)',
      icon: FolderGit2,
      pos: { x: 290, y: 100 },
      mainPath: 'M 545 380 C 450 320, 360 210, 290 100',
      tendrilPath: 'M 430 300 C 370 230, 330 170, 290 100',
      tags: ['DSA Visualizer', 'DBMS Analytics', 'Arduino Telemetry'],
    },
    {
      id: 'education',
      name: 'Education & Foundation',
      shortName: 'Education',
      subtitle: 'B.Tech in CS & Data Science',
      categoryNumber: '04',
      color: '#F59E0B', // Amber
      glow: 'rgba(245, 158, 11, 0.55)',
      icon: GraduationCap,
      pos: { x: 550, y: 65 },
      mainPath: 'M 550 380 C 550 270, 550 160, 550 65',
      tendrilPath: 'M 550 250 C 530 190, 520 130, 550 65',
      tags: ['B.Tech CSD', 'Core Computing Theory', 'Data Analysis'],
    },
    {
      id: 'hackathons',
      name: 'Hackathons & Events',
      shortName: 'Hackathons',
      subtitle: 'SIH, Zignasa, Ignia, SAE',
      categoryNumber: '05',
      color: '#F43F5E', // Crimson
      glow: 'rgba(244, 63, 94, 0.55)',
      icon: Trophy,
      pos: { x: 810, y: 100 },
      mainPath: 'M 555 380 C 650 320, 740 210, 810 100',
      tendrilPath: 'M 670 300 C 730 230, 770 170, 810 100',
      tags: ['Smart India Hackathon', 'Zignasa', 'Ignia', 'Rapid Sprints'],
    },
    {
      id: 'certifications',
      name: 'Certifications',
      shortName: 'Certs',
      subtitle: 'Verified Credentials & Badges',
      categoryNumber: '06',
      color: '#8B5CF6', // Violet
      glow: 'rgba(139, 92, 246, 0.55)',
      icon: Award,
      pos: { x: 950, y: 250 },
      mainPath: 'M 555 425 C 690 420, 830 320, 950 250',
      tendrilPath: 'M 750 380 C 830 340, 900 310, 950 250',
      tags: ['DSA Verified', 'Database Systems', 'Course Badges'],
    },
    {
      id: 'contact',
      name: 'Contact & Connect',
      shortName: 'Contact',
      subtitle: 'Direct Messaging & Links',
      categoryNumber: '07',
      color: '#14B8A6', // Teal
      glow: 'rgba(20, 184, 166, 0.55)',
      icon: Mail,
      pos: { x: 910, y: 440 },
      mainPath: 'M 560 470 C 670 480, 790 465, 910 440',
      tendrilPath: 'M 720 475 C 790 510, 860 500, 910 440',
      tags: ['Direct Email', 'GitHub Repo', 'LinkedIn Profile'],
    },
  ];

  return (
    <section
      id="tree"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center transition-all duration-500 ease-out"
    >
      {/* Background Bioluminescent Nebula Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Screen 2 Header */}
      <div className="relative z-10 text-center mb-6 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0B1528]/80 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-950/40 mb-3 backdrop-blur-md">
          <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Cyber-Tree Hub</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Knowledge & Project Tree
        </h2>

        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl mx-auto">
          Click any branch to smoothly slide in its full details from the side.
        </p>
      </div>

      {/* ========================================================
          DESKTOP & TABLET BIOLUMINESCENT CYBER-TREE CANVAS
         ======================================================== */}
      <div
        className={`relative hidden md:block w-full h-[620px] rounded-3xl bg-[#070c18]/90 border border-white/[0.09] shadow-2xl backdrop-blur-xl p-4 overflow-hidden transition-all duration-500 ease-out ${
          isDrawerOpen ? 'lg:-translate-x-28 lg:scale-[0.96]' : ''
        }`}
      >
        {/* Subtle Cybernetic Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        {/* Bioluminescent SVG Tree Structure */}
        <svg
          viewBox="0 0 1100 620"
          className="w-full h-full overflow-visible pointer-events-none select-none"
        >
          <defs>
            {/* Trunk Gradient */}
            <linearGradient id="cyberTrunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="35%" stopColor="#1E3A8A" />
              <stop offset="70%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            {/* Root Energy Gradient */}
            <linearGradient id="rootEnergyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>

            {/* Intense Neon Filter */}
            <filter id="intenseNeon" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur1" />
              <feGaussianBlur stdDeviation="10" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Subtle Neon Filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ========================================================
              INTERTWINING ENERGY ROOTS (Branching downward from root)
             ======================================================== */}
          <g opacity="0.6">
            <path
              d="M 550 540 C 530 570, 480 585, 430 605"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeDasharray="4 8"
              className="animate-cyber-flow"
            />
            <path
              d="M 550 540 C 540 575, 510 595, 490 615"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="5 10"
              className="animate-cyber-flow"
            />
            <path
              d="M 550 540 C 560 575, 590 595, 610 615"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="5 10"
              className="animate-cyber-flow"
            />
            <path
              d="M 550 540 C 570 570, 620 585, 670 605"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeDasharray="4 8"
              className="animate-cyber-flow"
            />
          </g>

          {/* ========================================================
              CENTRAL BIOLUMINESCENT TRUNK & INTERTWINING FIBERS
             ======================================================== */}
          {/* Main solid trunk */}
          <path
            d="M 525 545 Q 550 460 550 380 Q 550 460 575 545 Z"
            fill="url(#cyberTrunkGrad)"
            opacity="0.9"
            filter="url(#softGlow)"
          />

          {/* Left intertwined fiber */}
          <path
            d="M 535 540 C 520 480, 540 430, 546 380"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />

          {/* Right intertwined fiber */}
          <path
            d="M 565 540 C 580 480, 560 430, 554 380"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />

          {/* Central Trunk Light Pulse Flow */}
          <path
            d="M 550 540 L 550 380"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="8 14"
            className="animate-cyber-flow"
            filter="url(#intenseNeon)"
          />

          {/* ========================================================
              7 ORGANIC CYBERNETIC LIMBS & FLOWING PARTICLES
             ======================================================== */}
          {branches.map((b) => {
            const isHovered = hoveredNode === b.id;
            const isActive = activeBranchId === b.id;
            const isHighlighted = isHovered || isActive;

            return (
              <g key={b.id} className="transition-all duration-300">
                {/* Secondary Tendril / Branching Splinter */}
                {b.tendrilPath && (
                  <path
                    d={b.tendrilPath}
                    fill="none"
                    stroke={b.color}
                    strokeWidth={isHighlighted ? '2' : '1.2'}
                    strokeOpacity={isHighlighted ? '0.6' : '0.25'}
                    strokeDasharray="4 8"
                  />
                )}

                {/* Outer Glow Halo Path */}
                <path
                  d={b.mainPath}
                  fill="none"
                  stroke={b.color}
                  strokeWidth={isHighlighted ? '8' : '3.5'}
                  strokeOpacity={isHighlighted ? '0.95' : '0.4'}
                  filter="url(#intenseNeon)"
                  className="transition-all duration-300"
                />

                {/* Core Branch Line */}
                <path
                  d={b.mainPath}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={isHighlighted ? '2.5' : '1.5'}
                  strokeOpacity={isHighlighted ? '0.95' : '0.6'}
                  className="transition-all duration-300"
                />

                {/* Animated Bioluminescent Light Pulse Stream (Upward to Tip) */}
                <path
                  d={b.mainPath}
                  fill="none"
                  stroke={b.color}
                  strokeWidth={isHighlighted ? '4' : '2.5'}
                  strokeDasharray="8 16"
                  className={isHighlighted ? 'animate-cyber-flow-fast' : 'animate-cyber-flow'}
                />

                {/* Continuous Moving Bioluminescent Pulse Circle along Path */}
                <circle r={isHighlighted ? '4.5' : '3'} fill="#FFFFFF" filter="url(#intenseNeon)">
                  <animateMotion
                    path={b.mainPath}
                    dur={isHighlighted ? '1.8s' : '2.8s'}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Leaf Node Endpoint at Tip */}
                <circle
                  cx={b.pos.x}
                  cy={b.pos.y}
                  r={isHighlighted ? '10' : '6.5'}
                  fill={b.color}
                  filter="url(#intenseNeon)"
                  className="transition-all duration-300"
                />
                <circle
                  cx={b.pos.x}
                  cy={b.pos.y}
                  r={isHighlighted ? '4.5' : '2.5'}
                  fill="#FFFFFF"
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* ========================================================
            BOTTOM ANCHOR: GLOWING ROOT / TRUNK CAPSULE
           ======================================================== */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
          <div className="p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-2xl shadow-cyan-950/90">
            <div className="px-5 py-3 rounded-[14px] bg-[#0A1124] border border-cyan-500/30 text-center flex items-center gap-3.5 backdrop-blur-xl">
              {/* Avatar Portrait / Monogram */}
              <div className="relative w-11 h-11 rounded-full bg-cyan-500/20 border-2 border-cyan-400/60 flex items-center justify-center font-black text-cyan-300 text-sm shrink-0 overflow-hidden group shadow-md shadow-cyan-950/60">
                {customPhotoUrl ? (
                  <img
                    src={customPhotoUrl}
                    alt="Sai Shiva Kumar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>SSK</span>
                )}
                <button
                  onClick={onOpenPhotoModal}
                  className="absolute inset-0 bg-slate-950/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Upload Portrait"
                >
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>

              {/* Trunk Info */}
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    ROOT / TRUNK
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-semibold text-emerald-400">
                    Open to Opportunities
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white">
                  {PORTFOLIO_DATA.personal.fullName}
                </h3>
                <p className="text-[11px] text-slate-300 font-mono">
                  {PORTFOLIO_DATA.personal.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            7 POSITIONED BRANCH CARDS (Anchored to limb tips)
           ======================================================== */}
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
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer group shadow-2xl ${
                isActive
                  ? 'bg-[#0B1528] border-white ring-2 ring-white/80 scale-105'
                  : 'bg-[#0B1324]/95 border-white/[0.08] hover:border-white/30 hover:scale-105'
              }`}
              style={{
                left: `${(b.pos.x / 1100) * 100}%`,
                top: `${(b.pos.y / 620) * 100}%`,
                boxShadow:
                  isHovered || isActive
                    ? `0 14px 35px -5px ${b.glow}, 0 0 20px -2px ${b.glow}`
                    : undefined,
                borderColor: isHovered || isActive ? b.color : undefined,
              }}
              aria-label={`Open branch: ${b.name}`}
            >
              <div className="flex items-center gap-3">
                {/* Branch Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shrink-0"
                  style={{
                    backgroundColor: `${b.color}18`,
                    borderColor: `${b.color}50`,
                    color: b.color,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Branch Content */}
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
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

                  <h3 className="text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {b.name}
                  </h3>

                  <p className="text-[10px] text-slate-400 max-w-[130px] truncate mt-0.5">
                    {b.subtitle}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="p-1 rounded-lg opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-1"
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
          MOBILE RESPONSIVE CYBER-TREE LIST
         ======================================================== */}
      <div className="w-full md:hidden relative">
        {/* Vertical Glowing Trunk Spine */}
        <div className="absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] z-0" />

        <div className="space-y-3.5 relative z-10 pl-1">
          {branches.map((b) => {
            const Icon = b.icon;
            const isActive = activeBranchId === b.id;

            return (
              <div key={b.id} className="relative flex items-center gap-3">
                {/* Branch Node Point on Trunk */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border shadow-lg transition-transform"
                  style={{
                    backgroundColor: isActive ? b.color : '#0B1324',
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
                      ? 'bg-slate-900 border-cyan-400 ring-2 ring-cyan-400/50 shadow-xl'
                      : 'bg-[#0B1324]/95 border-white/[0.08] hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
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

        {/* Mobile Root Capsule */}
        <div className="mt-6 p-4 rounded-2xl bg-[#0A1124] border border-cyan-500/30 text-center flex items-center gap-3.5 shadow-xl">
          <div className="relative w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center font-bold text-cyan-300 text-xs shrink-0 overflow-hidden">
            {customPhotoUrl ? (
              <img src={customPhotoUrl} alt="Sai Shiva Kumar" className="w-full h-full object-cover" />
            ) : (
              <span>SSK</span>
            )}
          </div>
          <div className="text-left flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase">
                ROOT / TRUNK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[9px] text-emerald-400 font-semibold">Open to Opportunities</span>
            </div>
            <h4 className="text-xs font-bold text-white">{PORTFOLIO_DATA.personal.fullName}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
