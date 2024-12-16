'use client';
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

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
        LINK: 'my_works',
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
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    },[]);
  return (
      <div>
          <Image src={menuBackground} alt='menu-background' className="absolute w-full h-screen z-20 object-cover" />
          <div className="absolute top-0 bg-overlayBlue/85 w-full h-screen absolute z-20 flex flex-col justify-between items-center">
              <Link href={`/${locale}`} className="flex justify-center pt-2.5 h-[65px] md:h-[85px] lg:h-[110px]" onClick={onClose}>
                  <Image className="w-full flex-1" src={logoWhite} alt="Ivona Pleskonja logo"/>
              </Link>
              <div
                  className="flex flex-col gap-5 font-normal justify-center items-center">
                  {Object.values(MENU_ITEMS_CONFIG).map(
                      (CONFIG) =>
                          <NavMenuItem key={CONFIG.LINK} href={`/${locale}/${CONFIG.LINK}`} hide={CONFIG.HIDE}>
                              <span onClick={onClose}>
                                  {CONFIG.LABEL[locale.toUpperCase() as keyof typeof CONFIG.LABEL]}
                              </span>
                          </NavMenuItem>
                  )}
              </div>
              <div className="mb-[50px] w-5 md:w-6 lg:w-7" onClick={onClose}>
                  <Image className="w-full" src={closeMenuIcon} alt="Close Menu" />
              </div>
          </div>
      </div>
  );
};
