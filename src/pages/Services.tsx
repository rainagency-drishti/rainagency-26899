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
      subtitle: "Rain's flagship offering",
      description: "An ongoing creative partnership for artists who want their brand, visuals, and presence to feel fully aligned. This is for clients who are building something lasting — not just releasing work.",
      items: [
        "Brand strategy & long-term vision",
        "Creative direction across touchpoints",
        "Concept development for releases & campaigns",
        "Social media strategy & management",
        "Content ideation & planning",
        "Visual & aesthetic oversight",
        "PR strategy & aligned outreach",
        "Project management support",
      ],
      note: "Monthly retainer. Limited availability.",
    },
    {
      number: "02",
      title: "Brand Strategy & Direction",
      subtitle: "For clarity and foundation",
      description: "For artists and brands seeking clarity on who they are, what they stand for, and how that translates visually and culturally. A strong creative foundation to build from.",
      items: [
        "Brand positioning & narrative",
        "Creative direction & aesthetic",
        "Visual world-building",
        "Messaging & tone guidance",
        "Campaign or launch strategy",
      ],
      note: "Project-based engagement.",
    },
    {
      number: "03",
      title: "Visual Concepts & Execution",
      subtitle: "From idea to vision",
      description: "Transforming ideas into tangible visuals through thoughtful planning and execution. From initial concept to final output, maintaining the integrity of the vision throughout.",
      items: [
        "Concept development for visuals & shoots",
        "Moodboards & creative decks",
        "Logistics planning & sourcing",
        "Budget-conscious production",
        "On-set creative direction",
      ],
      note: "Project-based or ongoing.",
    },
    {
      number: "04",
      title: "Social & Cultural Strategy",
      subtitle: "Presence with intention",
      description: "Social presence as an extension of the brand, not an afterthought. Creative intuition meets performance insight — every platform intentional and aligned.",
      items: [
        "Social strategy & management",
        "Content ideation & storytelling",
        "Performance analysis & insights",
        "Platform-specific guidance",
        "Growth & engagement strategy",
      ],
      note: "Often paired with ongoing work.",
    },
    {
      number: "05",
      title: "PR & Visibility Strategy",
      subtitle: "Seen in the right spaces",
      description: "Being seen in the right spaces, by the right audiences. Thoughtful outreach and alignment rather than mass exposure.",
      items: [
        "Platform & outlet research",
        "Pitch writing & positioning",
        "Outreach to aligned publications",
        "Relationship building",
        "Brand positioning for press",
      ],
      note: "Best as an add-on.",
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
            
            <p className="text-2xl md:text-3xl font-display text-foreground mb-4 max-w-3xl">
              Creativity is not treated as a deliverable.
              It is treated as a relationship.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Rain works closely with artists and culture-led brands to build cohesive worlds 
              through strategy, storytelling, and creative direction. Every partnership is 
              intentional, collaborative, and rooted in alignment.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="space-y-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-8 md:p-10 rounded-2xl hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Number */}
                    <div className="md:w-24 flex-shrink-0">
                      <span className="text-6xl md:text-7xl font-display font-bold text-primary/20">
                        {service.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <span className="text-sm uppercase tracking-widest text-muted-foreground">
                          {service.subtitle}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-1">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 max-w-2xl">
                        {service.description}
                      </p>
                      
                      {/* Items in compact layout */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.items.map((item, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-sm bg-primary/5 text-foreground/70 rounded-full border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      {/* Note */}
                      <p className="text-sm text-accent italic">
                        {service.note}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Section */}
          <motion.section 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Working With Rain
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-10">
              <p>
                All clients begin with a preliminary call to ensure creative alignment.
              </p>
              <p>
                Rain works with a limited number of clients at a time to maintain depth, 
                focus, and creative integrity.
              </p>
              <p>
                If you're building something meaningful and want a partner who is 
                deeply invested — Rain may be the right fit.
              </p>
            </div>
            
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
