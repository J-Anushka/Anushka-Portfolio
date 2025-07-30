import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const projects = {
  all: [
    {
      title: "3D Game Inspired by Titan City",
      description: "Built with Unity, Loved by Hundreds",
      image: "https://placehold.co/600x400.png",
      hint: "3d game scene",
    },
    {
      title: "AI-Powered Content Generator",
      description: "A web tool for creating marketing copy using AI.",
      image: "https://placehold.co/600x400.png",
      hint: "ai tool dashboard",
    },
    {
      title: "NASA Space App Winner",
      description: "Reimagining Human Survival on Mars",
      image: "https://placehold.co/600x400.png",
      hint: "mars colony illustration",
    },
    {
      title: "Brand Identity for Tech Startup",
      description: "Complete visual identity and branding guidelines.",
      image: "https://placehold.co/600x400.png",
      hint: "branding moodboard",
    },
    {
      title: "E-Cell President Legacy",
      description: "Led initiatives impacting hundreds of students.",
      image: "https://placehold.co/600x400.png",
      hint: "leadership conference stage",
    },
    {
      title: "Voices & Vision Podcast",
      description: "Conversations with the brightest minds in tech and art.",
      image: "https://placehold.co/600x400.png",
      hint: "podcast setup microphone",
    },
  ],
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
  tools: [
    {
      title: "AI-Powered Content Generator",
      description: "A web tool for creating marketing copy using AI.",
      image: "https://placehold.co/600x400.png",
      hint: "ai tool dashboard",
    },
  ],
};

export default function Work() {
  return (
    <section id="work" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Creations</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A selection of my favorite projects.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="tools">Web Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.all.map((project, index) => (
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

          <TabsContent value="games">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.games.map((project, index) => (
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

          <TabsContent value="tools">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.tools.map((project, index) => (
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
        </Tabs>
      </div>
    </section>
  );
}
