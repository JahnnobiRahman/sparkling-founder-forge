import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import me from "@/assets/me.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "400K+", label: "users" },
    { value: "90K+", label: "paying subscribers, the true compliment" },
    { value: "56M+", label: "young people within reach" },
    { value: "Q1", label: "journal, peer-reviewed and published" },
  ];

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-end mb-16">
          <div className="lg:col-span-2 fade-in">
            <p className="eyebrow mb-6">CEO of Relaxy · Forbes 30 Under 30 Asia · Dhaka</p>
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-none mb-8">
              Jahnnobi Rahman
            </h1>
            <p className="text-2xl md:text-3xl italic leading-snug mb-6 max-w-3xl">
              I teach machines to ask how you're feeling and, unlike most people, to listen to the answer.
            </p>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              I lead Relaxy, an AI mental health platform. I also speak on AI and mental health policy
              and publish research, because apparently one full-time job wasn't enough.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button onClick={() => scrollToSection("work")} className="btn-premium text-lg px-8 py-5">
                See the work
              </Button>
              <Button
                onClick={() => scrollToSection("press")}
                variant="outline"
                className="text-lg px-8 py-5 border-foreground bg-transparent hover:bg-foreground hover:text-background"
              >
                Check the receipts
              </Button>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="https://github.com/JahnnobiRahman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="https://www.linkedin.com/in/jahnnobi-rahman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                  <a href="mailto:jahnnobirahman230@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <figure className="fade-in fade-in-delay-1 max-w-xs lg:ml-auto">
            <img
              src={me}
              alt="Jahnnobi Rahman"
              className="aspect-[4/5] w-full object-cover border border-border"
            />
            <figcaption className="text-muted-foreground italic mt-2">
              Fig. 1. The author, pre-coffee.
            </figcaption>
          </figure>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t-2 border-foreground pt-6">
          {stats.map((stat) => (
            <div key={stat.value}>
              <dd className="text-4xl md:text-5xl font-display">{stat.value}</dd>
              <dt className="text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
