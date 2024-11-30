import Image from "next/image";
import React from "react";

import { MdArrowOutward } from "react-icons/md";

interface CardProps {
  id: number;
  title: string;
  description: string;
  action: string;
  icon?: JSX.Element;
  alt: string;
  imageUrl: string;
}

const cards: CardProps[] = [
  {
    id: 1,
    title: "custom website development",
    imageUrl: "/Custom Website Development.webp",
    description:
      "Web solutions designed to enhance user experience and meet specific business goals",
    action: "get started",
    icon: <MdArrowOutward />,
    alt: "custom website development ",
  },

  {
    id: 2,
    title: "mobile app development",
    imageUrl: "/Mobile App Development.webp",
    description:
      "We create seamless, user-friendly mobile applications for ios and android",
    action: "get started",
    icon: <MdArrowOutward />,
    alt: "mobile app development ",
  },

  {
    id: 3,
    title: "Support and Maintenance ",
    imageUrl: "/telecommunication.webp",
    description:
      "Regular updates, performance boosts, and fixes to keep your system running smoothly",
    action: "get started",
    icon: <MdArrowOutward />,
    alt: "Support and Maintenance ",
  },
];

const ServiceCards = () => {
  return (
    <>
      {cards.map(({ id, title, description, action, icon, imageUrl, alt }) => {
        return (
          <>
            <a
              key={id}
              className={
                id === cards.length
                  ? `relative flex row-span-1 col-span-2 overflow-hidden w-full  h-[464px] py-[40px] px-[32px] flex-col flex-nowrap justify-end items-start border-solid border-[1px] rounded-2xl border-t-[#eee] border-b-[#eee] border-r-[#eee] border-l-[#eee] `
                  : `relative flex  overflow-hidden w-full max-w-[100%] h-[560px] py-[40px] px-[32px] flex-col flex-nowrap justify-end items-start border-solid border-[1px] rounded-2xl border-t-[#eee] border-b-[#eee] border-r-[#eee] border-l-[#eee] `
              }
            >
              <div className="relative text-black z-10 flex flex-col justify-start items-start gap-5">
                <div className="z-10 flex max-w-[320px] flex-col flex-nowrap gap-3 text-white">
                  <h4 className="max-w-[200px] my-0 text-[24px] leading-[112%] font-medium tracking-[-0.72px] capitalize">
                    {title}
                  </h4>
                  <p className="!text-white/60 text-[14px] leading-[132%] tracking-[-0.14px] mb-0 mt-0">
                    {description}
                  </p>
                </div>
                <div className="group px-1 gap-2 cursor-pointer">
                  <div className="capitalize flex  items-center justify-center gap-2 text-white transition-all duration-200  group-hover:text-neutral-400">
                    {action}{" "}
                    <span className="w-4 h-4 transition-all group-hover:translate-x-2 duration-200 group-hover:text-neutral-400">
                      {icon}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-[1] w-full h-full bg-[linear-gradient(45deg,black_15%,hsla(0,0.00%,10.59%,0.00)_80%)] "></div>

              <Image
                className="w-full h-full absolute object-cover inset-0 z-0   max-w-[100%] align-middle inline-block"
                src={imageUrl}
                alt={alt}
                fill
              />
            </a>
          </>
        );
      })}
    </>
  );
};

export default ServiceCards;
