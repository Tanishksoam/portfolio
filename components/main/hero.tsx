import React from "react";
import HeroContent from "../sub/HeroContent";
import AboutMe from "./aboutme";

const Hero = () => {
  return (
    <div className=" relative flex flex-col h-full w-full">
      <video
        className=" rotate-180 top-[-340px] left-0 z-[1] absolute object-cover h-full w-full"
        autoPlay
        loop
        muted
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
