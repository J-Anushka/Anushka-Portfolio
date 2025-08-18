
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
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                  Hey! Nice to see you here.
                </h1>
                <h2
                  className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                >
                  {text.map((word, index) => (
                    <span
                      key={index}
                      className={word === "Anushka" || word === "Jaiswal!" ? "text-custom-orange inline-block mr-3" : "inline-block mr-3"}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
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
