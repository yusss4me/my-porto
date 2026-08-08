import React from "react";
import { Metadata } from "next";
import { aboutData } from "@/data/about";
import { AboutHero } from "@/components/molecules/AboutHero";
import { AboutJourney } from "@/components/molecules/AboutJourney";
import { AboutSkills } from "@/components/molecules/AboutSkills";
import { AboutBento } from "@/components/molecules/AboutBento";
import CTASection from "@/components/molecules/CTASection";

export const metadata: Metadata = {
  title: "About | Ardi Yustiar",
  description:
    "Learn more about Ardi Yustiar — Informatics Engineering student, Frontend Developer, and Tech Innovator.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-24">
      {/* Section 1: Overview / Hero */}
      <AboutHero hero={aboutData.hero} stats={aboutData.stats} />

      {/* Section 2: The Journey Timeline */}
      <AboutJourney journey={aboutData.journey} />

      {/* Section 3: Tech Stack Grid */}
      <AboutSkills skills={aboutData.skills} />

      {/* Section 4: Beyond Code Bento Grid */}
      <AboutBento bento={aboutData.bento} />
    </div>
  );
}
