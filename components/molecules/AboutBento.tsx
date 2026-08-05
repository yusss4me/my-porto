"use client";

import React from "react";
import { BentoContent } from "@/data/about";

interface AboutBentoProps {
  bento: BentoContent;
}

export const AboutBento: React.FC<AboutBentoProps> = ({ bento }) => {
  // TODO: Attach Framer Motion / GSAP bento hover / tilt animations here

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight text-white uppercase font-mono">
        Beyond Code
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Quote Card */}
        <div className="md:col-span-1 p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col justify-between space-y-4">
          <blockquote className="text-base sm:text-lg font-medium italic text-zinc-200 leading-relaxed">
            &ldquo;{bento.quote.text}&rdquo;
          </blockquote>
          <p className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
            {bento.quote.caption}
          </p>
        </div>

        {/* Card 2: Personal Interest Card */}
        <div className="md:col-span-1 p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
          <span className="inline-block px-2.5 py-0.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            {bento.personalInterest.tag}
          </span>
          <h3 className="text-lg font-semibold text-white">
            {bento.personalInterest.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {bento.personalInterest.description}
          </p>
        </div>

        {/* Card 3: Current Focus Card */}
        <div className="md:col-span-1 p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-3">
          <span className="inline-block px-2.5 py-0.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            {bento.currentFocus.tag}
          </span>
          <h3 className="text-lg font-semibold text-white">
            {bento.currentFocus.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {bento.currentFocus.description}
          </p>
        </div>
      </div>
    </section>
  );
};
