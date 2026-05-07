import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface MovingBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  borderRadius?: string;
  duration?: number;
}

export const MovingBorderButton = React.forwardRef<
  HTMLButtonElement,
  MovingBorderButtonProps
>(
  (
    {
      className,
      children,
      asChild = false,
      borderRadius = "0.75rem",
      duration = 3000,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <div
        className="relative p-[3px] overflow-hidden inline-flex"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            borderRadius,
            background:
              "conic-gradient(from 0deg, transparent 0%, hsl(var(--accent)) 10%, hsl(var(--primary-foreground)) 30%, hsl(var(--accent)) 50%, transparent 70%)",
            animation: `spin ${duration}ms linear infinite`,
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="relative z-10 flex-1"
          style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
        >
          <Comp
            className={cn(
              "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </Comp>
        </div>
      </div>
    );
  }
);
MovingBorderButton.displayName = "MovingBorderButton";
