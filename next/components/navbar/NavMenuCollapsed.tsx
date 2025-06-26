'use client';
import React from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {useIsMobile} from "@/hooks/useIsMobile";
import { LanguagePicker } from './LanguagePicker';
// import { SpeakerIcon } from '@/components/icons/SpeakerIcon';
import { useSlideConfig } from "@/components/home/useSlideConfig";
import { BurgerMenuIcon } from "@/components/icons/BurgerMenuIcon";
import logoBlue from '@/public/assets/navbar/navbar-logo-blue.webp';
import logoWhite from '@/public/assets/navbar/navbar-logo-white.webp';

const WHITE = '#FFFFFF';
const BRAND_COLOR = '#3769E6';

const NAVBAR_COLORS_MAP = Object.freeze({
    WORKS: {
        DESKTOP:  WHITE,
        MOBILE:  WHITE,
    },
    CONTACT: {
        DESKTOP:  WHITE,
        MOBILE:  WHITE,
    },
    ABOUT_ME: {
        DESKTOP:  BRAND_COLOR,
        MOBILE:  BRAND_COLOR,
    },
    ARTICLES: {
        DESKTOP:  BRAND_COLOR,
        MOBILE:  WHITE,
    },
    WORK_DETAILS: {
        DESKTOP:  BRAND_COLOR,
        MOBILE:  BRAND_COLOR,
    },
});

function getColor(page: string, isMobile: boolean): string {
    return NAVBAR_COLORS_MAP[page.toUpperCase() as keyof typeof NAVBAR_COLORS_MAP]?.[isMobile ? 'MOBILE' : 'DESKTOP'];
}

export const NavMenuCollapsed = ({ hideLogo, onOpen, page, locale, inverted }: { hideLogo: boolean, onOpen: () => void, page: string, locale: string, inverted: boolean }) => {
    const isMobile = useIsMobile();
    const activeSlideConfig = useSlideConfig();

    const color = page === 'home' ? activeSlideConfig.COLOR : getColor(page, isMobile);
    const bgColor = page === 'articles' && isMobile ? 'bg-articleBgBlue' : 'bg-transparent';

    return (
      <div className={cn(
          inverted ? `bg-[#1643B2]` : bgColor,
          "flex justify-between w-full",
          "fixed z-10 align-center px-2 md:px-6 lg:px-10 h-[85px] md:h-[125px]"
      )}>
        <div className="invisible flex-1" />
        <div className={cn(
            "flex flex-1 justify-center h-[85px] md:h-[125px]",
        )}>
          {!hideLogo && <Link href={`/${locale}`}>
              <Image className="h-full object-contain" src={(inverted ? bgColor === (isMobile ? 'bg-articleBgBlue' : 'bg-transparent') : color === WHITE)  ? logoWhite : logoBlue} alt="Ivona Pleskonja logo" priority={true} />
          </Link>}
        </div>
        <div className="flex flex-1 gap-4 md:gap-5 items-center justify-end">
            {/*<div className="flex items-center cursor-pointer transition duration-200 w-6 md:w-10 max-w-[40px]">*/}
            {/*    <SpeakerIcon color={color} />*/}
            {/*</div>*/}
            <LanguagePicker color={inverted ? '#FFFFFF' : color} />
            <div className="flex items-center cursor-pointer w-6 md:w-10 max-w-[40px]" onClick={onOpen}>
                <BurgerMenuIcon color={inverted ? '#FFFFFF' : color} />
            </div>
        </div>
      </div>
  );
};
