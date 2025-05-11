import React from "react";

const roadmapData = [
  {
    title: "Phase 1: Birth of a Legend",
    points: [
      "Launch of the $MIKAMI token",
      "Initial community building (Telegram, X, Memes)",
      "Launch Liquidity Pool at DEX",
    ],
  },
  {
    title: "Phase 2: Awakening",
    points: [
      "Launch official Mikami’s Shrine",
      "Mikami fans interaction and swag drop",
      "Meme contests and marketing pushes",
    ],
  },
  {
    title: "Phase 3: Expansion",
    points: [
      "First real world merchandise collab tease (signed posters, collectibles)",
      "Massice partnerships campaign accross Asia & anime coummunity",
      "$Mikami burn event (celebrating milestones)",
    ],
  },
  {
    title: "Phase 4: Immortality",
    points: [
      "Launch Mikami DAO - $Mikami holders vote on future events and collabs",
      "Model Context Protocol (MCP) AI agent creation",
      "Global fans gatherings or online concerts",
      "AI agent interaction and monetization - holders exclusive",
    ],
  },
];

const RoadMap = () => {
  return (
    <div className="bg-[#e6d3cc] min-h-screen flex items-center justify-center p-6 font-['Merriweather']">
      <div className="max-w-xl w-full">
        <h1 className="text-2xl font-extrabold text-gray-700 text-center mb-1">
          RoadMap
        </h1>
        <p className="text-center text-gray-600 mb-8">
          From Icon to Blockchain Queen
        </p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          {roadmapData.map((phase, index) => (
            <div className="flex" key={index}>
              <div className="flex flex-col items-center mr-4">
                <div className="w-3 h-3 rounded-full bg-gray-700 mt-1" />
                {index !== roadmapData.length - 1 && (
                  <div className="w-[1px] bg-gray-700 flex-1 mt-1" />
                )}
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
