"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import burgerMenu from '@/public/images/burger-menu.svg';
import speakerIcon from '@/public/images/speaker-icon.svg';
import logoBlue from '@/public/images/navbar-logo-blue.svg';

import { LanguagePicker } from "../LanguagePicker";

export const NavMenuCollapsed = ({ hideLogo, onOpen }: { hideLogo: boolean, onOpen: () => void}) => {
  return (
      <div className="flex justify-between w-full fixed z-10 align-center px-[20px] bg-transparent h-[115px]">
        <div className="w-[258.3px]"/>
        <div className="flex flex-1 justify-center">
          {!hideLogo && <Link href={"/"}>
              <Image src={logoBlue} alt="Ivona Pleskonja logo" width={105} height={115} />
          </Link>}
        </div>
        <div className="flex gap-5">
          <div className="flex justify-center">
            <Image src={speakerIcon} alt="speaker"/>
          </div>
          <LanguagePicker/>
          <div className="flex flex-col p-[5px] gap-[6px] justify-center" onClick={onOpen}>
            <Image src={burgerMenu} alt="burger-menu"/>
          </div>
        </div>
      </div>
  );
};
