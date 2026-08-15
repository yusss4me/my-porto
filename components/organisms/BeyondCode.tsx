"use client";

import React from "react";
import { SystemTag } from "@/components/atoms/SystemTag";
import { StatusIndicator } from "@/components/atoms/StatusIndicator";
import { TechTag } from "@/components/atoms/TechTag";
import { TerminalCard } from "@/components/molecules/TerminalCard";
import { Globe, Quote } from "lucide-react";
import { aboutData } from "@/data/about";

export const BeyondCode: React.FC = () => {
  const { beyondCodeSection } = aboutData;

  return (
    <section
      id="beyond-code"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] rounded-3xl border border-slate-800/60 overflow-hidden shadow-2xl space-y-12 sm:space-y-16 scroll-mt-28"
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
        <SystemTag text={beyondCodeSection.badgeText} glowColor="emerald" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
          {beyondCodeSection.title}
        </h2>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          {beyondCodeSection.description}
        </p>
      </div>

      {/* 3-Column Terminal Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Engineering Philosophy */}
        <TerminalCard
          headerTag={beyondCodeSection.philosophyHeaderTag}
          headerRight={
            <Quote className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          }
          footerText={beyondCodeSection.philosophyFooterText}
        >
          <div className="py-2 flex flex-col justify-center min-h-[160px]">
            <blockquote className="text-base sm:text-lg font-serif italic text-slate-200 leading-relaxed">
              &ldquo;{beyondCodeSection.philosophyQuote}&rdquo;
            </blockquote>
          </div>
        </TerminalCard>

        {/* Card 2: Off the Grid */}
        <TerminalCard
          headerTag={beyondCodeSection.offGridHeaderTag}
          headerRight={
            <Globe className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
          }
          footerText={beyondCodeSection.offGridFooterText}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              {beyondCodeSection.offGridTitle}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {beyondCodeSection.offGridDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {beyondCodeSection.offGridTags.map((tag, idx) => (
                <TechTag key={idx} label={tag} />
              ))}
            </div>
          </div>
        </TerminalCard>

        {/* Card 3: Current Vector */}
        <TerminalCard
          headerTag={beyondCodeSection.currentVectorHeaderTag}
          headerRight={<StatusIndicator text="• OPERATIONAL" glowColor="emerald" />}
          footerText={beyondCodeSection.currentVectorFooterText}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              {beyondCodeSection.currentVectorTitle}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              {beyondCodeSection.currentVectorDescription}
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
