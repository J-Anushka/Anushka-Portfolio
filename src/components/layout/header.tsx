
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-quintessential text-3xl font-bold" prefetch={false}>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-custom-deep-blue via-blue-900 via-sky-400 to-blue-700 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
              Anushka
            </span>
            <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium font-serif">
          <Link href="/timeline" className="hover:text-primary transition-colors">Timeline</Link>
          <Link href="/home#resume" className="hover:text-primary transition-colors">Skillsets</Link>
          <Link href="/home#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="/home#certifications" className="hover:text-primary transition-colors">Certifications</Link>
          <Link href="/home#about" className="hover:text-primary transition-colors">I Have</Link>
          <Link href="/home#education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="/home#hobbies" className="hover:text-primary transition-colors">Hobbies</Link>
          <Link href="/home#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
