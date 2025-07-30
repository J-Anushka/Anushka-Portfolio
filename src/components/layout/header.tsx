import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Send, PlusSquare, Compass, Heart, User } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
            <Link href="#" className="font-headline text-2xl font-bold" prefetch={false}>
              Anushkaverse
            </Link>
        </div>
        
        <div className="hidden md:block w-full max-w-xs">
           <Input placeholder="Search..." className="bg-secondary" />
        </div>

        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
                <Home className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
                <Send className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
                <PlusSquare className="h-6 w-6" />
            </Button>
             <Button variant="ghost" size="icon">
                <Compass className="h-6 w-6" />
            </Button>
             <Button variant="ghost" size="icon">
                <Heart className="h-6 w-6" />
            </Button>
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://placehold.co/40x40.png" alt="User Avatar" />
                <AvatarFallback><User /></AvatarFallback>
            </Avatar>
        </div>
      </div>
    </header>
  );
}