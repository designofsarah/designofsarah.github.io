import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      <main className={cn(
        "container mx-auto px-4 py-8",
        "prose dark:prose-invert max-w-none",
        "prose-h1:font-bold prose-h1:text-4xl",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        "prose-pre:bg-muted prose-pre:border"
      )}>
        {children}
      </main>
    </div>
  );
}
