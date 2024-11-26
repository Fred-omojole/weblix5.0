import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <section className="mt-40 pt-20 pb-0 ">
      <div className="flex w-full max-w-[1216px] pr-[64px] pl-[64px] flex-col flex-nowrap flex-start items-center ml-auto mr-auto">
        <div className="flex w-full mb-20 pr-10 pl-10 justify-between items-end gap-20">
          <div className="max-w-[560px]">
            <h2 className=" my-0 text-[78px] leading-[104%] font-medium tracking-[-3.12px] capitalize">
              digital excellence,{" "}
              <span className="text-[#8b8b8b]">delivered</span>
            </h2>
          </div>
        </div>
        <div className=" flex w-full flex-col flex-nowrap justify-start items-start gap-6">
          <div className="flex w-full p-10 flex-col flex-nowrap gap-8 border-solid border-[1px] rounded-[32px] bg-white border-t-[#eee] border-b-[#eee] border-r-[#eee] border-l-[#eee]">
            <div className="flex justify-between items-center gap-6">
              <h3 className="my-0 text-[32px] leading-[116%] font-medium tracking-[-1.28px] ">
                Our Services
              </h3>
              <div className="flex px-[14px] py-2 justify-center items-center rounded-[100px] text-[14px] leading-[132%] text-center tracking-[-0.14px] text-[#0a955a] bg-green-100">
                3 services
              </div>
            </div>
            <div className="gap-3 grid grid-cols-2 row-auto ">
              <a className="relative flex  overflow-hidden w-full max-w-[100%] h-[560px] py-[40px] px-[32px] flex-col flex-nowrap justify-end items-start border-solid border-[1px] rounded-2xl border-[#eee] ">
                <div className="relative text-black z-2 flex flex-col justify-start items-start gap-5">
                  <div className="z-2 flex max-w-[320px] flex-col flex-nowrap gap-3 text-white ">
                    <h4 className="max-w-[200px] my-0 text-[24px] leading-[112%] font-medium tracking-[-0.72px] capitalize">
                      custom website development
                    </h4>
                    <p className="!text-white/60 text-[14px] leading-[132%] tracking-[-0.14px] mb-0 mt-0">
                      Web solutions designed to enhance user experience and meet
                      specific business goals.
                    </p>
                  </div>
                  <div className="px-1 gap-2 rounded-[0px] opacity-100 transition-all duration-200 ease-in-out">
                    <div className="capitalize flex items-center justify-center gap-2 text-white">
                      get started{" "}
                      <span className="w-4 h-4 ">
                        {" "}
                        <MdArrowOutward />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 z-10 w-full h-full backgrounds"></div>
                <Image
                  className="w-full h-full absolute object-cover inset-0 z-0  max-w-[100%] align-middle inline-block"
                  src={"/Custom Website Development.webp"}
                  alt="Custom Website Development"
                  fill
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
