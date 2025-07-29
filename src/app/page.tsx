import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Showreel from "@/components/sections/showreel";
import Diary from "@/components/sections/diary";
import Resume from "@/components/sections/resume";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Showreel />
        <Diary />
        <Resume />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
