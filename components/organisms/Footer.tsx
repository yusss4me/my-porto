'use client';

import React from 'react';
import portfolioData from '@/data/portfolioData.json';
import Button from '@/components/atoms/Button';

export default function Footer() {
  const { profile } = portfolioData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 border-t border-white/5 text-center">
      <h2 className="font-geist text-4xl md:text-6xl font-extrabold text-white mb-6">
        Let&apos;s build the <span className="italic text-[#3b82f6]">future</span> together.
      </h2>
      <p className="font-inter text-[#c2c6d6] max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
        Whether you have a groundbreaking AI idea or need a high-performance web solution, I&apos;m ready to engineer it.
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left space-y-6 mb-12">
        <div>
          <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">Your Name</label>
          <input type="text" required className="w-full glass-input p-2 text-white font-inter text-sm" placeholder="John Doe" />
        </div>
        <div>
          <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">Email Address</label>
          <input type="email" required className="w-full glass-input p-2 text-white font-inter text-sm" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">Message</label>
          <textarea required rows={4} className="w-full glass-input p-2 text-white font-inter text-sm resize-none" placeholder="Let's build something awesome..." />
        </div>
        <Button type="submit" variant="green" className="w-full py-3 justify-center">
          Send Transmission
        </Button>
      </form>

      <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#c2c6d6]">
        <div>
          © {new Date().getFullYear()} {profile.name}. Engineered for the future.
        </div>
        <div className="flex gap-6">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>
    </section>
  );
}
