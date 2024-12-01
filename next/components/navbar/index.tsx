"use client";
import React, {useState} from "react";

import {Navigation} from "@/components/navbar/Navigation";
import { NavigationMenu} from "@/components/navbar/NavigationMenu";


export function Navbar({ locale }: { locale: string }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log('Lang: ', locale);
    return (
            isOpen
                ? <NavigationMenu onClose={() => setIsOpen(false)} />
                : <Navigation onOpen={() => setIsOpen(true)} />
    );
}
