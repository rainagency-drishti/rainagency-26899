import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rainLogo from "@/assets/rain-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated background orbs */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]"
            />
          </div>

          {/* Rain drops animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: "100vh", opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1.5 + Math.random() * 1,
                  delay: Math.random() * 1.5,
                  ease: "linear",
                  repeat: 1,
                }}
                className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-accent/40 to-transparent rounded-full"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Logo container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Glow effect behind logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -inset-20 bg-primary/20 rounded-full blur-[80px]"
            />

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="relative"
            >
              <motion.img
                src={rainLogo}
                alt="RAIN"
                className="w-64 md:w-80 h-auto"
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px hsl(209 100% 88% / 0.3))",
                    "drop-shadow(0 0 40px hsl(209 100% 88% / 0.5))",
                    "drop-shadow(0 0 20px hsl(209 100% 88% / 0.3))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 w-48 h-1 bg-border/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-6 text-sm text-muted-foreground tracking-widest uppercase"
            >
              Digital-first strategy + design
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
