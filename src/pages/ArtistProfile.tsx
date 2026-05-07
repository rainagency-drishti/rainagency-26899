import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowUpRight, Instagram, Music, Youtube } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z"/>
  </svg>
);

interface Artist {
  slug: string;
  name: string;
  tagline: string;
  bio: string[];
  disciplines: string[];
  links: { label: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[];
  selectedWork: { title: string; year: string; type: string; description: string; image?: string }[];
}

const artists: Record<string, Artist> = {
  "doyel-das": {
    slug: "doyel-das",
    name: "Doyel Das",
    tagline: "Singer, actor, and director. New York City.",
    bio: [
      "There's a sound that old Bollywood had and largely abandoned. Retro, sultry, cinematic, glamorous, built on real instruments and real rooms. Doyel Das is bringing it back.",
      "Informed by 24 years of Hindustani classical training and shaped by the jazz, soul, and disco that defined an era of Hindi film music, she writes and sings entirely in Hindi with a full live band. Everything she makes is intentional, built for a big room, recorded with real people, designed to pull you somewhere specific.",
      "Rain built her full creative world: visual identity, brand narrative, and the creative direction for her debut releases, so that everything she puts out feels like the same story, told in the same voice.",
    ],
    disciplines: ["Songwriting", "Hindustani Classical", "Live Performance", "Visual Direction", "Acting & Directing"],
    links: [
      { label: "Instagram", href: "https://www.instagram.com/doy_das/", icon: Instagram },
      { label: "TikTok", href: "https://www.tiktok.com/@doy_das", icon: TikTokIcon },
      { label: "YouTube", href: "https://www.youtube.com/@DoyelDas", icon: Youtube },
      { label: "Listen", href: "https://linktr.ee/doyeldasmusic", icon: Music },
    ],
    selectedWork: [
      { title: "Farebi", year: "2025", type: "Single", image: "/artists/farebi.png", description: "Her debut single. Farebi, which means fraud, is about dancing between authenticity and performance. It's about questioning why it feels like you have to put up a facade on the day-to-day and realizing conformity and adapting become the price of belonging. It's about feeling like a fraud in order to stay in the game. It's about playing the game." },
      { title: "Iraade", year: "2026", type: "Single", image: "/artists/iraade.png", description: "\"Iraade,\" Hindi for intentions, personifies a dream as a siren. She pulls you into a palace of illusions, shows you the most beautiful version of your life, and asks what you want her - your dream - to be: Khwahish ya saazish - desire or deception? Doyel wrote this song to make sense of her own feelings about ambition - the way a dream can feel electric one moment and a burden the next. Writing it made her realize it was never the dream that was too big. Doyel was choosing to let it crush her, because it felt safer to feel tortured by her ambitions than to risk failing publicly." },
      { title: "Untitled EP", year: "2026", type: "EP", description: "A five-song suite where each track is a face card in a deck. Each has its own sonic world. In development. Branding, visuals, and rollout being built by Rain." },
    ],
  },
  "omkar-shanbhag": {
    slug: "omkar-shanbhag",
    name: "Omkar Shanbhag",
    tagline: "Singer-songwriter. Guitar. Desi indie.",
    bio: [
      "Omkar Shanbhag started making music the way most people do, because he had to. Not because it was easy, or because it made sense, but because not doing it was worse. Music was something his parents pushed him toward growing up, which meant for a long time it felt like theirs, not his. That changed when he started singing for himself.",
      "He picked up guitar in 2023 and something shifted. The self-worth stopped being tied to the mistakes. The point became learning, not performing competence. And songwriting, which he'd blocked for years because he didn't think he was good enough to do it, finally happened.",
      "His sound sits between the emotional depth of classic Bollywood and the intimacy of modern indie. Desi lyrics, minimal production, melody first. The kind of music that sounds like something you've heard before but can't quite place. Familiar in a way that gets under your skin. Think Daniel Caesar meets the nostalgia of a song your parents used to play, but it's yours.",
      "Rain built his complete brand identity. Visual world, narrative positioning, and creative direction for Na Jao, so that everything he puts out feels as considered as the music itself.",
    ],
    disciplines: ["Songwriting", "Guitar", "Vocal Performance", "Desi Indie", "Hindi & Punjabi Lyrics"],
    links: [
      { label: "Instagram @omkar.shanbhag", href: "https://instagram.com/omkar.shanbhag", icon: Instagram },
      { label: "TikTok @omkar.shanbhag", href: "https://tiktok.com/@omkar.shanbhag", icon: Instagram },
      { label: "Listen", href: "#", icon: Music },
    ],
    selectedWork: [
      { title: "Is Rah Pe", year: "2025", type: "Single", image: "/artists/is-rah-pe.png", description: "His debut single. A song about self-discovery. The journey of doing something you love in spite of every voice telling you you're not ready. The melody makes you feel like you're on the move." },
      { title: "TBD", year: "Coming Soon", type: "Single", description: "The next chapter. Coming soon." },
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

  const isDoyel = artist.slug === "doyel-das";

  return (
    <div className={`min-h-screen bg-background relative ${isDoyel ? "doyel-theme" : ""}`}>
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
                <Card key={i} className="glass-card overflow-hidden hover-lift gradient-border">
                  {work.image && (
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
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
                  </div>
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
