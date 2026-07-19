'use client';

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData.json';
import ProjectCard from '@/components/molecules/ProjectCard';

export default function ProjectGrid() {
  const { projects } = portfolioData;

  return (
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

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
