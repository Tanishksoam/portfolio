"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 z-[20] w-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start m-auto">
        <motion.div
          variants={slideInFromTop}
          className=" Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="h-5 w-5 mr-[8px] text-[#b49bff] inline-block" />
          <h1 className=" Welcome-text text-[13px]">
            {" "}
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-white font-bold max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
            projcet experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-4 max-w-[600px]"
        >
          I&apos;m a full stack developer with a passion for creating beautiful
          and functional websites. Check out my projects below!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
