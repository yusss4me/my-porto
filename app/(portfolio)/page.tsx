import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import ProjectGrid from '@/components/organisms/ProjectGrid';
import LabSection from '@/components/organisms/LabSection';
import Footer from '@/components/organisms/Footer';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProjectGrid />
      <LabSection />
      <Footer />
    </>
  );
}
