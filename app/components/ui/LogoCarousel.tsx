"use client";

import React from "react";
import Image from "next/image";

const LogoCarousel = () => {
  
const images = [
  "/schools/A-C.png",
  "/schools/UCC.png",
  "/schools/A-I-T.png",
  "/schools/AshesiUniversity.png",
  "/schools/GCTU.png",
  "/schools/KNUST.png",
  "/schools/UENR.png",
  "/schools/UG.png",
];

  return (
    <div className="relative overflow-hidden  py-6">
      <div className="w-full animate-scroll gap-8 grid grid-cols-4">
        {/* Duplicate the logos to create an infinite scrolling effect */}
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="w-auto h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
