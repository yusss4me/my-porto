"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoContent } from "@/data/about";
import { Quote, Compass, Zap } from "lucide-react";

interface AboutBentoProps {
  bento: BentoContent;
}

export const AboutBento: React.FC<AboutBentoProps> = ({ bento }) => {
  return (
    <section id="beyond-code" className="scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>04 // SECTION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-mono">
          BEYOND_CODE
        </h2>
      </div>

      {/* Bento Grid Layout (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Quote Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090d16]/70 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Quote className="w-5 h-5 text-cyan-400" />
            </div>
            <blockquote className="text-base sm:text-lg font-medium italic text-zinc-200 leading-relaxed font-sans">
              &ldquo;{bento.quote.text}&rdquo;
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
              {bento.quote.caption}
            </p>
          </div>
        </motion.div>

        {/* Card 2: Off the Grid Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090d16]/70 backdrop-blur-md space-y-5 shadow-xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              {bento.personalInterest.tag}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {bento.personalInterest.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {bento.personalInterest.description}
            </p>
          </div>
        </motion.div>

        {/* Card 3: Current Focus Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090d16]/70 backdrop-blur-md space-y-5 shadow-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              {bento.currentFocus.tag}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {bento.currentFocus.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {bento.currentFocus.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
