import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface InteractiveIntroProps {
  onComplete: () => void;
  customPhotoUrl?: string | null;
}

export function InteractiveIntro({ onComplete }: InteractiveIntroProps) {
  // Phase 1 milestones:
  // Letter 1 ('S') emerges: 100ms
  // Letter 2 ('S') emerges: 550ms
  // Letter 3 ('K') emerges: 1000ms
  // Dot ('.') emerges: 1350ms
  // Phase 2: Assembly / Club into "SSK." + Radiant shockwave: 1600ms - 2200ms
  // Phase 3: Sliding double-door reveal: 2200ms - 3200ms
  // Phase 4: Unmount cleanup: 3300ms
  const [showS1, setShowS1] = useState(false);
  const [showS2, setShowS2] = useState(false);
  const [showK, setShowK] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [isAssembled, setIsAssembled] = useState(false);
  const [showShockwave, setShowShockwave] = useState(false);
  const [isDoorsOpening, setIsDoorsOpening] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Phase 1: Letter-by-Letter fly-in sequence
    const t1 = setTimeout(() => setShowS1(true), 100);
    const t2 = setTimeout(() => setShowS2(true), 550);
    const t3 = setTimeout(() => setShowK(true), 1000);
    const t4 = setTimeout(() => setShowDot(true), 1350);

    // Phase 2: Assembly into "SSK." & Radial shockwave
    const t5 = setTimeout(() => {
      setIsAssembled(true);
      setShowShockwave(true);
    }, 1600);

    // Phase 3: Sliding Double-Door Reveal
    const t6 = setTimeout(() => {
      setIsDoorsOpening(true);
    }, 2200);

    // Phase 4: Fadeout overlay & clean DOM unmount
    const t7 = setTimeout(() => {
      setFadeOut(true);
    }, 3050);

    const t8 = setTimeout(() => {
      onComplete();
    }, 3300);

    // Keyboard ESC to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none transition-opacity duration-300 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      aria-label="Portfolio entrance sequence"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070b14] -z-20" />

      {/* ========================================================
          PHASE 3: SLIDING DOUBLE DOORS (LEFT & RIGHT PANELS)
         ======================================================== */}
      {/* Left Door */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#070b14] border-r border-cyan-500/30 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 shadow-[6px_0_35px_rgba(6,182,212,0.25)] ${
          isDoorsOpening ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_rgba(34,211,238,0.9)]" />

        <div className="relative z-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SSK // SEC-SYS 01
          </span>
        </div>

        <div className="relative z-10 hidden sm:block text-[11px] font-mono text-slate-500">
          <div className="uppercase tracking-widest text-slate-400">PORTFOLIO PORTAL</div>
          <div className="text-cyan-400 font-semibold">
            {isDoorsOpening ? 'GATEWAY: OPEN' : 'STATUS: INITIALIZING'}
          </div>
        </div>

        <div className="relative z-10 text-[10px] font-mono text-slate-500">
          GATEWAY L // 50%
        </div>
      </div>

      {/* Right Door */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#070b14] border-l border-cyan-500/30 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 shadow-[-6px_0_35px_rgba(6,182,212,0.25)] ${
          isDoorsOpening ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_16px_rgba(34,211,238,0.9)]" />

        <div className="relative z-10 flex items-center justify-end gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SSK // SEC-SYS 02
          </span>
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        </div>

        <div className="relative z-10 hidden sm:block text-right text-[11px] font-mono text-slate-500">
          <div className="uppercase tracking-widest text-slate-400">SYSTEM ARCHITECTURE</div>
          <div className="text-cyan-400 font-semibold">CS & DATA SCIENCE</div>
        </div>

        <div className="relative z-10 flex justify-end text-[10px] font-mono text-slate-500">
          GATEWAY R // 50%
        </div>
      </div>

      {/* ========================================================
          CENTER STAGE: LETTER FLY-IN & "SSK." ASSEMBLY
         ======================================================== */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-4 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isDoorsOpening
            ? 'scale-115 opacity-0 pointer-events-none'
            : 'scale-100 opacity-100 pointer-events-auto'
        }`}
      >
        {/* Radial Cyan / Indigo Shockwave Ripple on Assembly */}
        {showShockwave && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer expanding ring */}
            <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-400/80 shadow-[0_0_35px_rgba(34,211,238,0.6)] animate-ping [animation-duration:1s]" />
            {/* Soft radial glow pulse */}
            <div className="absolute w-[260px] h-[260px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/25 to-cyan-400/10 blur-3xl opacity-80 animate-pulse" />
          </div>
        )}

        {/* Brand Lockup Container */}
        <div className="relative flex flex-col items-center justify-center [perspective:1200px]">
          {/* Letters Row */}
          <div
            className={`flex items-baseline font-black tracking-tight select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isAssembled ? 'gap-0 sm:gap-1 tracking-[-0.03em]' : 'gap-3 sm:gap-6'
            }`}
          >
            {/* Letter 1: 'S' */}
            <span
              className={`inline-block text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-b from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-500 ${
                showS1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animation: showS1
                  ? 'letterFlyIn1 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  : 'none',
              }}
            >
              S
            </span>

            {/* Letter 2: 'S' */}
            <span
              className={`inline-block text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-b from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-500 ${
                showS2 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animation: showS2
                  ? 'letterFlyIn2 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  : 'none',
              }}
            >
              S
            </span>

            {/* Letter 3: 'K' */}
            <span
              className={`inline-block text-6xl sm:text-8xl md:text-9xl font-extrabold bg-gradient-to-b from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-500 ${
                showK ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animation: showK
                  ? 'letterFlyIn3 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  : 'none',
              }}
            >
              K
            </span>

            {/* Glowing Cyan Dot: '.' */}
            <span
              className={`inline-block text-6xl sm:text-8xl md:text-9xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_#22d3ee] transition-all duration-300 ${
                showDot ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animation: showDot
                  ? 'dotPulseIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                  : 'none',
              }}
            >
              .
            </span>
          </div>

          {/* Subtitle reveals smoothly upon assembly */}
          <div
            className={`mt-4 sm:mt-6 flex flex-col items-center transition-all duration-500 ease-out ${
              isAssembled
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-3 scale-95'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-md mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:4s]" />
              <span className="tracking-widest">IDENTITY VERIFIED</span>
            </div>

            <h2 className="text-xs sm:text-sm md:text-base font-mono font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-slate-300 uppercase text-center">
              Sai Shiva Kumar
            </h2>

            <p className="text-[10px] sm:text-xs font-mono text-cyan-400/80 tracking-wider mt-1 text-center">
              Computer Science & Data Science
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          SKIP BUTTON (Quick Escape for Repeat/Fast Visits)
         ======================================================== */}
      <button
        type="button"
        onClick={onComplete}
        className="fixed top-6 right-6 z-30 px-3.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 text-[10px] sm:text-xs font-mono font-semibold transition-all cursor-pointer backdrop-blur-md shadow-lg"
      >
        SKIP [ESC]
      </button>

      {/* 3D Keyframe Perspective Animations for Letters */}
      <style>{`
        @keyframes letterFlyIn1 {
          0% {
            opacity: 0;
            transform: translate3d(-70px, 30px, -240px) scale(0.35) rotateY(-45deg) rotateX(25deg);
            filter: blur(14px);
          }
          65% {
            opacity: 1;
            transform: translate3d(6px, -4px, 35px) scale(1.15) rotateY(10deg) rotateX(-5deg);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1) rotateY(0deg) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes letterFlyIn2 {
          0% {
            opacity: 0;
            transform: translate3d(0, 80px, -240px) scale(0.35) rotateX(50deg);
            filter: blur(14px);
          }
          65% {
            opacity: 1;
            transform: translate3d(0, -6px, 35px) scale(1.15) rotateX(-10deg);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes letterFlyIn3 {
          0% {
            opacity: 0;
            transform: translate3d(70px, 30px, -240px) scale(0.35) rotateY(45deg) rotateX(25deg);
            filter: blur(14px);
          }
          65% {
            opacity: 1;
            transform: translate3d(-6px, -4px, 35px) scale(1.15) rotateY(-10deg) rotateX(-5deg);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1) rotateY(0deg) rotateX(0deg);
            filter: blur(0px);
          }
        }

        @keyframes dotPulseIn {
          0% {
            opacity: 0;
            transform: scale(0);
            filter: drop-shadow(0 0 0 rgba(34, 211, 238, 0));
          }
          50% {
            opacity: 1;
            transform: scale(1.6);
            filter: drop-shadow(0 0 25px #22d3ee);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 0 16px #22d3ee);
          }
        }
      `}</style>
    </div>
  );
}
