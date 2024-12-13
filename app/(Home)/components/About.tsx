import React from "react";
import Image from "next/image";
import ReuseableButton from "./ReuseableButton";
import Link from "next/link";
const About = () => {
  return (
    <section className="mt-40 pt-20 pb-60 ">
      <div className="flex w-full pr-16 pl-16 flex-col justify-start items-center ">
        <div className="flex flex-col gap-8 max-w-[720px]">
          <div className="  bg-black flex w-[68px] h-[68px] justify-center p-5 items-center rounded-[20px] shadow-lg">
            <Image
              src="/sparkle.svg"
              alt="about-sparkle"
              width={100}
              height={100}
            />
          </div>

          <h3 className="text-[#8b8b8b] leading-[116%] text-[33px] font-medium tracking-[-1.26px] ">
            At Webify, we specialize in{" "}
            <span className="text-black">
              crafting next-gen web experiences
            </span>{" "}
            that blend creativity with cutting-edge technology.
            <br />
            <br />
            <span className="text-black">
              {" "}
              We deliver tailored solutions{" "}
            </span>{" "}
            for upgrading your site or creating a new digital platform.
          </h3>
          <Link href="/work">
            <ReuseableButton
              text={"our works"}
              className={
                "border-solid border-[1px] text-black hover:px-[40px] hover:bg-[#f4f4f4] bg-[#eee] border-[#eee] duration-200   px-[32px] py-[20px] flex items-center justify-center capitalize  "
              }
              icon={false}
            /> 
                 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
