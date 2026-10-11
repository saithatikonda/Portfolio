import { useState, useEffect } from 'react';
import { MousePointer, Sparkles, Fingerprint, ShieldCheck } from 'lucide-react';

interface InteractiveIntroProps {
  onComplete: () => void;
  customPhotoUrl?: string | null;
}

export function InteractiveIntro({ onComplete, customPhotoUrl }: InteractiveIntroProps) {
  // Stages:
  // 1: Initial setup - corner badge & cursor gliding (0.0s - 0.8s)
  // 2: Contact ripple & card expansion to center (0.8s - 1.5s)
  // 3: Sliding mall doors split apart (1.5s - 2.4s)
  // 4: Name & Portfolio Reveal (2.4s - 3.2s)
  // 5: Fadeout & unmount (3.2s - 3.6s)
  const [stage, setStage] = useState<number>(1);
  const [cursorClicked, setCursorClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [imageError, setImageError] = useState(false);

  const profileSrc = customPhotoUrl || '/profile.jpg';

  useEffect(() => {
    // Stage 1 -> 2: Cursor touches badge at 800ms
    const t1 = setTimeout(() => {
      setCursorClicked(true);
      setStage(2);
    }, 800);

    // Stage 2 -> 3: Sliding mall doors split at 1500ms
    const t2 = setTimeout(() => {
      setStage(3);
    }, 1500);

    // Stage 3 -> 4: Name & Portfolio Reveal at 2400ms
    const t3 = setTimeout(() => {
      setStage(4);
    }, 2400);

    // Stage 4 -> 5: Fadeout overlay at 3200ms
    const t4 = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    // Stage 5 cleanup: Completely unmount at 3600ms
    const t5 = setTimeout(() => {
      onComplete();
    }, 3600);

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

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none transition-opacity duration-500 ${
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
          STAGE 1 & 2: CORNER BADGE -> CENTER ENGINEERING ID CARD
         ======================================================== */}
      <div
        className={`absolute z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          stage === 1
            ? 'top-5 left-5 sm:top-8 sm:left-8 translate-x-0 translate-y-0 scale-90 sm:scale-100'
            : stage >= 4
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-0 pointer-events-none'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100'
        }`}
      >
        {/* Contact Touch Ripple on badge when cursor strikes */}
        {cursorClicked && stage === 2 && (
          <div className="absolute inset-0 -m-6 rounded-3xl border-2 border-cyan-400 animate-ping opacity-75 pointer-events-none" />
        )}

        {/* Card Body: Transforms from compact corner pill to full Engineering ID Card */}
        <div
          className={`relative rounded-2xl bg-[#0b0f1d]/90 backdrop-blur-2xl border transition-all duration-700 ${
            stage === 1
              ? 'p-2.5 sm:p-3 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-3'
              : 'p-6 sm:p-7 border-cyan-400/60 shadow-[0_0_45px_rgba(6,182,212,0.45)] w-[88vw] max-w-[340px] sm:max-w-[380px] flex flex-col items-center text-center'
          }`}
        >
          {/* Ambient Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-600/20 rounded-2xl blur-lg -z-10" />

          {/* Profile Avatar with pulsating neon cyan ring */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div
              className={`relative rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-700 ${
                stage === 1 ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-24 h-24 sm:w-28 sm:h-28 mb-3'
              }`}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center border-2 border-cyan-300">
                {!imageError ? (
                  <img
                    src={profileSrc}
                    alt="Sai Shiva Kumar"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-cyan-950/80 text-cyan-300 font-mono font-bold text-xs">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 mb-0.5" />
                    <span>SSK</span>
                  </div>
                )}
              </div>
            </div>

            {/* Rotating Orbit Halo when expanded */}
            {stage >= 2 && (
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin [animation-duration:12s]" />
            )}
          </div>

          {/* Metadata Display */}
          {stage === 1 ? (
            <div className="pr-2">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono font-extrabold tracking-wider text-cyan-300 uppercase">
                  INITIALIZING
                </span>
              </div>
              <div className="text-xs font-mono text-slate-300 font-semibold">
                IDENTITY BADGE
              </div>
            </div>
          ) : (
            <div className="w-full mt-2">
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
          STAGE 1: ANIMATED NEON CURSOR GLIDING TOWARD BADGE
         ======================================================== */}
      {stage === 1 && (
        <div
          className={`absolute z-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none ${
            cursorClicked
              ? 'top-9 left-9 sm:top-14 sm:left-14 scale-75 opacity-0'
              : 'top-[65%] left-[70%] sm:top-[60%] sm:left-[60%] scale-100 opacity-100'
          }`}
          style={{
            animation: 'cursorGlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        >
          <div className="relative">
            <MousePointer className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.9)] fill-cyan-400/40" />
            <div className="absolute -inset-1 rounded-full bg-cyan-400/30 blur-sm -z-10" />
            <span className="absolute left-8 top-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#060913]/90 text-cyan-300 border border-cyan-400/40 shadow-md whitespace-nowrap">
              TARGET // BADGE
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

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
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
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-40 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-[10px] sm:text-xs font-mono font-semibold transition-all cursor-pointer backdrop-blur-md shadow-md"
      >
        SKIP INTRO [ESC]
      </button>

      {/* Keyframe animation for cursor glide */}
      <style>{`
        @keyframes cursorGlide {
          0% {
            top: 65%;
            left: 70%;
            transform: scale(1);
          }
          85% {
            top: 2.25rem;
            left: 2.25rem;
            transform: scale(1.05);
          }
          100% {
            top: 2rem;
            left: 2rem;
            transform: scale(0.9);
          }
        }
        @media (min-width: 640px) {
          @keyframes cursorGlide {
            0% {
              top: 60%;
              left: 60%;
              transform: scale(1);
            }
            85% {
              top: 3.25rem;
              left: 3.25rem;
              transform: scale(1.05);
            }
            100% {
              top: 3rem;
              left: 3rem;
              transform: scale(0.9);
            }
          }
        }
      `}</style>
    </div>
  );
}
