"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Anushka
              <br />
              <span className="text-primary">Game Developer & Designer</span>
            </h1>
            <p className="max-w-[600px] mx-auto md:mx-0 text-muted-foreground md:text-xl/relaxed">
              I build immersive digital worlds and bring creative ideas to life through code and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-semibold">
                <Link href="#work">View My Work</Link>
              </Button>
               <Button asChild variant="outline" size="lg" className="font-semibold">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
             <div className="aspect-square rounded-full overflow-hidden w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto shadow-2xl border-8 border-card">
                 <Image
                    src="https://placehold.co/600x600.png"
                    alt="Anushka's Portrait"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    data-ai-hint="futuristic avatar"
                    priority
                />
             </div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
