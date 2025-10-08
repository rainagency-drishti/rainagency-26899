import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <header className="text-center mb-12 animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-display mb-4 text-primary">
                Let's Talk
              </h1>
              <p className="text-xl text-muted-foreground">
                We love hearing new ideas. Tell us what you're dreaming of, and let's make it real.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-card border-border focus:border-primary resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-12 text-center space-y-6">
              <p className="text-muted-foreground">
                You can also reach us directly at{" "}
                <a 
                  href="mailto:hello@theraingency.com" 
                  className="text-primary hover:text-secondary transition-colors underline"
                >
                  hello@theraingency.com
                </a>
              </p>

              <div className="flex justify-center gap-6 pt-4">
                <a
                  href="https://instagram.com/theraingency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/company/theraingency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
