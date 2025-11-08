import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: "text-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Paolo G. Sibua",
      href: portfolioData.personal.linkedin,
      color: "text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "code-paolo",
      href: portfolioData.personal.github,
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location,
      href: null,
      color: "text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
          >
            Get In Touch
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out—let's create something amazing together!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-primary/10 shrink-0 ${contact.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {contact.label}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={
                            contact.label !== "Email" ? "_blank" : undefined
                          }
                          rel={
                            contact.label !== "Email"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 break-all"
                        >
                          <span>{contact.value}</span>
                          {contact.label !== "Email" && (
                            <ExternalLink className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="border-2 border-primary/30 bg-linear-to-br from-primary/5 to-primary/10 hover:border-primary/50 transition-all hover:shadow-xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about web
              development, I'd love to hear from you. Drop me an email or
              connect with me on LinkedIn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base hover:scale-105 transition-all"
              >
                <a href={`mailto:${portfolioData.personal.email}`}>
                  Send Email
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base hover:scale-105 transition-all"
              >
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
