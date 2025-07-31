
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link href="/home#contact">Contact Me</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
