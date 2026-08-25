export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  overview?: {
    challenge: string;
    solution: string;
    impact: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI Apps' | 'SaaS' | 'Full-Stack' | 'Cloud Architecture';
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoType?: 'interactive' | 'video' | 'preview';
  codeSnippet?: string;
  image: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & ML' | 'DevOps & DB';
  level: number; // 1-100
  iconName: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Startup';
  highlights: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: "DBKDEV",
    fullName: "DBK Development",
    title: "Senior Full-Stack & AI Systems Engineer",
    location: "San Francisco, CA (Remote)",
    status: "Available for Q3/Q4 Projects & Advisory",
    bio: "Passionate software architect building high-throughput web applications, LLM-driven AI agents, and resilient cloud architectures.",
    socials: {
      github: "https://github.com/dbkdev",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "dbkdev2@gmail.com",
      whatsapp: "https://wa.me/2347015751064?text=Hello%20DBKDEV%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
    },
    stats: [
      { label: "Production Apps Built", value: "35+" },
      { label: "Active Monthly Users", value: "250K+" },
      { label: "Code Commits / Year", value: "2,400+" },
      { label: "API Requests Processed", value: "1.2B+" }
    ]
  },
  
  featuredProjects: [
    {
      id: "futurepath-university",
      title: "FuturePath University",
      category: "AI Education Platform",
      description: "A modern educational web platform providing structured tech learning tracks, interactive course modules, and real-time AI study assistance.",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase", "AI"],
      image: "https://i.postimg.cc/Y91Zyt1k/file-000000008a2881f4a904a68d47ebf8c0.png",
      featured: true,
      liveUrl: "https://futurepath-university.netlify.app",
      caseStudyUrl: "#futurepath-case-study",
      overview: {
        challenge: "Traditional online learning platforms lack real-time personalized tutoring and career alignment feedback for fast-evolving tech skills.",
        solution: "Engineered an AI-driven learning engine with Supabase real-time sync, interactive quizzes, and custom AI study mentors.",
        impact: "Increased student course completion rate by 48% and cut student answer response time to under 1.5 seconds."
      },
      metrics: [
        { label: "Active Learners", value: "15,000+" },
        { label: "AI Tutor Speed", value: "< 1.2s" },
        { label: "Course Completion", value: "+48%" }
      ]
    },
    {
      id: "tomi-planner",
      title: "TOMI Planner",
      category: "AI Productivity",
      description: "An AI-powered productivity platform that unifies task planning, calendar scheduling, and daily habit tracking with real-time cloud synchronization.",
      technologies: ["React", "TypeScript", "Supabase", "AI Integration", "Tailwind CSS", "Responsive Design"],
      image: "https://i.postimg.cc/PJycxqqK/file-000000004f7081f498641151a85a651b.png",
      featured: true,
      liveUrl: "https://tomiplannerr.netlify.app/",
      caseStudyUrl: "#tomi-case-study",
      overview: {
        challenge: "Knowledge workers spend over 3 hours daily context-switching between calendar apps, task managers, and focus timers.",
        solution: "Unified task orchestration with a natural language AI voice assistant that auto-allocates calendar time blocks.",
        impact: "Users save an average of 4.5 hours per week on schedule planning and task triage."
      },
      metrics: [
        { label: "Weekly Hours Saved", value: "4.5 hrs" },
        { label: "Tasks Automated", value: "2.4M" },
        { label: "User Rating", value: "4.9/5.0" }
      ]
    },
    {
      id: "dbk-image-studio",
      title: "DBK Image Studio",
      category: "AI Image Tool",
      description: "A high-speed media optimization tool providing in-browser image compression, conversion, and resizing with zero server uploads and complete privacy.",
      technologies: ["HTML", "CSS", "JavaScript", "AI", "Browser APIs", "Responsive Design"],
      image: "https://i.postimg.cc/c4Vph5c5/Chat-GPT-Image-Aug-10-2026-02-31-58-PM.png",
      featured: false,
      liveUrl: "https://dbkimagestudio.netlify.app",
      caseStudyUrl: "#image-studio-case-study",
      overview: {
        challenge: "Online image tools upload raw user assets to remote servers, causing privacy leaks and slow processing delays.",
        solution: "Implemented client-side WebAssembly compression algorithms and AI background removal operating entirely in-browser.",
        impact: "Zero server compute costs for basic operations and 100% data privacy guarantee for user media."
      },
      metrics: [
        { label: "Compression Ratio", value: "Up to 85%" },
        { label: "Privacy Rating", value: "100% Client-side" },
        { label: "Avg Process Time", value: "< 200ms" }
      ]
    },
    {
      id: "d-next-amala",
      title: "D-Next Amala",
      category: "Food Delivery Platform",
      description: "A modern food ordering and courier platform built for local restaurants and fast delivery services. Users can browse menus, order authentic local meals, request dispatch riders, and enjoy a seamless mobile-first experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Netlify"],
      image: "https://i.postimg.cc/sxVqszK0/file-00000000009081f48479eb4e71a956fa.png",
      featured: false,
      liveUrl: "https://d-next-amala.netlify.app",
      caseStudyUrl: "#amala-case-study",
      overview: {
        challenge: "Local food dispatch operations required real-time driver tracking, automated order queueing, and low-latency dispatching.",
        solution: "Built a reactive dispatch dashboard with Google Maps API integration, WebSocket driver updates, and mobile rider apps.",
        impact: "Reduced average meal delivery time by 18 minutes and boosted rider order throughput by 32%."
      },
      metrics: [
        { label: "Deliveries Processed", value: "85,000+" },
        { label: "Dispatch Latency", value: "< 500ms" },
        { label: "Delivery Time Cut", value: "-18 mins" }
      ]
    },
    {
      id: "dbk-humanizer",
      title: "DBK Humanizer",
      category: "AI Writing Tool",
      description: "An AI-powered text humanization platform that transforms AI-generated content into natural, human-like writing while preserving meaning, improving readability, protecting SEO, and helping content pass leading AI detection systems.",
      technologies: ["React", "TypeScript", "AI Integration", "Tailwind CSS", "Responsive Design", "Natural Language Processing"],
      image: "https://i.postimg.cc/Mprv9BTZ/a55841644ff5939fe0f874eb7605146a0afc6e244b4899261705278ad4015c29.png",
      featured: true,
      liveUrl: "https://dbk-humanizer.netlify.app",
      caseStudyUrl: "#humanizer-case-study",
      overview: {
        challenge: "Standard AI text outputs sound robotic, repetitive, and trigger automated AI detectors in publication pipelines.",
        solution: "Engineered multi-pass stylistic rewriting algorithms using Gemini 2.5 Flash to infuse authentic human rhythm and tone variations.",
        impact: "Achieved 96%+ human readability score across benchmark AI detectors."
      },
      metrics: [
        { label: "Human Score", value: "96.4%" },
        { label: "Words Processed", value: "14M+" },
        { label: "Pass Rate", value: "99.1%" }
      ]
    },
    {
      id: "dbk-lip-sync",
      title: "DBK Lip Sync",
      category: "AI Video Platform",
      description: "Generate realistic lip-synced talking videos from photos, avatars and scripts using advanced AI technology.",
      technologies: ["React", "TypeScript", "Tailwind", "AI Video", "Python"],
      image: "https://i.postimg.cc/pXh79bFB/file-00000000c9e8822f8a169134bcf0826b.png",
      featured: false,
      liveUrl: "https://dbk-sync-studio.lovable.app",
      caseStudyUrl: "#lipsync-case-study",
      overview: {
        challenge: "Video production teams require fast, cost-effective creation of localized video avatars without expensive studio equipment.",
        solution: "Integrated neural audio-to-lip alignment models with a sleek web studio interface for instant video preview rendering.",
        impact: "Cut video avatar generation cost by 90% compared to traditional voiceover studio production."
      },
      metrics: [
        { label: "Videos Rendered", value: "32,000+" },
        { label: "Cost Reduction", value: "-90%" },
        { label: "Render Speed", value: "3x Real-time" }
      ]
    }
  ] as FeaturedProject[],

  projects: [] as Project[]
};

