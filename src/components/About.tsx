import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Compass, Code, Layers, Rocket } from 'lucide-react';

const MILESTONES = [
  {
    id: 'spark',
    icon: Code,
    year: 'The Spark',
    title: 'How It Started',
    subtitle: 'Hooked by automation',
    description: 'My journey began with a simple curiosity: "Can I automate this repetitive task?" Writing simple scripts to solve real problems opened my eyes to the power of software engineering. I realized that code isn\'t just syntax; it is a tool to shape business processes and improve lives.'
  },
  {
    id: 'foundations',
    icon: BookOpen,
    year: 'Academics & Core',
    title: 'Building Foundations',
    subtitle: 'Computer Science Fundamentals',
    description: 'During my studies, I focused heavily on core software concepts: Object-Oriented Programming (OOP), Data Structures, Algorithms, and Database Management Systems. I discovered C# and the .NET framework, falling in love with its type safety, robust ecosystem, and corporate power.'
  },
  {
    id: 'professional',
    icon: Compass,
    year: 'Professional Entry',
    title: 'Entering the Industry',
    subtitle: 'Real-World Scale',
    description: 'Stepped into professional software development, working with enterprise applications. I learned how to deal with legacy databases, design secure RESTful APIs, and operate in structured domains like Insurance and Financial Operations, where accuracy is critical.'
  },
  {
    id: 'current',
    icon: Layers,
    year: 'Current Focus',
    title: 'Developer & Product Builder',
    subtitle: 'Enterprise Architectures & Dashboards',
    description: 'Today, I architect scalable backends with ASP.NET Core, design interactive React interfaces, and build high-performance data processing pipelines in Python. I actively integrate system designs that help businesses optimize operational efficiency.'
  },
  {
    id: 'future',
    icon: Rocket,
    year: 'SaaS Vision',
    title: 'The Road Ahead',
    subtitle: 'Future SaaS Founder',
    description: 'I build products with the long-term vision of becoming a SaaS founder. I am learning cloud architecture (Azure, Docker, DevOps) and advanced design patterns to build SaaS platforms that solve global business friction and offer frictionless user experiences.'
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState(MILESTONES[3].id); // default to current focus

  const activeMilestone = MILESTONES.find(m => m.id === activeTab) || MILESTONES[3];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            About <span className="text-gradient-emerald font-black">My Journey</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            A software engineer who loves turning ideas into production-ready software systems. 
            Here is the path I have walked and where I am heading.
          </p>
        </div>

        {/* Timeline Interaction Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Navigation Indicators (Left column on desktop) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative border-l-2 border-slate-100 pl-4 sm:pl-6 space-y-4 py-2">
              {MILESTONES.map((milestone) => {
                const IconComponent = milestone.icon;
                const isActive = activeTab === milestone.id;

                return (
                  <button
                    key={milestone.id}
                    onClick={() => setActiveTab(milestone.id)}
                    className="w-full text-left relative group py-2 focus:outline-none cursor-pointer"
                  >
                    {/* Active Indicator dot */}
                    <div className={`absolute -left-[25px] sm:-left-[33px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-emerald border-brand-emerald scale-125 shadow-sm' 
                        : 'bg-white border-slate-350 group-hover:border-brand-indigo'
                    }`} />

                    <div className={`p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${
                      isActive
                        ? 'bg-slate-50 border-slate-200/80 shadow-xs'
                        : 'bg-transparent border-transparent hover:bg-slate-50/50 hover:border-slate-150'
                    }`}>
                      <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-tr from-brand-emerald to-brand-teal text-white' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/60'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                          isActive ? 'text-brand-emerald' : 'text-slate-405'
                        }`}>
                          {milestone.year}
                        </span>
                        <h3 className="font-heading font-bold text-slate-800 text-sm sm:text-base mt-0.5">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Timeline Details Display (Right column on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 120, damping: 18 }}
                  className="bg-slate-50/80 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100/50 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-6">
                      <div>
                        <span className="text-xs font-bold text-brand-indigo uppercase tracking-wider">
                          {activeMilestone.year}
                        </span>
                        <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl mt-1">
                          {activeMilestone.title}
                        </h3>
                        <p className="text-sm font-semibold text-brand-teal mt-0.5">
                          {activeMilestone.subtitle}
                        </p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 shadow-xs">
                        {React.createElement(activeMilestone.icon, { className: "w-7 h-7 text-brand-emerald" })}
                      </div>
                    </div>

                    {/* Story Body */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium whitespace-pre-line">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Highlights section at bottom of box */}
                  <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Key Mindset:</span>
                    {activeMilestone.id === 'spark' && (
                      <>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">Automation First</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">Problem Solver</span>
                      </>
                    )}
                    {activeMilestone.id === 'foundations' && (
                      <>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">OOP Design</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">C# Foundations</span>
                      </>
                    )}
                    {activeMilestone.id === 'professional' && (
                      <>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">Clean Code</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold">Enterprise Scale</span>
                      </>
                    )}
                    {activeMilestone.id === 'current' && (
                      <>
                        <span className="px-3 py-1 bg-emerald-50 border border-brand-emerald/20 text-brand-emerald rounded-full text-xs font-bold">.NET Core APIs</span>
                        <span className="px-3 py-1 bg-indigo-50 border border-brand-indigo/20 text-brand-indigo rounded-full text-xs font-bold">React UI</span>
                        <span className="px-3 py-1 bg-teal-50 border border-brand-teal/20 text-brand-teal rounded-full text-xs font-bold">Python Scripts</span>
                      </>
                    )}
                    {activeMilestone.id === 'future' && (
                      <>
                        <span className="px-3 py-1 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald rounded-full text-xs font-bold">System Design</span>
                        <span className="px-3 py-1 bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo rounded-full text-xs font-bold">SaaS Arch</span>
                        <span className="px-3 py-1 bg-brand-sky/10 border border-brand-sky/20 text-brand-sky rounded-full text-xs font-bold">Docker & Azure</span>
                      </>
                    )}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
