import { portfolioData } from "@/lib/portfolio-data";

export function ExperienceSection() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Compact Timeline */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border" />

          {/* Timeline items */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 py-3 group hover:bg-primary/5 -mx-4 px-4 rounded-lg transition-colors"
              >
                {/* Timeline dot */}
                <div
                  className={`relative z-10 mt-1.5 shrink-0 ${
                    exp.current
                      ? "w-4 h-4 bg-primary rounded-full ring-4 ring-background"
                      : "w-4 h-4 bg-background border-2 border-primary rounded-full"
                  }`}
                />

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.company}
                    </p>
                  )}
                  {exp.description && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.description}
                    </p>
                  )}
                </div>

                {/* Year */}
                <div className="text-sm font-medium text-muted-foreground shrink-0">
                  {exp.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
