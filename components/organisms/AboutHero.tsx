"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AboutHeroData, MetricItem } from "@/data/about";
import {
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  User,
  Zap,
  Brain,
  Layers,
  Palette,
  ArrowRight,
} from "lucide-react";

interface AboutHeroProps {
  hero: AboutHeroData;
  stats: MetricItem[];
}

type TabType = "me" | "javascript" | "python";

export const AboutHero: React.FC<AboutHeroProps> = ({ hero, stats }) => {
  const [activeTab, setActiveTab] = useState<TabType>("me");

  const springTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  return (
    <section id="overview" className="scroll-mt-28 space-y-8">
      {/* Top Header / Mode Switcher Pill */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM_INITIALIZED</span>
          <span className="text-emerald-600">//</span>
          <span className="text-zinc-300">INTERACTIVE_MODE: {activeTab.toUpperCase()}</span>
        </div>

        {/* Quick Toggles on Mobile/Desktop Header for accessibility */}
        <div className="flex items-center gap-2 bg-[#0d121f] p-1.5 rounded-full border border-white/10 shadow-inner">
          <button
            onClick={() => setActiveTab("javascript")}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
              activeTab === "javascript"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveTab("me")}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
              activeTab === "me"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Me / Bio
          </button>
          <button
            onClick={() => setActiveTab("python")}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
              activeTab === "python"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Python / AI
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Container */}
      <div className="relative min-h-[460px] lg:min-h-[420px] rounded-3xl bg-[#090d16]/80 border border-white/10 backdrop-blur-xl p-6 lg:p-8 overflow-hidden shadow-2xl">
        {/* Subtle Ambient Background Gradients based on active state */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            activeTab === "me"
              ? "bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-100"
              : activeTab === "javascript"
              ? "bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-600/10 opacity-100"
              : "bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-600/10 opacity-100"
          }`}
        />

        {/* Dynamic Card Morphing Canvas */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[380px]">
          
          {/* ===================== TAB STATE 1: ME ===================== */}
          {activeTab === "me" && (
            <>
              {/* Left Mini Badge Toggle (JavaScript) */}
              <motion.div
                layout
                layoutId="card-javascript"
                transition={springTransition}
                onClick={() => setActiveTab("javascript")}
                className="order-1 md:col-span-3 cursor-pointer group p-4 rounded-2xl bg-[#121620] border border-amber-500/30 hover:border-amber-400/60 shadow-lg hover:shadow-amber-500/10 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400/80 tracking-wider uppercase block font-semibold">
                    Specialization
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300">
                    JavaScript / Web
                  </h4>
                </div>
              </motion.div>

              {/* Central Large Focal Profile Photo Card */}
              <motion.div
                layout
                layoutId="card-me"
                transition={springTransition}
                className="order-2 md:col-span-6 flex flex-col items-center text-center p-6 rounded-2xl bg-[#121620] border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-xl mb-4 group">
                  <Image
                    src={hero.photoUrl}
                    alt="Ardi Yustiar Profile"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-40" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-2">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ardi Yustiar</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                  Informatics Engineering Student
                </h2>
                
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md">
                  Crafting interactive modern web interfaces and exploring artificial intelligence solutions. Focused on seamless user experiences and computational logic.
                </p>

                {/* Micro detail badges */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300 font-mono text-[11px]">
                    🎓 Tech Innovator
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300 font-mono text-[11px]">
                    ⚡ UI/UX Enthusiast
                  </span>
                </div>
              </motion.div>

              {/* Right Mini Badge Toggle (Python) */}
              <motion.div
                layout
                layoutId="card-python"
                transition={springTransition}
                onClick={() => setActiveTab("python")}
                className="order-3 md:col-span-3 cursor-pointer group p-4 rounded-2xl bg-[#121620] border border-indigo-500/30 hover:border-indigo-400/60 shadow-lg hover:shadow-indigo-500/10 transition-all flex items-center gap-3"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-400/80 tracking-wider uppercase block font-semibold">
                    AI & ML Focus
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300">
                    Python Engineering
                  </h4>
                </div>
              </motion.div>
            </>
          )}

          {/* ===================== TAB STATE 2: JAVASCRIPT ===================== */}
          {activeTab === "javascript" && (
            <>
              {/* Expanded Focal JavaScript Card (Left/Main) */}
              <motion.div
                layout
                layoutId="card-javascript"
                transition={springTransition}
                className="order-1 md:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121620] border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider block">
                        FRONTEND SPECIALIZATION
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        JavaScript & Web Systems
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  Specialized in building high-performance modern web applications using <strong className="text-amber-300 font-semibold">Next.js</strong>, <strong className="text-amber-300 font-semibold">React</strong>, and <strong className="text-amber-300 font-semibold">Tailwind CSS</strong>. Dedicated to atomic design architectures, state management, and fluid animations.
                </p>

                {/* Tech Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-zinc-200">Next.js & App Router</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-zinc-200">Framer Motion UI</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Palette className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-zinc-200">Design Systems & HSL</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono text-zinc-200">Performance First</span>
                  </div>
                </div>
              </motion.div>

              {/* Offset Secondary Profile Card (Me) */}
              <motion.div
                layout
                layoutId="card-me"
                transition={springTransition}
                onClick={() => setActiveTab("me")}
                className="order-2 md:col-span-3 cursor-pointer group p-5 rounded-2xl bg-[#121620]/90 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg flex flex-col items-center text-center transition-all hover:scale-102"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-cyan-400/40 mb-3">
                  <Image
                    src={hero.photoUrl}
                    alt="Ardi Yustiar Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300">
                  Ardi Yustiar
                </h4>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Click to view Bio
                </p>
              </motion.div>

              {/* Top/Side Mini Toggle (Python) */}
              <motion.div
                layout
                layoutId="card-python"
                transition={springTransition}
                onClick={() => setActiveTab("python")}
                className="order-3 md:col-span-2 cursor-pointer group p-4 rounded-2xl bg-[#121620] border border-indigo-500/30 hover:border-indigo-400/60 shadow-lg transition-all flex flex-col items-center justify-center text-center gap-2"
              >
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-indigo-300 font-semibold block">
                  Switch to Python AI
                </span>
              </motion.div>
            </>
          )}

          {/* ===================== TAB STATE 3: PYTHON ===================== */}
          {activeTab === "python" && (
            <>
              {/* Top/Side Mini Toggle (JavaScript) */}
              <motion.div
                layout
                layoutId="card-javascript"
                transition={springTransition}
                onClick={() => setActiveTab("javascript")}
                className="order-1 md:col-span-2 cursor-pointer group p-4 rounded-2xl bg-[#121620] border border-amber-500/30 hover:border-amber-400/60 shadow-lg transition-all flex flex-col items-center justify-center text-center gap-2"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-amber-300 font-semibold block">
                  Switch to Web Dev
                </span>
              </motion.div>

              {/* Offset Secondary Profile Card (Me) */}
              <motion.div
                layout
                layoutId="card-me"
                transition={springTransition}
                onClick={() => setActiveTab("me")}
                className="order-2 md:col-span-3 cursor-pointer group p-5 rounded-2xl bg-[#121620]/90 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg flex flex-col items-center text-center transition-all hover:scale-102"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-cyan-400/40 mb-3">
                  <Image
                    src={hero.photoUrl}
                    alt="Ardi Yustiar Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300">
                  Ardi Yustiar
                </h4>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Click to view Bio
                </p>
              </motion.div>

              {/* Expanded Focal Python/AI Card (Right/Main) */}
              <motion.div
                layout
                layoutId="card-python"
                transition={springTransition}
                className="order-3 md:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121620] border border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider block">
                        AI & MACHINE LEARNING
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        Python Engineering
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                  Engaged in intelligent algorithm design, neural network architectures, and computational modeling. Combining <strong className="text-indigo-300 font-semibold">Python</strong> with modern data structures and classification algorithms including <strong className="text-indigo-300 font-semibold">HSL color harmony models</strong>.
                </p>

                {/* Tech Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Brain className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono text-zinc-200">Neural Networks</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono text-zinc-200">Python & Data Sci</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Palette className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono text-zinc-200">HSL Color Analytics</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#090d16] border border-white/5 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono text-zinc-200">Algorithm Optimization</span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Stat counters grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
        {stats.map((metric, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl border border-white/10 bg-[#090d16]/60 backdrop-blur-md relative overflow-hidden group transition-colors hover:border-cyan-500/30"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight mb-1">
              {metric.value}
            </p>
            <p className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

