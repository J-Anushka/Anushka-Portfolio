
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
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
    title: "Served as MUN Chairperson",
    description: "Served as the Chairperson for the UNCTAD committee during University’s MUN, where I moderated discussions on global trade, ensured procedural accuracy, and mentored delegates in diplomatic engagement.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib2FyZCUyMG1lZXRpbmd8ZW58MHx8fHwxNzUzOTgxNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "conference diplomacy",
  },
  {
    title: "Been an Anchor",
    description: "Anchored events by setting the tone, engaging the audience, and ensuring the energy stayed high throughout the program.",
    image: "https://images.unsplash.com/photo-1682258370582-377d685156bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxldmVudCUyMG1pY3xlbnwwfHx8fDE3NTM5ODE2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "public speaking event",
  },
  {
    title: "Hosted Podcasts ",
    description: "Engaged in insightful conversations with startup founders and distinguished university alumni, uncovering their journeys, lessons, and perspectives to inspire the next generation.",
    image: "https://images.unsplash.com/photo-1615458318132-1f151a3d18f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwb2RjYXN0c3xlbnwwfHx8fDE3NTM5ODE3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "podcast interview",
  },
  {
    title: "Co-Founded Entrepreneurship Club",
    description: "Laid the foundation for Chandigarh University’s official Entrepreneurship Club in 2024, with a vision to cultivate real-world startup ecosystems on campus.",
    image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8c3RhcnR1cHxlbnwwfHx8fDE3NTM5ODI4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "entrepreneurship campus",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


const ProjectCard = ({ entry }: { entry: typeof projectEntries[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [-10, 10]);
  const rotateY = useTransform(x, [-150, 150], [10, -10]);
  
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    x.set(event.clientX - (left + width / 2));
    y.set(event.clientY - (top + height / 2));
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        perspective: 1000
      }}
      className="h-full"
    >
      <div className="group rounded-lg p-px bg-transparent hover:bg-primary transition-all duration-300 h-full">
        <Card className="overflow-hidden h-full flex flex-col" style={{ transformStyle: 'preserve-3d' }}>
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              <Image
                src={entry.image}
                alt={entry.title}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={entry.hint}
                style={{ transform: 'translateZ(20px)' }}
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex flex-col flex-grow">
            <CardTitle className="font-headline text-xl">{entry.title}</CardTitle>
            <CardDescription className="mt-2 flex-grow">{entry.description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

const AnimatedTitle = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: isInView ? "blur(0px)" : "blur(10px)", opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl"
    >
      {title}
    </motion.h2>
  );
};


export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <AnimatedTitle title="What have I done?" />
          <p className="mt-4 text-2xl text-muted-foreground">
             <Typewriter text="I have...." delay={100} />
          </p>
        </div>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectEntries.map((entry, index) => (
            <ProjectCard key={index} entry={entry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
