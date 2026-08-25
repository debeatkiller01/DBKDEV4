import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
  useEffect(() => {
    document.title = "404 — Page Not Found | DBKDEV";
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f5f8] text-slate-900 font-sans flex flex-col justify-between">
      <Header onOpenContact={onOpenContact} onNavigateHome={onNavigateHome} />

      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Error 404
            </span>
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight pt-2">
              Page Not Found
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              The page or case study you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0b0f19] text-white font-semibold text-xs hover:bg-slate-800 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>
          </div>
        </motion.div>
      </main>

      <Footer onNavigateHome={onNavigateHome} onOpenContact={onOpenContact} />
    </div>
  );
};
