'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import { heroData } from '@/data/heroData';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import TypewriterText from '@/components/atoms/TypewriterText';

export default function HeroSection() {
  const { profile, techStack } = portfolioData;

  return (
    <section id="home" className="py-16 md:py-24 flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-geist text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 max-w-4xl leading-[1.1]"
      >
        {profile.name}
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="font-geist text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#adc6ff] max-w-3xl leading-snug mb-4 min-h-[3.25rem] sm:min-h-[4rem] flex items-center"
      >
        <TypewriterText
          strings={[
            'Full-Stack Web Systems',
            'Machine Learning & AI Models',
            'Next.js & Django Ecosystems',
            'Scalable Cloud Infrastructure',
          ]}
        />
      </motion.h2>
      
      <p className="font-inter text-[#c2c6d6] text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
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
        className="flex flex-wrap gap-2.5 max-w-2xl mb-10"
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
            <Badge variant={tech.category === 'frontend' ? 'blue' : 'green'}>
              {tech.name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex flex-wrap gap-4">
        <Button href="#projects" variant="blue" size="lg">
          {heroData.viewProjectsButton}
        </Button>
        <Button href="#contact" variant="outline" size="lg">
          {heroData.getInTouchButton}
        </Button>
      </div>
    </section>
  );
}

