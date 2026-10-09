import { ChevronLeft, ChevronRight, LayoutList, Columns } from 'lucide-react';

export interface SlideItem {
  id: string;
  label: string;
  number: string;
}

interface SlideNavigationProps {
  slides: SlideItem[];
  currentIndex: number;
  onGoToSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isSlideMode: boolean;
  onToggleMode: () => void;
}

export function SlideNavigation({
  slides,
  currentIndex,
  onGoToSlide,
  onPrev,
  onNext,
  isSlideMode,
  onToggleMode,
}: SlideNavigationProps) {
  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <>
      {/* ========================================================
          1. RIGHT SIDE SLIDE DOCK (Desktop)
         ======================================================== */}
      {isSlideMode && (
        <aside
          aria-label="Slide navigation rail"
          className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 pointer-events-auto"
        >
          <div className="p-2 rounded-2xl bg-[#0B1120]/80 backdrop-blur-md border border-slate-800/80 shadow-2xl flex flex-col gap-2">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => onGoToSlide(idx)}
                  className={`group relative flex items-center justify-end p-2 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/20 text-sky-300 border border-sky-500/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                  aria-label={`Go to slide ${slide.number}: ${slide.label}`}
                  title={`${slide.number}. ${slide.label}`}
                >
                  {/* Hover tooltip label appearing on the left */}
                  <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-700/80 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                    {slide.number}. {slide.label}
                  </span>

                  <span className="text-[11px] font-mono font-bold tracking-tight">
                    {slide.number}
                  </span>

                  <span
                    className={`ml-2 w-1.5 h-4 rounded-full transition-all ${
                      isActive ? 'bg-sky-400 h-6' : 'bg-slate-700 group-hover:bg-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>
      )}

      {/* ========================================================
          2. FLOATING BOTTOM SLIDE CONTROLS BAR (Mobile & Desktop)
         ======================================================== */}
      {isSlideMode && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[94vw] pointer-events-auto">
          <div className="flex items-center gap-2 sm:gap-4 px-3.5 sm:px-5 py-2.5 rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl shadow-black/60">
            
            {/* Slide Index Indicator */}
            <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-slate-800">
              <span className="text-xs sm:text-sm font-mono font-bold text-sky-400">
                {currentSlide.number}
              </span>
              <span className="text-slate-600 text-xs">/</span>
              <span className="text-xs sm:text-sm font-mono text-slate-400">
                0{slides.length}
              </span>
              <span className="hidden md:inline text-xs text-slate-300 font-medium ml-1">
                · {currentSlide.label}
              </span>
            </div>

            {/* Prev & Next Slide Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="p-2 rounded-xl text-slate-200 bg-slate-800/90 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800/90 disabled:cursor-not-allowed border border-slate-700 transition-all cursor-pointer"
                title="Previous Slide (← Arrow key)"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 text-sky-300" />
              </button>

              <button
                onClick={onNext}
                disabled={currentIndex === slides.length - 1}
                className="p-2 rounded-xl text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600 disabled:cursor-not-allowed border border-blue-400/40 transition-all cursor-pointer shadow-sm shadow-blue-900/40"
                title="Next Slide (→ Arrow key)"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Slide Dots for Mobile / Quick tap */}
            <div className="hidden sm:flex items-center gap-1.5 px-2 border-l border-slate-800">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onGoToSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-6 bg-sky-400'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mode Switcher Toggle */}
            <div className="pl-2 sm:pl-3 border-l border-slate-800">
              <button
                onClick={onToggleMode}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Switch to continuous scroll mode"
                aria-label="Switch view mode"
              >
                <LayoutList className="w-4 h-4 text-sky-400" />
                <span className="hidden lg:inline text-xs">Scroll View</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* When in Scroll Mode: Quick return to Side Slides view */}
      {!isSlideMode && (
        <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
          <button
            onClick={onToggleMode}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-blue-900/50 border border-blue-400/40 transition-all cursor-pointer"
            title="Switch to Side Slides Presentation View"
          >
            <Columns className="w-4 h-4 text-sky-200" />
            <span>Switch to Side Slides Mode</span>
          </button>
        </div>
      )}
    </>
  );
}
