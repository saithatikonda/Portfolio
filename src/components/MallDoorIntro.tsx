import { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface MallDoorIntroProps {
  onComplete?: () => void;
  customPhotoUrl?: string | null;
}

export function MallDoorIntro({ onComplete, customPhotoUrl }: MallDoorIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const profileSrc = customPhotoUrl || '/profile.jpg';

  useEffect(() => {
    // 1. Hold closed state for 1.2s, then trigger doors to slide apart
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    // 2. Unmount from DOM completely once sliding animation finishes (~2.5s total)
    const cleanupTimer = setTimeout(() => {
      onComplete?.();
    }, 2450);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(cleanupTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ========================================================
          LEFT SLIDING DOOR (50% Width, slides left on open)
         ======================================================== */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#060913] border-r border-cyan-500/40 shadow-[4px_0_30px_rgba(6,182,212,0.3)] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle Cyber Grid & Particle Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-950/10 to-cyan-900/20 pointer-events-none" />

        {/* Vertical Glowing Seam Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        {/* Top Tech Markings */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SEC-SYS // 01-ALPHA
          </span>
        </div>

        {/* Mid Panel Tech Watermark */}
        <div className="relative z-10 hidden sm:block">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            PORTAL STATUS
          </div>
          <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            {isOpen ? 'ACCESS PROTOCOL: RELEASED' : 'BIOMETRIC LOCK: ENGAGED'}
          </div>
        </div>

        {/* Bottom Tech HUD */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>PORTFOLIO GATEWAY</span>
          <span className="text-cyan-400/60 font-semibold">50% L-BAY</span>
        </div>
      </div>

      {/* ========================================================
          RIGHT SLIDING DOOR (50% Width, slides right on open)
         ======================================================== */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#060913] border-l border-cyan-500/40 shadow-[-4px_0_30px_rgba(6,182,212,0.3)] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col justify-between p-6 sm:p-10 ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle Cyber Grid & Particle Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-950/10 to-cyan-900/20 pointer-events-none" />

        {/* Vertical Glowing Seam Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

        {/* Top Tech Markings */}
        <div className="relative z-10 flex items-center justify-end gap-2">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">
            SEC-SYS // 02-BETA
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        </div>

        {/* Mid Panel Tech Watermark */}
        <div className="relative z-10 hidden sm:block text-right">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            AUTHENTICATION
          </div>
          <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            IDENTITY RECOGNIZED
          </div>
        </div>

        {/* Bottom Tech HUD */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span className="text-cyan-400/60 font-semibold">50% R-BAY</span>
          <span>CYBER GATE v2.4</span>
        </div>
      </div>

      {/* ========================================================
          CENTER PORTAL & PROFILE REVEAL
          Sits exactly over the seam; scales up & fades seamlessly as doors open
         ======================================================== */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] pointer-events-none ${
          isOpen ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Pulsating Neon Portal Outer Ring */}
        <div className="relative flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/40 via-blue-600/30 to-indigo-600/30 rounded-full blur-2xl animate-pulse" />

          {/* Rotating dashed tech orbit */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin [animation-duration:10s]" />

          {/* Profile Portal Circle */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_35px_rgba(6,182,212,0.6)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center border-2 border-cyan-300">
              {!imageError ? (
                <img
                  src={profileSrc}
                  alt="Sai Shiva Kumar"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-cyan-950/80 text-cyan-300 font-mono font-bold text-sm">
                  <ShieldCheck className="w-6 h-6 text-cyan-400 mb-0.5" />
                  <span>SSK</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cyber Access Pill */}
        <div className="mt-5 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#060913]/95 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.45)] backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:4s]" />
          <span className="text-[11px] sm:text-xs font-mono font-extrabold tracking-widest text-cyan-300 uppercase whitespace-nowrap">
            ACCESS GRANTED // SAI SHIVA KUMAR
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
