'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedBackground() {
  const shouldReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (shouldReduce) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,217,237,0.25),transparent_60%),_linear-gradient(135deg,_#0B1026,_#1B1F3B_50%,_#06070f)]"
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute -left-1/3 top-1/4 h-[50vw] w-[50vw] rounded-full bg-cloud-sky/40 blur-[120px]"
        animate={{ x: ['0%', '10%', '-5%'], y: ['0%', '15%', '5%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-[45vw] w-[45vw] rounded-full bg-cloud-lavender/30 blur-[160px]"
        animate={{ x: ['0%', '-12%', '8%'], y: ['0%', '-10%', '12%'] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror' }}
      />
    </motion.div>
  );
}
