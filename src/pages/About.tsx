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
    <div className="min-h-screen bg-background relative">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.9]">
              <span className="text-gradient">Building worlds,</span>
              <br />
              <span className="italic font-light text-muted-foreground">not just releases.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Rain is a boutique creative strategy studio for musicians and artists 
              who value intention, identity, and lasting impact.
            </p>
          </div>
        </section>

        {/* Mission & Name Section */}
        <section ref={missionRef} className="reveal container mx-auto px-6 mb-24">
          <div className="glass-card p-8 md:p-12 lg:p-16 rounded-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* The Mission */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Mission
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                  Protect the art.<br />Structure the vision.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rain was born from a belief that creatives shouldn't have to sacrifice 
                    depth for visibility, or authenticity for growth.
                  </p>
                  <p>
                    Strategy should amplify creativity, not constrain it. 
                    Growth should feel organic, never forced.
                  </p>
                </div>
              </div>
              
              {/* The Name */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Name
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                  Patience.<br />Presence. Growth.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rain arrives without rushing. It creates space, nurtures growth, 
                    and allows things to unfold in their own time.
                  </p>
                  <p className="italic text-foreground/80">
                    That's how we approach creative work—rooted in cultural awareness, 
                    inclusivity, and making space for every voice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section ref={approachRef} className="reveal container mx-auto px-6 mb-24">
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
                  description: "Limited roster. Deep focus. Meaningful collaboration with every client we partner with."
                },
                {
                  title: "Full Spectrum",
                  description: "Creative strategy, brand management, content direction, social strategy, and PR support."
                },
                {
                  title: "Values-Driven",
                  description: "We work with artists, musicians, brands, and founders building something culturally intentional."
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
        <section ref={founderRef} className="reveal container mx-auto px-6 mb-24">
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
                    Drishti brings together strategic thinking and creative intuition, 
                    with a background spanning marketing, storytelling, and startup ecosystems.
                  </p>
                  <p>
                    Her work includes growing a client's social presence to 140K+ followers, 
                    driving creative culture at IU Innovates, and coaching early-stage ventures 
                    on brand and marketing strategy.
                  </p>
                  <p className="italic text-foreground/80">
                    Rain reflects her core values: intentionality, cultural awareness, 
                    and genuine care for the people behind every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="reveal container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient">Let's build</span>
              <br />
              <span className="italic font-light text-muted-foreground">something meaningful.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              Rain works with a limited number of clients to maintain depth, focus, 
              and creative integrity. All partnerships begin with an alignment call.
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