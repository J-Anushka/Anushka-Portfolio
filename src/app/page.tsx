import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Showreel from "@/components/sections/showreel";
import Diary from "@/components/sections/diary";
import Resume from "@/components/sections/resume";
import Chatbot from "@/components/chatbot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Briefcase, Clapperboard, Code, Notebook, Rss } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Avatar className="w-48 h-48 border-2 border-primary">
                <AvatarImage src="https://placehold.co/300x300.png" alt="Anushka" data-ai-hint="futuristic avatar" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Anushka</h1>
                <p className="text-muted-foreground">Game Developer & Designer</p>
              </div>
              <p className="text-sm">
                I build immersive digital worlds and bring creative ideas to life through code and design.
              </p>
            </div>
          </aside>
          <div className="md:col-span-3">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="border-b-2 border-border rounded-none bg-transparent p-0 h-auto justify-start mb-4 overflow-x-auto">
                <TabsTrigger value="about" className="capitalize"><Book className="w-4 h-4 mr-2"/>About</TabsTrigger>
                <TabsTrigger value="work" className="capitalize"><Briefcase className="w-4 h-4 mr-2"/>Work</TabsTrigger>
                <TabsTrigger value="resume" className="capitalize"><Code className="w-4 h-4 mr-2"/>Resume</TabsTrigger>
                <TabsTrigger value="showreel" className="capitalize"><Clapperboard className="w-4 h-4 mr-2"/>Showreel</TabsTrigger>
                <TabsTrigger value="diary" className="capitalize"><Notebook className="w-4 h-4 mr-2"/>Diary</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <About />
              </TabsContent>
              <TabsContent value="work" className="mt-4">
                <Work />
              </TabsContent>
               <TabsContent value="resume" className="mt-4">
                <Resume />
              </TabsContent>
              <TabsContent value="showreel" className="mt-4">
                <Showreel />
              </TabsContent>
              <TabsContent value="diary" className="mt-4">
                <Diary />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
