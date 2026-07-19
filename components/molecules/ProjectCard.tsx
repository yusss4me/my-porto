'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from '@/components/atoms/Badge';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isAi = project.category === 'Artificial Intelligence';
  const panelClass = isAi ? 'glass-panel-secondary' : 'glass-panel';
  const badgeColor = isAi ? 'green' : 'blue';

  // Accent hover styles according to DESIGN.md
  // Mint Emerald Green (#10b981) for AI projects, Electric Neon Blue (#3b82f6) for other projects
  const accentBorderColor = isAi ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)';
  const accentGlow = isAi 
    ? '0 15px 30px -10px rgba(16, 185, 129, 0.2), 0 0 15px rgba(16, 185, 129, 0.2)'
    : '0 15px 30px -10px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.2)';

  return (
    <motion.div
      whileHover={{
        y: -4,
        borderColor: accentBorderColor,
        boxShadow: accentGlow,
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ transition: 'none' }}
      className={`flex flex-col p-6 rounded-lg ${panelClass} relative overflow-hidden group`}
    >
      {project.image && (
        <div className="w-full h-48 rounded-md overflow-hidden mb-6 relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute top-3 right-3 z-10">
            <Badge variant={badgeColor}>{project.category}</Badge>
          </div>
        </div>
      )}
      <h3 className="font-geist text-2xl font-bold tracking-tight text-white mb-2">
        {project.title}
      </h3>
      <p className="font-inter text-[#c2c6d6] text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <Badge key={tag} variant={badgeColor}>
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}
