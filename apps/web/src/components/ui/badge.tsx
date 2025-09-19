import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80',
        className
      )}
      {...props}
    />
  );
}
