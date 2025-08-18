
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const BackgroundLines = () => {
  const [lines, setLines] = useState<{ id: number; x: number; duration: number; delay: number; }[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = Array.from({ length: 15 }).map((_, i) => {
        return {
          id: i,
          x: Math.random() * 100,
          duration: Math.random() * 10 + 15, // 15 to 25 seconds
          delay: Math.random() * 15, // 0 to 15 seconds
        };
      });
      setLines(newLines);
    };
    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ y: '-100vh', x: `${line.x}vw` }}
            animate={{ y: '100vh' }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={cn(
              'absolute top-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0',
            )}
            style={{height: '100vh'}}
          >
          </motion.div>
        )
      )}
    </div>
  );
};

export default BackgroundLines;
