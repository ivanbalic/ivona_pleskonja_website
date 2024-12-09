"use client";
import React from "react";
import Image from "next/image";

import logoWhite from "@/public/images/navbar-logo-white.svg";
import closeMenuIcon from "@/public/images/close-menu-icon.svg";
import {NavMenuItem} from "@/components/navbar/NavMenuItem";

const MENU_ITEMS_CONFIG = Object.freeze({
    ABOUT_ME: {
        LABEL: {
            SER: 'O MENI',
            ENG: 'ABOUT ME'
        },
        LINK: 'about_me'
    },
    MY_WORK: {
        LABEL: {
            SER: 'MOJI RADOVI',
            ENG: 'MY WORK'
        },
        LINK: 'my_work'
    },
    NEWS: {
        LABEL: {
            SER: 'NOVOSTI',
            ENG: 'NEWS'
        },
        LINK: 'news'
    },
    PRESS: {
        LABEL: {
            SER: 'PRESS',
            ENG: 'PRESS'
        },
        LINK: 'press'
    },
    CONTACT: {
        LABEL: {
            SER: 'KONTAKT',
            ENG: 'CONTACT'
        },
        LINK: 'contact'
    },
});

export const NavMenuExpanded = ({ onClose, locale }: { onClose: () => void, locale: string }) => {
  return (
      <div className="bg-[#3242C0]/85 w-full h-screen absolute z-20 flex flex-col justify-between items-center">
        <div className="flex justify-center pt-[10px]">
          <Image className="flex-1" src={logoWhite} alt="Ivona Pleskonja logo" width={105} height={115}/>
        </div>
        <div className="text-[62px] leading-[82px] tracking-[.15em] text-white/50 flex flex-col gap-5 font-normal justify-center items-center">
            {Object.values(MENU_ITEMS_CONFIG).map(
                (CONFIG) =>
                    <NavMenuItem key={CONFIG.LINK} href={CONFIG.LINK} className="hover:text-white cursor-pointer">
                        {CONFIG.LABEL[locale.toUpperCase() as keyof typeof CONFIG.LABEL]}
                    </NavMenuItem>)
            }
        </div>
        <div className="mb-[50px]" onClick={onClose}>
          <Image src={closeMenuIcon} alt="Close Menu" width={28} height={28} />
        </div>
      </div>
  );
};
