import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div 
      className="min-h-screen bg-black font-mono flex items-center justify-center overflow-hidden relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/sarah-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'grayscale(100%)'
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <main className="relative w-full flex items-center justify-center min-h-screen">
        {children}
      </main>
    </div>
  );
}