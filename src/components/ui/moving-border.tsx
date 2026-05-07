import React from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
  borderRadius?: string;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 3000,
  borderRadius = "0.75rem",
}: MovingBorderProps) {
  return (
    <div
      className={cn("relative p-[1.5px] overflow-hidden", containerClassName)}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0 z-0 blur-[1px]"
        style={{
          borderRadius,
          background:
            "conic-gradient(from 0deg, transparent 0%, hsl(var(--accent)) 15%, hsl(var(--primary)) 35%, hsl(var(--accent)) 55%, transparent 75%)",
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative z-10 bg-background flex items-center justify-center",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 1.5px)` }}
      >
        {children}
      </div>
    </div>
  );
}
