"use client";

import React from "react";
import { motion } from "framer-motion";
import { YearBadge } from "@/components/atoms/YearBadge";
import { JourneyTag } from "@/components/atoms/JourneyTag";

export interface JourneyMilestoneData {
  year: string;
  phase: string;
  title: string;
  description: string;
  tags: string[];
}

export interface JourneyCardProps {
  milestone: JourneyMilestoneData;
  position: "top" | "bottom";
  delay?: number;
}

export const JourneyCard: React.FC<JourneyCardProps> = ({
  milestone,
  position,
  delay = 0,
}) => {
  const isTop = position === "top";

  return (
    <motion.div
      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="w-full bg-[#111625]/90 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl group-hover:shadow-cyan-500/10 space-y-4"
    >
      <YearBadge year={milestone.year} phase={milestone.phase} />

      <h3 className="text-lg font-bold text-white tracking-tight font-sans">
        {milestone.title}
      </h3>

      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
        {milestone.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {milestone.tags.map((tag, idx) => (
          <JourneyTag key={idx} label={tag} />
        ))}
      </div>
    </motion.div>
  );
};
