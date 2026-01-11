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
      description: "This is for artists who want everything to feel connected—your brand, your visuals, your presence, your story. We become an extension of your team, handling the big picture so you can focus on creating. Think of it as having a creative director, strategist, and project manager rolled into one ongoing partnership.",
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
      description: "Sometimes you just need to get clear on who you are before you can move forward. This is a deep-dive into your identity—what you stand for, how you want to show up, and what that looks like visually and culturally. We build the foundation so everything else has somewhere to stand.",
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
      description: "You have an idea in your head—we help you pull it out and make it real. From early concepts and moodboards to on-set direction and final output, we handle the creative logistics so the vision stays intact from start to finish. No compromises, no watered-down results.",
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
      description: "Your social presence should feel like you, not like a marketing checklist. We approach every platform with creative intuition backed by real data—building content that connects, not just content that posts. It's about being present in a way that actually matters.",
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
      description: "Getting press isn't about volume—it's about placement. We focus on getting you in front of the right people, in the right spaces, at the right time. Thoughtful outreach, genuine relationship-building, and positioning that feels earned, not bought.",
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
            className="max-w-4xl mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Droplets className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">What We Do</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.9]">
              <span className="text-gradient">Services</span>
            </h1>
            
            <p className="text-2xl md:text-3xl italic text-foreground/80 mb-8 max-w-3xl leading-relaxed">
              Creativity isn't something we deliver.<br />
              It's something we build together.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We work closely with artists and culture-led brands to create cohesive worlds through strategy, storytelling, and hands-on creative direction. Every partnership is intentional, collaborative, and rooted in real alignment—not just a signed contract.
            </p>
          </motion.header>

          {/* Services List */}
          <div className="space-y-24 max-w-5xl">
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Service Header */}
                <div className="flex items-start gap-8 md:gap-12 mb-8">
                  <span className="text-7xl md:text-8xl font-display text-primary/10 group-hover:text-primary/20 transition-colors duration-500 leading-none">
                    {service.number}
                  </span>
                  <div className="pt-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                      {service.subtitle}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h2>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 pl-0 md:pl-24">
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.items.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 text-sm bg-primary/5 text-foreground/80 rounded-full border border-primary/10 hover:border-accent/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-accent italic">
                      {service.note}
                    </p>
                  </div>
                </div>
                
                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-16 border-b border-border/30" />
                )}
              </motion.article>
            ))}
          </div>

          {/* Closing Section */}
          <motion.section 
            className="mt-40 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              Working With Rain
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              <span className="text-gradient">Ready to start?</span>
              <br />
              <span className="italic font-light text-muted-foreground">Here's how it works.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every client starts with a preliminary call. It's not a sales pitch—it's a real conversation to see if there's creative alignment and if Rain is the right partner for what you're building.
                </p>
                <p>
                  We keep our roster intentionally small. That means fewer clients, deeper work, and partnerships where we're genuinely invested in your success—not just your project.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground/80 italic leading-relaxed">
                  If you're building something meaningful and want a partner who actually cares about getting it right—Rain might be exactly what you're looking for.
                </p>
                
                <Link to="/contact">
                  <Button size="lg" className="group hover-lift mt-4">
                    Start a Conversation
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Services;