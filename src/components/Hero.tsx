import { ArrowRight, Download, Mail, Terminal, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

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
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-emerald-50/40 via-slate-50 to-slate-50"
    >
      {/* Decorative Floating Blobs with Brand Colors */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-mint/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_55%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (left column) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-brand-emerald/10 text-brand-emerald px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 border border-brand-emerald/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-none mb-4"
            >
              Hi, I'm <span className="text-gradient-fresh font-black">Ujwal Dixit</span>
            </motion.h1>

            {/* Sub-Headline / Role */}
            <motion.h2 
              variants={itemVariants}
              className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-slate-700 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 mb-6"
            >
              <span className="flex items-center text-brand-indigo gap-1">
                <Terminal className="w-4 h-4" /> Software Engineer
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center text-brand-teal gap-1">
                <Cpu className="w-4 h-4" /> .NET Developer
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center text-brand-emerald gap-1">
                <Sparkles className="w-4 h-4" /> Product Builder
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-sans font-medium"
            >
              Building scalable enterprise backend systems, crafting intuitive user interfaces, and automating workflows. Passionate about SaaS systems and engineering solutions that create real business value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-emerald to-brand-teal hover:from-brand-emerald/90 hover:to-brand-teal/90 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-brand-emerald/10 hover:shadow-brand-emerald/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={() => scrollToSection('resume')}
                className="flex items-center justify-center space-x-2 bg-white hover:bg-slate-55 text-slate-800 font-bold px-6 py-3.5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <Download className="w-5 h-5 text-brand-indigo" />
                <span>Get Resume</span>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 bg-transparent hover:bg-slate-100/50 text-slate-700 font-semibold px-5 py-3.5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-5 h-5 text-slate-500" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual (right column) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-indigo via-brand-teal to-brand-mint rounded-3xl opacity-10 blur-xl animate-pulse-slow" />
              
              {/* Photo Frame Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-white p-3 border border-slate-200/80 shadow-2xl shadow-slate-200">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 flex items-center justify-center">
                  <img 
                    src="/avatar.png" 
                    alt="Ujwal Dixit Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback in case avatar image fails
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000';
                    }}
                  />
                </div>
              </div>

              {/* Float Card: Experience */}
              <motion.div 
                className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-mint/10 flex items-center justify-center text-brand-emerald font-bold">
                  🚀
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Experience</div>
                  <div className="text-sm font-bold text-slate-800">.NET & SaaS Builder</div>
                </div>
              </motion.div>

              {/* Float Card: Code */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo font-bold">
                  💻
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Focus</div>
                  <div className="text-sm font-bold text-slate-800">Clean Architecture</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
