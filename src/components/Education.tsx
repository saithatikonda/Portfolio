import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Branch 04 · Academic Foundation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Education & Coursework
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Formal engineering coursework integrating core computing theory, algorithms, relational database architectures, and data science methodology.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
        {education.map((item, index) => (
          <div key={index} className="relative group">
            
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            </div>

            {/* Education Main Card */}
            <div className="surface-card rounded-2xl p-7 md:p-9 border border-white/[0.08] hover:border-sky-500/40 transition-all duration-200">
              
              {/* Top Badge & Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.status}</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Degree & Institution */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {item.degree}
              </h3>

              <p className="text-base font-semibold text-sky-400 mb-4">
                {item.institution}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Relevant Coursework (Unboxed text with dots) */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>Key Coursework & Focus Areas</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {item.coursework.map((course) => (
                    <div
                      key={course}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
