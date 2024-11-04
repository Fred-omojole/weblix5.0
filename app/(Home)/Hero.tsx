"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HighlightedTitle from "./components/Highlighted";
import ReuseableButton from "./components/ReuseableButton";
import Video from "./components/video";

const Hero = () => {
  return (
    <section className="min-h-screen pt-10 max-w-[1728px] w-[100%] ">
      <div className="px-16">
        <div className="container w-full mx-auto ">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-36 ">
              <Image
                src="/weblix logo.svg"
                width={90}
                height={90}
                alt="webify Logo "
              />
            </div>
            <div className="text-sm font-medium text-black flex gap-2 items-center">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                <span className="rounded-full h-2 w-2 bg-green-500" />
              </span>

              {/* <span className="relative">
                {" "}
                <span className="animate-ping h-full w-full absolute rounded-full bg-green-300 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3  bg-green-500"></span>
              </span> */}
              <p className="text-[16px]">
                {/* <span className="animate-ping w-full h-full rounded-full bg-green-500"></span> */}
                Digital Development Agency{" "}
              </p>
            </div>

            <div className="text-center max-w-[800px]  mt-6 tracking-tight leading-snug  text-wrap">
              <HighlightedTitle
                className="font-medium text-[78px] -leading-[0.32]  "
                text={"Crafting"}
                highlightedText={"Next-Gen"}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10 max- ">
            <Link href={"/"}>
              <ReuseableButton
                text={"Book a Call"}
                className="px-[32px] py-[20px] text-white bg-black gap-2 flex"
                icon={true}
              />

              {/* <button
                className="gap-2 bg-black text-white px-[32px] py-[20px] justify-center text-center cursor-pointer rounded-full flex items-center hover:px-[48px] transition-[padding]"
                title="call button"
              >
                {" "}
                <Image
                  className="text-white"
                  src="/phonesvg.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                Book a Call
              </button> */}
            </Link>
            <Link href={"/"}>
              <ReuseableButton
                text={"Discover Services"}
                className="px-[32px] py-[20px] text-black  bg-[#eee] gap-2 flex"
                icon={false}
              />

              {/* <button
                className="text-black px-[32px] py-[20px] cursor-pointer rounded-full  bg-[#eee] hover:px-[48px] transition-[padding]"
                title="discover button"
              >
                Discover Services
              </button> */}
            </Link>
          </div>
        </div>

        <div className="absolute">
          {" "}
          <Video />
        </div>
      </div>
    </section>
  );
};

export default Hero;
