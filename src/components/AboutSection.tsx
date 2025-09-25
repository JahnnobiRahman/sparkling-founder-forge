import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const achievements = [
    {
      title: "Forbes 30 Under 30",
      description: "Recognized for entrepreneurial excellence and innovation",
      icon: "🏆"
    },
    {
      title: "Multiple Products Launched",
      description: "Successfully brought 5+ products from idea to market",
      icon: "🚀"
    },
    {
      title: "Team Leadership",
      description: "Built and led cross-functional teams of 20+ members",
      icon: "👥"
    },
    {
      title: "Funding Raised",
      description: "Secured significant funding rounds for growth",
      icon: "💰"
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a curious builder who loves experimenting with ideas, turning them into products people actually want, 
          and teaming up with others to make the journey fun and meaningful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Starting my entrepreneurial journey at 19, I've always been driven by the belief 
                that great products come from understanding real user problems. What began as 
                curiosity about how things work evolved into a passion for building solutions 
                that scale.
              </p>
              <p>
                Over the years, I've had the privilege of working with incredible teams, 
                learning from failures, celebrating wins, and most importantly, understanding 
                that product development is as much about people as it is about technology.
              </p>
              <p>
                Being recognized as Forbes 30 Under 30 was humbling, but what truly drives me 
                is the impact our products have on users daily lives and the lessons learned 
                along the way.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="glass-card p-8">
          <h3 className="text-2xl font-display font-semibold mb-6 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">User-Centric</h4>
              <p className="text-muted-foreground">Every decision starts with understanding user needs and pain points</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Move Fast</h4>
              <p className="text-muted-foreground">Speed of execution combined with thoughtful iteration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold mb-2">Build Together</h4>
              <p className="text-muted-foreground">Great products are built by great teams working in harmony</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;