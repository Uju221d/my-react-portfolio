import React from 'react';
import { Mail, Cpu, Sparkles } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PHILOSOPHIES = [
  {
    title: 'Journey Before Destination',
    quote: '"The journey of a thousand miles begins with a single step."',
    desc: 'Focus on consistent progress and incremental builder updates.'
  },
  {
    title: 'Build Trust Through Results',
    quote: 'Trust is earned through consistency, transparency, and outcomes.',
    desc: 'Verify calculations and test automation systems extensively.'
  },
  {
    title: 'Continuous Growth',
    quote: '"If you want to shine like the sun, first burn like the sun."',
    desc: 'Continuous discipline, study, and learning to evolve skills.'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle bottom gradients */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Three Principles / Personal Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-b border-slate-800 pb-12">
          {PHILOSOPHIES.map((p, i) => (
            <div 
              key={i} 
              className="bg-slate-850/50 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald mb-2">
                  {p.title}
                </h4>
                <p className="text-white font-medium italic text-xs leading-relaxed">
                  {p.quote}
                </p>
              </div>
              <p className="text-[10px] text-slate-500 mt-3 font-semibold">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Section: Links & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo via-brand-teal to-brand-mint flex items-center justify-center text-white font-bold shadow-md shadow-brand-indigo/10 group-hover:scale-105 transition-transform duration-300">
                UD
              </div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-brand-emerald transition-colors duration-300">
                Ujwal Dixit
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building software, solving business problems, and continuously learning technologies that create meaningful impact. Evolving steadily into a SaaS founder.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'learning', label: 'Learning' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-500 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-extrabold text-white text-xs uppercase tracking-wider">
              Find Me Online
            </h4>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-indigo hover:text-white text-slate-400 transition-all cursor-pointer border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-400 transition-all cursor-pointer border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:ujwal@example.com"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-emerald hover:text-white text-slate-400 transition-all cursor-pointer border border-slate-800"
                aria-label="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-550 gap-4">
          <p>© {currentYear} Ujwal Dixit. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-brand-emerald" /> React & Vite</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-brand-indigo" /> Tailwind v4</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
