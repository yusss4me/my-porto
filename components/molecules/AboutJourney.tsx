"use client";

import React from "react";
import { motion } from "framer-motion";
import { JourneyItem } from "@/data/about";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

interface AboutJourneyProps {
  journey: JourneyItem[];
}

export const AboutJourney: React.FC<AboutJourneyProps> = ({ journey }) => {
  return (
    <section id="journey" className="scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>02 // SECTION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-mono">
          THE_JOURNEY
        </h2>
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
        {journey.map((item, idx) => {
          const isEdu = item.role.toLowerCase().includes("informatics") || item.role.toLowerCase().includes("engineering");

          return (
            <motion.article
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group p-6 rounded-2xl border border-white/10 bg-[#090d16]/70 backdrop-blur-md space-y-4 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Timeline Node Icon Badge */}
              <div className="absolute -left-[37px] sm:-left-[45px] top-6 w-8 h-8 rounded-full bg-[#090d16] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
                {isEdu ? (
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                )}
              </div>

              {/* Top Meta Line: Role & Period Badge */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                    {item.organization}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-zinc-300 bg-white/5 border border-white/10">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Skill Pills */}
              <ul className="flex flex-wrap gap-2 pt-2 list-none p-0">
                {item.badges.map((badge, bIdx) => (
                  <li key={bIdx}>
                    <span className="inline-block text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-lg">
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
