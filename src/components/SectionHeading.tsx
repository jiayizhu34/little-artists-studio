interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
    <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full bg-primary ${centered ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
