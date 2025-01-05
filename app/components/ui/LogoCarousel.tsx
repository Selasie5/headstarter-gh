"use client";

import React from "react";
import Image from "next/image";

const LogoCarousel = () => {
  const logos = [
    { id: 1, src: "/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/logo2.png", alt: "Logo 2" },
    { id: 3, src: "/logo3.png", alt: "Logo 3" },
    { id: 4, src: "/logo4.png", alt: "Logo 4" },
  ];

  return (
    <div className="relative overflow-hidden  py-6">
      <div className="flex w-full animate-scroll gap-8">
        {/* Duplicate the logos to create an infinite scrolling effect */}
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
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
