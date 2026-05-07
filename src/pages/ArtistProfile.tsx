import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowUpRight, Instagram, Music } from "lucide-react";

interface Artist {
  slug: string;
  name: string;
  tagline: string;
  bio: string[];
  disciplines: string[];
  links: { label: string; href: string; icon: typeof Instagram }[];
  selectedWork: { title: string; year: string; type: string; description: string }[];
}

const artists: Record<string, Artist> = {
  "doyel-das": {
    slug: "doyel-das",
    name: "Doyel Das",
    tagline: "Singer-songwriter shaping introspective soundscapes.",
    bio: [
      "Doyel Das is an independent artist whose work moves between intimate songwriting and atmospheric production. Her catalog explores memory, identity, and the quiet textures of everyday life.",
      "Through her partnership with Rain, Doyel is building a long-form creative world — one that connects her music, visuals, and story into a single cohesive presence.",
    ],
    disciplines: ["Songwriting", "Vocal Production", "Visual Direction"],
    links: [
      { label: "Instagram", href: "#", icon: Instagram },
      { label: "Listen", href: "#", icon: Music },
    ],
    selectedWork: [
      { title: "Untitled EP", year: "2026", type: "Release", description: "Forthcoming body of work — branding, visuals, and rollout in development." },
      { title: "Single Campaign", year: "2025", type: "Campaign", description: "Single release with full creative direction and content strategy." },
    ],
  },
  "omkar-shanbhag": {
    slug: "omkar-shanbhag",
    name: "Omkar Shanbhag",
    tagline: "Composer and producer building cinematic worlds in sound.",
    bio: [
      "Omkar Shanbhag is a composer and producer whose work bridges classical training and modern production. His sound moves fluidly between film, ambient, and contemporary instrumental music.",
      "Working with Rain, Omkar is developing a brand identity that mirrors the depth and intentionality of his music — a presence built for longevity, not the algorithm.",
    ],
    disciplines: ["Composition", "Production", "Sound Design"],
    links: [
      { label: "Instagram", href: "#", icon: Instagram },
      { label: "Listen", href: "#", icon: Music },
    ],
    selectedWork: [
      { title: "Score Project", year: "2026", type: "Film", description: "Original score in development — to be announced." },
      { title: "Instrumental Series", year: "2025", type: "Release", description: "Multi-part instrumental release with cohesive visual identity." },
    ],
  },
};

const ArtistProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist = slug ? artists[slug] : undefined;

  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 pt-40 pb-20 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Artist not found</h1>
          <Link to="/portfolio">
            <Button variant="outline" className="glass-card">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <RainEffect />
      <FloatingOrbs />
      <Navigation />

      <main className="pt-24 pb-20 relative z-10">
        {/* Back link */}
        <div className="container mx-auto px-6 pt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all artists
          </Link>
        </div>

        {/* Hero */}
        <section className="container mx-auto px-6 pt-12 pb-20">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              Artist
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.9] text-gradient">
              {artist.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl leading-relaxed">
              {artist.tagline}
            </p>
          </div>
        </section>

        {/* Profile */}
        <section className="container mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Profile
              </h2>
              {artist.bio.map((para, i) => (
                <p key={i} className="text-lg text-foreground/90 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <aside className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Disciplines
                </h3>
                <ul className="space-y-2">
                  {artist.disciplines.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Links
                </h3>
                <div className="flex flex-col gap-3">
                  {artist.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Selected Work */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
                  Selected Work
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  In motion.
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {artist.selectedWork.map((work, i) => (
                <Card key={i} className="glass-card p-8 hover-lift gradient-border">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-accent">
                      {work.type}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-xs text-muted-foreground">{work.year}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 pt-24 text-center">
          <p className="text-muted-foreground mb-6">Interested in working with us?</p>
          <Link to="/contact">
            <Button size="lg" className="hover-lift">
              Start a Conversation
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;
