
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Science & Engineering",
        institution: "Chandigarh University",
        years: "2022 - 2026",
        description: "Currently exploring the depths of computer science, with a keen interest in artificial intelligence, software development, and human-computer interaction. Actively involved in building projects that solve real-world problems."
    },
    {
        degree: "Intermediate in Science",
        institution: "Arya Mahila Nagarmal Murarka Model School",
        years: "2018 - 2022",
        description: "Completed my intermediate studies with a specialization in Physics, Chemistry, Maths, and Computer Science, laying the groundwork for my journey into technology and engineering."
    }
]

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
        <div className="max-w-3xl mx-auto grid gap-8">
            {educationData.map((edu, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg mt-1">
                    <Book className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-headline text-2xl">{edu.institution}</CardTitle>
                    <CardDescription className="text-lg">{edu.degree}</CardDescription>
                     <p className="text-muted-foreground mt-1">{edu.years}</p>
                     <p className="mt-4">
                       {edu.description}
                     </p>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
