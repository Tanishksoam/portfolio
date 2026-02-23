import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full bg-transparent text-gray-200 z-20 shadow-lg p-[15px] absolute">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/tech_nishk/"
              className=" cursor-pointer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <Image width={20} height={20} src={"./instagram.svg"} alt="" />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a
              href="https://github.com/Tanishksoam"
              className=" cursor-pointer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/tanishk-soam-85363b252/"
              className=" cursor-pointer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Hire Me</div>
            <a
              href="tel:+919897283397"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">
                +91 9897283397
              </span>
            </a>
            <a
              href="mailto:soamtanishk@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
            >
              <span className="text-[15px] ml-[6px]">
                soamtanishk@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
