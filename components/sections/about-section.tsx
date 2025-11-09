import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import Link from "next/link";

export function AboutSection() {
  const skills = portfolioData.skills;

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bio - Takes 2 columns */}
          <Card
            className="md:col-span-2 border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <CardContent className="pt-6 space-y-6 h-full">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                  Full Stack Developer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Paolo G. Sibua, a full-stack web developer specializing in
                  creating innovative and user-friendly web applications. My
                  journey into web development started with a curiosity about
                  how websites work, and has evolved into a deep commitment to
                  mastering both front-end and back-end technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I write clean, maintainable code and follow industry best
                  practices. Constantly learning new technologies to stay
                  current with trends, I focus on delivering meaningful projects
                  that make a positive impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, I explore new web technologies,
                  contribute to open-source projects, and study the latest
                  developments in software architecture and design patterns.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full mt-4 hover:scale-105 transition-all"
              >
                <Link
                  className=" w-32"
                  href="/Sibua_Resume_2025.pdf"
                  download="Sibua_Resume_11-2025.pdf"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Download Resume
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Stats/Highlight Card */}
          <Card
            className="border-2 hover:border-primary/50 transition-all hover:shadow-lg bg-linear-to-br from-primary/10 to-primary/5 group"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <CardContent className="pt-6 h-full flex flex-col justify-center items-center text-center space-y-4">
              <div className="space-y-2">
                <p className="text-6xl font-bold group-hover:scale-110 transition-transform">
                  {portfolioData.about.projectsBuilt}
                </p>
                <p className="text-xl font-semibold">Projects Built</p>
              </div>
              <div className="space-y-2">
                <p className="text-6xl font-bold group-hover:scale-110 transition-transform">
                  {portfolioData.about.experience}
                </p>
                <p className="text-xl font-semibold">Years Coding</p>
              </div>
            </CardContent>
          </Card>

          {/* Frontend Skills */}
          <Card
            className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <CardContent className="pt-6 space-y-4 h-full">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card
            className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <CardContent className="pt-6 space-y-4 h-full">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Full Stack */}
          <Card
            className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <CardContent className="pt-6 space-y-4 h-full">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                Full Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.fullstack.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card
            className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <CardContent className="pt-6 space-y-4 h-full">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm hover:scale-110 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
