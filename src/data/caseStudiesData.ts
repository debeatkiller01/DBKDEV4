export interface FeatureItem {
  iconName: 'GraduationCap' | 'BookOpen' | 'MessageSquareCode' | 'Users' | 'Mic' | 'Calendar' | 'Clock' | 'Library' | 'Minimize2' | 'ShieldCheck' | 'Sparkles' | 'Layers' | 'Utensils' | 'MapPin' | 'Truck' | 'Receipt' | 'Sliders' | 'ShieldAlert' | 'CopyCheck' | 'Video' | 'UserCheck' | 'Mic2' | 'Film';
  name: string;
  explanation: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ChallengeSolutionPair {
  challenge: string;
  solution: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface DetailedCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  technologies: string[];
  role: string;
  projectType: string;
  platform: string;
  status: string;
  challenge: string;
  solution: string;
  features: FeatureItem[];
  architecture: string[];
  process: ProcessStep[];
  challenges: ChallengeSolutionPair[];
  gallery: string[];
  outcome: string;
  liveDemo: string;
  github?: string;
  metrics?: MetricItem[];
}

export const CASE_STUDIES_DATA: Record<string, DetailedCaseStudy> = {
  "futurepath-university": {
    id: "futurepath-university",
    slug: "futurepath-university",
    title: "FuturePath University",
    category: "AI Education Platform",
    description: "A modern digital university offering structured career-focused learning, AI-assisted education and interactive learning experiences.",
    coverImage: "https://i.postimg.cc/Y91Zyt1k/file-000000008a2881f4a904a68d47ebf8c0.png",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase", "AI"],
    role: "AI App Developer & Full-Stack Engineer",
    projectType: "Educational Technology Platform / Web Application",
    platform: "Web (Desktop & Mobile)",
    status: "Live",
    challenge: "Traditional online learning platforms often suffer from static video lectures, low student engagement, and a lack of real-time personalized feedback when students struggle with complex concepts.",
    solution: "FuturePath University combines structured career pathways with an integrated AI study assistant. Built with React and Supabase, the platform provides interactive learning modules, automated code and essay feedback, and adaptive skill trees that adjust based on student performance.",
    features: [
      {
        iconName: "GraduationCap",
        name: "AI-Driven Study Mentor",
        explanation: "Context-aware AI tutor providing step-by-step guidance, concept breakdowns, and real-time query resolution."
      },
      {
        iconName: "BookOpen",
        name: "Structured Career Curriculums",
        explanation: "Modular learning paths with progress tracking, interactive quizzes, and skill mastery milestones."
      },
      {
        iconName: "MessageSquareCode",
        name: "Automated Code & Assignment Feedback",
        explanation: "Instant syntax and logic evaluations for engineering assignments powered by Gemini models."
      },
      {
        iconName: "Users",
        name: "Peer Collaboration Rooms",
        explanation: "Real-time discussion threads and study groups synchronized with Supabase Realtime subscriptions."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "Supabase Database & Auth", "Gemini AI SDK"],
    process: [
      { step: "01", title: "Research & Planning", description: "Analyzed learning analytics and curriculum structures to design an adaptive student journey." },
      { step: "02", title: "Design Systems", description: "Crafted an intuitive dark-mode interface focused on distraction-free reading, code editing, and video lessons." },
      { step: "03", title: "Development", description: "Implemented modular React components, Supabase database schemas, and AI tutoring API endpoints." },
      { step: "04", title: "Testing & Refinement", description: "Ran usability testing with student focus groups to refine AI response accuracy and navigation flow." },
      { step: "05", title: "Deployment", description: "Deployed containerized production builds with edge delivery for low-latency video and asset loading." }
    ],
    challenges: [
      {
        challenge: "Handling high-concurrency student queries during live study sessions without slowing down API response rates.",
        solution: "Implemented response streaming, prompt token optimization, and edge caching for frequently asked course questions."
      },
      {
        challenge: "Maintaining synchronized student state across multiple devices during live quizzes and assignments.",
        solution: "Leveraged Supabase Realtime channels to instantly push progress updates and live score calculations."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Successfully launched a full-featured digital learning platform that enables students to complete course modules with interactive AI mentorship. The unified architecture delivers smooth client rendering and low-latency database queries.",
    liveDemo: "https://futurepath-university.netlify.app",
    github: "https://github.com/dbkdev/futurepath-university",
    metrics: [
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Active Modules", value: "48+" },
      { label: "Sync Latency", value: "< 200ms" }
    ]
  },

  "tomi-planner": {
    id: "tomi-planner",
    slug: "tomi-planner",
    title: "TOMI Planner",
    category: "AI Productivity",
    description: "An AI-powered productivity and personal planning platform that helps users organize tasks, manage study schedules, build daily habits, read books, maintain focus, and receive intelligent AI guidance through a beautiful mobile-first experience.",
    coverImage: "https://i.postimg.cc/PJycxqqK/file-000000004f7081f498641151a85a651b.png",
    technologies: ["React", "TypeScript", "Supabase", "AI Integration", "Tailwind CSS", "Responsive Design"],
    role: "Lead Systems Architect & Developer",
    projectType: "AI Productivity Suite / Web App",
    platform: "Web & Mobile Responsive",
    status: "Live",
    challenge: "Knowledge workers frequently struggle with scattered task lists, manual calendar block scheduling, and constant context-switching between separate productivity tools.",
    solution: "TOMI Planner unifies daily task management, natural language voice inputs, and automated AI time-blocking into a seamless workspace. The system parses natural text or audio input, converts it into prioritized action items, and schedules optimal focus windows.",
    features: [
      {
        iconName: "Mic",
        name: "Natural Voice Planning",
        explanation: "Speak daily goals directly into the app; AI parses audio into structured tasks and time blocks."
      },
      {
        iconName: "Calendar",
        name: "Smart AI Time-Blocking",
        explanation: "Automatically schedules tasks into open calendar slots based on priority and estimated duration."
      },
      {
        iconName: "Clock",
        name: "Integrated Focus Timer",
        explanation: "Customizable Pomodoro and deep-work timers tied to specific task items with session stats."
      },
      {
        iconName: "Library",
        name: "Digital Reference Library",
        explanation: "Store notes, bookmarks, and project reference links attached to specific task categories."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "Supabase Auth & Storage", "Gemini 2.5 Flash API"],
    process: [
      { step: "01", title: "Research & Mapping", description: "Mapped user workflows for daily task planning, time blocking, and voice note transcription." },
      { step: "02", title: "UI/UX Design", description: "Built a sleek dashboard featuring quick key-commands, drag-and-drop task reordering, and dark luxury aesthetic." },
      { step: "03", title: "Engine Build", description: "Developed client-side audio capture, server proxy routes for AI processing, and real-time state synchronization." },
      { step: "04", title: "Algorithm Tuning", description: "Tested audio transcription resilience across noisy backgrounds and multi-task scheduling algorithms." },
      { step: "05", title: "Cloud Launch", description: "Deployed to Cloud Run with edge caching for instant load times and snappy task state updates." }
    ],
    challenges: [
      {
        challenge: "Parsing unstructured voice notes into accurate, actionable task objects with dates and estimated effort levels.",
        solution: "Engineered structured JSON output schemas using Gemini function calling to guarantee consistent data shapes."
      },
      {
        challenge: "Preventing calendar schedule overlaps when generating multi-task time blocks.",
        solution: "Implemented a deterministic timeline allocation algorithm that validates calendar availability before committing time blocks."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Delivered a cohesive productivity workspace that eliminates tool-fragmentation. Users can plan their entire day via voice or text in under two minutes with automated calendar synchronization.",
    liveDemo: "https://tomiplannerr.netlify.app/",
    github: "https://github.com/dbkdev/tomi-planner",
    metrics: [
      { label: "Voice Latency", value: "< 350ms" },
      { label: "Task Sync", value: "Real-time" },
      { label: "Data Security", value: "AES-256" }
    ]
  },

  "dbk-image-studio": {
    id: "dbk-image-studio",
    slug: "dbk-image-studio",
    title: "DBK Image Studio",
    category: "AI Image Tool",
    description: "Browser-based image compression, resizing and conversion platform designed for speed, privacy and professional workflows.",
    coverImage: "https://i.postimg.cc/c4Vph5c5/Chat-GPT-Image-Aug-10-2026-02-31-58-PM.png",
    technologies: ["React", "TypeScript", "Tailwind", "WebAssembly", "AI"],
    role: "Full-Stack & Frontend Engineer",
    projectType: "Web-based Media Processing Tool",
    platform: "Web Browser (Client-side Execution)",
    status: "Live",
    challenge: "Many online image tools require uploading confidential design assets to third-party servers, creating security risks, bandwidth bottlenecks, and slow processing times.",
    solution: "DBK Image Studio executes image optimization, WebP/AVIF conversions, batch resizing, and background adjustments directly in the browser using WebAssembly compiled binaries and client-side processing pipelines.",
    features: [
      {
        iconName: "Minimize2",
        name: "Lossless Image Compression",
        explanation: "Compress PNG, JPEG, and WebP files up to 80% without visible quality degradation."
      },
      {
        iconName: "ShieldCheck",
        name: "100% Client-Side Privacy",
        explanation: "All processing happens locally inside browser memory—assets are never transmitted to external servers."
      },
      {
        iconName: "Sparkles",
        name: "Smart AI Background Removal",
        explanation: "Local edge segmentation models isolate subjects and remove complex backgrounds in seconds."
      },
      {
        iconName: "Layers",
        name: "Batch File Processing",
        explanation: "Process hundreds of images simultaneously with unified export rules and naming conventions."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "WebAssembly (Wasm)", "HTML5 Canvas API"],
    process: [
      { step: "01", title: "Benchmarking", description: "Evaluated WebAssembly image compression libraries and browser Canvas memory boundaries." },
      { step: "02", title: "Interface Design", description: "Designed a minimal drag-and-drop workspace with real-time before/after image comparison sliders." },
      { step: "03", title: "Wasm Integration", description: "Built Wasm worker threads to handle heavy image processing without freezing the main browser UI thread." },
      { step: "04", title: "Stress Testing", description: "Tested batch performance on 4K imagery across various browsers and low-memory mobile devices." },
      { step: "05", title: "Optimization", description: "Deployed static web bundle with aggressive browser caching headers and WebWorker initialization." }
    ],
    challenges: [
      {
        challenge: "Preventing browser UI thread freezes when compressing large batch images in parallel.",
        solution: "Offloaded all Wasm compression tasks to dedicated Web Workers running off the main thread."
      },
      {
        challenge: "Maintaining precise image metadata (EXIF/color profiles) across multi-format conversions.",
        solution: "Implemented raw buffer parser routines that extract and re-embed color profile headers during export."
      }
    ],
    gallery: [
      "https://i.postimg.cc/c4Vph5c5/Chat-GPT-Image-Aug-10-2026-02-31-58-PM.png",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Created a lightning-fast, privacy-first media processing studio. Users can manipulate and compress high-resolution image batches in real-time without relying on server uploads.",
    liveDemo: "https://dbkimagestudio.netlify.app",
    github: "https://github.com/dbkdev/dbk-image-studio",
    metrics: [
      { label: "Server Uploads", value: "0 bytes" },
      { label: "Supported Formats", value: "PNG/JPG/WebP/AVIF" },
      { label: "Processing Mode", value: "Client-side" }
    ]
  },

  "d-next-amala": {
    id: "d-next-amala",
    slug: "d-next-amala",
    title: "D-Next Amala",
    category: "Food Delivery Platform",
    description: "A modern food ordering and courier platform built for local restaurants and fast delivery services. Users can browse menus, order authentic local meals, request dispatch riders, and enjoy a seamless mobile-first experience.",
    coverImage: "https://i.postimg.cc/sxVqszK0/file-00000000009081f48479eb4e71a956fa.png",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Netlify"],
    role: "Full-Stack System Developer",
    projectType: "Food Delivery & Logistics Platform",
    platform: "Web & Mobile Dispatch",
    status: "Live",
    challenge: "Local culinary businesses and dispatch teams lacked an intuitive, unified platform to coordinate customer orders, driver dispatching, and real-time GPS delivery tracking.",
    solution: "D-Next Amala delivers an end-to-end food ordering and logistics ecosystem. Customers browse live menus, place orders, and follow driver movement on interactive maps while dispatchers manage queue routing.",
    features: [
      {
        iconName: "Utensils",
        name: "Interactive Digital Menus",
        explanation: "Customizable menu categories, item modifiers, real-time availability toggles, and instant cart updates."
      },
      {
        iconName: "MapPin",
        name: "Live Driver GPS Tracking",
        explanation: "Real-time location updates powered by Google Maps API and WebSocket location streams."
      },
      {
        iconName: "Truck",
        name: "Automated Dispatch Engine",
        explanation: "Assigns incoming orders to nearby delivery riders based on route efficiency and distance."
      },
      {
        iconName: "Receipt",
        name: "Merchant & Rider Portal",
        explanation: "Dedicated interfaces for kitchen staff to manage order prep states and riders to accept delivery jobs."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "Node.js & Express", "Google Maps Platform", "WebSockets"],
    process: [
      { step: "01", title: "Workflow Analysis", description: "Analyzed restaurant order workflow bottlenecks and delivery rider navigation requirements." },
      { step: "02", title: "Portal Wireframing", description: "Built distinct user flows for customers, restaurant kitchens, and delivery riders with high-visibility order state cards." },
      { step: "03", title: "Backend & Map Build", description: "Engineered Express API endpoints, WebSocket connection pools, and Google Maps location renderers." },
      { step: "04", title: "Dispatch Testing", description: "Simulated multi-order dispatch scenarios with mock rider trajectories to verify route tracking accuracy." },
      { step: "05", title: "Cloud Deployment", description: "Deployed serverless Node.js backend services and React frontend on Google Cloud Run." }
    ],
    challenges: [
      {
        challenge: "High battery consumption and excessive API calls caused by constant GPS location polling from rider devices.",
        solution: "Implemented adaptive location throttling that adjusts ping frequency based on rider speed and proximity to destination."
      },
      {
        challenge: "Handling concurrent order state changes across customer, kitchen, and driver screens simultaneously.",
        solution: "Designed a centralized WebSocket event bus with optimistic UI state updates and server reconciliation."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Successfully deployed a reliable food delivery and dispatch platform. The system coordinates orders, live map tracking, and kitchen statuses in a clean, responsive application.",
    liveDemo: "https://d-next-amala.netlify.app",
    github: "https://github.com/dbkdev/d-next-amala",
    metrics: [
      { label: "Dispatch Sync", value: "< 500ms" },
      { label: "Map Precision", value: "High (GPS)" },
      { label: "Platform Status", value: "Operational" }
    ]
  },

  "dbk-humanizer": {
    id: "dbk-humanizer",
    slug: "dbk-humanizer",
    title: "DBK Humanizer",
    category: "AI Writing Tool",
    description: "An AI-powered text humanization platform that transforms AI-generated content into natural, human-like writing while preserving meaning, improving readability, protecting SEO, and helping content pass leading AI detection systems.",
    coverImage: "https://i.postimg.cc/Mprv9BTZ/a55841644ff5939fe0f874eb7605146a0afc6e244b4899261705278ad4015c29.png",
    technologies: ["React", "TypeScript", "AI Integration", "Tailwind CSS", "Responsive Design", "Natural Language Processing"],
    role: "AI Systems Architect & Developer",
    projectType: "AI Natural Language Application",
    platform: "Web",
    status: "Live",
    challenge: "Raw LLM generated text often exhibits robotic cadence, predictable sentence lengths, and repetitive phrasings that sound unnatural to readers and trigger automated AI detection tools.",
    solution: "DBK Humanizer uses multi-pass NLP refactoring algorithms powered by Gemini 2.5 Flash to introduce natural cadence variations, idiomatic expressions, and human sentence structures while retaining core semantic meaning and SEO keywords.",
    features: [
      {
        iconName: "Sparkles",
        name: "Multi-Pass Text Refactoring",
        explanation: "Analyzes sentence length distribution, vocabulary density, and tone to rewrite text into natural human prose."
      },
      {
        iconName: "Sliders",
        name: "Customizable Tone & Readability",
        explanation: "Select target tone levels ranging from casual conversational to formal academic and technical documentation."
      },
      {
        iconName: "ShieldAlert",
        name: "AI Pattern Analysis",
        explanation: "Highlights overly predictable n-gram patterns and structural repetitions before and after transformation."
      },
      {
        iconName: "CopyCheck",
        name: "Key-Term & SEO Preservation",
        explanation: "Locks key technical phrases, brand names, and search terms to ensure content remains accurate."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "@google/genai SDK", "Node.js Server Proxy"],
    process: [
      { step: "01", title: "Stylistic Research", description: "Studied stylistic markers of AI-generated text vs human writing (burstiness, perplexity, vocabulary variety)." },
      { step: "02", title: "Editor UI", description: "Created a side-by-side text editor interface with live difference highlighting, tone toggles, and readability metrics." },
      { step: "03", title: "Prompt Pipelines", description: "Built server-side Gemini prompt pipelines and text diffing utilities in TypeScript." },
      { step: "04", title: "Quality Benchmarks", description: "Evaluated output quality across marketing copy, blog posts, academic essays, and technical documentation." },
      { step: "05", title: "Proxy Hardening", description: "Deployed server proxy routes on Cloud Run with strict rate limiting and key security." }
    ],
    challenges: [
      {
        challenge: "Preventing the AI model from hallucinating or altering key technical facts during the rewriting process.",
        solution: "Engineered two-stage validation where rewritten content is cross-verified against original source claims."
      },
      {
        challenge: "Maintaining fast response times for long-form multi-page text inputs.",
        solution: "Chunked documents into logical paragraph blocks and processed them concurrently via async stream promises."
      }
    ],
    gallery: [
      "https://i.postimg.cc/Mprv9BTZ/a55841644ff5939fe0f874eb7605146a0afc6e244b4899261705278ad4015c29.png",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Built an intuitive AI writing refinement tool that transforms rigid draft text into engaging, human-sounding content while preserving author intent and SEO context.",
    liveDemo: "https://dbk-humanizer.netlify.app",
    github: "https://github.com/dbkdev/dbk-humanizer",
    metrics: [
      { label: "Refactoring Engine", value: "Gemini 2.5" },
      { label: "SEO Key Locking", value: "Supported" },
      { label: "Output Format", value: "Markdown / Plain Text" }
    ]
  },

  "dbk-lip-sync": {
    id: "dbk-lip-sync",
    slug: "dbk-lip-sync",
    title: "DBK Lip Sync",
    category: "AI Video Platform",
    description: "Generate realistic lip-synced talking videos from photos, avatars and scripts using advanced AI technology.",
    coverImage: "https://i.postimg.cc/pXh79bFB/file-00000000c9e8822f8a169134bcf0826b.png",
    technologies: ["React", "TypeScript", "Tailwind", "AI Video", "Python"],
    role: "AI Video Systems Lead",
    projectType: "AI Video & Media Generation Platform",
    platform: "Web Application & Rendering Pipeline",
    status: "Live",
    challenge: "Producing video avatars for marketing, localization, or educational content traditionally required cameras, actors, studio recording, and time-consuming video editing.",
    solution: "DBK Lip Sync Studio allows creators to upload a portrait image or avatar, input a voice script or audio file, and render a high-definition talking video avatar with precise lip-synchronization and facial expressions.",
    features: [
      {
        iconName: "Video",
        name: "Audio-to-Lip Alignment",
        explanation: "Generates natural lip and facial movements aligned with multi-lingual audio recordings or TTS scripts."
      },
      {
        iconName: "UserCheck",
        name: "Custom Avatar Uploads",
        explanation: "Transform static portrait photos or digital characters into animated video presenters."
      },
      {
        iconName: "Mic2",
        name: "Multilingual Voice Synthesis",
        explanation: "Choose from dozens of expressive neural text-to-speech voices across multiple languages and dialects."
      },
      {
        iconName: "Film",
        name: "Real-time Preview Studio",
        explanation: "Interactive canvas to adjust cropping, background color, voice pitch, and speech pace."
      }
    ],
    architecture: ["React 19", "TypeScript", "Tailwind CSS", "Python Audio/Video Pipeline", "FFmpeg", "Google Cloud Storage"],
    process: [
      { step: "01", title: "Model Evaluation", description: "Evaluated neural phoneme-to-viseme alignment models and web video preview requirements." },
      { step: "02", title: "Studio Design", description: "Built a dark-themed video studio layout with video timeline controls, voice selectors, and render status progress bars." },
      { step: "03", title: "Pipeline Integration", description: "Developed client studio UI, async video rendering queue, and Cloud Storage integration." },
      { step: "04", title: "Sync Verification", description: "Verified video output sync across varying frame rates, audio sample rates, and avatar facial dimensions." },
      { step: "05", title: "Cloud Deployment", description: "Configured auto-scaling rendering tasks on Cloud Run with WebSocket progress callbacks." }
    ],
    challenges: [
      {
        challenge: "Managing long video rendering jobs without dropping browser HTTP connections.",
        solution: "Implemented asynchronous job queueing where the client receives real-time render progress updates over WebSockets."
      },
      {
        challenge: "Ensuring crisp facial animation without distortion around mouth and jaw boundaries.",
        solution: "Integrated facial landmark masking and smoothing filters into the video post-processing pipeline."
      }
    ],
    gallery: [
      "https://i.postimg.cc/pXh79bFB/file-00000000c9e8822f8a169134bcf0826b.png",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
    ],
    outcome: "Created a web-based AI video studio that enables users to produce localized avatar videos directly in the browser with automated lip synchronization.",
    liveDemo: "https://dbk-sync-studio.lovable.app",
    github: "https://github.com/dbkdev/dbk-lip-sync",
    metrics: [
      { label: "Rendering Mode", value: "Async Worker Queue" },
      { label: "Audio Alignment", value: "Neural Visemes" },
      { label: "Video Export", value: "MP4 / 1080p" }
    ]
  }
};

// Add alias property directly
CASE_STUDIES_DATA["dbk-lip-sync-studio"] = CASE_STUDIES_DATA["dbk-lip-sync"];


