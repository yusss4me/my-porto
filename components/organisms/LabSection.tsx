import React from 'react';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData.json';

export default function LabSection() {
  const { lab } = portfolioData;

  return (
    <section id="lab" className="py-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-xs text-[#4edea3] tracking-widest uppercase">Research & Development</span>
          <h2 className="font-geist text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            The AI Lab
          </h2>
          <p className="font-inter text-[#c2c6d6] text-sm md:text-base leading-relaxed mb-8">
            Exploring the frontiers of Human-Computer Interaction through generative AI and advanced frontend orchestration. My lab projects focus on making intelligent systems feel invisible yet powerful.
          </p>

          <div className="space-y-6">
            {lab.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded bg-[#0c1324]/40 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#4edea3] shrink-0 font-mono text-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-geist text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="font-inter text-xs text-[#c2c6d6]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-white/10 glass-panel">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
            alt="Lab Experimentation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
