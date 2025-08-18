import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-quintessential text-3xl font-bold" prefetch={false}>
          Anushka
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium font-aguafina">
          <Link href="/timeline" className="hover:text-primary transition-colors">Timeline</Link>
          <Link href="/home#resume" className="hover:text-primary transition-colors">Skillsets</Link>
          <Link href="/home#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="/home#certifications" className="hover:text-primary transition-colors">Certifications</Link>
          <Link href="/home#about" className="hover:text-primary transition-colors">I Have</Link>
          <Link href="/home#education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="/home#hobbies" className="hover:text-primary transition-colors">Hobbies</Link>
          <Link href="/home#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button asChild>
          <Link href="/home#contact">Get in Touch</Link>
        </Button>
      </div>
    </header>
  );
}
