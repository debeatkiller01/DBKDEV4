import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
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

  const capabilities = [
    {
      number: "01",
      category: "AI & Automation",
      title: "AI & Automation",
      description: "Intelligent web applications with LLM integration, autonomous agents, semantic search, and automated business workflows."
    },
    {
      number: "02",
      category: "SaaS Development",
      title: "SaaS Products",
      description: "Scalable subscription platforms with authentication, multi-tenant databases, billing systems, and responsive dashboards."
    },
    {
      number: "03",
      category: "Full-Stack Development",
      title: "Full-Stack Web Apps",
      description: "End-to-end custom applications built with modern frontend frameworks, secure backend APIs, and production deployment."
    },
    {
      number: "04",
      category: "Product Development",
      title: "MVP & Product Engineering",
      description: "Rapid development from early concept to functional, market-ready MVPs built for real user validation."
    },
    {
      number: "05",
      category: "API & Backend Engineering",
      title: "Backend & API Architecture",
      description: "High-performance REST and GraphQL APIs, database schemas, third-party webhook integrations, and cloud infrastructure."
    },
    {
      number: "06",
      category: "UI & Frontend Engineering",
      title: "Frontend & UI Systems",
      description: "Fast, responsive web interfaces with clean component architectures, design systems, and accessible interactions."
    }
  ];

  return (
    <section id="services" className="py-10 sm:py-14 md:py-16 bg-[#f4f5f8] text-slate-900 border-t border-slate-200/80 relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <div className="max-w-xl mb-6 sm:mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-1 block">
            WHAT I BUILD
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mb-1.5">
            Core Capabilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Specialized engineering capabilities for modern web products and digital platforms.
          </p>
        </div>

        {/* 6 Concise Capability Cards in Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4.5">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.32, delay: idx * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              onClick={handleContactClick}
              className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2.5 will-change-transform"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100/80">
                    {item.number}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200/60 truncate max-w-[170px] sm:max-w-[190px]">
                    {item.category}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white text-slate-500 flex items-center justify-center transition-colors duration-200 shrink-0">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors duration-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

