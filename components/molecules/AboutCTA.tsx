"use client";

import React from "react";
import Link from "next/link";

interface AboutCTAProps {
  headline?: string;
  contactUrl?: string;
  resumeUrl?: string;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({
  headline = "Interested in working together?",
  contactUrl = "/contact",
  resumeUrl = "/resume.pdf",
}) => {
  // TODO: Attach Framer Motion / GSAP hover & glow effects here

  return (
    <section className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 text-center space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {headline}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Contact Link Button Slot */}
        <Link
          href={contactUrl}
          className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-colors shadow-lg shadow-emerald-500/20"
        >
          Get In Touch
        </Link>

        {/* Download Resume/CV Button Slot */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800 text-white font-semibold text-sm transition-colors"
        >
          Download Resume / CV
        </a>
      </div>
    </section>
  );
};
