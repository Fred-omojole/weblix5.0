"use client";

import Benefits from "./(Home)/Benefits";
import About from "./(Home)/components/About";
import Services from "./(Home)/components/Services";
import Thicker from "./(Home)/components/thicker";
import Contact from "./(Home)/Contact";
import Footer from "./(Home)/Footer";
import Hero from "./(Home)/Hero";
import Pricing from "./(Home)/Pricing";
import Question from "./(Home)/Question";
import Testimonial from "./(Home)/Testimonial";
import { NavbarDemo } from "./(Home)/Navbar";
import Works from "./(Home)/Works";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll to the top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <div className=" w-full  bg-dot-black/[0.1] relative">
        <Hero />
        <NavbarDemo />
      </div>
      <div className="-z-10 absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(to_bottom,black_50%,transparent_100%))]"></div>
      <About />
      <Thicker />
      <Services />
      <Benefits />
      <Works />
      {/* <div className=""> */}
      <Pricing />
      <Question />
      <Testimonial />
      <Contact />
      <Footer />
      {/* </div> */}
    </main>
  );
}
