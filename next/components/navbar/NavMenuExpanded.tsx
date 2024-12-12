import React from "react";
import Image from "next/image";
import Link from "next/link";

import {NavMenuItem} from "@/components/navbar/NavMenuItem";
import logoWhite from "@/public/images/navbar-logo-white.svg";
import menuBackground from "@/public/images/cover-slide-3.png";
import closeMenuIcon from "@/public/images/close-menu-icon.svg";

const MENU_ITEMS_CONFIG = Object.freeze({
    ABOUT_ME: {
        LABEL: {
            SER: 'O MENI',
            ENG: 'ABOUT ME'
        },
        LINK: 'about_me',
        HIDE: false,
    },
    MY_WORK: {
        LABEL: {
            SER: 'MOJI RADOVI',
            ENG: 'MY WORK'
        },
        LINK: 'my_work',
        HIDE: false,
    },
    NEWS: {
        LABEL: {
            SER: 'NOVOSTI',
            ENG: 'NEWS'
        },
        LINK: 'news',
        HIDE: true,
    },
    PRESS: {
        LABEL: {
            SER: 'PRESS',
            ENG: 'PRESS'
        },
        LINK: 'press',
        HIDE: true,
    },
    CONTACT: {
        LABEL: {
            SER: 'KONTAKT',
            ENG: 'CONTACT'
        },
        LINK: 'contact',
        HIDE: false,
    },
});

export const NavMenuExpanded = ({ onClose, locale }: { onClose: () => void, locale: string }) => {
  return (
      <div className="">
          <Image src={menuBackground} alt='menu-background' className="absolute w-full h-screen z-20" />
          <div className="absolute top-0 bg-overlayBlue/85 w-full h-screen absolute z-20 flex flex-col justify-between items-center">
              <Link href={`/${locale}`} className="flex justify-center pt-[10px]" onClick={onClose}>
                  <Image className="flex-1" src={logoWhite} alt="Ivona Pleskonja logo" width={105} height={115}/>
              </Link>
              <div
                  className="text-[62px] leading-[82px] tracking-[.15em] text-white/50 flex flex-col gap-5 font-normal justify-center items-center">
                  {Object.values(MENU_ITEMS_CONFIG).map(
                      (CONFIG) =>
                          CONFIG.HIDE
                              ? <></>
                              : <NavMenuItem key={CONFIG.LINK} href={`/${locale}/${CONFIG.LINK}`}  className="hover:text-white cursor-pointer">
                                  <span onClick={onClose}>
                                      {CONFIG.LABEL[locale.toUpperCase() as keyof typeof CONFIG.LABEL]}
                                  </span>
                                </NavMenuItem>
                  )}
              </div>
              <div className="mb-[50px]" onClick={onClose}>
                  <Image src={closeMenuIcon} alt="Close Menu" width={28} height={28}/>
              </div>
          </div>
      </div>
  );
};
