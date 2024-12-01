import React from "react";

import Image from "next/image";

import logoWhite from "@/public/images/navbar-logo-white.svg";
import closeMenuIcon from "@/public/images/closeMenuIcon.svg";

export const NavigationMenu = ({ onClose}: { onClose: () => void}) => {
  return (
      <div className="bg-[#3242C0]/85 w-full h-screen absolute z-20 flex flex-col justify-between items-center">
        <div className="flex justify-center py-[4px]">
          <Image className="flex-1" src={logoWhite} alt="Ivona Pleskonja logo" width={105} height={115}/>
          <div className="w-[40px] flex flex-col p-[5px] gap-[6px] justify-center"></div>
        </div>
        <div
            className="text-[62px] flex flex-col justify-center items-center leading-[82px] tracking-[.15em] gap-[20px]">
          <div>O MENI</div>
          <div>MOJI RADOVI</div>
          <div>NOVOSTI</div>
          <div>PRESS</div>
          <div>KONTAKT</div>
        </div>
        <div className="mb-[100px]" onClick={onClose}>
          <Image src={closeMenuIcon} alt="Close Menu" width={28} height={28}/>
        </div>
      </div>
  );
};
