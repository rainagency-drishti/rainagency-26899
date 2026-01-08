import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { ArrowRight, Droplets } from "lucide-react";

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
    <>
      <RainEffect />
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20 relative">
        <FloatingOrbs />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Intro */}
          <motion.header 
            className="max-w-3xl mx-auto text-center mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">What We Do</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display mb-8 text-primary">
              Services
            </h1>
            
            <p className="text-xl md:text-2xl italic text-foreground/80 mb-6">
              Creativity is not treated as a deliverable.<br />
              It is treated as a relationship.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Rain works closely with artists and culture-led brands to build cohesive worlds 
              through strategy, storytelling, and creative direction. Every partnership is 
              intentional, collaborative, and rooted in alignment.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="glass-card p-8 md:p-10 hover-lift transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="text-6xl md:text-7xl font-display text-primary/15 group-hover:text-primary/25 transition-colors duration-500">
                        {service.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                          {service.subtitle}
                        </p>
                        <h2 className="text-2xl md:text-3xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Items in compact layout */}
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 text-sm bg-primary/5 text-foreground/80 rounded-full border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      {/* Note */}
                      <p className="text-sm text-muted-foreground/70 italic pt-2 border-t border-border/30">
                        {service.note}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Closing Section */}
          <motion.section 
            className="max-w-2xl mx-auto text-center mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-foreground">
              Working With Rain
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                All clients begin with a preliminary call to ensure creative alignment.
              </p>
              <p>
                Rain works with a limited number of clients at a time to maintain depth, 
                focus, and creative integrity.
              </p>
              <p className="text-foreground/80 italic text-lg">
                If you're building something meaningful and want a partner who is 
                deeply invested — Rain may be the right fit.
              </p>
            </div>
            
            <Link to="/contact">
              <Button size="lg" className="group hover-lift">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Services;
