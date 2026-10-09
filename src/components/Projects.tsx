import { useState } from 'react';
import { Github, ExternalLink, FolderGit2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'core' | 'data' | 'embedded'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Branch 03 · Featured Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Things I'm Building
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Showcasing practical engineering, algorithm visualizers, database modeling, and embedded systems. Clean architecture ready for production iteration.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="mt-6 md:mt-0 flex items-center gap-1 p-1 bg-white/[0.03] rounded-xl border border-white/[0.08]">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('core')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'core'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Algorithms
          </button>
          <button
            onClick={() => setFilter('data')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'data'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DBMS
          </button>
          <button
            onClick={() => setFilter('embedded')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === 'embedded'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Arduino
          </button>
        </div>
      </div>

      {/* Responsive Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="surface-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Top Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-slate-900/30 to-transparent opacity-80" />

              {/* Number Index */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/[0.1] text-xs font-mono font-bold text-sky-400">
                0{project.number}
              </div>

              {/* Inspect overlay */}
              <button
                onClick={() => onSelectProject(project)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 border border-white/[0.1] text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer"
                title="View architectural details"
                aria-label="View architectural details"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                  {project.subtitle}
                </span>

                <h3
                  onClick={() => onSelectProject(project)}
                  className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span key={tech} className="flex items-center gap-1.5">
                      <span className="text-sky-300">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-sky-300 hover:text-sky-200 border border-sky-500/30 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
