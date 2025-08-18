
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
          <h1 className="font-quintessential text-4xl md:text-5xl lg:text-6xl text-primary mb-8 relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-ring bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
              The text to be displayed with the shiny effect.
            </span>
            <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl italic">
            This is a subtitle that gives more context to the shiny heading above.
          </p>
        </div>
      </div>
      <div className="relative z-10 pb-12">
        <Link href="/home" aria-label="Go to main content">
          <ArrowDown className="h-8 w-8 text-foreground/50" />
        </Link>
      </div>
    </div>
  );
}
