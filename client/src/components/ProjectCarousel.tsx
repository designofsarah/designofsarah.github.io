import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { SiFigma } from "react-icons/si";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_INTERVAL = 4000;

const projects = [
  {
    id: 1,
    title: "Travel App Redesign",
    description: "A complete redesign of a travel booking application focusing on user experience and accessibility.",
    image: "/project1.jpg",
    figmaLink: "https://figma.com/file/..."
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Modern dashboard interface for managing online store inventory and analytics.",
    image: "/project2.jpg",
    figmaLink: "https://figma.com/file/..."
  },
  {
    id: 3,
    title: "Healthcare Portal",
    description: "Patient-centric healthcare portal focusing on easy appointment booking and medical records access.",
    image: "/project3.jpg",
    figmaLink: "https://figma.com/file/..."
  }
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div key={project.id} className="flex-[0_0_100%] min-w-0">
              <div className="bg-white/10 border-white/20 backdrop-blur-sm p-6 space-y-4 m-4 rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-white/80">
                    {project.description}
                  </p>
                  <Button variant="outline" asChild className="border-white/20 hover:bg-white/10">
                    <a 
                      href={project.figmaLink}
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/30'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 border-white/20 hover:bg-white/10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 border-white/20 hover:bg-white/10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
}
