export interface MetricItem {
  value: string;
  label: string;
}

export interface JourneyItem {
  year?: string;
  phase?: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  badges: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface BentoContent {
  quote: {
    text: string;
    caption: string;
  };
  personalInterest: {
    tag: string;
    title: string;
    description: string;
  };
  currentFocus: {
    tag: string;
    title: string;
    description: string;
  };
}

export interface AboutHeroData {
  tagline: string;
  headline: string;
  subtext: string | string[];
  photoUrl: string;
}

export interface AboutData {
  hero: AboutHeroData;
  stats: MetricItem[];
  journey: JourneyItem[];
  skills: SkillGroup[];
  bento: BentoContent;
  myJourneySection: {
    badgeText: string;
    titleHighlight: string;
    titleText: string;
    description: string;
  };
  techEcosystemSection: {
    badgeText: string;
    title: string;
    description: string;
  };
  beyondCodeSection: {
    badgeText: string;
    title: string;
    description: string;
    philosophyHeaderTag: string;
    philosophyQuote: string;
    philosophyFooterText: string;
    offGridHeaderTag: string;
    offGridTitle: string;
    offGridDescription: string;
    offGridFooterText: string;
    offGridTags: string[];
    currentVectorHeaderTag: string;
    currentVectorTitle: string;
    currentVectorDescription: string;
    currentVectorFooterText: string;
  };
}

export const aboutData: AboutData = {
  hero: {
    tagline: "SYSTEM_INITIALIZED",
    headline: "Hi, I'm Ardi Yustiar — Building Digital Products & Exploring AI.",
    subtext: [
      "I am an Informatics Engineering student and tech innovator driven by a clinical obsession with futuristic design and algorithmic efficiency.",
      "My work lives at the intersection of highly polished frontend engineering and artificial intelligence...",
    ],
    photoUrl: "/images/profile.jpg",
  },
  stats: [
    { value: "10+", label: "PROJECTS SHIPPED" },
    { value: "2+", label: "YEARS CODING" },
    { value: "JAVASCRIPT & PYTHON", label: "CORE STACK" },
  ],
  journey: [
    {
      year: "2023",
      phase: "GENESIS",
      role: "Informatics Engineering Core",
      organization: "University Student",
      period: "2023 — Present",
      description:
        "Building foundations in algorithms and software engineering. Deep diving into data structures, computational theory, and practical engineering principles.",
      badges: ["PYTHON", "JAVA", "DATA STRUCTURES"],
    },
    {
      year: "2024",
      phase: "EVOLUTION",
      role: "Modular Frontend Developer",
      organization: "Social Org / Internship",
      period: "2024",
      description:
        "Spearheaded the development of web interfaces using Next.js, React, and Tailwind CSS. Built reusable component systems and optimized performance.",
      badges: ["REACT", "TAILWIND", "TYPESCRIPT"],
    },
    {
      year: "2025",
      phase: "INTEGRATION",
      role: "AI Pipeline & Web Fusion",
      organization: "Tech Innovator",
      period: "2025",
      description:
        "Bridging the gap by integrating machine learning models directly into production-ready web interfaces.",
      badges: ["NEXT.JS", "SCIKIT-LEARN", "FASTAPI"],
    },
    {
      year: "2026",
      phase: "EXPANSION",
      role: "Full-Stack AI Engineer",
      organization: "Personal Projects",
      period: "2026 — Present",
      description:
        "Scaling complex architectures, atomic design systems, and end-to-end intelligent ML pipelines.",
      badges: ["NEXT.JS", "ATOMIC DESIGN", "ML PIPELINES"],
    },
  ],
  skills: [
    {
      category: "Frontend Engineering",
      skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "AI & Data Science",
      skills: ["Python", "Machine Learning", "Neural Networks", "PyTorch/TensorFlow"],
    },
    {
      category: "Workflow & Utilities",
      skills: ["Git/GitHub", "VS Code", "Google Colab", "Figma"],
    },
  ],
  bento: {
    quote: {
      text: "Engineering is not just about writing code; it's about crafting experiences that bridge human intent and machine capability.",
      caption: "ENGINEERING PHILOSOPHY",
    },
    personalInterest: {
      tag: "Off the Grid",
      title: "Off the Grid",
      description: "Exploring sports, analyzing tech trends, and finding rhythm in everyday chaos.",
    },
    currentFocus: {
      tag: "Live Status",
      title: "Current Focus",
      description: "Full-Stack AI Apps — Building intelligent interfaces and neural network-backed tools.",
    },
  },
  myJourneySection: {
    badgeText: "My Journey",
    titleHighlight: "My Journey",
    titleText: "Roadmap",
    description: "A horizontal timeline of my evolution in Web Development & AI/ML",
  },
  techEcosystemSection: {
    badgeText: "TECH ECOSYSTEM",
    title: "Frontend & AI Engineering",
    description: "Powering the next generation of intelligent interfaces. Building high-performance digital experiences with a sophisticated stack of modern web technologies and machine learning frameworks.",
  },
  beyondCodeSection: {
    badgeText: "• SYSTEM PROTOCOL",
    title: "Beyond Code",
    description: "Exploring the intersection of technical mastery, human intent, and continuous equilibrium.",
    philosophyHeaderTag: "SYS_LOG // PHILOSOPHY",
    philosophyQuote: "Engineering is not merely about writing instructions for machines; it is the deliberate act of bridging raw human intent with emergent computational capability.",
    philosophyFooterText: "STATUS: ACTIVE",
    offGridHeaderTag: "OFF_GRID // HUMAN_SIDE",
    offGridTitle: "Off the Grid",
    offGridDescription: "Beyond the IDE, maintaining equilibrium requires physical exertion and continuous curiosity. Tracking the evolution of consumer tech and finding rhythm on the court.",
    offGridFooterText: "MODE: PERSONAL_EQUILIBRIUM",
    offGridTags: ["BASKETBALL", "TECH_RESEARCH", "CREATIVE_BALANCE"],
    currentVectorHeaderTag: "LIVE_FOCUS // CURRENT",
    currentVectorTitle: "Current Vector",
    currentVectorDescription: "Architecting next-generation interfaces powered by large language models. Exploring the latent space between deterministic UI components and stochastic AI outputs.",
    currentVectorFooterText: "ACTIVE_STACK: NEXTJS + PYTHON_AI",
  },
};
