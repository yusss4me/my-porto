import React from 'react';
import MainLayout from '@/components/templates/MainLayout';

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

