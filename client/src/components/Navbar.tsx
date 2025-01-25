import { Link } from "wouter";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
              Sarah Khan
            </a>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}