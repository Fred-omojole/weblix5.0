"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Items = {
  [key: string]: boolean;
};

const items = [
  {
    id: "1",
    title: "What type of  development services do you offer",
    content:
      "We provided a wide range of development services including web development, custom software solutions, API integration, support and maintenance.",
  },
  {
    id: "2",
    title: "How do you ensure the quality of your projects?",
    content:
      "We ensure quality through rigorous testing, code reviews, and adherence to best practices in development. Our senior developers oversee all projects to maintain high standards.",
  },
  {
    id: "3",
    title: "What is your development process like?",
    content:
      " Our process involves initial consultation, planning, design, development, testing, and deployment. We follow Agile methodologies to ensure flexibility and responsiveness.",
  },
  {
    id: "4",
    title: "Can you work with existing platforms?",
    content:
      "Yes, we can integrate new solutions with your existing platforms or upgrade legacy systems to improve performance and functionality.",
  },

  {
    id: "5",
    title: "Can you work with existing platforms?",
    content:
      "Yes, we can integrate new solutions with your existing platforms or upgrade legacy systems to improve performance and functionality.",
  },

  {
    id: "6",
    title: "Can you work with existing platforms?",
    content:
      "Yes, we can integrate new solutions with your existing platforms or upgrade legacy systems to improve performance and functionality.",
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<Items>({});

  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  const toggleBtn = (id: string) => {
    setIsOpen((prev) => ({
      ...prev,

      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div>
      <div className="flex w-full gap-[16px]">
        {/* First Column */}
        <div className="flex flex-col flex-nowrap flex-1 gap-[16px]">
          {firstHalf.map(({ id, title, content }) => (
            <div
              key={id}
              className="flex p-[40px] flex-col gap-0 border-solid border-[1px] border-[#eee] rounded-[24px] cursor-pointer bg-white"
            >
              <div
                onClick={() => toggleBtn(id)}
                className="flex justify-start items-center gap-[24px] text-black text-[16px] leading-[132%] font-medium tracking-[-0.32px]"
              >
                <div className="flex-1">{title}</div>
                {isOpen[id] ? (
                  <Image
                    className="relative flex items-center justify-center"
                    src="/minus.png"
                    width={14}
                    height={14}
                    alt="icon"
                  />
                ) : (
                  <Image
                    className="relative flex items-center justify-center"
                    src="/plus.png"
                    width={14}
                    height={14}
                    alt="icon"
                  />
                )}
              </div>
              <div
                className={`transition-all ease-in-out duration-300 overflow-hidden ${
                  isOpen[id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="max-w-[440px] mt-[32px] text-[#8b8b8b] text-[14px] leading-[132%] tracking-[-0.14px]">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="flex flex-col flex-nowrap flex-1 gap-[16px]">
          {secondHalf.map(({ id, title, content }) => (
            <div
              key={id}
              className="flex p-[40px] flex-col gap-0 border-solid border-[1px] border-[#eee] rounded-[24px] cursor-pointer bg-white"
            >
              <div
                onClick={() => toggleBtn(id)}
                className="flex justify-start items-center gap-[24px] text-black text-[16px] leading-[132%] font-medium tracking-[-0.32px]"
              >
                <div className="flex-1">{title}</div>
                {isOpen[id] ? (
                  <Image
                    className="relative flex items-center justify-center"
                    src="/minus.png"
                    width={14}
                    height={14}
                    alt="icon"
                  />
                ) : (
                  <Image
                    className="relative flex items-center justify-center"
                    src="/plus.png"
                    width={14}
                    height={14}
                    alt="icon"
                  />
                )}
              </div>
              <div
                className={`transition-all ease-in-out duration-300 overflow-hidden ${
                  isOpen[id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="max-w-[440px] mt-[32px] text-[#8b8b8b] text-[14px] leading-[132%] tracking-[-0.14px]">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
