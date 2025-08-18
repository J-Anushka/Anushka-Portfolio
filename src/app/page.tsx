
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import BackgroundLines from '@/components/layout/background-lines';

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
        'flex h-screen w-full flex-col items-center justify-center bg-background transition-opacity duration-1000 ease-in-out relative',
        isFading ? 'opacity-0' : 'opacity-100'
      )}
    >
      <BackgroundLines />
      <div className="relative z-10 flex flex-grow items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="font-quintessential text-4xl md:text-5xl lg:text-6xl text-primary mb-8 animate-fade-in-up">
            No map. No manual. Just raw instinct, clear vision, and a fire that never fades.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl italic animate-fade-in-up animation-delay-500">
            Welcome to the mind behind the madness and let me tell you that this is more than a portfolio. It’s a glimpse into everything I build when no one’s watching.
          </p>
        </div>
      </div>
      <div className="relative z-10 pb-12">
        <Link href="/home" aria-label="Go to main content">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
