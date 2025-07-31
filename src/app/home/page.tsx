
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";
import Transition from "@/components/layout/transition";
import BackgroundBits from "@/components/layout/background-bits";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative">
      <BackgroundBits />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Transition>
            <Hero />
          </Transition>
          <Resume />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}
