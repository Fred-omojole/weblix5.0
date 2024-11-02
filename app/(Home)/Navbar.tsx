"use client";
// import React, { useState } from "react";
// import { Menu, MenuItem } from "@/app/(Home)/components/ui/navbar-menu";
import { Menu } from "@/app/(Home)/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

type NavContents = {
  title: string;
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[85vh] " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  // const [active, setActive] = useState<string | null>(null);

  const navContent: NavContents[] = [
    { title: "services" },
    { title: "works" },
    { title: "pricing" },
    { title: "contact us" },
  ];

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu>
        {navContent.map((content, index) => {
          return (
            <div
              key={index}
              className=" capitalize cursor-pointer w-full  flex items-center justify-center  text-[#8b8b8b]  text-[14px] leading-[132%] tracking-[-0.14px] border-solid pt-6 pb-6 pl-8 pr-8"
            >
              {index === navContent.length - 1 ? (
                <>
                  {" "}
                  <div className="">
                    <span className="relative inline-flex h-2 w-2  ">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                      <span className="rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    {content.title}
                  </div>
                </>
              ) : (
                <> {content.title}</>
              )}
            </div>
          );
        })}
      </Menu>
    </div>
  );
}
