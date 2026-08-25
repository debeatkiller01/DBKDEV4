import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Sparkles, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$5,000 - $15,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#090d16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Exceptional</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have an upcoming SaaS project, AI application, or engineering advisory request? Drop a message below or email directly to discuss technical specs and timelines.
            </p>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.engineer.socials.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800 hover:border-cyan-500/40 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300">
                    {PORTFOLIO_DATA.engineer.socials.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Turnaround & Availability</div>
                  <div className="text-sm font-bold text-white">
                    Response within 24 hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0d1322] border border-slate-800">
                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location & Timezone</div>
                  <div className="text-sm font-bold text-white">
                    {PORTFOLIO_DATA.engineer.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4 text-slate-400 text-sm">
              <span className="font-semibold text-slate-300">Social Profiles:</span>
              <a 
                href={PORTFOLIO_DATA.engineer.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PORTFOLIO_DATA.engineer.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PORTFOLIO_DATA.engineer.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-cyan-400 font-semibold">{formData.name}</span>. DBKDEV will review your inquiry and reply to <span className="text-white font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', budget: '$5,000 - $15,000', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Start a Project Inquiry</span>
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">* All fields required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                      >
                        <option value="AI Application">AI Application / LLM Agent</option>
                        <option value="Full-Stack Web App">Full-Stack SaaS Platform</option>
                        <option value="Cloud Architecture">Cloud Backend & API Architecture</option>
                        <option value="Technical Advisory">Technical Advisory / Code Audit</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500/60 font-sans"
                      >
                        <option value="< $5,000">&lt; $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Project Overview & Goals</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project requirements, target timeline, or specific engineering goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-slate-800 text-white text-xs placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
