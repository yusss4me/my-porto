"use client";

import React from "react";

interface StatusIndicatorProps {
  text: string;
  glowColor?: "emerald" | "cyan" | "amber";
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  text,
  glowColor = "emerald",
  className = "",
}) => {
  const colorMap = {
    emerald: {
      dot: "bg-emerald-400 shadow-[0_0_8px_#34D399]",
      text: "text-emerald-400",
    },
    cyan: {
      dot: "bg-cyan-400 shadow-[0_0_8px_#2DD4BF]",
      text: "text-cyan-400",
    },
    amber: {
      dot: "bg-amber-400 shadow-[0_0_8px_#FBBF24]",
      text: "text-amber-400",
    },
  };

  const selected = colorMap[glowColor];

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider uppercase ${selected.text} ${className}`}>
      <span className={`w-2 h-2 rounded-full animate-pulse ${selected.dot}`} />
      <span>{text.replace(/^•\s*/, "")}</span>
    </div>
  );
};
