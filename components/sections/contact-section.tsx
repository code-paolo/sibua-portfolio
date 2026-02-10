"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: portfolioData.personal.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my profile",
      href: portfolioData.personal.github,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-aos="fade">
          <SectionHeading 
            title="Get In Touch" 
            description="I&apos;m always open to new opportunities and interesting projects. Feel free to reach out!"
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a 
                key={index} 
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                data-aos="fade"
                data-aos-delay={index * 100}
                className="block group"
              >
                <Card className="bg-card/80 border-border hover:border-primary/50 transition-all duration-500 shadow-none rounded-3xl overflow-hidden group-hover:bg-card/90 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg">{contact.label}</h3>
                      <p className="text-sm text-muted-foreground font-light">{contact.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <Card className="bg-foreground border-none rounded-[2rem] overflow-hidden" data-aos="fade" data-aos-delay="200">
          <CardContent className="p-12 md:p-16 text-center text-background">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s build something <br className="hidden md:block" /> amazing together.
            </h3>
            <p className="text-background/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-7 h-auto text-xl font-bold shadow-2xl transition-transform hover:scale-105"
              >
                <a href={`mailto:${portfolioData.personal.email}`}>
                  Say Hello
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
