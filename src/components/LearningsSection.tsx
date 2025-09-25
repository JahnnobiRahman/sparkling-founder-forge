import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LearningsSection = () => {
  const learnings = [
    {
      title: "Product-Market Fit is Everything",
      insight: "You can have the best technology in the world, but if it doesn't solve a real problem that people are willing to pay for, it's worthless.",
      story: "Our first product was technically brilliant but solved a problem nobody had. We spent 6 months building features before talking to a single customer. The pivot taught me that customer discovery isn't a phase—it's a mindset.",
      category: "Product Strategy",
      impact: "Now I spend 30% of my time talking to users, even as a founder."
    },
    {
      title: "Team Culture Beats Individual Talent",
      insight: "A team of good people who work well together will outperform a team of superstars who don't.",
      story: "I once hired the 'best' engineers money could buy, but they couldn't collaborate. Productivity plummeted. When I focused on hiring for culture fit and communication skills alongside technical ability, everything changed.",
      category: "Leadership",
      impact: "Our team velocity increased 3x after restructuring around collaboration."
    },
    {
      title: "Fail Fast, Learn Faster",
      insight: "The goal isn't to avoid failure—it's to fail quickly and cheaply so you can learn and adapt.",
      story: "We spent $50K on a feature that took 3 months to build, only to find users didn't want it. Now we prototype everything in a week and test with real users before committing resources.",
      category: "Process",
      impact: "Feature success rate went from 20% to 80% with rapid prototyping."
    },
    {
      title: "Data Tells Stories, Not Just Numbers",
      insight: "Metrics without context are just numbers. The real insights come from understanding the human behavior behind the data.",
      story: "Our engagement metrics looked great, but users were actually confused and clicking randomly. Only when we combined analytics with user interviews did we understand the real experience.",
      category: "Analytics",
      impact: "User satisfaction increased 40% when we looked beyond vanity metrics."
    },
    {
      title: "Technical Debt is Real Debt",
      insight: "Just like financial debt, technical debt compounds. Pay it down early or pay exponentially more later.",
      story: "We rushed to market with 'temporary' solutions that lasted two years. When we finally had to scale, those shortcuts cost us 6 months of refactoring. Now we budget 20% of dev time for paying down technical debt.",
      category: "Engineering",
      impact: "Development velocity is now predictable and sustainable."
    },
    {
      title: "Communication is a Superpower",
      insight: "The best ideas mean nothing if you can't communicate them clearly to your team, investors, and customers.",
      story: "I lost a major investor because I couldn't explain our vision simply. I spent months learning to communicate complex ideas in simple terms. That skill has been more valuable than any technical knowledge.",
      category: "Communication",
      impact: "Raised Series A after improving my storytelling and presentation skills."
    }
  ];

  return (
    <section id="learnings" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Key <span className="text-gradient-gold">Learnings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every failure taught me something valuable. Every success reinforced a principle. 
            Here are the insights that have shaped how I build products and lead teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {learnings.map((learning, index) => (
            <Card key={index} className="glass-card p-8 h-full hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  {learning.category}
                </Badge>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-4">
                {learning.title}
              </h3>
              
              <div className="space-y-4">
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-primary font-medium italic">
                    "{learning.insight}"
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {learning.story}
                </p>
                
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-gold">Impact:</span> {learning.impact}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 mt-12 text-center">
          <h3 className="text-2xl font-display font-semibold mb-4">
            My Product Development Philosophy
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Build with empathy, iterate with purpose, and never stop learning. The best products 
            come from understanding that technology is just a tool—the real magic happens when 
            you solve meaningful problems for real people.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default LearningsSection;