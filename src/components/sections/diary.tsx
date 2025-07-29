import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const diaryEntries = [
  {
    title: "The First Pitch",
    description: "The story of our very first presentation to investors. Nerves, passion, and a whole lot of coffee.",
    image: "https://placehold.co/600x400.png",
    hint: "startup pitch presentation",
  },
  {
    title: "Late Night Coding Sessions",
    description: "Building a startup means burning the midnight oil. A look behind the scenes of our development process.",
    image: "https://placehold.co/600x400.png",
    hint: "late night coding",
  },
  {
    title: "Team Celebration",
    description: "Celebrating a major milestone with the team that made it all happen. Small wins matter!",
    image: "https://placehold.co/600x400.png",
    hint: "team celebration office",
  },
];

export default function Diary() {
  return (
    <section id="diary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">The Hustle Journal</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Stories, notes, and behind-the-scenes moments from my startup life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {diaryEntries.map((entry, index) => (
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
