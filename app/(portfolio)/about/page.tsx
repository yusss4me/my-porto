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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* 1. Hero Section */}
      <AboutHero hero={aboutData.hero} stats={aboutData.stats} />

      {/* 2. Journey Section */}
      <AboutJourney journey={aboutData.journey} />

      {/* 3. Skills Matrix Section */}
      <AboutSkills skills={aboutData.skills} />

      {/* 4. Beyond Code Bento Grid */}
      <AboutBento bento={aboutData.bento} />

      {/* 5. Bottom CTA Banner */}
      <CTASection />
    </main>
  );
}
