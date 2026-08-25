import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { DBKLogo } from './DBKLogo';

interface HeaderProps {
  onOpenContact?: () => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigateHome) {
      onNavigateHome();
    }

    const targetId = href.replace('#', '');
    setTimeout(() => {
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const handleHireMeClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const ctaElem = document.getElementById('final-cta') || document.getElementById('services');
      if (ctaElem) {
        ctaElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5 sm:py-3' 
          : 'bg-[#f0f2f5]/90 backdrop-blur-md py-3 sm:py-4 border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* LEFT: Logo - Refined DBK Monogram + DBKDEV text */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
            aria-label="DBKDEV Homepage"
          >
            <DBKLogo size={32} className="sm:w-[34px] sm:h-[34px]" />
            <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              DBKDEV
            </span>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold text-slate-600">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="relative hover:text-slate-950 transition-colors py-1 group/nav"
            >
              <span>Work</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/nav:w-full transition-all duration-200 rounded-full" />
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="relative hover:text-slate-950 transition-colors py-1 group/nav"
            >
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/nav:w-full transition-all duration-200 rounded-full" />
            </a>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="relative hover:text-slate-950 transition-colors py-1 group/nav"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/nav:w-full transition-all duration-200 rounded-full" />
            </a>
          </nav>

          {/* RIGHT: Actions (Hire Me CTA visible on BOTH Mobile & Desktop + Mobile Hamburger Menu button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Primary CTA - Visible everywhere */}
            <motion.button
              whileHover={{ y: -0.5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleHireMeClick}
              className="group inline-flex items-center gap-2 sm:gap-3 pl-3.5 sm:pl-5 pr-1.5 sm:pr-2 py-2 sm:py-2 rounded-full bg-[#0b0f19] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap min-h-[38px] sm:min-h-[40px]"
            >
              <span>Hire Me</span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#0b0f19] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200 shrink-0">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-100/90 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 active:scale-95 transition-all focus:outline-none cursor-pointer shrink-0 border border-slate-200/60 min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200/80 px-5 py-5 space-y-4 shadow-xl overflow-hidden mt-2.5 sm:mt-3"
          >
            <nav className="flex flex-col space-y-1 font-semibold text-slate-700">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center justify-between text-base py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                <span>Work</span>
                <span className="text-xs text-slate-400 font-normal">Featured Projects</span>
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="flex items-center justify-between text-base py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                <span>Services</span>
                <span className="text-xs text-slate-400 font-normal">AI & Full-Stack</span>
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="flex items-center justify-between text-base py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                <span>About</span>
                <span className="text-xs text-slate-400 font-normal">Background & Philosophy</span>
              </a>
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={handleHireMeClick}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#0b0f19] text-white font-semibold text-sm active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                <span>Start a Project / Hire Me</span>
                <div className="w-6 h-6 rounded-full bg-white text-[#0b0f19] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

