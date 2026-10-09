import { useState } from 'react';
import { Award, Trophy, ExternalLink, Check, Sparkles, Lightbulb } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CertificationsHackathonsProps {
  focusSection?: 'all' | 'hackathons' | 'certifications';
}

export function CertificationsHackathons({ focusSection = 'all' }: CertificationsHackathonsProps) {
  const { certifications, hackathons, hackathonsStatement } = PORTFOLIO_DATA;
  const [selectedHackathon, setSelectedHackathon] = useState<string | null>(null);

  const showHackathons = focusSection === 'all' || focusSection === 'hackathons';
  const showCertifications = focusSection === 'all' || focusSection === 'certifications';

  return (
    <section id="hackathons" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 scroll-mt-20">
      
      {/* ========================================================
          SUBSECTION 1: HACKATHONS & TECHNICAL EVENTS
         ======================================================== */}
      {showHackathons && (
      <div>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Branch 05 · Competitions & Hackathons</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Hackathons & Technical Events
          </h2>

          {/* Mandatory Highlight Statement */}
          <div className="surface-card p-5 rounded-2xl border border-sky-500/30 text-sky-200 text-sm sm:text-base leading-relaxed flex items-start gap-3 shadow-lg shadow-blue-950/40">
            <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <p className="font-medium text-slate-200">
              "{hackathonsStatement}"
            </p>
          </div>
        </div>

        {/* Hackathons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((event) => {
            const isSelected = selectedHackathon === event.name;
            return (
              <div
                key={event.name}
                onClick={() => setSelectedHackathon(isSelected ? null : event.name)}
                className={`surface-card rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-sky-400 bg-slate-900 shadow-xl shadow-blue-950/50'
                    : 'border-white/[0.08] hover:border-sky-500/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold text-sky-300">
                      {event.tag}
                    </span>
                    <Trophy className="w-4 h-4 text-sky-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {event.name}
                  </h3>

                  <p className="text-xs font-semibold text-sky-400 mb-3">
                    {event.type}
                  </p>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {event.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-sky-400" />
                    <span>Takeaways & Impact</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {event.learnings}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* ========================================================
          SUBSECTION 2: CERTIFICATIONS
         ======================================================== */}
      {showCertifications && (
      <div id="certifications" className="scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Branch 06 · Verified Credentials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Certifications
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Structured certification placeholders ready to showcase course credentials and technology verifications without invented claims.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 text-xs font-mono text-slate-400 flex items-center gap-2">
            <Check className="w-4 h-4 text-sky-400" />
            <span>Placeholders explicitly marked</span>
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="surface-card rounded-2xl p-6 border border-white/[0.08] hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-sky-400 mb-3">
                  {cert.organization}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Slot 0{index + 1}
                </span>

                <a
                  href={cert.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>{cert.badgeLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      )}

    </section>
  );
}
