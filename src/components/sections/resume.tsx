
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Gamepad2, BrainCircuit, Mic, Paintbrush, Users, Palette, Camera } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const skills = [
  { icon: <Gamepad2 className="w-8 h-8" />, title: "Game Development", description: "Unity, C#, 3D Modeling" },
  { icon: <Code className="w-8 h-8" />, title: "Technologies", description: "React, Next.js, Node.js" },
  { icon: <BrainCircuit className="w-8 h-8" />, title: "AI & Machine Learning", description: "Python, TensorFlow, GenAI" },
  { icon: <Paintbrush className="w-8 h-8" />, title: "Graphic Designs", description: "UI/UX, Figma, Adobe Suite" },
  { icon: <Palette className="w-8 h-8" />, title: "Visual Art", description: "Sketching, Painting, Digital Art" },
  { icon: <Users className="w-8 h-8" />, title: "Leadership", description: "Project Management, Team Building" },
  { icon: <Mic className="w-8 h-8" />, title: "Communication", description: "Public Speaking, Podcasting" },
  { icon: <Camera className="w-8 h-8" />, title: "Photography", description: "Capturing moments, telling stories" },
];


export default function Resume() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="resume" className="bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {skills.concat(skills).map((skill, index) => ( // Duplicate for seamless loop
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="p-1 group">
                   <div
                    className="rounded-lg bg-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-ring p-[2px] transition-all duration-300"
                  >
                    <Card
                      className="text-center p-6 flex flex-col items-center justify-center bg-card transition-all duration-300 cursor-pointer h-40"
                    >
                      <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <CardTitle className="font-headline text-lg transition-colors group-hover:text-primary">{skill.title}</CardTitle>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
