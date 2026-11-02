interface SectionHeadingProps {
  numeral: string;
  title: string;
  aside: string;
}

const SectionHeading = ({ numeral, title, aside }: SectionHeadingProps) => {
  return (
    <header className="mb-14 border-t-2 border-foreground pt-4">
      <p className="eyebrow mb-6">§ {numeral}</p>
      <h2 className="text-4xl md:text-6xl font-display font-medium mb-4">{title}</h2>
      <p className="text-xl md:text-2xl italic text-muted-foreground max-w-3xl">{aside}</p>
    </header>
  );
};

export default SectionHeading;
