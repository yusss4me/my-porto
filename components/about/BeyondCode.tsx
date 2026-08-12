"use client";

import React from "react";
import { SystemTag } from "@/components/atoms/SystemTag";
import { StatusIndicator } from "@/components/atoms/StatusIndicator";
import { TechTag } from "@/components/atoms/TechTag";
import { TerminalCard } from "@/components/molecules/TerminalCard";
import { Globe, Quote } from "lucide-react";

export const BeyondCode: React.FC = () => {
  return (
    <section
      id="beyond-code"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] rounded-3xl border border-slate-800/60 overflow-hidden shadow-2xl space-y-12 sm:space-y-16"
    >
      {/* Background Radial Gradient & Grid Pattern Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.06)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <SystemTag text="• SYSTEM PROTOCOL" glowColor="emerald" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
          Beyond Code
        </h2>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Exploring the intersection of technical mastery, human intent, and continuous equilibrium.
        </p>
      </div>

      {/* 3-Column Terminal Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Engineering Philosophy */}
        <TerminalCard
          headerTag="SYS_LOG // PHILOSOPHY"
          headerRight={
            <Quote className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          }
          footerText="STATUS: ACTIVE"
        >
          <div className="py-2 flex flex-col justify-center min-h-[160px]">
            <blockquote className="text-base sm:text-lg font-serif italic text-slate-200 leading-relaxed">
              &ldquo;Engineering is not merely about writing instructions for machines; it is the deliberate act of bridging raw human intent with emergent computational capability.&rdquo;
            </blockquote>
          </div>
        </TerminalCard>

        {/* Card 2: Off the Grid */}
        <TerminalCard
          headerTag="OFF_GRID // HUMAN_SIDE"
          headerRight={
            <Globe className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          }
          footerText="MODE: PERSONAL_EQUILIBRIUM"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              Off the Grid
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Beyond the IDE, maintaining equilibrium requires physical exertion and continuous curiosity. Tracking the evolution of consumer tech and finding rhythm on the court.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <TechTag label="BASKETBALL" />
              <TechTag label="TECH_RESEARCH" />
              <TechTag label="CREATIVE_BALANCE" />
            </div>
          </div>
        </TerminalCard>

        {/* Card 3: Current Vector */}
        <TerminalCard
          headerTag="LIVE_FOCUS // CURRENT"
          headerRight={<StatusIndicator text="• OPERATIONAL" glowColor="emerald" />}
          footerText="ACTIVE_STACK: NEXTJS + PYTHON_AI"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              Current Vector
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              Architecting next-generation interfaces powered by large language models. Exploring the latent space between deterministic UI components and stochastic AI outputs.
            </p>

            {/* Visual Metric Bars Graphic */}
            <div className="pt-2">
              <div className="bg-[#0B0F17]/90 p-3.5 rounded-lg border border-slate-800/80 flex items-end justify-between h-20 gap-3 px-5">
                <div className="w-full bg-slate-800 rounded-sm h-[35%] transition-all group-hover:bg-slate-700" />
                <div className="w-full bg-slate-800 rounded-sm h-[60%] transition-all group-hover:bg-slate-700" />
                <div className="w-full bg-slate-800 rounded-sm h-[25%] transition-all group-hover:bg-slate-700" />
                <div className="w-full bg-emerald-500 rounded-sm h-[90%] shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
              </div>
            </div>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};

export default BeyondCode;
