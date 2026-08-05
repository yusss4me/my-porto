export interface MetricItem {
  value: string;
  label: string;
}

export interface JourneyItem {
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
  subtext: string;
  photoUrl: string;
}

export interface AboutData {
  hero: AboutHeroData;
  stats: MetricItem[];
  journey: JourneyItem[];
  skills: SkillGroup[];
  bento: BentoContent;
}

export const aboutData: AboutData = {
  hero: {
    tagline: "SYSTEM_INITIALIZED",
    headline: "Hi, I'm Ardi Yustiar — Building Digital Products & Exploring AI.",
    subtext:
      "I am an Informatics Engineering student and tech innovator driven by a clinical obsession with futuristic design and algorithmic efficiency. My work lives at the intersection of highly polished frontend engineering and artificial intelligence...",
    photoUrl: "/images/profile.jpg",
  },
  stats: [
    { value: "10+", label: "PROJECTS SHIPPED" },
    { value: "2+", label: "YEARS CODING" },
    { value: "NEXT.JS & PYTHON", label: "CORE STACK" },
  ],
  journey: [
    {
      role: "Informatics Engineering",
      organization: "University Student",
      period: "2021 — Present",
      description:
        "Deep diving into data structures, algorithms, and artificial intelligence. Building a strong foundation in computational theory while applying practical engineering principles.",
      badges: ["Algorithms", "AI Fundamentals", "Data Structures"],
    },
    {
      role: "Frontend Developer Intern",
      organization: "Social Org / Internship",
      period: "2024",
      description:
        "Spearheaded the development of web interfaces using Next.js, React, and Tailwind CSS. Built reusable component systems and optimized performance.",
      badges: ["Next.js", "Tailwind", "Atomic Design"],
    },
  ],
  skills: [
    {
      category: "Frontend Eng.",
      skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "AI & Data Science",
      skills: ["Python", "Machine Learning", "Neural Networks", "PyTorch/TensorFlow"],
    },
    {
      category: "Workflow & Tools",
      skills: ["Git / GitHub", "VS Code", "Google Colab", "Figma"],
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
      tag: "Full-Stack AI Apps",
      title: "Full-Stack AI Apps",
      description: "Currently learning & building full-stack AI integrations.",
    },
  },
};
