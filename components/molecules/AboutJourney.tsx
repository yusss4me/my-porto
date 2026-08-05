"use client";

import React from "react";
import { JourneyItem } from "@/data/about";

interface AboutJourneyProps {
  journey: JourneyItem[];
}

export const AboutJourney: React.FC<AboutJourneyProps> = ({ journey }) => {
  // TODO: Attach Framer Motion / GSAP scroll trigger timeline animations here

  return (
    <section className="space-y-6">
      <div className="flex items-center space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-white uppercase font-mono">
          The Journey
        </h2>
      </div>

      <div className="relative border-l border-zinc-800 ml-3 space-y-8 pl-6">
        {journey.map((item, idx) => (
          <article
            key={idx}
            className="relative space-y-3 p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30"
          >
            {/* Timeline Dot Indicator */}
            <span className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-zinc-950" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-emerald-400 font-medium">{item.organization}</p>
              </div>
              <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50">
                {item.period}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>

            {/* Badges / Skill Pills */}
            <ul className="flex flex-wrap gap-2 pt-1 list-none p-0">
              {item.badges.map((badge, bIdx) => (
                <li key={bIdx}>
                  <span className="inline-block text-xs font-mono text-zinc-300 bg-zinc-800/40 border border-zinc-700/40 px-2.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
