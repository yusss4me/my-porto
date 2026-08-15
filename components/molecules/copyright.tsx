import React from 'react';
import portfolioData from '@/data/portfolioData.json';
import { footerData } from '@/data/footerData';

export default function Copyright() {
  const { profile } = portfolioData;

  return (
    <div className="pt-8 py-24 md:py-24 lg:py-2 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#c2c6d6]">
      <div>
        © {new Date().getFullYear()} {profile.name}. {footerData.copyrightSuffix}
      </div>
      <div className="flex gap-6">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
  );
}