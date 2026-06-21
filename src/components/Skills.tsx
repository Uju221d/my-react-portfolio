import { Server, Layout, FileCode2, Database, Wrench, Cloud, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
  {
    category: 'Backend Development',
    icon: Server,
    color: 'text-brand-emerald bg-emerald-50 border-emerald-100',
    skills: [
      { name: 'C#', level: 'Mastered' },
      { name: '.NET Core / ASP.NET Core', level: 'Mastered' },
      { name: 'ASP.NET / Web API', level: 'Mastered' },
      { name: 'Entity Framework', level: 'Mastered' },
      { name: '.NET Framework', level: 'Mastered' }
    ]
  },
  {
    category: 'Frontend Development',
    icon: Layout,
    color: 'text-brand-indigo bg-indigo-50 border-indigo-100',
    skills: [
      { name: 'React', level: 'Mastered' },
      { name: 'JavaScript', level: 'Mastered' },
      { name: 'Tailwind CSS', level: 'Mastered' },
      { name: 'HTML5 / CSS3', level: 'Mastered' },
      { name: 'Bootstrap', level: 'Mastered' }
    ]
  },
  {
    category: 'Python Ecosystem',
    icon: FileCode2,
    color: 'text-brand-teal bg-teal-50 border-teal-100',
    skills: [
      { name: 'Python', level: 'Mastered' },
      { name: 'Streamlit', level: 'Mastered' },
      { name: 'Automation Scripts', level: 'Mastered' },
      { name: 'Data Processing', level: 'Mastered' },
      { name: 'Dashboard Development', level: 'Mastered' }
    ]
  },
  {
    category: 'Database Systems',
    icon: Database,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    skills: [
      { name: 'SQL Server', level: 'Mastered' },
      { name: 'MySQL', level: 'Mastered' },
      { name: 'PostgreSQL', level: 'Learning' }
    ]
  },
  {
    category: 'Tools & Workspaces',
    icon: Wrench,
    color: 'text-slate-700 bg-slate-100 border-slate-200',
    skills: [
      { name: 'Git & GitHub', level: 'Mastered' },
      { name: 'Visual Studio', level: 'Mastered' },
      { name: 'VS Code', level: 'Mastered' },
      { name: 'Postman', level: 'Mastered' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-brand-sky bg-sky-50 border-sky-100',
    skills: [
      { name: 'Vercel', level: 'Mastered' },
      { name: 'Azure', level: 'Learning' },
      { name: 'Docker', level: 'Learning' },
      { name: 'CI/CD Pipelines', level: 'Learning' }
    ]
  }
];

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Technical <span className="text-gradient-emerald font-black">Expertise</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            A comprehensive toolbox crafted through academic learning, professional projects, and constant experimentation.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((cat, catIndex) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={catIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-slate-50/50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/70 group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl border ${cat.color} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-slate-800 text-lg sm:text-xl tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-col space-y-3">
                  {cat.skills.map((skill, index) => {
                    const isLearning = skill.level === 'Learning';

                    return (
                      <div 
                        key={index} 
                        className="flex items-center justify-between py-1 border-b border-slate-150/40 last:border-0"
                      >
                        <span className="text-slate-700 font-semibold text-xs sm:text-sm tracking-wide">
                          {skill.name}
                        </span>
                        
                        {isLearning ? (
                          <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest text-brand-indigo bg-indigo-50 border border-brand-indigo/20 px-2.5 py-0.5 rounded-full">
                            Active Learning
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald bg-emerald-50 border border-brand-emerald/10 px-2.5 py-0.5 rounded-full">
                            <Check className="w-3 h-3 mr-0.5" /> Ready
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
