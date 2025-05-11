import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-600 font-sans max-w-3xl mx-auto px-1 py-1 text-center">
      <p className="text-xs leading-4 uppercase tracking-widest mb-20">
        MARKET FEES MIGHT BE HIGH DURING THE LAUNCH PERIOD, AND SHOULD SUBSIDE QUICKLY AFTER LAUNCH.
      </p>

      <div className="mb-6">
        <img
          src="https://storage.googleapis.com/a1aa/image/b4e92739-0c40-4a95-6134-1409b06a82f0.jpg"
          alt="Black stylized X logo symbol centered"
          className="mx-auto"
          width={40}
          height={40}
        />
      </div>

      <p className="text-sm text-gray-700 mb-10">@Mikami_Coin</p>

      <p className="text-xs text-gray-700 mb-6">© 2025 mikamiyua.io All rights reserved.</p>

      <p className="text-xs text-gray-700 mb-6 leading-relaxed">
        SMikami are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "SMIKAMI" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type.
      </p>

      <p className="text-xs text-gray-700 mb-6 leading-relaxed">
        "MIKAMI" is a registered trademark of Mikami Yua Fans Operations Ltd. This product is created in collaboration with Yua Mikami and her official management company. Mikami Digital Collectibles LLC uses the "MIKAMI" name and the name, image and likeness of Yua Mikami pursuant to the terms of an official partnership agreement with Yua Mikami and her management team.
      </p>

      <p className="text-xs text-gray-700 leading-relaxed">
        <span className="font-semibold">Disclaimer:</span> This coin and project are not intended to market to or make sales to the Japanese market or Japanese users. We explicitly reject any sales to Japanese users and market participants.
      </p>
    </div>
  );
};

export default Footer;
