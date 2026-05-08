interface MarqueeTextProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const MarqueeText = ({ items, direction = 'left', speed = 30 }: MarqueeTextProps) => {
  const animationStyle = {
    animationDuration: `${speed}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
  };

  return (
    <div className="overflow-hidden py-5 border-y border-border/50">
      <div 
        className="flex whitespace-nowrap animate-marquee"
        style={animationStyle}
      >
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="mx-7 text-4xl md:text-6xl font-display font-bold text-muted-foreground/20 hover:text-accent/40 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
