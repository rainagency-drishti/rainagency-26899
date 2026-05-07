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
      title: "Ongoing Creative & Brand Partnership",
      subtitle: "Rain's Flagship Offering",
      description: "An ongoing creative relationship for independent artists who are ready to build something real and lasting. Not just release music, but establish a presence, a narrative, and a world that's entirely their own.",
      items: [
        "Brand strategy and long-term creative vision",
        "Artist narrative and identity development",
        "Content strategy and social media management",
        "PR strategy and media outreach",
        "Creative direction across all touchpoints",
        "Concept development for singles, projects, and campaigns",
        "Visual and aesthetic oversight",
        "Opportunity development for shows, features, and visibility placements",
      ],
      note: "Offered on a monthly retainer. Availability is limited to ensure every client gets the depth and attention they deserve. Pricing is based on scope and level of involvement.",
    },
    {
      number: "02",
      title: "Brand Strategy & Artist Development",
      subtitle: "For Clarity and Creative Foundation",
      description: "For artists at the beginning of their journey or at a turning point. Who you are, what you stand for, and how that translates into everything you put out.",
      items: [
        "Brand positioning and narrative development",
        "Visual world-building and aesthetic direction",
        "Messaging and tone of voice",
        "Target audience definition",
        "Brand guidelines document",
      ],
      note: "Offered as a standalone project. Pricing is determined by scope. The foundation everything else builds on.",
    },
    {
      number: "03",
      title: "Creative Direction & Production",
      subtitle: "From Idea to Execution",
      description: "Bringing a creative vision to life from concept to delivered assets. Every detail handled with intention.",
      items: [
        "Shoot concept and shot list development",
        "Location scouting and booking",
        "Talent coordination including photographer, videographer, hair, makeup, and wardrobe",
        "On-set creative direction and production",
        "Post-production oversight and delivery",
      ],
      note: "Offered as a standalone project. Pricing is determined by scope and production needs.",
    },
    {
      number: "04",
      title: "Content Strategy & Social Media Management",
      subtitle: "For Your Social Presence",
      description: "Consistent, strategic, and on-brand social media presence built around who you are as an artist. No generic content, everything is intentional.",
      items: [
        "Platform-specific strategy",
        "Monthly content calendar",
        "Post scheduling and publishing",
        "Community engagement",
        "Monthly performance tracking and reporting",
      ],
      note: "Offered as a standalone monthly service or as part of a retainer. Pricing is based on platforms and posting frequency.",
    },
    {
      number: "05",
      title: "PR & Media Outreach",
      subtitle: "For Visibility and Reach",
      description: "Getting your music and your name in front of the right people. From crafting your story to building the relationships that open doors.",
      items: [
        "EPK creation and customization per release",
        "Media, blog, and playlist contact outreach",
        "Press and placement tracking",
        "Follow-up cadence and relationship management",
      ],
      note: "Offered as a standalone project or as part of a retainer. Pricing is based on scope and campaign size.",
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
              Every service is built around one thing. Making sure the artist's world is as real and intentional as their music.
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
            <h2 className="text-3xl md:text-4xl font-display font-black mb-8">
              How it works
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-10">
              <p>Every new partnership starts with a call to make sure we're the right fit.</p>
              <p>Rain works with a limited number of clients at a time. Depth over volume.</p>
              <p>Pricing is scoped to the project. Reach out and we'll figure it out together.</p>
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