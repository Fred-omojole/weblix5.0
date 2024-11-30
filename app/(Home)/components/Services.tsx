import React from "react";

import ServiceCards from "../ServiceCards";
import ReuseableButton from "./ReuseableButton";

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
            <div className="gap-3 grid grid-cols-2  row-auto ">
              {/* CREATE DYNAMIC component  SERVICESs */}

              <ServiceCards />
            </div>
          </div>
          <div className="flex w-full py-8 px-10 justify-between items-center gap-6 border-solid border-[1px] border-[#eee] rounded-[32px] bg-white">
            <h4 className="text-[24px] my-0 leading-[112%] font-medium tracking-[-0.72px] text-[#1b1b1b] ">
              Need custom solution for all of your needs?
            </h4>
            <div className=" flex gap-3 ">
              <ReuseableButton
                text={"Book a call"}
                className={
                  "px-[32px] py-[20px] text-white bg-[#1b1b1b] gap-2 flex hover:px-[39px] ease-linear hover:bg-black/85 "
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
