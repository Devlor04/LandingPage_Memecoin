import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      {/* Nền mờ bằng backdrop-blur */}
      {isMenuOpen && (
  <div
    className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
    onClick={() => setIsMenuOpen(false)} // 👉 Thêm onClick để đóng khi bấm ra ngoài
  ></div>
)}

      <div
        className={`fixed w-125 z-50 top-0 left-0  md:py-4 transition-opacity duration-300 ${
          isScrolled ? "bg-opacity-80" : "bg-opacity-100"
        }`}
      >
        <div
          className={`
            bg-[#f1d8d6] shadow-md w-125 transition-all duration-300
            ${isMenuOpen ? "rounded-none px-0 py-0" : "px-6 py-4"}
            md:rounded-full md:px-6 md:py-4 relative
          `}
        >
          {/* MIKANA COIN ở giữa header (chỉ mobile) */}
          <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg tracking-wide z-50">
            MIKANA COIN
          </div>

          <div className="flex justify-between items-center relative z-50">
            {/* Navigation Desktop */}
            <nav className="hidden md:flex space-x-8">
              {["HOME", "INTRODUCTION", "TOKENOMICS", "ROADMAP"].map((text, index) => (
                <a
                  key={index}
                  href={text === "HOME" ? "/" : `#${text.toLowerCase()}`}
                  className="text-white font-semibold transition-all duration-200 hover:text-pink-300 hover:scale-110"
                >
                  {text}
                </a>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile nav (slide từ trái qua) */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#f1d8d6] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col p-6 space-y-4 mt-16">
              {["HOME", "INTRODUCTION", "TOKENOMICS", "ROADMAP"].map((text, index) => (
                <a
                  key={index}
                  href={text === "HOME" ? "/" : `#${text.toLowerCase()}`}
                  onClick={handleNavLinkClick}
                  className="text-white font-semibold text-lg hover:text-pink-500 transition-all"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
