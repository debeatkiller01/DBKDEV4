import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Terminal, 
  Zap, 
  Layers, 
  X, 
  Copy, 
  Check 
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCodeModal, setActiveCodeModal] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const categories = ['All', 'AI Apps', 'SaaS', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-24 bg-[#070a12] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Work & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">AI Applications</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              A curated selection of production software engineering projects, autonomous AI agent platforms, and scalable cloud SaaS architectures.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0d1322] p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-[#0d1322]/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#090d16]/80 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-cyan-300">
                  {project.category}
                </div>

                {/* Top Action Icons */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {project.codeSnippet && (
                    <button
                      onClick={() => setActiveCodeModal(project)}
                      className="p-2 rounded-xl bg-[#090d16]/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      title="View Code Snippet"
                    >
                      <Terminal className="w-4 h-4 text-cyan-400" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-[#090d16]/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-[#090d16]/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 font-mono">
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Key Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2 border-y border-slate-800/80">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#090d16] p-2 rounded-lg border border-slate-800/80">
                      <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
                      <div className="text-xs font-bold text-slate-200">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-2 flex items-center justify-between">
                  {project.codeSnippet ? (
                    <button
                      onClick={() => setActiveCodeModal(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Inspect Code Snippet</span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Code Snippet Modal */}
      {activeCodeModal && activeCodeModal.codeSnippet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0c111d] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#080c16] border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">{activeCodeModal.title}</h4>
                  <span className="text-xs font-mono text-slate-400">Implementation Snippet</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyCode(activeCodeModal.codeSnippet!)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={() => setActiveCodeModal(null)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 bg-[#060911] overflow-x-auto max-h-[60vh]">
              <pre className="font-mono text-xs text-cyan-300 leading-relaxed whitespace-pre">
                <code>{activeCodeModal.codeSnippet}</code>
              </pre>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-[#080c16] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>TypeScript • Modern ESNext</span>
              {activeCodeModal.githubUrl && (
                <a
                  href={activeCodeModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  View full source on GitHub <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
