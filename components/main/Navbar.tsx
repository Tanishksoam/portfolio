// components/main/Navbar.tsx

// @ts-nocheck
// @ts-ignore
"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import AboutMe from "./aboutme";
import Menu from "./menu";

const Navbar = () => {
  const [isDisplays, setDisplays] = React.useState(false);

  const openAboutMe = () => {
    setDisplays(true);
  };
  const closeAboutMe = () => {
    setDisplays(false);
  };

  const [isDisplaysMenu, setDisplaysMenu] = React.useState(false);

  const openMenu = () => {
    setDisplaysMenu(true);
  };
  const closeMenu = () => {
    setDisplaysMenu(false);
  };
  return (
    <>
      <div className="w-screen h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 sm:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-start"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={250}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
          </a>

          <div className=" flex md:hidden">
            <Image
              src="/menu-burger.svg"
              alt="menu"
              width={50}
              height={50}
              onClick={() => openMenu()}
            />
          </div>

          <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between ml-10 md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a
                href="#about-me"
                onClick={() => openAboutMe()}
                className="cursor-pointer"
              >
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>

          <div className=" hidden md:flex flex-row gap-5">
            {Socials.map((social, index) => (
              <a key={index} href={social.href}>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {isDisplays && (
        <AboutMe isDisplays={isDisplays} closeAboutMe={() => closeAboutMe()} />
      )}
      {isDisplaysMenu && (
        <Menu
          isDisplayAboutMe={isDisplays}
          openAboutMe={() => openAboutMe()}
          isDisplaysMenu={isDisplaysMenu}
          closeMenu={() => closeMenu()}
        />
      )}
    </>
  );
};

export default Navbar;
