import { cn } from "@/lib/utils";
import {
  Compass,
  Camera,
  CalendarDays,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeaturesSection({ features }: { features: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto border border-border/40 rounded-2xl overflow-hidden glass-card">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} total={features.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
  total,
}: FeatureItem & { index: number; total: number }) => {
  // Determine grid layout for borders. Assume 4-col on lg, 2-col on sm.
  const isLastCol4 = (index + 1) % 4 === 0;
  const isLastCol2 = (index + 1) % 2 === 0;
  const lastRowStart4 = Math.floor((total - 1) / 4) * 4;
  const inLastRow4 = index >= lastRowStart4;
  const lastRowStart2 = Math.floor((total - 1) / 2) * 2;
  const inLastRow2 = index >= lastRowStart2;

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-border/40 py-10 px-6 relative group/feature",
        !isLastCol4 ? "lg:border-r" : "lg:border-r-0",
        !isLastCol2 ? "sm:border-r" : "sm:border-r-0",
        !inLastRow4 ? "lg:border-b" : "",
        !inLastRow2 ? "sm:border-b" : "",
        index !== total - 1 ? "border-b" : "",
      )}
    >
      {/* Hover gradient */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 text-accent">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <div className="text-lg font-display font-bold mb-2 relative z-10">
        <div className="absolute left-0 -inset-y-1 h-8 w-1 rounded-tr-full rounded-br-full bg-border/60 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground relative z-10 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export { Compass, Camera, CalendarDays, Megaphone };
