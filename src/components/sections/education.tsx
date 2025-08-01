
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Science & Engineering",
        institution: "Chandigarh University",
        years: "2022 - 2026",
        description: (
            <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                <li>Gained conceptual knowledge of Data Structures, Algorithms, OOP, DBMS, and Operating Systems to understand how systems function.</li>
                <li>Learned programming languages like C, C++, Java, Python, JavaScript, React, focusing more on logic and structure than deep coding.</li>
                <li>Studied IoT, Digital Electronics, Embedded Systems, and CAD, integrating hardware and software understanding.</li>
                <li>Explored emerging technologies and tools for building user-focused prototypes using no-code and design platforms.</li>
                <li>Applied interdisciplinary knowledge from mechanical and electrical domains to create innovative, real-world tech solutions.</li>
                <li>Strengthened problem-solving, collaboration, and product-thinking through hands-on projects, hackathons, and entrepreneurship initiatives.</li>
            </ul>
        )
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
                     <div className="mt-4">
                       {edu.description}
                     </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
