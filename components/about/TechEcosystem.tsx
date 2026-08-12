"use client";

import React, { useState } from "react";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import { MarqueeTrack } from "@/components/molecules/MarqueeTrack";
import { InspectionCard } from "@/components/molecules/InspectionCard";
import { row1TechData, row2TechData, TechItem } from "@/data/techStackData";

export const TechEcosystem: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  return (
    <section
      id="tech-ecosystem"
      className="relative w-full py-16 sm:py-24 bg-[#0B0F17] rounded-3xl border border-slate-800/60 overflow-hidden shadow-2xl space-y-10 sm:space-y-14"
    >
      {/* Background Radial Glow Mask & Subtle Dotted Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.06)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 space-y-4">
        <StatusBadge text="TECH ECOSYSTEM" glowColor="cyan" size="md" />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
          Frontend & AI Engineering
        </h2>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Powering the next generation of intelligent interfaces. Building high-performance digital experiences with a sophisticated stack of modern web technologies and machine learning frameworks.
        </p>
      </div>

      {/* 2 Dual-Direction Marquee Tracks */}
      <div className="relative z-10 space-y-4 sm:space-y-6">
        {/* Row 1: Frontend & Core Web (Scrolls Left) */}
        <MarqueeTrack
          items={row1TechData}
          direction="left"
          speedDuration={32}
          activeTechId={activeTech?.id}
          onHoverTech={(tech) => setActiveTech(tech)}
          onLeaveTech={() => setActiveTech(null)}
        />

        {/* Row 2: AI/ML & Backend (Scrolls Right) */}
        <MarqueeTrack
          items={row2TechData}
          direction="right"
          speedDuration={36}
          activeTechId={activeTech?.id}
          onHoverTech={(tech) => setActiveTech(tech)}
          onLeaveTech={() => setActiveTech(null)}
        />
      </div>

      {/* Bottom Interactive Inspection Card */}
      <div className="relative z-10 px-4 sm:px-6">
        <InspectionCard activeTech={activeTech} />
      </div>
    </section>
  );
};
