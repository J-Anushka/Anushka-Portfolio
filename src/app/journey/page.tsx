// src/app/journey/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';

const years = [
  { year: 2021, size: 'w-32 h-32', delay: 0 },
  { year: 2022, size: 'w-48 h-48', delay: 1.5 },
  { year: 2023, size: 'w-24 h-24', delay: 3 },
  { year: 2024, size: 'w-40 h-40', delay: 0.5 },
  { year: 2025, size: 'w-28 h-28', delay: 2.5 },
  { year: 2026, size: 'w-36 h-36', delay: 4 },
];

export default function JourneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex-grow flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0">
          {years.map((item) => (
            <motion.div
              key={item.year}
              className={cn(
                'absolute rounded-full bg-gradient-to-br from-primary via-accent to-yellow-500 flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-2xl cursor-pointer',
                item.size
              )}
              initial={{ opacity: 0, scale: 0.5, top: '50%', left: '50%' }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [0, 100, -100, 50, -50, 0],
                y: [0, -50, 50, -100, 100, 0],
                transition: {
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                  delay: item.delay,
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
            >
              {item.year}
            </motion.div>
          ))}
        </div>
         <div className="text-center z-10 p-4">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Select a Year to Begin
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Click on a bubble to explore the journey.
          </p>
        </div>
      </div>
    </div>
  );
}
