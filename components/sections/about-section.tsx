"use client";

import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const skills = portfolioData.skills;

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-aos="fade">
          <SectionHeading
            title="About Me"
            description="A brief introduction to my background, my journey, and the things that drive me as a developer."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {/* Main Content Card */}
          <div className="space-y-8" data-aos="fade" data-aos-delay="100">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {portfolioData.about.summary}
              </p>
            </div>

            <div className="flex justify-center md:justify-start pt-4">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 h-auto text-sm md:text-base font-medium transition-all hover:scale-105 shadow-sm border border-foreground/10">
                <a href="/Sibua_Resume_2026.pdf" download>
                  <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="pt-12">
            <h3 className="text-2xl font-bold mb-8" data-aos="fade">Tech Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TechCategory title="Frontend" skills={skills.frontend} index={0} />
              <TechCategory title="Backend" skills={skills.backend} index={1} />
              <TechCategory title="Fullstack" skills={skills.fullstack} index={2} />
              <TechCategory title="Tools" skills={skills.tools} index={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCategory({ title, skills, index }: { title: string; skills: string[]; index: number }) {
  return (
    <div data-aos="fade" data-aos-delay={index * 100}>
      <Card className="bg-card/80 border-border hover:border-primary/50 transition-colors shadow-none rounded-2xl h-full">
        <CardContent className="p-6">
          <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{title}</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
