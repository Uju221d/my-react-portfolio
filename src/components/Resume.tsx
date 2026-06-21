import { Download, Mail, Phone, MapPin, BookOpen, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Interactive <span className="text-gradient-emerald font-black">Resume</span>
          </h2>
          <p className="text-slate-655 font-medium text-base sm:text-lg">
            A digital version of my resume. Download the formatted PDF version below for offline reading.
          </p>

          <div className="mt-6">
            <a
              href="/resume_placeholder.pdf"
              download="Ujwal_Dixit_Resume.pdf"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-emerald to-brand-teal text-white hover:scale-[1.02] active:scale-[0.98] transition-all font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-brand-emerald/10 cursor-pointer text-sm"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>

        {/* Paper Sheet Style Digital Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-slate-50/50 p-6 sm:p-10 md:p-16 rounded-3xl border border-slate-205 shadow-xl shadow-slate-100/50 flex flex-col space-y-10"
        >

          {/* Header section */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center border-b border-slate-200/80 pb-8 gap-4">
            <div>
              <h3 className="font-heading font-extrabold text-slate-900 text-3xl tracking-tight">
                Ujwal Dixit
              </h3>
              <p className="text-sm font-extrabold text-brand-emerald uppercase tracking-widest mt-1">
                Software Engineer & .NET Developer
              </p>
            </div>

            <div className="flex flex-col space-y-1.5 text-xs text-slate-500 font-semibold md:text-right">
              <span className="flex items-center md:justify-end gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> ujwalkdixit@gmail.com</span>
              <span className="flex items-center md:justify-end gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 9145307439</span>
              <span className="flex items-center md:justify-end gap-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Hyderabad, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="font-heading font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider mb-3">
              Professional Summary
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Dynamic Software Engineer with expertise in building scalable enterprise systems and automating workflows. Mastered in .NET ecosystems (C#, ASP.NET Core, EF Core) and front-end tooling (React, Tailwind CSS). Proven track record of optimizing data processes with Python and delivering reliable systems across Insurance and FinOps domains. Focused on high-quality code and developing future-ready SaaS architectures.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="font-heading font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider mb-5">
              Work History
            </h4>
            <div className="space-y-8">
              {[
                {
                  role: 'Software Engineer',
                  company: 'Enterprise Financial & Insurance Group',
                  duration: '2024 - Present',
                  points: [
                    'Architect and develop high-performance backend Web APIs using ASP.NET Core and SQL Server.',
                    'Optimize database queries and stored procedures, enhancing response times by 35%.',
                    'Integrate secure JWT authentication and third-party broker APIs.',
                    'Participate in agile sprints, collaborating with product builders and QA leads.'
                  ]
                },
                {
                  role: 'Software Developer',
                  company: 'FinOps Tech Solutions',
                  duration: '2023 - 2024',
                  points: [
                    'Designed ledger reconciliation widgets in React and C# backends.',
                    'Wrote Python automation scripts, cutting down weekly report generation by 15 hours.',
                    'Maintained Git workspaces, conducting thorough code reviews and enforcing standards.'
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 relative pl-4 border-l border-slate-200">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-emerald" />

                  <div className="space-y-2">
                    <h5 className="font-heading font-extrabold text-slate-800 text-sm sm:text-base">
                      {job.role} <span className="text-brand-indigo font-bold">@ {job.company}</span>
                    </h5>
                    <ul className="space-y-1.5">
                      {job.points.map((p, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-550 text-xs font-semibold leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-350 shrink-0 mt-2" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="text-xs font-bold text-slate-400 whitespace-nowrap bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-xs self-start">
                    {job.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Education */}
            <div>
              <h4 className="font-heading font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-indigo" />
                <span>Education</span>
              </h4>
              <div className="space-y-4 pl-4 border-l border-slate-200">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-indigo" />
                  <h5 className="font-heading font-extrabold text-slate-800 text-xs sm:text-sm">
                    Bachelor of Engineering in Electronics and Telecomunication
                  </h5>
                  <p className="text-slate-400 text-xs font-medium mt-0.5">Rajiv Gandhi College of Enginnering and Research,Nagpur</p>
                  <span className="text-[10px] font-bold text-slate-400">Graduated 2019</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-heading font-extrabold text-slate-800 text-xs sm:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-brand-teal" />
                <span>Certifications</span>
              </h4>
              <div className="space-y-2">
                {[
                  'Microsoft Certified: Azure Fundamentals (AZ-900)',
                  'Microsoft Certified: .NET Developer Associate',
                  'Advanced React Performance and Design Patterns'
                ].map((cert, i) => (
                  <div key={i} className="flex items-center space-x-2 text-slate-600 text-xs font-semibold bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <CheckCircle className="w-4.5 h-4.5 text-brand-emerald shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
