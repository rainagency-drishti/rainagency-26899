import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import AnimatedCounter from "@/components/AnimatedCounter";
import MarqueeText from "@/components/MarqueeText";
import RainEffect from "@/components/RainEffect";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Card } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ArrowRight, Sparkles, Layers, Zap, Palette, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import rainLogoDark from "@/assets/rain-logo.png";
import rainLogoLight from "@/assets/rain-logo-hero-light.png";

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

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <Link to={service.href} className="block h-full">
    <Card
      className="group p-8 glass-card hover-lift gradient-border overflow-hidden relative h-full cursor-pointer"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
          <service.icon className="w-7 h-7 text-accent" />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.items.map((item: string, j: number) => (
            <li key={j} className="flex items-center gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  </Link>
);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useScrollAnimation(heroRef);
  useScrollAnimation(servicesRef);
  useScrollAnimation(workRef);
  useScrollAnimation(statsRef);

  useEffect(() => {
    fetchFeaturedProjects();
    
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const services = [
    {
      icon: Sparkles,
      title: "Ongoing Creative & Brand Partnership",
      description: "An ongoing creative relationship for independent artists ready to build something real and lasting.",
      items: ["Brand Strategy", "Creative Direction", "Social Media Management"],
      href: "/services",
    },
    {
      icon: Palette,
      title: "Brand Strategy & Artist Development",
      description: "For artists at the beginning of their journey or at a turning point. Defining who you are and how it shows up.",
      items: ["Brand Positioning", "Visual World-Building", "Brand Guidelines"],
      href: "/services#service-02",
    },
    {
      icon: Layers,
      title: "Creative Direction & Production",
      description: "Bringing a creative vision to life from concept to delivered assets, with every detail handled intentionally.",
      items: ["Shoot Concepts", "Talent Coordination", "On-Set Direction"],
      href: "/services#service-03",
    },
    {
      icon: Globe,
      title: "Content Strategy & Social Media Management",
      description: "Consistent, strategic, on-brand social presence built around who you are as an artist.",
      items: ["Content Calendar", "Publishing", "Performance Reporting"],
      href: "/services#service-04",
    },
    {
      icon: Zap,
      title: "PR & Media Outreach",
      description: "Getting your music and your name in front of the right people through crafted story and real relationships.",
      items: ["EPK Creation", "Media Outreach", "Placement Tracking"],
      href: "/services#service-05",
    }
  ];

  const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Happy Clients" },
  ];

  const marqueeItems = ["Creative Direction", "Brand Strategy", "Artist Development", "PR & Media", "Content Strategy", "Social Media", "Visual Production", "Storytelling"];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <RainEffect />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingOrbs />
        
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--accent)) 0%, transparent 50%)`,
            transition: 'background-image 0.3s ease',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div ref={heroRef} className="reveal container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo with glow effect */}
            <div className="mb-12 flex justify-center items-center relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse-slow" />
              </div>
              <div className="relative z-10 w-full max-w-2xl flex justify-center items-center">
                <img 
                  src={isDark ? rainLogoDark : rainLogoLight}
                  alt="RAIN - Digital-first strategy + design agency"
                  className="w-full h-auto animate-scale-in object-contain"
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4 tracking-wide italic opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Where creativity flows. When it rains, it pours.
            </p>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              A boutique creative strategy studio for artists.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/portfolio">
                <Button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elevated h-12 rounded-lg px-10 hover-lift text-lg font-bold">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="h-12 px-10 text-base group hover-lift bg-background/50 backdrop-blur-xl hover:bg-accent hover:text-accent-foreground">
                  Get In Touch
                  <Zap className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeText items={marqueeItems} speed={25} />

      {/* About Rain Teaser */}
      <AboutTeaser />

      {/* Services Section */}
      <section ref={servicesRef} className="reveal py-32 relative border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold">
              What We <span className="text-gradient">Do</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Row 1: 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, i) => (
                <ServiceCard key={i} service={service} index={i} />
              ))}
            </div>
            {/* Row 2: 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.slice(3, 5).map((service, i) => (
                <ServiceCard key={i + 3} service={service} index={i + 3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section ref={workRef} className="reveal py-32 relative border-t border-border/40 bg-card/20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold">
                Featured <span className="text-gradient">Artists</span>
              </h2>
            </div>
            <Link to="/portfolio">
              <Button variant="ghost" className="group glass-card">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project) => (
              <CardContainer key={project.id} containerClassName="py-0">
                <Link to={`/portfolio/${project.slug}`} className="block">
                <CardBody className="bg-card/60 glass-card relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border cursor-pointer">
                  <CardItem translateZ={50} className="text-xs uppercase tracking-[0.2em] text-accent text-[#a51212]">
                    {project.category}
                  </CardItem>
                  <CardItem translateZ={60} as="h3" className="text-2xl font-display font-bold mt-2">
                    {project.title}
                  </CardItem>
                  <CardItem translateZ={40} as="p" className="text-muted-foreground text-sm mt-2 max-w-sm">
                    {project.description}
                  </CardItem>
                  <CardItem translateZ={100} className="w-full mt-4">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="aspect-[3/4] w-full object-contain bg-background/40 rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-6">
                    <CardItem translateZ={20} as={Link} to={`/portfolio/${project.slug}`} className="px-4 py-2 rounded-xl text-xs font-normal">
                      View profile →
                    </CardItem>
                    <CardItem translateZ={20} className="px-4 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-bold">
                      {project.year}
                    </CardItem>
                  </div>
                </CardBody>
                </Link>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-border/40">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground">
            Ready to <span className="text-gradient">Stand Out</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's create something extraordinary together. Transform your vision into reality.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group hover-lift text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
