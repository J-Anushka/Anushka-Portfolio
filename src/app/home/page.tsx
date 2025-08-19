
import About from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Hobbies from "@/components/sections/hobbies";
import Resume from "@/components/sections/resume";
import TechStack from "@/components/sections/tech-stack";
import Timeline from "@/components/sections/timeline";
import SectionDivider from "@/components/layout/section-divider";
import Transition from "@/components/layout/transition";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Transition>
        <About />
      </Transition>
      <SectionDivider />
      <Transition>
        <TechStack />
      </Transition>
      <SectionDivider />
      <Transition>
        <Resume />
      </Transition>
      <SectionDivider />
      <Transition>
        <Timeline />
      </Transition>
      <SectionDivider />
      <Transition>
        <Experience />
      </Transition>
      <SectionDivider />
      <Transition>
        <Education />
      </Transition>
      <SectionDivider />
      <Transition>
        <Hobbies />
      </Transition>
      <SectionDivider />
      <Transition>
        <Certifications />
      </Transition>
      <SectionDivider />
    </>
  );
}
