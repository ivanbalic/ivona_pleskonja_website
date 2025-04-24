'use client';
import React, {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { LanguagePicker } from './LanguagePicker';
// import { SpeakerIcon } from '@/components/icons/SpeakerIcon';
import { useActiveSlide } from "@/context/ActiveSlideContext";
import logoBlue from '@/public/images/navbar/navbar-logo-blue.png';
import { BurgerMenuIcon } from "@/components/icons/BurgerMenuIcon";
import logoWhite from '@/public/images/navbar/navbar-logo-white.png';

const BRAND_COLOR = '#3769E6';

const NAVBAR_COLORS_MAP = Object.freeze({
    HOME: 'white',
    WORKS: 'white',
    CONTACT: 'white',
    ABOUT_ME: BRAND_COLOR,
    ARTICLES: BRAND_COLOR,
    WORK_DETAILS: BRAND_COLOR
});

function getColor(page: string): string {
    return NAVBAR_COLORS_MAP[page.toUpperCase() as keyof typeof NAVBAR_COLORS_MAP];
}

export const NavMenuCollapsed = ({ hideLogo, onOpen, page, locale }: { hideLogo: boolean, onOpen: () => void, page: string, locale: string }) => {
    const [color, setColor] = useState(getColor(page));

    const { activeSlide } = useActiveSlide();

    useEffect(() => {
        const newColor = activeSlide === 0 ? getColor(page) : BRAND_COLOR;
        setColor(newColor);
    },[activeSlide, color, page]);

    return (
      <div className="flex justify-between w-full fixed z-10 align-center px-2 md:px-6 lg:px-10 bg-transparent h-[75px] md:h-[100px] lg:h-[125px]">
        <div className="hidden min-[430px]:block w-[144.2px] md:w-[160.2px] lg:w-[248.3px]"/>
        <div className={cn(
            "min-[430px]:flex-1",
            "max-[429px]:ml-[calc(50px-50vw)]",
            "flex justify-center h-[75px] md:h-[100px] lg:h-[125px]",
        )}>
          {!hideLogo && <Link href={`/${locale}`}>
              <Image className="h-full object-contain" src={color === 'white' ? logoWhite : logoBlue} alt="Ivona Pleskonja logo" priority={true} />
          </Link>}
        </div>
        <div className="flex gap-2 md:gap-3 lg:gap-5">
          {/*<div className="flex items-center cursor-pointer transition duration-200">*/}
          {/*  <SpeakerIcon color={color} />*/}
          {/*</div>*/}
          <LanguagePicker color={color} />
          <div className="flex items-center cursor-pointer" onClick={onOpen}>
            <BurgerMenuIcon color={color} />
          </div>
        </div>
      </div>
  );
};
