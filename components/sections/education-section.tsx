"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const education = portfolioData.education;

  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-aos="fade">
          <SectionHeading 
            title="Education" 
            description="My academic background and qualifications."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              data-aos="fade" 
              data-aos-delay={index * 100}
            >
              <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 shadow-none rounded-3xl overflow-hidden group hover:bg-card/90 h-full">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                      <p className="text-lg text-muted-foreground font-light">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground/80 bg-muted/50 px-4 py-1.5 rounded-full border border-border/50">
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

