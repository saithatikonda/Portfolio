import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Book, ArrowLeft, ArrowRight, CornerDownRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { SlideItem } from './SlideNavigation';

interface NotebookPageSpreadProps {
  children: ReactNode;
  slides: SlideItem[];
  currentIndex: number;
  onGoToSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onCloseBook: () => void;
  isFlipping: boolean;
  flipDirection: 'next' | 'prev';
}

export function NotebookPageSpread({
  children,
  slides,
  currentIndex,
  onGoToSlide,
  onPrev,
  onNext,
  onCloseBook,
  isFlipping,
  flipDirection,
}: NotebookPageSpreadProps) {
  const { isLight } = useTheme();
  const currentSlide = slides[currentIndex] || slides[0];

  // Tab colors for attractive visual hierarchy
  const tabColors = [
    { bg: 'bg-blue-600', text: 'text-blue-100', activeBg: 'bg-blue-500' },
    { bg: 'bg-sky-600', text: 'text-sky-100', activeBg: 'bg-sky-500' },
    { bg: 'bg-indigo-600', text: 'text-indigo-100', activeBg: 'bg-indigo-500' },
    { bg: 'bg-cyan-600', text: 'text-cyan-100', activeBg: 'bg-cyan-500' },
    { bg: 'bg-teal-600', text: 'text-teal-100', activeBg: 'bg-teal-500' },
    { bg: 'bg-violet-600', text: 'text-violet-100', activeBg: 'bg-violet-500' },
    { bg: 'bg-emerald-600', text: 'text-emerald-100', activeBg: 'bg-emerald-500' },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[calc(100vh-80px)] min-h-[580px] p-2 sm:p-4 md:p-6 flex items-center justify-center perspective-2000">
      
      {/* Outer Notebook Desk Mat / Ambient Shadow */}
      <div className="relative w-full h-full flex flex-col md:flex-row rounded-3xl overflow-visible shadow-2xl preserve-3d">
        
        {/* ========================================================
            LEFT SPIRAL BINDING SPINE
           ======================================================== */}
        <div
          className={`hidden md:flex w-12 sm:w-14 h-full shrink-0 flex-col items-center justify-around py-8 z-30 rounded-l-2xl border-r shadow-inner ${
            isLight
              ? 'bg-slate-200 border-slate-300'
              : 'bg-slate-900 border-slate-800'
          }`}
        >
          {/* Spiral Ring Loops along the spine */}
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="relative flex items-center justify-center w-full my-1">
              {/* Left Punch Hole */}
              <div className="w-2.5 h-3.5 rounded-full bg-slate-900/60 shadow-inner -ml-2" />
              
              {/* Metallic Ring Loop Wire */}
              <div
                className={`w-9 h-3 rounded-full border-2 shadow-md transform -rotate-12 ${
                  isLight
                    ? 'bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 border-slate-400'
                    : 'bg-gradient-to-r from-slate-600 via-slate-300 to-slate-700 border-slate-600'
                }`}
              />
              
              {/* Right Punch Hole */}
              <div className="w-2.5 h-3.5 rounded-full bg-slate-900/40 shadow-inner -mr-2" />
            </div>
          ))}
        </div>

        {/* ========================================================
            MAIN NOTEBOOK PAGE BODY
           ======================================================== */}
        <div
          className={`relative flex-1 h-full rounded-2xl md:rounded-l-none md:rounded-r-2xl overflow-hidden flex flex-col transition-all duration-500 preserve-3d notebook-page-shadow ${
            isLight
              ? 'bg-white page-grid-light text-slate-800'
              : 'bg-[#111827] page-grid-dark text-slate-100'
          } ${
            isFlipping
              ? flipDirection === 'next'
                ? 'transform -rotate-y-6 scale-[0.98] opacity-75'
                : 'transform rotate-y-6 scale-[0.98] opacity-75'
              : 'transform rotate-y-0 scale-100 opacity-100'
          }`}
        >
          {/* Inner Spine Crease Shadow along the left of the page */}
          <div
            className={`hidden md:block absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 ${
              isLight
                ? 'bg-gradient-to-r from-black/10 via-black/3 to-transparent'
                : 'bg-gradient-to-r from-black/50 via-black/20 to-transparent'
            }`}
          />

          {/* Top Page Running Header & Book Controls */}
          <div
            className={`px-4 sm:px-8 py-3.5 border-b flex items-center justify-between z-10 shrink-0 ${
              isLight
                ? 'bg-white/90 backdrop-blur-md border-slate-200'
                : 'bg-slate-900/90 backdrop-blur-md border-slate-800'
            }`}
          >
            {/* Left: Close Cover Button & Slide Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={onCloseBook}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
                title="Close notebook cover"
              >
                <Book className="w-3.5 h-3.5 text-sky-500" />
                <span className="hidden sm:inline">Cover View</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="font-bold text-sky-600 dark:text-sky-400">
                  {currentSlide.number}
                </span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-400 font-semibold">
                  0{slides.length}
                </span>
                <span className="font-bold text-slate-700 dark:text-slate-200 hidden sm:inline ml-1">
                  · {currentSlide.label}
                </span>
              </div>
            </div>

            {/* Right: Quick Page Flip Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
                title="Previous Page (← Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden md:inline text-xs">Prev</span>
              </button>

              <button
                onClick={onNext}
                disabled={currentIndex === slides.length - 1}
                className="p-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                title="Next Page (→ Arrow)"
              >
                <span className="hidden md:inline text-xs">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================
              SMOOTH INNER SCROLLABLE CONTENT BODY
             ======================================================== */}
          <div className="relative flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8 overscroll-contain">
            {children}
          </div>

          {/* Bottom Page Footer Bar inside notebook */}
          <div
            className={`px-4 sm:px-8 py-3 border-t flex items-center justify-between text-xs font-mono z-10 shrink-0 ${
              isLight
                ? 'bg-slate-50/80 border-slate-200 text-slate-500'
                : 'bg-slate-900/80 border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Thatikonda Sai Shiva Kumar · CSD Journal</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">
                Scroll smooth or use ← → arrow keys
              </span>
              <span className="font-bold text-sky-600 dark:text-sky-400">
                Page {currentIndex + 1} of {slides.length}
              </span>
            </div>
          </div>

          {/* Dog-Ear Corner Turn Indicator (Bottom Right) */}
          {currentIndex < slides.length - 1 && (
            <button
              onClick={onNext}
              className={`absolute bottom-0 right-0 w-10 h-10 flex items-end justify-end p-1 transition-all cursor-pointer z-30 group ${
                isLight ? 'hover:scale-110' : 'hover:scale-110'
              }`}
              title="Click corner to flip to next page"
            >
              <div
                className={`w-0 h-0 border-t-[20px] border-l-[20px] border-t-transparent border-l-transparent drop-shadow-md ${
                  isLight
                    ? 'border-r-[20px] border-b-[20px] border-r-blue-600 border-b-blue-600'
                    : 'border-r-[20px] border-b-[20px] border-r-sky-500 border-b-sky-500'
                }`}
              />
            </button>
          )}

        </div>

        {/* ========================================================
            RIGHT SIDE INDEX TABS (PROTRUDING OUTSIDE NOTEBOOK)
           ======================================================== */}
        <aside
          aria-label="Notebook section tabs"
          className="hidden lg:flex flex-col justify-center gap-2.5 -mr-5 z-40 my-auto py-4"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const tabColor = tabColors[idx % tabColors.length];
            return (
              <button
                key={slide.id}
                onClick={() => onGoToSlide(idx)}
                className={`group flex items-center pl-3.5 pr-2.5 py-2 rounded-r-xl font-mono text-xs font-bold transition-all duration-200 shadow-md cursor-pointer ${
                  isActive
                    ? `${tabColor.activeBg} text-white translate-x-2 shadow-lg ring-2 ring-white/40`
                    : `${tabColor.bg} ${tabColor.text} hover:translate-x-1.5 opacity-90 hover:opacity-100`
                }`}
                title={`Turn to ${slide.number}. ${slide.label}`}
              >
                <span className="tracking-tight">{slide.number}</span>
                <span className="hidden xl:inline ml-1.5 text-[11px] font-sans font-semibold tracking-normal uppercase">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </aside>

      </div>
    </div>
  );
}
