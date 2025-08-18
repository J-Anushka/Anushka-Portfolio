
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const text = "I’m Anushka Jaiswal!".split(" ");

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-foreground/30">
            <div className="flex flex-col gap-4 items-center text-center">
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground relative inline-block">
                  <span className="block text-2xl mb-2">Howdy!</span>
                  <span className="text-foreground">I'm </span>
                  <span className="bg-gradient-to-r from-blue-900 via-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
                    Anushka Jaiswal!
                  </span>
                  <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
                </h1>
                <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed italic">
                  Call me curious, call me chaotic but I just love trying everything! Life’s my playground, and I’m here to swing, slide, and maybe even invent a few new rides along the way.
                </p>
            </div>
          </div>
        </div>
        <p className="w-full text-foreground text-2xl md:text-4xl italic font-quintessential mt-24">
          Just a quick peek into the chaos and creativity I call life — not the whole ride, just the highlights.
        </p>
      </div>
    </section>
  );
}
