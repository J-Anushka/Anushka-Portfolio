import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Gamepad2, BrainCircuit, Mic, Paintbrush, Users } from "lucide-react";

const skills = [
  { icon: <Gamepad2 className="w-8 h-8" />, title: "Game Development", description: "Unity, C#, 3D Modeling" },
  { icon: <Code className="w-8 h-8" />, title: "Technologies", description: "React, Next.js, Node.js" },
  { icon: <BrainCircuit className="w-8 h-8" />, title: "AI & Machine Learning", description: "Python, TensorFlow, GenAI" },
  { icon: <Paintbrush className="w-8 h-8" />, title: "Design", description: "UI/UX, Figma, Adobe Suite" },
  { icon: <Users className="w-8 h-8" />, title: "Leadership", description: "Project Management, Team Building" },
  { icon: <Mic className="w-8 h-8" />, title: "Communication", description: "Public Speaking, Podcasting" },
];

export default function Resume() {
  return (
    <section id="resume" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="text-center p-6 flex flex-col items-center justify-center group bg-card transition-all duration-300 cursor-pointer hover:bg-accent"
            >
              <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <CardTitle className="font-headline text-lg">{skill.title}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
