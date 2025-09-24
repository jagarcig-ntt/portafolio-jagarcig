'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return (
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white ${className ?? ''}`}
      />
    );
  }

  const isDark = resolvedTheme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-accent-mint hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint ${className ?? ''}`}
      aria-label="Cambiar tema"
    >
      <span aria-hidden>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}
