
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Database, Wind, Braces, Component, GitBranch, PenTool, LayoutTemplate, Server } from "lucide-react";
import Transition from "@/components/layout/transition";

const techStack = [
  { icon: <Code className="w-12 h-12" />, title: "Languages", description: "Python, JavaScript, C++, Java" },
  { icon: <Component className="w-12 h-12" />, title: "Frontend", description: "React, Next.js, Tailwind CSS" },
  { icon: <Server className="w-12 h-12" />, title: "Backend", description: "Node.js, Express, Firebase" },
  { icon: <Database className="w-12 h-12" />, title: "Databases", description: "MongoDB, MySQL, Firestore" },
  { icon: <Bot className="w-12 h-12" />, title: "AI/ML", description: "Genkit, TensorFlow, Scikit-learn" },
  { icon: <GitBranch className="w-12 h-12" />, title: "DevOps", description: "Git, Docker, GitHub Actions" },
  { icon: <PenTool className="w-12 h-12" />, title: "Design", description: "Figma, Adobe XD, Illustrator" },
  { icon: <LayoutTemplate className="w-12 h-12" />, title: "CMS", description: "WordPress, Webflow" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="bg-background">
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
                My Tech Stack
                </span>
                <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
            </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            What I code and build with.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <Transition key={index}>
              <div className="group">
                <div className="rounded-lg bg-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-ring p-[2px] transition-all duration-300 h-full">
                  <Card className="text-center p-6 flex flex-col items-center justify-center bg-card transition-all duration-300 cursor-pointer h-56">
                    <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <CardTitle className="font-headline text-lg transition-colors group-hover:text-primary">{tech.title}</CardTitle>
                    <p className="text-muted-foreground mt-2">{tech.description}</p>
                  </Card>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
}
