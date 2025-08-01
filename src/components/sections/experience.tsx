
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        role: "Product Developer & Branding Strategist",
        company: "Innovix Pvt Ltd",
        address: "Mohali, Punjab, India",
        years: "Oct 2023 - Present",
    },
    {
        role: "Secretary",
        company: "Chandigarh University Entrepreneurship Club",
        address: "Mohali, Punjab, India",
        years: "Jan 2025 - Apr 2025",
    },
    {
        role: "Co-founder & Joint Secretary",
        company: "Chandigarh University Entrepreneurship Club",
        address: "Mohali, Punjab, India",
        years: "Jul 2024 - Jan 2025",
    },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            My professional journey.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8">
            {experienceData.map((exp, index) => (
              <div key={index} className="group rounded-lg p-px bg-transparent hover:bg-primary transition-all duration-300">
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg mt-1">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-headline text-2xl">{exp.company}</CardTitle>
                      {exp.address && <p className="text-muted-foreground">{exp.address}</p>}
                      <CardDescription className="text-lg mt-1 text-ring">{exp.role}</CardDescription>
                      <p className="text-muted-foreground mt-1">{exp.years}</p>
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
