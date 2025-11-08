"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className="text-lg font-medium text-primary uppercase tracking-wider"
                data-aos="fade-down"
                data-aos-duration="600"
                data-aos-delay="0"
                data-aos-anchor-placement="top-bottom"
              >
                Hello, I'm
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="150"
                data-aos-anchor-placement="top-bottom"
              >
                <span className="bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <div
                className="space-y-2"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                  {portfolioData.personal.role}
                </h2>
                <div className="h-1 w-24 bg-primary rounded-full" />
              </div>
            </div>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="450"
              data-aos-anchor-placement="top-bottom"
            >
              {portfolioData.about.summary}
            </p>
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-anchor-placement="top-bottom"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-all"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div
            className="flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="relative w-full max-w-[450px] aspect-3/4 overflow-hidden rounded-3xl shadow-2xl border-4 border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl group">
              <Image
                src="/hero-img.webp"
                alt={`${portfolioData.personal.name} - ${portfolioData.personal.role}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Professional overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Animated border glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-primary/20 via-transparent to-primary/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Modern Tech-Inspired Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Main grid pattern - tech aesthetic */}
        <div
          className="absolute inset-0 opacity-15 dark:opacity-12"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Accent grid - smaller overlay */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-8"
          style={{
            backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.4) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Geometric hexagon pattern */}
        <div className="absolute inset-0 opacity-12 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hexagons"
                x="0"
                y="0"
                width="100"
                height="87"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/12 dark:bg-primary/18 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 dark:bg-primary/22 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-primary/10 dark:bg-primary/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Circuit board inspired lines */}
        <div className="absolute top-20 left-20 w-64 h-64 opacity-15 dark:opacity-12">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="50"
              x2="200"
              y2="50"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="200"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <circle cx="50" cy="50" r="4" fill="hsl(var(--primary) / 0.6)" />
            <line
              x1="0"
              y1="100"
              x2="150"
              y2="100"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <line
              x1="150"
              y1="0"
              x2="150"
              y2="100"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <circle cx="150" cy="100" r="4" fill="hsl(var(--primary) / 0.6)" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-20 w-72 h-72 opacity-15 dark:opacity-12">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="150"
              x2="200"
              y2="150"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <circle cx="100" cy="150" r="4" fill="hsl(var(--primary) / 0.6)" />
            <line
              x1="50"
              y1="150"
              x2="50"
              y2="200"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth="1"
            />
            <circle cx="50" cy="150" r="4" fill="hsl(var(--primary) / 0.6)" />
          </svg>
        </div>

        {/* Dot grid accent */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
          }}
        />
      </div>
    </section>
  );
}
