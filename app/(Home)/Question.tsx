"use client";
import React from "react";
import Accordion from "./components/Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";

const Question = () => {
  return (
    <section className="mt-[160px] pt-[80px]">
      <div className="flex w-full max-w-[1216px] px-[64px] flex-col flex-nowrap mx-auto  justify-start items-center ">
        <div className="flex w-full mb-[80px] px-[40px] justify-between  items-end gap-[40px]">
          <motion.h2
            initial="hidden"
            variants={fadeIn("up", 0.05, 0.6)}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className=" text-[#1b1b1b] max-w-[560px] my-0 text-[78px] leading-[104%] font-medium tracking-[-3.12px] "
          >
            Common<span className="text-[#8b8b8b]"> Question</span>
          </motion.h2>
        </div>
        <Accordion />
      </div>
    </section>
  );
};

export default Question;
