
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import BackgroundLines from '@/components/layout/background-lines';

const Typewriter = ({ text, delay, className }: { text: string; delay: number; className?: string }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};


export default function OpeningPage() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 4000); // Adjusted for typewriter length

    const redirectTimeout = setTimeout(() => {
      router.push('/home');
    }, 5000); // Adjusted for typewriter length

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
                <span className="bg-gradient-to-r from-custom-deep-blue via-blue-900 via-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
                    <Typewriter text="Hey! Hey! Hey!" delay={150} />
                </span>
                <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
            </span>
        </div>
      </div>
    </div>
  );
}
