import { ReactNode } from 'react';
import { X, ChevronLeft, ChevronRight, GitBranch, ArrowUpRight } from 'lucide-react';
import { TREE_BRANCHES } from '../data/treeData';

interface BranchStageModalProps {
  branchId: string | null;
  onClose: () => void;
  onSelectBranch: (branchId: string) => void;
  children: ReactNode;
}

export function BranchStageModal({
  branchId,
  onClose,
  onSelectBranch,
  children,
}: BranchStageModalProps) {
  if (!branchId) return null;

  const currentIndex = TREE_BRANCHES.findIndex((b) => b.id === branchId);
  const currentBranch = TREE_BRANCHES[currentIndex] || TREE_BRANCHES[0];

  const prevBranch = currentIndex > 0 ? TREE_BRANCHES[currentIndex - 1] : TREE_BRANCHES[TREE_BRANCHES.length - 1];
  const nextBranch = currentIndex < TREE_BRANCHES.length - 1 ? TREE_BRANCHES[currentIndex + 1] : TREE_BRANCHES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090F1E] border border-slate-700/80 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#0A1226] border-b border-slate-800">
          
          {/* Branch Title & Color Tag */}
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full animate-pulse shadow-md"
              style={{ backgroundColor: currentBranch.color.primary }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  BRANCH {currentBranch.categoryNumber}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-semibold text-slate-300">
                  {currentBranch.tagline}
                </span>
              </div>
              <h2
                className="text-lg sm:text-xl font-extrabold"
                style={{ color: currentBranch.color.primary }}
              >
                {currentBranch.name}
              </h2>
            </div>
          </div>

          {/* Controls: Prev/Next + Close */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              <button
                onClick={() => onSelectBranch(prevBranch.id)}
                className="p-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
                title={`Previous: ${prevBranch.name}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Branch</span>
              </button>

              <button
                onClick={() => onSelectBranch(nextBranch.id)}
                className="p-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold border border-blue-400/30 transition-colors cursor-pointer flex items-center gap-1"
                title={`Next: ${nextBranch.name}`}
              >
                <span>Next Branch</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-700"
              aria-label="Close branch modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Quick Branch Navigation Ribbon */}
        <div className="px-5 sm:px-7 py-2 bg-[#070D1A] border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 uppercase text-[10px] tracking-wider shrink-0 mr-1">
            Jump to branch:
          </span>
          {TREE_BRANCHES.map((b) => {
            const isActive = b.id === branchId;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap text-xs ${
                  isActive
                    ? 'bg-slate-800 font-bold border'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
                style={{
                  color: isActive ? b.color.primary : undefined,
                  borderColor: isActive ? b.color.primary : 'transparent',
                }}
              >
                {b.shortName}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 overscroll-contain">
          {children}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-5 sm:px-7 py-3 bg-[#0A1226] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-sky-400" />
            <span>Interactive Tree Category View</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
            >
              Close & View Full Tree
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
