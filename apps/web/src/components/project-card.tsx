'use client';

import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, summary, highlights, tags, repoUrl, demoUrl, coverImage } = project;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {coverImage && (
        <div className="relative mb-4 h-48 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={coverImage}
            alt={`${name} cover`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="flex gap-2">
          {repoUrl && (
            <a
              href={repoUrl}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
              aria-label={`Repositorio de ${name}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
              aria-label={`Demo de ${name}`}
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </header>
      <p className="mt-3 text-sm text-white/70">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {highlights.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent-mint" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} className="bg-white/10 text-white/80">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}
