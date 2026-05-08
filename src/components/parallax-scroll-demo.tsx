"use client";
import { ParallaxScroll, ParallaxRow } from "@/components/ui/parallax-scroll";

const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
];

export default function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} rows={2} />;
}

export function ParallaxScrollSingleRow() {
  return <ParallaxRow images={images} direction="left" />;
}
