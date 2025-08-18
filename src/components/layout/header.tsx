
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-quintessential text-3xl font-bold" prefetch={false}>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-custom-deep-blue via-blue-900 via-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
              Anushka
            </span>
            <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{={{ backgroundPosition: '-200% 0' }}}} />
          </span>
        </Link>
        <nav className="hidden md:flex">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-blue-900/50">
                <LayoutGrid className="h-16 w-16" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/timeline">Timeline</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#resume">Skillsets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#experience">Experience</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#certifications">Certifications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#about">I Have</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#education">Education</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#hobbies">Hobbies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home#contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
