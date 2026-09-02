'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { footerData } from '@/data/footerData';
import Button from '@/components/atoms/Button';
import TypewriterText from '@/components/atoms/TypewriterText';
import { Globe, Share2, Mail, Send, ArrowUpRight, MessageSquareCode } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(footerData.form.successAlert);
  };

  const isContactPage = pathname === '/contact';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Globe className="w-5 h-5" />;
      case 'Linkedin':
        return <Share2 className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      case 'Twitter':
        return <Send className="w-5 h-5" />;
      default:
        return <ArrowUpRight className="w-5 h-5" />;
    }
  };

  return (
    <footer className="py-16 md:py-24 border-t border-white/5">
      {!isContactPage && (
        <div id="contact" className="mb-12">
          {/* Header Contact */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-geist text-2xl md:text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Let&apos;s build the <span className="italic text-[#3b82f6]">{footerData.headlineHighlight}</span> together.
            </h2>
            <p className="font-inter text-[#c2c6d6] text-sm md:text-base leading-relaxed">
              {footerData.subtext}
            </p>
          </div>

          {/* Contact Layout Grid: Social Media Cards & Quick Message Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Social Media & Platforms Grid (Left/Top) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
                // DIRECT_CHANNELS & SOCIALS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {footerData.socialPlatforms?.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-5 rounded-2xl bg-[#0c1324]/70 border border-white/5 backdrop-blur-md transition-all duration-300 ${platform.color} hover:bg-[#111a30] hover:scale-[1.02] flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                        {getIcon(platform.icon)}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <div>
                      <h4 className="font-geist text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {platform.name}
                      </h4>
                      <p className="font-mono text-xs text-cyan-400/80 mb-2">{platform.handle}</p>
                      <p className="font-inter text-xs text-[#8e94ad] leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Transmission Form (Right) */}
            <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-[#0c1324]/80 border border-white/10 backdrop-blur-md shadow-2xl">
              <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-6">
                <TypewriterText text="TRANSMIT_SIGNAL //" />
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                    {footerData.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full glass-input p-3 text-white font-inter text-sm rounded-xl"
                    placeholder={footerData.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                    {footerData.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full glass-input p-3 text-white font-inter text-sm rounded-xl"
                    placeholder={footerData.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-[#c2c6d6] uppercase tracking-wider mb-2">
                    {footerData.form.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full glass-input p-3 text-white font-inter text-sm resize-none rounded-xl"
                    placeholder={footerData.form.messagePlaceholder}
                  />
                </div>
                <Button type="submit" variant="green" className="w-full py-3.5 justify-center font-mono text-xs font-bold tracking-wider">
                  {footerData.form.submitButton}
                </Button>
              </form>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
}


