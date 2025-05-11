import { useState } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { Menu, X } from "lucide-react";

const Introduction = () => {
  return (
    <div className="bg-[#f3e1db] min-h-screen">
     

      {/* Content */}
      <main className="flex justify-center py-10 px-4">
        <div className="max-w-md w-full">
          <h1 className="text-center text-[22px] font-semibold text-[#5a5a5a] font-[Georgia] mb-6">
            INTRODUCTION
          </h1>
          <img
            src="https://www.mikamiyua.io/_next/image?url=%2Fyua%2F3.png&w=828&q=75"
            alt="Portrait of a young woman with soft pastel purple and blue background"
            className="w-full rounded-[15px] mb-6 object-cover"
            width="600"
            height="350"
          />
          <p className="text-[14px] text-[#5a5a5a] font-[Georgia] leading-relaxed mb-8">
            Yua Mikami is a dazzling Japanese entertainer, chart-topping singer,
            and social media sensation who evolved from her days in the popular idol
            group SKE48 to become a true multimedia star. As a vibrant member of
            Ebisu Muscats and Honey Popcorn, and with appearances in hit games like
            Yakuza 6, she's constantly expanding her creative universe. A digital
            pioneer at heart, Mikami has become a familiar face at major crypto
            exchange events across Asia, actively exploring how blockchain can
            enhance fan connections. With millions of devoted followers and an
            infectious enthusiasm for emerging technologies, her fan token project
            represents the perfect fusion of entertainment and innovation—giving
            her community exciting new ways to connect with the star they love!
          </p>
          <section className="grid grid-cols-2 gap-6">
            <div className="flex items-center justify-center gap-3 bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3">
              <FaXTwitter className="text-xl text-[#000000]" />
              <span className="text-[15px] text-[#5a5a5a] font-[Georgia] font-semibold">
                8.2M followers
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3">
              <FaInstagram className="text-xl text-[#d62976]" />
              <span className="text-[15px] text-[#5a5a5a] font-[Georgia] font-semibold">
                3.7M followers
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3">
              <FaYoutube className="text-xl text-[#ff0000]" />
              <span className="text-[15px] text-[#5a5a5a] font-[Georgia] font-semibold">
                1.1M followers
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] px-5 py-3">
              <FaTiktok className="text-xl text-[#000000]" />
              <span className="text-[15px] text-[#5a5a5a] font-[Georgia] font-semibold">
                4.5M followers
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
