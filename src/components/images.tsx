import * as React from "react";

import Image from "next/image";

interface ImagesProps {
  items: {
    img: string;
    location: string;
    alt: string;
  }[];
}

const Images = ({ items }: ImagesProps) => {
  return (
    <div className="gallery">
      {items.map((item, i) => {
        return (
          <div className="images" key={i}>
            <Image
              src={item.img}
              alt={item.alt}
              width={800}
              height={800}
            ></Image>
            {/* <img src={item.img} alt={item.alt} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Images;
