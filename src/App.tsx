import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { AmbientGlow } from './components/AmbientGlow';
import { CASE_STUDIES_DATA } from './data/caseStudiesData';
import { useSEO } from './utils/useSEO';

// Lazy loading heavy non-critical views
const CaseStudyPage = lazy(() => import('./components/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const ProjectsPage = lazy(() => import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageLoader = () => (
  <div className="min-h-screen bg-[#f4f5f8] flex items-center justify-center p-6">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
        Loading...
      </span>
    </div>
  </div>
);

type ViewState = 
  | { type: 'home' }
  | { type: 'projects' }
  | { type: 'contact' }
  | { type: 'project'; slug: string }
  | { type: 'not-found' };

function getViewStateFromLocation(): ViewState {
  const path = window.location.pathname;
  const hash = window.location.hash;

  // 1. Root / Home check
  if (path === '/' && (!hash || hash === '#hero' || hash === '#projects' || hash === '#services' || hash === '#about')) {
    return { type: 'home' };
  }

  // 2. All Projects page check: /projects, /work, #projects-all
  if (path === '/projects' || path === '/projects/' || path === '/work' || hash === '#projects-all') {
    return { type: 'projects' };
  }

  // 3. Contact page check: /contact or #contact
  if (path === '/contact' || path === '/contact/' || hash === '#contact') {
    return { type: 'contact' };
  }

  // 4. Case study path check: e.g. /projects/futurepath-university
  if (path.includes('/projects/')) {
    const parts = path.split('/projects/');
    const rawSlug = parts[1]?.replace(/\/$/, '');
    if (rawSlug) {
      if (CASE_STUDIES_DATA[rawSlug]) {
        return { type: 'project', slug: rawSlug };
      }
      return { type: 'not-found' };
    }
  }

  // 5. Hash check: e.g. #projects/futurepath-university
  if (hash.includes('projects/')) {
    const parts = hash.split('projects/');
    const rawSlug = parts[1]?.replace(/\/$/, '');
    if (rawSlug) {
      if (CASE_STUDIES_DATA[rawSlug]) {
        return { type: 'project', slug: rawSlug };
      }
      return { type: 'not-found' };
    }
  }

  // Any other unknown non-root path -> 404
  if (path !== '/') {
    return { type: 'not-found' };
  }

  return { type: 'home' };
}

export default function App() {
  const [viewState, setViewState] = useState<ViewState>(getViewStateFromLocation());

  // SEO for current view state
  useSEO({
    title: viewState.type === 'home'
      ? "DBKDEV — AI Apps, SaaS & Full-Stack Developer"
      : viewState.type === 'projects'
      ? "All Projects — DBKDEV"
      : viewState.type === 'contact'
      ? "Contact DBKDEV — AI Apps & Full-Stack Developer"
      : viewState.type === 'project' && CASE_STUDIES_DATA[viewState.slug]
      ? `${CASE_STUDIES_DATA[viewState.slug].title} — DBKDEV Case Study`
      : "404 — Page Not Found | DBKDEV",
    description: viewState.type === 'home'
      ? "DBKDEV is a software engineer and AI app developer building AI-powered applications, SaaS platforms, full-stack web apps and custom digital products."
      : viewState.type === 'projects'
      ? "Browse the complete production portfolio of AI systems, SaaS platforms, and full-stack software built by DBKDEV."
      : viewState.type === 'contact'
      ? "Get in touch with DBKDEV for AI application development, SaaS building, full-stack web engineering, and custom digital product projects."
      : viewState.type === 'project' && CASE_STUDIES_DATA[viewState.slug]
      ? CASE_STUDIES_DATA[viewState.slug].description
      : "The page you are looking for does not exist.",
    url: viewState.type === 'contact' 
      ? "https://dbkdev.com/contact" 
      : viewState.type === 'projects'
      ? "https://dbkdev.com/projects"
      : viewState.type === 'project' && CASE_STUDIES_DATA[viewState.slug] 
      ? `https://dbkdev.com/projects/${viewState.slug}`
      : "https://dbkdev.com/"
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setViewState(getViewStateFromLocation());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigateToCaseStudy = (slug: string) => {
    window.history.pushState({}, '', `/projects/${slug}`);
    if (CASE_STUDIES_DATA[slug]) {
      setViewState({ type: 'project', slug });
    } else {
      setViewState({ type: 'not-found' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAllProjects = () => {
    window.history.pushState({}, '', '/projects');
    setViewState({ type: 'projects' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setViewState({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    window.history.pushState({}, '', '/contact');
    setViewState({ type: 'contact' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeKey = viewState.type === 'project' 
    ? `project-${viewState.slug}` 
    : viewState.type;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        <Suspense fallback={<PageLoader />}>
          {viewState.type === 'contact' ? (
            <ContactPage onNavigateHome={handleBackToHome} />
          ) : viewState.type === 'projects' ? (
            <ProjectsPage 
              onNavigateHome={handleBackToHome} 
              onOpenContact={handleOpenContact}
              onSelectCaseStudy={handleNavigateToCaseStudy}
            />
          ) : viewState.type === 'project' && CASE_STUDIES_DATA[viewState.slug] ? (
            <CaseStudyPage 
              caseStudy={CASE_STUDIES_DATA[viewState.slug]}
              onBack={handleBackToHome}
              onNavigateProject={handleNavigateToCaseStudy}
            />
          ) : viewState.type === 'not-found' ? (
            <NotFoundPage onNavigateHome={handleBackToHome} onOpenContact={handleOpenContact} />
          ) : (
            <div className="min-h-screen bg-[#f4f5f8] text-slate-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-600 relative">
              {/* Desktop Ambient Spotlight */}
              <AmbientGlow />

              {/* 1. Header Navigation */}
              <Header onOpenContact={handleOpenContact} onNavigateHome={handleBackToHome} />

              {/* Exact Homepage Hierarchy */}
              <main>
                {/* 2. Hero Section */}
                <Hero onOpenContact={handleOpenContact} />

                {/* 3. Selected Work (3 Featured Projects Only + View All Projects Link) */}
                <FeaturedProjects 
                  onSelectCaseStudy={handleNavigateToCaseStudy} 
                  onViewAllProjects={handleNavigateToAllProjects}
                />

                {/* 4. What I Build (Capability Cards) */}
                <ServicesSection onOpenContact={handleOpenContact} />

                {/* 5. About DBKDEV */}
                <AboutSection onOpenContact={handleOpenContact} />

                {/* 6. Final CTA Section */}
                <FinalCTASection 
                  onOpenContact={handleOpenContact} 
                  onViewWork={() => {
                    const projectsElem = document.getElementById('projects');
                    if (projectsElem) {
                      projectsElem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </main>

              {/* 6. Minimal Footer */}
              <Footer onOpenContact={handleOpenContact} onNavigateHome={handleBackToHome} />
            </div>
          )}
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
