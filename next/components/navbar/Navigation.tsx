import React from "react";

import Image from "next/image";

import logoBlue from "@/public/images/navbar-logo-blue.svg";

export const Navigation = ({ onOpen }: { onOpen: ()=> void}) => {
  return (
      <div className="flex justify-between w-full fixed z-10 align-center px-[20px] bg-transparent">
        <div className="flex flex-1 justify-center">
          <Image src={logoBlue} alt="Ivona Pleskonja logo" width={105} height={115}/>
        </div>
        <div className="w-[40px] flex flex-col p-[5px] gap-[6px] justify-center"
             onClick={onOpen}>
          <span className=" w-[30px] border-b-2 border-white"></span>
          <span className=" w-[30px] border-b-2 border-white"></span>
          <span className=" w-[30px] border-b-2 border-white"></span>
        </div>
      </div>
  );
};
