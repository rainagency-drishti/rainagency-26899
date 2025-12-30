import { useEffect, useState } from "react";

const RainCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.classList.contains('hover-lift');
      setIsHovering(isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * { cursor: none !important; }
      `}</style>

      {/* Main cursor - rain drop shape */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        {/* Rain drop SVG */}
        <svg
          width={isHovering ? 32 : 24}
          height={isHovering ? 40 : 30}
          viewBox="0 0 24 30"
          fill="none"
          className="transition-all duration-200"
          style={{
            filter: 'drop-shadow(0 0 8px hsl(209 100% 88% / 0.5))',
          }}
        >
          <path
            d="M12 0C12 0 2 12 2 18C2 24.627 6.373 29 12 29C17.627 29 22 24.627 22 18C22 12 12 0 12 0Z"
            fill="url(#rainGradient)"
            stroke="hsl(209 100% 88%)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="rainGradient" x1="12" y1="0" x2="12" y2="29" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="hsl(209 100% 93%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(211 72% 26%)" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Highlight */}
          <ellipse cx="8" cy="14" rx="2" ry="3" fill="white" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998] animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-accent/50 animate-ping" />
        </div>
      ))}
    </>
  );
};

export default RainCursor;
