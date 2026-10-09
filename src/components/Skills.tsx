import { Terminal, FileCode2, Coffee, Binary, Database, Cpu, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5 text-sky-400" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-sky-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Heading */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>Branch 02 · Technical Toolkit</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          My Technical Toolkit
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Technologies and core disciplines I apply for building software, optimizing algorithms, managing relational data, and prototyping hardware systems.
        </p>
      </div>

      {/* Grouped Skills Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.name}
            className="surface-card rounded-2xl p-7 border border-white/[0.08] flex flex-col justify-between hover:border-sky-500/30 transition-all duration-200"
          >
            {/* Category Header */}
            <div className="mb-6 pb-4 border-b border-white/[0.08]">
              <span className="text-[11px] font-mono text-sky-400 font-semibold tracking-wider uppercase block">
                Category
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {category.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {category.description}
              </p>
            </div>

            {/* Skills Items */}
            <div className="flex flex-col gap-4 flex-1">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all"
                >
                  <div className="flex items-start gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                      {getSkillIcon(skill.iconName)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-white">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Unboxed Metadata Sub-items */}
                  <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400">
                    {skill.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-1.5">
                        <span className="text-sky-300/90">{tag}</span>
                        {idx < skill.tags.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{category.skills.length} core competencies</span>
              <span className="text-sky-400">Active Discipline</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
