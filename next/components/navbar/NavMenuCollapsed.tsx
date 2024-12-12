'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {SpeakerIcon} from '@/components/icons/SpeakerIcon';
import logoBlue from '@/public/images/navbar-logo-blue.svg';

import { LanguagePicker } from "../LanguagePicker";
import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon";

const BRAND_COLOR = '#3769E6';

const NAVBAR_COLORS_MAP = Object.freeze({
    HOME: 'white',
    ABOUT_ME: BRAND_COLOR,
});

function getColor(page: string): string {
    return NAVBAR_COLORS_MAP[page.toUpperCase() as keyof typeof NAVBAR_COLORS_MAP];
}

export const NavMenuCollapsed = ({ hideLogo, onOpen, page, locale }: { hideLogo: boolean, onOpen: () => void, page: string, locale: string }) => {
    const color = getColor(page);
  return (
      <div className="flex justify-between w-full fixed z-10 align-center px-10 bg-transparent h-[115px]">
        <div className="w-[258.3px]"/>
        <div className="flex justify-center">
          {!hideLogo && <Link href={`/${locale}`}>
              <Image src={logoBlue} alt="Ivona Pleskonja logo" width={105} height={115} />
          </Link>}
        </div>
        <div className="flex gap-5">
          <div className="flex items-center cursor-pointer transition duration-200">
            <SpeakerIcon color={color} />
          </div>
          <LanguagePicker isPrimary={!hideLogo} />
          <div className="flex gap-[6px] items-center cursor-pointer" onClick={onOpen}>
            <BurgerMenuIcon color={color} />
          </div>
        </div>
      </div>
  );
};
