"use client";

import React from "react";
import Image from "next/image";
import { AboutHeroData, MetricItem } from "@/data/about";

interface AboutHeroProps {
  hero: AboutHeroData;
  stats: MetricItem[];
}

export const AboutHero: React.FC<AboutHeroProps> = ({ hero, stats }) => {
  // TODO: Attach Framer Motion / GSAP animations here (e.g. hero container entrance ref)

  return (
    <header className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Content Column */}
        <div className="md:col-span-2 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            {hero.tagline}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {hero.headline}
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            {hero.subtext}
          </p>
        </div>

        {/* Profile Image Container Placeholder */}
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
            {/* TODO: Attach Image entrance animation / hover effect here */}
            <Image
              src={hero.photoUrl}
              alt="Ardi Yustiar Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Metrics / Stats Counter Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/60">
        {stats.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-1"
          >
            {/* TODO: Attach Counter / Number Ticker animation here */}
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              {metric.value}
            </p>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
};
