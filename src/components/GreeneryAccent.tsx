interface GreeneryAccentProps {
  variant?: "leaf" | "fern" | "vine" | "sprig";
  className?: string;
  rotate?: number;
  size?: number;
}

const Leaf = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <path d="M50 10 C 20 30, 20 70, 50 90 C 80 70, 80 30, 50 10 Z" fill="url(#leafGrad)" stroke="#2d5a3d" strokeWidth="1.5" />
    <path d="M50 10 L 50 90" stroke="#2d5a3d" strokeWidth="1" />
    <path d="M50 30 Q 35 40, 30 55 M50 45 Q 35 55, 32 70 M50 30 Q 65 40, 70 55 M50 45 Q 65 55, 68 70" stroke="#2d5a3d" strokeWidth="0.8" fill="none" />
    <defs>
      <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5a8c5a" />
        <stop offset="100%" stopColor="#2d5a3d" />
      </linearGradient>
    </defs>
  </svg>
);

const Fern = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <path d="M50 95 Q 50 50, 50 10" stroke="#2d5a3d" strokeWidth="2" fill="none" />
    {[20, 30, 40, 50, 60, 70, 80].map((y, i) => {
      const len = 8 + (90 - y) * 0.35;
      return (
        <g key={i}>
          <path d={`M50 ${y} Q ${50 - len / 2} ${y - 4}, ${50 - len} ${y - 8}`} stroke="#4a7a4a" strokeWidth="1.5" fill="none" />
          <path d={`M50 ${y} Q ${50 + len / 2} ${y - 4}, ${50 + len} ${y - 8}`} stroke="#4a7a4a" strokeWidth="1.5" fill="none" />
        </g>
      );
    })}
  </svg>
);

const Vine = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="#4a7a4a" strokeWidth="2" fill="none" />
    <ellipse cx="25" cy="35" rx="6" ry="3" fill="#5a8c5a" transform="rotate(-30 25 35)" />
    <ellipse cx="50" cy="50" rx="7" ry="3.5" fill="#5a8c5a" />
    <ellipse cx="75" cy="35" rx="6" ry="3" fill="#5a8c5a" transform="rotate(30 75 35)" />
    <ellipse cx="38" cy="60" rx="5" ry="2.5" fill="#6b9c6b" transform="rotate(20 38 60)" />
    <ellipse cx="65" cy="62" rx="5" ry="2.5" fill="#6b9c6b" transform="rotate(-20 65 62)" />
  </svg>
);

const Sprig = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <path d="M50 90 Q 50 50, 55 15" stroke="#2d5a3d" strokeWidth="2" fill="none" />
    <ellipse cx="35" cy="70" rx="8" ry="4" fill="#5a8c5a" transform="rotate(-40 35 70)" />
    <ellipse cx="65" cy="60" rx="8" ry="4" fill="#5a8c5a" transform="rotate(40 65 60)" />
    <ellipse cx="38" cy="45" rx="7" ry="3.5" fill="#6b9c6b" transform="rotate(-30 38 45)" />
    <ellipse cx="62" cy="35" rx="7" ry="3.5" fill="#6b9c6b" transform="rotate(30 62 35)" />
    <ellipse cx="55" cy="18" rx="5" ry="3" fill="#7aac7a" />
  </svg>
);

const GreeneryAccent = ({ variant = "leaf", className = "", rotate = 0, size = 96 }: GreeneryAccentProps) => {
  const Component = variant === "fern" ? Fern : variant === "vine" ? Vine : variant === "sprig" ? Sprig : Leaf;
  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, width: size, height: size }}
    >
      <Component />
    </div>
  );
};

export default GreeneryAccent;
