import { useState } from 'react';
import { GitFork, Star, Calendar, Award, ExternalLink } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Mock data generator for weeks of contributions
const generateMockContributions = () => {
  const contributions = [];
  for (let week = 0; week < 32; week++) {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const level = Math.floor(Math.random() * 5); // 0 to 4
      const count = level === 0 ? 0 : Math.floor(Math.random() * 8) + 1;
      weekDays.push({ level, count });
    }
    contributions.push(weekDays);
  }
  return contributions;
};

const FEATURED_REPOS = [
  {
    name: 'DotNet-SaaS-Boilerplate',
    desc: 'An open-source starter kit for building multi-tenant SaaS products in .NET 9.0 and React. Includes subscription templates and tenant routing.',
    stars: 84,
    forks: 19,
    lang: 'C#',
    langColor: 'bg-indigo-500',
    url: 'https://github.com'
  },
  {
    name: 'AutoScript-Toolkit',
    desc: 'A compilation of Python scripts leveraging Selenium and Pandas to scrape product pages, auto-reconcile logs, and dispatch analytics reports.',
    stars: 52,
    forks: 12,
    lang: 'Python',
    langColor: 'bg-emerald-500',
    url: 'https://github.com'
  }
];

export default function GitHubStats() {
  const [hoveredCell, setHoveredCell] = useState<{ count: number; dateIndex: string } | null>(null);
  const contributionGrid = generateMockContributions();

  return (
    <section id="github" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-sky/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-mint/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Open Source & <span className="text-gradient-emerald font-black">GitHub Stats</span>
          </h2>
          <p className="text-slate-650 font-medium text-base sm:text-lg">
            A look into my coding activity, contribution consistency, and public repositories.
          </p>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Commits', val: '1,482', desc: 'Past 12 months', icon: Award, color: 'text-brand-emerald bg-emerald-50 border-emerald-100' },
            { label: 'Active Streak', val: '18 Days', desc: 'Current streak', icon: Calendar, color: 'text-brand-indigo bg-indigo-50 border-indigo-150' },
            { label: 'PRs Merged', val: '94 Merged', desc: 'OSS & Work', icon: GitFork, color: 'text-brand-teal bg-teal-50 border-teal-150' },
            { label: 'Stars Earned', val: '136 Stars', desc: 'Across repo stack', icon: Star, color: 'text-brand-sky bg-sky-50 border-sky-100' }
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <div className={`p-2 rounded-xl border ${stat.color}`}>
                    <StatIcon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-2xl">{stat.val}</h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-medium mt-0.5">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Calendar Graph */}
        <div className="bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 mb-12 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/60 pb-5 mb-6 gap-4">
            <div>
              <h3 className="font-heading font-extrabold text-slate-850 text-base sm:text-lg">
                Contribution Calendar
              </h3>
              <p className="text-slate-450 text-xs sm:text-sm font-medium mt-0.5">
                Activity density mapped across the last 220+ days.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-450">
              <span>Less</span>
              <div className="w-3.5 h-3.5 bg-slate-200 rounded-sm" />
              <div className="w-3.5 h-3.5 bg-emerald-100 rounded-sm" />
              <div className="w-3.5 h-3.5 bg-emerald-300 rounded-sm" />
              <div className="w-3.5 h-3.5 bg-brand-emerald rounded-sm" />
              <div className="w-3.5 h-3.5 bg-brand-emerald/90 rounded-sm shadow-xs" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Scroll Wrapper */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-1 min-w-[650px] justify-between">
              {contributionGrid.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col space-y-1">
                  {week.map((day, dayIndex) => {
                    const levelColors = [
                      'bg-slate-200/60',
                      'bg-emerald-100',
                      'bg-emerald-350',
                      'bg-brand-emerald',
                      'bg-brand-emerald/90 border border-brand-emerald/10 shadow-xs'
                    ];

                    return (
                      <div
                        key={dayIndex}
                        onMouseEnter={() => setHoveredCell({ count: day.count, dateIndex: `Week ${weekIndex + 1}, Day ${dayIndex + 1}` })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3.5 h-3.5 rounded-xs transition-all duration-300 hover:scale-125 cursor-pointer ${levelColors[day.level]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Hover Status Label */}
          <div className="mt-4 h-5 text-center sm:text-left text-xs font-semibold text-slate-450">
            {hoveredCell ? (
              <span className="text-brand-emerald bg-emerald-50 px-3 py-1 rounded-full border border-brand-emerald/10">
                {hoveredCell.count === 0 ? 'No commits' : `${hoveredCell.count} commits`} on {hoveredCell.dateIndex}
              </span>
            ) : (
              <span>Hover over squares to explore density.</span>
            )}
          </div>
        </div>

        {/* Featured Public Repositories */}
        <div>
          <h3 className="font-heading font-extrabold text-slate-800 text-lg sm:text-xl mb-6">
            Featured Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_REPOS.map((repo, i) => (
              <div key={i} className="bg-slate-50/40 p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-slate-350 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-slate-850 text-base sm:text-lg">
                      {repo.name}
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-slate-550 text-xs sm:text-sm font-medium leading-relaxed font-sans mb-6">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/40">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${repo.langColor}`} />
                    <span className="text-xs font-bold text-slate-500">{repo.lang}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-slate-500">
                    <span className="flex items-center text-xs font-bold gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {repo.stars}
                    </span>
                    <span className="flex items-center text-xs font-bold gap-1">
                      <GithubIcon className="w-3.5 h-3.5 text-slate-400" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
