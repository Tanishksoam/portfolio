import React from "react";
import Image from "next/image";

interface ModalProps {
  isDisplayMenu: boolean;
  closeMenu: () => void;
  openAboutMe: () => void;
  isDisplayAboutMe: boolean;
}

const Menu: React.FC<ModalProps> = ({
  isDisplayMenu,
  closeMenu,
  openAboutMe,
  isDisplayAboutMe,
}) => {
  const aboutMe = () => {
    closeMenu();
    openAboutMe();
  };
  return (
    <>
      ({isDisplayMenu} && ()
      <div
        id="about-me"
        className="  w-screen h-screen backdrop-blur-lg flex flex-col top-0 justify-center items-center fixed z-50"
      >
        <Image
          src={"./cross1.svg"}
          alt=""
          width={30}
          height={30}
          className=" absolute top-[5%] left-[5%] "
          onClick={() => closeMenu()}
        />
        <div className=" w-full flex flex-col gap-4 text-md font-medium text-white">
          <div
            onClick={() => aboutMe()}
            className=" w-4/5 h-auto flex flex-col gap-4  items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-xl  border-[2px] rounded-2xl ml-10 py-4 px-12 z-50"
          >
            About Me
          </div>
          <a href="#skills">
            <div
              onClick={() => closeMenu()}
              className=" w-4/5 h-auto flex flex-col gap-4  items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-xl  border-[2px] rounded-2xl ml-10 py-4 px-12 z-50"
            >
              Skills
            </div>
          </a>
          <div
            className=" w-4/5 h-auto flex flex-col gap-4  items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-xl  border-[2px] rounded-2xl ml-10 py-4 px-12 z-50"
            onClick={() => closeMenu()}
          >
            Projects
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Menu;
