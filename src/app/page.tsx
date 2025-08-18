
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import BackgroundLines from '@/components/layout/background-lines';
import { AnimatePresence, motion } from 'framer-motion';

const words = ["Hey!", "Hola!", "Hello!"];

const TextCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 w-48 flex items-center justify-center">
      <AnimatePresence>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute bg-gradient-to-r from-custom-deep-blue via-blue-900 via-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function OpeningPage() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 4000); 

    const redirectTimeout = setTimeout(() => {
      router.push('/home');
    }, 5000);

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
        <div className="font-quintessential text-5xl md:text-7xl font-bold">
            <span className="relative inline-block">
                <TextCarousel />
                <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
            </span>
        </div>
      </div>
    </div>
  );
}
