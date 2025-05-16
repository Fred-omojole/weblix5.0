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
import { fadeIn } from "@/lib/variant";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.main className=" lg:hidden min-h-screen flex items-center justify-center text-center px-4">
        <motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn("up", 0.05, 0.6)}
            className="text-xl font-semibold"
          >
            Desktop Preview Only
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn("up", 0.1, 0.6)}
            className="text-gray-500 mt-2"
          >
            This landing page is currently optimized for large screens.
            <br />
            Mobile version coming soon.
          </motion.p>
        </motion.div>
      </motion.main>

      <main className="hidden lg:block min-h-screen">
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

        <Pricing />
        <Question />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
