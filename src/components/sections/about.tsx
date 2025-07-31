
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
    title: "Built My Own Voice Assistant",
    description: "Created my first live project, a voice assistant named Nexa, who still lives in my laptop and responds like a true sidekick.",
    image: "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8dm9pY2UlMjBhc3Npc3RhbnR8ZW58MHx8fHwxNzUzOTc3OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "late night coding",
  },
  {
    title: "Served as Liaison Officer",
    description: "Represented Chandigarh University as the Liaison Officer during the Corporate Advisory Board Meeting.",
    image: "https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzUzOTgwNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "professional handshake",
  },
  {
    title: "Served as UNCTAD Committee Chair",
    description: "Served as the Chairperson for the UNCTAD committee during University’s MUN, where I moderated discussions on global trade, ensured procedural accuracy, and mentored delegates in diplomatic engagement.",
    image: "https://placehold.co/600x400.png",
    hint: "conference diplomacy",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
