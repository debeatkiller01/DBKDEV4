import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead AI & Full-Stack Systems Architect',
    company: 'DBK Software & AI Labs',
    period: '2023 — Present',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time / Advisory',
    highlights: [
      'Architected autonomous LLM agent workflow engines using Gemini 2.5 models and TypeScript, serving 120,000+ daily agent requests.',
      'Designed high-throughput REST and WebSocket proxy servers handling sub-300ms multi-modal streaming responses.',
      'Led client engineering projects for Series A/B SaaS startups, delivering custom AI applications and full-stack cloud products.'
    ],
    skills: ['TypeScript', 'Gemini API', 'React 19', 'Node.js', 'Google Cloud Run', 'Firestore']
  },
  {
    id: 'exp-2',
    role: 'Senior Full-Stack Engineer',
    company: 'CloudPulse Systems',
    period: '2021 — 2023',
    location: 'Austin, TX',
    type: 'Full-time',
    highlights: [
      'Built distributed monitoring dashboards ingesting 50,000+ telemetry metric events/sec with sub-second live rendering.',
      'Reduced initial page load latency by 64% through server-side caching, bundle split optimizations, and WebGL graph rendering.',
      'Mentored 6 junior engineers and standardized strict TypeScript linting and automated Docker CI/CD pipelines.'
    ],
    skills: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    id: 'exp-3',
    role: 'SaaS & Web Application Developer',
    company: 'Nexus Creative Tech',
    period: '2019 — 2021',
    location: 'New York, NY',
    type: 'Contract',
    highlights: [
      'Developed pixel-perfect responsive web applications, design systems, and client dashboards for high-traffic media brands.',
      'Integrated Stripe billing, subscription tiers, and OAuth2 social authentication for enterprise SaaS applications.',
      'Maintained 99.9% uptime across production web services with automated regression test suites.'
    ],
    skills: ['JavaScript', 'React', 'Express', 'Tailwind CSS', 'REST APIs', 'Jest']
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#070a12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Over 6+ years of hands-on software engineering experience delivering production software for startups and scaling technology platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12 border-l-2 border-slate-800">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#070a12] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/50" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 shadow-xl group-hover:bg-[#10172a]">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400 font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-[#080c16] px-3 py-1.5 rounded-lg border border-slate-800/80 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 my-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 text-[11px] font-mono text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
