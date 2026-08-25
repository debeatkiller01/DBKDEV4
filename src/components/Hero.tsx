import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const HERO_PORTRAIT_URL = "https://i.postimg.cc/X7g6qc8w/1787506109489.jpg";

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle Mouse Parallax for Portrait on Desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Constrain shift to a microscopic 2–4px range
  const portraitX = useTransform(smoothMouseX, [-300, 300], [-3.5, 3.5]);
  const portraitY = useTransform(smoothMouseY, [-300, 300], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || typeof window === 'undefined' || window.innerWidth < 1024) return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMe = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14 bg-[#f0f2f5] overflow-hidden text-slate-900"
    >
      {/* Subtle Futuristic Ambient Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Fine Technical Grid Matrix with Imperceptible Slow Motion */}
        <motion.div 
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['0px 0px', '24px 24px']
          }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-[0.24]" 
          style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1.2px, transparent 1.2px)', 
            backgroundSize: '24px 24px' 
          }} 
        />
        
        {/* Soft Radial Ambient Glow */}
        <motion.div 
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.04, 1],
            opacity: [0.35, 0.45, 0.35]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[440px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Graphic Centerpiece Block - Tightened for instant mobile viewport fit */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex items-center justify-center mb-4 sm:mb-6 pt-0">
          
          {/* Outlined "DBKDEV" Background Text with subtle ambient depth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <span 
              className="text-[44px] min-[360px]:text-[52px] min-[400px]:text-[64px] sm:text-[100px] md:text-[120px] font-black tracking-wider text-transparent uppercase opacity-20 sm:opacity-25 leading-none whitespace-nowrap select-none will-change-transform"
              style={{ WebkitTextStroke: '1px #a0b2c6' }}
            >
              DBKDEV
            </span>
          </div>

          {/* Central Blue Archway & Professional Portrait Cutout with Micro-Parallax */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.48, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={prefersReducedMotion ? {} : { x: portraitX, y: portraitY }}
            className="relative z-10 my-0.5 will-change-transform"
          >
            {/* Blue Arch Container */}
            <div className="relative w-[150px] min-[360px]:w-[170px] min-[400px]:w-[190px] sm:w-[230px] md:w-[250px] h-[180px] min-[360px]:h-[200px] min-[400px]:h-[225px] sm:h-[270px] md:h-[290px] bg-[#2563eb] rounded-t-[75px] min-[360px]:rounded-t-[85px] min-[400px]:rounded-t-[95px] sm:rounded-t-[115px] md:rounded-t-[125px] flex items-end justify-center shadow-md shadow-blue-900/10 overflow-hidden group border border-blue-400/20">
              <img 
                src={HERO_PORTRAIT_URL}
                alt="DBKDEV Professional Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.03] drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Floating White Pill Badges with Organic Micro-Float */}
            {/* Left Badge: AI apps */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.88, y: 4 }}
              animate={prefersReducedMotion ? { opacity: 1, scale: 1, y: 0 } : { 
                opacity: 1, 
                scale: 1,
                y: [0, -3.5, 0] 
              }}
              transition={prefersReducedMotion ? { duration: 0.3 } : { 
                opacity: { duration: 0.4, delay: 0.18 },
                scale: { duration: 0.4, delay: 0.18 },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
              className="absolute top-[52%] -left-2 min-[360px]:-left-3 sm:-left-6 md:-left-8 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md shadow-slate-300/30 border border-slate-200/80 text-slate-900 font-bold text-[10px] min-[360px]:text-[11px] sm:text-xs tracking-tight whitespace-nowrap select-none will-change-transform"
            >
              AI apps
            </motion.div>

            {/* Right Badge: SaaS builds */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.88, y: 4 }}
              animate={prefersReducedMotion ? { opacity: 1, scale: 1, y: 0 } : { 
                opacity: 1, 
                scale: 1,
                y: [0, 3, 0] 
              }}
              transition={prefersReducedMotion ? { duration: 0.3 } : { 
                opacity: { duration: 0.4, delay: 0.28 },
                scale: { duration: 0.4, delay: 0.28 },
                y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              }}
              className="absolute top-[16%] -right-2 min-[360px]:-right-3 sm:-right-6 md:-right-8 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-md shadow-slate-300/30 border border-slate-200/80 text-slate-900 font-bold text-[10px] min-[360px]:text-[11px] sm:text-xs tracking-tight whitespace-nowrap select-none will-change-transform"
            >
              SaaS builds
            </motion.div>
          </motion.div>

        </div>

        {/* Text Content Block - Left Aligned with Staggered Entrance */}
        <div className="max-w-2xl mx-auto text-left">
          
          {/* Greeting */}
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-500 font-medium text-xs sm:text-sm md:text-base mb-1 tracking-normal"
          >
            Hey, I'm DBKDEV.
          </motion.p>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12] mb-2.5 sm:mb-3.5 max-w-xl break-words"
          >
            AI Apps, SaaS &amp; Full–Stack Engineering
          </motion.h1>

          {/* Value Proposition */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.14, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-slate-600 text-xs min-[360px]:text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-5 sm:mb-6 max-w-xl"
          >
            I build AI-powered products, SaaS platforms and custom web applications that turn ideas into production-ready software.
          </motion.p>

          {/* CTA Buttons with Micro-Interactions */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              onClick={handleHireMe}
              className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-3 sm:py-3 rounded-full bg-[#0b0f19] text-white font-semibold text-xs sm:text-sm md:text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-lg cursor-pointer min-h-[44px]"
              aria-label="Hire DBKDEV"
            >
              <span>Hire Me</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-[#0b0f19] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              whileHover={prefersReducedMotion ? {} : { y: -1, scale: 1.01 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              href="#projects"
              onClick={handleScrollToProjects}
              className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-3 sm:py-3 rounded-full bg-white text-slate-900 border border-slate-300 font-semibold text-xs sm:text-sm md:text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs cursor-pointer min-h-[44px]"
              aria-label="View DBKDEV work"
            >
              <span>View My Work</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

