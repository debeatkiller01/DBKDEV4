import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenContact?: () => void;
  onViewWork?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContact, onViewWork }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleCTAClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleViewWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onViewWork) {
      onViewWork();
    } else {
      const projectsElem = document.getElementById('projects');
      if (projectsElem) {
        projectsElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="final-cta" className="py-10 sm:py-14 md:py-16 bg-[#f4f5f8] text-slate-900 border-t border-slate-200/80 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Eyebrow Label */}
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-1.5 block">
          START A PROJECT
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-2 sm:mb-3 leading-[1.14]">
          Have an idea? Let's build it.
        </h2>

        {/* Supporting Text */}
        <p className="text-slate-600 text-xs min-[360px]:text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mx-auto mb-5 sm:mb-7">
          Whether you need an AI-powered application, SaaS product or custom web solution, let's turn your idea into something real.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-3.5">
          {/* Primary CTA */}
          <motion.button
            whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            onClick={handleCTAClick}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0b0f19] text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg cursor-pointer min-h-[44px] sm:min-h-[46px]"
            aria-label="Let's work together on your project"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Secondary Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 pt-0.5 text-xs sm:text-sm">
            <a
              href="#projects"
              onClick={handleViewWorkClick}
              className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <span className="hidden sm:inline-block text-slate-300">•</span>

            {/* WhatsApp Option */}
            <a
              href="https://wa.me/2347015751064?text=Hello%20DBKDEV%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-emerald-700 transition-colors py-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Prefer WhatsApp? Start a conversation &rarr;</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

