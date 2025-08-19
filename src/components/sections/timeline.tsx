
import Link from "next/link";
import { TimelineItem } from "@/components/timeline/TimelineItem";

const timelineData = [
  {
    year: "2026",
    title: "Something’s Brewing",
    description: "No spoilers yet. Let’s just say: the dots are connecting, and something meaningful is on its way.",
    align: "left",
  },
  {
    year: "2025",
    title: "Beta Testing the Future",
    description: "This year is all about diving deep into the AI world, experimenting with dynamic content creation, building interactive digital experiences, and crafting websites like this one.",
     align: "right",
  },
  {
    year: "2024",
    title: "The Year of Growth",
    description: (
      <>
        Established the{' '}
        <Link
          href="https://www.instagram.com/cuec_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Chandigarh University Entrepreneurship Club
        </Link>{' '}
        with a mission to ignite entrepreneurial spirit, foster innovation, and
        empower students to turn bold ideas into real ventures.
      </>
    ),
    align: "left",
  },
  {
    year: "2023",
    title: "Building the Foundation",
    description: (
      <>
        From winning the{' '}
        <Link
          href="https://www.linkedin.com/posts/anushkajaiswal1_first-hackathon-global-nominee-an-unexpected-activity-7117901669132120064-pf5P?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9yF5sBiwZPChl0LVJX9sj86SYfOuDErFQ"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ring hover:underline"
        >
          NASA Space Apps Challenge (National Winner, Global Nominee)
        </Link>{' '}
        to joining{' '}
        <Link
          href="https://innovixcorp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Innovix
        </Link>
        , 2023 was the year I launched into the startup world.
      </>
    ),
    align: "right",
  },
  {
    year: "2022",
    title: "Chapter One",
    description: (
      <>
        Started my engineering journey and stepped up as{' '}
        <span className="font-semibold text-ring">Class Representative</span>{' '}
        where leadership found its first stage.
        <div className="mt-2">
          <Link
            href="https://drive.google.com/file/d/1kYd4R4lezn_yaw6Aff4DA88D3vZ1jMzG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            View the Recognition
          </Link>
        </div>
      </>
    ),
    align: "left",
  },
  {
    year: "2021",
    title: "The Journey Begins",
    description: (
      <>
        Turned the mind-bending concept of{' '}
        <span className="font-semibold text-ring">Quantum Teleportation</span> into a
        2-minute video for the{' '}
        <span className="font-semibold text-primary">
          Breakthrough Junior Challenge 2021
        </span>
        .
      </>
    ),
    align: "right",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-ring bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
              My Journey So Far
            </span>
            <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            A look back at the key milestones that have shaped my path.
          </p>
        </div>
        <div className="relative flex flex-col items-center gap-12 px-4 md:px-0">
           <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent md:block bg-[length:100%_400%] animate-gradient-border" />
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
