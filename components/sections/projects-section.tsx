"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export function ProjectsSection() {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-linear-to-b from-background via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-5xl md:text-6xl font-bold mb-4 text-center"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>
        <p
          className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Real-world applications solving complex problems with measurable
          impact
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-2 transition-all duration-300 group overflow-hidden relative ${
                project.featured
                  ? "border-primary/60 ring-2 ring-primary/30 bg-linear-to-br from-primary/12 via-primary/6 to-background hover:border-primary hover:shadow-[0_0_25px_rgba(var(--primary),0.25)]"
                  : "border-border hover:border-primary/50 hover:shadow-2xl"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                  <CardTitle
                    className={`${
                      project.featured ? "text-2xl md:text-3xl" : "text-2xl"
                    } font-bold group-hover:text-primary transition-colors`}
                  >
                    {project.title}
                  </CardTitle>

                  {/* Badges Container */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Capstone Badge */}
                    {project.featured && (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg">
                        🏆 Capstone
                      </span>
                    )}
                  </div>
                </div>
                {project.subtitle && (
                  <p className="text-base text-muted-foreground font-medium">
                    {project.subtitle}
                  </p>
                )}
              </CardHeader>

              <CardContent className="space-y-4 flex flex-col h-full">
                {/* Impact Metrics - Featured Only */}
                {project.featured && project.metrics && (
                  <div className="grid grid-cols-3 gap-4 p-4 bg-background/50 rounded-xl border border-primary/20 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem & Solution */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">
                      PROBLEM
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary mb-1">
                      SOLUTION
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                {project.highlights.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-primary mb-2">
                      {project.featured ? "CORE FEATURES" : "KEY FEATURES"}
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs leading-relaxed"
                        >
                          <span className="text-primary mt-0.5 shrink-0">
                            •
                          </span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact Points */}
                <div>
                  <p className="text-xs font-bold text-primary mb-2">
                    KEY IMPACT
                  </p>
                  <ul className="space-y-1">
                    {project.impact
                      .slice(0, project.featured ? 4 : 2)
                      .map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-xs leading-relaxed"
                        >
                          <span className="text-primary mt-0.5 shrink-0">
                            ✓
                          </span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={project.featured ? "default" : "secondary"}
                        className="text-xs hover:scale-110 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 mt-auto">
                  <Button
                    size="sm"
                    variant={project.featured ? "default" : "outline"}
                    asChild
                    className="flex-1 hover:scale-105 transition-all"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mr-2"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:scale-105 transition-all"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="mr-2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
