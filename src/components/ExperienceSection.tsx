import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experience = [
    {
      role: "CEO & Product Lead",
      company: "Relaxy PTE. LTD.",
      location: "Singapore & Bangladesh",
      period: "Jun 2022 – Present",
      highlights: [
        "Built and scaled an AI-driven mental health platform serving 400,000+ users and 90,000+ paid subscribers",
        "Partnered with Grameenphone and Robi, extending access to 56M+ young people",
        "Led expansion into Myanmar and Indonesia, adapting the product, its conversational AI, and go-to-market strategy for each language and culture",
        "Led development of Riri, a conversational AI emotional support system, using LLM prompt engineering, RAG architecture, and behavioral dialogue design",
      ],
    },
    {
      role: "Product Manager",
      company: "SkillFusion Academy",
      location: "Ontario, Canada",
      period: "Dec 2021 – May 2022",
      highlights: [
        "Raised course completion by 38% through learner behaviour analysis and product experiments",
        "Led engineers, designers, and content writers building AI-assisted learning products",
      ],
    },
    {
      role: "Head of Product",
      company: "Captain Earth Limited",
      location: "Dhaka, Bangladesh",
      period: "Sep 2020 – Aug 2021",
      highlights: [
        "Led development of digital platforms addressing youth mental health and behavioral change",
        "Secured a BDT 1M innovation grant for mental health technology initiatives",
      ],
    },
  ];

  const education = [
    {
      school: "Rajshahi University of Engineering & Technology (RUET)",
      detail: "B.Sc. in Computer Science & Engineering, First Class",
      year: "2023",
    },
    {
      school: "The University of Oklahoma",
      detail: "U.S. Department of State Professional Fellows Program, Business & Entrepreneurship",
      year: "2023",
    },
    {
      school: "Massachusetts Institute of Technology (MIT)",
      detail: "MIT Bootcamps, Innovation Leadership Bootcamp. Finished 1st runner-up",
      year: "2021",
    },
  ];

  const honors = [
    "Forbes 30 Under 30 Asia 2023 - Social Impact",
    "Asia's Top Outstanding Youth Marketeer of the Year, 2024 AMF Asia Youth, Women Netizen Marketing Excellence Awards",
    "UNICEF Voices of Youth 2024 - Global Youth Leader for advocacy connecting technology and youth mental health",
    "One Young World 2024 - Delegate Speaker & Member",
    "Member of Women for Ethical AI (W4EAI), South Asian Chapter",
    "International Youth Math Challenge (IYMC) - Bronze Medal (2020 & 2022)",
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Experience & <span className="text-gradient-primary">Research</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From leading product teams to publishing research on safer AI for mental health.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {experience.map((job, index) => (
            <Card key={index} className="glass-card p-8">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-display font-semibold">{job.role}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {job.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-2xl font-display font-semibold">Publication</h3>
            <Badge className="bg-gold/20 text-gold border-gold/30">Accepted October 2026</Badge>
          </div>
          <p className="text-lg font-medium mb-2">
            EvoRiri: Interpretable Evolutionary Search for Diagnosing Reward-Design Failures in a
            Bangla Mental-Health Assistant
          </p>
          <p className="text-muted-foreground">
            Jahnnobi Rahman; Mir Md. Jahangir Kabir (University of Technology Sydney).{" "}
            <span className="italic">Mathematics</span> (MDPI, Q1), 2026.
          </p>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Education</h3>
            <div className="space-y-5">
              {education.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{item.school}</h4>
                  <p className="text-muted-foreground">{item.detail}</p>
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Honors & Activities</h3>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              {honors.map((honor, index) => (
                <li key={index}>{honor}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
