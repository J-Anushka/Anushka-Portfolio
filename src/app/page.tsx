
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import BackgroundLines from '@/components/layout/background-lines';
import { motion } from 'framer-motion';

const UFO = () => (
  <motion.div
    initial={{ x: '-100vw', y: '20vh', rotate: -15 }}
    animate={{ 
      x: '100vw', 
      y: ['20vh', '25vh', '20vh'],
      rotate: [0, 5, -5, 0],
    }}
    transition={{ 
      x: { duration: 7, ease: 'linear' },
      y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    }}
    className="z-20"
  >
    <div className="relative w-48 h-24">
      {/* UFO Dome */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-gray-400/50 backdrop-blur-sm rounded-t-full border-t-2 border-b-2 border-gray-300/70" />
      {/* UFO Body */}
      <div className="absolute top-1/2 left-0 w-full h-12 bg-gray-500/80 backdrop-blur-md rounded-full shadow-2xl shadow-cyan-500/50" />
      {/* UFO Lights */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 flex gap-4">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
      {/* Tractor Beam */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
        border-l-[20px] border-l-transparent
        border-r-[20px] border-r-transparent
        border-t-[40px] border-t-cyan-400/30 opacity-70 animate-pulse"
      />
    </div>
  </motion.div>
);


export default function OpeningPage() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 7000);

    const redirectTimeout = setTimeout(() => {
      router.push('/home');
    }, 8000); 

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div
      className={cn(
        'flex h-screen w-full flex-col items-center justify-center bg-background transition-opacity duration-1000 ease-in-out relative overflow-hidden',
        isFading ? 'opacity-0' : 'opacity-100'
      )}
    >
      <BackgroundLines />
      <div className="relative z-10 flex flex-grow items-center justify-center w-full">
        <UFO />
      </div>
    </div>
  );
}
