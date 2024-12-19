// import Image from "next/image";
// import React from "react";
// interface Images {
//   url: string;
// }

// interface CarouselProps {
//   images: Images[];
// }

// const VerticalCarousels = ({ images }: CarouselProps) => {
//   return (
//     <>
//       {images.map(({ url }, index) => {
//         return (
//           <a
//             key={index}
//             className="flex w-full p-[6px] justify-center items-center aspect-square border-solid border-[1px] border-[#eee] bg-[#eee] rounded-[32px]"
//           >
//             <Image src={url} width={85} height={85} alt="logo" />
//           </a>
//         );
//       })}
//     </>
//   );
// };

// export default VerticalCarousels;

import { InfiniteSlider } from "@/components/ui/InfiniteSlider";
import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";

interface Images {
  url: string;
}

interface CarouselProps {
  images: Images[];
}

const VerticalCarousels = ({ images }: CarouselProps) => {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
    <InfiniteSlider direction="vertical">
      {images.map(({ url }, index) => (
        <a
          key={index}
          className="flex w-full aspect-square justify-center items-center bg-gray-100 rounded-2xl shadow-md"
        >
          <Image src={url} width={50} height={50} alt="logo" />
        </a>
      ))}
    </InfiniteSlider>
    // </div>
  );
};

export default VerticalCarousels;
