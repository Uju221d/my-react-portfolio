import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, DollarSign, Cpu, Settings, ChevronDown, Award, CheckCircle } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'insurance',
    domain: 'Insurance Domain',
    role: 'Software Engineer - Enterprise Systems',
    company: 'Enterprise Financial & Insurance Group',
    duration: '2024 - Present',
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50/50',
    borderColor: 'border-emerald-100',
    summary: 'Developing core insurance processing platforms, backend policy management systems, and automated claim ingestion APIs.',
    responsibilities: [
      'Designed and engineered high-performance Web APIs using ASP.NET Core for policy issuance and premium calculations.',
      'Refactored legacy stored procedures in SQL Server, reducing report generation latency by 40%.',
      'Implemented secure data sharing protocols for insurance brokers, ensuring compliance with industry standards.',
      'Collaborated with product managers to map claims workflow states into state-machine backend logic.'
    ],
    achievements: [
      'Automated broker data ingestion, reducing manual entry errors by 95% and process duration from days to minutes.',
      'Successfully migrated a key monolith module into modern .NET Core services with 100% uptime.'
    ]
  },
  {
    id: 'finance',
    domain: 'Finance Operations',
    role: 'Software Developer - FinTech & Automation',
    company: 'FinOps Tech Solutions',
    duration: '2023 - 2024',
    icon: DollarSign,
    color: 'from-brand-indigo to-blue-600',
    bgColor: 'bg-indigo-50/40',
    borderColor: 'border-indigo-150',
    summary: 'Building transactional reconciliation tools, financial dashboard components, and internal audit software.',
    responsibilities: [
      'Built financial dashboards using React and .NET Web APIs, allowing operations teams to view and reconcile transactions.',
      'Developed automated ledger entry reconcilers that run daily and check for discrepancies across multiple databases.',
      'Wrote Python automation scripts to scrape, process, and consolidate financial reports from external platforms.',
      'Optimized SQL queries and database indexes to support high-frequency ledger operations.'
    ],
    achievements: [
      'Reconciliation algorithm flagged anomalies with 99.8% accuracy, saving 15+ hours of weekly manual auditing time.',
      'Received peer recognition award for engineering a reliable, fault-tolerant ledger export tool.'
    ]
  },
  {
    id: 'bpm',
    domain: 'Business Process Management (BPM)',
    role: 'Workflow Systems Engineer',
    company: 'ProcessFlow Automation',
    duration: '2022 - 2023',
    icon: Settings,
    color: 'from-brand-teal to-cyan-600',
    bgColor: 'bg-teal-50/30',
    borderColor: 'border-teal-150',
    summary: 'Designing state-driven onboarding workflows, form managers, and business intelligence reporting channels.',
    responsibilities: [
      'Configured and customized business workflow engines to track state transitions in corporate approvals.',
      'Integrated HTML5, CSS3, Bootstrap, and React forms to standard BPM databases.',
      'Built custom dashboard panels showing process efficiency metrics, bottlenecks, and average completion times.',
      'Created webhook services using C# to trigger external alerts and email systems when workflow states changed.'
    ],
    achievements: [
      'Developed an onboarding workflow that shortened client onboarding times by 35% on average.',
      'Standardized form definitions, decreasing the development time for new workflow screens by 50%.'
    ]
  },
  {
    id: 'automation',
    domain: 'Automation Solutions',
    role: 'Automation Developer & Script Specialist',
    company: 'AutoSys Consultancies',
    duration: '2021 - 2022',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50/30',
    borderColor: 'border-blue-150',
    summary: 'Writing data scrapers, dashboard integrations, automated email systems, and operational helper utilities.',
    responsibilities: [
      'Wrote robust Python scripts using Selenium, BeautifulSoup, and Pandas to collect and process web-based records.',
      'Built internal dashboards using Python (Streamlit) for visualizing system health metrics and script run histories.',
      'Created scheduled cron jobs and Windows services to run data backups and database cleanup routines.',
      'Maintained Git repositories and built simple CI/CD deployment pipelines on Vercel.'
    ],
    achievements: [
      'Created scrapers processing over 50,000 daily rows of catalog data without failure.',
      'Automated daily administrative reporting, saving the operations team 1.5 hours of manual work every morning.'
    ]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('insurance');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Professional <span className="text-gradient-fresh font-black">Experience</span>
          </h2>
          <p className="text-slate-655 font-medium text-base sm:text-lg">
            Engineering robust applications and workflows across diverse enterprise domains. 
            Click on each domain to explore details, responsibilities, and key achievements.
          </p>
        </div>

        {/* Experience List / Accordion */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => {
            const Icon = exp.icon;
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                  isExpanded ? 'border-slate-300 shadow-sm' : 'border-slate-200/80'
                }`}
              >
                {/* Header button click */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className={`w-full text-left p-6 sm:p-8 flex items-center justify-between transition-colors duration-300 focus:outline-none cursor-pointer ${
                    isExpanded ? exp.bgColor : 'bg-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Domain Icon Container */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${exp.color} text-white flex items-center justify-center shadow-md shadow-slate-200/50`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.duration}</span>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <span className="text-xs font-extrabold text-brand-emerald bg-white px-2.5 py-0.5 rounded-full border border-brand-emerald/20">{exp.company}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-slate-800 text-base sm:text-xl md:text-2xl mt-1 tracking-tight">
                        {exp.domain}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-505 mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`p-2 rounded-full border border-slate-200 text-slate-550 transition-transform duration-300 ${
                    isExpanded ? 'transform rotate-180 bg-white border-slate-300 text-slate-800' : 'bg-slate-50 hover:bg-slate-100'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 border-t border-slate-150/60 bg-white">
                        
                        {/* Domain Summary */}
                        <div className="mb-6 pt-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-medium">
                          {exp.summary}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                          
                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-heading font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 mb-4">
                              <Settings className="w-4 h-4 text-brand-indigo" />
                              <span>Key Responsibilities</span>
                            </h4>
                            <ul className="space-y-3">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start space-x-3 text-slate-650 text-xs sm:text-sm font-medium leading-relaxed">
                                  <CheckCircle className="w-4.5 h-4.5 text-brand-emerald shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150/50 h-full">
                            <h4 className="font-heading font-extrabold text-slate-800 text-sm sm:text-base flex items-center gap-2 mb-4">
                              <Award className="w-4.5 h-4.5 text-brand-teal" />
                              <span className="text-gradient-emerald">Key Achievements</span>
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start space-x-3 text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                                  <span className="w-6 h-6 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center shrink-0 text-xs font-bold">🏆</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
