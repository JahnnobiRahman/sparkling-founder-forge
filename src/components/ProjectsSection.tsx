import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const ProjectsSection = () => {
  const work = [
    {
      company: "Relaxy",
      role: "CEO & Product Lead",
      period: "Jun 2022 – Present",
      location: "Singapore & Bangladesh",
      aside: "It turns out “how are you, really?” scales.",
      description:
        "An AI-driven mental health platform making care accessible, affordable, and stigma-free for South Asian youth.",
      highlights: [
        "Led expansion into Myanmar and Indonesia, adapting the product, its conversational AI, and go-to-market strategy for each language and culture",
      ],
      metrics: [
        { label: "Users", value: "400K+" },
        { label: "Paid subscribers", value: "90K+" },
        { label: "NPS", value: "8.5" },
        { label: "Day 1 retention", value: "82%" },
      ],
      links: [{ label: "Visit Relaxy", url: "https://session.relaxy.com.bd/" }],
      product: {
        name: "Riri",
        description:
          "Relaxy's 24/7 AI therapy assistant. Riri remembers your triggers and patterns, connecting emotions, risks, behaviors, relationships, goals, and coping strategies to personalize support and spot risks before they escalate. She speaks Bangla, Banglish, English, and Burmese. Her responses are clinician-reviewed, and she augments therapists rather than replacing them. Also the subject of my research, because she deserved peer review.",
        metrics: [
          { label: "AI-human conversations", value: "400K+" },
          { label: "NPS", value: "9.4" },
          { label: "Always on", value: "24/7" },
        ],
        quote: "she is really emotionally intelligent",
        url: "https://riri.relaxy.com.bd/",
      },
    },
    {
      company: "SkillFusion Academy",
      role: "Product Manager",
      period: "Dec 2021 – May 2022",
      location: "Ontario, Canada",
      aside: "People finished their online courses. I know. I was surprised too.",
      description: "Training immigrants to land tech jobs in the US and Canada.",
      highlights: [
        "Raised course completion by 38% through learner behaviour analysis and product experiments",
        "Led engineers, designers, and content writers building AI-assisted learning products",
      ],
      metrics: [
        { label: "Course completion", value: "+38%" },
        { label: "Consultations", value: "25K+" },
        { label: "Satisfaction", value: "4.9/5" },
      ],
      links: [
        {
          label: "See SkillFusion",
          url: "https://www.linkedin.com/company/skillfusionacademy/posts/?feedView=all",
        },
      ],
    },
    {
      company: "Captain Earth",
      role: "Head of Product",
      period: "Sep 2020 – Aug 2021",
      location: "Dhaka, Bangladesh",
      aside: "Yes, you can gamify kindness. 8,000+ students are the evidence.",
      description:
        "A gamified platform teaching students soft skills like leadership, kindness, and empathy, built on behavioral models (Hooked, Fogg).",
      highlights: [
        "Led development of digital platforms addressing youth mental health and behavioral change",
        "Secured a BDT 1M innovation grant for mental health technology initiatives",
      ],
      metrics: [
        { label: "Students trained", value: "8,000+" },
        { label: "Partner schools", value: "10+" },
        { label: "Innovation grant", value: "BDT 1M" },
      ],
      links: [
        { label: "Watch the demo", url: "https://www.facebook.com/watch/?v=851713635649307" },
      ],
    },
  ];

  return (
    <section id="work" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="II"
          title="The Work"
          aside="Every company I've worked at and everything I shipped there, in one place. Consolidation is a sign of maturity."
        />

        <div className="space-y-16">
          {work.map((job) => (
            <article key={job.company} className="grid lg:grid-cols-3 gap-8 border-b border-border pb-16">
              <div>
                <p className="eyebrow mb-3">{job.period}</p>
                <h3 className="text-3xl font-display font-medium mb-1">{job.company}</h3>
                <p className="text-lg text-primary italic">{job.role}</p>
                <p className="text-muted-foreground mb-6">{job.location}</p>

                <dl className="grid grid-cols-2 gap-4">
                  {job.metrics.map((metric) => (
                    <div key={metric.label} className="border-t border-border pt-2">
                      <dd className="text-2xl font-display">{metric.value}</dd>
                      <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-2">
                <p className="text-2xl italic mb-4">{job.aside}</p>
                <p className="text-lg text-muted-foreground mb-4">{job.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground mb-6">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                {job.product && (
                  <div className="glass-card p-6 mb-6">
                    <h4 className="text-2xl font-display font-medium mb-2">{job.product.name}</h4>
                    <p className="text-lg text-muted-foreground mb-4">{job.product.description}</p>
                    <dl className="grid sm:grid-cols-3 gap-4 mb-4">
                      {job.product.metrics.map((metric) => (
                        <div key={metric.label} className="border-t border-border pt-2">
                          <dd className="text-2xl font-display">{metric.value}</dd>
                          <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                        </div>
                      ))}
                    </dl>
                    <p className="text-lg italic mb-4">
                      “{job.product.quote}” <span className="not-italic text-muted-foreground">— a Riri user</span>
                    </p>
                    <a href={job.product.url} target="_blank" rel="noopener noreferrer" className="link-quiet">
                      Meet Riri <ExternalLink className="inline w-4 h-4" />
                    </a>
                  </div>
                )}

                {job.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet"
                  >
                    {link.label} <ExternalLink className="inline w-4 h-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="text-lg text-muted-foreground mt-10">
          <span className="eyebrow mr-3">Extracurricular</span>
          A Bangla therapy chatbot on Llama 3.2, Streamlit, and PostgreSQL, because evenings are for side projects.{" "}
          <a
            href="https://github.com/JahnnobiRahman/bangla-therapy-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet"
          >
            Read the code <Github className="inline w-4 h-4" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
