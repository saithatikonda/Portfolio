import { useState } from 'react';
import { Download, ArrowDown, Camera, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
  onExploreJourney: () => void;
}

export function Hero({
  onOpenResume,
  onOpenPhotoModal,
  customPhotoUrl,
  onExploreJourney,
}: HeroProps) {
  const { personal } = PORTFOLIO_DATA;
  const [imageError, setImageError] = useState(false);

  const techStack = ['C', 'Python', 'Java', 'Arduino', 'DSA', 'DBMS', 'SQL'];
  const profileSrc = customPhotoUrl || '/profile.jpg';

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Glowing Radial Nebula Lights */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[580px] h-[580px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================
              LEFT COLUMN: HERO & IDENTITY
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#0f172a]/80 text-slate-300 border border-cyan-500/30 shadow-md shadow-cyan-950/40 mb-6 backdrop-blur-md">
              <span className="text-slate-300">CSD Student • Developer • Hackathon Enthusiast</span>
              <span className="text-slate-500" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to Opportunities</span>
              </span>
            </div>

            {/* Large Display Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              <span className="block text-slate-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                {personal.fullName}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-sky-200/90 mb-4 tracking-tight">
              Computer Science & Data Science Student
            </p>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              I build practical software projects, explore emerging technologies, and strengthen my problem-solving skills through coding and hackathons.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary CTA */}
              <button
                onClick={onExploreJourney}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 active:scale-95 shadow-lg shadow-cyan-950/60 border border-cyan-400/40 transition-all duration-200 cursor-pointer group"
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4 text-cyan-200 group-hover:translate-y-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer backdrop-blur-md active:scale-95 shadow-md shadow-black/40"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Tech Stack Footer Tags */}
            <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500 font-semibold uppercase tracking-wider">Tech Stack:</span>
              <div className="flex flex-wrap items-center gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 text-cyan-300 border border-slate-800 font-medium hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: GLASSMORPHIC ID CARD WITH PROFILE IMAGE
             ======================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-sm">
              {/* Backlight Glow behind Glassmorphic Card */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-transparent rounded-3xl blur-2xl opacity-75 -z-10" />

              {/* Glassmorphic ID Card */}
              <div className="relative rounded-2xl p-6 sm:p-7 bg-[#0b0f1d]/85 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/80">
                {/* Decorative Top Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                      ENGINEERING ID CARD
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Circular Portrait with Glowing Neon Circular Border */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden mb-6 bg-slate-950 border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(56,189,248,0.35)] flex items-center justify-center group ring-4 ring-cyan-500/20">
                  {!imageError ? (
                    <img
                      src={profileSrc}
                      alt="Thatikonda Sai Shiva Kumar - Portrait"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-full">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center mb-1">
                        <span className="text-xl font-black text-cyan-300 tracking-wider">
                          SSK
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono">
                        Profile Image
                      </p>
                    </div>
                  )}

                  {/* Photo Upload / Change overlay button */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute inset-0 bg-slate-950/80 rounded-full backdrop-blur-xs flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-2 text-center"
                    title="Upload or change photo"
                  >
                    <Camera className="w-5 h-5 text-cyan-400 mb-1" />
                    <span className="text-[11px] font-semibold text-cyan-200">
                      Change Photo
                    </span>
                  </button>
                </div>

                {/* Name */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Thatikonda Sai Shiva Kumar
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    Undergraduate Engineer
                  </p>
                </div>

                {/* Mini Statistic Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Discipline
                    </span>
                    <span className="text-xs font-semibold text-slate-100 mt-1 block">
                      CS & Data Science
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Focus
                    </span>
                    <span className="text-xs font-semibold text-slate-100 mt-1 block">
                      Practical Software
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
