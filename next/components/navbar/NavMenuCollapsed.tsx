'use client';
import React, {useEffect, useState} from "react";

import Link from "next/link";
import Image from "next/image";

import {cn} from "@/lib/utils";
import { LanguagePicker } from './LanguagePicker';
import {SpeakerIcon} from '@/components/icons/SpeakerIcon';
import logoBlue from '@/public/images/navbar-logo-blue.png';
import {useActiveSlide} from "@/context/ActiveSlideContext";
import logoWhite from '@/public/images/navbar-logo-white.png';
import {BurgerMenuIcon} from "@/components/icons/BurgerMenuIcon";

const BRAND_COLOR = '#3769E6';

const NAVBAR_COLORS_MAP = Object.freeze({
    HOME: 'white',
    CONTACT: 'white',
    MY_WORKS: 'white',
    ABOUT_ME: BRAND_COLOR,
    EXHIBITIONS: BRAND_COLOR,
    MY_WORKS_DETAILS: BRAND_COLOR,
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
              <Image className="h-full object-contain" src={color === 'white' ? logoWhite : logoBlue} alt="Ivona Pleskonja logo" />
          </Link>}
        </div>
        <div className="flex gap-2 md:gap-3 lg:gap-5">
          <div className="flex items-center cursor-pointer transition duration-200 w-6 lg:w-10 max-w-[40px]">
            <SpeakerIcon color={color} />
          </div>
          <LanguagePicker isPrimary={color !== 'white'} />
          <div className="flex items-center cursor-pointer w-6 md:w-8 lg:w-10 max-w-[40px]" onClick={onOpen}>
            <BurgerMenuIcon color={color} />
          </div>
        </div>
      </div>
  );
};
