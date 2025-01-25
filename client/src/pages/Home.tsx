import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { SiFigma } from "react-icons/si";

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

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 space-y-4">
          <img 
            src="/project1.jpg" 
            alt="Project Preview" 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Travel App Redesign</h3>
            <p className="text-white/80">
              A complete redesign of a travel booking application focusing on user experience and accessibility.
            </p>
            <Button variant="outline" asChild className="border-white/20 hover:bg-white/10">
              <a 
                href="https://figma.com/file/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <SiFigma className="h-4 w-4" />
                View in Figma
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}