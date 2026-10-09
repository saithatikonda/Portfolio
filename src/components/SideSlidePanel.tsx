import { ReactNode, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, GitBranch, Maximize2, Minimize2, Sparkles } from 'lucide-react';

interface SideSlidePanelProps {
  isOpen: boolean;
  activeBranchId: string | null;
  onClose: () => void;
  onSelectBranch: (branchId: string) => void;
  children: ReactNode;
}

export function SideSlidePanel({
  isOpen,
  activeBranchId,
  onClose,
  onSelectBranch,
  children,
}: SideSlidePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 7 Complete Branch definitions for quick navigation
  const branchList = [
    { id: 'about', number: '01', name: 'About Me', color: '#10B981', tag: 'Identity & Mindset' },
    { id: 'skills', number: '02', name: 'Technical Skills', color: '#06B6D4', tag: 'C, Python, Java, DSA' },
    { id: 'projects', number: '03', name: 'Projects', color: '#6366F1', tag: 'Things I Build' },
    { id: 'education', number: '04', name: 'Education', color: '#F59E0B', tag: 'B.Tech CSD' },
    { id: 'hackathons', number: '05', name: 'Hackathons', color: '#F43F5E', tag: 'SIH, Zignasa, Ignia' },
    { id: 'certifications', number: '06', name: 'Certifications', color: '#8B5CF6', tag: 'Credentials' },
    { id: 'contact', number: '07', name: 'Contact', color: '#14B8A6', tag: 'Connect & Inquire' },
  ];

  const currentIndex = branchList.findIndex((b) => b.id === activeBranchId);
  const currentBranch = branchList[currentIndex] || branchList[0];

  const prevBranch = currentIndex > 0 ? branchList[currentIndex - 1] : branchList[branchList.length - 1];
  const nextBranch = currentIndex < branchList.length - 1 ? branchList[currentIndex + 1] : branchList[0];

  // Keyboard navigation: Escape closes, Left/Right arrow keys slide between branches!
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

  if (!isOpen && !activeBranchId) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      
      {/* Translucent Backdrop Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Side Slide Panel (Glides smoothly from the right) */}
      <div
        className={`fixed inset-y-0 right-0 ${
          isExpanded
            ? 'w-full'
            : 'w-full sm:w-[580px] md:w-[680px] lg:w-[780px] xl:w-[860px]'
        } bg-[#0A1020] border-l border-white/[0.12] shadow-2xl flex flex-col z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* ========================================================
            TOP BAR OF SIDE SLIDE
           ======================================================== */}
        <div className="px-5 sm:px-7 py-3.5 bg-[#080D1A] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          
          {/* Branch Title & Indicator */}
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full animate-pulse shadow-md shrink-0"
              style={{ backgroundColor: currentBranch.color }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  BRANCH {currentBranch.number}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  Side Slide
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {currentBranch.name}
              </h2>
            </div>
          </div>

          {/* Controls: Prev/Next & Expand & Close Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onSelectBranch(prevBranch.id)}
              className="p-1.5 px-2 sm:px-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 text-xs font-semibold border border-white/[0.08] transition-colors cursor-pointer flex items-center gap-1"
              title={`Previous: ${prevBranch.name} (←)`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{prevBranch.name}</span>
            </button>

            <button
              onClick={() => onSelectBranch(nextBranch.id)}
              className="p-1.5 px-2 sm:px-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold border border-blue-400/30 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
              title={`Next: ${nextBranch.name} (→)`}
            >
              <span className="hidden md:inline">{nextBranch.name}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Width Toggle (Full width vs Normal side slide) */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hidden lg:flex p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-colors cursor-pointer"
              title={isExpanded ? 'Restore side drawer' : 'Maximize slide'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-white/[0.1] transition-colors cursor-pointer"
              aria-label="Close side slide"
              title="Close side slide (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* ========================================================
            BRANCH JUMP TABS RIBBON
           ======================================================== */}
        <div className="px-5 sm:px-7 py-2.5 bg-[#060A14] border-b border-white/[0.06] flex items-center gap-1.5 overflow-x-auto text-xs font-mono shrink-0 scrollbar-none">
          <span className="text-slate-500 uppercase text-[10px] tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <GitBranch className="w-3 h-3 text-sky-400" />
            Branches:
          </span>
          {branchList.map((b) => {
            const isActive = b.id === activeBranchId;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap text-xs flex items-center gap-1.5 ${
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
                <span>{b.number} {b.name}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            SCROLLABLE CONTENT BODY INSIDE SIDE SLIDE
           ======================================================== */}
        <div
          key={activeBranchId}
          className="flex-1 overflow-y-auto p-4 sm:p-7 overscroll-contain animate-in fade-in slide-in-from-right-4 duration-200"
        >
          {children}
        </div>

        {/* ========================================================
            BOTTOM BAR
           ======================================================== */}
        <div className="px-5 sm:px-7 py-3 bg-[#080D1A] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500">
              Slide {currentIndex + 1} of {branchList.length}
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="hidden sm:inline text-[11px] text-slate-500">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">→</kbd> to switch slides
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer font-medium"
            >
              Back to Tree
            </button>
            <button
              onClick={() => onSelectBranch(nextBranch.id)}
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer flex items-center gap-1"
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
