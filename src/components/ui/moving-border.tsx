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
      className={cn("relative p-[1px] overflow-hidden", containerClassName)}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          borderRadius,
          background:
            "conic-gradient(from 0deg, transparent 0%, hsl(var(--accent)) 20%, hsl(var(--primary)) 40%, hsl(var(--accent)) 60%, transparent 80%)",
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative z-10 bg-background",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
      >
        {children}
      </div>
    </div>
  );
}
