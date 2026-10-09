import { useState, useEffect } from 'react';
import { ArrowDown, FileText, Camera, Code2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  customPhotoUrl: string | null;
  onViewProjects?: () => void;
}

export function Hero({ onOpenResume, onOpenPhotoModal, customPhotoUrl, onViewProjects }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative w-full pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Clean Unboxed Metadata Line (No Pill Capsules) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <span className="text-sky-300 font-semibold">{personal.badge}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4 text-balance">
              <span className="block text-slate-400 text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                {personal.heroHeadingPrefix}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                {personal.heroHeadingName}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-sky-200/90 mb-5 tracking-tight">
              {personal.heroSubtitle}
            </p>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              {personal.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onViewProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-600/30 border border-blue-400/40 transition-all cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-sky-200 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 surface-card hover:bg-slate-800 hover:text-white border border-white/[0.08] hover:border-sky-500/40 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Core Stack Unboxed Line */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500 font-semibold uppercase tracking-wider">Stack:</span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {['C', 'Python', 'Java', 'Arduino', 'DSA', 'DBMS'].map((item, idx) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="text-slate-200">{item}</span>
                    {idx < 5 && <span className="text-slate-600" aria-hidden="true">·</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Polished Profile Image Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Radial Lighting behind container */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-transparent rounded-3xl blur-2xl opacity-60 -z-10" />

              {/* Main Card */}
              <div className="surface-card rounded-2xl p-6 border border-white/[0.08] shadow-2xl">
                
                {/* Image / Monogram Container */}
                <div className="relative w-56 h-56 mx-auto rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-sky-400/30 shadow-inner flex items-center justify-center group">
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt="Thatikonda Sai Shiva Kumar - Profile"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative bg-gradient-to-b from-slate-900 via-slate-950 to-black">
                      <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-sky-400/40 flex items-center justify-center mb-3">
                        <span className="text-2xl font-black text-sky-300 tracking-wider">
                          SSK
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-200">
                        Profile Image Area
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Click to upload your portrait
                      </p>
                    </div>
                  )}

                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-4 text-center"
                    title="Upload or change photo"
                  >
                    <Camera className="w-6 h-6 text-sky-400 mb-1" />
                    <span className="text-xs font-semibold text-sky-200">
                      {customPhotoUrl ? 'Change Photo' : 'Upload Photo'}
                    </span>
                  </button>
                </div>

                {/* Identity Text */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Thatikonda Sai Shiva Kumar
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">
                    Computer Science & Data Science
                  </p>
                </div>

                {/* Micro indicators bar */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-left">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Discipline
                    </span>
                    <span className="text-xs font-semibold text-slate-200 mt-0.5 block">
                      CS & Data Science
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Focus
                    </span>
                    <span className="text-xs font-semibold text-slate-200 mt-0.5 block">
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
