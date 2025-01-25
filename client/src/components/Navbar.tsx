import { Link } from "wouter";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="absolute top-0 right-0 z-10 p-4">
      <ThemeToggle />
    </div>
  );
}