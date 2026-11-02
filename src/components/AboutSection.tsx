import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
  const values = [
    {
      title: "Users first",
      description: "Every decision starts with what people actually need, not what looked good in the deck.",
    },
    {
      title: "Move fast",
      description: "Speed, with thinking attached. The second part is the one people skip.",
    },
    {
      title: "Build together",
      description: "Great products come from great teams. The lone genius is mostly a marketing strategy.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="I"
          title="About"
          aside="A curious builder who turns ideas into things people actually want, and has opinions about the rest."
        />

        <div className="grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-5 text-xl leading-relaxed text-muted-foreground">
            <p>
              I started my entrepreneurial journey at 19, armed with one belief: great products come
              from understanding real problems. What began as curiosity about how things work became
              a career building solutions that scale.
            </p>
            <p>
              Since then I've worked with incredible teams, learned from failures, celebrated wins,
              and discovered that product development is as much about people as technology. This is
              inconvenient for someone who studied computer science, but here we are.
            </p>
            <p>
              Forbes 30 Under 30 Asia was humbling. Briefly. What actually drives me is the impact
              our products have on people's daily lives.
            </p>
            <p>
              These days I focus on the strategic and governance foundations needed
              to scale AI responsibly, because “move fast and break things” reads differently when
              the thing is someone's mental health.
            </p>
          </div>

          <aside>
            <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-6">
              House Rules
            </h3>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title}>
                  <h4 className="text-xl font-medium">{value.title}</h4>
                  <p className="text-lg text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
