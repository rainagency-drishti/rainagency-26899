import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RainEffect from "@/components/RainEffect";
import FloatingOrbs from "@/components/FloatingOrbs";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  year: string;
  image_url: string;
  client_name: string | null;
  services: string[];
  featured: boolean;
}

const ProjectSkeleton = () => (
  <article className="glass-card overflow-hidden h-full">
    <div className="relative aspect-[3/4] overflow-hidden">
      <Skeleton className="w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-1 w-1 rounded-full" />
          <Skeleton className="h-3 w-10" />
        </div>
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  </article>
);

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(heroRef);
  useScrollAnimation(gridRef);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("portfolio_projects")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      console.error("Error fetching projects:", error);
      setIsLoading(false);
      return;
    }

    setProjects(data || []);
    setIsLoading(false);
  };

  const categories = ["All", "Brand Strategy", "Creative Direction", "Social Media", "PR"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background relative">
      <RainEffect />
      <FloatingOrbs />
      <Navigation />

      <main className="pt-24 pb-20 relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="reveal container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight animate-fade-in">
              Meet the Artists.
            </h1>
          </div>
        </section>

        {/* Projects Grid */}
        {/* Filters */}
        <section className="container mx-auto px-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] rounded-full border transition-all ${
                  filter === cat
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={gridRef} className="reveal container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {isLoading ? (
              <>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectSkeleton />
                  </div>
                ))}
              </>
            ) : (
              filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/portfolio/${project.slug}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article className="glass-card overflow-hidden hover:border-accent/50 transition-all duration-500 h-full">
                    <div className="relative aspect-[3/4] overflow-hidden bg-card">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        {project.description && project.description.toLowerCase() !== 'coming soon' && (
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {project.description}
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-accent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-sm font-medium tracking-wide">View Project</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            )}
          </div>

          {/* Empty State */}
          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
