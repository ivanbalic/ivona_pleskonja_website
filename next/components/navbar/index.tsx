"use client";
import React, {useState} from "react";

import {usePathname} from "next/navigation";

import {NavMenuExpanded} from "@/components/navbar/NavMenuExpanded";
import {NavMenuCollapsed} from "@/components/navbar/NavMenuCollapsed";


export function Navbar({ locale }: { locale: string }) {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isHomePage = pathName === `/${locale}`;

    return (
            isOpen
                ? <NavMenuExpanded onClose={()=> setIsOpen(false)} locale={locale} />
                : <NavMenuCollapsed onOpen={() => setIsOpen(true)} hideLogo={isHomePage} />
    );
}
