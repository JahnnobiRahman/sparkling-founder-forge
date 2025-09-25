import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "FinTech Platform",
      description: "Revolutionary payment processing platform that reduced transaction fees by 40% for small businesses. Built with microservices architecture and scaled to process $100M+ in transactions.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      metrics: [
        { label: "Users", value: "50K+" },
        { label: "Transactions", value: "$100M+" },
        { label: "Uptime", value: "99.9%" }
      ],
      status: "Live",
      category: "Featured"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning platform that helps e-commerce businesses optimize their inventory and predict demand. Increased forecast accuracy by 65% for our clients.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      metrics: [
        { label: "Accuracy", value: "65%" },
        { label: "Clients", value: "200+" },
        { label: "Data Points", value: "1M+" }
      ],
      status: "Live",
      category: "AI/ML"
    },
    {
      title: "Healthcare SaaS",
      description: "HIPAA-compliant telemedicine platform connecting patients with specialists. Reduced average consultation wait time from weeks to hours.",
      tech: ["Vue.js", "Django", "Redis", "WebRTC"],
      metrics: [
        { label: "Consultations", value: "25K+" },
        { label: "Wait Time", value: "2 hours" },
        { label: "Satisfaction", value: "4.9/5" }
      ],
      status: "Live",
      category: "Healthcare"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the products I've built that have made a real impact. 
            Each represents lessons learned and problems solved.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    <Badge 
                      className={`${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-gold/20 text-gold border-gold/30'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-card-border">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="btn-premium rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                    <Button variant="outline" className="rounded-full border-card-border">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Key Metrics</h4>
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-background/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gradient-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-premium text-lg px-8 py-4 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;