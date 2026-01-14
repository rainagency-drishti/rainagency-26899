import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import AnimatedCounter from "@/components/AnimatedCounter";
import MarqueeText from "@/components/MarqueeText";
import RainEffect from "@/components/RainEffect";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Layers, Zap, Palette, Globe } from "lucide-react";
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
      title: "Creative & Brand Management",
      description: "Ongoing creative partnership for artists who want their brand, visuals, and presence to feel fully aligned.",
      items: ["Brand Strategy", "Creative Direction", "Social Media Management"]
    },
    {
      icon: Palette,
      title: "Brand Strategy & Creative Direction",
      description: "For artists and brands seeking clarity, direction, and a strong creative foundation.",
      items: ["Brand Positioning", "Visual World-Building", "Campaign Strategy"]
    },
    {
      icon: Layers,
      title: "Visual Concepts & Execution",
      description: "Transform ideas into tangible visuals through thoughtful planning and creative execution.",
      items: ["Concept Development", "Moodboards & Decks", "Creative Direction"]
    },
    {
      icon: Globe,
      title: "Social & Cultural Strategy",
      description: "Social presence as an extension of the brand, approached with creative intuition and insight.",
      items: ["Content Strategy", "Performance Analysis", "Platform Guidance"]
    },
    {
      icon: Zap,
      title: "PR & Visibility Strategy",
      description: "Thoughtful outreach to help you be seen in the right spaces, by the right audiences.",
      items: ["Pitch Writing", "Media Outreach", "Brand Positioning"]
    }
  ];

  const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Happy Clients" },
  ];

  const marqueeItems = ["STRATEGY", "DESIGN", "DEVELOPMENT", "INNOVATION", "CREATIVITY"];

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
            {/* Animated badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">Digital-first strategy + design agency</span>
            </div>

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
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4 tracking-wide animate-fade-in italic" style={{ animationDelay: '0.2s' }}>
              Where creativity flows. When it rains, it pours.
            </p>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              A boutique creative strategy studio for musicians and artists.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/portfolio">
                <Button size="lg" className="group hover-lift">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="group glass-card hover-lift">
                  Get In Touch
                  <Zap className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
                <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeText items={marqueeItems} speed={25} />

      {/* About Rain Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">About Rain</span>
            </div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              Rain is a boutique creative strategy and branding studio built for musicians and artists who care about intention, identity, and long-term impact. We work closely with creatives to shape cohesive worlds through strategy, storytelling, and creative direction — supporting everything from visuals and content to culture and visibility.
            </p>
            <p className="text-lg text-muted-foreground italic">
              At Rain, creativity is approached with care, clarity, and purpose.
            </p>
            <div className="mt-10">
              <Link to="/about">
                <Button variant="outline" className="group glass-card hover-lift">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="reveal py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center p-6 rounded-2xl glass-card hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="reveal py-32 relative">
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Card
                key={i}
                className="group p-8 glass-card hover-lift gradient-border overflow-hidden relative"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Hover glow effect */}
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
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section ref={workRef} className="reveal py-32 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold">
                Featured <span className="text-gradient">Work</span>
              </h2>
            </div>
            <Link to="/portfolio">
              <Button variant="ghost" className="group glass-card">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.slug}`}
                className="group block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Card className="overflow-hidden glass-card hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-card text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {project.year}
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
      <section className="py-32 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
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
