import React from "react";

export interface JourneyTagProps {
  label: string;
}

export const JourneyTag: React.FC<JourneyTagProps> = ({ label }) => {
  return (
    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider text-slate-300 bg-slate-800/60 border border-slate-700/60 rounded-full transition-colors hover:border-cyan-500/40 hover:text-cyan-300">
      {label}
    </span>
  );
};
