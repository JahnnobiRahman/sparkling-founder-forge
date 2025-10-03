import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Relaxy : ChatGPT for Mental Wellness",
      description:
        "An AI-human hybrid mental health platform making care accessible, affordable, and stigma-free for 600M South Asian Youth.",
      tech: [
        "Flutter (Dart)",
        "React/Next.js (TypeScript)",
        "REST + GraphQL",
        "MongoDB",
      ],
      metrics: [
        { label: "Users", value: "150K+" },
        { label: "Subscribers", value: "52K+" },
        { label: "NPS Score", value: "8.5" },
        { label: "Day 01 Retention", value: "82%" },
      ],
      status: "Live",
      category: "HealthTech / Mental Wellness",
      liveUrl: "https://session.relaxy.com.bd/",
      codeUrl: undefined,
    },
    {
      title: "Riri : The AI Therapist",
      description:
        "Culturally trained AI companion that understands moods, behaviors, and triggers to deliver instant, personalized clinical therapist–like mental health support.",
      tech: [
        "PyTorch + Hugging Face Transformers",
        "LangChain & LangGraph",
        "FastAPI",
        "Prometheus",
      ],
      metrics: [
        { label: "NPS Score", value: "9.3" },
        { label: "Average Engagement/Session", value: "18 hours/week" },
        { label: "Total Completed Sessions with 0 CAC", value: "18K in 2 months" },
        { label: "User-reported Performance Satisfaction Score", value: "4X better than ChatGPT" },
      ],
      status: "Live",
      category: "AI / Mental Health",
      liveUrl: "https://riri.relaxy.com.bd/",
      codeUrl: undefined,
    },
    {
      title: "Captain Earth : Gamified Soft-skill Building Platform",
      description:
        "Educate and train students for building soft skills like leadership, kindness & empathy.",
      tech: ["React", "Firebase", "Node.js", "Figma"],
      metrics: [
        { label: "Partnered with 10+ schools", value: "8,000+ students trained" },
        { label: "Focus", value: "Behavioral Models (Hooked, Fogg)" },
      ],
      status: "Pilot",
      category: "Healthcare / EdTech",
      liveUrl: "https://www.facebook.com/watch/?v=851713635649307",
      codeUrl: undefined,
    },

    {
      title: "SkillFusion Academy",
      description: "Trains immigrants to land tech jobs in the US & Canada.",
      tech: ["Vue.js", "Django", "Redis"],
      metrics: [
        { label: "Consultations", value: "25K+" },
        { label: "Satisfaction", value: "4.9/5" },
      ],
      status: "Live",
      category: "EdTech",
      liveUrl:
        "https://www.linkedin.com/company/skillfusionacademy/posts/?feedView=all",
      codeUrl: undefined,
    },
  
    {
      title: "Bangla Therapy ChatBot",
      description:
        "A Streamlit-based chatbot that provides therapeutic conversations in Bangla using the Llama-3.2-3B-Instruct model via LM Studio.",
      tech: ["Python", "PostgreSQL", "LM Studio", "Streamlit"],
      metrics: [],
      category: "Healthcare",
      liveUrl: undefined,
      codeUrl: "https://github.com/JahnnobiRahman/bangla-therapy-chatbot",
    },
  ];

  const items = showAll ? projects : projects.slice(0, 3);

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
          {items.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Title + Badges + Description + (Tech + Buttons Row) */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {project.category}
                    </Badge>
                    {project.status && (
                      <Badge
                        className={`${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-gold/20 text-gold border-gold/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Single compact row: tech chips (left) + CTAs (right) */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-card-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button className="btn-premium rounded-full" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button
                          variant="outline"
                          className="rounded-full border-card-border"
                          asChild
                        >
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Metrics */}
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
            <Button
              className="btn-premium text-lg px-8 py-4 rounded-full"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
