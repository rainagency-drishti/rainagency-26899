"use client";
import { ParallaxRow } from "@/components/ui/parallax-scroll";
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";
import img8 from "@/assets/gallery/img8.jpg";
import img9 from "@/assets/gallery/img9.jpg";
import img10 from "@/assets/gallery/img10.jpg";
import img11 from "@/assets/gallery/img11.jpg";
import img12 from "@/assets/gallery/img12.jpg";
import img13 from "@/assets/gallery/img13.jpg";

// Three distinct shuffled subsets so each row has different photos
const rowA = [img3, img1, img8, img12, img6, img10, img4, img7, img11];
const rowB = [img9, img2, img13, img11, img5, img7, img3, img8, img1, img12];
const rowC = [img4, img10, img12, img2, img6, img9, img13, img1, img5, img11];

export function GalleryRowTop() {
  return <ParallaxRow images={rowA} direction="left" />;
}

export function GalleryRowMiddle() {
  return <ParallaxRow images={rowC} direction="left" />;
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
