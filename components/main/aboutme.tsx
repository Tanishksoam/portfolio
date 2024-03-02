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
        className="  w-screen h-screen backdrop-blur-lg flex flex-col  justify-center items-center fixed z-50"
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
          <h4 className="text-lg text-gray-300 text-justify">
            Tanishk Soam is a driven and enthusiastic individual with a profound
            passion for technology, particularly in the realms of web
            development and cybersecurity. His journey into the world of web
            development was ignited by a fascination with the boundless
            possibilities of the internet and a natural inclination for solving
            complex challenges. Through self-driven education and a
            cybersecurity course at IIT Delhi, Tanishk has cultivated a
            comprehensive understanding of web development principles and
            cybersecurity best practices. Proficient in languages like Python,
            C++, and JavaScript, Tanishk has practical experience with the React
            framework and has successfully developed functional projects,
            including an innovative IoT-based car accident detection device.
            Beyond his technical skills, Tanishk is a well-rounded individual
            with interests in dance, literature, sports, and travel, which
            enrich his problem-solving abilities and adaptability. His
            collaborative nature, creativity, and decision-making prowess set
            him apart as a candidate, making him a valuable asset to any team.
            Tanishk's alignment with Google's mission and his eagerness to
            contribute make him a compelling candidate for any endeavor in the
            tech industry.
          </h4>
        </div>
      </div>
      )
    </>
  );
};

export default AboutMe;
