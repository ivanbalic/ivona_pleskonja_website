'use client';
import React, { useState } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Translations } from "@/types/types";
import { GalleryRowItem } from "@/components/my-works/MyWorks";

export function GridImage({ data, locale, onSelect }: { data: GalleryRowItem, locale: string, onSelect: () => void }) {
    const { SRC, ALT, DETAILS } = data || {};

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className="relative" onClick={onSelect} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div
                className={cn(hovered ? 'flex' : 'hidden', 'flex-col max-sm:text-xs items-center gap-1 justify-center absolute w-full h-full text-white bg-black/40 p-2')}>
                <span>{DETAILS.NAME[locale.toUpperCase() as keyof Translations]}</span>
                <span>{DETAILS.DIMENSIONS}</span>
                <span>{DETAILS.TECHNIQUE[locale.toUpperCase() as keyof Translations]}</span>
                <span>{DETAILS.CREATED_AT}</span>
            </div>
            <Image src={SRC.PREVIEW} alt={ALT} className="w-full h-full object-cover outline-0 border-0 p-0 m-0 border-0 shadow-none"/>
        </div>
    );
}
