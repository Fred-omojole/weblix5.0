"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/app/(Home)/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-[85vh] " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Works"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Pricing"
        ></MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
      </Menu>
    </div>
  );
}
