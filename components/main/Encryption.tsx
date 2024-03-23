"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="w-screen h-auto flex flex-col gap-10 relative items-center justify-center overflow-hidden   ">
      <div className=" w-full h-auto mb-16 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Postions
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Interns
        </motion.div>
      </div>

      <div className=" w-auto h-auto flex flex-col md:flex-row items-start justify-center translate-y-[-50px] gap-20 z-[40] px-10 ">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className=" w-auto h-[100%] flex flex-col  justify-center items center z-[40] p-8 rounded-3xl border-2 bg-opacity-10 backdrop-brightness-20 bg-white  "
        >
          <h1 className=" text-3xl text-white">Joint Secretary</h1>
          <h2 className=" text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Innovation & Entrepreneurship Cell
          </h2>
          <h4 className=" w-auto text-white text-md font-thin mt-4">
            Being the Joint Secretary of I&E Cell, I am responsible for the
            conduction of various events and workshops. I personally look after
            the Sponsorship team for various event and also contributed in
            develop of club and event websites.
          </h4>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className=" w-auto h-[100%] flex flex-col  justify-center items center z-[40] p-8 rounded-3xl border-2 bg-opacity-10 backdrop-brightness-20 bg-white"
        >
          <h1 className=" text-3xl text-white">Deisgn Head</h1>
          <h2 className=" text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Center of Excellence for AI and Robotics
          </h2>
          <h4 className=" w-auto text-white text-md font-thin mt-4">
            As CEAR&apos;s Design Head&lsquo; I shape the center&apos;s visual
            identity&lsquo; focusing on IoT and robotics projects&rsquo; Leading
            a creative team&lsquo; I ensure a compelling design for
            events&lsquo; workshops&lsquo; and projects&lsquo; aiming for
            innovation and impact in our visual representation&rsquo;
          </h4>
        </motion.div>
      </div>
      <div className=" ">
        <div className="cursive text-3xl font-medium text-center text-gray-300">
          &quot;Coding dreams into digital reality&ldquo;flawlessly.&quot;
        </div>
      </div>
    </div>
  );
};

export default Encryption;
