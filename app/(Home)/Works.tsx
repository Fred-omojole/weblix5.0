"use client";

import { fadeIn } from "@/lib/variant";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface Image {
  id: number;
  url_1: string;
  url_2: string;
  title: string;
  action: string;
  icon: JSX.Element;
  bgColor: string;
}

const workImage: Image[] = [
  {
    id: 1,
    url_1: "/Algenius.png",
    url_2: "/Algenius Layout.png",
    title: "Algenius",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: " rgb(188,119,228)",
  },

  {
    id: 2,
    url_1: "/AWilliams.png",
    url_2: "/AWilliams Layout.png",
    title: "AWilliams",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: "rgb(27,27,27)",
  },
  {
    id: 3,
    url_1: "/Bonanza.png",
    url_2: "/Bonanza Layout.png",
    title: "Bonanza",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: "rgb(241,198,60)",
  },
  {
    id: 4,
    url_1: "/Digibi.png",
    url_2: "/Digibi Layout.png",
    title: "Digibi",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: "rgb(160,255,39)",
  },
  {
    id: 5,
    url_1: "/Road Safety Quiz.png",
    url_2: "/Road Safety Quiz Layout.png",
    title: "Road Safety Quiz",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: "rgb(0,122,255) ",
  },
  {
    id: 6,
    url_1: "/Squash.png",
    url_2: "/Squash Layout.png",
    title: "Squash",
    action: "View Project",
    icon: <MdArrowOutward />,
    bgColor: "rgb(0,71,255) ",
  },
];

const Works = () => {
  return (
    <section id="works" className="mt-[160px] pt-[80px] pb-[240px] ">
      <div className="flex w-full max-w-[1216px] pr-[64px] pl-[64px] flex-col flex-nowrap justify-start items-center ml-auto mr-auto">
        <motion.div
          initial="hidden"
          variants={fadeIn("up", 0.05, 0.6)}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex w-full mb-[80px] pr-[40px] pl-[40px] justify-between items-end gap-10"
        >
          <h2 className=" text-[#1b1b1b] max-w-[560px] mt-0 mb-0 text-[78px] leading-[104%] tracking-[-3.12px] font-medium">
            Showcase{" "}
            <span className="text-[#8b8b8b] flex"> of&nbsp;Excellence</span>
          </h2>
          <div className="max-w-[280px] pb-[8px] text-[16px]">
            <p className="text-[#1b1b1b] mb-0  leading-[132%] tracking-[-0.32px] font-medium">
              Explore our portfolio of innovative digital solutions, showcasing
              our creativity and expertise in delivering exceptional results.
            </p>
          </div>
        </motion.div>
        <div className="w-full">
          <div className=" grid w-full grid-cols-2 gap-y-10 gap-x-[20px] ">
            {workImage.map(
              ({ id, url_1, url_2, title, action, icon, bgColor }) => {
                return (
                  <div key={id} className="w-full h-auto">
                    <motion.a
                      initial="hidden"
                      variants={fadeIn("up", 0.05, 0.6)}
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                      className="flex flex-col flex-nowrap gap-6 h-auto"
                    >
                      <div
                        style={{ backgroundColor: bgColor }}
                        className="relative flex overflow-hidden w-full pt-12 pr-12 pl-12 flex-col flex-nowrap justify-start items-center aspect-[532/640] rounded-[32px] group"
                      >
                        {/* First Image - Default visible */}
                        <Image
                          className="w-auto h-full aspect-[436/592] rounded-tl-[16px] rounded-tr-[16px] object-cover max-w-full align-middle inline-block transition-all duration-500 ease-in-out group-hover:opacity-0"
                          src={url_1}
                          alt={title}
                          width={900}
                          height={900}
                        />

                        {/* Second Image - Expands on hover */}
                        <Image
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                          src={url_2}
                          alt={`${title} Layout`}
                          width={900}
                          height={900}
                        />
                      </div>

                      <div className="flex px-6 justify-between gap-6 items-center cursor-pointer group">
                        <h4 className="mt-0 mb-0 text-[24px] leading-[112%] font-medium tracking-[-0.72]">
                          {title}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="capitalize transition-all duration-300 ease-in-out group-hover:-translate-x-2 group-hover:text-neutral-400">
                            {action}
                          </div>
                          <span className="w-4 h-4 inline-block transition-all duration-300 group-hover:text-neutral-400">
                            {icon}
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
