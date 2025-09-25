import Link from 'next/link';
import { profile } from '@/lib/fixtures';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60" id="contact">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Banking modernization with responsible AI.
        </p>
        <div className="flex flex-wrap gap-4">
          {profile.links.map((link) => (
            <a
              key={link.platform + link.href}
              href={link.href}
              className="transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint focus-visible:ring-offset-2 focus-visible:ring-offset-cloud-deep"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
