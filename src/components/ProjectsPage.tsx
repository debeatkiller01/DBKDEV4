import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  GitBranch, 
  Sparkles,
  Layers,
  Search
} from 'lucide-react';
import { PORTFOLIO_DATA, FeaturedProject } from '../data/portfolioData';
import { Header } from './Header';
import { Footer } from './Footer';
import { useSEO } from '../utils/useSEO';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
  onSelectCaseStudy: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateHome,
  onOpenContact,
  onSelectCaseStudy
}) => {
  useSEO({
    title: "All Projects & Production Work — DBKDEV",
    description: "Browse the complete catalog of production AI applications, SaaS platforms, and custom full-stack software built by DBKDEV.",
    url: "https://dbkdev.com/projects"
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [demoNotification, setDemoNotification] = useState<string | null>(null);

  const categories = ['All', 'AI Applications', 'SaaS Products', 'Full-Stack', 'Tools & Media'];

  const allProjects = PORTFOLIO_DATA.featuredProjects;

  const handleLiveDemoClick = (project: FeaturedProject) => {
    if (project.liveUrl && project.liveUrl.startsWith('http')) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setDemoNotification(`Launching live sandbox demo for "${project.title}"...`);
      setTimeout(() => setDemoNotification(null), 3000);
    }
  };

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI Applications') return project.category.includes('AI') || project.category.includes('Productivity');
    if (selectedCategory === 'SaaS Products') return project.category.includes('Platform') || project.category.includes('Education');
    if (selectedCategory === 'Full-Stack') return project.technologies.includes('TypeScript') || project.technologies.includes('Supabase') || project.category.includes('Delivery');
    if (selectedCategory === 'Tools & Media') return project.category.includes('Tool') || project.category.includes('Video');

    return true;
  });

  return (
    <div className="min-h-screen bg-[#f4f5f8] text-slate-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-600">
      <Header onOpenContact={onOpenContact} onNavigateHome={onNavigateHome} />

      <main className="pt-24 pb-20 sm:pt-28 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>

            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              {allProjects.length} Production Projects
            </span>
          </div>

          {/* Page Heading */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              PORTFOLIO ARCHIVE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-3 sm:mb-4">
              All Selected Work
            </h1>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Explore the complete catalog of AI-powered applications, SaaS products, full-stack systems, and client software built from idea to production.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative sm:w-64 px-2 pb-2 sm:pb-0 sm:px-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Demo Toast Notification */}
          <AnimatePresence>
            {demoNotification && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>{demoNotification}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/80">
              <p className="text-slate-500 text-sm font-medium">No projects found matching your filter criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden p-5 sm:p-6"
                >
                  <div>
                    {/* Project Preview Image */}
                    <div 
                      onClick={() => onSelectCaseStudy(project.id)}
                      className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 aspect-video mb-4 shadow-2xs group-hover:shadow-xs transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Category */}
                    <div className="mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onSelectCaseStudy(project.id)}
                      className="text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 text-slate-700 text-[11px] font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onSelectCaseStudy(project.id)}
                      className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0b0f19] text-white font-semibold text-xs hover:bg-slate-800 active:scale-[0.97] transition-all cursor-pointer"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>

                    <button
                      onClick={() => handleLiveDemoClick(project)}
                      className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 active:scale-[0.97] transition-all cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom CTA on Projects Page */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Whether you need an AI application, custom SaaS, or full-stack software, let's build something great.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b0f19] text-white font-semibold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenContact={onOpenContact} onNavigateHome={onNavigateHome} />
    </div>
  );
};
