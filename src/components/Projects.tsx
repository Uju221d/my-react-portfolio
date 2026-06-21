import { useState } from 'react';
import { ExternalLink, X, AlertCircle, Compass, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface Project {
  id: string;
  name: string;
  category: 'Enterprise' | 'Analytics' | 'Automation' | 'SaaS Concept';
  tags: string[];
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  gradient: string;
  iconText: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'insurance-sys',
    name: 'Insurance Management System',
    category: 'Enterprise',
    tags: ['ASP.NET Core', 'SQL Server', 'Web API', 'Clean Arch'],
    problem: 'Claims and policy underwriting teams faced significant processing bottlenecks due to disconnected databases, slow calculations, and paper-based data transfers.',
    solution: 'Designed and built a centralized Web API and policy manager using ASP.NET Core and Entity Framework. It standardizes broker submissions and computes risk premiums instantly.',
    features: [
      'Automatic underwriting engine calculating coverage limits in under 2 seconds.',
      'RESTful APIs securing broker-to-carrier integrations with JWT auth.',
      'Complex query optimization cutting database access latency by 35%.',
      'Unified data schemas replacing fragmented Excel spreadsheets.'
    ],
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Repository Pattern', 'Swagger'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-emerald-400 via-teal-500 to-teal-600',
    iconText: '🛡️'
  },
  {
    id: 'online-assess',
    name: 'Online Assessment Platform',
    category: 'Enterprise',
    tags: ['React', '.NET Web API', 'SQL Server', 'Realtime'],
    problem: 'Academic testers and training departments struggled to administer, auto-grade, and monitor exams securely and prevent copy-paste actions.',
    solution: 'Developed an interactive online assessment platform with a React-based proctor client and a secure .NET backend that handles rapid answer evaluation and locks test taker screens.',
    features: [
      'Focus loss detection tracking if student switches browser tabs during examination.',
      'Optimized database evaluation queues scoring 1,000+ simultaneous assessments.',
      'Dynamic quiz builder supporting multiple formats (MCQs, coding blocks, subjective text).',
      'Real-time proctor dashboard monitoring active connection states.'
    ],
    tech: ['React', 'TypeScript', 'C#', '.NET Web API', 'SQL Server', 'SignalR', 'Framer Motion'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-blue-400 via-indigo-500 to-indigo-600',
    iconText: '📝'
  },
  {
    id: 'hr-onboard',
    name: 'HR Onboarding Workflow Automation',
    category: 'Automation',
    tags: ['.NET Core', 'SQL Server', 'Windows Service', 'MailSync'],
    problem: 'Manually provisioning new hire accounts, generating contracts, and notifying departments consumed 6-8 hours of HR effort per onboarded candidate.',
    solution: 'Engineered a state-driven onboarding workflow system that automatically triggers credential creation, signs contracts, and notifies IT admins on event hooks.',
    features: [
      'Automated background accounts provisioning in AD/Exchange directories.',
      'Event-driven email alerts and webhook notifications across team channels.',
      'Secure document signing and digital vault storage.',
      'Audit logging documenting every approval and step completion.'
    ],
    tech: ['C#', '.NET Core', 'SQL Server', 'Hangfire (Job Scheduler)', 'SMTP Services', 'SMTP Auth'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-teal-400 via-cyan-500 to-brand-emerald',
    iconText: '👤'
  },
  {
    id: 'stock-analytics',
    name: 'Stock Market Analytics Platform',
    category: 'Analytics',
    tags: ['React', 'REST APIs', 'Recharts', 'Financials'],
    problem: 'Traders and financial analysts needed a clean interface to compare historical stocks performance without sorting through cluttered dashboards.',
    solution: 'Built a responsive analytics portal using React and charting components, pulling live and historical financials to calculate rolling averages and trends.',
    features: [
      'Responsive data visualization using SVG charts.',
      'Historical comparisons with correlation calculations.',
      'Personalized portfolios list with price alert notifications.',
      'Fast client-side indexing filtering 500+ active symbols.'
    ],
    tech: ['React', 'JavaScript', 'Recharts', 'Financial APIs', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-indigo-400 via-purple-500 to-brand-indigo',
    iconText: '📈'
  },
  {
    id: 'biz-dashboard',
    name: 'Business Dashboard & Reporting',
    category: 'Analytics',
    tags: ['Python', 'Streamlit', 'Pandas', 'Data Processing'],
    problem: 'Non-technical operational leads struggled to run database SQL queries to find product dispatch bottlenecks and monthly growth metrics.',
    solution: 'Created an interactive dashboard using Python and Streamlit, allowing managers to drag, drop, filter, and export clean reports without SQL knowledge.',
    features: [
      'Interactive widgets filtering data by date, category, and dispatcher.',
      'Automated database polling fetching fresh records on page load.',
      'One-click PDF/CSV report generation and download.',
      'Subtle anomaly highlighting showing outliers in dispatch timelines.'
    ],
    tech: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'SQLAlchemy', 'Postgres'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    iconText: '📊'
  },
  {
    id: 'process-auto',
    name: 'Process Automation Tools',
    category: 'Automation',
    tags: ['Python', 'Selenium', 'Office Automation', 'Pandas'],
    problem: 'Support teams manually extracted catalog logs and cataloged data from multiple public sites, taking 2 hours every day.',
    solution: 'Built a suite of scripts running scheduled scrapers, reconciling output columns, and delivering compiled reports via email.',
    features: [
      'Scheduled browser scraping bypassing CAPTCHA bottlenecks.',
      'Automated data cleaning aligning mismatch names using fuzzy matching.',
      'Formatted Excel output sheets with summary charts.',
      'Integration to Slack/Teams for status logs and run alerts.'
    ],
    tech: ['Python', 'Selenium', 'Pandas', 'BeautifulSoup', 'OpenPyXL', 'Git'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-brand-mint to-teal-600',
    iconText: '⚙️'
  },
  {
    id: 'saas-concept',
    name: 'Future SaaS Products: Roadmaps',
    category: 'SaaS Concept',
    tags: ['SaaS', 'Microservices', 'Docker', 'Azure', 'Auth0'],
    problem: 'Traditional systems are expensive and difficult for small business operators to implement. SME operators need modular, zero-setup tools.',
    solution: 'Developing modular concepts for process workflow management and automated client messaging pipelines designed for lightweight deployment.',
    features: [
      'Multi-tenant architecture separating client spaces.',
      'Docker container configurations allowing simple localized testing.',
      'Stateless API microservices written in .NET Web API.',
      'Modern OAuth2 integrations (JWT/Auth0).'
    ],
    tech: ['System Design', 'Microservices', 'Docker', 'Azure Services', 'ASP.NET Core', 'SaaS Architecture'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    gradient: 'from-pink-400 via-rose-500 to-indigo-500',
    iconText: '🔮'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Enterprise' | 'Analytics' | 'Automation' | 'SaaS Concept'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Featured <span className="text-gradient-emerald font-black">Projects</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            A showcase of enterprise systems, script automation, analytics platforms, and SaaS roadmaps.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Enterprise', 'Analytics', 'Automation', 'SaaS Concept'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-650 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-350 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Gradient Banner Header */}
                <div className={`h-36 bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative`}>
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%)] bg-[size:10px_10px]" />
                  <span className="text-3xl relative z-10">{project.iconText}</span>
                  <span className="self-end bg-white/90 backdrop-blur-xs text-[10px] font-extrabold uppercase tracking-widest text-slate-800 px-3 py-1 rounded-full relative z-10 border border-white/50">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-850 text-lg sm:text-xl tracking-tight mb-2 group-hover:text-brand-emerald transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-slate-550 text-xs sm:text-sm font-medium line-clamp-3 mb-6 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-500 bg-slate-150/60 px-2.5 py-1 rounded-md border border-slate-200/30">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/20">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details Prompt */}
                    <div className="flex items-center text-xs font-bold text-brand-indigo group-hover:text-brand-indigo/80 transition-colors">
                      <span>Explore Technical details</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 max-w-2xl w-full relative max-h-[90vh] flex flex-col shadow-2xl z-10"
            >
              {/* Top Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-tr ${selectedProject.gradient} text-white relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-4xl block mb-3">{selectedProject.iconText}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 border border-white/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mt-3 tracking-tight">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
                
                {/* Problem */}
                <div className="space-y-2">
                  <h4 className="font-heading font-extrabold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    <span>The Problem</span>
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed font-sans">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h4 className="font-heading font-extrabold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-emerald" />
                    <span>The Solution</span>
                  </h4>
                  <p className="text-slate-650 text-sm sm:text-base font-semibold leading-relaxed font-sans">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-heading font-extrabold text-slate-800 text-sm uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-brand-indigo" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack Grid */}
                <div>
                  <h4 className="font-heading font-extrabold text-slate-800 text-sm uppercase tracking-wider mb-3">
                    Tech Stack Detailed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-xs font-bold text-brand-emerald bg-brand-mint/5 border border-brand-emerald/15 px-3 py-1.5 rounded-xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white hover:bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs text-xs sm:text-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl shadow-md text-xs sm:text-sm transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
