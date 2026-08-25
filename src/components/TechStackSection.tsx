import React from 'react';
import { motion } from 'motion/react';

interface TechCategory {
  number: string;
  title: string;
  skills: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    number: '01',
    title: 'FRONTEND',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    number: '02',
    title: 'BACKEND & DATA',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs']
  },
  {
    number: '03',
    title: 'AI & AUTOMATION',
    skills: ['AI APIs', 'Generative AI', 'AI integrations', 'Automation', 'Prompt engineering']
  },
  {
    number: '04',
    title: 'TOOLS & DEPLOYMENT',
    skills: ['Git', 'GitHub', 'Netlify', 'Vercel', 'Google AI Studio']
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#f4f5f8] text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Section Intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
              Built with modern technology.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed pt-1">
              I use the right combination of frontend, backend, AI and cloud technologies to turn product ideas into reliable applications.
            </p>
          </div>

          {/* Right Column: Curated Technology Categories */}
          <div className="lg:col-span-7 space-y-5">
            {TECH_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-all duration-300 space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/80">
                    {category.number}
                  </span>
                  <h3 className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                {/* Technology Pills Grid */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-100/80 hover:border-slate-300 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

