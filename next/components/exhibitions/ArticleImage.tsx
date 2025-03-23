'use client';
import { useEffect, useMemo, useState } from "react";

import Image from 'next/image';

import { cn, getPercentWidth } from "@/lib/utils";

export function ArticleImage({ section, containerWidth }: { section?: { ALT: string, SRC: string, TYPE: 'image', WIDTH?: number, MAX_HEIGHT?: number }, containerWidth?: number }) {
    const [maxHeightClass, setMaxHeightClass] = useState<string>('');
    const [percentWidthClass, setPercentWidthClass] = useState<string>('');

    useEffect(function setImageWidthClass(){
        setPercentWidthClass(`xl:w-[${getPercentWidth(section?.WIDTH, containerWidth)}%]`);
    }, [containerWidth, section?.WIDTH]);

    useEffect(function setMaxImageHeight() {
        if(!section) return;

        setMaxHeightClass(`max-h-[${section?.MAX_HEIGHT}px]`);
    }, [section]);

    if (!section) return null;

    return (
        <div className={cn(
            "w-full",
            percentWidthClass ? percentWidthClass : 'xl:w-[100%]',
        )}>
            <Image
                placeholder='blur'
                alt={section.ALT ?? ''}
                className={cn(
                    maxHeightClass,
                    'h-full object-cover',
                )} src={section.SRC ?? ''}
            />
        </div>
    );
}
