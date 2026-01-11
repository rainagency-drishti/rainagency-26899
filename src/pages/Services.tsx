import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { ArrowUpRight, Droplets } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Creative & Brand Management",
      description: "Full-spectrum creative partnership for artists who want everything to feel connected. We handle strategy, visuals, and presence while you focus on creating.",
      items: [
        "Brand strategy & vision",
        "Creative direction",
        "Social media management",
        "Content planning",
        "PR strategy",
      ],
    },
    {
      number: "02",
      title: "Brand Strategy & Direction",
      description: "Deep-dive into your identity—what you stand for, how you show up, and what that looks like visually and culturally.",
      items: [
        "Brand positioning",
        "Visual world-building",
        "Messaging guidance",
        "Campaign strategy",
      ],
    },
    {
      number: "03",
      title: "Visual Concepts & Execution",
      description: "From early concepts to final output, we handle creative logistics so the vision stays intact from start to finish.",
      items: [
        "Concept development",
        "Moodboards & decks",
        "Production planning",
        "On-set direction",
      ],
    },
    {
      number: "04",
      title: "Social & Cultural Strategy",
      description: "Building content that connects, not just content that posts. Creative intuition backed by real data.",
      items: [
        "Social strategy",
        "Content storytelling",
        "Performance insights",
        "Growth strategy",
      ],
    },
    {
      number: "05",
      title: "PR & Visibility Strategy",
      description: "Getting you in front of the right people, in the right spaces, at the right time.",
      items: [
        "Outlet research",
        "Pitch writing",
        "Relationship building",
        "Press positioning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <RainEffect />
      <Navigation />
      
      <main className="pt-32 pb-20 relative">
        <FloatingOrbs />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Intro */}
          <motion.header 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">What We Do</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              We work closely with artists and culture-led brands to create cohesive worlds through strategy, storytelling, and creative direction.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="grid gap-8 md:gap-10 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 md:p-10 rounded-2xl hover:border-accent/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  <span className="text-5xl md:text-6xl font-display text-primary/20">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 text-sm bg-primary/5 text-foreground/70 rounded-full border border-primary/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Every partnership starts with a conversation to see if we're the right fit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group hover-lift">
                Start a Conversation
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;