'use client';

import React from 'react';
import portfolioData from '@/data/portfolioData.json';
import ProjectCard from '@/components/molecules/ProjectCard';
import Badge from '@/components/atoms/Badge';

export default function PortfolioPage() {
  const { profile, techStack, projects, lab } = portfolioData;

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-32 pb-24">
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex flex-col justify-center py-16">
        <div className="inline-flex mb-6">
          <Badge variant="green">{profile.status}</Badge>
        </div>
        
        <h1 className="font-geist text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
          {profile.name}
        </h1>
        
        <h2 className="font-geist text-2xl md:text-4xl font-semibold text-[#adc6ff] mb-6 max-w-3xl leading-snug">
          {profile.title}
        </h2>
        
        <p className="font-inter text-[#c2c6d6] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          {profile.bio}
        </p>

        {/* Tech Stack Badge list */}
        <div className="flex flex-wrap gap-3 max-w-2xl mb-12">
          {techStack.map((tech) => (
            <Badge key={tech.name} variant={tech.category === 'AI/ML' ? 'green' : 'blue'}>
              {tech.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#3b82f6] text-white hover:bg-blue-600 rounded font-mono text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 hover:border-white/20 text-[#dce1fb] rounded font-mono text-sm tracking-wide transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase">Selected Work</span>
            <h2 className="font-geist text-3xl md:text-5xl font-bold text-white mt-2">
              Engineering Intelligent Interfaces.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#c2c6d6]">
            01 — 04
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Lab Section */}
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
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
              alt="Lab Experimentation"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-white/5 text-center">
        <h2 className="font-geist text-4xl md:text-6xl font-extrabold text-white mb-6">
          Let&apos;s build the <span className="italic text-[#3b82f6]">future</span> together.
        </h2>
        <p className="font-inter text-[#c2c6d6] max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Whether you have a groundbreaking AI idea or need a high-performance web solution, I&apos;m ready to engineer it.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="max-w-lg mx-auto text-left space-y-6 mb-12">
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
          <button type="submit" className="w-full py-3 bg-[#10b981] hover:bg-emerald-600 text-white font-mono text-sm tracking-wider rounded transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            Send Transmission
          </button>
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
    </div>
  );
}
