import Image from "next/image";
import React from "react";
interface Images {
  url: string;
}

interface CarouselProps {
  images: Images[];
}

const VerticalCarousels = ({ images }: CarouselProps) => {
  return (
    <>
      {images.map(({ url }, index) => {
        return (
          <a
            key={index}
            className="flex w-full p-[6px] justify-center items-center aspect-square border-solid border-[1px] border-[#eee] bg-[#eee] rounded-[32px]"
          >
            <Image src={url} width={85} height={85} alt="logo" />
          </a>
        );
      })}
    </>
  );
};

export default VerticalCarousels;
