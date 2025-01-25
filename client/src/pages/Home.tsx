import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1>Hi, I'm Jake Smith</h1>
        <p className="text-xl text-muted-foreground">
          I'm a software engineer focused on building clean, efficient, and scalable applications.
          Currently working on web technologies and distributed systems.
        </p>
      </section>

      <section className="flex gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href="mailto:contact@example.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
      </section>

      <section className="space-y-4">
        <h2>About Me</h2>
        <p>
          I specialize in developing high-performance applications with a focus on user experience
          and code quality. With experience in both frontend and backend development, I enjoy
          working across the full stack to deliver complete solutions.
        </p>
      </section>
    </div>
  );
}
