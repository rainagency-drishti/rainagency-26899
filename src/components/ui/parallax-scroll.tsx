"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxRowProps {
  images: string[];
  direction?: "left" | "right";
  className?: string;
  imgClassName?: string;
}

export const ParallaxRow = ({
  images,
  direction = "left",
  className,
  imgClassName,
}: ParallaxRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = direction === "left" ? ["10%", "-25%"] : ["-25%", "10%"];
  const x = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden py-2", className)}
    >
      <motion.div style={{ x }} className="flex gap-6 w-max">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={cn(
              "h-56 md:h-72 w-auto object-cover rounded-lg flex-shrink-0",
              imgClassName,
            )}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ParallaxScroll = ({
  images,
  className,
  rows = 2,
}: {
  images: string[];
  className?: string;
  rows?: number;
}) => {
  const half = Math.ceil(images.length / 2);
  const first = images.slice(0, half);
  const second = images.slice(half);

  return (
    <div className={cn("w-full space-y-6", className)}>
      <ParallaxRow images={first} direction="left" />
      {rows > 1 && <ParallaxRow images={second} direction="right" />}
    </div>
  );
};
