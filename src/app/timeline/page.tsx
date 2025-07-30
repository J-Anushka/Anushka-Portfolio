import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const timelineData = [
  {
    year: "2026",
    title: "Future Horizons",
    description: "Continuing to innovate and explore new frontiers in technology and design. The best is yet to come!",
    align: "left",
  },
  {
    year: "2025",
    title: "Expanding the Vision",
    description: "New projects, new collaborations, and pushing the boundaries of what's possible.",
     align: "right",
  },
  {
    year: "2024",
    title: "The Year of Growth",
    description: "Launched major projects and took on new leadership roles, expanding my skill set in AI and web development.",
    align: "left",
  },
  {
    year: "2023",
    title: "Building the Foundation",
    description: "Co-founded a startup, learning the ins and outs of building a business from the ground up.",
    align: "right",
  },
  {
    year: "2022",
    title: "Leadership & Community",
    description: "As E-Cell President, I had the privilege of fostering a community of innovators and entrepreneurs.",
    align: "left",
  },
  {
    year: "2021",
    title: "The Journey Begins",
    description: (
      <>
        Turned the mind-bending concept of{' '}
        <span className="font-semibold text-ring">Quantum Teleportation</span>{' '}
        into a 2-minute video for the{' '}
        <span className="font-semibold text-primary">
          Breakthrough Junior Challenge 2021
        </span>
        .
      </>
    ),
    align: "right",
  },
];

type TimelineItemProps = {
  year: string;
  title: string;
  description: React.ReactNode;
  align: "left" | "right";
};


const TimelineItem = ({ year, title, description, align }: TimelineItemProps) => {
  const alignmentClass = align === 'left' ? 'md:self-start md:text-left' : 'md:self-end md:text-right';
  const textAlignClass = align === 'left' ? 'md:text-left' : 'md:text-right';
  const lineClass = align === 'left' ? 'md:left-0' : 'md:right-0';
  const dotClass = align === 'left' ? 'md:left-[-6px]' : 'md:right-[-6px]';
  
  return (
    <div className={`relative flex w-full flex-col items-center gap-4 md:w-1/2 ${alignmentClass}`}>
       <div className={`absolute top-1/2 hidden h-px w-1/2 -translate-y-1/2 bg-primary/50 ${lineClass}`} />
      <div className={`absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-primary ${dotClass}`} />
      <h3 className={`font-headline text-5xl font-bold text-primary`}>{year}</h3>
      <div className={`w-full rounded-lg bg-secondary p-6 shadow-lg ${textAlignClass}`}>
        <h4 className="font-headline text-2xl font-bold">{title}</h4>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};


export default function TimelinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="timeline" className="py-24 md:py-32">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Journey</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                A look back at the key milestones that have shaped my path.
              </p>
            </div>
            <div className="relative flex flex-col items-center gap-12 px-4 md:px-0">
               <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-primary/50 md:block" />
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
