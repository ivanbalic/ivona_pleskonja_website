'use client';
import React, { useCallback, useState } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { IGalleryRowItem, ITranslations} from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function GridImage({ data, locale, galleryId }: { data: IGalleryRowItem, locale: string, galleryId: number }) {
    const { SRC, ALT, DETAILS, ID } = data || {};

    const { onImageSelect } = useSelectedImage();

    const [hovered, setHovered] = useState<boolean>(false);

    const onClick = useCallback(() => onImageSelect(galleryId, ID), [ID, galleryId, onImageSelect]);

    if(!SRC || !DETAILS) return null;

    return (
        <div className="relative" onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div
                className={cn(hovered && !DETAILS.HOVER_DISABLED ? 'flex' : 'hidden', 'flex-col max-sm:text-xs items-center gap-1 justify-center absolute w-full h-full text-white bg-overlayBlue p-2')}>
                <span>{DETAILS.ALTERNATIVE_NAME?.[locale.toUpperCase() as keyof ITranslations] ?? DETAILS.NAME[locale.toUpperCase() as keyof ITranslations]}</span>
                <span>{DETAILS.DIMENSIONS}</span>
                <span>{DETAILS.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</span>
                <span>{DETAILS.CREATED_AT}</span>
            </div>
            <Image placeholder='blur' src={SRC.PREVIEW} alt={ALT} className="w-full h-full object-cover outline-0 border-0 p-0 m-0 shadow-none" />
        </div>
    );
}
