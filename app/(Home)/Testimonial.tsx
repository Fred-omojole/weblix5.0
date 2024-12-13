import React from "react";
import ReuseableButton from "./components/ReuseableButton";
import Image from "next/image";

interface Sender {
  name: string;
  role: string;
  profilePic: string;
  messages: string[];
}

interface Reply {
  text: string;
  replyName: string;
}

interface Conversations {
  id: number;
  sender: Sender;
  reply: Reply;
}

const conversation: Conversations[] = [
  {
    id: 1,
    sender: {
      name: "Richard Anderson",
      role: "Founder at Digibi",
      profilePic: "/Person3.webp",
      messages: [
        "Looks great 🔥",
        "You definitely nailed it 💅💅 with our website development. Chatting with your team was such a breeze!",
      ],
    },
    reply: {
      text: "Glad you're happy with the results!",
      replyName: "Webify",
    },
  },

  {
    id: 2,
    sender: {
      name: "Emma Hoffman",
      role: "CTO at Squash",
      profilePic: "/Person2.webp",
      messages: [
        "I loved ❤️❤️ how responsive your team was throughout the project!",
        "It really made a difference 🥳",
      ],
    },
    reply: {
      text: "Happy we could help ❤️",
      replyName: "Webify",
    },
  },
  {
    id: 3,
    sender: {
      name: "Anna Baker",
      role: "VP at Algenius",
      profilePic: "/Person4.webp",
      messages: [
        "Chatting with your devs felt like talking to experts! 👑🔥",
        "It shows in the quality of your work.",
      ],
    },
    reply: {
      text: "❤️ Thanks for noticing!",
      replyName: "Webify",
    },
  },
  {
    id: 4,
    sender: {
      name: "John Williams",
      role: "CEO at Accurex",
      profilePic: "/Person1.webp",
      messages: [
        "Your support team is awesome 🙌",
        "Just wanted to say thanks for the quick bug fixes.",
      ],
    },
    reply: {
      text: "Thanks for the shout-out! 😇",
      replyName: "Webify",
    },
  },
];

const Testimonial = () => {
  return (
    <section className="mt-[160px] pt-[80px] pb-[240px]">
      <div className="flex w-full max-w-[1216px] px-[64px] flex-col flex-nowrap justify-start items-center mx-auto ">
        <div className="flex w-full mb-[80px] px-[40px] justify-between items-end gap-[40px]">
          <h2 className="max-w-[560px] my-[0px] text-[78px] leading-[104%] font-medium tracking-[-3.12px]">
            <span className="text-[#8b8b8b]">Voices from</span> Our&nbsp;Clients
          </h2>
          <ReuseableButton
            text={"Contact us"}
            className={
              "px-[32px] py-[20px] text-white bg-black gap-2 flex ease-linear hover:bg-black/85"
            }
            icon={true}
          />
        </div>
      </div>
      <div className="flex w-full max-w-[1216px] mx-auto px-[64px] flex-col flex-nowrap justify-start items-center ">
        <div className="grid grid-cols-2 w-full gap-[24px] row-auto">
          {conversation.map(({ id, sender, reply }) => {
            return (
              <div
                key={id}
                className="flex w-full h-[640px] pt-[40px] px-[40px] pb-[48px] flex-col flex-nowrap justify-between gap-[24px] border-solid border-[1px] border-[#eee] rounded-[32px] bg-white"
              >
                <div className="flex flex-col flex-nowrap gap-[24px]">
                  <div className="flex flex-col flex-nowrap justify-start items-start gap-[12px] text-[16px] leading-[132%] font-medium tracking-[-0.32px]">
                    <div className="pl-[18px]">
                      <div className="text-[#a1a1a1]">{sender.name}</div>
                    </div>
                    <div className="flex flex-start flex-col flex-nowrap items-start gap-[8px]">
                      <div className="relative p-[20px]  rounded-[18px] text-[white] bg-[#1b1b1b]">
                        <p className="max-w-[280px] mb-0">
                          {sender.messages[0]}
                        </p>
                      </div>
                      <div className="relative p-[20px] rounded-[18px] text-[white] bg-[#1b1b1b]">
                        <p className="max-w-[280px] mb-0 ">
                          {sender.messages[1]}
                        </p>
                        <Image
                          className="absolute top-auto right-auto bottom-[-4px] left-[-5px] max-w-[100%] align-middle text-black inline-block"
                          src="/Shape-Black.svg"
                          alt={"logo"}
                          width={18}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-nowrap justify-start items-end gap-[12px]">
                    <div className="pr-[18px] text-right ">
                      <div className="text-[14px] leading-[132%] tracking-[-0.14px] text-[#a1a1a1]">
                        {reply.replyName}
                      </div>
                    </div>
                    <div className="relative p-[20px] rounded-[18px] bg-[#eee] text-[#1b1b1b] text-right">
                      <p className="max-w-[280px] my-0  ">{reply.text}</p>
                      <Image
                        className="absolute top-auto right-[-5px] bottom-[-4px] left-auto"
                        src="/Shape-Grey.svg"
                        alt="logo"
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-[16px]">
                  <Image
                    className="rounded-[50px]"
                    src={sender.profilePic}
                    width={55}
                    height={55}
                    alt={sender.name}
                  />
                  <div className="flex flex-row flex-start items-start  gap-x-[6px]">
                    <div className="">{sender.name}</div>
                    <div className="text-[#8b8b8b]">{sender.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
