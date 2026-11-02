import SectionHeading from "@/components/SectionHeading";
import acceleratingAsia from "@/assets/backers/accelerating-asia.png";
import beyondVentures from "@/assets/backers/beyond-ventures.png";
import sajida from "@/assets/backers/sajida.png";
import bkash from "@/assets/backers/bkash.png";
import augmedix from "@/assets/backers/augmedix.svg";
import shopup from "@/assets/backers/shopup.png";

const PartnersSection = () => {
  const backers = [
    { name: "Accelerating Asia", detail: "Investor", logo: acceleratingAsia },
    { name: "Beyond Ventures", detail: "Investor", logo: beyondVentures },
    { name: "Sajida Foundation", detail: "Investor", logo: sajida },
    { name: "Hossain Md Shahidul Hoque", detail: "Angel investor, bKash", logo: bkash },
    { name: "Rashed Noman", detail: "Angel investor, Country Director at Augmedix", logo: augmedix },
    { name: "Ataur Rahim Chowdhury", detail: "Angel investor, CEO of ShopUp Bangladesh", logo: shopup },
  ];

  const collaborations = [
    {
      label: "Distribution",
      text: "Extended access through Grameenphone and Robi (56M+ user base) and bKash (25M+ user base).",
    },
    {
      label: "Clinical care",
      text: "Built a 200+ mental health expert pool with Neuro & Psychiatry Hub and Sajida Foundation.",
    },
    {
      label: "Frontline training",
      text: "Built first-level responder capacity with UNICEF.",
    },
    {
      label: "Community",
      text: "Worked with BANCAT, the Bangladesh Cancer Aid Trust, across a community of 20K+ members.",
    },
    {
      label: "Workplace wellness",
      text: "Brought mental health support and training to teams at Beximco Pharma, Nuvista Pharma, Shanta Holdings, Synovia, Grameenphone, NEXT Ventures, 10 Minute School, and Ostad.",
    },
  ];

  return (
    <section id="partners" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="IV"
          title="Investors & Partners"
          aside="I built the products, pitched the room, and these investors said yes. I've been trying to deserve it ever since."
        />

        <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-8">Investors</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {backers.map((backer) => (
            <div key={backer.name}>
              <div className="h-28 bg-white border border-border flex items-center justify-center p-5 mb-3">
                <img src={backer.logo} alt={`${backer.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="text-xl font-medium">{backer.name}</h4>
              <p className="text-lg text-muted-foreground">{backer.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-display font-medium border-b border-border pb-2">Built with</h3>
        <dl>
          {collaborations.map((item) => (
            <div key={item.label} className="grid md:grid-cols-4 gap-2 md:gap-8 border-b border-border py-5">
              <dt className="eyebrow md:pt-1">{item.label}</dt>
              <dd className="md:col-span-3 text-lg">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default PartnersSection;
