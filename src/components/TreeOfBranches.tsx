import { useState } from 'react';
import {
  Compass,
  Wrench,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail,
  User,
  Sparkles,
  ArrowRight,
  GitBranch,
  Layers,
  FileText,
  Camera
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TREE_BRANCHES, BranchNode } from '../data/treeData';

interface TreeOfBranchesProps {
  onSelectBranch: (branchId: string) => void;
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
}

export function TreeOfBranches({
  onSelectBranch,
  onOpenResume,
  onOpenPhotoModal,
  customPhotoUrl,
}: TreeOfBranchesProps) {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  const getBranchIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'User':
        return <User className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      case 'FolderGit2':
        return <FolderGit2 className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'Trophy':
        return <Trophy className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Mail':
        return <Mail className={className} />;
      default:
        return <GitBranch className={className} />;
    }
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Background Ambient Bio-Luminescent Radiance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-teal-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ========================================================
          1. CENTRAL TRUNK & ROOT NODE (SAI SHIVA KUMAR)
         ======================================================== */}
      <div className="relative z-10 w-full max-w-2xl mb-12 sm:mb-16 text-center flex flex-col items-center">
        
        {/* Core Trunk Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 text-sky-300 border border-sky-500/30 shadow-lg shadow-sky-950/40 mb-4 backdrop-blur-md">
          <GitBranch className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span>Knowledge & Career Tree · CSD Undergraduate</span>
        </div>

        {/* Central Root Avatar & Title Container */}
        <div className="relative group p-1 rounded-3xl bg-gradient-to-b from-sky-400/40 via-blue-600/30 to-purple-600/40 shadow-2xl shadow-blue-950/60">
          <div className="rounded-[22px] bg-[#0A1128]/95 backdrop-blur-xl border border-slate-700/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            
            {/* Trunk Avatar / Monogram */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-sky-400/50 shadow-inner flex items-center justify-center bg-slate-900 group">
              {customPhotoUrl ? (
                <img
                  src={customPhotoUrl}
                  alt="Sai Shiva Kumar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2">
                  <span className="text-2xl sm:text-3xl font-black text-sky-300 tracking-wider">
                    SSK
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Root Node</span>
                </div>
              )}

              <button
                onClick={onOpenPhotoModal}
                className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"
                title="Change Photo"
              >
                <Camera className="w-5 h-5 text-sky-400 mb-1" />
                <span className="text-[10px] font-semibold text-sky-200">Change</span>
              </button>
            </div>

            {/* Trunk Info */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  {PORTFOLIO_DATA.personal.statusBadge}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h1>

              <p className="text-sm font-semibold text-sky-300 mt-1">
                {PORTFOLIO_DATA.personal.role}
              </p>

              <p className="text-xs text-slate-300 max-w-md mt-2 leading-relaxed">
                Click any of the branching categories below to smoothly open its specialized portfolio view.
              </p>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/40 transition-all cursor-pointer shadow-sm shadow-blue-900/30"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>

                <button
                  onClick={() => onSelectBranch('projects')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>View Projects</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Stem Indicator Line downwards */}
        <div className="w-0.5 h-10 bg-gradient-to-b from-sky-400 via-blue-500 to-transparent mt-2" />
        <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest mt-1">
          Explore Branches Below ↓
        </span>
      </div>

      {/* ========================================================
          2. THE TREE OF BRANCHES (CATEGORIES GRID)
         ======================================================== */}
      <div className="relative w-full max-w-6xl">
        
        {/* Branch Cards Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TREE_BRANCHES.map((branch, index) => {
            const isHovered = hoveredBranch === branch.id;

            return (
              <div
                key={branch.id}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
                onClick={() => onSelectBranch(branch.id)}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden transform hover:-translate-y-1.5 ${
                  branch.color.bg
                } ${
                  isHovered
                    ? `${branch.color.border} shadow-2xl scale-[1.02]`
                    : 'border-slate-800/80 shadow-lg'
                } bg-[#0A1128]/90 backdrop-blur-md`}
                style={{
                  boxShadow: isHovered
                    ? `0 15px 35px -10px ${branch.color.glow}, 0 0 15px -2px ${branch.color.glow}`
                    : undefined,
                }}
              >
                {/* Glowing Top Arc Indicator */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${branch.color.gradient} transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-40'
                  }`}
                />

                {/* Branch Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Branch Number & Icon */}
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 ${
                        branch.color.badgeBg
                      } ${branch.color.border} ${branch.color.text}`}
                    >
                      {getBranchIcon(branch.iconName)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-slate-300">
                        BRANCH {branch.categoryNumber}
                      </span>
                      <div
                        className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: branch.color.primary }}
                      />
                    </div>
                  </div>

                  {/* Branch Title */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-white transition-colors tracking-tight">
                    {branch.name}
                  </h3>

                  <p
                    className="text-xs font-semibold mt-1 font-mono tracking-tight"
                    style={{ color: branch.color.primary }}
                  >
                    {branch.tagline}
                  </p>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
                    {branch.description}
                  </p>
                </div>

                {/* Sub-Leaves / Blooming Tags */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {branch.leaves.map((leaf) => (
                      <span
                        key={leaf}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        🌿 {leaf}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Open Trigger */}
                  <div className="flex items-center justify-between pt-1 text-xs font-semibold">
                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                      Unfold Branch
                    </span>
                    <span
                      className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-1"
                      style={{ color: branch.color.primary }}
                    >
                      <span>Open View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Hint */}
      <div className="mt-12 text-center text-xs text-slate-400 font-mono flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-sky-400" />
        <span>Press any branch category above to smoothly explore its details</span>
      </div>

    </section>
  );
}
