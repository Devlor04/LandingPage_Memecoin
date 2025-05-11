import { useState } from "react";

const LeftCircle = () => {
  const [open, setOpen] = useState(false);

  const firstImage = "https://cdn.24h.com.vn/upload/4-2021/images/2021-10-30/Thien-than-phim-18--dau-gia-anh-nong-fan-do-xo-gianh-giat-chiec-ve-yua-mikami--1--1635606665-682-width660height825.jpg";
  const secondImage = "https://sineksekiz.com/wp-content/uploads/2025/02/anh-yua-mikami-khong-che-8nopgz3.jpg";

  return (
    <div
      className="hidden md:block fixed z-50 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer transition-all
                 w-72 h-72 lg:w-60 lg:h-60 lg:left-4 md:left-6"
      style={{
        left: "calc((100vw - 450px) / 6)", // 👉 áp dụng cho desktop
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
