"use client";
import React from "react";
import Image from "next/image";

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
            <div className="text-sm font-medium gap-x- text-black flex gap-2 items-center">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                <span className="rounded-full h-2 w-2 bg-green-500" />
              </span>

              {/* <span className="relative">
                {" "}
                <span className="animate-ping h-full w-full absolute rounded-full bg-green-300 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3  bg-green-500"></span>
              </span> */}
              <p className="">
                {/* <span className="animate-ping w-full h-full rounded-full bg-green-500"></span> */}
                Digital Development Agency{" "}
              </p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
