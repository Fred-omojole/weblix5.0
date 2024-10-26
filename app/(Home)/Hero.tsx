"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HighlightedTitle from "./components/Highlighted";

const Hero = () => {
  return (
    <section className="min-h-screen pt-10 ">
      <div className="px-16">
        <div className="container w-full mx-auto ">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-36">
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
                className="font-medium text-[78px] -leading-[0.32] "
                text={"Crafting"}
                highlightedText={"Next-Gen"}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10 max- ">
            <Link href={""}>
              <button
                className="gap-2 bg-black text-white px-[32px] py-[20px] justify-center text-center rounded-full flex items-center"
                title="call button"
              >
                {" "}
                <Image
                  className=""
                  src="/phonesvg.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                Book a call
              </button>
            </Link>
            <Link href={""}>
              <button
                className="text-black px-[32px] py-[20px] rounded-full bg-[#eee]"
                title="discover button"
              >
                Discover Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
