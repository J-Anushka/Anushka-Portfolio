
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certificationsData = [
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
        title: "Google Cloud Certified",
        issuer: "Google",
        date: "2023",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
    },
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            My credentials and qualifications.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8">
            {certificationsData.map((cert, index) => (
              <div key={index} className="group rounded-lg p-px bg-transparent hover:bg-primary transition-all duration-300">
                <Card className="h-full">
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
            ))}
        </div>
      </div>
    </section>
  );
}
