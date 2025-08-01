import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    title: "Project One",
    description: "A brief description of the first project, highlighting the technologies used and its purpose.",
    image: "https://placehold.co/600x400.png",
    hint: "tech project",
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of the second project, highlighting the technologies used and its purpose.",
    image: "https://placehold.co/600x400.png",
    hint: "code screen",
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of the third project, highlighting the technologies used and its purpose.",
    image: "https://placehold.co/600x400.png",
    hint: "web design",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Here's a selection of my work. Feel free to explore.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
             <div key={index} className="group rounded-lg p-px bg-transparent hover:bg-gradient-to-br from-accent via-primary to-ring transition-all duration-300">
                <Card className="h-full overflow-hidden flex flex-col">
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
                  <CardContent className="p-6 flex-grow">
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="h-5 w-5" />
                      </Link>
                    </div>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
