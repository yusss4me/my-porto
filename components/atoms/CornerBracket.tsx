"use client";

import React from "react";

interface CornerBracketProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
  size?: string;
  className?: string;
}

export const CornerBracket: React.FC<CornerBracketProps> = ({
  position,
  color = "border-emerald-500/60 group-hover:border-emerald-400 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)]",
  size = "w-2.5 h-2.5",
  className = "",
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0 border-t-2 border-l-2 -translate-x-[1px] -translate-y-[1px]",
    "top-right": "top-0 right-0 border-t-2 border-r-2 translate-x-[1px] -translate-y-[1px]",
    "bottom-left": "bottom-0 left-0 border-b-2 border-l-2 -translate-x-[1px] translate-y-[1px]",
    "bottom-right": "bottom-0 right-0 border-b-2 border-r-2 translate-x-[1px] translate-y-[1px]",
  };

  return (
    <span
      className={`absolute pointer-events-none transition-all duration-300 ${positionClasses[position]} ${color} ${size} ${className}`}
      aria-hidden="true"
    />
  );
};
