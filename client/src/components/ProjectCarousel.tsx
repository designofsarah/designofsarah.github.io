import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { SiFigma } from "react-icons/si";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AUTOPLAY_INTERVAL = 4000;

const projects = [
  {
    id: 1,
    title: "Car Rental App",
    description: "A modern car rental application with seamless booking experience and intuitive user interface. Features include real-time availability, detailed car specifications, and a streamlined reservation process.",
    figmaLink: "https://www.figma.com/design/eq8SnoBAVGAkAclPhauXKS/Car-rental-App?node-id=0-1&t=aHQ7CHosWtfMWrLG-1"
  },
  {
    id: 2,
    title: "Checkout Page Design",
    description: "Streamlined e-commerce checkout experience with focus on conversion optimization and user flow. Implements best practices in form design, payment integration, and order confirmation process.",
    figmaLink: "https://www.figma.com/design/qbHaXVGqwM7pYgO0BCguXQz/Checkout-Page?node-id=0-1&t=dweGttDpcqajUnSh-1"
  },
  {
    id: 3,
    title: "Naruto Character Explorer",
    description: "Interactive interface showcasing Naruto characters with detailed information and visual appeal. Features character profiles, jutsu details, and village affiliations in an engaging layout.",
    figmaLink: "https://www.figma.com/design/l9b1Xm7wM7pYgO0BCguXQz/Naruto-characters?node-id=0-1&t=l391z1UEydtijTcz-1"
  }
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setUserInteracted(true);
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setUserInteracted(true);
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || userInteracted) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplay);
  }, [emblaApi, userInteracted]);

  return (
    <div className="relative max-w-xl mx-auto px-4 sm:px-6">
      <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div key={project.id} className="flex-[0_0_100%] min-w-0">
                <div className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <Separator className="bg-white/20" />
                    <p className="text-sm text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                    <Button variant="outline" asChild className="w-full mt-4 border-white/20 hover:bg-white/10">
                      <a 
                        href={project.figmaLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <SiFigma className="h-4 w-4" />
                        View in Figma
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setUserInteracted(true);
              emblaApi?.scrollTo(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 border-white/20 hover:bg-white/10 h-8 w-8"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </Button>

      <Button
        variant="outline"
        size="icon" 
        className="absolute -right-4 top-1/2 -translate-y-1/2 border-white/20 hover:bg-white/10 h-8 w-8"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </Button>
    </div>
  );
}