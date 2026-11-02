import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const CredentialsSection = () => {
  const journalMetrics = [
    { label: "Impact Factor", value: "2.3" },
    { label: "CiteScore", value: "5.4" },
    { label: "JCR rank", value: "Q1" },
  ];

  const education = [
    {
      school: "Rajshahi University of Engineering & Technology",
      detail: "B.Sc. in Computer Science & Engineering, First Class",
      year: "2023",
    },
    {
      school: "The University of Oklahoma",
      detail: "U.S. Department of State Professional Fellows Program, Business & Entrepreneurship",
      year: "2023",
    },
    {
      school: "Massachusetts Institute of Technology",
      detail: "MIT Bootcamps, Innovation Leadership Bootcamp. Finished 1st runner-up",
      year: "2021",
    },
  ];

  const honors = [
    { year: "2024", text: "Asia's Top Outstanding Youth Marketeer of the Year, AMF Asia Youth, Women Netizen Marketing Excellence Awards" },
    { year: "2024", text: "Global Youth Leader, UNICEF Voices of Youth, for advocacy connecting technology and youth mental health" },
    { year: "2024", text: "Delegate Speaker & Member, One Young World" },
    { year: "2023", text: "Forbes 30 Under 30 Asia, Social Impact" },
    { year: "2022", text: "2nd Runner-Up, Huawei ICT Incubator" },
    { year: "2020, 2022", text: "Bronze Medal, International Youth Math Challenge. Twice, in case the first looked like luck" },
    { year: "Current", text: "Member, Women for Ethical AI, South Asian Chapter" },
  ];

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="III"
          title="Research & Credentials"
          aside="I got into a mathematics journal. My math teachers have been informed, and are still processing."
        />

        <article className="glass-card p-8 mb-14">
          <p className="eyebrow mb-4">Published · November 2026 · Open Access</p>
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">
            <a
              href="https://www.mdpi.com/2227-7390/14/21/3982"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              EvoRiri: Interpretable Evolutionary Search for Diagnosing Reward Design Failures in a
              Bangla Mental Health Assistant
            </a>
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Jahnnobi Rahman and Mir Md. Jahangir Kabir (University of Technology Sydney).{" "}
            <span className="italic">Mathematics</span> 2026, 14(21), 3982. Special Issue:
            Evolutionary Algorithms in Artificial Intelligence.
          </p>

          <p className="eyebrow mb-3">Journal metrics</p>
          <dl className="grid grid-cols-3 gap-4 max-w-md mb-6">
            {journalMetrics.map((metric) => (
              <div key={metric.label} className="border-t border-border pt-2">
                <dd className="text-2xl font-display">{metric.value}</dd>
                <dt className="text-sm text-muted-foreground">{metric.label}</dt>
              </div>
            ))}
          </dl>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button className="btn-premium text-lg px-8 py-5" asChild>
              <a href="https://www.mdpi.com/2227-7390/14/21/3982" target="_blank" rel="noopener noreferrer">
                Read the paper <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <a
              href="https://doi.org/10.3390/math14213982"
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              doi.org/10.3390/math14213982
            </a>
          </div>
        </article>

        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.school}>
                  <p className="eyebrow mb-1">{item.year}</p>
                  <h4 className="text-xl font-medium">{item.school}</h4>
                  <p className="text-lg text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-6">Honors</h3>
            <ul className="space-y-4">
              {honors.map((honor) => (
                <li key={honor.text} className="grid grid-cols-[6rem_1fr] gap-3 text-lg text-muted-foreground">
                  <span className="eyebrow pt-1">{honor.year}</span>
                  <span>{honor.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
