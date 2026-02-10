"use client";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { MoveRight } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10 text-left">
        <div className="space-y-4 sm:space-y-6 max-w-4xl">
          <p
            className="text-foreground font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm"
            data-aos="fade"
          >
            {portfolioData.personal.role}
          </p>
          
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] sm:leading-[1.05]"
            data-aos="fade"
            data-aos-delay="100"
          >
            I&apos;m <span className="relative inline-block">
              {portfolioData.personal.name}
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[0.15em] sm:h-[0.2em] bg-foreground/20 -z-10 -skew-x-12" />
            </span>, <br className="hidden sm:block" />
            crafting digital experiences.
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
            data-aos="fade"
            data-aos-delay="200"
          >
            {portfolioData.about.summary}
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6 pt-6 sm:pt-8"
            data-aos="fade"
            data-aos-delay="300"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-foreground text-background hover:bg-foreground/90 px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg rounded-full transition-transform hover:scale-105 group w-full sm:w-auto"
            >
              View Projects
              <MoveRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all w-full sm:w-auto"
            >
              <a href="#about" className="justify-center">
                About Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Modern minimal background element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-12 bg-linear-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
}
