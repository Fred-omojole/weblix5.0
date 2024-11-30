"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HighlightedTitle from "./components/Highlighted";
import ReuseableButton from "./components/ReuseableButton";
import Video from "./components/video";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";

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
            <motion.div
              initial="hidden"
              variants={fadeIn("up", 0.05, 0.2)}
              animate="show"
              viewport={{ once: true, amount: 0.1 }}
              className="text-sm font-medium text-black flex gap-2 items-center"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                <span className="rounded-full h-2 w-2 bg-green-500" />
              </span>

              <p className="text-[16px]">
                {/* <span className="animate-ping w-full h-full rounded-full bg-green-500"></span> */}
                Digital Development Agency{" "}
              </p>
            </motion.div>

            <div className="text-center max-w-[800px]  mt-6 tracking-tight leading-snug  text-wrap">
              <HighlightedTitle
                className="font-medium text-[78px] -leading-[0.32]  "
                text={"Crafting"}
                highlightedText={"Next-Gen"}
              />
            </div>
          </div>
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.03, 0.4)}
            animate="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center justify-center gap-3 mt-10 max- "
          >
            <Link href={"/"}>
              <ReuseableButton
                text={"Book a Call"}
                className="px-[32px] py-[20px] text-white bg-black gap-2 flex ease-linear hover:bg-black/85 "
                icon={true}
              />
            </Link>
            <Link href={"/"}>
              <ReuseableButton
                text={"Discover Services"}
                className="px-[32px] py-[20px] text-black  bg-[#eee] gap-2 flex ease-linear"
                icon={false}
              />
            </Link>
          </motion.div>
        </div>

        <div className="mt-[120px] rounded-3xl">
          {" "}
          <Video />
        </div>
      </div>
    </section>
  );
};

export default Hero;
