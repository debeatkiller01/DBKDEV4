import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, FeaturedProject } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectCaseStudy?: (slug: string) => void;
  onViewAllProjects?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ 
  onSelectCaseStudy,
  onViewAllProjects
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Strictly 3 featured projects for homepage: TOMI Planner, FuturePath University, DBK Image Studio
  const featuredIds = ['tomi-planner', 'futurepath-university', 'dbk-image-studio'];
  const homepageProjects: FeaturedProject[] = featuredIds
    .map(id => PORTFOLIO_DATA.featuredProjects.find(p => p.id === id))
    .filter((p): p is FeaturedProject => Boolean(p));

  const handleLiveDemoClick = (e: React.MouseEvent, project: FeaturedProject) => {
    e.stopPropagation();
    if (project.liveUrl && project.liveUrl.startsWith('http')) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCaseStudyClick = (e: React.MouseEvent, project: FeaturedProject) => {
    e.stopPropagation();
    const slug = project.id;
    if (onSelectCaseStudy) {
      onSelectCaseStudy(slug);
    } else {
      window.history.pushState({}, '', `/projects/${slug}`);
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const handleCardClick = (project: FeaturedProject) => {
    const slug = project.id;
    if (onSelectCaseStudy) {
      onSelectCaseStudy(slug);
    } else {
      window.history.pushState({}, '', `/projects/${slug}`);
      window.dispatchEvent(new Event('popstate'));
    }
  };

  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewAllProjects) {
      onViewAllProjects();
    } else {
      window.history.pushState({}, '', '/projects');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1 primary flagship (TOMI Planner) and 2 supporting (FuturePath, DBK Image Studio)
  const spotlightProject = homepageProjects[0];
  const supportingProjects = homepageProjects.slice(1, 3);

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-16 bg-[#f4f5f8] text-slate-900 border-t border-slate-200/80 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Intro */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-1 block">
            SELECTED WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mb-1.5">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed">
            A focused selection of AI applications, SaaS platforms, and software built for real users.
          </p>
        </div>

        {/* 1. PRIMARY FEATURED CARD (TOMI PLANNER) - Editorial Showcase */}
        {spotlightProject && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={prefersReducedMotion ? {} : { y: -3 }}
            onClick={() => handleCardClick(spotlightProject)}
            className="group mb-5 sm:mb-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden p-3.5 sm:p-5 lg:p-6 cursor-pointer will-change-transform"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* Image Preview */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 aspect-video shadow-2xs group-hover:shadow-xs transition-all duration-300">
                  <img
                    src={spotlightProject.image}
                    alt={`${spotlightProject.title} – ${spotlightProject.category}`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.018] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    FEATURED
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100/80">
                      {spotlightProject.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                    {spotlightProject.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {spotlightProject.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {spotlightProject.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 text-slate-700 text-[10px] sm:text-[11px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-100">
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    type="button"
                    onClick={(e) => handleCaseStudyClick(e, spotlightProject)}
                    className="group/btn inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0b0f19] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all cursor-pointer shadow-xs min-h-[38px] sm:min-h-[40px]"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  {spotlightProject.liveUrl && (
                    <motion.button
                      whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      type="button"
                      onClick={(e) => handleLiveDemoClick(e, spotlightProject)}
                      className="group/btn inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer shadow-2xs min-h-[38px] sm:min-h-[40px]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </motion.button>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* 2 & 3. TWO SUPPORTING PROJECTS (FuturePath & DBK Image Studio) - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-7">
          {supportingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={prefersReducedMotion ? {} : { y: -3 }}
              onClick={() => handleCardClick(project)}
              className="group flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden p-3.5 sm:p-5 justify-between space-y-3 cursor-pointer will-change-transform"
            >
              <div className="space-y-2.5">
                {/* Image Box */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 aspect-video shadow-2xs group-hover:shadow-xs transition-all duration-300">
                  <img
                    src={project.image}
                    alt={`${project.title} – ${project.category}`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.018] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Category Tag */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100/80">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 text-slate-700 text-[10px] sm:text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-100">
                <motion.button
                  whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  type="button"
                  onClick={(e) => handleCaseStudyClick(e, project)}
                  className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#0b0f19] text-white font-semibold text-xs hover:bg-slate-800 transition-all cursor-pointer shadow-xs min-h-[38px]"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>

                {project.liveUrl && (
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    type="button"
                    onClick={(e) => handleLiveDemoClick(e, project)}
                    className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-slate-300 text-slate-800 font-semibold text-xs hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer shadow-2xs min-h-[38px]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </motion.button>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center pt-1">
          <motion.a
            whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            href="/projects"
            onClick={handleViewAllClick}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors py-2 sm:py-2.5 px-4 sm:px-5 rounded-full bg-white/80 hover:bg-white border border-slate-200/80 shadow-2xs cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform text-slate-700 group-hover:text-blue-600" />
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
};

