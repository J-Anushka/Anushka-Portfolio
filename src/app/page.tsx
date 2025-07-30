
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

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
        'flex h-screen w-full items-center justify-center bg-background transition-opacity duration-1000 ease-in-out',
        isFading ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="font-quintessential text-4xl md:text-5xl lg:text-6xl text-primary mb-8 animate-fade-in-up">
          No map. No manual. Just raw instinct, clear vision, and a fire that never fades.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl italic animate-fade-in-up animation-delay-500">
          Welcome to the mind behind the madness and let me tell you that this is more than a portfolio. It’s a glimpse into everything I build when no one’s watching.
        </p>
      </div>
    </div>
  );
}
