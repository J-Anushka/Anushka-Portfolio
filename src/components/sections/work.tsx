import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const projects = {
  games: [
    {
      title: "3D Game Inspired by Titan City",
      description: "Built with Unity, Loved by Hundreds",
      image: "https://placehold.co/600x400.png",
      hint: "3d game scene",
    },
    {
      title: "Project: Celestial",
      description: "A narrative-driven space exploration game.",
      image: "https://placehold.co/600x400.png",
      hint: "space exploration game",
    },
  ],
  graphics: [
    {
      title: "Motion Graphics Reel",
      description: "A compilation of dynamic motion design projects.",
      image: "https://placehold.co/600x400.png",
      hint: "motion graphics abstract",
    },
    {
      title: "Brand Identity for Tech Startup",
      description: "Complete visual identity and branding guidelines.",
      image: "https://placehold.co/600x400.png",
      hint: "branding moodboard",
    },
  ],
  tools: [
    {
      title: "AI-Powered Content Generator",
      description: "A web tool for creating marketing copy using AI.",
      image: "https://placehold.co/600x400.png",
      hint: "ai tool dashboard",
    },
  ],
  startups: [
    {
      title: "NASA Space App Winner",
      description: "Reimagining Human Survival on Mars",
      image: "https://placehold.co/600x400.png",
      hint: "mars colony illustration",
    },
  ],
  leadership: [
     {
      title: "E-Cell President Legacy",
      description: "Led initiatives impacting hundreds of students.",
      image: "https://placehold.co/600x400.png",
      hint: "leadership conference stage",
    },
  ],
  podcasts: [
     {
      title: "Voices & Vision Podcast",
      description: "Conversations with the brightest minds in tech and art.",
      image: "https://placehold.co/600x400.png",
      hint: "podcast setup microphone",
    },
  ]
};

const TABS_CONFIG = [
    { value: 'games', label: '🎮 Games' },
    { value: 'graphics', label: '🎨 Graphics & Motion' },
    { value: 'tools', label: '🌐 Websites & AI Tools' },
    { value: 'startups', label: '🚀 Startups' },
    { value: 'leadership', label: '🧑‍💼 Leadership' },
    { value: 'podcasts', label: '🎙️ Podcasts' },
]

export default function Work() {
  return (
    <section id="work">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Things I Bring to Life</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A collection of my projects across different domains.
          </p>
        </div>
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto">
            {TABS_CONFIG.map(tab => (
                 <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>

          {TABS_CONFIG.map(tab => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {(projects[tab.value as keyof typeof projects] || []).map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="p-0">
                                <div className="aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={project.hint}
                                />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                <CardDescription className="mt-2">{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
              </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
