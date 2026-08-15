import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import AboutOverviewSection from '@/components/organisms/AboutOverviewSection';
import Footer from '@/components/organisms/Footer';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProjectGrid />
      <AboutOverviewSection />
      <Footer />
    </>
  );
}


