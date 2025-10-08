import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto">
            <header className="mb-16 text-center animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-display mb-6 text-primary">
                Our Story
              </h1>
            </header>

            <div className="space-y-8 text-lg leading-relaxed animate-slide-up">
              <p className="text-foreground/90">
                Rain was founded with the belief that creativity should feel human. We bring clarity, emotion, and precision to every project — from brand identity to digital storytelling.
              </p>

              <p className="text-foreground/90">
                Our studio collaborates with brands, artists, and entrepreneurs who value depth, culture, and connection. Every detail matters — and every story deserves to be told beautifully.
              </p>

              <div className="py-12 my-12 border-y border-border">
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-center text-primary">
                  Our Mission
                </h2>
                <p className="text-xl text-center text-foreground/80 font-light italic">
                  Our mission is to turn ideas into impact through meaningful creative expression.
                </p>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-display mb-4 text-primary">
                  The Name "Rain"
                </h2>
                <p className="text-foreground/90">
                  Rain symbolizes clarity, growth, and renewal — the same transformation we help brands experience. After every storm, there's space for something new to bloom.
                </p>
              </div>

              <div className="pt-12">
                <h2 className="text-3xl font-display mb-8 text-center text-primary">
                  Our Team
                </h2>
                <p className="text-center text-muted-foreground">
                  A collective of creatives, strategists, and storytellers united by a passion for meaningful work.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
