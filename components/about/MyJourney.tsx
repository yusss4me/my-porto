"use client";

import React, { useRef } from "react";
import { JourneyCard, JourneyMilestoneData } from "@/components/molecules/JourneyCard";
import { JourneyNode } from "@/components/molecules/JourneyNode";
import { aboutData } from "@/data/about";

export type { JourneyMilestoneData as JourneyMilestone };

export const defaultMilestones: JourneyMilestoneData[] = aboutData.journey.map((item) => ({
  year: item.year || "2024",
  phase: item.phase || "EVOLUTION",
  title: item.role,
  description: item.description,
  tags: item.badges,
}));

export interface MyJourneyProps {
  milestones?: JourneyMilestoneData[];
}

export const MyJourney: React.FC<MyJourneyProps> = ({
  milestones = defaultMilestones,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journey" className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl text-slate-100 my-12 scroll-mt-28">
      {/* Background Dotted Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient Cyan & Teal Radial Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono flex items-center gap-2">
            <span className="text-cyan-400 font-semibold">{aboutData.myJourneySection.titleHighlight}</span>{" "}
            <span>{aboutData.myJourneySection.titleText}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl">
            {aboutData.myJourneySection.description}
          </p>
        </div>


        {/* Horizontal Timeline Container */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-none pb-8 pt-4 px-2 flex space-x-8 sm:space-x-12 scroll-smooth select-none cursor-grab active:cursor-grabbing"
          >
            {/* Horizontal Axis Line */}
            <div className="hidden md:block absolute top-[280px] left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-500/10 via-cyan-400/40 to-cyan-500/10 z-0" />

            {milestones.map((item, idx) => {
              const position = idx % 2 === 0 ? "top" : "bottom";
              const isTop = position === "top";

              return (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-[300px] sm:w-[360px] flex flex-col items-center justify-between min-h-[520px] group z-10"
                >
                  {/* Top Card Slot */}
                  <div className="w-full flex-1 flex flex-col justify-end pb-6 z-10">
                    {isTop ? (
                      <JourneyCard
                        milestone={item}
                        position="top"
                        delay={idx * 0.1}
                      />
                    ) : (
                      <div className="hidden md:block w-full h-full" />
                    )}
                  </div>

                  {/* Center Node Molecule */}
                  <JourneyNode position={position} />

                  {/* Bottom Card Slot */}
                  <div className="w-full flex-1 flex flex-col justify-start pt-6 z-10">
                    {!isTop ? (
                      <JourneyCard
                        milestone={item}
                        position="bottom"
                        delay={idx * 0.1}
                      />
                    ) : (
                      <div className="hidden md:block w-full h-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
