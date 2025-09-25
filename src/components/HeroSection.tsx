import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Forbes Badge */}
        <div className="fade-in mb-6">
          <Badge className="btn-gold text-lg px-6 py-3 rounded-full font-medium">
            🏆 Forbes 30 Under 30
          </Badge>
        </div>
        
        {/* Main Heading */}
        <h1 className="fade-in fade-in-delay-1 text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
          Building the
          <span className="text-gradient-primary block">
            Future of Products
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Startup founder passionate about creating products that make a difference. 
          Here's my journey of building, learning, and scaling.
        </p>
        
        {/* CTA Buttons */}
        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="btn-premium text-lg px-8 py-4 rounded-full"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="text-lg px-8 py-4 rounded-full border-card-border bg-card/50 hover:bg-card"
          >
            Learn About Me
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="fade-in fade-in-delay-3 flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
            <Mail className="h-5 w-5" />
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
    </section>
  );
};

export default HeroSection;