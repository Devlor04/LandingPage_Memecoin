import { useState } from "react";
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';

const RightRect = () => {
  const [open, setOpen] = useState(false);

  const firstImage = image6
  const secondImage = image7

  return (
    <div
      className={`
        hidden lg:block fixed z-50 top-1/2 transform -translate-y-1/2 
        w-64 h-96                                  
        lg:w-60 lg:h-90                            
        rounded-tl-full rounded-tr-full
        cursor-pointer transition-all
      `}
      style={{
        right: "calc((100vw - 450px) / 6)",         // Canh đối xứng với LeftCircle
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={open ? secondImage : firstImage}
          alt="Rect Image"
          className="w-full h-full object-cover rounded-tl-full rounded-tr-full"
        />
      </div>
    </div>
  );
};

export default RightRect;
