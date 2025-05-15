import { useState } from "react";
import image1 from '../images/4.jpg';
import image2 from '../images/5.jpg';

const LeftCircle = () => {
  const [open, setOpen] = useState(false);

  const firstImage = image1;
  const secondImage = image2;

  return (
    <div
      className={`
         hidden lg:block fixed top-1/2 left-10 transform -translate-y-1/2 z-50
        w-60 h-60 rounded-full cursor-pointer transition-all
      `}
      style={{
        left: "calc((100vw - 450px) / 8)", // Hơi gần mép hơn trên iPad và desktop
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={open ? secondImage : firstImage}
          alt="Circle Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default LeftCircle;