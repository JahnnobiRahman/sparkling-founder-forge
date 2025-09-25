import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Twitter, Github, MapPin, Calendar } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "hello@yourname.com",
      description: "Best for detailed discussions and partnerships"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "@yourlinkedin",
      description: "Let's connect professionally"
    },
    {
      icon: Twitter,
      title: "Twitter",
      subtitle: "@yourtwitter",
      description: "Follow my journey and thoughts"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      subtitle: "calendly.com/yourname",
      description: "Book a 30-minute chat"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Always open to discussing new opportunities, sharing insights, or just having 
            a conversation about building great products. Reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8">Get in Touch</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <method.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-1">{method.title}</h4>
                  <p className="text-primary text-sm mb-2">{method.subtitle}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Currently Based</span>
              </div>
              <p className="text-muted-foreground">
                San Francisco, CA • Open to remote collaboration worldwide
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="bg-background/50 border-card-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="bg-background/50 border-card-border"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="bg-background/50 border-card-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me more..."
                  rows={5}
                  className="bg-background/50 border-card-border resize-none"
                />
              </div>
              
              <Button className="btn-premium w-full text-lg py-3 rounded-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-card-border">
          <p className="text-muted-foreground mb-4">
            Thanks for visiting my portfolio. Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;