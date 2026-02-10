interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 space-y-4 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
        {title}<span className="text-primary">.</span>
      </h2>
      {description && (
        <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed font-light ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

