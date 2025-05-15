import { useState } from "react";
import myImage from '../images/1.jpg';
import { FaXTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";

const Introduction = () => {
  return (
    <div className=" bg-[#d5dfeb] min-h-screen">
      <main className="flex justify-center py-10 px-4">
        <div className="max-w-md w-full">
          <h1 className="text-center text-[22px] font-semibold text-[#072D44] font-[Georgia] mb-6">
            INTRODUCTION
          </h1>
          <img
            src={myImage}
            alt="Portrait of a young woman with soft pastel purple and blue background"
            className="w-[300px] h-[380px] rounded-[15px] mb-6 object-cover mx-auto"
          />
          <p className="text-[14px] text-[#064469] font-[Georgia] leading-relaxed mb-8">
            Eimi Fukada is a magnetic icon in Japan’s entertainment world—bold, captivating, and unapologetically modern. From her roots in modeling and acting to becoming a global digital sensation, Eimi has amassed millions of followers who adore her charm, wit, and fearless energy.
            Now, she's stepping into the Web3 spotlight with $FUKADA, a memecoin that goes beyond hype. It's a symbol of empowerment, fan connection, and internet culture—minted on-chain for the new generation of degens and die-hard fans.
          </p>
          <section className="grid grid-cols-2 gap-6">
            <a
              href="https://x.com/FUKADA0318?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#D0D7E1] rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3 hover:bg-[#5790AB] hover:text-white transition"
            >
              <FaXTwitter className="text-xl text-[#000000]" />
              <span className="text-[15px] text-[#072D44] font-[Georgia] font-semibold">
                4.3M followers
              </span>
            </a>
            <a
              href="https://www.instagram.com/eimi0318/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#D0D7E1] rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3 hover:bg-[#5790AB] hover:text-white transition"
            >
              <FaInstagram className="text-xl text-[#d62976]" />
              <span className="text-[15px] text-[#072D44] font-[Georgia] font-semibold">
                2.9M followers
              </span>
            </a>
            <a
              href="https://youtube.com/channel/UCprlj3Bvn0c3XsyvZsIrzEg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#D0D7E1] rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3 hover:bg-[#5790AB] hover:text-white transition"
            >
              <FaYoutube className="text-xl text-[#ff0000]" />
              <span className="text-[15px] text-[#072D44] font-[Georgia] font-semibold">
                1.2M followers
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@fukada0318"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#D0D7E1] rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3 hover:bg-[#5790AB] hover:text-white transition"
            >
              <FaTiktok className="text-xl text-[#000000]" />
              <span className="text-[15px] text-[#072D44] font-[Georgia] font-semibold">
                5.5M followers
              </span>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Introduction;