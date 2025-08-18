
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Book } from "lucide-react";

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Science & Engineering",
        institution: "Chandigarh University",
        address: "Mohali, Punjab, India",
        years: "2022 - 2026",
        description: (
            <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                <li>Core Concepts: Data Structures, Algorithms, OOP, DBMS, OS</li>
                <li>Programming: C/C++, Java, Python, JavaScript, React</li>
                <li>Hardware: IoT, Digital Electronics, Embedded Systems</li>
                <li>Product Development: Prototyping, No-Code, UI/UX</li>
                <li>Skills: Problem-Solving, Product Thinking, Entrepreneurship</li>
            </ul>
        )
    },
    {
        degree: "Intermediate in Science",
        institution: "Arya Mahila Nagarmal Murarka Model School",
        address: "Varanasi, Uttar Pradesh, India",
        years: "2018 - 2022",
        description: (
            <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground">
                <li>Core Subjects: Physics, Chemistry, Mathematics</li>
                <li>Specialization: Computer Science</li>
                <li>Foundation for Engineering and Technology</li>
            </ul>
        )
    }
]

export default function Education() {
  return (
    <section id="education" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Education</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            My academic journey and qualifications.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8">
            {educationData.map((edu, index) => (
              <div key={index} className="group rounded-lg p-px bg-transparent hover:bg-gradient-to-r hover:from-accent hover:to-ring transition-all duration-300">
                <Card className="h-full bg-card">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg mt-1">
                      <Book className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-headline text-2xl">{edu.institution}</CardTitle>
                      {edu.address && <p className="text-muted-foreground">{edu.address}</p>}
                      <CardDescription className="text-lg mt-1 text-ring">{edu.degree}</CardDescription>
                      <p className="text-muted-foreground mt-1">{edu.years}</p>
                      <div className="mt-4">
                        {edu.description}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
