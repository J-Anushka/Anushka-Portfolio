import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-tr from-black via-background to-black">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2 md:px-6 md:py-24">
        <div className="space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Let's Create Magic</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Have a project in mind, a question, or just want to say hi? My inbox is always open.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <Link href="#" aria-label="Resume">
                <FileText className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Mail">
                <Mail className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
                <Github className="h-6 w-6 transition-transform hover:scale-110 hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input placeholder="Name" className="bg-background/50" />
              <Input type="email" placeholder="Email" className="bg-background/50" />
            </div>
            <Textarea placeholder="Message" className="min-h-[120px] bg-background/50" />
            <Button type="submit" className="w-full md:w-auto">Send Message</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex items-center justify-center px-4 py-4 text-sm text-muted-foreground md:px-6">
          <p>&copy; 2024 Anushkaverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
