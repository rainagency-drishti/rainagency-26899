import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Creative & Brand Management",
      description: "We become an extension of your team. Strategy, visuals, presence—handled with intention so you can stay focused on the work that matters.",
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
      description: "Identity work that goes beyond logos. We define what you stand for, how you show up, and the visual language that ties it all together.",
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
      description: "From napkin sketch to final delivery. We shepherd creative through every stage, keeping the vision intact when it counts most.",
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
      description: "Content that resonates, not just content that exists. We blend creative instinct with real data to build genuine connection.",
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
      description: "Placing you in the rooms that matter, in front of the people who need to see you. Strategic, intentional, effective.",
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
            className="mb-24 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              What We Do
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="text-gradient">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Close collaboration with artists and culture-forward brands. 
              We build worlds through strategy, storytelling, and creative direction—
              everything working in harmony.
            </p>
          </motion.header>

          {/* Services List */}
          <div className="space-y-16 md:space-y-24 mb-32">
            {services.map((service, index) => (
              <motion.article
                key={index}
                className="grid md:grid-cols-12 gap-8 md:gap-12 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-6xl md:text-7xl font-display font-bold text-primary/15">
                    {service.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="md:col-span-5">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Items */}
                <div className="md:col-span-5 md:pt-2">
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.section 
            className="grid md:grid-cols-2 gap-12 items-center border-t border-border pt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Let's talk about your project
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every partnership starts with a conversation. 
                No pitch decks required—just a real discussion about 
                where you're headed and how we might help you get there.
              </p>
            </div>
            <div className="md:text-right">
              <Link to="/contact">
                <Button size="lg" className="group hover-lift">
                  Start a Conversation
                  <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
