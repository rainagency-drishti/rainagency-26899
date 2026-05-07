import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(heroRef);
  useScrollAnimation(missionRef);
  useScrollAnimation(approachRef);
  useScrollAnimation(founderRef);
  useScrollAnimation(ctaRef);

  return (
    <div className="min-h-screen bg-background relative transition-colors duration-500">
      <RainEffect />
      <FloatingOrbs />
      <Navigation />
      
      <main className="pt-24 pb-20 relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="reveal container mx-auto px-6 pt-20 pb-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6 animate-fade-in">
              The Studio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 leading-[0.9]">
              <span className="text-gradient">Building worlds,</span>
              <br />
              <span className="italic font-light text-muted-foreground">Telling Stories.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Rain is a boutique creative studio for independent musicians and artists. We exist for the ones who are serious about their craft and need someone equally serious about their brand. Strategy, identity, creative direction, social, PR. We handle the full picture so nothing gets diluted and nothing falls through.
            </p>
          </div>
        </section>

        {/* Mission & Name Section */}
        <section id="mission" ref={missionRef} className="reveal container mx-auto px-6 mb-24">
          <div className="glass-card p-8 md:p-12 lg:p-16 rounded-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* The Mission */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Mission
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                  The art comes first.<br />Everything else serves it.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rain started because too many talented artists were burning time figuring out how to market themselves instead of making music. Good strategy shouldn't compromise the work. It should make it louder. That's the only thing we're here to do.
                  </p>
                </div>
              </div>
              
              {/* The Name */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Name
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                  Why Rain.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rain doesn't rush. It shows up, creates space, and lets things grow on their own time. Every project we take on is rooted in cultural awareness and a genuine investment in the person behind the work. Not just what they make, who they are.
                  </p>
                  <p className="italic text-foreground/80">
                    Every project is rooted in cultural awareness and a genuine investment in the person behind the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section id="approach" ref={approachRef} className="reveal container mx-auto px-6 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
                The Approach
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                <span className="text-gradient">A creative partner,</span>
                <br />
                <span className="italic font-light text-muted-foreground">not a traditional agency.</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Intentionally Small",
                  description: "The roster stays tight on purpose. Fewer clients means deeper work, real creative investment, and partnerships that actually go somewhere."
                },
                {
                  title: "Full Spectrum",
                  description: "Strategy, brand, content, social, PR. We handle the full picture so nothing gets diluted and everything stays cohesive."
                },
                {
                  title: "Values-First",
                  description: "We work with artists and creatives who are building something that matters. Projects with heart, not just reach."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 md:p-8 rounded-xl hover:border-accent/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" ref={founderRef} className="reveal container mx-auto px-6 mb-24">
          <div className="glass-card p-8 md:p-12 lg:p-16 rounded-2xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* Founder Photo */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl md:text-6xl text-primary/30 font-display font-bold">
                    DD
                  </span>
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                  Founder & Creative Director
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Drishti Das
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Drishti Das is the founder and creative director of Rain. She started the agency
                    after watching too many talented independent artists spend more time figuring out
                    how to market themselves than actually making music. Rain was built to change that.
                  </p>
                  <p>
                    She works across brand strategy, creative direction, and artist development —
                    helping artists build not just a look, but a world. She believes the best creative
                    work happens when an artist fully understands who they are, and her job is to help
                    get them there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" ref={ctaRef} className="reveal container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient">Let's build</span>
              <br />
              <span className="italic font-light text-muted-foreground">something real.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              We take on a handful of clients at a time. Every partnership starts with a conversation.
            </p>
            
            <Link to="/contact">
              <Button size="lg" className="group hover-lift text-base px-8 py-6">
                Let's Make It Rain
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;