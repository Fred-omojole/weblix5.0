import React from "react";
import HighlightedTitle from "./components/Highlighted";

const Contact = () => {
  return (
    <div className="w-full relative bg-dot-black/[0.1] bg-green bg-[#f4f4f4] pt-[160px] pb-[240px] ">
      <section className="pt-[80px]">
        <div className=" flex w-full max-w-[1216px] px-[64px] flex-col flex-nowrap justify-start items-center mx-auto">
          <div className="flex w-full mb-[80px] px-[40px] justify-between items-end gap-[40px]">
            <HighlightedTitle
              className="max-w-[560px] mt-0 mb-0 text-[78px] leading-[104%] font-medium tracking-[-3.12px] "
              text={"Become"}
              highlightedText={"Connected"}
              colorScheme={"blue"}
              suffix={""}
            />
            <div className="max-w-[280px] pb-[8px] ">
              <p className="text-[16px] leading-[132%] font-medium tracking-[-0.32px]">
                We&apos;re here to answer your questions and discuss how we can
                help you achieve your goals.
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
