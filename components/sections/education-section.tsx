import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

export function EducationSection() {
  const education = portfolioData.education;

  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          data-aos="fade-up"
        >
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {edu.school}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm font-medium text-muted-foreground bg-primary/10 px-4 py-2 rounded-full">
                      {edu.period}
                    </span>
                    {edu.status && (
                      <span className="text-xs font-semibold text-primary">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

