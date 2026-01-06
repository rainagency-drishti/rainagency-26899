import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Ongoing Creative & Brand Management",
      subtitle: "Rain's flagship offering",
      description: "An ongoing creative partnership designed for artists and creatives who want their brand, visuals, and presence to feel fully aligned and thoughtfully built. This is for clients who are not just releasing work, but building something lasting.",
      items: [
        "Brand strategy and long-term creative vision",
        "Creative direction across all touchpoints",
        "Concept development for music, albums, visuals, and campaigns",
        "Social media strategy, management, and performance analysis",
        "Content ideation and planning",
        "Visual and aesthetic oversight",
        "PR strategy and outreach to aligned platforms",
        "Project management and execution support",
        "Acting as Creative Director when needed",
      ],
      pricing: "Offered on a monthly retainer basis. Pricing is determined by scope, duration of engagement, and level of creative involvement required. Limited availability to ensure depth, focus, and care.",
    },
    {
      number: "02",
      title: "Brand Strategy & Creative Direction",
      subtitle: "For clarity and creative foundation",
      description: "For artists, creatives, or brands seeking clarity, direction, and a strong creative foundation. This service focuses on defining who you are, what you stand for, and how that translates visually and culturally.",
      items: [
        "Brand positioning and narrative",
        "Creative direction and aesthetic development",
        "Visual world-building",
        "Messaging and tone guidance",
        "Campaign or launch strategy",
      ],
      pricing: "Offered as a project-based engagement. Pricing varies based on project type, timeline, and creative scope.",
    },
    {
      number: "03",
      title: "Visual Concepts & Creative Execution",
      subtitle: "From idea to tangible vision",
      description: "Rain helps transform ideas into tangible visuals through thoughtful planning and execution. From initial concept to final output, Rain supports the creative process while maintaining the integrity of the vision.",
      items: [
        "Concept development for music videos, visuals, and photoshoots",
        "Moodboards and creative direction decks",
        "Logistics planning and sourcing",
        "Budget-conscious production support",
        "On-set or remote creative direction",
        "Acting as Director when needed",
      ],
      pricing: "Offered as project-based work or as part of an ongoing partnership. Pricing is determined by project complexity, production needs, and level of involvement.",
    },
    {
      number: "04",
      title: "Social & Cultural Strategy",
      subtitle: "Presence with intention",
      description: "Social presence is an extension of the brand, not an afterthought. Rain approaches social and content strategy through both creative intuition and performance insight, ensuring each platform feels intentional and aligned.",
      items: [
        "Social media strategy and management",
        "Content ideation and storytelling",
        "Performance analysis and insights",
        "Platform-specific guidance",
        "Visual consistency across channels",
        "Growth and engagement strategy",
      ],
      pricing: "Pricing varies based on platform coverage, posting cadence, and depth of strategy required. Often paired with ongoing creative management or brand strategy work.",
    },
    {
      number: "05",
      title: "PR & Visibility Strategy",
      subtitle: "Seen in the right spaces",
      description: "Rain supports clients in being seen in the right spaces, by the right audiences. This service focuses on thoughtful outreach and alignment rather than mass exposure.",
      items: [
        "Platform and outlet research",
        "Pitch writing and positioning",
        "Outreach to radio, podcasts, magazines, and cultural platforms",
        "Follow-ups and relationship building",
        "Brand positioning for press",
      ],
      pricing: "Pricing is determined by outreach scope, timeline, and level of ongoing support. Best suited as an add-on to ongoing or strategy-based engagements.",
    },
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Page Intro */}
          <motion.header 
            className="max-w-3xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-display mb-8 text-primary">
              Services
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl italic text-foreground/80">
                At Rain, creativity is not treated as a deliverable.<br />
                It is treated as a relationship.
              </p>
              <p>
                Rain works closely with artists, creatives, and culture-led brands to build cohesive worlds through strategy, storytelling, and creative direction. Every partnership is intentional, collaborative, and rooted in alignment.
              </p>
              <p>
                Rain offers both ongoing creative partnerships and project-based work. All clients begin with a preliminary call to ensure shared vision, values, and creative chemistry.
              </p>
            </div>
          </motion.header>

          {/* Services List */}
          <div className="space-y-16 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-elevated bg-card overflow-hidden hover-lift">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col gap-8">
                      {/* Header */}
                      <div className="flex items-start gap-6">
                        <span className="text-5xl md:text-6xl font-display text-primary/20">
                          {service.number}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                            {service.subtitle}
                          </p>
                          <h2 className="text-3xl md:text-4xl font-display text-primary">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description}
                      </p>

                      {/* Items */}
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {service.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                            <span className="text-foreground/90">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing Note */}
                      <div className="pt-6 border-t border-border/50">
                        <p className="text-muted-foreground italic leading-relaxed">
                          {service.pricing}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Closing Section */}
          <motion.section 
            className="max-w-3xl mx-auto text-center mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-primary">
              Working With Rain
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                All new clients begin with a preliminary call to ensure creative alignment and shared vision.
              </p>
              <p>
                Pricing across all services is customized and based on project type, length of engagement, and the amount of creative and strategic work required.
              </p>
              <p>
                Rain works with a small number of clients at a time to maintain intentionality, depth, and creative integrity.
              </p>
              <p className="text-foreground/80 italic">
                If you're building something meaningful and want a creative partner who is deeply invested in the process, Rain may be the right fit.
              </p>
            </div>
            
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6">
                Let's Make It Rain
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
