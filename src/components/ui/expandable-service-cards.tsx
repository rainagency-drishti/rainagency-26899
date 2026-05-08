"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export interface ExpandableServiceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  note: string;
  icon: LucideIcon;
}

export default function ExpandableServiceCards({ cards }: { cards: ExpandableServiceCard[] }) {
  const [active, setActive] = useState<ExpandableServiceCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const match = cards.find(
        (c) => `service-${c.number}` === hash || c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === hash,
      );
      if (match) setActive(match);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [cards]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/70 backdrop-blur-sm h-full w-full z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
            <div className="min-h-full flex items-start md:items-center justify-center p-4 py-8">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="relative w-full max-w-2xl flex flex-col bg-card glass-card rounded-2xl"
              >
                <motion.button
                  key={`close-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex sticky top-4 ml-auto mr-4 -mb-9 items-center justify-center bg-card hover:bg-accent hover:text-accent-foreground border border-border rounded-full h-9 w-9 z-50 shadow-lg transition-colors"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4 text-foreground" />
                </motion.button>
                <div className="p-6 md:p-10">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <motion.span
                      layoutId={`subtitle-${active.title}-${id}`}
                      className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block"
                    >
                      {active.subtitle}
                    </motion.span>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl md:text-3xl font-display font-bold text-primary"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <motion.span
                    layoutId={`number-${active.title}-${id}`}
                    className="text-4xl md:text-5xl font-display font-bold text-primary/20 leading-none"
                  >
                    {active.number}
                  </motion.span>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed"
                >
                  {active.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8"
                >
                  {active.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{item}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground italic text-sm leading-relaxed"
                >
                  {active.note}
                </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="glass-card p-6 rounded-2xl cursor-pointer hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="text-accent">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <motion.span
                  layoutId={`number-${card.title}-${id}`}
                  className="text-3xl font-display font-bold text-primary/20 leading-none"
                >
                  {card.number}
                </motion.span>
              </div>
              <motion.span
                layoutId={`subtitle-${card.title}-${id}`}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block"
              >
                {card.subtitle}
              </motion.span>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
              >
                {card.title}
              </motion.h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {card.description}
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-accent group-hover:translate-x-1 inline-block transition-transform">
                Read more →
              </span>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
