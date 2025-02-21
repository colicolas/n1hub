import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

interface PlayerCardProps {
  name: string;
  joinDate: string;
  clan?: string;
  description: string;
  medals?: string[];
  youtube?: string[];
}

// Helper function to replace ' with &apos;
const sanitizeText = (text: string) => text.replace(/'/g, "&apos;");

const PlayerCard: React.FC<PlayerCardProps> = ({ name, joinDate, clan, description, medals = [], youtube = [] }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white">{sanitizeText(name)}</h2>
      <p className="text-gray-400 text-sm">Joined: {sanitizeText(joinDate)}</p>
      {clan && <p className="text-gray-400 text-sm">Clan: {sanitizeText(clan)}</p>}
      <p className="text-gray-300 mt-2">{sanitizeText(description)}</p>

      {/* Medals Section */}
      {medals.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center">
          {medals.map((medal, index) => (
            <Image
              key={index}
              src={`/awards/${medal}.png`} // Assume medal images are stored in /public/awards
              alt={medal}
              width={24}
              height={24}
              className="mr-2"
            />
          ))}
        </div>
      )}

      {/* YouTube Links Section */}
      { Array.isArray(youtube) && youtube.length > 0 && (
        <div className="mt-3 flex space-x-3">
          {youtube.map((yt, index) => (
            <Link key={index} href={yt} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500 text-2xl hover:text-red-600" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
