import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Compass, Database, Network, Server, Cpu, Cloud, Settings, Milestone } from 'lucide-react';

interface RoadmapNode {
  id: string;
  title: string;
  status: 'active' | 'future';
  icon: any;
  purpose: string;
  whySaaS: string;
  topics: string[];
}

const ROADMAP_DATA: RoadmapNode[] = [
  {
    id: 'sys-design',
    title: 'System Design',
    status: 'active',
    icon: Network,
    purpose: 'Learning horizontal scalability, load balancing, caching tiers, and API gateway routing architectures.',
    whySaaS: 'Crucial for designing multi-tenant SaaS products that handle thousands of concurrent operations securely.',
    topics: ['Scalability Patterns', 'Caching Strategy', 'Load Balancers', 'API Gateways', 'Rate Limiting']
  },
  {
    id: 'docker',
    title: 'Docker & Containers',
    status: 'active',
    icon: Server,
    purpose: 'Mastering image creation, multi-stage builds, container networks, and volume states management.',
    whySaaS: 'Standardizes the build environment across development and hosting tiers, ensuring fast Vercel/Docker pipelines.',
    topics: ['Dockerfile Optimization', 'Docker Compose', 'Container Networking', 'Volume Mapping']
  },
  {
    id: 'azure',
    title: 'Azure Cloud Platform',
    status: 'active',
    icon: Cloud,
    purpose: 'Exploring Azure App Services, SQL databases integration, functions apps, and Blob storage.',
    whySaaS: 'Provides the cloud backing required to host robust .NET enterprise applications with elastic scale.',
    topics: ['App Services', 'Azure SQL', 'Blob Storage', 'Azure Functions', 'Key Vaults']
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD',
    status: 'active',
    icon: Settings,
    purpose: 'Setting up Git workflows, automate testing suites, and script self-healing deployment scripts.',
    whySaaS: 'Enables continuous delivery of product enhancements directly to customers without service interruptions.',
    topics: ['GitHub Actions', 'YAML Pipelines', 'Automated Testing', 'Vercel / Netlify Hooks']
  },
  {
    id: 'adv-react',
    title: 'Advanced React patterns',
    status: 'active',
    icon: Cpu,
    purpose: 'Understanding custom hooks optimizations, context API, state managers, and React Server Components.',
    whySaaS: 'Guarantees the dashboard interface remains lightning fast while visualizing large streams of data.',
    topics: ['Custom Hooks', 'Context Performance', 'Framer Motion', 'React 19 features']
  },
  {
    id: 'saas-architecture',
    title: 'SaaS Architecture',
    status: 'future',
    icon: Milestone,
    purpose: 'Deep diving into multi-tenancy models (silo vs pool databases), billing engine subscription layers (Stripe).',
    whySaaS: 'The ultimate target for creating independent software engines that charge, manage, and scale.',
    topics: ['Multi-tenant DBs', 'Stripe Subscriptions', 'RBAC (Role Based Access)', 'Tenant isolation']
  },
  {
    id: 'microservices',
    title: 'Microservices & Event-Driven',
    status: 'future',
    icon: Database,
    purpose: 'Learning pub-sub patterns, message queues (RabbitMQ, Kafka), and eventually consistent systems.',
    whySaaS: 'Allows dividing massive portals into tiny, micro-deployable items that do not crash each other.',
    topics: ['RabbitMQ / Kafka', 'Event Sourcing', 'CQRS Patterns', 'Database per Service']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    status: 'future',
    icon: BookOpen,
    purpose: 'Understanding LLM API prompts structures, vector embeddings databases, and automated agents workflows.',
    whySaaS: 'Enables embedding intelligent predictive automation directly into future business dashboards.',
    topics: ['OpenAI APIs', 'Vector Embeddings', 'Semantic Search', 'Agent Workflows']
  }
];

export default function LearningRoadmap() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('sys-design');
  const selectedNode = ROADMAP_DATA.find(n => n.id === selectedNodeId) || ROADMAP_DATA[0];

  return (
    <section id="learning" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Learning <span className="text-gradient-fresh font-black">Roadmap</span>
          </h2>
          <p className="text-slate-650 font-medium text-base sm:text-lg">
            A developer is always a student. Here is what I am actively studying and what I plan to master next.
          </p>
        </div>

        {/* Roadmap Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Roadmap Paths (Left 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Active Path */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-brand-emerald animate-ping" />
                <h3 className="font-heading font-extrabold text-slate-800 text-lg uppercase tracking-wider">
                  Active Focus Areas
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ROADMAP_DATA.filter(n => n.status === 'active').map((node) => {
                  const NodeIcon = node.icon;
                  const isSelected = selectedNodeId === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-5 rounded-2xl border text-left flex items-start space-x-4 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-brand-emerald shadow-md shadow-brand-emerald/5 translate-x-1'
                          : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected 
                          ? 'bg-brand-emerald text-white border-brand-emerald' 
                          : 'bg-slate-50 text-slate-550 border-slate-200/60'
                      }`}>
                        <NodeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-slate-800 text-sm sm:text-base">
                          {node.title}
                        </h4>
                        <span className="text-[10px] font-extrabold text-brand-emerald uppercase tracking-wider block mt-1">
                          In Progress
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Future Path */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-brand-indigo" />
                <h3 className="font-heading font-extrabold text-slate-800 text-lg uppercase tracking-wider">
                  Future Exploration
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ROADMAP_DATA.filter(n => n.status === 'future').map((node) => {
                  const NodeIcon = node.icon;
                  const isSelected = selectedNodeId === node.id;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-5 rounded-2xl border text-left flex items-start space-x-4 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-brand-indigo shadow-md shadow-brand-indigo/5 translate-x-1'
                          : 'bg-white/40 hover:bg-white border-slate-200/80 hover:border-slate-350'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected 
                          ? 'bg-brand-indigo text-white border-brand-indigo' 
                          : 'bg-slate-50 text-slate-500 border-slate-200/50'
                      }`}>
                        <NodeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-slate-850 text-sm sm:text-base">
                          {node.title}
                        </h4>
                        <span className="text-[10px] font-extrabold text-brand-indigo uppercase tracking-wider block mt-1">
                          Roadmapped
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Details Sidebar Display (Right 5 columns on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100"
              >
                {/* Node Details Header */}
                <div className="flex items-center space-x-4 border-b border-slate-200/60 pb-5 mb-6">
                  <div className={`p-3 rounded-2xl border ${
                    selectedNode.status === 'active' 
                      ? 'bg-brand-mint/5 border-brand-emerald text-brand-emerald' 
                      : 'bg-brand-indigo/5 border-brand-indigo text-brand-indigo'
                  }`}>
                    {React.createElement(selectedNode.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                      {selectedNode.title}
                    </h3>
                    <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      selectedNode.status === 'active'
                        ? 'bg-emerald-50 border-brand-emerald/20 text-brand-emerald'
                        : 'bg-indigo-50 border-brand-indigo/20 text-brand-indigo'
                    } mt-1`}>
                      {selectedNode.status === 'active' ? 'Active Focus' : 'Scheduled'}
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="space-y-6">
                  
                  {/* Scope */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Scope of Learning</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                      {selectedNode.purpose}
                    </p>
                  </div>

                  {/* Why SaaS */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-indigo flex items-center gap-1.5 mb-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Why this matters for SaaS</span>
                    </h4>
                    <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed font-sans">
                      {selectedNode.whySaaS}
                    </p>
                  </div>

                  {/* Syllabus / Subtopics */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Key Focus Topics</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.topics.map((t, i) => (
                        <span key={i} className="text-xs font-bold text-slate-605 bg-slate-100 border border-slate-200/50 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
