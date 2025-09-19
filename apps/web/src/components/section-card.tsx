'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  className?: string;
}

export function SectionCard({ title, description, icon, href, className }: SectionCardProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        'group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-glass backdrop-blur transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-deep',
        className
      )}
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-mint">
        {icon}
      </span>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center text-sm text-accent-mint/90">
        Explorar
        <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </motion.a>
  );
}
