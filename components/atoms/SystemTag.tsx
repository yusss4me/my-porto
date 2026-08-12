"use client";

import React from "react";

interface SystemTagProps {
  text: string;
  glowColor?: "emerald" | "cyan" | "slate";
  className?: string;
}

export const SystemTag: React.FC<SystemTagProps> = ({
  text,
  glowColor = "emerald",
  className = "",
}) => {
  const glowStyles = {
    emerald: "border-emerald-500/30 bg-emerald-950/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]",
    cyan: "border-cyan-500/30 bg-cyan-950/40 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)]",
    slate: "border-slate-700/60 bg-slate-900/60 text-slate-400",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      <span>{text}</span>
    </div>
  );
};
