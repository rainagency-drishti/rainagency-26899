import { useEffect, useRef } from "react";

const FloatingOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const orbs = containerRef.current.querySelectorAll('.orb');
      const { clientX, clientY } = e;
      
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.02;
        const x = (window.innerWidth / 2 - clientX) * speed;
        const y = (window.innerHeight / 2 - clientY) * speed;
        (orb as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary large orb */}
      <div className="orb absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float transition-transform duration-1000" />
      
      {/* Secondary orb */}
      <div 
        className="orb absolute top-1/3 -right-20 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] transition-transform duration-1000"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Accent small orbs */}
      <div 
        className="orb absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/25 rounded-full blur-[80px] animate-float transition-transform duration-1000"
        style={{ animationDelay: '2s' }}
      />
      
      <div 
        className="orb absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-float transition-transform duration-1000"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
    </div>
  );
};

export default FloatingOrbs;
