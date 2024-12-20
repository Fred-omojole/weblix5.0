"use client";

import React from "react";
import ReuseableButton from "./components/ReuseableButton";
import { IoIosCheckmark } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";

import { InfiniteSlider } from "@/components/ui/InfiniteSlider";

interface OptimalProps {
  icon: JSX.Element;
  text: string;
}

interface mediumProps {
  icon: JSX.Element;
  text: string;
}

const optimal: OptimalProps[] = [
  {
    icon: <IoIosCheckmark className="w-[12px] h-[12px] " />,
    text: "senior developers",
  },
  {
    icon: <IoIosCheckmark className="w-[12px] h-[12px]" />,
    text: "innovative development practices ",
  },
  {
    icon: <IoIosCheckmark className="w-[12px] h-[12px]" />,
    text: "tailored development solutions ",
  },
  {
    icon: <IoIosCheckmark className="w-[12px] h-[12px]" />,
    text: "client-centric approach",
  },
  {
    icon: <IoIosCheckmark className="w-[12px] h-[12px] " />,
    text: "rigorous testing and validation ",
  },
];

const medium: mediumProps[] = [
  {
    icon: <HiMiniXMark className="w-[12px] h-[12px] " />,
    text: "Junior Developers",
  },
  {
    icon: <HiMiniXMark className="w-[12px] h-[12px]" />,
    text: "Outdated Technologies and Approaches",
  },
  {
    icon: <HiMiniXMark className="w-[12px] h-[12px]" />,
    text: "Generic Solution or Off-the-Shelf Products",
  },
  {
    icon: <HiMiniXMark className="w-[12px] h-[12px]" />,
    text: "Agency-Centric Approach ",
  },
  {
    icon: <HiMiniXMark className="w-[12px] h-[12px]  " />,
    text: "Limited Testing or Inadequate Quality Control",
  },
];

const images = [
  { url: "/Logo 1.svg" },
  { url: "/Logo 2.svg" },
  { url: "/Logo 3.svg" },
  { url: "/Logo 4.svg" },
  { url: "/Logo 5.svg" },
];

const image = [
  { url: "/Logo 7.svg" },
  { url: "/Logo 6.svg" },
  { url: "/Logo 8.svg" },
  { url: "/Logo 9.svg" },
  { url: "/Logo 10.svg" },
];

const Benefits = () => {
  return (
    <section className="mt-[160px] pt-[80px] pb-0">
      <div className="flex w-full max-w-[1216px] px-[64px] flex-col flex-nowrap justify-start items-center mx-auto">
        <motion.div
          initial="hidden"
          variants={fadeIn("up", 0.05, 0.6)}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex w-full px-[40px] mb-[80px] justify-between items-end gap-10"
        >
          <h2 className="my-0 max-w-[560px] text-[78px] leading-[104%] font-medium tracking-[-3.12px] text-[#8b8b8b]">
            Benefits that{" "}
            <span className="capitalize text-black">drive success</span>
          </h2>
          <ReuseableButton
            text={"Book a call"}
            className={
              "px-[32px] py-[20px] text-white bg-black gap-2 flex ease-linear hover:bg-black/85"
            }
            icon={true}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          variants={fadeIn("up", 0.05, 0.6)}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex  w-full mb-6 pt-[40px] pr-[40px] pb-[24px] pl-[40px] gap-0 border-solid border-[1px] border-[#eee] rounded-[32px] bg-white"
        >
          <div className="flex flex-col flex-nowrap justify-start items-start gap-8 flex-1">
            <Image
              src="/weblix logo.svg"
              width={90}
              height={90}
              alt="webify Logo "
            />
            <div className="flex w-full flex-col flex-nowrap gap-0">
              {optimal.map(({ icon, text }, index) => {
                return (
                  <div
                    key={index}
                    className=" flex py-5 justify-start items-center gap-3 border-solid border-t-[1px] border-t-[#eee]"
                  >
                    <div className="flex w-6 h-6 p-[6px] justify-center items-center border-solid border-[1px] rounded-[6px] border-[#eee]  ">
                      {icon}
                    </div>
                    <div className="capitalize text-[16px] leading-[132%] font-medium tracking-[-0.32px]">
                      {text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col flex-nowrap justify-start items-start gap-8 flex-1">
            <div className="capitalize text-[16px] leading-[132%] font-medium tracking-[-0.32px]">
              other development agencies
            </div>
            <div className="flex w-full flex-col flex-nowrap gap-0">
              {medium.map(({ icon, text }, index) => {
                return (
                  <div
                    key={index}
                    className="flex py-5 justify-start items-center gap-3 border-solid border-t-[1px] border-t-[#eee]  text-[16px] leading-[132%] font-medium tracking-[-0.32px]"
                  >
                    <div className="flex w-6 h-6 p-[6px] justify-center items-center border-solid border-[1px] rounded-[6px] border-[#eee]">
                      {icon}
                    </div>
                    <div className="text-[#8b8b8b] ">{text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className="flex overflow-hidden w-full h-[600px] px-10  gap-3 border-solid border-[1px] rounded-[32px] border-[#eee] b">
          <div className="grid grid-cols-4 w-full h-[600px] space-x-4">
            <InfiniteSlider className="w-full" direction="vertical">
              {images.map(({ url }, index) => (
                <a
                  className="aspect-square flex w-full p-10 justify-center border-solid border-[1px] border-[#eee] rounded-[32px] bg-[#f4f4f4]    "
                  key={index}
                >
                  <Image
                    className="aspect-square w-[100px]"
                    src={url}
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </a>
              ))}
            </InfiniteSlider>

            <InfiniteSlider direction="vertical" reverse>
              {image.map(({ url }, index) => (
                <a
                  className="aspect-square flex w-full p-10 justify-center border-solid border-[1px] border-[#eee] rounded-[32px] bg-[#f4f4f4]    "
                  key={index}
                >
                  <Image
                    className="aspect-square w-[100px]"
                    src={url}
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </a>
              ))}
            </InfiniteSlider>

            <InfiniteSlider direction="vertical">
              {images.map(({ url }, index) => (
                <a
                  className="aspect-square flex w-full p-10 justify-center border-solid border-[1px] border-[#eee] rounded-[32px] bg-[#f4f4f4]    "
                  key={index}
                >
                  <Image
                    className="aspect-square  w-[100px]"
                    src={url}
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </a>
              ))}
            </InfiniteSlider>
            <InfiniteSlider direction="vertical" reverse>
              {image.map(({ url }, index) => (
                <a
                  className="aspect-square flex w-full p-10 justify-center border-solid border-[1px] border-[#eee] rounded-[32px] bg-[#f4f4f4]    "
                  key={index}
                >
                  <Image
                    className="aspect-square  w-[100px]"
                    src={url}
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </a>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
