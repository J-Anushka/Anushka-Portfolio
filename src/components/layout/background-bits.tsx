"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const BackgroundBits = () => {
  const [bits, setBits] = useState<{ id: number; x: number; y: number; duration: number; delay: number; size: number; content: string }[]>([]);

  useEffect(() => {
    const generateBits = () => {
      const newBits = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100 + 100, // Start below the viewport
        duration: Math.random() * 10 + 10, // 10 to 20 seconds
        delay: Math.random() * 10, // 0 to 10 seconds
        size: Math.random() * 2 + 1, // 1 to 3
        content: Math.random() > 0.5 ? '0' : '1',
      }));
      setBits(newBits);
    };
    generateBits();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {bits.map((bit) => (
        <motion.span
          key={bit.id}
          initial={{ y: `${bit.y}vh`, x: `${bit.x}vw` }}
          animate={{ y: '-20vh' }}
          transition={{
            duration: bit.duration,
            delay: bit.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={cn(
            'absolute text-primary/20',
            {
              'text-xs': bit.size < 1.5,
              'text-sm': bit.size >= 1.5 && bit.size < 2.5,
              'text-base': bit.size >= 2.5,
            }
          )}
        >
          {bit.content}
        </motion.span>
      ))}
    </div>
  );
};

export default BackgroundBits;
