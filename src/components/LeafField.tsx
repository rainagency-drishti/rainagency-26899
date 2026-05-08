import { useEffect, useState } from "react";
import leafImg from "@/assets/leaf.png";

interface LeafConfig {
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  opacity: number;
  depth: number; // 0.1 (far/slow) to 1 (near/fast)
  blur: number;
}

const leaves: LeafConfig[] = [
  { top: "5%", left: "2%", size: 90, rotate: -20, opacity: 0.55, depth: 0.4, blur: 1.5 },
  { top: "8%", right: "4%", size: 110, rotate: 25, opacity: 0.6, depth: 0.7, blur: 0.5 },
  { top: "16%", left: "38%", size: 70, rotate: 45, opacity: 0.45, depth: 0.25, blur: 2 },
  { top: "22%", right: "30%", size: 95, rotate: -35, opacity: 0.55, depth: 0.55, blur: 1 },
  { top: "28%", left: "8%", size: 80, rotate: 60, opacity: 0.5, depth: 0.35, blur: 1.5 },
  { top: "34%", right: "12%", size: 120, rotate: -10, opacity: 0.65, depth: 0.85, blur: 0.3 },
  { top: "40%", left: "45%", size: 75, rotate: 15, opacity: 0.45, depth: 0.3, blur: 2 },
  { top: "46%", left: "3%", size: 100, rotate: -50, opacity: 0.6, depth: 0.6, blur: 0.8 },
  { top: "52%", right: "6%", size: 90, rotate: 30, opacity: 0.55, depth: 0.5, blur: 1 },
  { top: "58%", left: "25%", size: 85, rotate: -25, opacity: 0.5, depth: 0.4, blur: 1.5 },
  { top: "64%", right: "35%", size: 105, rotate: 55, opacity: 0.6, depth: 0.75, blur: 0.5 },
  { top: "70%", left: "10%", size: 95, rotate: -40, opacity: 0.55, depth: 0.45, blur: 1.2 },
  { top: "76%", right: "8%", size: 110, rotate: 20, opacity: 0.65, depth: 0.9, blur: 0.3 },
  { top: "82%", left: "40%", size: 80, rotate: -15, opacity: 0.5, depth: 0.35, blur: 1.5 },
  { top: "88%", left: "5%", size: 100, rotate: 35, opacity: 0.6, depth: 0.65, blur: 0.8 },
  { top: "92%", right: "20%", size: 90, rotate: -55, opacity: 0.55, depth: 0.5, blur: 1 },
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
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply dark:mix-blend-screen"
    >
      {leaves.map((leaf, i) => {
        const drift = -scrollY * leaf.depth * 0.35;
        return (
          <img
            key={i}
            src={leafImg}
            alt=""
            loading="lazy"
            className="absolute will-change-transform"
            style={{
              top: leaf.top,
              left: leaf.left,
              right: leaf.right,
              width: leaf.size,
              height: "auto",
              opacity: leaf.opacity,
              filter: `blur(${leaf.blur}px)`,
              transform: `translate3d(0, ${drift}px, 0) rotate(${leaf.rotate}deg)`,
              transition: "transform 0.05s linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default LeafField;
