"use client";
import React, {useState} from "react";

import {usePathname} from "next/navigation";

import {NavMenuExpanded} from "@/components/navbar/NavMenuExpanded";
import {NavMenuCollapsed} from "@/components/navbar/NavMenuCollapsed";

function getPage(pathName: string){
    return pathName.split("/").slice(2)[0];
}

export function Navbar({ locale }: { locale: string }) {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isHomePage = pathName === `/${locale}`;

    const page = isHomePage ? 'home' : getPage(pathName);

    return (
            isOpen
                ? <NavMenuExpanded onClose={()=> setIsOpen(false)} locale={locale} />
                : <NavMenuCollapsed onOpen={() => setIsOpen(true)} hideLogo={isHomePage} page={page} locale={locale} />
    );
}
