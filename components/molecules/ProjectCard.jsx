import React from 'react';
import Badge from '@/components/atoms/Badge';

export default function ProjectCard({ project }) {
  const isAi = project.category === 'Artificial Intelligence';
  const panelClass = isAi ? 'glass-panel-secondary' : 'glass-panel';
  const badgeColor = isAi ? 'green' : 'blue';

  return (
    <div className={`flex flex-col p-6 rounded-lg ${panelClass} relative overflow-hidden group`}>
      {project.image && (
        <div className="w-full h-48 rounded-md overflow-hidden mb-6 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
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
    </div>
  );
}
