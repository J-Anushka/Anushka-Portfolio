import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Github, Bell, Plus, User } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#diary", label: "Diary" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2 group" prefetch={false}>
              <Github className="h-8 w-8 text-foreground transition-transform duration-300 group-hover:rotate-[-15deg]" />
            </Link>
             <Input placeholder="Search or jump to..." className="hidden md:block w-64 bg-background" />
        </div>
        
        <nav className="hidden items-center gap-4 text-sm font-semibold md:flex">
           <Link href="#" className="px-3 py-2 transition-colors hover:text-primary rounded-md">Pull Requests</Link>
           <Link href="#" className="px-3 py-2 transition-colors hover:text-primary rounded-md">Issues</Link>
           <Link href="#" className="px-3 py-2 transition-colors hover:text-primary rounded-md">Marketplace</Link>
           <Link href="#" className="px-3 py-2 transition-colors hover:text-primary rounded-md">Explore</Link>
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                <Plus className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8 hidden md:block">
                <AvatarImage src="https://placehold.co/40x40.png" alt="User Avatar" />
                <AvatarFallback><User /></AvatarFallback>
            </Avatar>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Github className="h-7 w-7 text-primary" />
                    <span className="font-headline text-xl font-bold">Anushkaverse</span>
                  </Link>
                  <nav className="grid gap-2 text-lg font-medium">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-2 py-1 transition-colors hover:text-primary"
                        prefetch={false}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
