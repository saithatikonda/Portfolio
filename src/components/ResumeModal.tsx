import { X, Printer, Download, FileText, CheckCircle2, MapPin, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, skills, projects, education, hackathons, certifications } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `=====================================================
THATIKONDA SAI SHIVA KUMAR
Computer Science & Data Science (CSD) Student
Email: ${personal.contactInfo.emailPlaceholder}
GitHub: ${personal.contactInfo.githubPlaceholder}
LinkedIn: ${personal.contactInfo.linkedinPlaceholder}
=====================================================

EDUCATION
-----------------------------------------------------
${education[0].degree}
${education[0].institution} | ${education[0].location}
Expected: ${education[0].period}

TECHNICAL SKILLS
-----------------------------------------------------
Programming: C, Python, Java
Computer Science: Data Structures & Algorithms (DSA), DBMS
Embedded Systems: Arduino

HACKATHONS & TECHNICAL EVENTS
-----------------------------------------------------
- Smart India Hackathon (SIH)
- Zignasa
- Ignia
- SAE (Society of Automotive Engineers)
- Other Technical Events
Statement: "${PORTFOLIO_DATA.hackathonsStatement}"

PROJECTS
-----------------------------------------------------
1. ${projects[0].title}
   Tech: ${projects[0].technologies.join(', ')}
   ${projects[0].description}

2. ${projects[1].title}
   Tech: ${projects[1].technologies.join(', ')}
   ${projects[1].description}

3. ${projects[2].title}
   Tech: ${projects[2].technologies.join(', ')}
   ${projects[2].description}

CERTIFICATIONS (Placeholders)
-----------------------------------------------------
${certifications.map(c => `- ${c.title} (${c.organization})`).join('\n')}
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Thatikonda_Sai_Shiva_Kumar_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0B1120] border border-white/[0.1] shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="text-base font-bold text-white">
              Resume Preview & Export
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-950/60 text-slate-200 text-sm">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personal.fullName}
            </h1>
            <p className="text-sky-400 font-semibold text-base mt-1">
              {personal.role}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{personal.contactInfo.emailPlaceholder}</span>
              </span>
              <span>·</span>
              <span>{personal.contactInfo.githubPlaceholder}</span>
              <span>·</span>
              <span>{personal.contactInfo.linkedinPlaceholder}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
              Education
            </h2>
            <div className="surface-card p-4 rounded-xl border border-white/[0.08]">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-white text-base">
                    {education[0].degree}
                  </h3>
                  <p className="text-slate-300 font-medium">
                    {education[0].institution} · {education[0].location}
                  </p>
                </div>
                <span className="text-xs font-mono text-sky-300 bg-sky-950/60 px-2 py-1 rounded border border-sky-800/40">
                  {education[0].period}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Coursework: {education[0].coursework.join(', ')}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
              Technical Toolkit
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.map((cat) => (
                <div key={cat.name} className="surface-card p-3.5 rounded-xl border border-white/[0.08]">
                  <span className="text-xs font-bold text-slate-300 block mb-1">
                    {cat.name}
                  </span>
                  <p className="text-xs text-sky-300 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
              Hackathons & Technical Events
            </h2>
            <div className="surface-card p-4 rounded-xl border border-white/[0.08] space-y-2">
              <div className="flex flex-wrap gap-2 mb-2 font-mono text-xs">
                {hackathons.map((h, i) => (
                  <span key={h.name} className="text-slate-300">
                    {h.name} {i < hackathons.length - 1 && <span className="text-slate-600">·</span>}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-300 italic">
                "{PORTFOLIO_DATA.hackathonsStatement}"
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-3">
              Technical Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="surface-card p-4 rounded-xl border border-white/[0.08]">
                  <div className="flex justify-between items-start flex-wrap gap-1">
                    <h3 className="font-bold text-white text-sm">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-sky-400">
                      {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
