import { ReactNode } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, GitBranch, Sparkles } from 'lucide-react';
import { TREE_BRANCHES, BranchNode } from '../data/treeData';

interface BranchDetailViewProps {
  branchId: string;
  onBackToTree: () => void;
  onSelectBranch: (branchId: string) => void;
  children: ReactNode;
}

export function BranchDetailView({
  branchId,
  onBackToTree,
  onSelectBranch,
  children,
}: BranchDetailViewProps) {
  const currentIndex = TREE_BRANCHES.findIndex((b) => b.id === branchId);
  const currentBranch = TREE_BRANCHES[currentIndex] || TREE_BRANCHES[0];

  const prevBranch = currentIndex > 0 ? TREE_BRANCHES[currentIndex - 1] : TREE_BRANCHES[TREE_BRANCHES.length - 1];
  const nextBranch = currentIndex < TREE_BRANCHES.length - 1 ? TREE_BRANCHES[currentIndex + 1] : TREE_BRANCHES[0];

  return (
    <div className="w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col animate-in fade-in zoom-in-95 duration-300">
      
      {/* ========================================================
          STICKY TOP BRANCH BREADCRUMB & SWITCHER BAR
         ======================================================== */}
      <div className="sticky top-16 z-30 mb-8 p-3 sm:p-4 rounded-2xl bg-[#0A1128]/95 backdrop-blur-xl border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Back to Tree + Branch Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={onBackToTree}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-sky-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer shadow-sm hover:border-sky-500/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tree Overview</span>
          </button>

          {/* Current Branch Capsule */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: currentBranch.color.primary }}
            />
            <span className="text-xs font-mono font-bold text-slate-400">
              BRANCH {currentBranch.categoryNumber}:
            </span>
            <span
              className="text-xs font-bold font-sans"
              style={{ color: currentBranch.color.primary }}
            >
              {currentBranch.name}
            </span>
          </div>
        </div>

        {/* Center: Branch Mini Quick-Switch Ribbon */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-xl py-1">
          {TREE_BRANCHES.map((b) => {
            const isActive = b.id === branchId;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {b.shortName}
              </button>
            );
          })}
        </div>

        {/* Right: Prev & Next Branch Controls */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={() => onSelectBranch(prevBranch.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            title={`Go to ${prevBranch.name}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{prevBranch.shortName}</span>
          </button>

          <button
            onClick={() => onSelectBranch(nextBranch.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/40 transition-colors cursor-pointer shadow-sm shadow-blue-900/40"
            title={`Go to ${nextBranch.name}`}
          >
            <span className="hidden sm:inline">{nextBranch.shortName}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* ========================================================
          BRANCH CONTENT CONTAINER
         ======================================================== */}
      <div className="flex-1 w-full rounded-3xl bg-[#0B1120]/90 border border-slate-800/90 shadow-2xl p-4 sm:p-8 relative overflow-hidden">
        
        {/* Subtle Ambient Radial Highlight matching the branch color */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
          style={{ backgroundColor: currentBranch.color.primary }}
        />

        {children}

        {/* Bottom Branch Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-sky-400" />
            <span>
              Currently viewing Branch {currentBranch.categoryNumber}: <strong className="text-white">{currentBranch.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onBackToTree}
              className="text-sky-400 hover:text-sky-300 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Full Tree</span>
            </button>

            <button
              onClick={() => onSelectBranch(nextBranch.id)}
              className="text-white hover:text-sky-300 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              <span>Next: {nextBranch.name}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
