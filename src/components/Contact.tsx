import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const { contactInfo } = personal;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Branch 07 · Contact & Inquiries</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {personal.contactHeading}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {personal.contactDescription}
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Direct Email Card */}
          <div className="surface-card rounded-2xl p-6 border border-white/[0.08] hover:border-sky-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Email Address
            </span>
            <a
              href={`mailto:${contactInfo.emailPlaceholder}`}
              className="text-lg font-bold text-white hover:text-sky-300 transition-colors block truncate"
            >
              {contactInfo.emailPlaceholder}
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Reach out for internships, project collaboration, or technical discussions.
            </p>
          </div>

          {/* GitHub Profile Card */}
          <a
            href={contactInfo.githubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card rounded-2xl p-6 border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:text-white flex items-center justify-center">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  Repositories
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  GitHub Profile
                </h4>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={contactInfo.linkedinPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card rounded-2xl p-6 border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group block cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-sky-500/20 text-sky-400 group-hover:text-sky-300 flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  Professional Network
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  LinkedIn Profile
                </h4>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>

        </div>

        {/* Right Column: Functional Message Form */}
        <div className="lg:col-span-7">
          <div className="surface-card rounded-2xl p-7 sm:p-9 border border-white/[0.08] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1.5">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Have an inquiry or project proposal? Fill out the details below.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Message Sent
                </h4>
                <p className="text-sm text-slate-300 max-w-md">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. I will respond to <span className="font-mono text-sky-300">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 px-4 py-2 text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Collaboration / Technical query"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sai Shiva Kumar, I'd like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-md shadow-blue-600/30 border border-blue-400/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-200" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
