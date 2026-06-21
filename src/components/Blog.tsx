import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, X } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: 'System Design' | 'Tech Insights' | 'Business Automation' | 'Career Growth';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  gradient: string;
}

const ARTICLES_DATA: Article[] = [
  {
    id: 'clean-arch',
    title: 'Demystifying Clean Architecture in ASP.NET Core',
    category: 'System Design',
    date: 'June 18, 2026',
    readTime: '6 min read',
    summary: 'A comprehensive guide to structuring enterprise C# backends. Learn how to separate concerns, keep business logic independent, and write highly testable APIs.',
    content: `Clean Architecture (or Onion/Hexagonal Architecture) is a design pattern that puts the business logic (Domain) at the core of the application, rather than the database. In enterprise systems, this separation is critical. 

### Why Database-Centric Architectures Fail
Traditionally, applications were designed starting with the database schema. While easy to build initially, this creates a tight coupling. If you change a database column, it breaks your UI. If you want to swap SQL Server for PostgreSQL, you have to rewrite the entire codebase.

### The Three Layers of Clean Architecture
1. **Domain Layer (Core)**: Contains enterprise entities, exceptions, and business rules. It has absolutely zero external dependencies.
2. **Application Layer (Use Cases)**: Imports the domain layer and defines what actions the system can perform. It defines interfaces (e.g., \`IInvoiceService\`) but does not implement them.
3. **Infrastructure & Presentation (Outer)**: Implements database connections (Entity Framework), file storage, and API controllers.

By writing code inside out, you guarantee that your application's heart (its business rules) is unaffected by changes in UI technologies or databases.`,
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    id: 'tailwind-v4',
    title: 'Why I am Building my Next Product with React and Tailwind v4.0',
    category: 'Tech Insights',
    date: 'May 28, 2026',
    readTime: '4 min read',
    summary: 'Tailwind CSS v4.0 is here, and it is a major upgrade. Here is why the CSS-first configuration and compiler speeds are shifting how I build SaaS landing pages.',
    content: `Tailwind CSS v4.0 marks a monumental change for developer productivity, introducing a custom Rust engine that builds styles up to 10x faster than before.

### Key Enhancements I Love:
- **No tailwind.config.js**: Instead of dealing with nested JavaScript objects, everything is declared inside index.css using simple \`@theme\` variables.
- **Native Cascading Styles**: Standard CSS custom variables are automatically exposed. Declaring a color makes it immediately available in Tailwind utility classes.
- **Built-in imports**: You don\'t need postcss-import to stitch files together anymore; Tailwind handles it natively.

For product builders, these enhancements mean writing cleaner code, shipping fewer config files, and maintaining lightning-fast hot-module reloading in Vite.`,
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'python-automation',
    title: 'The Automation Mindset: Saving 15+ Hours a Week with Python',
    category: 'Business Automation',
    date: 'April 14, 2026',
    readTime: '5 min read',
    summary: 'How writing scrapers, CSV parsers, and scheduled notification tools can transform operational workflows and allow teams to focus on high-leverage tasks.',
    content: `Automating process workflows isn\'t about replacing human workers; it is about freeing them from repetitive, mind-numbing administrative tasks. 

### Spotting Automation Bottlenecks
Ask yourself: "Am I copying data from website A and writing it to spreadsheet B every day?" If the answer is yes, write a script.

### Building Reliable Scrapers
Using libraries like Selenium or BeautifulSoup in combination with Pandas, you can quickly write data pipeline scrapers. To make scripts robust:
- **Implement Retry Logic**: Net connections fail. Wrap requests in try-catch loops with back-off timings.
- **Send Fail Logs**: Set up Slack or email webhooks to alert you immediately if a site change breaks your script parser.

Automating these tasks changes how businesses think about scaling operations.`,
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    id: 'dev-to-builder',
    title: 'The Journey of a .NET Developer Evolving into a Product Builder',
    category: 'Career Growth',
    date: 'March 10, 2026',
    readTime: '5 min read',
    summary: 'Transitioning from solving assigned tasks to identifying user friction, designing microservices, and planning full SaaS roadmaps.',
    content: `Writing code is only 30% of what it takes to build a successful software product. The evolution from a software developer to a product builder is a shift in perspective.

### The Developer vs. The Builder
- **The Developer** asks: "How do I implement this specification in C#?"
- **The Builder** asks: "Why are users abandoning this onboarding step? Is there a way we can automate the validation to reduce friction?"

### The Blueprint for Future SaaS
To build successful SaaS platforms, you must understand multi-tenancy databases, Stripe invoicing layers, Docker isolation, and cloud scaling. Most importantly, you need to love the problem you are solving, not just the code you are writing.`,
    gradient: 'from-indigo-400 to-purple-500'
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES_DATA 
    : ARTICLES_DATA.filter(a => a.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Blog & <span className="text-gradient-emerald font-black">Insights</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Sharing lessons learned, technical tutorials, and thoughts on system design and business automation.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['All', 'System Design', 'Tech Insights', 'Business Automation', 'Career Growth'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/10'
                  : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-emerald bg-emerald-50 border border-brand-emerald/10 px-2.5 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-slate-850 text-lg sm:text-xl md:text-2xl tracking-tight mb-3 group-hover:text-brand-indigo transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-550 text-xs sm:text-sm font-medium leading-relaxed font-sans line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="self-start inline-flex items-center text-xs font-bold text-brand-indigo hover:text-brand-indigo/80 cursor-pointer"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-y-[-1px] group-hover:translate-x-[1px] transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Inline Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Reader Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 max-w-2xl w-full relative max-h-[85vh] flex flex-col shadow-2xl z-10"
            >
              {/* Header Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-tr ${selectedArticle.gradient} text-white relative`}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/25 border border-white/10 px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl mt-4 leading-snug tracking-tight">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center space-x-4 text-white/80 text-xs mt-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 prose prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-slate-650 prose-p:leading-relaxed text-xs sm:text-sm font-medium">
                <div className="whitespace-pre-line text-slate-600 leading-relaxed font-sans">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Close Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200/60 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-slate-905 text-slate-800 border border-slate-200 hover:bg-slate-100 font-bold px-5 py-2 rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Close Reader
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
