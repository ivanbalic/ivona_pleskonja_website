'use client';
import { useEffect, useState } from "react";

import Image from 'next/image';

import { cn } from "@/lib/utils";

export function ArticleImage({ section, containerWidth }: { section?: { ALT: string, SRC: string, TYPE: 'image', WIDTH?: number, MAX_HEIGHT?: number, CLASS_NAME: string }, containerWidth?: number }) {
    const [maxHeightClass, setMaxHeightClass] = useState<string>('');
    const [percentWidthClass, setPercentWidthClass] = useState<string>('');

    useEffect(function setImageWidthClass(){
        setPercentWidthClass(`w-[${section?.WIDTH}%]`);
    }, [containerWidth, section?.WIDTH]);

    useEffect(function setMaxImageHeight() {
        if(!section) return;

        setMaxHeightClass(`max-h-[${section?.MAX_HEIGHT}px]`);
    }, [section]);

    if (!section) return null;

    return (
        <div key={percentWidthClass} className={cn(
            section?.WIDTH ? percentWidthClass : 'w-full',
            section?.CLASS_NAME
        )}>
            <Image
                placeholder='blur'
                src={section.SRC ?? ''}
                alt={section.ALT ?? ''}
                className={cn(
                    'w-full h-full object-cover',
                    section?.MAX_HEIGHT ? maxHeightClass : '',
                )}
            />
        </div>
    );
}
