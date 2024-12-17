"use client";
import React from "react";

import { Menu } from "@/app/(Home)/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

type NavContents = {
  title: string;
  href: string;
};

// const navContainer = {
//   hidden: {
//     opacity: 1,
//     scale: 0,
//   },
//   visible: { opacity: 1, scale: 1 },
//   transition: {
//     type: "tween",
//     duration: 0.4,
//     delay: 0.3,
//     ease: [0.25, 0.25, 0.25, 0.75],
//   },
// };

const navContainer = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.2,
    },
  },
};

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[85vh] " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const navContent: NavContents[] = [
    { title: "services", href: "#services" },
    { title: "works", href: "#works" },
    { title: "pricing", href: "#pricing" },
    { title: "contact us", href: "#contact-us" },
  ];

  return (
    <motion.div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 rounded-full",
        className
      )}
      initial="hidden"
      variants={navContainer}
      animate="visible"
    >
      <Menu>
        {navContent.map((item, index) => {
          console.log("Current item:", item);
          return (
            <Link
              href={item.href}
              key={item.href}
              className={`${index === 0 ? "hover:rounded-l-full" : ""} ${
                index != 0 ? "border-l border-solid" : ""
              }  ${
                index === navContent.length - 1 ? "hover: rounded-r-full" : ""
              } capitalize cursor-pointer w-full   flex items-center justify-center text-[#8b8b8b]  text-[14px] leading-[132%] tracking-[-0.14px]  pt-6 pb-6 pl-8 pr-8 hover:px-[48px] transition-all hover:bg-[#eee] `}
            >
              {index === navContent.length - 1 ? (
                <>
                  {" "}
                  <div className="">
                    <span className="relative inline-flex h-2 w-2 mr-1  ">
                      <span className="animate-ping absolute h-full w-full rounded-full bg-green-300" />
                      <span className="rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    {item.title}
                  </div>
                </>
              ) : (
                <> {item.title}</>
              )}
            </Link>
          );
        })}
      </Menu>
    </motion.div>
  );
}
