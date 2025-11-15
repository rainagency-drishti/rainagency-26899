import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Instagram, Linkedin, Mail } from "lucide-react";
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

  useScrollAnimation(heroRef);

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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20">
        <section ref={heroRef} className="reveal container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div>
                <h1 className="text-7xl md:text-9xl font-display font-bold mb-8 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                  Let's Talk
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                  Have a project in mind? We'd love to hear about it. Send us a
                  message and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@rain.studio"
                      className="text-xl hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      hello@rain.studio
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <Link
                        to="https://instagram.com"
                        target="_blank"
                        className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                      <Link
                        to="https://linkedin.com"
                        target="_blank"
                        className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <Card className="p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      maxLength={1000}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
