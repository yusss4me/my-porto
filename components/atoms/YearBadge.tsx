import React from "react";

export interface YearBadgeProps {
  year: string;
  phase: string;
}

export const YearBadge: React.FC<YearBadgeProps> = ({ year, phase }) => {
  return (
    <div className="font-mono text-xs font-semibold text-slate-400 tracking-wider">
      <span className="text-cyan-400 font-bold">{year}</span>{" "}
      <span className="text-slate-600">//</span>{" "}
      <span>{phase}</span>
    </div>
  );
};
