import React from "react";
import HighlightedTitle from "./components/Highlighted";
import ReuseableButton from "./components/ReuseableButton";
import Image from "next/image";

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
          <div className="w-full gap-[24px] row-auto grid grid-cols-2">
            <div className="flex p-[40px] flex-col flex-nowrap gap-[32px] border-solid border-[1px] rounded-[32px] bg-[#fbfbfb] border-[#eee] ">
              <h3 className="max-w-[344px] my-0 text-[32px] leading-[116%] font-medium tracking-[-1.28px]">
              We look forward to connecting with you!
              </h3>
              <div className="m-0">
                <form className="flex flex-col flex-nowrap gap-[32px] ">
                  <div className="flex flex-col flex-nowrap gap-[12px] ">
                  <input  aria-required id="name" name="name" placeholder="Full Name" className="outline-none h-[60px] mb-0 bg-[#f4f4f4] py-[20px] px-[24px] border-solid border-[1px] border-[#eee] rounded-[16px] leading-[132%] font-[400] text-[#1b1b1b]"/>
                  <input  aria-required id="email" name="email" placeholder="Email" className="outline-none h-[60px] mb-0 bg-[#f4f4f4] py-[20px] px-[24px] border-solid border-[1px] border-[#eee] rounded-[16px] leading-[132%] font-[400] text-[#1b1b1b]"/>
                  <textarea name="message" id="message" placeholder="How can we help you?" className=" outline-none h-auto min-h-[144px] mb-0 py-[20px] px-[24px] border-solid border-[1px] rounded-[16px] bg-[#f4f4f4] font-[400] leading-[132%] border-[#eee] text-[#1b1b1b] "></textarea>
                  </div>
                  <button title="button" type="submit" className="flex py-[20px] px-[32px] justify-center items-center gap-[10px] rounded-[100px] text-center border-solid border-[1px] border-[#1b1b1b] bg-[#1b1b1b] text-white shadow-[rgba(27,27,27,0.25)_0px_6px_12px_0px] hover:bg-neutral-700 duration-300 transition-all hover:border-neutral-700">
                  Send a Message
                  </button>
                </form>
              </div>
            </div>
            <div className="relative flex overflow-hidden p-[40px] flex-col flex-nowrap rounded-[32px]">
              <div className="relative z-[2] flex flex-col flex-nowrap justify-between items-start flex-1 gap-[24px]  ">
               <div className="flex w-full flex-col flex-nowrap justify-start items-start gap-[24px]">
               <h3 className="max-w-[344px] text-white m-0 text-[32px] leading-[116%] font-medium tracking-[-1.28px]">
                     Book a time to discuss your next project
                    </h3>
                         <ReuseableButton text={"Book a Call"} className={"px-[32px] py-[20px] text-black  bg-[#fbfbfb] gap-2 flex ease-linear"} icon={true}/>
                         </div>
                         <div className="flex justify-start items-center gap-[8px]">                       
              <div className="relative inline-flex h-2 w-2">
                <div className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                <div className="rounded-full h-2 w-2 bg-green-500" />
              </div>

              <div className="text-[16px] text-white leading-[132%] font-medium tracking-[-0.32px]">              
               Available for New Projects
              </div>
         
                         </div>
                         </div>
                         <div className="absolute inset-0 z-[1] w-full h-full bg-[linear-gradient(135deg,black_15%,hsla(0,0.00%,10.59%,0.00)_80%)]"></div>
                         <Image src="/Contact Block Image.webp" fill alt=" "/>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
