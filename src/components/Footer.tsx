import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const { contactInfo } = personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070D18] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">
              {personal.fullName}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              {personal.role}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={contactInfo.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactInfo.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactInfo.emailPlaceholder}`}
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title="Send Email"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-500/40 hover:bg-white/[0.08] text-slate-400 hover:text-sky-300 flex items-center justify-center transition-all cursor-pointer ml-1"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 font-mono">
          <p>© 2026 Thatikonda Sai Shiva Kumar. All rights reserved.</p>
          <p className="text-[11px]">Computer Science & Data Science Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
