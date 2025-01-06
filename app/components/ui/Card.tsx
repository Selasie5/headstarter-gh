import React from 'react';

interface CardProps {
  svgComponent: React.ReactNode; // Correct type for an SVG component
  cardTitle: string;
  cardContent: string;
}

const Card: React.FC<CardProps> = ({ svgComponent, cardTitle, cardContent }) => {
  return (
    <div className="border-2 border-gray-500 flex flex-col justify-center items-center rounded-lg px-4 py-6 w-72 h-96 space-y-12">
      <div className="mb-3 text-main bg-main/50  p-4 rounded-lg">{svgComponent}</div>
      <div>
        <h3 className="text-white text-2xl font-semibold mb-2 text-center">{cardTitle}</h3>
        <p className="text-gray-200 text-center">{cardContent}</p>
        </div>
    </div>
  );
};

export default Card;
