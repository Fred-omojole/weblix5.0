// import Image from "next/image";

import Hero from "./(Home)/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" w-full  bg-dot-black/[0.15] relative">
        <Hero />
      </div>
      <div className="absolute  inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </main>
  );
}
