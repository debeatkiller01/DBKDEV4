import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Loader2, 
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Header } from './Header';
import { Footer } from './Footer';
import { useSEO } from '../utils/useSEO';

interface ContactPageProps {
  onNavigateHome: () => void;
}

const PROJECT_TYPES = [
  'AI Application / LLM Integration',
  'SaaS Product',
  'Full-Stack Web Application',
  'MVP / Product Development',
  'API / Backend Development',
  'UI / Frontend Development',
  'Other'
];

const BUDGET_PRESETS = ['500', '1,000', '2,500', '5,000+'];

const TIMELINE_OPTIONS = [
  { id: 'asap', label: 'ASAP' },
  { id: '1-4-weeks', label: '1–4 weeks' },
  { id: '1-3-months', label: '1–3 months' },
  { id: 'flexible', label: 'Flexible' }
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  useSEO({
    title: "Hire Me — DBKDEV | Start a Project Brief",
    description: "Tell me what you're building, what you need, and where you want to take it. I'll review your project and get back to you with next steps.",
    url: "https://dbkdev.com/contact"
  });

  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Application / LLM Integration',
    budget: '',
    timeline: '1–4 weeks',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateField = (field: 'name' | 'email' | 'message', value: string) => {
    let error: string | undefined = undefined;
    if (field === 'name') {
      if (!value.trim()) error = 'Please enter your name or company.';
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Please enter your email address.';
      } else if (!emailRegex.test(value.trim())) {
        error = 'Please enter a valid email address (e.g. you@example.com).';
      }
    } else if (field === 'message') {
      if (!value.trim()) {
        error = 'Please provide a brief description of your project.';
      } else if (value.trim().length < 10) {
        error = 'Please share a few more details so I can understand your scope.';
      }
    }
    return error;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);

    if (name === 'name' || name === 'email' || name === 'message') {
      if (touched[name]) {
        const error = validateField(name, value);
        setFieldErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setFieldErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleBudgetPreset = (preset: string) => {
    setFormData(prev => ({
      ...prev,
      budget: prev.budget === preset ? '' : preset
    }));
  };

  const handleTimelineSelect = (timelineLabel: string) => {
    setFormData(prev => ({ ...prev, timeline: timelineLabel }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setSubmitError(null);

    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);

    setTouched({ name: true, email: true, message: true });
    setFieldErrors({ name: nameError, email: emailError, message: messageError });

    if (nameError || emailError || messageError) {
      setSubmitError('Please complete all required fields correctly before sending.');
      return;
    }

    setIsSending(true);

    const formattedBudget = formData.budget.trim()
      ? (formData.budget.trim().startsWith('$') ? formData.budget.trim() : `$${formData.budget.trim()}`)
      : 'Flexible / To be estimated';

    const templateParams = {
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      user_name: formData.name.trim(),
      client_name: formData.name.trim(),

      email: formData.email.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      user_email: formData.email.trim(),
      client_email: formData.email.trim(),

      projectType: formData.projectType,
      project_type: formData.projectType,
      project: formData.projectType,

      budget: formattedBudget,
      timeline: formData.timeline,

      message: formData.message.trim(),

      to_name: 'DBKDEV',
      to_email: 'dbkdev2@gmail.com'
    };

    try {
      const response = await emailjs.send(
        'service_aiq335w',
        'template_p6cgrp2',
        templateParams,
        'twoW2Le4Dn5tCSj7j'
      );

      if (response.status === 200 || response.text === 'OK') {
        setFormSubmitted(true);
      } else {
        throw new Error(`EmailJS failed with status ${response.status}`);
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setSubmitError(
        "Something went wrong while transmitting your project brief. You can try again or reach out directly via Email or WhatsApp below."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      projectType: 'AI Application / LLM Integration',
      budget: '',
      timeline: '1–4 weeks',
      message: ''
    });
    setTouched({ name: false, email: false, message: false });
    setFieldErrors({});
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-slate-900 font-sans antialiased selection:bg-blue-500/20 selection:text-blue-600 flex flex-col justify-between">
      {/* 1. Header Navigation */}
      <Header 
        onOpenContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        onNavigateHome={onNavigateHome} 
      />

      <main className="flex-1 pt-20 sm:pt-28 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 2. Hero / Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-6 sm:mb-8"
          >
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 font-medium text-xs mb-3.5 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-950">Available for projects</span>
              <span className="text-emerald-300">·</span>
              <span className="text-emerald-700">Typically responds within 24–48h</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.14] mb-2.5">
              Let's Build Something Great.
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-600 text-xs min-[360px]:text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              Tell me what you're building, what you need, and where you want to take it. I'll review your project and get back to you with the next steps.
            </p>
          </motion.div>

          {/* 3. Project Brief Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-xs mb-8 transition-all"
          >
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                /* Polished Success State */
                <motion.div 
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="py-6 sm:py-8 px-2 sm:px-4 text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100/90 shadow-2xs">
                    <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                    Project brief received.
                  </h3>

                  <p className="text-slate-600 text-xs min-[360px]:text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out. I'll review your project details and get back to you within 24–48 hours.
                  </p>

                  {/* Submission Recap Pill */}
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 text-xs font-medium mb-7 max-w-lg mx-auto">
                    <span className="font-semibold text-slate-800">{formData.projectType}</span>
                    <span className="text-slate-300">•</span>
                    <span>Timeline: {formData.timeline}</span>
                    {formData.budget && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span>Budget: {formData.budget.startsWith('$') ? formData.budget : `$${formData.budget}`}</span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={onNavigateHome}
                      className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-[#0b0f19] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all cursor-pointer shadow-xs min-h-[44px]"
                    >
                      <span>Back to Home</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer min-h-[44px]"
                    >
                      Send Another Brief
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Project Brief Form */
                <form key="brief-form" onSubmit={handleFormSubmit} noValidate className="space-y-5 sm:space-y-6">
                  
                  {/* Card Header Label & Titles */}
                  <div className="border-b border-slate-100 pb-4 sm:pb-5">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                      Project Brief
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight">
                      Tell me about your project
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                      A few details will help me understand what you're building and how I can help.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-amber-50 border border-amber-200/90 rounded-xl p-3.5 sm:p-4 text-amber-950 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{submitError}</span>
                      </div>
                      <a
                        href="https://wa.me/2347015751064?text=Hello%20DBKDEV%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all shrink-0 cursor-pointer"
                      >
                        <span>Chat on WhatsApp</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </motion.div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name / Company */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Name / Company <span className="text-blue-600 font-bold">*</span>
                        </label>
                        {touched.name && fieldErrors.name && (
                          <span className="text-[11px] font-medium text-rose-600">Required</span>
                        )}
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        aria-invalid={touched.name && !!fieldErrors.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="Your name or company"
                        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-slate-900 placeholder:text-slate-400 text-base sm:text-sm focus:bg-white focus:outline-none transition-all ${
                          touched.name && fieldErrors.name
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                        }`}
                      />
                      {touched.name && fieldErrors.name && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium">{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Email <span className="text-blue-600 font-bold">*</span>
                        </label>
                        {touched.email && fieldErrors.email && (
                          <span className="text-[11px] font-medium text-rose-600">Valid email required</span>
                        )}
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        inputMode="email"
                        autoCapitalize="none"
                        autoCorrect="off"
                        aria-required="true"
                        aria-invalid={touched.email && !!fieldErrors.email}
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="you@example.com"
                        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-slate-900 placeholder:text-slate-400 text-base sm:text-sm focus:bg-white focus:outline-none transition-all ${
                          touched.email && fieldErrors.email
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                        }`}
                      />
                      {touched.email && fieldErrors.email && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Project Type & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full appearance-none pl-3.5 pr-9 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-base sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium cursor-pointer"
                        >
                          {PROJECT_TYPES.map(type => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Estimated Budget
                        </label>
                        <span className="text-[11px] text-slate-400 font-medium">USD</span>
                      </div>
                      
                      <div className="relative rounded-xl">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-bold text-sm">
                          $
                        </div>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          inputMode="decimal"
                          value={formData.budget}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9.,kK+]/g, '');
                            setFormData(prev => ({ ...prev, budget: val }));
                          }}
                          placeholder="e.g. 1,000 (or select preset)"
                          className="w-full pl-7 pr-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-base sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all font-medium"
                        />
                      </div>

                      {/* Quick-select Presets */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-0.5">Presets:</span>
                        {BUDGET_PRESETS.map((amount) => {
                          const isSelected = formData.budget === amount;
                          return (
                            <button
                              key={amount}
                              type="button"
                              onClick={() => handleBudgetPreset(amount)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border cursor-pointer active:scale-95 min-h-[30px] flex items-center ${
                                isSelected
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                              }`}
                            >
                              ${amount}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Timeline Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TIMELINE_OPTIONS.map((item) => {
                        const isSelected = formData.timeline === item.label;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleTimelineSelect(item.label)}
                            className={`px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer active:scale-98 text-center min-h-[40px] flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#0b0f19] text-white border-[#0b0f19] shadow-2xs font-bold'
                                : 'bg-slate-50/80 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Project Details */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Project Details <span className="text-blue-600 font-bold">*</span>
                      </label>
                      {touched.message && fieldErrors.message && (
                        <span className="text-[11px] font-medium text-rose-600">Details required</span>
                      )}
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      aria-required="true"
                      aria-invalid={touched.message && !!fieldErrors.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell me what you're building, the problem you're solving, and anything important I should know..."
                      className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border text-slate-900 placeholder:text-slate-400 text-base sm:text-sm focus:bg-white focus:outline-none transition-all resize-y min-h-[110px] ${
                        touched.message && fieldErrors.message
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                          : 'border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600'
                      }`}
                    />
                    {touched.message && fieldErrors.message && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Row 5: Primary CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full text-white font-semibold text-xs min-[360px]:text-sm sm:text-base transition-all shadow-md hover:shadow-lg min-h-[48px] ${
                        isSending 
                          ? 'bg-slate-700 cursor-not-allowed opacity-90' 
                          : 'bg-[#0b0f19] hover:bg-slate-800 active:scale-[0.98] cursor-pointer'
                      }`}
                      aria-label="Send Project Brief"
                    >
                      {isSending ? (
                        <>
                          <span>Sending Project Brief...</span>
                          <div className="w-5 h-5 flex items-center justify-center animate-spin">
                            <Loader2 className="w-4 h-4" />
                          </div>
                        </>
                      ) : (
                        <>
                          <span>Send Project Brief</span>
                          <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* 4. Subtle Trust Signal (Reassurance Line) */}
          <div className="text-center my-6 sm:my-8 px-4">
            <p className="text-xs sm:text-sm font-medium text-slate-500 italic max-w-md mx-auto leading-relaxed">
              “Every project starts with understanding the problem, the users, and the outcome.”
            </p>
          </div>

          {/* 5. Direct Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border-t border-slate-200/80 pt-6 sm:pt-8"
          >
            <div className="text-center sm:text-left mb-4 sm:mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Or reach out directly
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Direct Email Card */}
              <a
                href="mailto:dbkdev2@gmail.com"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs active:scale-[0.99] transition-all cursor-pointer min-h-[72px]"
                aria-label="Send direct email to dbkdev2@gmail.com"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-blue-100/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Email Me</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 font-mono tracking-tight">
                      dbkdev2@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-700 transition-all" />
                </div>
              </a>

              {/* Direct WhatsApp Card */}
              <a
                href="https://wa.me/2347015751064?text=Hello%20DBKDEV%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs active:scale-[0.99] transition-all cursor-pointer min-h-[72px]"
                aria-label="Chat on WhatsApp with DBKDEV at +234 701 575 1064"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-emerald-100/60">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Chat on WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 font-mono tracking-tight">
                      +234 701 575 1064
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0 ml-2">
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-700 transition-all" />
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </main>

      {/* 6. Footer */}
      <Footer 
        onNavigateHome={onNavigateHome} 
        onOpenContact={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />
    </div>
  );
};
