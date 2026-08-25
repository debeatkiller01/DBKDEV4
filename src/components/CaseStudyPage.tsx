import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Sparkles, 
  X, 
  Maximize2, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Layers, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  MessageSquareCode, 
  Users, 
  Mic, 
  Calendar, 
  Clock, 
  Library, 
  Minimize2, 
  Utensils, 
  MapPin, 
  Truck, 
  Receipt, 
  Sliders, 
  ShieldAlert, 
  CopyCheck, 
  Video, 
  UserCheck, 
  Mic2, 
  Film,
  Globe,
  Cpu,
  Workflow
} from 'lucide-react';
import { DetailedCaseStudy, FeatureItem } from '../data/caseStudiesData';
import { useSEO } from '../utils/useSEO';

interface CaseStudyPageProps {
  caseStudy: DetailedCaseStudy;
  onBack: () => void;
  onNavigateProject?: (slug: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ 
  caseStudy, 
  onBack,
  onNavigateProject
}) => {
  useSEO({
    title: `${caseStudy.title} — DBKDEV Case Study`,
    description: caseStudy.description,
    image: caseStudy.coverImage,
    url: `https://dbkdev.com/projects/${caseStudy.slug}`
  });

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseStudy.slug]);

  // Helper to render feature icons
  const renderFeatureIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-cyan-400" };
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'MessageSquareCode': return <MessageSquareCode {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Library': return <Library {...props} />;
      case 'Minimize2': return <Minimize2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Receipt': return <Receipt {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'CopyCheck': return <CopyCheck {...props} />;
      case 'Video': return <Video {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Mic2': return <Mic2 {...props} />;
      case 'Film': return <Film {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const handleLiveDemoClick = () => {
    if (caseStudy.liveDemo && caseStudy.liveDemo.startsWith('http')) {
      window.open(caseStudy.liveDemo, '_blank', 'noopener,noreferrer');
    } else {
      setNotification(`Launching live sandbox demo for "${caseStudy.title}"...`);
      setTimeout(() => setNotification(null), 3500);
    }
  };

  const handleStartProjectClick = () => {
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Case Study Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800/80 px-3.5 sm:px-8 py-3 flex items-center justify-between gap-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white px-2.5 sm:px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group min-h-[38px]"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span>Back<span className="hidden min-[380px]:inline"> to Projects</span></span>
        </button>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs font-mono text-slate-400">Project:</span>
          <span className="text-xs font-bold text-cyan-300 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
            {caseStudy.title}
          </span>
        </div>

        <button
          onClick={handleLiveDemoClick}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all min-h-[38px]"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* Demo Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-2xl flex items-center gap-3 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* ======================================== */}
        {/* HERO SECTION */}
        {/* ======================================== */}
        <section className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{caseStudy.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {caseStudy.title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {caseStudy.description}
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {caseStudy.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0e1526] text-slate-200 text-xs font-mono font-semibold border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleLiveDemoClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 font-semibold text-sm transition-all active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4 text-cyan-400" />
                <span>Back to Projects</span>
              </button>
            </div>
          </motion.div>

          {/* Large 16:9 Project Cover Image */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl shadow-black/80 group"
          >
            <img 
              src={caseStudy.coverImage} 
              alt={`${caseStudy.title} cover image`}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80" />
          </motion.div>
        </section>

        {/* ======================================== */}
        {/* PROJECT OVERVIEW */}
        {/* ======================================== */}
        <section className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0d1322] border border-slate-800/90 shadow-xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span>Project Architecture Overview</span>
          </h2>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Role</span>
              <p className="text-sm font-semibold text-slate-100">{caseStudy.role}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Project Type</span>
              <p className="text-sm font-semibold text-slate-100">{caseStudy.projectType}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Platform</span>
              <p className="text-sm font-semibold text-slate-100">{caseStudy.platform}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Status</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{caseStudy.status}</span>
              </div>
            </div>
          </div>

          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#070a12] border border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400">{m.label}</div>
                  <div className="text-lg font-extrabold text-cyan-300 font-mono mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ======================================== */}
        {/* THE PROBLEM & THE SOLUTION */}
        {/* ======================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-bold uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>The Challenge</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Understanding the Core Problem</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              {caseStudy.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>The Solution</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Engineering the Architecture</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              {caseStudy.solution}
            </p>
          </motion.div>

        </section>

        {/* ======================================== */}
        {/* KEY FEATURES */}
        {/* ======================================== */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Key System Features</h2>
            <p className="text-slate-400 text-sm">Engineered with high performance, accessibility, and intuitive interactions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {caseStudy.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 w-fit">
                  {renderFeatureIcon(feature.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{feature.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-normal">{feature.explanation}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* TECHNOLOGY & ARCHITECTURE */}
        {/* ======================================== */}
        <section className="p-8 rounded-3xl bg-[#0d1322] border border-slate-800 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-bold uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Technology & Architecture</h2>
            <p className="text-slate-300 text-sm">Production libraries and execution framework deployed in this application.</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {caseStudy.architecture.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-slate-200 text-sm font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* DESIGN & DEVELOPMENT PROCESS */}
        {/* ======================================== */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-bold uppercase">
              <Workflow className="w-3.5 h-3.5" />
              <span>Lifecycle Workflow</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Design & Development Lifecycle</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {caseStudy.process.map((stepItem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#0d1322] border border-slate-800 flex flex-col justify-between space-y-3 relative overflow-hidden"
              >
                <div className="text-2xl font-extrabold font-mono text-cyan-500/40">{stepItem.step}</div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">{stepItem.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{stepItem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* CHALLENGES & SOLUTIONS */}
        {/* ======================================== */}
        <section className="space-y-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Engineering Challenges & Solutions</h2>

          <div className="space-y-4">
            {caseStudy.challenges.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl bg-[#0d1322] border border-slate-800">
                <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block">Challenge</span>
                  <p className="text-sm text-slate-200 leading-relaxed">{item.challenge}</p>
                </div>

                <div className="space-y-2 pt-2 md:pt-0 md:pl-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">Engineering Solution</span>
                  <p className="text-sm text-slate-200 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* PROJECT GALLERY */}
        {/* ======================================== */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Project Gallery</h2>
              <p className="text-sm text-slate-400 mt-1">High-definition interface screenshots (16:9 aspect ratio).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy.gallery.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImage(imgUrl)}
                className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer group shadow-lg"
              >
                <img 
                  src={imgUrl} 
                  alt={`${caseStudy.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-slate-900/90 border border-slate-700 text-white shadow-xl">
                    <Maximize2 className="w-5 h-5 text-cyan-400" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
                <img src={lightboxImage} alt="Expanded screenshot" className="w-full h-auto object-contain max-h-[85vh]" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ======================================== */}
        {/* THE OUTCOME */}
        {/* ======================================== */}
        <section className="p-8 rounded-3xl bg-[#0d1322] border border-slate-800 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The Outcome</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Project Value & Results</h2>
          <p className="text-slate-200 text-base leading-relaxed font-normal">
            {caseStudy.outcome}
          </p>
        </section>

        {/* ======================================== */}
        {/* CALL TO ACTION (CTA) */}
        {/* ======================================== */}
        <section className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-[#0d1322] to-purple-950/40 border border-cyan-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="space-y-3 relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interested in building something similar?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-normal">
              Let's turn your idea into a production-ready product.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative z-10">
            <button
              onClick={handleLiveDemoClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleStartProjectClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 hover:text-white hover:bg-slate-800 font-bold text-sm transition-all active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </section>

      </main>

      {/* Case Study Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} DBKDEV. Engineered with precision and performance.</p>
      </footer>

    </div>
  );
};
