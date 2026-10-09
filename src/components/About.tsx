import { Code2, Database, Trophy, Sparkles, Compass, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function About() {
  const { personal } = PORTFOLIO_DATA;

  const interestPillars = [
    {
      title: 'Software Development & Problem Solving',
      icon: Code2,
      description:
        'Crafting well-structured, modular applications with foundational clarity in C, Python, and Java. Emphasizing clean architecture, defensive logic, and efficient computational workflows.',
    },
    {
      title: 'Data-Driven Applications & DBMS',
      icon: Database,
      description:
        'Translating complex data requirements into optimized relational schemas, index-supported queries, and meaningful data pipeline integrations.',
    },
    {
      title: 'Emerging Technologies & AI Exploration',
      icon: Sparkles,
      description:
        'Eagerly exploring modern AI applications, intelligent data processing, and cutting-edge paradigms reshaping software development.',
    },
    {
      title: 'Learning Through Hackathons & IoT',
      icon: Trophy,
      description:
        'Active in high-intensity competitions like Smart India Hackathon and SAE, learning by prototyping hardware-software bridges and working in agile teams.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Branch 01 · About & Mindset</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 text-balance">
          {personal.aboutHeading}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {personal.aboutIntro}
        </p>
      </div>

      {/* 3 Main Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {personal.aboutCards.map((card, idx) => {
          const Icon = idx === 0 ? Code2 : idx === 1 ? Database : Trophy;
          return (
            <div
              key={card.title}
              className="surface-card rounded-2xl p-7 flex flex-col justify-between border border-white/[0.08] hover:border-sky-500/40 transition-all duration-200"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-xs font-mono text-slate-400">
                <span className="text-sky-400 font-semibold">Focus 0{idx + 1}</span>
                <span className="mx-2 text-slate-600" aria-hidden="true">·</span>
                <span>Applied Discipline</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Academic & Engineering Pillars Grid */}
      <div className="surface-card rounded-2xl p-7 sm:p-8 border border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-5 border-b border-white/[0.08]">
          <div>
            <h3 className="text-xl font-bold text-white">
              Core Academic & Engineering Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Applied Computer Science & Data Science competencies
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>CSD Undergraduate Curriculum</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interestPillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-sky-400 flex items-center justify-center mb-3">
                  <PillarIcon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
