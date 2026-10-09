import { BookOpen, Sparkles, ChevronRight, Award, Code2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NotebookCoverProps {
  onOpen: () => void;
  isOpening: boolean;
}

export function NotebookCover({ onOpen, isOpening }: NotebookCoverProps) {
  const { isLight } = useTheme();
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="relative w-full max-w-2xl mx-auto my-auto p-4 sm:p-6 perspective-2000">
      
      {/* 3D Book Cover Card */}
      <div
        className={`relative w-full rounded-3xl p-8 sm:p-12 transition-all duration-700 preserve-3d shadow-2xl cursor-pointer group ${
          isOpening ? 'animate-notebook-open opacity-0 pointer-events-none' : 'hover:scale-[1.01]'
        } ${
          isLight
            ? 'bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-white border-2 border-sky-400/40 shadow-blue-900/30'
            : 'bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#020617] text-white border-2 border-sky-500/30 shadow-sky-950/60'
        }`}
        onClick={onOpen}
      >
        {/* Metal Corner Protectors (Top Left, Top Right, Bottom Left, Bottom Right) */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-sky-400/70 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-sky-400/70 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-sky-400/70 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-sky-400/70 rounded-br-lg" />

        {/* Notebook Spine Crease / Binding Line on Left */}
        <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-gradient-to-r from-slate-900 via-sky-400/30 to-slate-900 opacity-80" />

        {/* Header Kicker */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/60 ml-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-sky-400 uppercase">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            <span>Developer Journal · Vol. 2026</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-300 text-[11px] font-mono">
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span>Interactive Notebook</span>
          </div>
        </div>

        {/* Center Emblem */}
        <div className="flex flex-col items-center text-center my-6 ml-4">
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-sky-400/20 to-blue-600/40 border-2 border-sky-400/50 flex items-center justify-center mb-6 shadow-xl shadow-sky-950/50 group-hover:border-sky-300 group-hover:scale-105 transition-all">
            <span className="text-3xl font-black tracking-widest text-white drop-shadow-md">
              SSK
            </span>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-400 animate-ping opacity-75" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-400" />
          </div>

          {/* Embossed Author Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
              {personal.fullName}
            </span>
          </h1>

          <p className="text-sm sm:text-base font-semibold text-sky-300 mb-4 tracking-wide font-mono">
            {personal.role}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
            A curated portfolio documenting software engineering, data science exploration, algorithm visualizations, and hackathon projects.
          </p>

          {/* Quick Core Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['C', 'Python', 'Java', 'DSA', 'DBMS', 'Arduino', 'Hackathons'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-200 border border-slate-700/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Primary "Open Notebook" CTA Button */}
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-xl shadow-blue-900/50 border border-blue-400/50 group-hover:shadow-blue-500/40 transition-all cursor-pointer transform group-hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5 text-sky-200" />
            <span>Open Portfolio Notebook</span>
            <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-slate-400 mt-3 font-mono">
            Click anywhere to open cover & turn pages
          </p>
        </div>

        {/* Bottom Bookmark Ribbon Tab */}
        <div className="absolute -bottom-5 right-12 w-8 h-10 bg-gradient-to-b from-blue-600 to-sky-500 rounded-b-md shadow-lg shadow-black/40 flex items-end justify-center pb-1">
          <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white/40" />
        </div>

      </div>
    </div>
  );
}
