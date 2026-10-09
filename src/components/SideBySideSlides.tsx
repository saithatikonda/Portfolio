import { useRef, useEffect, useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Sparkles,
  Columns,
  Grid,
  Maximize2,
  Minimize2,
  Compass,
  Wrench,
  FolderGit2,
  GraduationCap,
  Trophy,
  Award,
  Mail
} from 'lucide-react';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { CertificationsHackathons } from './CertificationsHackathons';
import { Contact } from './Contact';
import { ProjectItem } from '../data/portfolioData';

interface SideBySideSlidesProps {
  activeBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export interface SlideConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  glow: string;
  icon: any;
}

export function SideBySideSlides({
  activeBranchId,
  onSelectBranch,
  onSelectProject,
}: SideBySideSlidesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScroll = useRef(false);

  // View modes: 'side-by-side' (horizontal deck where slides sit side by side)
  // 'grid' (multi-column side by side view)
  const [layoutMode, setLayoutMode] = useState<'side-by-side' | 'grid'>('side-by-side');

  const slides: SlideConfig[] = [
    {
      id: 'about',
      number: '01',
      title: 'About Me',
      subtitle: 'Building skills through code & challenges',
      color: '#10B981',
      glow: 'rgba(16, 185, 129, 0.4)',
      icon: Compass,
    },
    {
      id: 'skills',
      number: '02',
      title: 'Technical Skills',
      subtitle: 'C, Python, Java, DSA, DBMS, Arduino',
      color: '#06B6D4',
      glow: 'rgba(6, 182, 212, 0.4)',
      icon: Wrench,
    },
    {
      id: 'projects',
      number: '03',
      title: 'Projects Showcase',
      subtitle: 'Things I am building & engineering',
      color: '#6366F1',
      glow: 'rgba(99, 102, 241, 0.4)',
      icon: FolderGit2,
    },
    {
      id: 'education',
      number: '04',
      title: 'Academic Foundation',
      subtitle: 'Computer Science & Data Science (CSD)',
      color: '#F59E0B',
      glow: 'rgba(245, 158, 11, 0.4)',
      icon: GraduationCap,
    },
    {
      id: 'hackathons',
      number: '05',
      title: 'Hackathons & Events',
      subtitle: 'SIH, Zignasa, Ignia, SAE Competitions',
      color: '#F43F5E',
      glow: 'rgba(244, 63, 94, 0.4)',
      icon: Trophy,
    },
    {
      id: 'certifications',
      number: '06',
      title: 'Certifications',
      subtitle: 'Verified credentials & technology badges',
      color: '#8B5CF6',
      glow: 'rgba(139, 92, 246, 0.4)',
      icon: Award,
    },
    {
      id: 'contact',
      number: '07',
      title: 'Contact & Connect',
      subtitle: 'Direct messaging, inquiries & networking',
      color: '#14B8A6',
      glow: 'rgba(20, 184, 166, 0.4)',
      icon: Mail,
    },
  ];

  const currentIndex = slides.findIndex((s) => s.id === activeBranchId);
  const activeSlide = slides[currentIndex >= 0 ? currentIndex : 0];

  // Scroll horizontal container to a specific slide smoothly
  const scrollToSlide = useCallback((slideId: string) => {
    if (!containerRef.current || layoutMode !== 'side-by-side') return;
    const targetElement = document.getElementById(`side-slide-${slideId}`);
    if (targetElement) {
      isProgrammaticScroll.current = true;
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 600);
    }
  }, [layoutMode]);

  // When activeBranchId changes externally (e.g. from Tree of Branches or Navbar), scroll to it
  useEffect(() => {
    scrollToSlide(activeBranchId);
  }, [activeBranchId, scrollToSlide]);

  // Track horizontal scroll position to sync active branch when user swipes/scrolls
  useEffect(() => {
    const container = containerRef.current;
    if (!container || layoutMode !== 'side-by-side') return;

    let timeoutId: any = null;
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const centerPos = scrollLeft + containerWidth / 2;

        let closestId = slides[0].id;
        let closestDist = Infinity;

        slides.forEach((s) => {
          const el = document.getElementById(`side-slide-${s.id}`);
          if (el) {
            const elCenter = el.offsetLeft + el.offsetWidth / 2;
            const dist = Math.abs(centerPos - elCenter);
            if (dist < closestDist) {
              closestDist = dist;
              closestId = s.id;
            }
          }
        });

        if (closestId !== activeBranchId) {
          onSelectBranch(closestId);
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [activeBranchId, onSelectBranch, layoutMode, slides]);

  // Keyboard navigation: Left/Right arrows glide between side-by-side slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % slides.length;
        onSelectBranch(slides[nextIdx].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
        onSelectBranch(slides[prevIdx].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onSelectBranch, slides]);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % slides.length;
    onSelectBranch(slides[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length;
    onSelectBranch(slides[prevIdx].id);
  };

  // Render individual slide component
  const renderSlideContent = (slideId: string) => {
    switch (slideId) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects onSelectProject={onSelectProject} />;
      case 'education':
        return <Education />;
      case 'hackathons':
        return <CertificationsHackathons focusSection="hackathons" />;
      case 'certifications':
        return <CertificationsHackathons focusSection="certifications" />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section id="side-slides" className="w-full relative py-8 scroll-mt-20 flex flex-col">
      
      {/* ========================================================
          TOP HEADER: SLIDE CONTROLLER & JUMP TABS
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#090F1E]/95 border border-slate-800 shadow-xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Active Slide Info */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2.5">
              <span
                className="w-3.5 h-3.5 rounded-full animate-pulse shadow-md shrink-0"
                style={{ backgroundColor: activeSlide.color }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    SLIDE {activeSlide.number} OF 0{slides.length}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                    <Columns className="w-3 h-3 text-sky-400" />
                    Side-by-Side Slides
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {activeSlide.title}
                </h3>
              </div>
            </div>

            {/* Layout Mode Switch (Mobile / Tablet) */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={() => setLayoutMode(layoutMode === 'side-by-side' ? 'grid' : 'side-by-side')}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {layoutMode === 'side-by-side' ? <Grid className="w-4 h-4" /> : <Columns className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Center: Branch Quick Jump Tabs Ribbon */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto max-w-xl py-1 scrollbar-none">
            {slides.map((s) => {
              const isActive = s.id === activeBranchId;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectBranch(s.id)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-800 text-white font-bold border shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  style={{
                    borderColor: isActive ? s.color : 'transparent',
                    color: isActive ? s.color : undefined,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.number} {s.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Prev / Next Slide Controls & Mode Toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={handlePrev}
              className="p-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
              title="Previous slide (←)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            <button
              onClick={handleNext}
              className="p-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold border border-blue-400/40 transition-colors cursor-pointer flex items-center gap-1 shadow-md shadow-blue-900/40"
              title="Next slide (→)"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Layout Mode Switch (Desktop) */}
            <button
              onClick={() => setLayoutMode(layoutMode === 'side-by-side' ? 'grid' : 'side-by-side')}
              className="hidden md:flex p-2 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono border border-slate-800 transition-colors cursor-pointer items-center gap-1.5"
              title={layoutMode === 'side-by-side' ? 'Show all slides in grid' : 'Show horizontal side-by-side slides'}
            >
              {layoutMode === 'side-by-side' ? (
                <>
                  <Grid className="w-3.5 h-3.5 text-sky-400" />
                  <span>Grid</span>
                </>
              ) : (
                <>
                  <Columns className="w-3.5 h-3.5 text-sky-400" />
                  <span>Side Slides</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================
          SIDE BY SIDE SLIDES CONTAINER
         ======================================================== */}
      {layoutMode === 'side-by-side' ? (
        /* HORIZONTAL SLIDE TRACK (Slides arranged side by side horizontally) */
        <div className="relative w-full overflow-hidden">
          
          {/* Subtle Side Fade Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0B1120] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0B1120] to-transparent z-20 pointer-events-none" />

          {/* Horizontal Track */}
          <div
            ref={containerRef}
            className="flex flex-row items-stretch gap-6 sm:gap-8 px-4 sm:px-12 md:px-20 py-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin"
            style={{ scrollPadding: '0 24px' }}
          >
            {slides.map((s, idx) => {
              const isActive = s.id === activeBranchId;
              const Icon = s.icon;

              return (
                <div
                  key={s.id}
                  id={`side-slide-${s.id}`}
                  className={`w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[68vw] xl:w-[62vw] max-w-5xl shrink-0 snap-center rounded-3xl bg-[#0A1020]/95 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl relative ${
                    isActive
                      ? 'border-sky-500/50 ring-2 ring-sky-500/20 shadow-sky-950/60 scale-[1.005]'
                      : 'border-slate-800/80 opacity-85 hover:opacity-100 hover:border-slate-700'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 20px 40px -15px ${s.glow}` : undefined,
                  }}
                >
                  {/* Top Slide Header Ribbon */}
                  <div className="px-6 py-4 bg-[#080D18] border-b border-white/[0.08] flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center border shrink-0"
                        style={{
                          backgroundColor: `${s.color}15`,
                          borderColor: `${s.color}40`,
                          color: s.color,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-slate-400">
                            BRANCH {s.number}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span
                            className="text-[10px] font-mono font-bold uppercase"
                            style={{ color: s.color }}
                          >
                            Slide {idx + 1} of {slides.length}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-extrabold text-white">
                          {s.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-xs font-mono text-slate-400">
                        {s.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Slide Content Body */}
                  <div className="flex-1 p-4 sm:p-8 overflow-y-auto max-h-[75vh]">
                    {renderSlideContent(s.id)}
                  </div>

                  {/* Bottom Slide Footer Ribbon */}
                  <div className="px-6 py-3 bg-[#080D18] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 shrink-0">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                      <span className="font-mono text-[11px]">Side-by-Side Slide Deck</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {idx > 0 && (
                        <button
                          onClick={() => onSelectBranch(slides[idx - 1].id)}
                          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>{slides[idx - 1].title}</span>
                        </button>
                      )}
                      {idx < slides.length - 1 && (
                        <button
                          onClick={() => onSelectBranch(slides[idx + 1].id)}
                          className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>{slides[idx + 1].title}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Dot Navigator */}
          <div className="flex items-center justify-center gap-2 mt-4 pb-2">
            {slides.map((s, idx) => {
              const isActive = s.id === activeBranchId;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectBranch(s.id)}
                  className={`transition-all rounded-full cursor-pointer ${
                    isActive ? 'w-8 h-2.5 bg-sky-400 shadow-md shadow-sky-500/50' : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  style={{
                    backgroundColor: isActive ? s.color : undefined,
                  }}
                  title={`Go to slide ${s.number}: ${s.title}`}
                  aria-label={`Go to slide ${s.number}`}
                />
              );
            })}
          </div>

        </div>
      ) : (
        /* MULTI-COLUMN GRID VIEW (All slides shown side by side in responsive columns) */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {slides.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeBranchId;

            return (
              <div
                key={s.id}
                id={`grid-slide-${s.id}`}
                className={`rounded-3xl bg-[#0A1020]/95 border overflow-hidden shadow-2xl flex flex-col justify-between transition-all ${
                  isActive
                    ? 'border-sky-500/50 ring-2 ring-sky-500/20'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div className="px-6 py-4 bg-[#080D18] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${s.color}15`,
                        borderColor: `${s.color}40`,
                        color: s.color,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        BRANCH {s.number}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {s.title}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {s.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {renderSlideContent(s.id)}
                </div>
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
