import { useEffect, RefObject } from 'react';

export const useParallax = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);
      
      ref.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);
};
