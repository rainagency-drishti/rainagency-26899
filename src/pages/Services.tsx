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
      title: "Ongoing Creative & Brand Management",
      subtitle: "Rain's Flagship Offering",
      description: "An ongoing creative partnership designed for artists and creatives who want their brand, visuals, and presence to feel fully aligned and thoughtfully built. This is for clients who are not just releasing work, but building something lasting.",
      items: [
        "Brand strategy and long-term creative vision",
        "Concept development for music, albums, visuals, and campaigns",
        "Content ideation and planning",
        "PR strategy and outreach to aligned platforms",
        "Acting as Creative Director when needed",
        "Creative direction across all touchpoints",
        "Social media strategy, management, and performance analysis",
        "Visual and aesthetic oversight",
        "Project management and execution support",
      ],
      note: "Offered on a monthly retainer basis. Pricing is determined by scope, duration of engagement, and level of creative involvement required. Limited availability to ensure depth, focus, and care.",
    },
    {
      number: "02",
      title: "Brand Strategy & Creative Direction",
      subtitle: "For Clarity and Creative Foundation",
      description: "For artists, creatives, or brands seeking clarity, direction, and a strong creative foundation. This service focuses on defining who you are, what you stand for, and how that translates visually and culturally.",
      items: [
        "Brand positioning and narrative",
        "Creative direction and aesthetic development",
        "Visual world-building",
        "Messaging and tone of voice guidance",
        "Campaign or launch strategy",
      ],
      note: "Offered as a project-based engagement. Ideal for those at a turning point or beginning of a new chapter.",
    },
    {
      number: "03",
      title: "Visual Concepts & Creative Execution",
      subtitle: "From Idea to Vision",
      description: "Bringing ideas to life through thoughtful planning and creative execution. This service covers the conceptual and logistical side of visual projects — from initial idea to final output.",
      items: [
        "Concept development for photo and video shoots",
        "Moodboards and creative decks",
        "Logistics planning and vendor sourcing",
        "Budget-conscious production support",
        "On-set creative direction",
      ],
      note: "Can be offered as a standalone project or as part of ongoing management.",
    },
    {
      number: "04",
      title: "Social Media & Cultural Strategy",
      subtitle: "Presence with Intention",
      description: "Social presence as an extension of the brand, not an afterthought. This service blends creative intuition with performance insight — ensuring every post, platform, and moment feels intentional and aligned.",
      items: [
        "Social media strategy and management",
        "Content ideation and storytelling",
        "Performance analysis and insights",
        "Platform-specific guidance",
        "Audience growth and engagement strategy",
      ],
      note: "Best suited as an add-on to ongoing management, but available as a standalone service.",
    },
    {
      number: "05",
      title: "PR Strategy & Visibility",
      subtitle: "Seen in the Right Spaces",
      description: "Being seen in the right places, by the right people. This service focuses on thoughtful PR outreach and strategic visibility — not mass exposure, but aligned placement.",
      items: [
        "Platform and outlet research",
        "Pitch writing and positioning",
        "Outreach to aligned publications and platforms",
        "Relationship building with key contacts",
        "Brand positioning for press",
      ],
      note: "Offered as a standalone project or add-on. Ideal for releases, launches, or visibility moments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <RainEffect />
      <Navigation />
      
      <main className="pt-32 pb-20 relative">
        <FloatingOrbs />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.header 
            className="mb-16"
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

          {/* Services List */}
          <div className="space-y-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-8 md:p-12 rounded-2xl hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Number */}
                    <div className="md:w-32 flex-shrink-0">
                      <span className="text-7xl md:text-8xl font-display font-bold text-primary/20">
                        {service.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      {/* Subtitle */}
                      <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                        {service.subtitle}
                      </span>
                      
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                        {service.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Items in two-column grid */}
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/70">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Note */}
                      <p className="text-muted-foreground italic leading-relaxed">
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