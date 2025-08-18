
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Paintbrush, Users, Plane, Lightbulb, ChefHat, Camera, Music, Tv } from "lucide-react";
import Transition from "@/components/layout/transition";

const hobbies = [
  { icon: <BookOpen className="w-12 h-12" />, title: "Reading Biographies" },
  { icon: <Users className="w-12 h-12" />, title: "Connecting with People" },
  { icon: <Paintbrush className="w-12 h-12" />, title: "Art & Painting" },
  { icon: <Music className="w-12 h-12" />, title: "Dancing" },
  { icon: <Plane className="w-12 h-12" />, title: "Traveling" },
  { icon: <Lightbulb className="w-12 h-12" />, title: "Exploring Ideas" },
  { icon: <ChefHat className="w-12 h-12" />, title: "Cooking" },
  { icon: <Camera className="w-12 h-12" />, title: "Photography" },
  { icon: <Music className="w-12 h-12" />, title: "Listening to Music" },
  { icon: <Tv className="w-12 h-12" />, title: "Binge Watching" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-background">
      <div className="container mx-auto py-16 md:py-24 lg:py-32">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
                Hobbies & Interests
                </span>
                <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
            </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            When I'm not coding or building, you can find me exploring my other passions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {hobbies.map((hobby, index) => (
            <Transition key={index}>
              <div className="group">
                <div className="rounded-lg bg-transparent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-ring p-[2px] transition-all duration-300">
                  <Card className="text-center p-6 flex flex-col items-center justify-center bg-card transition-all duration-300 cursor-pointer h-48">
                    <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                      {hobby.icon}
                    </div>
                    <CardTitle className="font-headline text-lg transition-colors group-hover:text-primary">{hobby.title}</CardTitle>
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
