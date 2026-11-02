import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const PressSection = () => {
  const videos = [
    {
      id: "ULY3ExzhQlc",
      title: "Using AI to Prioritise Mental Health in Asia",
      outlet: "One Young World",
      detail: "Speech · 2025",
    },
    {
      id: "yuAOHDZfLFg",
      title: "Colors of Emotion 2.0, Special Episode",
      outlet: "Relaxy × Berger Paints Bangladesh",
      detail: "Podcast · 2025 · Bangla",
    },
    {
      id: "r6MpsT8E4Cc",
      title: "U.S. Alumni on International Women's Day",
      outlet: "U.S. Embassy Dhaka",
      detail: "Feature · 2024",
    },
    {
      id: "9rub6DhQiwI",
      title: "Behind the Journey, Episode 97",
      outlet: "Youth School for Social Entrepreneurs",
      detail: "Live session · 2023 · Bangla",
    },
    {
      id: "89BQikVWY8M",
      title: "Ranga Shokal Talk Show",
      outlet: "Maasranga Television",
      detail: "TV interview · 2023 · Bangla",
    },
    {
      id: "VmZ3HQTogws",
      title: "Relaxy Makes the Forbes Under 30 List",
      outlet: "Ajker Patrika",
      detail: "Video feature · 2023 · Bangla",
    },
  ];

  const international = [
    {
      outlet: "Forbes",
      title: "30 Under 30 Asia profile: Jahnnobi Rahman",
      year: "2023",
      url: "https://www.forbes.com/profile/jahnnobi-rahman/",
    },
    {
      outlet: "Generation Unlimited",
      title: "From feeling isolated to making mental healthcare accessible",
      year: "2023",
      url: "https://www.generationunlimited.org/stories/feeling-isolated-making-mental-healthcare-accessible",
    },
    {
      outlet: "Generation Unlimited",
      title: "The young Bangladeshi entrepreneurs who care about mental health",
      year: "2022",
      url: "https://www.generationunlimited.org/stories/young-bangladeshi-entrepreneurs-who-care-about-mental-health",
    },
    {
      outlet: "Bangladeshi Trailblazers",
      title: "Beyond the Burnout (podcast)",
      year: "2025",
      url: "https://podcasters.spotify.com/pod/show/bangladeshitrailblazers/episodes/Beyond-the-Burnout-Jahnnobi-Rahman-e3936l9",
    },
    {
      outlet: "ExitStack",
      title: "Founder's Spotlight: Jahnnobi Rahman",
      year: "2025",
      url: "https://www.exitstack.co/posts/founders-spotlight-jahnnobi-rahman",
    },
    {
      outlet: "Startuprise",
      title: "Relaxy Startup Story: personal challenge to business",
      year: "2024",
      url: "https://startuprise.org/relaxy-founder-jahnnobi-rahman-story/",
    },
  ];

  const bangladesh = [
    {
      outlet: "Dhaka Tribune",
      title: "‘Everyone is entitled to rapid attention and high-quality mental healthcare resources’ (interview)",
      year: "2023",
      url: "https://www.dhakatribune.com/interviews-and-dialogue/314654/%E2%80%98everyone-is-entitled-to-rapid-attention-and",
    },
    {
      outlet: "The Daily Star",
      title: "Relaxy: the mental health platform that's here to help",
      year: "2023",
      url: "https://www.thedailystar.net/tech-startup/news/relaxy-the-mental-health-platform-thats-here-help-3341696",
    },
    {
      outlet: "The Daily Star",
      title: "Relaxy raises pre-seed funding from Sajida Foundation",
      year: "2023",
      url: "https://www.thedailystar.net/bot-business/news/relaxy-raises-pre-seed-funding-sajida-foundation-3301866",
    },
    {
      outlet: "Prothom Alo",
      title: "7 Bangladeshis named in Forbes Asia 30 Under 30 list",
      year: "2023",
      url: "https://en.prothomalo.com/youth/44qu25varu",
    },
    {
      outlet: "Prothom Alo",
      title: "Huawei brings tech competition for Bangladeshi women",
      year: "2023",
      url: "https://en.prothomalo.com/corporate/local/bqy4siwu6v",
    },
    {
      outlet: "Dhaka Tribune",
      title: "What we know about the 7 Bangladeshis on Forbes' list",
      year: "2023",
      url: "https://www.dhakatribune.com/bangladesh/2023/05/19/what-we-know-about-the-7-bangladeshis-on-forbes-list",
    },
  ];

  const alsoCovered = [
    { outlet: "BSS", url: "https://www.bssnews.net/news/126122" },
    { outlet: "UNB", url: "https://unb.com.bd/category/Bangladesh/seven-bangladeshis-named-in-forbes-30-under-30-class-of-asia-2023/115579" },
    { outlet: "New Age", url: "https://www.newagebd.net/article/201990/seven-bangladeshis-named-in-forbes-asia-30-under-30-list" },
    { outlet: "Samakal", url: "https://en.samakal.com/bangladesh/170819806/-bangladeshis-on-forbes--under--asia-list" },
    { outlet: "The Daily Star Bangla", url: "https://bangla.thedailystar.net/youth/triumph-of-youth/news-479741" },
  ];

  const pressColumns = [
    { heading: "International", items: international },
    { heading: "Bangladesh", items: bangladesh },
  ];

  return (
    <section id="press" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="V"
          title="Press & Media"
          aside="The receipts, in case you assumed I made all of this up. Reasonable. I'd check too."
        />

        <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-8">
          Talks & Interviews
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="aspect-video w-full object-cover border border-border mb-3"
              />
              <p className="eyebrow mb-1">{video.detail}</p>
              <h4 className="text-xl font-medium group-hover:text-primary">{video.title}</h4>
              <p className="text-muted-foreground italic">{video.outlet}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mb-12">
          {pressColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-2xl font-display font-medium border-b border-border pb-2 mb-4">
                {column.heading}
              </h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item.url} className="border-b border-border py-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
                      <p className="eyebrow mb-1">{item.outlet} · {item.year}</p>
                      <p className="text-lg group-hover:text-primary">
                        {item.title} <ExternalLink className="inline w-4 h-4 text-muted-foreground" />
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground">
          <span className="eyebrow mr-3">Also covered by</span>
          {alsoCovered.map((item, index) => (
            <span key={item.url}>
              {index > 0 && " · "}
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-quiet">
                {item.outlet}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default PressSection;
