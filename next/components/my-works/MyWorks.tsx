import React, {Dispatch, SetStateAction, useMemo} from "react";

import {StaticImageData} from "next/image";

import {cn} from "@/lib/utils";
import { Translations } from "@/app/[locale]/(marketing)/my_works/[slug]/page";
import { SubNavItem } from "../subnav-bredcrumbs/SubNavBredCrumbs";
import {GridImage} from "@/components/my-works/GridImage";

export interface GalleryRowItem {
    ID: number;
    ALT: string;
    SRC: {
        FULL: StaticImageData;
        PREVIEW: StaticImageData;
    };
    DETAILS: {
        CREATED_AT: string;
        DIMENSIONS: string;
        NAME: {
            SER: string;
            ENG: string;
        };
        TECHNIQUE: {
            SER: string;
            ENG: string;
        };
        DESCRIPTION: {
            SER: string;
            ENG: string;
        };
    };
}

type GalleryRowMap = Record<string, GalleryRowItem[]>;

export interface MyWorks {
    ID: string;
    TITLE: Translations;
    HISTORY: SubNavItem[];
    DESCRIPTION: Translations[];
    GALLERY: GalleryRowItem[][];
}

export function MyWorks({ data, locale, onSelect }: { data?: MyWorks, locale: string, onSelect: Dispatch<SetStateAction<GalleryRowItem | null>>}) {
    if (!data) return null;

    const title = useMemo(() => data.TITLE[locale.toUpperCase() as keyof Translations], [locale]);

    const description = useMemo(() => data.DESCRIPTION.map(
        (section) => section[locale.toUpperCase() as keyof Translations] ), [locale]
    );

    const gallery = useMemo(() => {
        return data.GALLERY.reduce(
            (map, row, key) => {
                map[`row_${key + 1}` as keyof GalleryRowItem] = row;
                return map;
            },
            {} as GalleryRowMap
        );
    }, [locale]);

    return (
        <div className={cn(
            'text-black text-center',
            'flex flex-col items-center',
            'px-[20px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]',
        )}>
            <div className={cn(
                "my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10",
                "font-bold text-primaryBlue uppercase tracking-[.15em]",
                "text-[24px] leading-[35px] sm:text-[26px] sm:leading-[37px] md:text-[28px] md:leading-[39px] lg:text-[30px] lg:leading-[41px] xl:text-[32px] xl:leading-[43px]",
            )}>
                {title}
            </div>
            <div
                className="flex flex-col gap-3 sm:gap-5 font-text text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[13px] md:leading-[16px] lg:text-[14px] lg:leading-[17px] xl:text-[15px] xl:leading-[18px] tracking-[.15em]">
                {description.map((text, index) => <span key={`description-section-${index}`}>{text}</span>)}
            </div>
            <div className="w-full mt-6 sm:mt-7 md:mt-8 lg:mt-10 mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 grid" style={{gridTemplateAreas: '"first" "second" "third"'}}>
                <div style={{gridArea: 'first'}} className="grid grid-cols-[1fr] grid-rows-[1fr] gap-0">
                    {gallery.row_1.map((col) => <GridImage key={col.ID} data={col} locale={locale} onSelect={() => onSelect(col)}/>)}
                </div>
                <div style={{gridArea: 'second'}}
                     className="grid grid-cols-[1fr_1fr_2fr] grid-rows-[1fr] gap-0">
                    {gallery.row_2.map((col) => <GridImage key={col.ID} data={col} locale={locale} onSelect={() => onSelect(col)}/>)}
                </div>
                <div style={{gridArea: 'third'}}
                     className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[1fr] gap-0">
                    {gallery.row_3.map((col) => <GridImage key={col.ID} data={col} locale={locale} onSelect={() => onSelect(col)}/>)}
                </div>
            </div>
        </div>
    );
}
