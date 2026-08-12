import React from "react";

export interface JourneyDotProps {
  className?: string;
}

export const JourneyDot: React.FC<JourneyDotProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center my-1 ${className}`}>
      <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_14px_#38bdf8] border-2 border-[#0B0F17] group-hover:scale-125 transition-transform duration-300 z-10" />
      <div className="absolute w-8 h-8 rounded-full bg-cyan-400/20 animate-ping pointer-events-none z-0" />
    </div>
  );
};
