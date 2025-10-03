import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] py-24 px-6 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      
      <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Avatar */}
          <div className="fade-in fade-in-delay-2 mt-4 md:mt-6 mb-6 flex justify-center">
          <img
            src="/me.jpg"
            alt="Your Name"
            className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover ring-2 ring-primary/30 shadow-lg"
          />
        </div>
        {/* Forbes badge (subtle, compact) */}
        <div className="fade-in mb-6 flex items-center justify-center">
          <Badge className="btn-gold text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full font-medium shadow-sm">
            🏆 Forbes 30 Under 30
          </Badge>
        </div>
        
        {/* Main Heading */}
        <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Building the
          <span className="text-gradient-primary block">
            Future of Products
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Startup founder passionate about creating products that make a difference. 
          Here's my journey of building, learning, and scaling.
        </p>
        

        {/* CTA Buttons */}
        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={() => scrollToSection("projects")}
            className="btn-premium text-xl px-10 py-5 rounded-full"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="text-xl px-10 py-5 rounded-full border-card-border bg-card/50 hover:bg-card"
          >
            Learn About Me
          </Button>
        </div>
        

        {/* Social Links */}
        <div className="fade-in fade-in-delay-3 flex justify-center space-x-6 mb-8">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
            <a href="https://github.com/JahnnobiRahman" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
            <a href="https://www.linkedin.com/in/jahnnobi-rahman/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20" asChild>
            <a href="mailto:jahnnobirahman230@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="fade-in fade-in-delay-3 mx-auto block animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>

      {/* Floating avatar overlapping next section */}
     
    </section>
  );
};

export default HeroSection;