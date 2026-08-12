import React from "react";
import { JourneyDot } from "@/components/atoms/JourneyDot";

export interface JourneyNodeProps {
  position: "top" | "bottom";
}

export const JourneyNode: React.FC<JourneyNodeProps> = ({ position }) => {
  const isTop = position === "top";

  return (
    <div className="relative flex flex-col items-center justify-center my-2 z-20">
      {/* Top Vertical Connector */}
      <div
        className={`hidden md:block w-[1px] h-12 bg-gradient-to-b ${
          isTop
            ? "from-cyan-400/50 via-cyan-400/20 to-transparent"
            : "from-transparent via-cyan-400/20 to-cyan-400/50"
        }`}
      />

      {/* Central Glowing Dot Atom */}
      <JourneyDot />

      {/* Bottom Vertical Connector */}
      <div
        className={`hidden md:block w-[1px] h-12 bg-gradient-to-b ${
          !isTop
            ? "from-cyan-400/50 via-cyan-400/20 to-transparent"
            : "from-transparent via-cyan-400/20 to-cyan-400/50"
        }`}
      />
    </div>
  );
};
