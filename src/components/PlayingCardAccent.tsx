import { useEffect, useState } from "react";

interface PlayingCardAccentProps {
  rank: string;
  suit: string;
  className?: string;
  rotate?: number;
  isRed?: boolean;
  parallax?: number; // multiplier for scroll-based translateY (e.g. 0.2)
}

const PlayingCardAccent = ({ rank, suit, className = "", rotate = 0, isRed: isRedProp, parallax = 0 }: PlayingCardAccentProps) => {
  const isRed = isRedProp ?? (suit === "♥" || suit === "♦");
  const suitColor = isRed ? "text-[#a51212]" : "text-[#e8d9a8]";

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    if (!parallax) return;
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
  }, [parallax]);

  const drift = scrollY * parallax;

  return (
    <div
      className={`pointer-events-none select-none absolute aspect-[2.5/3.5] w-24 md:w-32 rounded-lg bg-black border border-[#a51212]/40 shadow-[0_0_30px_rgba(165,18,18,0.25)] flex flex-col justify-between p-2 md:p-3 will-change-transform ${className}`}
      style={{ transform: `translate3d(0, ${drift}px, 0) rotate(${rotate}deg)` }}
    >
      <div className={`flex flex-col items-start leading-none ${suitColor}`}>
        <span className="font-display font-bold text-lg md:text-xl">{rank}</span>
        <span className="text-base md:text-lg">{suit}</span>
      </div>
      <div className={`text-3xl md:text-5xl text-center ${suitColor}`}>{suit}</div>
      <div className={`flex flex-col items-end leading-none rotate-180 ${suitColor}`}>
        <span className="font-display font-bold text-lg md:text-xl">{rank}</span>
        <span className="text-base md:text-lg">{suit}</span>
      </div>
    </div>
  );
};

export default PlayingCardAccent;
