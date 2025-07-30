
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
          Namaste 🙏 I’m Anushka Jaiswal!
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl italic animate-fade-in-up animation-delay-500">
          Call me curious, call me chaotic but I just love trying everything! Life’s my playground, and I’m here to swing, slide, and maybe even invent a few new rides along the way.
        </p>
      </div>
    </div>
  );
}
