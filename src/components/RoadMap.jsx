import React from "react";
import image7 from '../images/8.jpg';

const roadmapData = [
  {
    title: "Phase 1: The Legend Begins",
    points: [
      "Launch of $FUKADA token.",
      "Community building on X (Twitter), Telegram, and meme channels.",
      "Initial liquidity pool creation on DEXs.",
    ],
  },
  {
    title: "Phase 2: Rise of the Shrine",
    points: [
      "Launch of the Fukada Shrine — a fan hub and engagement portal",
      "Meme contests, giveaways, and viral marketing campaigns.",
      "Exclusive merch drops (e.g., signed posters, collectibles).",
    ],
  },
  {
    title: "Phase 3: Cultural Expansion",
    points: [
      "Collaborations with anime brands and Asian fan communities.",
      "Token burn events to mark milestones.",
      "Limited-edition NFTs and digital collectibles.",
    ],
  },
  {
    title: "Phase 4: Immortality",
    points: [
      "Launch of Fukada DAO — giving holders governance power over future decisions.",
      "Release of Eimi Fukada’s AI Agent for fan interaction.",
      "Global fan meetups and exclusive virtual concerts.",
      "AI integration into Web3 platforms for personalized experiences.",
    ],
  },
];

const RoadMap = () => {
  return (
    <div className="bg-[#d5dfeb] relative w-full px-4 py-10 md:px-6 md:py-12 font-['Merriweather']">
      {/* Hình nền mờ */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${image7})` }}
      ></div>

      <div className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
        <h1 className="text-xl md:text-2xl font-extrabold text-[#072D44] text-center mb-1">
          RoadMap
        </h1>
        <p className="text-center text-[#064469] mb-8 text-sm md:text-base">
          From Icon to Blockchain Queen
        </p>

        <div className="space-y-8 text-[#064469] text-sm leading-relaxed">
          {roadmapData.map((phase, index) => (
            <div className="flex" key={index}>
              <div className="flex flex-col items-center mr-4">
                <div className="w-3 h-3 rounded-full bg-gray-700 mt-1" />
                <div className="w-[1px] bg-[#5790AB] flex-1 mt-1" />
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">{phase.title}</h2>
                {phase.points.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
