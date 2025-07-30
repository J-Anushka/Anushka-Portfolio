import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-headline text-2xl font-bold" prefetch={false}>
          Anushka
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#work" className="hover:text-primary transition-colors">Work</Link>
          <Link href="#resume" className="hover:text-primary transition-colors">Resume</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button asChild>
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </header>
  );
}
