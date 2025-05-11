import { useState } from "react";

const RightRect = () => {
  const [open, setOpen] = useState(false);

  const firstImage = "https://vb.1cdn.vn/2019/04/28/danviet.mediacdn.vn-upload-2-2019-images-2019-04-28-_fan-nam-xon-mat-vi-bo-anh-sexy-gia-12-trieu-cua-thien-than-phim-18-mikami-7-1556418558-width660height825.jpg";
  const secondImage = "https://tq6.mediacdn.vn/thumb_w/640/133514250583805952/2020/6/12/photo-1-15919319374091505369754.jpg";

  return (
    <div
      className={`
        hidden md:block fixed z-50 top-1/2 transform -translate-y-1/2 
        w-64 h-96                                   /* Hình chữ nhật (256x384) */
        lg:w-60 lg:h-90                             /* Nhỏ hơn chút trên laptop */
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
