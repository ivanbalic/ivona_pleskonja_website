'use client';
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { MENU_ITEMS_CONFIG } from './menuItemsConfig'
import { NavMenuItem } from "@/components/navbar/NavMenuItem";
import logoWhite from "@/public/images/navbar/navbar-logo-white.png";
import closeMenuIcon from "@/public/images/navbar/close-menu-icon.svg";

export const NavMenuExpanded = ({ onClose, locale }: { onClose: () => void, locale: string }) => {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    },[]);

  return (
          <div className="fixed top-0 left-0 bg-overlayBlue/85 w-full h-screen z-20 flex flex-col justify-between items-center">
              <Link href={`/${locale}`} className="flex justify-center h-[75px] md:h-[100px] lg:h-[125px]" onClick={onClose}>
                  <Image className="object-contain" src={logoWhite} alt="Ivona Pleskonja logo" priority={true} />
              </Link>
              <div
                  className="flex flex-col gap-5 font-roboto-serif font-normal justify-center items-center">
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
  );
};
