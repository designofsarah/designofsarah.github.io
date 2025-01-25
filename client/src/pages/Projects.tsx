import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1>Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="space-y-1">
                <CardTitle>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
