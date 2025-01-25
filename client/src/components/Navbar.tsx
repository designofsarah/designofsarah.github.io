import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [location] = useLocation();
  
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="flex items-center gap-6">
            <Link href="/">
              <a className={cn(
                "text-lg font-semibold",
                "transition-colors hover:text-primary",
                location === "/" && "text-primary"
              )}>
                Jake Smith
              </a>
            </Link>
            <Link href="/blog">
              <a className={cn(
                "transition-colors hover:text-primary",
                location === "/blog" && "text-primary"
              )}>
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a className={cn(
                "transition-colors hover:text-primary",
                location === "/projects" && "text-primary"
              )}>
                Projects
              </a>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
