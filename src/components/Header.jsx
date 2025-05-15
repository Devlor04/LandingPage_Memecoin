import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // Import react-scroll

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
    setIsMenuOpen(false); // Đóng menu trên mobile
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed w-125 z-50 top-0 left-0 md:py-4 transition-opacity duration-300 ${
          isScrolled ? "bg-opacity-80" : "bg-opacity-100"
        }`}
      >
        <div
          className={`
            bg-[#D0D7E1] shadow-md w-125 transition-all duration-300
            ${isMenuOpen ? "rounded-none px-0 py-0" : "px-6 py-4"}
            md:rounded-full md:px-6 md:py-4 relative
          `}
        >
          <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#072D44] font-bold text-lg tracking-wide z-50">
            MIKANA COIN
          </div>

          <div className="flex justify-between items-center relative z-50">
            <nav className="hidden md:flex space-x-8">
              {["HOME", "INTRODUCTION", "TOKENOMICS", "ROADMAP"].map((text, index) => (
                <Link
                  key={index}
                  to={text === "HOME" ? "contact" : text.toLowerCase()} // Liên kết đến id của section
                  smooth={true} // Cuộn mượt mà
                  duration={500} // Thời gian cuộn (ms)
                  className="text-white font-semibold transition-all duration-200 hover:text-[#5790AB] hover:scale-110 cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  {text}
                </Link>
              ))}
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-[#D0D7E1] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col p-6 space-y-4 mt-16">
              {["HOME", "INTRODUCTION", "TOKENOMICS", "ROADMAP"].map((text, index) => (
                <Link
                  key={index}
                  to={text === "HOME" ? "contact" : text.toLowerCase()} // Liên kết đến id của section
                  smooth={true}
                  duration={500}
                  className="text-white font-semibold text-lg hover:text-[#5790AB] transition-all cursor-pointer"
                  onClick={handleNavLinkClick}
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;