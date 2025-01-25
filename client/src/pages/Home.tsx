import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <div className="space-y-12 text-white pt-8">
      <section className="space-y-6">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl font-bold">Sarah Khan</h1>
          <p className="text-xl text-white/80">
            UI/UX Designer crafting delightful digital experiences.
            Google UX Design Professional Certificate graduate.
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild className="border-white/20 hover:bg-white/10">
            <a href="https://linkedin.com/in/sarahkhan" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="border-white/20 hover:bg-white/10">
            <a href="mailto:sarah@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <ProjectCarousel />
      </section>
    </div>
  );
}