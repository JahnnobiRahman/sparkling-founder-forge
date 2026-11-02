import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const LearningsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const learnings = [
    {
      title: "Adoption Without Revenue Isn't Success",
      insight:
        "Early traction can feel like validation, but if no one pays, you don't have a business, you have a hobby.",
      story:
        "Our first game hit 1,000+ users in 3 days. Exciting, but not a cent in revenue. We'd optimized for excitement, not economics. That experience reset my instincts toward value creation over vanity metrics.",
      category: "Product-Market-Fit",
      impact:
        "Now I probe willingness to pay during discovery and treat downloads as vanity until conversion proves value.",
      details:
        "Current approach: (1) price testing in interviews, (2) pre-order/paywall smoke tests, (3) monetization dashboard (activation → conversion → retention → ARPU), (4) kill ideas that don't move the North Star."
    },
    {
      title: "Safety by Design (Riri's Self-Harm Protocol)",
      insight:
        "Responsible AI is a product requirement, not a nice-to-have. Especially in mental health.",
      story:
        "I coded, tested, and debugged myself the self-harm safety protocol for Riri (our 24/7 AI companion). I coded alongside AI engineers while partnering with psychiatrists and clinical researchers. We built tiered fallbacks, escalation paths, and legal/ethical guardrails.",
      category: "Trust & Safety",
      impact:
        "Shipped a clinically credible, compliant experience that users trust (9.4 NPS).",
      details:
        "What worked: red flag classifiers + human-in-the-loop, geo-aware resources, idempotent fallbacks, auditable logs, and clear UX for crisis routing. Result: safer interactions and reduced risk for the business."
    },
    {
      title: "Partnerships Are Distribution Engines",
      insight:
        "The right partners can shortcut years of acquisition work if the value exchange is clear.",
      story:
        "We partnered with Grameenphone & Robi—Bangladesh’s largest telcos to reach new audiences via carrier integrations and co-marketing.",
      category: "GTM / Partnerships",
      impact:
        "Extended access to 56M+ young people; adoption grew ~40% and subscribers passed 90K+.",
      details:
        "Playbook: (1) shared goals & success metrics, (2) lightweight billing & identity flows, (3) co-branded education, (4) channel-specific pricing experiments, (5) joint dashboards to keep incentives aligned."
    },
    {
      title: "Fail Fast, Learn Faster",
      insight:
        "The goal isn’t to avoid failure, it’s to fail quickly and cheaply so you can learn and adapt.",
      story:
        "We once spent $20K and 3 months on a feature users didn’t want. Now we prototype in a week and test with real users before investing heavily.",
      category: "Process",
      impact:
        "Feature success rate improved from ~20% → ~80% by adopting rapid prototyping.",
      details:
        "Experiment template: problem statement • riskiest assumption • test method • success criteria • timebox. If criteria aren’t met, iterate or stop. Evidence > opinions."
    },
    {
      title: "Data Tells Stories, Not Just Numbers",
      insight:
        "Metrics without context mislead. The truth lives where analytics meets user research.",
      story:
        "Engagement looked strong, but session replays + interviews revealed confusion and rage clicking. Fixes came from understanding the ‘why,’ not just the ‘what.’",
      category: "Analytics",
      impact:
        "User satisfaction +40% and day-1 retention at 82% by pairing dashboards with qualitative insights.",
      details:
        "Cadence: North Star + guardrails (activation, retention, CSAT/NPS), Mixpanel/GA4 cohorts, session replays, and 5 interviews per release to validate intent."
    },
    {
      title: "Technical Debt Is Real Debt",
      insight:
        "Debt compounds; pay it down early or pay exponentially later.",
      story:
        "‘Temporary’ shortcuts lingered two years and cost six months of refactoring when scaling.",
      category: "Engineering Quality",
      impact:
        "Predictable delivery velocity; fewer regressions; smoother scale-ups.",
      details:
        "System: debt register, debt tags in PRs, every 5th sprint for platform work, performance budgets in CI, and ADRs for reversible vs. irreversible decisions."
    },
    {
      title: "Communication Is a Superpower",
      insight:
        "Great ideas mean nothing if you can’t explain them clearly to teammates, customers, and investors.",
      story:
        "I once lost an investor because I over-explained the tech and under-explained the value. I rebuilt my storytelling muscle.",
      category: "Leadership",
      impact:
        "Raised capital (incl. $300K VC) and aligned cross-functional teams faster with clearer narratives.",
      details:
        "Tactics: problem → insight → plan → ask; narrative memos over slide-only reviews; ‘explain to a non-technical friend’ test before high-stakes meetings."
    },
    {
      title: "Agile, With Room for Flow",
      insight:
        "Ceremonies create cadence; Kanban flow keeps small improvements shipping continuously.",
      story:
        "We ran 2-week Scrum sprints for big work (Riri, gamification) and a Kanban lane for UX fixes, analytics, and bugs.",
      category: "Execution",
      impact:
        "Shipped reliably while protecting focus on the highest leverage work.",
      details:
        "Tooling: Jira boards (epics → stories → tasks), sprint goals, DOR/DoD, and retros that end with one improvement we actually adopt next sprint."
    },
    {
      title: "Lifecycle Marketing Is a Product",
      insight:
        "Adoption and retention are built through timely, relevant, multi-channel nudges.",
      story:
        "We treated lifecycle like a feature set, not just campaigns: onboarding education, habit loops, and win-back paths.",
      category: "Growth",
      impact:
        "400K+ users, 90K+ subscribers, and 8.5 NPS supported by consistent lifecycle touchpoints.",
      details:
        "Stack: Mixpanel & GA4 for cohorts, Firebase/CleverTap for push/in-app, Mailchimp for email, Canva, Figma for fast A/B creatives. North Star + guardrails to avoid spammy growth."
    }
  ];

  return (
    <section id="learnings" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="V"
          title="Lessons Learned"
          aside="Tuition paid in full, mostly in mistakes. You may have these for free."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {(showAll ? learnings : learnings.slice(0, 4)).map((learning, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="glass-card p-8 h-full hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gold/20 text-gold border-gold/30">
                      {learning.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {learning.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-primary/10 border-l-4 border-primary p-4 ">
                      <p className="text-primary italic text-lg">
                        “{learning.insight}”
                      </p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {learning.story}
                    </p>
                    <div className="bg-background/50 rounded-lg p-4 flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">
                        <span className="text-gold">Impact:</span> {learning.impact}
                      </p>
                      <Button variant="outline" className="shrink-0 ml-3 border-card-border">
                        Read more
                      </Button>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{learning.title}</DialogTitle>
                  <DialogDescription>
                    <span className="italic">“{learning.insight}”</span>
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{learning.story}</p>
                  <p className="text-sm">
                    <span className="text-gold font-medium">Impact:</span> {learning.impact}
                  </p>
                  {learning.details && (
                    <div className="max-w-none text-sm leading-relaxed">
                      {learning.details}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        {learnings.length > 3 && (
          <div className="text-center mt-8">
            <Button className="btn-premium text-lg px-8 py-4" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Enough wisdom" : "More expensive lessons"}
            </Button>
          </div>
        )}

        <blockquote className="text-2xl md:text-3xl italic text-center max-w-4xl mx-auto mt-16">
          Great products start with human understanding, are refined through evidence, and scaled with discipline.
        </blockquote>
      </div>
    </section>
  );
};

export default LearningsSection;
