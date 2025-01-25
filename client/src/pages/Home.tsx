import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 py-8">
      <section className="space-y-4">
        <div className="space-y-3 max-w-2xl">
          <h1 className="text-4xl font-bold text-white">Sarah Khan</h1>
          <p className="text-lg text-white/80">
            UI/UX Designer crafting delightful digital experiences.
            Google UX Design Professional Certificate graduate.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" size="icon" asChild className="border-white/20 hover:bg-white/10">
            <a href="https://www.linkedin.com/in/sarah-razvi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="border-white/20 hover:bg-white/10">
            <a href="mailto:sarahrazvi96@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-4">Featured Projects</h2>
        <ProjectCarousel />
      </section>
    </div>
  );
}