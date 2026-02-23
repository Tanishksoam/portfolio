import React from "react";
import Image from "next/image";

interface ModalProps {
  isDisplay: boolean;
  closeAboutMe: () => void;
}

const AboutMe: React.FC<ModalProps> = ({ isDisplay, closeAboutMe }) => {
  return (
    <>
      ({isDisplay} && ()
      <div
        id="about-me"
        className="  w-screen h-screen backdrop-blur-lg flex flex-col top-0 justify-center items-center fixed z-50"
      >
        <Image
          src={"./cross1.svg"}
          alt=""
          width={30}
          height={30}
          className=" absolute top-[10%] right-[10%] "
          onClick={() => closeAboutMe()}
        />
        <div className=" w-4/5 h-auto flex flex-col gap-4 my-4 items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-xl absolute top-[20%] border-[2px] rounded-2xl py-4 px-12 z-50">
          <h2 className=" text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            ABOUT ME
          </h2>
          <h4 className="text-xs sm:text-sm md:text-lg text-gray-300 text-justify overflow-y-scroll">
            Tanishk Soam is a Computer Engineering student at Army Institute of
            Technology, Pune (CGPA: 8.69) with hands-on professional experience
            across multiple tech companies. Currently a Software Developer
            Intern at Foosh.ai, he works on AI model integration for image and
            video generation platforms using Next.js, React, and Tailwind CSS.
            <br />
            <br />
            His experience includes enterprise-level work at CITI Groups, where
            he migrated 200+ repositories and built CI/CD pipelines reducing
            deployment time by 75%. He has architected full-stack platforms like
            SeaWolf (surf alert system for 4000+ users) and developed event
            websites handling 2000+ users with Razorpay integration at Mission
            Healthy Bharat.
            <br />
            <br />
            Tanishk is also an accomplished CTF competitor, winning 1st place at
            TechMatrix SCIT Pune and placing in multiple cybersecurity
            competitions. His technical toolkit spans Python, TypeScript, React,
            Next.js, Node.js, PostgreSQL, MongoDB, and more.
          </h4>
        </div>
      </div>
      )
    </>
  );
};

export default AboutMe;
