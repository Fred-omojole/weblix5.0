"use client";
import { motion } from "framer-motion";
import VerticalCarousels from "./VerticalCarousels";

interface Images {
  url: string;
}

interface InfiniteScrollProps {
  images: Images[];
}

const InfiniteVerticalScroll = ({ images }: InfiniteScrollProps) => {
  // const scrollVariants = {
  //   animate: {
  //     y: ["0%", "-100%"], // Scroll up fully
  //     transition: {
  //       duration: 20, // Adjust for scroll speed
  //       repeat: Infinity,
  //       ease: "linear",
  //     },
  //   },
  // };

  return (
    // <div className="relative overflow-hidden h-[600px]">
    <div
    // variants={scrollVariants}
    // animate="animate"
    // className="absolute flex flex-col gap-4"
    >
      {/* Duplicate images for seamless scroll */}
      {[...images, ...images].map((_, index) => (
        <VerticalCarousels key={index} images={images} />
      ))}
    </div>
    // </div>
  );
};

export default InfiniteVerticalScroll;
