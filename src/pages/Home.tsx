import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-rain.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Crafting purpose-driven, emotionally intelligent brands through storytelling, positioning, and identity.",
    },
    {
      title: "Design & Identity",
      description: "Translating ideas into timeless visuals that people remember.",
    },
    {
      title: "Digital Experiences",
      description: "Building meaningful online presences that connect creativity with functionality.",
    },
  ];

  const projects = [
    { title: "Rain for Artists", category: "Brand Identity" },
    { title: "Rain for Impact Brands", category: "Digital Strategy" },
    { title: "Rain Studio Concepts", category: "Creative Direction" },
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-display mb-6 text-primary leading-tight">
                We build brands that move people.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-10 font-light leading-relaxed">
                Rain is a creative studio focused on crafting stories that inspire action through design, digital strategy, and identity.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="animate-float">
                  Let's Create Together
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-display mb-6 text-primary">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our work lives where creativity meets clarity. We help brands express who they are through design, storytelling, and digital presence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-display mb-4 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Preview Section */}
        <section className="py-24 px-6 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display mb-4 text-primary">
                Recent Work
              </h2>
              <p className="text-lg text-muted-foreground">
                Every project starts with a story worth telling.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square bg-primary/10 rounded-lg mb-4 overflow-hidden transition-all duration-300 group-hover:shadow-elevated">
                    <div className="w-full h-full bg-gradient-to-br from-accent to-primary/20 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-display mb-2 text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-8 text-primary">
              Let's make something beautiful together.
            </h2>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
