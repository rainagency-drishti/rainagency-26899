import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { supabase } from "@/integrations/supabase/client";
import rainLogoHero from "@/assets/rain-logo-hero.png";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  image_url: string;
  featured: boolean;
}

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useScrollAnimation(heroRef);
  useScrollAnimation(servicesRef);
  useScrollAnimation(workRef);
  useParallax(parallaxRef, 0.3);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    const { data } = await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("featured", true)
      .order("order_index", { ascending: true })
      .limit(3);

    if (data) setFeaturedProjects(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div ref={heroRef} className="reveal container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12 flex justify-center">
              <img 
                src={rainLogoHero} 
                alt="RAIN - Digital-first strategy + design agency" 
                className="w-full max-w-2xl h-auto animate-scale-in"
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              We build brands for companies that aim to stand out
            </p>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">
              Digital-first strategy + design agency
            </p>
            <Link to="/portfolio">
              <Button size="lg" className="group">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="reveal py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-20 text-center">
            What We Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Brand Strategy",
                items: ["Positioning", "Identity Design", "Brand Guidelines"]
              },
              {
                title: "Digital Design",
                items: ["UI/UX Design", "Web Design", "Mobile Apps"]
              },
              {
                title: "Development",
                items: ["Web Development", "E-Commerce", "Custom Solutions"]
              }
            ].map((service, i) => (
              <Card
                key={i}
                className="p-8 bg-card border-border hover:border-accent transition-all duration-500 hover:shadow-glow"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-accent">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section ref={workRef} className="reveal py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold">
              Featured Work
            </h2>
            <Link to="/portfolio">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Card className="overflow-hidden bg-card border-border hover:border-accent transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.category} • {project.year}
                    </div>
                    <h3 className="text-xl font-display font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to Stand Out?
          </h2>
          <Link to="/contact">
            <Button size="lg" className="group">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
