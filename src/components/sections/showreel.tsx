import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Showreel() {
  return (
    <section id="showreel" className="bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">The Bold & Beautiful</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A cinematic showcase of my work in motion.
          </p>
        </div>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
          <Image
            src="https://placehold.co/1280x720.png"
            alt="Showreel Thumbnail"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            data-ai-hint="cinematic montage"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
