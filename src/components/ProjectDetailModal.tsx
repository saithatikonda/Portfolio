import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0B1120] border border-white/[0.1] shadow-2xl overflow-hidden my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600/20 border border-blue-400/30 text-sky-400">
              0{project.number}
            </span>
            <span className="text-sm font-semibold text-slate-300">
              {project.subtitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Visual Banner */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Badges (Unboxed metadata with typographic separators) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              Technologies & Languages
            </h3>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-slate-300">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="flex items-center gap-1.5">
                  <span className="text-sky-300">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="surface-card p-5 rounded-xl border border-white/[0.08]">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Architectural Highlights & Capabilities</span>
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.08] transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Open Repository</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/30 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
