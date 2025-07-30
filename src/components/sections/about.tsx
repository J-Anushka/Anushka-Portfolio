import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Gamepad2, Mic, BrainCircuit, Rocket, Briefcase } from "lucide-react";

const timelineEvents = [
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Engineering Student & Innovator",
    description: "Started my journey exploring the intersection of technology and creativity, building foundational skills.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "E-Cell President",
    description: "Led the entrepreneurship cell, fostering innovation and guiding aspiring student entrepreneurs.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Startup Warrior",
    description: "Co-founded a startup, navigating the challenges and triumphs of building a business from the ground up.",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Podcaster",
    description: "Launched a podcast to share insights, stories, and conversations with visionaries across industries.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Dreamer & Builder",
    description: "Continuously exploring new frontiers in gaming, AI, and design, driven by a passion to create and dream bigger.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Who is Anushka?</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A storyteller, innovator, and leader on a mission to build extraordinary things.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <Avatar className="w-48 h-48 mb-4 border-4 border-primary/50 shadow-lg">
              <AvatarImage src="https://placehold.co/300x300.png" alt="Anushka" data-ai-hint="futuristic avatar" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="font-headline text-2xl font-bold">Anushka</h3>
            <p className="text-muted-foreground">Game Dev | Designer | Founder</p>
            <div className="flex gap-4 mt-4 text-primary">
              <span>🎮</span>
              <span>🎤</span>
              <span>🧠</span>
              <span>💥</span>
              <span>🌍</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-10 pl-8 relative">
                  <div className="absolute -left-3.5 top-1.5 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-md">
                    {event.icon}
                  </div>
                  <h4 className="font-headline text-xl font-bold">{event.title}</h4>
                  <p className="text-muted-foreground mt-1">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
