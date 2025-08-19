
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Typewriter from "@/components/ui/typewriter";

const AnimatedTitle = ({ title }: { title: string }) => {
    return (
      <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl relative inline-block h-16">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-gradient-border bg-[length:200%_auto]">
          <Typewriter text={title} delay={150} />
        </span>
        <span className="absolute -inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent animate-shimmer bg-no-repeat bg-[length:200%_100%]" style={{ backgroundPosition: '-200% 0' }} />
      </h2>
    );
  };

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-tr from-black via-background to-black">
      <div className="h-1 bg-gradient-to-r from-black via-blue-900 to-primary bg-[length:200%_100%] animate-gradient-border" />
      <div className="container mx-auto flex justify-center py-12 px-4 md:px-6 md:py-24">
        <div className="space-y-4 text-center">
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Brainstorming the future or just exchanging thoughts? My inbox is always open.
          </p>
          <AnimatedTitle title="Let's Create Magic" />
          <div className="flex items-center justify-center space-x-4 pt-4">
            <Link href="https://www.linkedin.com/in/anushkajaiswal1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=anushkajais1001@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
                <Mail className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="https://www.instagram.com/_.anushka_j._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="https://github.com/J-Anushka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex items-center justify-center px-4 py-4 text-sm text-muted-foreground md:px-6">
          <p>&copy; 2025 Anushka Jaiswal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
