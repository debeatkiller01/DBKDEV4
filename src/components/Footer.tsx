import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, MessageSquare, Mail } from 'lucide-react';
import { DBKLogo } from './DBKLogo';

interface FooterProps {
  onOpenContact?: () => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    if (onNavigateHome) {
      onNavigateHome();
    }
    setTimeout(() => {
      if (sectionId === 'home' || sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const handleContactClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0b0f19] text-slate-400 border-t border-slate-800/80 pt-8 pb-7 sm:pt-10 sm:pb-8 text-xs relative z-10" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-slate-800/70">
          
          {/* Brand & Tagline */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2.5">
              <DBKLogo size={28} />
              <span className="font-extrabold text-white text-base tracking-tight">
                DBKDEV
              </span>
            </div>
            <p className="text-slate-300 font-medium text-xs">
              AI Apps, SaaS &amp; Full-Stack Engineering.
            </p>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Building practical digital products from idea to production.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/dbkdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-7 h-7 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-7 h-7 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                className="w-7 h-7 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap sm:flex-nowrap items-start gap-8 sm:gap-12 text-xs">
            {/* Navigation */}
            <div className="space-y-2">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-300 text-[11px]">
                Navigation
              </span>
              <ul className="space-y-1.5 font-medium text-slate-400">
                <li>
                  <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('projects')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Work
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={handleContactClick} className="hover:text-white transition-colors cursor-pointer text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Channels */}
            <div className="space-y-2">
              <span className="font-mono font-bold uppercase tracking-wider text-slate-300 text-[11px]">
                Contact
              </span>
              <ul className="space-y-1.5 font-medium text-slate-400">
                <li>
                  <a href="mailto:dbkdev2@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-3 h-3 text-blue-400" />
                    <span>dbkdev2@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347015751064?text=Hello%20DBKDEV%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <MessageSquare className="w-3 h-3 text-emerald-500" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex items-center justify-between text-[11px] text-slate-500 font-normal">
          <span>© 2026 DBKDEV. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer py-0.5 px-1.5 rounded hover:bg-slate-900"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
