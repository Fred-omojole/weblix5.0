"use client";

import React from "react";
import HighlightedTitle from "./components/Highlighted";
import PricingCards from "./PricingCards";
import ReuseableButton from "./components/ReuseableButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";
// import { Props } from "./PricingCards";

interface Props {
  title: string;
  category: string;
  target: string;
  borderColor: string;
  borderColor2: string;
  bgColor: string;
  bgColor2: string;
  word: string;
  textColor: string;
  textColor2: string;
  price: string;
  // button: string;
  color: string;
  className: string;
  categoryBg: string;
  categoryColor: string;
  priceColor: string;
  titleColor?: string;
  feature: string[];
  featureColor: string;
  bgFeature: string;
}

const cardData: Props[] = [
  {
    title: "Starter",
    category: "Small Projects",
    target: "Small Businesses & Startups",
    borderColor: "border-neutral-200",
    borderColor2: "border-neutral-100",
    bgColor: "bg-neutral-50",
    bgColor2: "bg-white",
    word: "Ideal for ",
    textColor: "text-neutral-900",
    textColor2: "text-neutral-400",
    price: "2,500",
    // button: "Get Started",
    color: "text-white",
    className:
      "border-solid border-[1px] text-white bg-black flex py-[20px] px-[32px] justify-center items-center gap-[10px] rounded-[100px] text-center max-w-[100%]",
    categoryBg: " bg-green-100/70 ",
    categoryColor: "text-green-600",
    priceColor: "text-black",
    feature: [
      "Basic Development",
      "Core Functionalities",
      "Standard Support",
      "Weekly Consulting Call",
      "Bi-Weekly Updates",
      "80-Design Hour",
    ],
    featureColor: "text-customGray",
    bgFeature: "bg-customGray",
  },
  {
    title: "Professional",
    category: "Big Projects",
    target: "Scaling Businesses & Ventures",
    borderColor: "border-neutral-900",
    borderColor2: "border-neutral-800",
    bgColor: "bg-neutral-900",
    bgColor2: "bg-neutral-800",
    word: "Great for ",
    textColor: "text-white",
    textColor2: "text-neutral-400",
    price: "4,500",
    // button: "Get Started",
    color: "text-neutral-900",
    className:
      "border-solid border-[1px] text-black bg-white flex py-[20px] px-[32px] justify-center items-center gap-[10px] rounded-[100px] text-center max-w-[100%]",
    categoryColor: "text-white/60",
    categoryBg: "bg-white/10",
    priceColor: "text-white",
    titleColor: "text-white",
    feature: [
      "Advanced Development",
      "Full Feature Set",
      "24/7 Priority Support",
      "Daily Consulting Call",
      "Updates Every 2 Days",
      "128 Design Hours",
    ],
    featureColor: "text-lightGray",
    bgFeature: "bg-darkGrey",
  },
];

const Pricing = () => {
  return (
    <div className="w-full relative bg-dot-black/[0.1] bg-green bg-[#f4f4f4] pt-[160px] pb-[240px] ">
      <section id="pricing" className="pt-[80px]">
        <div className="flex w-full max-w-[1216px] pr-[64px] pl-[64px] mx-auto flex-col flex-nowrap justify-start items-center">
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.05, 0.6)}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex w-full mb-[80px] px-[40px] justify-between items-end gap-10"
          >
            <HighlightedTitle
              isAnimated={false}
              className="max-w-[560px] mt-0 mb-0 text-[78px] leading-[104%] font-medium tracking-[-3.12px] "
              text={"Flexible"}
              highlightedText={"Pricing Plans"}
              colorScheme={"green"}
              suffix={""}
            />
            <div className="max-w-[290px] pb-2">
              <p className="mb-0 mt-0 text-[16px] leading-[132%] font-medium tracking-[-0.32%]">
                Discover our flexible pricing plans designed to fit your budget,
                providing clear and competitive rates for all our services.
              </p>
            </div>
          </motion.div>
          <div className=" w-full mb-[24px] gap-[24px] grid grid-cols-2 row-auto">
            {cardData.map(
              ({
                title,
                category,
                target,
                borderColor,
                borderColor2,
                bgColor,
                bgColor2,
                word,
                textColor,
                textColor2,
                price,
                color,
                className,
                categoryColor,
                categoryBg,
                priceColor,
                titleColor,
                feature,
                featureColor,
                bgFeature,
              }) => {
                return (
                  <PricingCards
                    key={title}
                    title={title}
                    category={category}
                    target={target}
                    borderColor={borderColor}
                    borderColor2={borderColor2}
                    bgColor={bgColor}
                    bgColor2={bgColor2}
                    word={word}
                    textColor={textColor}
                    textColor2={textColor2}
                    price={price}
                    button={"Get Started"}
                    color={color}
                    className={className}
                    categoryColor={categoryColor}
                    categoryBg={categoryBg}
                    priceColor={priceColor}
                    titleColor={titleColor}
                    features={feature}
                    featureColor={featureColor}
                    bgFeature={bgFeature}
                  />
                );
              }
            )}
          </div>
          <motion.div
            initial="hidden"
            variants={fadeIn("up", 0.05, 0.6)}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex w-full py-8 px-10 justify-between items-center gap-6 border-solid border-[1px] border-[#eee] rounded-[32px] bg-white"
          >
            <h4 className="text-[24px] my-0 leading-[112%] font-medium tracking-[-0.72px] text-[#1b1b1b] ">
              Need custom solution for all of your needs?
            </h4>
            <div className=" flex gap-3 ">
              <ReuseableButton
                text={"Book a call"}
                className={
                  "px-[32px] py-[20px] text-white bg-[#1b1b1b] gap-2 flex hover:px-[39px] ease-linear hover:bg-black/85"
                }
                icon={true}
              />
              <ReuseableButton
                text={"Book a call"}
                className={
                  "px-[32px] py-[20px] text-[#1b1b1b]  bg-[#eee] gap-2 flex hover:px-[39px] ease-linear"
                }
                icon={false}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
