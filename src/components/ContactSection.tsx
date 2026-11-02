import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useState } from "react";


// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
      const serviceId = 'service_99omyvq'; // Get this from EmailJS > Email Services
      const templateId = 'template_71y605m'; // Get this from EmailJS > Email Templates
      const publicKey = 'aspMFmSkqTx9SG5Tb'; // Get this from EmailJS > Account

      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init('aspMFmSkqTx9SG5Tb');

      // Send the email using EmailJS
    
      await emailjs.send('service_99omyvq', 'template_71y605m', {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'jahnnobirahman230@gmail.com', // Your email address
      });
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again or contact me directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "jahnnobirahman230@gmail.com",
      href: "mailto:jahnnobirahman230@gmail.com",
      description: "For partnerships and proper discussions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "in/jahnnobi-rahman",
      href: "https://www.linkedin.com/in/jahnnobi-rahman/",
      description: "For networking, in its natural habitat"
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "JahnnobiRahman",
      href: "https://github.com/JahnnobiRahman",
      description: "For proof that I still write code"
    },
    {
      icon: Calendar,
      title: "Office Hours",
      subtitle: "calendly.com/jahnnobi/30min",
      href: "https://calendly.com/jahnnobi/30min",
      description: "Thirty minutes. Bring a real question"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          numeral="VII"
          title="Correspondence"
          aside="Opportunities, ideas, and well-argued disagreements are all welcome. “Quick question” is rarely either."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8">Get in Touch</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="glass-card p-6 hover:border-primary transition-colors cursor-pointer">
                    <method.icon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-1">{method.title}</h4>
                    <p className="text-primary mb-2 break-words">{method.subtitle}</p>
                    <p className="text-muted-foreground">{method.description}</p>
                  </Card>
                </a>
              ))}
            </div>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Currently Based</span>
              </div>
              <p className="text-muted-foreground">
                Dhaka, Bangladesh. Open to remote collaboration worldwide, time zones permitting.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    {...register("name")}
                    placeholder="Your name"
                    className="bg-background/50 border-card-border"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register("email")}
                    placeholder="your@email.com"
                    className="bg-background/50 border-card-border"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  {...register("subject")}
                  placeholder="Make me curious"
                  className="bg-background/50 border-card-border"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  {...register("message")}
                  placeholder="The longer version"
                  rows={5}
                  className="bg-background/50 border-card-border resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full text-lg py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-card-border">
          <p className="text-muted-foreground mb-4">
            © Jahnnobi Rahman. No machines were harmed. A few were gently asked how they were feeling.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/JahnnobiRahman" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/jahnnobi-rahman/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            
            <a href="mailto:jahnnobirahman230@gmail.com">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;