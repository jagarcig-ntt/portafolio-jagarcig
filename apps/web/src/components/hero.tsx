'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/fixtures';

export function Hero() {
  const { name, summary, metrics, photoUrl, role } = profile;
  const emailLink = profile.links.find((link) => link.platform === 'email');

  return (
    <section
      id="home"
      className="relative flex flex-col gap-12 pt-24 md:flex-row md:items-center md:justify-between"
    >
      <div className="max-w-xl space-y-6">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          {role}
        </motion.span>
        <motion.h1
          className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {summary}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={emailLink?.href ?? '#contact'}>Contact</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="border-border text-foreground hover:bg-muted"
          >
            <a href="/assets/cv-jaime-garcia.pdf" download>
              Download CV
            </a>
          </Button>
        </motion.div>
        <motion.ul
          className="flex flex-wrap gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {metrics.map((metric) => (
            <li key={metric.label} className="flex flex-col">
              <span className="text-base font-semibold text-foreground">{metric.value}</span>
              <span>{metric.label}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-72 md:w-72"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cloud-sky via-transparent to-cloud-lavender opacity-70 blur-2xl" />
        <div className="relative rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_rgba(102,217,237,0.2))] p-[0.35rem] shadow-[0_25px_65px_-35px_rgba(8,12,40,0.8)]">
          <div className="overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={`${name} portrait`}
                width={288}
                height={288}
                className="h-72 w-72 object-cover"
                priority
              />
            ) : (
              <div className="flex h-72 w-72 items-center justify-center text-6xl font-semibold text-muted-foreground">
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
