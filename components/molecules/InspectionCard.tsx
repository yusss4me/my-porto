"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StatusBadge } from "@/components/atoms/StatusBadge";
import { TechItem } from "@/data/techStackData";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

interface InspectionCardProps {
  activeTech: TechItem | null;
  className?: string;
}

export const InspectionCard: React.FC<InspectionCardProps> = ({
  activeTech,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full max-w-2xl mx-auto rounded-2xl bg-[#111625]/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Corner Bracket Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-teal-500/40 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-teal-500/40 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-teal-500/40 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-teal-500/40 rounded-br-sm pointer-events-none" />

      {/* Subtle Background Glow Accent */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {activeTech ? (
          <motion.div
            key={activeTech.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Header / Role Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StatusBadge
                text={activeTech.roleTag}
                glowColor="cyan"
                size="sm"
              />
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-teal-400/90 bg-teal-950/40 px-2.5 py-1 rounded-full border border-teal-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>STATUS: ACTIVE</span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                {activeTech.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {activeTech.description}
              </p>
            </div>

            {/* Footer / Capability Details */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="text-teal-400/80">
                CATEGORY // {activeTech.category.toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-slate-300 hover:text-teal-400 transition-colors">
                Integration Ready <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="default-state"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="space-y-4"
          >
            {/* Default Header */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <StatusBadge text="SYSTEM STATUS" glowColor="cyan" size="sm" />
            </div>

            {/* Default Title & Subtext */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                Ready for Interaction
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                Hover over the technology nodes above to inspect system capabilities and integration details.
              </p>
            </div>

            {/* Default Footer link/subtext */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>SYSTEM ARCHITECTURE // FOUNDATIONAL LAYER</span>
              <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                View Documentation <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
