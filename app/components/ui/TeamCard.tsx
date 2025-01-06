import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const TeamCard = ({ name, role, imageUrl, linkedinUrl }:
  {
    name: string,
    role: string,
    imageUrl: string,
    linkedinUrl: string
  }
) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-main">
      {/* Image Section */}
      <div className="relative">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={200} 
          height={200} 
          className="w-full h-64 object-cover"
        />
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-2 right-2 bg-main  p-2 rounded-full shadow-md"
        >
          <FaLinkedin className="text-black text-2xl" />
        </a>
      </div>

      {/* Text Section */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-white font-semibold">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
