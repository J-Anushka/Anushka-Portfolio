
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const codeSymbols = ['0', '1', '{}', '=>', '</>', '&&', '||', '()', '[]', ';', ':'];

const BackgroundBits = () => {
  const [bits, setBits] = useState<{ id: number; x: number; y: number; duration: number; delay: number; size: number; content: string; type: 'bit' | 'shimmer' }[]>([]);

  useEffect(() => {
    const generateBits = () => {
      const newBits = Array.from({ length: 70 }).map((_, i) => {
        const type = Math.random() > 0.3 ? 'bit' : 'shimmer';
        const content = type === 'bit' ? codeSymbols[Math.floor(Math.random() * codeSymbols.length)] : '•';
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 10 + 10, // 10 to 20 seconds
          delay: Math.random() * 10, // 0 to 10 seconds
          size: Math.random() * 2 + 1, // 1 to 3
          content: content,
          type: type,
        };
      });
      setBits(newBits);
    };
    generateBits();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {bits.map((bit) => {
        if (bit.type === 'shimmer') {
          return (
             <motion.span
              key={bit.id}
              initial={{ 
                x: `${bit.x}vw`, 
                y: `${bit.y}vh`, 
                opacity: 0, 
                scale: bit.size / 2
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: bit.duration / 4,
                delay: bit.delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: 'easeInOut',
              }}
              className="absolute text-primary/90"
            >
              {bit.content}
            </motion.span>
          )
        }
        return (
          <motion.span
            key={bit.id}
            initial={{ y: `${bit.y + 100}vh`, x: `${bit.x}vw` }}
            animate={{ y: '-20vh' }}
            transition={{
              duration: bit.duration,
              delay: bit.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={cn(
              'absolute font-code text-primary',
              {
                'text-xs': bit.size < 1.5,
                'text-sm': bit.size >= 1.5 && bit.size < 2.5,
                'text-base': bit.size >= 2.5,
              }
            )}
          >
            {bit.content}
          </motion.span>
        )
      })}
    </div>
  );
};

export default BackgroundBits;
