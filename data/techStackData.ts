import React from "react";

export interface TechItem {
  id: string;
  name: string;
  category: string;
  roleTag: string;
  status: string;
  description: string;
  iconName: string;
}

export const row1TechData: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend & Core Web",
    roleTag: "Frontend Architecture",
    status: "ACTIVE",
    description: "Server-side rendering, App Router architecture, and production-grade performance optimization for scalable applications.",
    iconName: "Nextjs",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend & Core Web",
    roleTag: "UI Library",
    status: "ACTIVE",
    description: "Component-driven interface development with concurrent rendering and dynamic state management.",
    iconName: "React",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend & Core Web",
    roleTag: "Design System",
    status: "ACTIVE",
    description: "Utility-first design engine delivering responsive layouts, customized glassmorphic themes, and sleek styling.",
    iconName: "Tailwind",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend & Core Web",
    roleTag: "Type Safety",
    status: "ACTIVE",
    description: "Strict static typing layer guaranteeing runtime stability, automated refactoring, and code maintainability.",
    iconName: "TypeScript",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "Frontend & Core Web",
    roleTag: "Interactions & Physics",
    status: "ACTIVE",
    description: "Production-ready motion engine powering smooth spring physics, micro-interactions, and layout transitions.",
    iconName: "FramerMotion",
  },
];

export const row2TechData: TechItem[] = [
  {
    id: "python",
    name: "Python",
    category: "AI/ML & Backend",
    roleTag: "Core AI & Scripting",
    status: "ACTIVE",
    description: "High-level language for algorithmic engineering, rapid prototyping, and seamless AI framework integration.",
    iconName: "Python",
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "AI/ML & Backend",
    roleTag: "Machine Learning",
    status: "ACTIVE",
    description: "Comprehensive toolkit for statistical modeling, predictive classification, regression, and data preprocessing.",
    iconName: "ScikitLearn",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "AI/ML & Backend",
    roleTag: "High-Speed Microservices",
    status: "ACTIVE",
    description: "Asynchronous Python web framework delivering lightning-fast REST endpoints and dynamic OpenAPI schemas.",
    iconName: "FastAPI",
  },
  {
    id: "numpy-pandas",
    name: "NumPy/Pandas",
    category: "AI/ML & Backend",
    roleTag: "Data Processing",
    status: "ACTIVE",
    description: "Multi-dimensional array computing and structured data analysis primitives for heavy computation pipelines.",
    iconName: "NumPyPandas",
  },
  {
    id: "github",
    name: "GitHub",
    category: "AI/ML & Backend",
    roleTag: "Version Control & CI/CD",
    status: "ACTIVE",
    description: "Distributed version control, collaborative code reviews, and automated continuous integration pipelines.",
    iconName: "GitHub",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "AI/ML & Backend",
    roleTag: "Deep Learning Platform",
    status: "ACTIVE",
    description: "End-to-end open-source machine learning framework for training enterprise-grade neural networks.",
    iconName: "TensorFlow",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "AI/ML & Backend",
    roleTag: "Neural Network Modeling",
    status: "ACTIVE",
    description: "Dynamic computational graph framework optimized for deep learning research and custom neural architectures.",
    iconName: "PyTorch",
  },
];

export const techStackData: TechItem[] = [...row1TechData, ...row2TechData];
