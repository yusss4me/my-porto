"use client";

import React from "react";

interface StatusBadgeProps {
  text: string;
  glowColor?: "cyan" | "emerald" | "blue";
  size?: "sm" | "md";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  text,
  glowColor = "cyan",
  size = "md",
  className = "",
}) => {
  const colorMap = {
    cyan: {
      dot: "bg-teal-400 shadow-[0_0_8px_#2DD4BF]",
      text: "text-teal-400",
      border: "border-teal-500/20 bg-teal-950/30",
    },
    emerald: {
      dot: "bg-emerald-400 shadow-[0_0_8px_#34D399]",
      text: "text-emerald-400",
      border: "border-emerald-500/20 bg-emerald-950/30",
    },
    blue: {
      dot: "bg-sky-400 shadow-[0_0_8px_#38BDF8]",
      text: "text-sky-400",
      border: "border-sky-500/20 bg-sky-950/30",
    },
  };

  const selectedColor = colorMap[glowColor];
  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-0.5 text-[10px] tracking-wider"
      : "px-3.5 py-1 text-xs tracking-widest";

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono font-semibold uppercase rounded-full border backdrop-blur-md transition-all duration-300 ${selectedColor.border} ${selectedColor.text} ${sizeClasses} ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full animate-pulse ${selectedColor.dot}`}
      />
      <span>{text}</span>
    </div>
  );
};
