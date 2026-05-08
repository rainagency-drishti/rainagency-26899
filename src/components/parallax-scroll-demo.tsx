"use client";
import { ParallaxRow } from "@/components/ui/parallax-scroll";
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";

// Two distinct shuffled subsets so each row has different photos
const rowA = [img3, img1, img6, img4, img7];
const rowB = [img2, img5, img7, img3, img1];

export function GalleryRowTop() {
  return <ParallaxRow images={rowA} direction="left" />;
}

export function GalleryRowBottom() {
  return <ParallaxRow images={rowB} direction="right" />;
}

export default function ParallaxScrollDemo() {
  return (
    <div className="space-y-6">
      <GalleryRowTop />
      <GalleryRowBottom />
    </div>
  );
}

export const ParallaxScrollSingleRow = GalleryRowTop;
