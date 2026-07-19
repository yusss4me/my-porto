'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

export default function HeroSection() {
  const { profile, techStack } = portfolioData;

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center py-16">
      <div className="inline-flex mb-6">
        <Badge variant="green">{profile.status}</Badge>
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-geist text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
      >
        {profile.name}
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="font-geist text-2xl md:text-4xl font-semibold text-[#adc6ff] mb-6 max-w-3xl leading-snug"
      >
        {profile.title}
      </motion.h2>
      
      <p className="font-inter text-[#c2c6d6] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
        {profile.bio}
      </p>

      {/* Tech Stack Badge list */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-3 max-w-2xl mb-12"
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <Badge variant={tech.category === 'AI/ML' ? 'green' : 'blue'}>
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-wrap gap-4">
        <Button href="#projects" variant="blue" size="lg">
          View Projects
        </Button>
        <Button href="#contact" variant="outline" size="lg">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
