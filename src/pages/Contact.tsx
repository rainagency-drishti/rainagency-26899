import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(heroRef);
  useScrollAnimation(formRef);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase
        .from("contact_submissions")
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message
        }]);

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <RainEffect />
      <FloatingOrbs />
      <Navigation />

      <main className="pt-24 pb-20 relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="reveal container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">
              Get in Touch
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.9]">
              <span className="text-gradient">Let's create</span>
              <br />
              <span className="italic font-light text-muted-foreground">something together.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you're ready to start a project or just want to explore possibilities, 
              we'd love to hear from you. Every great collaboration begins with a conversation.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section ref={formRef} className="reveal container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Email
                </h3>
                <a
                  href="mailto:hello@rain.studio"
                  className="group flex items-center gap-3 text-xl hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span>hello@rain.studio</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Connect
                </h3>
                <div className="flex gap-3">
                  <Link
                    to="https://instagram.com"
                    target="_blank"
                    className="group p-4 glass-card hover:border-accent/50 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 group-hover:text-accent transition-colors" />
                  </Link>
                  <Link
                    to="https://linkedin.com"
                    target="_blank"
                    className="group p-4 glass-card hover:border-accent/50 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
                  </Link>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours. For urgent inquiries, 
                  please reach out directly via email.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                <h2 className="text-2xl font-display font-semibold mb-2">
                  Start a conversation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your vision.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        required
                        maxLength={100}
                        className="bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        maxLength={255}
                        className="bg-background/50 border-border/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={6}
                      required
                      maxLength={1000}
                      className="bg-background/50 border-border/50 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowUpRight className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
