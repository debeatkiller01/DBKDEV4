import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const approachHighlights = [
    {
      number: "01",
      title: "Product Thinking",
      description: "I focus on the problem the software needs to solve, not just the technology behind it."
    },
    {
      number: "02",
      title: "AI Where It Matters",
      description: "I use AI when it creates genuine value for the product or user experience."
    },
    {
      number: "03",
      title: "Full-Stack Execution",
      description: "I can take a product from interface and frontend development through backend integration and deployment."
    },
    {
      number: "04",
      title: "Built for Real Users",
      description: "I prioritize usability, responsiveness, reliability and a polished final experience."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Eyebrow, Main Heading, Story & Transition CTA */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-1.5 block">
                ABOUT DBKDEV
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-2.5 sm:mb-3.5 leading-[1.12]">
                Building products, not just websites.
              </h2>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                I'm a software engineer and AI app developer focused on turning ideas into practical, production-ready digital products.
              </p>
            </div>

            {/* Personal Story Paragraphs */}
            <div className="space-y-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              <p>
                I enjoy taking an idea from the first concept through design, development, integration and deployment. My work sits at the intersection of software engineering, AI and product design.
              </p>
              <p>
                Whether it's an AI-powered tool, a SaaS platform or a custom web application, I focus on making the final product useful, intuitive and ready for real users.
              </p>
            </div>

            {/* Subtle Transition CTA */}
            <div className="pt-4 sm:pt-5 border-t border-slate-100 space-y-2">
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                Have a product idea?
              </p>
              <motion.button
                whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                onClick={handleContactClick}
                className="group inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#0b0f19] text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-xs cursor-pointer min-h-[38px]"
                aria-label="Contact DBKDEV about a product idea"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Approach Highlights (Compact Summary) */}
          <div className="lg:col-span-6 space-y-3 lg:pt-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
              THE DBKDEV APPROACH
            </span>

            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {approachHighlights.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={prefersReducedMotion ? {} : { y: -2 }}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-slate-300 hover:shadow-2xs transition-all duration-200 space-y-1.5 will-change-transform"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                      {item.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};


