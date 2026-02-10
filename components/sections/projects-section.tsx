"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Github, ExternalLink, CheckCircle2, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-aos="fade">
          <SectionHeading 
            title="My Projects" 
            description="A selection of my recent projects, ranging from full-stack applications to specialized tools."
            align="left"
          />
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade" 
              data-aos-delay={index * 100}
              className="group"
            >
              <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 shadow-none rounded-[2.5rem] overflow-hidden group-hover:bg-card/90">
                <CardContent className="p-8 md:p-12 space-y-8">
                  {/* Header Area */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            Featured
                          </span>
                        )}
                      </div>
                      {project.subtitle && (
                        <p className="text-lg text-primary/80 font-medium tracking-tight">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-muted/50 hover:bg-foreground hover:text-background transition-all duration-300 border border-border/50"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-4 rounded-2xl bg-muted/50 hover:bg-foreground hover:text-background transition-all duration-300 border border-border/50"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-y border-border/30">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="space-y-1">
                          <p className="text-2xl font-black tracking-tighter text-foreground">{metric.value}</p>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      {/* Problem & Solution */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-primary">
                            <Target className="w-5 h-5" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">The Problem</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed font-light">
                            {project.problem}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-primary">
                            <Lightbulb className="w-5 h-5" />
                            <h4 className="text-sm font-bold uppercase tracking-widest">The Solution</h4>
                          </div>
                          <p className="text-foreground leading-relaxed font-normal">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="font-medium text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Impact */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Key Impact</h4>
                        <ul className="space-y-3">
                          {project.impact.map((item, iIdx) => (
                            <li key={iIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Technical Highlights</h4>
                        <div className="flex flex-col gap-2">
                          {project.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="text-sm text-muted-foreground font-medium py-2 px-4 bg-muted/20 rounded-xl border border-border">
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
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
