"use client";

import Image from "next/image";
import { useRef } from "react";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
]; // Reemplaza con tus imágenes

const ImageScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2"
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[200px]">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={150}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
