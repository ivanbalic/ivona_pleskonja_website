"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";

import { getPage } from "@/lib/utils";
import { NavMenuExpanded } from "@/components/navbar/NavMenuExpanded";
import { NavMenuCollapsed } from "@/components/navbar/NavMenuCollapsed";


export function Navbar({ locale }: { locale: string }) {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isHomePage = pathName === `/${locale}`;

    const page = isHomePage ? 'home' : getPage(pathName);

    const isInverted = pathName.includes('articles/6');

    return (
            isOpen
                ? <NavMenuExpanded onClose={()=> setIsOpen(false)} locale={locale} />
                : <NavMenuCollapsed inverted={isInverted} onOpen={() => setIsOpen(true)} hideLogo={isHomePage} page={page} locale={locale} />
    );
}
