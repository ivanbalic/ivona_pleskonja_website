'use client';
import {useEffect, useState} from "react";

import { ITranslations } from "@/types/types";
import { cn, getPercentWidth } from "@/lib/utils";

export function ArticleInvertedQuote({ locale, section, containerWidth = 1 }: {
    locale: string,
    containerWidth?: number,
    section?: {
        WIDTH: number,
        CLASS?: string,
        TEXT: ITranslations,
        TYPE: 'inverted_quote',
    },
}) {
    const [percentWidthClass, setPercentWidthClass] = useState<string>('');

    useEffect(function setImageWidthClass(){
        setPercentWidthClass(`xl:w-[${getPercentWidth(section?.WIDTH, containerWidth)}%]`);
    }, [containerWidth, section?.WIDTH]);

    if (!section) return null;

    return (
        <div className={cn(
            'font-helvetica italic max-xl:text-center w-full',
            'p-7 sm:p-10 md:p-[70px] lg:p-[80px] xl:p-[95px]',
            percentWidthClass ?  percentWidthClass : 'xl:w-full',
            'flex flex-col gap-10 bg-articleBgBlue items-center justify-center',
            'text-[20px] sm:text-[24px] md:text-[28px] leading-[25.5px] sm:leading-[29.5px] md:leading-[33.5px] tracking-[.05em]',
            section.CLASS
        )}>
            <p dangerouslySetInnerHTML={{ __html: section.TEXT[locale.toUpperCase() as keyof ITranslations] }}></p>
        </div>
    );
}
