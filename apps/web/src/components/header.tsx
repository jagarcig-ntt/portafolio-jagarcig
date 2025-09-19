'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { ThemeToggle } from '@/components/theme-provider';

const sections = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#talks', label: 'Talks' },
  { href: '#contact', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-30">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          <span className="h-2 w-2 rounded-full bg-accent-mint" />
          Jaime García
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className={clsx(
                'rounded-full px-3 py-2 transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint',
                pathname === '/' ? 'focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-deep' : null
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
