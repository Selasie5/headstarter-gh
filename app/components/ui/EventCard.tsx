import React from "react";

const EventCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h2 className="text-white text-xl md:text-2xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default EventCard;
