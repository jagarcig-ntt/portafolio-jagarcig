'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { ThemeToggle } from '@/components/theme-provider';

const sections = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Stack' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top of page (less than 10px)
      // Hide header when scrolled down
      setIsVisible(currentScrollY < 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(
      'sticky top-4 z-30 transition-transform duration-300 ease-in-out',
      isVisible ? 'translate-y-0' : '-translate-y-full'
    )}>
      <div className="flex items-center justify-between rounded-full border border-border bg-card/95 px-4 py-3 shadow-glass backdrop-blur">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Jaime García
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className={clsx(
                'rounded-full px-3 py-2 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                pathname === '/' ? 'focus-visible:ring-offset-2 focus-visible:ring-offset-background' : null
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
