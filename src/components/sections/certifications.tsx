
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Transition from "@/components/layout/transition";

const certificationsData = [
    {
        title: "Foundations of Project Management",
        issuer: "Google",
        date: "June 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/ER89L6TEL08O",
    },
    {
        title: "Product Management",
        issuer: "IBM",
        date: "Feb 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/7SF1549E4LMY",
    },
    {
        title: "Project planning and Machine Learning",
        issuer: "University of Colorado Boulder",
        date: "Jan 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/O6YAIKX4DYEK",
    },
    {
        title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
        issuer: "University of Michigan",
        date: "Oct 2024",
        link: "https://www.coursera.org/account/accomplishments/certificate/1I3HFBF95N04",
    },
    {
        title: "Summer School Artificial Intelligence Technology",
        issuer: "UUST Russia",
        date: "May 2024",
        link: "https://www.linkedin.com/posts/anushkajaiswal1_excited-to-share-my-summer-school-experience-activity-7211745367275581441-q-Cw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9yF5sBiwZPChl0LVJX9sj86SYfOuDErFQ",
    },
    {
        title: "Code Vipassana",
        issuer: "Google Cloud",
        date: "2024",
        link: "https://www.linkedin.com/posts/anushkajaiswal1_reflecting-on-my-month-long-journey-with-activity-7213520342609186817-lw02?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9yF5sBiwZPChl0LVJX9sj86SYfOuDErFQ"
    },
    {
        title: "The Science of Well-Being",
        issuer: "Yale University",
        date: "Sep 2023",
        link: "https://www.coursera.org/account/accomplishments/certificate/8UX2PRQJDV4C",
    },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
                Certifications
                </span>
                <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
            </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Although I've obtained 52 certifications, I'm listing my top favourites here.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8">
            {certificationsData.map((cert, index) => (
              <Transition key={index}>
                <div className="group rounded-lg p-px bg-transparent hover:bg-gradient-to-r hover:from-accent hover:to-ring transition-all duration-300">
                  <Card className="h-full bg-card">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg mt-1">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-headline text-2xl">{cert.title}</CardTitle>
                        <CardDescription className="text-lg mt-1 text-ring">{cert.issuer}</CardDescription>
                        <p className="text-muted-foreground mt-1">{cert.date}</p>
                        {cert.link && (
                          <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2 font-semibold">
                            View Credential
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </Transition>
            ))}
        </div>
      </div>
    </section>
  );
}
