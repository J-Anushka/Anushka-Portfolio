import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3x3, Clapperboard, Notebook, User, Settings } from "lucide-react";
import Work from "@/components/sections/work";
import Showreel from "@/components/sections/showreel";
import Diary from "@/components/sections/diary";
import About from "@/components/sections/about";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <Avatar className="w-36 h-36 md:w-48 md:h-48 border-4 border-ring">
              <AvatarImage src="https://placehold.co/300x300.png" alt="Anushka" data-ai-hint="futuristic avatar" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-light">anushka.dev</h1>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Edit Profile</Button>
                  <Button variant="secondary" size="sm">View Archive</Button>
                  <Button variant="ghost" size="icon" className="hidden md:inline-flex"><Settings className="w-5 h-5"/></Button>
                </div>
              </div>
              <div className="flex gap-8 text-sm">
                <div><span className="font-semibold">34</span> posts</div>
                <div><span className="font-semibold">1.2k</span> followers</div>
                <div><span className="font-semibold">340</span> following</div>
              </div>
              <div>
                <h2 className="font-semibold">Anushka</h2>
                <p className="text-muted-foreground text-sm">Game Developer | Designer | Founder</p>
                <p className="text-sm mt-2">
                  Building immersive digital worlds and bringing creative ideas to life through code and design. ✨<br/>
                  Co-founder @dreamstack | Prev E-Cell President 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="border-t border-border justify-center w-full rounded-none bg-transparent p-0 h-auto">
              <TabsTrigger value="grid" className="flex-1 capitalize text-xs tracking-widest"><Grid3x3 className="w-4 h-4 mr-2"/>POSTS</TabsTrigger>
              <TabsTrigger value="showreel" className="flex-1 capitalize text-xs tracking-widest"><Clapperboard className="w-4 h-4 mr-2"/>REELS</TabsTrigger>
              <TabsTrigger value="diary" className="flex-1 capitalize text-xs tracking-widest"><Notebook className="w-4 h-4 mr-2"/>DIARY</TabsTrigger>
               <TabsTrigger value="about" className="flex-1 capitalize text-xs tracking-widest"><User className="w-4 h-4 mr-2"/>ABOUT</TabsTrigger>
            </TabsList>
            <TabsContent value="grid" className="mt-4">
              <Work />
            </TabsContent>
            <TabsContent value="showreel" className="mt-4">
               <div className="flex justify-center">
                 <Showreel />
               </div>
            </TabsContent>
            <TabsContent value="diary" className="mt-4">
              <Diary />
            </TabsContent>
             <TabsContent value="about" className="mt-4">
              <About />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}