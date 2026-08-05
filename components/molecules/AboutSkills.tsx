"use client";

import React from "react";
import { SkillGroup } from "@/data/about";

interface AboutSkillsProps {
  skills: SkillGroup[];
}

export const AboutSkills: React.FC<AboutSkillsProps> = ({ skills }) => {
  // TODO: Attach Framer Motion / GSAP stagger / hover animations here

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight text-white uppercase font-mono">
        Technical Arsenal
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-300 font-mono tracking-wide">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 text-xs font-medium font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
