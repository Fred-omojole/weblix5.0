// import Image from "next/image";

// import { Video } from "lucide-react";

import Hero from "./(Home)/Hero";
import { NavbarDemo } from "./(Home)/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" w-full  bg-dot-black/[0.1] relative">
        <Hero />
        <NavbarDemo />
      </div>
      <div className="-z-10 absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(to_bottom,black_50%,transparent_100%))]"></div>
    </main>
  );
}
