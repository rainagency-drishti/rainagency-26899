import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`${isGlitching ? 'animate-glitch' : ''}`}>{text}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-accent opacity-70"
            style={{ clipPath: 'inset(10% 0 60% 0)', transform: 'translate(-2px, -1px)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-primary opacity-70"
            style={{ clipPath: 'inset(50% 0 20% 0)', transform: 'translate(2px, 1px)' }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
