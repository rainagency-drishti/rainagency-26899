import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      items: [
        "Brand Positioning",
        "Naming & Messaging Frameworks",
        "Storytelling & Audience Insight",
      ],
      description: "We help you define your voice and vision before you share it with the world.",
    },
    {
      title: "Design & Identity",
      items: [
        "Visual Identity Systems",
        "Logo & Typography Design",
        "Art Direction & Brand Guidelines",
      ],
      description: "Your visual language should feel as real and timeless as your story.",
    },
    {
      title: "Digital Presence",
      items: [
        "Website Design & Launch Strategy",
        "Social Media Strategy",
        "Content & Campaign Creative",
      ],
      description: "We connect your brand to the world through meaningful digital experiences.",
    },
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <header className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-display mb-6 text-primary">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build creative systems designed for the long term. Whether you're starting fresh or reimagining your brand, we help you move with strategy and intention.
            </p>
          </header>

          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-elevated bg-card animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <h2 className="text-4xl font-display text-primary mb-4">
                        {service.title}
                      </h2>
                    </div>
                    
                    <div className="md:w-2/3 space-y-6">
                      <ul className="space-y-3">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <p className="text-muted-foreground italic leading-relaxed border-l-2 border-primary pl-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-primary">
              Ready to bring your brand to life?
            </h2>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Services;
