'use client';
import React, { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { MENU_ITEMS_CONFIG } from "./menuItemsConfig";
import { NavMenuItem } from "@/components/navbar/NavMenuItem";
import logoWhite from "@/public/assets/navbar/navbar-logo-white.webp";
import closeMenuIcon from "@/public/assets/navbar/close-menu-icon.svg";

export const NavMenuExpanded = ({ onClose, locale }: { onClose: () => void, locale: string }) => {
    const [hovered, setHovered] = React.useState<string | null>(null);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    },[]);

  return (
      <>
          <div className="fixed top-0 left-0 w-full h-dvh z-20 flex flex-col md:justify-between items-center mix-blend-multiply">
              <div className="fixed top-0 left-0 w-full h-dvh bg-overlayBlue" />
          </div>
          <div className="fixed top-0 left-0 w-full h-dvh z-20 flex flex-col md:justify-between items-center">
              <Link href={`/${locale}`} className="flex justify-center h-[100px] md:h-[125px] z-20" onClick={onClose}>
                  <Image className="object-contain" src={logoWhite} alt="Ivona Pleskonja logo" priority={true} />
              </Link>
              <div className="flex flex-col justify-between items-center h-full z-20">
                  <div
                      className="flex flex-col font-roboto-serif font-normal justify-center items-center mt-[120px]">
                      {Object.values(MENU_ITEMS_CONFIG).map(
                          (CONFIG) =>
                              <NavMenuItem key={CONFIG.LINK} href={`/${locale}/${CONFIG.LINK}`} label={CONFIG.LABEL[locale.toUpperCase() as keyof typeof CONFIG.LABEL]} hide={CONFIG.HIDE} hovered={hovered} setHovered={setHovered}>
                              <span onClick={onClose} className="text-[36px] leading-[62px] lg:text-[64px] lg:leading-[124px] tracking-[.15em]">
                                  {CONFIG.LABEL[locale.toUpperCase() as keyof typeof CONFIG.LABEL]}
                              </span>
                              </NavMenuItem>
                      )}
                  </div>
                  <div className="mb-10 md:mb-20 w-7" onClick={onClose}>
                      <Image className="w-full" src={closeMenuIcon} alt="Close Menu" />
                  </div>
              </div>
          </div>
      </>
  );
};
