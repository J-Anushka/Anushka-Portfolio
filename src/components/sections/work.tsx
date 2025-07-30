import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

const projects = {
  games: [
    {
      title: "3D Game Inspired by Titan City",
      description: "Built with Unity, Loved by Hundreds",
      image: "https://placehold.co/600x600.png",
      hint: "3d game scene",
    },
    {
      title: "Project: Celestial",
      description: "A narrative-driven space exploration game.",
      image: "https://placehold.co/600x600.png",
      hint: "space exploration game",
    },
  ],
  graphics: [
    {
      title: "Motion Graphics Reel",
      description: "A compilation of dynamic motion design projects.",
      image: "https://placehold.co/600x600.png",
      hint: "motion graphics abstract",
    },
    {
      title: "Brand Identity for Tech Startup",
      description: "Complete visual identity and branding guidelines.",
      image: "https://placehold.co/600x600.png",
      hint: "branding moodboard",
    },
  ],
  tools: [
    {
      title: "AI-Powered Content Generator",
      description: "A web tool for creating marketing copy using AI.",
      image: "https://placehold.co/600x600.png",
      hint: "ai tool dashboard",
    },
  ],
  startups: [
    {
      title: "NASA Space App Winner",
      description: "Reimagining Human Survival on Mars",
      image: "https://placehold.co/600x600.png",
      hint: "mars colony illustration",
    },
  ],
  leadership: [
     {
      title: "E-Cell President Legacy",
      description: "Led initiatives impacting hundreds of students.",
      image: "https://placehold.co/600x600.png",
      hint: "leadership conference stage",
    },
  ],
  podcasts: [
     {
      title: "Voices & Vision Podcast",
      description: "Conversations with the brightest minds in tech and art.",
      image: "https://placehold.co/600x600.png",
      hint: "podcast setup microphone",
    },
  ]
};

const allProjects = Object.values(projects).flat();

export default function Work() {
  return (
    <section id="work-grid">
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {allProjects.map((project, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={project.hint}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-bold">1,234</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-bold">56</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}