import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact?: () => void;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'We discuss your idea, goals, users and the problem the product needs to solve.'
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'I define the product structure, features, technical direction and development priorities.'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'The user experience and interface are shaped into a clear, intuitive product experience.'
  },
  {
    number: '04',
    title: 'BUILD',
    description: 'I develop the application, integrate the required systems and connect the backend, APIs and AI functionality where needed.'
  },
  {
    number: '05',
    title: 'LAUNCH & REFINE',
    description: 'The product is tested, deployed and refined based on real-world use and feedback.'
  }
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Intro */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            HOW I WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-3 sm:mb-4 leading-[1.12]">
            From idea to launch.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            A straightforward process designed to turn your idea into a polished, functional product.
          </p>
        </div>

        {/* 5 Process Steps Sequence */}
        {/* Desktop Layout: 5-step horizontal flow grid / Mobile Layout: Clean vertical sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          
          {/* Subtle Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-slate-200 z-0 pointer-events-none" />

          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative z-10 p-6 rounded-2xl sm:rounded-3xl bg-[#f8fafc] border border-slate-200/80 hover:border-blue-500/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Transition CTA */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
              Ready to build?
            </h4>
            <p className="text-slate-600 text-sm font-normal">
              Let's discuss your project goals and start turning your idea into software.
            </p>
          </div>

          <button
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0b0f19] text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xs cursor-pointer shrink-0"
            aria-label="Start a project with DBKDEV"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </motion.div>
    </section>
  );
};
