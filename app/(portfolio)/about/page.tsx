import React from "react";
import { Metadata } from "next";
import { aboutData } from "@/data/about";
import { AboutHero, MyJourney, TechEcosystem, BeyondCode } from "@/components/organisms";

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
      <MyJourney />

      {/* Section 3: Tech Ecosystem Section */}
      <TechEcosystem />

      {/* Section 4: Beyond Code Cyber Terminal Section */}
      <BeyondCode />
    </div>
  );
}
