"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillGroup } from "@/data/about";
import { Layout, Cpu, Wrench } from "lucide-react";

interface AboutSkillsProps {
  skills: SkillGroup[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Frontend Engineering": <Layout className="w-5 h-5 text-cyan-400" />,
  "AI & Data Science": <Cpu className="w-5 h-5 text-indigo-400" />,
  "Workflow & Utilities": <Wrench className="w-5 h-5 text-emerald-400" />,
};

export const AboutSkills: React.FC<AboutSkillsProps> = ({ skills }) => {
  return (
    <section id="tech-stack" className="scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>03 // SECTION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-mono">
          TECH_STACK
        </h2>
      </div>

      {/* Categorized Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, idx) => {
          const icon = CATEGORY_ICONS[group.category] || (
            <Layout className="w-5 h-5 text-cyan-400" />
          );

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 rounded-2xl border border-white/10 bg-[#090d16]/70 backdrop-blur-md space-y-5 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-white font-mono tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-medium font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
