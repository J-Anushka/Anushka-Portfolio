
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const Typewriter = ({ text, delay, className }: { text: string; delay: number; className?: string }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};

const projectEntries = [
  {
    title: "Won My First Hackathon",
    description: "Participated in the NASA Space Apps Challenge 2023 which was a 35 hours hackathon and my team emerged as National Winners and were selected as Global Nominees.",
    image: "https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8aGFja2F0aG9ufGVufDB8fHx8MTc1Mzk3NzQxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "hackathon space",
  },
  {
    title: "Late Night Coding Sessions",
    description: "Building a startup means burning the midnight oil. A look behind the scenes of our development process.",
    image: "https://placehold.co/600x400.png",
    hint: "late night coding",
  },
  {
    title: "Team Celebration",
    description: "Celebrating a major milestone with the team that made it all happen. Small wins matter!",
    image: "https://placehold.co/600x400.png",
    hint: "team celebration office",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">What have I done?</h2>
          <p className="mt-4 text-2xl text-muted-foreground">
             <Typewriter text="I have...." delay={100} />
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projectEntries.map((entry, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={entry.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{entry.title}</CardTitle>
                <CardDescription className="mt-2">{entry.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
