
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundLines = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; delay: number; size: number; }[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2, // 2 to 5 seconds
        delay: Math.random() * 5, // 0 to 5 seconds
        size: Math.random() * 3 + 1, // 1 to 4px
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-slate-400"
          style={{
            top: `${particle.y}vh`,
            left: `${particle.x}vw`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: '0 0 8px #fff, 0 0 12px #fff, 0 0 16px #a77bff',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLines;
