
import About from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Hobbies from "@/components/sections/hobbies";
import Resume from "@/components/sections/resume";
import SectionDivider from "@/components/layout/section-divider";
import Transition from "@/components/layout/transition";

export default function Home() {
  return (
    <>
      <Transition>
        <Hero />
      </Transition>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Hobbies />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
    </>
  );
}
