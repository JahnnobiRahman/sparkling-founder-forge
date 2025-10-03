import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Relaxy : ChatGPT for mental wellness",
      description: "South Asia’s first AI-human hybrid mental health platform making care accessible, affordable, and stigma-free.",
      tech: ["Flutter (Dart)", "React/Next.js (TypeScript)", "NestJS (Node.js + TypeScript)", "REST + GraphQL", "MongoDB"],
      metrics: [
        { label: "Users", value: "150K+" },
        { label: "Subscribers", value: "52K+" },
        { label: "NPS Score", value: "8.5" },
        { label: "Day 01 Retention", value: "82%" }
      ],
      status: "Live",
      category: "Featured",
      liveUrl: "https://session.relaxy.com.bd/",
      codeUrl: undefined,
    },
    {
      title: "Riri : The AI Therapist",
      description: "Culturally trained AI companion that understands moods, behaviors, and triggers to deliver instant, personalized clinical therapist like mental health support",
      tech: ["PyTorch + Hugging Face Transformers " , "RLHF-tuned LLMs via LangChain & LangGraph (multi-agent orchestration)", "FastAPI", "AWS (ECS/Fargate or EKS, API Gateway", "Prometheus"],
      metrics: [
        { label: "NPS Score", value: "9.3" },
        { label: "Average Engagement/Session ", value: "18 hours/week" },
        { label: "Total Completed Sessions", value: "18K in 2 months" },
        { label: "User-reported Performance Satisfaction", value: "4X better than chatGPT" }
      ],
      status: "Live",
      category: "AI/ML",
      liveUrl: "https://riri.relaxy.com.bd/",
      codeUrl: undefined,
    },
    {
      title: "SkillFusion Academy",
      description: "Trians Immigrants to land tech-jobs in US & Canada ",
      tech: ["Vue.js", "Django", "Redis"],
      metrics: [
        { label: "Consultations", value: "25K+" },
        { label: "Satisfaction", value: "4.9/5" }
      ],
      category: "Ed-tech",
      liveUrl: "https://www.linkedin.com/company/skillfusionacademy/posts/?feedView=all",
      codeUrl: undefined,
    },

    {
      title: "Captain Earth : Soft-skill Building Platform",
      description: "A digital soft-skill building platform designed to support students with accessible interventions, behavioral design, and evidence-based models.",
      tech: ["React", "Firebase", "Node.js", "Figma"],
      metrics: [
        { label: "Users Acquired", value: "1,000+" },
        { label: "Grant Funding", value: "BDT 1M" },
        { label: "Focus", value: "Behavioral Models (Hooked, Fogg)" }
      ],
      status: "Pilot",
      category: "Healthcare / Ed-Tech",
      liveUrl: "https://www.facebook.com/watch/?v=851713635649307" // replace with actual if you have one
    },
    

    {
      title: "Bangla Therapy ChatBot",
      description: "A Streamlit-based chatbot application that provides therapeutic conversations in Bangla using the llama-3.2-3b-instruct model through LM Studio. ",
      tech: ["Python", "POSTgreSQL", "LM Studio", "Streamlit"],
      metrics: [],
      category: "Healthcare",
      codeUrl: "https://github.com/JahnnobiRahman/bangla-therapy-chatbot",
    },
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

        {(() => {
          const [showAll, setShowAll] = useState(false);
          const items = showAll ? projects : projects.slice(0, 3);
          return (
        <>
        <div className="space-y-8">
          {items.map((project, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Details */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    {project.status && (
                      <Badge 
                        className={`${
                          project.status === 'Live' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : 'bg-gold/20 text-gold border-gold/30'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    )}
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
                    {project.liveUrl && (
                      <Button className="btn-premium rounded-full" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button variant="outline" className="rounded-full border-card-border" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
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
                )}
              </div>
            </Card>
          ))}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <Button className="btn-premium text-lg px-8 py-4 rounded-full" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </div>
        )}
        </>
          );
        })()}
      </div>
    </section>
  );
};

export default ProjectsSection;