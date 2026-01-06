import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <Navigation />
      <RainEffect />
      
      <main className="min-h-screen pt-32 pb-20 relative">
        <FloatingOrbs />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Page Header */}
          <motion.header 
            className="max-w-3xl mx-auto text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-display mb-8 text-gradient">
              About Rain
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Rain is a creative strategy and branding studio built primarily for musicians and artists who want to build something intentional, cohesive, and lasting.
              </p>
              <p>
                Rain exists to help creatives build worlds, not just releases. The focus is not only on how something looks, but on how it connects, how it's understood, and how it lives across visuals, content, and culture.
              </p>
              <p className="text-foreground/80 italic">
                Creativity here is approached with care, clarity, and long-term thinking.
              </p>
            </div>
          </motion.header>

          {/* The Mission & The Name */}
          <motion.section 
            className="max-w-4xl mx-auto mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-primary">
                The Mission & The Name
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Rain was created in response to the pressure creatives often face to move fast, chase trends, and constantly perform.
                </p>
                <p>
                  The mission of Rain is to protect the art while giving it structure. Strategy should support creativity, not overpower it. Growth should feel natural, not forced.
                </p>
                <p>
                  The name Rain reflects this belief. Rain arrives without rushing, creates space, and allows things to grow in their own time. That is how this studio approaches creative work.
                </p>
                <p className="text-foreground/80 italic">
                  Rain is rooted in cultural awareness, inclusivity, and making space for underrepresented voices. There is room here for nuance, individuality, and depth.
                </p>
              </div>
            </div>
          </motion.section>

          {/* The Approach */}
          <motion.section 
            className="max-w-4xl mx-auto mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-primary">
                The Approach
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Rain works as a creative partner, not a traditional agency.
                </p>
                <p>
                  The studio stays intentionally small, working with a limited number of clients to ensure focus, trust, and meaningful collaboration. Work often spans creative strategy, brand management, creative direction, social and content strategy, and PR support — all shaped around each client's vision.
                </p>
                <p>
                  While Rain primarily works with musicians and artists, it also partners with brands and founders who are building something culturally intentional and values-driven.
                </p>
              </div>
            </div>
          </motion.section>

          {/* About the Founder */}
          <motion.section 
            className="max-w-4xl mx-auto mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  About the Founder
                </p>
                <h2 className="text-3xl md:text-4xl font-display text-primary">
                  Drishti Das
                </h2>
                <p className="text-lg text-accent mt-2">Founder & Creative Director</p>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Drishti brings together strategic thinking and creative intuition, with a background in marketing, storytelling, and startup work. Her experience includes growing a client's social presence to over 140K+ followers, driving creative culture through IU Innovates, and coaching early-stage ventures on brand and marketing strategy.
                </p>
                <p>
                  She approaches every project as a collaborator, staying closely involved from vision to execution. Rain reflects her values: intentionality, cultural awareness, and care for the people behind the work.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Working With Rain */}
          <motion.section 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-gradient">
              Working With Rain
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                Rain works with a limited number of clients at a time to maintain depth, focus, and creative integrity.
              </p>
              <p>
                All new clients begin with a preliminary call to ensure alignment before moving forward.
              </p>
              <p className="text-foreground/80 italic">
                If you're building something meaningful and want a creative partner who is thoughtful, honest, and deeply invested, Rain may be the right fit.
              </p>
            </div>
            
            <Link to="/contact">
              <Button size="lg" className="group hover-lift text-lg px-10 py-6">
                Let's Make It Rain
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;