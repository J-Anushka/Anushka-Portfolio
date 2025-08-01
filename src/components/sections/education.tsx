import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Education</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            My academic journey and qualifications.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-lg">
                <Book className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Chandigarh University</CardTitle>
                <CardDescription className="text-lg">Bachelor of Engineering in Computer Science</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">2022 - 2026</p>
              <p className="mt-4">
                Currently exploring the depths of computer science, with a keen interest in artificial intelligence, software development, and human-computer interaction. Actively involved in building projects that solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
