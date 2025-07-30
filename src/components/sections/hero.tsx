"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const phrases = [
  "I Build Games",
  "I Design Worlds",
  "I Lead Dreamers",
  "I Win NASA Challenges",
  "I Cook. I Dance. I Dream Bigger.",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === phrases.length) {
      setIndex(0); // Loop back to the start
      return;
    }

    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      // Pause at the end of the phrase
      setTimeout(() => {
        // Start deleting
      }, 1500); 
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center p-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="tech cityscape sunset"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
       <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative z-20 text-center px-4 animate-subtle-float">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl glow-shadow-accent">
          Welcome to Anushka's Universe
        </h1>
        <p className="mt-6 font-headline text-lg text-foreground/80 md:text-2xl min-h-[3rem]">
          {`${phrases[index].substring(0, subIndex)}`}
          <span className={`transition-opacity duration-300 text-primary ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="h-8 w-8 text-primary glow-shadow-primary" />
        </a>
      </div>
    </section>
  );
}
