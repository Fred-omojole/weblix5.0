import Image from "next/image";
import React from "react";

const content1 = ["Services", "Works", "Pricing", "Contact Us"];
const content2 = ["Twitter", "Linkedin", "Facebook"];
const Footer = () => {
  return (
    <section className="pt-[80px] pb-[88px] bg-[#1b1b1b]">
      <div className="flex w-full max-w-[1216px] pr-[64px] pl-[64px] flex-col flex-nowrap justify-start items-center mx-auto">
        <div className="flex w-full justify-between gap-[20px] ">
          <div className="flex w-[104px] flex-col flex-nowrap justify-between items-start gap-[24px]">
            <a className="p-2 max-w-[100%] inline-block ">
              <Image
                className="max-w-[100%] align-middle inline-block"
                src="/Logo-White.svg"
                width={100}
                height={100}
                alt=""
              />
            </a>

            <a className="p-2 max-w-[100%] inline-block ">
              <Image
                className="max-w-[100%] align-middle inline-block"
                src="/Logo Symbol.svg"
                width={100}
                height={100}
                alt=""
              />
            </a>
          </div>
          <div className="flex w-[393px] flex-col flex-nowrap gap-[80px] ">
            <div className="flex flex-col flex-nowrap gap-[56px] ">
              <div className="flex flex-row justify-start items-start gap-[24px]">
                <div className="w-[115px] font-medium text-[#a1a1a1]">Menu</div>
                <div className=" flex flex-col flex-nowrap justify-start items-start flex-1 gap-[12px]">
                  {content1.map((content, index) => (
                    <p
                      key={index}
                      className=" cursor-pointer text-[24px] leading-[132%] tracking-[-0.72px] text-[#fbfbfb] hover:text-neutral-400 transition-all duration-300"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-row justify-start items-start gap-[24px]">
                <div className="w-[115px] font-medium text-[#a1a1a1]">
                  Follow Us
                </div>
                <div className=" flex flex-col flex-nowrap justify-start items-start flex-1 gap-[12px]">
                  {content2.map((content, index) => (
                    <p
                      key={index}
                      className=" cursor-pointer text-[24px] leading-[132%] tracking-[-0.72px] text-[#fbfbfb] hover:text-neutral-400 transition-all duration-300"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-nowrap justify-start items-start gap-[24px]">
              <div className="w-[115px] ">
                <a className=" cursor-pointer  pb-[2px] font-[400] text-[#a1a1a1]  border-b-[1px] border-solid border-b-[#a1a1a1] text-[16px] leading-[132%] tracking-[-0.32px] hover:text-neutral-200 transition-all duration-300 ">
                  Licenses
                </a>
              </div>
              <div className="font-[400] text-[16px] leading-[132%] tracking-[-0.32px] text-[#a1a1a1] ">
                © 2024, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
