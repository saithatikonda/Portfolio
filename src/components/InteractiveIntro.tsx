import { useState, useEffect } from 'react';
import { MousePointer, Sparkles, Fingerprint, ShieldCheck } from 'lucide-react';

interface InteractiveIntroProps {
  onComplete: () => void;
  customPhotoUrl?: string | null;
}

export function InteractiveIntro({ onComplete, customPhotoUrl }: InteractiveIntroProps) {
  // Stages:
  // 1: Initial setup - prominent corner badge & cursor gliding from center to corner (0.0s - 0.9s)
  // 2: Touch / Trigger - click ripple effect & card glides/expands to center (0.9s - 1.6s)
  // 3: Sliding mall doors split apart (1.6s - 2.5s)
  // 4: Name & Portfolio Reveal (2.5s - 3.4s)
  // 5: Fadeout & unmount (3.4s - 3.8s)
  const [stage, setStage] = useState<number>(1);
  const [cursorClicked, setCursorClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [imageError, setImageError] = useState(false);

  const profileSrc = customPhotoUrl || '/profile.jpg';

  useEffect(() => {
    // Stage 1 -> 2: Cursor touches corner badge at 900ms
    const t1 = setTimeout(() => {
      setCursorClicked(true);
      setStage(2);
    }, 900);

    // Stage 2 -> 3: Sliding mall doors split at 1600ms
    const t2 = setTimeout(() => {
      setStage(3);
    }, 1600);

    // Stage 3 -> 4: Name & Portfolio Reveal at 2500ms
    const t3 = setTimeout(() => {
      setStage(4);
    }, 2500);

    // Stage 4 -> 5: Fadeout overlay at 3400ms
    const t4 = setTimeout(() => {
      setFadeOut(true);
    }, 3400);

    // Stage 5 cleanup: Completely unmount at 3800ms
    const t5 = setTimeout(() => {
      onComplete();
    }, 3800);

    // Keyboard escape to skip
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
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Handle direct click on corner card to advance immediately
  const handleCardClick = () => {
    if (stage === 1) {
      setCursorClicked(true);
      setStage(2);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[90] overflow-hidden select-none transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      aria-label="Interactive portfolio intro"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070b14] -z-20" />

      {/* ========================================================
          STAGE 3: SLIDING MALL DOORS (LEFT & RIGHT SHUTTERS)
         ======================================================== */}
      {/* Left Shutter */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#060913] border-r border-cyan-500/40 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 ${
          stage >= 3 ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        <div className="relative z-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SEC-SYS // 01-ALPHA
          </span>
        </div>

        <div className="relative z-10 hidden sm:block text-[11px] font-mono text-slate-500">
          <div className="uppercase tracking-widest">PORTAL PROTOCOL</div>
          <div className="text-cyan-400 font-semibold">
            {stage >= 3 ? 'STATUS: ACCESS GRANTED' : 'STATUS: BIOMETRIC SCAN'}
          </div>
        </div>

        <div className="relative z-10 text-[10px] font-mono text-slate-500">
          GATEWAY L-BAY // 50%
        </div>
      </div>

      {/* Right Shutter */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#060913] border-l border-cyan-500/40 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 ${
          stage >= 3 ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        <div className="relative z-10 flex items-center justify-end gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SEC-SYS // 02-BETA
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>

        <div className="relative z-10 hidden sm:block text-right text-[11px] font-mono text-slate-500">
          <div className="uppercase tracking-widest">IDENTITY RECOGNITION</div>
          <div className="text-cyan-400 font-semibold">CS & DATA SCIENCE</div>
        </div>

        <div className="relative z-10 flex justify-end text-[10px] font-mono text-slate-500">
          GATEWAY R-BAY // 50%
        </div>
      </div>

      {/* ========================================================
          STAGE 1 & 2: CORNER BADGE (100% VISIBLE) -> EXPANDS TO CENTER
         ======================================================== */}
      <div
        onClick={handleCardClick}
        className={`fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          stage === 1
            ? 'top-6 left-6 translate-x-0 translate-y-0 scale-100 cursor-pointer flex flex-col items-start'
            : stage >= 4
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-0 pointer-events-none flex flex-col items-center'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 flex flex-col items-center'
        }`}
      >
        {/* Contact Touch Ripple on badge when cursor strikes */}
        {cursorClicked && stage === 2 && (
          <div className="absolute inset-0 -m-8 rounded-full border-2 border-cyan-400 animate-ping opacity-80 pointer-events-none" />
        )}

        {/* Stage 1: Prominent Glowing Badge above the Avatar */}
        {stage === 1 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#060913]/95 border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-extrabold tracking-wider text-cyan-300 uppercase whitespace-nowrap">
              CLICK / TOUCH IDENTITY
            </span>
          </div>
        )}

        {/* Card Body: Transforms from prominent corner avatar to full Engineering ID Card */}
        <div
          className={`relative transition-all duration-700 ${
            stage === 1
              ? 'p-0 bg-transparent border-0'
              : 'p-6 sm:p-7 rounded-2xl bg-[#0b0f1d]/95 backdrop-blur-2xl border-2 border-cyan-400/80 shadow-[0_0_45px_rgba(34,211,238,0.5)] w-[88vw] max-w-[340px] sm:max-w-[380px] flex flex-col items-center text-center'
          }`}
        >
          {/* Ambient Card Glow when in center */}
          {stage >= 2 && (
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-600/20 rounded-2xl blur-lg -z-10" />
          )}

          {/* Profile Avatar: Size w-20 h-20 (mobile) / w-24 h-24 (sm+), distinct high-contrast border and neon pulse */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div
              className={`relative rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-700 ${
                stage === 1
                  ? 'w-20 h-20 sm:w-24 sm:h-24 animate-pulse'
                  : 'w-24 h-24 sm:w-28 sm:h-28 mb-3'
              }`}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={profileSrc}
                    alt="Sai Shiva Kumar"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-cyan-950 text-cyan-300 font-mono font-bold text-xs">
                    <ShieldCheck className="w-6 h-6 text-cyan-400 mb-0.5" />
                    <span>SSK</span>
                  </div>
                )}
              </div>
            </div>

            {/* Rotating Orbit Halo when expanded in center */}
            {stage >= 2 && (
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin [animation-duration:12s]" />
            )}
          </div>

          {/* Expanded Engineering ID Details (Stages 2 & 3) */}
          {stage >= 2 && (
            <div className="w-full mt-2 animate-in fade-in duration-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-950/80 border border-cyan-400/60 text-cyan-300 mb-2">
                <Fingerprint className="w-3.5 h-3.5 text-cyan-400" />
                <span>BIOMETRIC ACCESS GRANTED</span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                Thatikonda Sai Shiva Kumar
              </h3>

              <p className="text-[11px] sm:text-xs font-mono text-cyan-400 mt-0.5">
                Undergraduate Engineer // CS & Data Science
              </p>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PORTAL AUTH</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          STAGE 1: ANIMATED POINTER ARROW (FROM CENTER TO CORNER)
         ======================================================== */}
      {stage === 1 && (
        <div
          className={`fixed z-[110] pointer-events-none transition-opacity duration-200 ${
            cursorClicked ? 'opacity-0 scale-75' : 'opacity-100'
          }`}
          style={{
            animation: 'cursorGlide 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        >
          <div className="relative">
            <MousePointer className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-cyan-400 drop-shadow-[0_0_8px_#38bdf8] drop-shadow-[0_0_16px_rgba(56,189,248,0.7)]" />
            <span className="absolute left-9 top-0.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-[#060913]/95 text-cyan-300 border border-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.6)] whitespace-nowrap">
              TARGET // IDENTITY
            </span>
          </div>
        </div>
      )}

      {/* ========================================================
          STAGE 4: BOLD ILLUMINATED NAME & PORTFOLIO REVEAL
         ======================================================== */}
      {stage >= 4 && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in-95 duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-950/80 border border-cyan-400/60 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.5)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:3s]" />
            <span>PORTFOLIO SYSTEM LIVE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]">
            Thatikonda Sai Shiva Kumar
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-mono text-cyan-300 font-semibold tracking-wide mt-2">
            Undergraduate Engineer // CS & Data Science
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-4 font-mono">
            Unveiling Cyber-Tree & Technical Showcase...
          </p>
        </div>
      )}

      {/* ========================================================
          SKIP BUTTON (Clean user escape hatch)
         ======================================================== */}
      <button
        type="button"
        onClick={onComplete}
        className="fixed top-6 right-6 z-[120] px-3.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 text-[10px] sm:text-xs font-mono font-semibold transition-all cursor-pointer backdrop-blur-md shadow-lg"
      >
        SKIP INTRO [ESC]
      </button>

      {/* Keyframe animation: Arrow glides smoothly from screen center straight to corner card */}
      <style>{`
        @keyframes cursorGlide {
          0% {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          85% {
            top: 5.75rem;
            left: 4rem;
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
          100% {
            top: 5.75rem;
            left: 4rem;
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 1;
          }
        }
        @media (min-width: 640px) {
          @keyframes cursorGlide {
            0% {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0;
            }
            12% {
              opacity: 1;
            }
            85% {
              top: 6.25rem;
              left: 4.5rem;
              transform: translate(-50%, -50%) scale(1.15);
              opacity: 1;
            }
            100% {
              top: 6.25rem;
              left: 4.5rem;
              transform: translate(-50%, -50%) scale(0.9);
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  );
}
