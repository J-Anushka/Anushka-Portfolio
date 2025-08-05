
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const text = "I’m Anushka Jaiswal!".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[300px] w-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(23,48,122,0.5)_0%,rgba(0,0,0,0)_70%)] animate-zoom-in-out-pulse animation-delay-0" />
                <div className="absolute h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(23,48,122,0.4)_0%,rgba(0,0,0,0)_70%)] animate-zoom-in-out-pulse animation-delay-2000" />
                <div className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(23,48,122,0.3)_0%,rgba(0,0,0,0)_70%)] animate-zoom-in-out-pulse animation-delay-4000" />
            </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="absolute -inset-0.5">
            <svg width="100%" height="100%" fill="none" className="absolute inset-0">
              <defs>
                <path id="path" d="M12,2 Hcalc(100% - 12) A10,10 0 0 1 100% 12 Vcalc(100% - 12) A10,10 0 0 1 calc(100% - 12) 100% H12 A10,10 0 0 1 2 calc(100% - 12) V12 A10,10 0 0 1 12 2 Z" />
              </defs>
              <rect width="100%" height="100%" rx="12" ry="12" stroke="hsl(var(--foreground) / 0.3)" strokeWidth="2" />
              <motion.g>
                <motion.circle
                  r="4"
                  fill="hsl(var(--primary))"
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                   <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                  >
                    <mpath href="#path" />
                  </animateMotion>
                </motion.circle>
              </motion.g>
            </svg>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-transparent">
            <div className="flex flex-col gap-4 items-center text-center">
                <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                  Hey! Nice to see you here.
                </h1>
                <motion.h2
                  className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {text.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={child}
                      className={word === "Anushka" || word === "Jaiswal!" ? "text-primary inline-block mr-3" : "inline-block mr-3"}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
                <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed italic">
                  Call me curious, call me chaotic but I just love trying everything! Life’s my playground, and I’m here to swing, slide, and maybe even invent a few new rides along the way.
                </p>
            </div>
          </div>
        </div>
        <p className="w-full text-muted-foreground text-2xl md:text-4xl italic font-quintessential mt-24">
          Just a quick peek into the chaos and creativity I call life — not the whole ride, just the highlights.
        </p>
      </div>
    </section>
  );
}
