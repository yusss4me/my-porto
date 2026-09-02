"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/about";
import { ArrowRight, User } from "lucide-react";
import TypewriterText from "@/components/atoms/TypewriterText";

export default function AboutOverviewSection() {
  const subtextStrings = Array.isArray(aboutData.hero.subtext)
    ? aboutData.hero.subtext
    : [aboutData.hero.subtext];

  const highlights = [
    {
      title: "Informatics Engineering Student",
      description: "Focusing on data structures, computational logic, and modern software design principles.",
    },
    {
      title: "Modular Frontend Developer",
      description: "Crafting highly performant web applications using Next.js, React, and Tailwind CSS.",
    },
    {
      title: "AI & ML Explorer",
      description: "Integrating intelligent machine learning models with interactive digital interfaces.",
    },
  ];

  return (
    <section id="about-overview" className="py-16 md:py-24 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Information & Highlights */}
        <div>          
          <h2 className="font-geist text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-1 mb-6">
            Building Digital Products & Exploring AI
          </h2>
          
          <p className="font-inter text-[#c2c6d6] text-sm md:text-base leading-relaxed mb-8 min-h-[4rem]">
            <TypewriterText strings={subtextStrings} />
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-[#0c1324]/60 border border-white/5 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 font-mono text-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-geist text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="font-inter text-xs text-[#c2c6d6] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold tracking-wider transition-all hover:border-cyan-400 group"
          >
            <span>EXPLORE FULL ABOUT</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Column: Profile Image Container */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-2xl group">
          <Image
            src={aboutData.hero.photoUrl}
            alt="Ardi Yustiar Profile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090d16]/80 border border-white/10 backdrop-blur-md">
            <p className="font-mono text-xs text-cyan-400 font-semibold mb-1">Ardi Yustiar</p>
            <p className="font-inter text-xs text-zinc-300">Informatics Engineering Student & Tech Innovator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
