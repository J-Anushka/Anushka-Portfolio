import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Work from "@/components/sections/work";
import About from "@/components/sections/about";
import Resume from "@/components/sections/resume";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Work />
        <Resume />
        <About />
      </main>
      <Footer />
    </div>
  );
}
