import { useEffect, useState } from "react";
import leafImg from "@/assets/leaf.png";

interface LeafConfig {
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  opacity: number;
  depth: number;
  blur: number;
  swayDuration: number; // seconds
  swayDelay: number; // seconds
  swayAmount: number; // degrees
}

const leaves: LeafConfig[] = [
  { top: "5%", left: "2%", size: 90, rotate: -20, opacity: 0.7, depth: 0.4, blur: 1.5, swayDuration: 5.2, swayDelay: 0, swayAmount: 6 },
  { top: "8%", right: "4%", size: 110, rotate: 25, opacity: 0.75, depth: 0.7, blur: 0.5, swayDuration: 6.8, swayDelay: 0.8, swayAmount: 5 },
  { top: "16%", left: "38%", size: 70, rotate: 45, opacity: 0.6, depth: 0.25, blur: 2, swayDuration: 4.5, swayDelay: 1.2, swayAmount: 8 },
  { top: "22%", right: "30%", size: 95, rotate: -35, opacity: 0.7, depth: 0.55, blur: 1, swayDuration: 7.1, swayDelay: 0.4, swayAmount: 6 },
  { top: "28%", left: "8%", size: 80, rotate: 60, opacity: 0.65, depth: 0.35, blur: 1.5, swayDuration: 5.7, swayDelay: 1.6, swayAmount: 7 },
  { top: "34%", right: "12%", size: 120, rotate: -10, opacity: 0.8, depth: 0.85, blur: 0.3, swayDuration: 6.2, swayDelay: 0.2, swayAmount: 4 },
  { top: "40%", left: "45%", size: 75, rotate: 15, opacity: 0.6, depth: 0.3, blur: 2, swayDuration: 4.8, swayDelay: 1.0, swayAmount: 9 },
  { top: "46%", left: "3%", size: 100, rotate: -50, opacity: 0.75, depth: 0.6, blur: 0.8, swayDuration: 6.5, swayDelay: 0.6, swayAmount: 5 },
  { top: "52%", right: "6%", size: 90, rotate: 30, opacity: 0.7, depth: 0.5, blur: 1, swayDuration: 5.5, swayDelay: 1.4, swayAmount: 6 },
  { top: "58%", left: "25%", size: 85, rotate: -25, opacity: 0.65, depth: 0.4, blur: 1.5, swayDuration: 6.0, swayDelay: 0.9, swayAmount: 7 },
  { top: "64%", right: "35%", size: 105, rotate: 55, opacity: 0.75, depth: 0.75, blur: 0.5, swayDuration: 7.3, swayDelay: 0.3, swayAmount: 4 },
  { top: "70%", left: "10%", size: 95, rotate: -40, opacity: 0.7, depth: 0.45, blur: 1.2, swayDuration: 5.8, swayDelay: 1.1, swayAmount: 6 },
  { top: "76%", right: "8%", size: 110, rotate: 20, opacity: 0.8, depth: 0.9, blur: 0.3, swayDuration: 6.6, swayDelay: 0.5, swayAmount: 4 },
  { top: "82%", left: "40%", size: 80, rotate: -15, opacity: 0.65, depth: 0.35, blur: 1.5, swayDuration: 4.9, swayDelay: 1.3, swayAmount: 8 },
  { top: "88%", left: "5%", size: 100, rotate: 35, opacity: 0.75, depth: 0.65, blur: 0.8, swayDuration: 6.4, swayDelay: 0.7, swayAmount: 5 },
  { top: "92%", right: "20%", size: 90, rotate: -55, opacity: 0.7, depth: 0.5, blur: 1, swayDuration: 5.4, swayDelay: 1.5, swayAmount: 6 },
];

const LeafField = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes leaf-sway {
          0%, 100% { transform: rotate(var(--sway-from)) translateX(0); }
          50% { transform: rotate(var(--sway-to)) translateX(6px); }
        }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {leaves.map((leaf, i) => {
          const drift = -scrollY * leaf.depth * 0.35;
          const swayFrom = `${leaf.rotate - leaf.swayAmount / 2}deg`;
          const swayTo = `${leaf.rotate + leaf.swayAmount / 2}deg`;
          return (
            <div
              key={i}
              className="absolute will-change-transform"
              style={{
                top: leaf.top,
                left: leaf.left,
                right: leaf.right,
                width: leaf.size,
                transform: `translate3d(0, ${drift}px, 0)`,
                transition: "transform 0.05s linear",
              }}
            >
              <img
                src={leafImg}
                alt=""
                loading="lazy"
                style={
                  {
                    width: "100%",
                    height: "auto",
                    opacity: leaf.opacity,
                    filter: `blur(${leaf.blur}px)`,
                    "--sway-from": swayFrom,
                    "--sway-to": swayTo,
                    animation: `leaf-sway ${leaf.swayDuration}s ease-in-out ${leaf.swayDelay}s infinite`,
                    transformOrigin: "50% 0%",
                  } as React.CSSProperties
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LeafField;
