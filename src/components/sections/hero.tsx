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
          <div className="flex flex-col gap-4 items-start">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Game Developer & Designer
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Anushka
            </h1>
            <p className="max-w-md text-muted-foreground md:text-xl/relaxed">
             I build immersive digital worlds and bring creative ideas to life through code and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/home#work">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link href="/home#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-md mx-auto">
             <Image
                src="https://placehold.co/600x600.png"
                alt="Hero image"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                data-ai-hint="futuristic avatar"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
