"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-aos="fade">
          <SectionHeading 
            title="Experience" 
            description="My professional journey and the companies I've had the pleasure of working with."
            align="left"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              data-aos="fade" 
              data-aos-delay={index * 100}
            >
              <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 shadow-none rounded-3xl overflow-hidden group hover:bg-card/90">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-xl text-muted-foreground font-light">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 text-muted-foreground/80">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </div>
                      {/* Note: location is in personal data, but we can add placeholders if needed or just keep it clean */}
                    </div>
                  </div>
                  
                  {exp.description && (
                    <div className="mt-6 pt-6 border-t border-border/30">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                              <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed font-light">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
