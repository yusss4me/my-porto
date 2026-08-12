"use client";

import React from "react";
import { TechPill } from "@/components/atoms/TechPill";
import { TechItem } from "@/data/techStackData";

interface MarqueeTrackProps {
  items: TechItem[];
  direction?: "left" | "right";
  speedDuration?: number; // in seconds
  activeTechId?: string | null;
  onHoverTech?: (tech: TechItem) => void;
  onLeaveTech?: () => void;
  onClickTech?: (tech: TechItem) => void;
  className?: string;
}

export const MarqueeTrack: React.FC<MarqueeTrackProps> = ({
  items,
  direction = "left",
  speedDuration = 30,
  activeTechId,
  onHoverTech,
  onLeaveTech,
  onClickTech,
  className = "",
}) => {
  // Duplicate array 3 times to guarantee smooth continuous loop across wide monitors
  const trackItems = [...items, ...items, ...items];

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`relative w-full overflow-hidden marquee-pause py-2 ${className}`}
    >
      {/* Subtle Gradient Fade Overlays on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#0B0F17] via-[#0B0F17]/80 to-transparent" />

      {/* Scrolling Container */}
      <div
        className={`${animationClass} flex items-center gap-4 sm:gap-6`}
        style={{ animationDuration: `${speedDuration}s` }}
      >
        {trackItems.map((tech, index) => {
          const isActive = activeTechId === tech.id;
          return (
            <TechPill
              key={`${tech.id}-${index}`}
              name={tech.name}
              iconName={tech.iconName}
              isActive={isActive}
              onHover={() => onHoverTech?.(tech)}
              onLeave={onLeaveTech}
              onClick={() => onClickTech?.(tech)}
            />
          );
        })}
      </div>
    </div>
  );
};
