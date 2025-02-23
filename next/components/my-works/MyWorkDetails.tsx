'use client';
import React, { useMemo } from "react";

import { cn } from "@/lib/utils";
import { GridImage } from "@/components/my-works/GridImage";
import { IGalleryRowItem, ITranslations, IMyWorks } from "@/types/types";

type GalleryRowMap = Record<string, IGalleryRowItem[]>;

function getGridTemplateAreas(rowMap: GalleryRowMap) {
    const templateAreas = Object.keys(rowMap).join('" "');

    return `"${templateAreas}"`;
}

function getGridColumns(row: IGalleryRowItem[]){
    const columnConfig = row.map((col) => `${col.GRID_PLACES}fr`);

    return `${columnConfig.join(" ")}`;
}

export function MyWorkDetails({ data, locale }: { data: IMyWorks, locale: string }) {
    const title = useMemo(() => data?.TITLE?.[locale.toUpperCase() as keyof ITranslations], [data?.TITLE, locale]);

    const description = useMemo(() => data?.DESCRIPTION?.map(
        (section) => section[locale.toUpperCase() as keyof ITranslations] ), [data?.DESCRIPTION, locale]
    );

    const gallery = useMemo(() => {
        return data?.GALLERY?.map((current) => ({ ...current, CONTENT: current.CONTENT.reduce(
                (map, row, key) => {
                    map[`row_${key + 1}` as keyof IGalleryRowItem] = row;
                    return map;
                },
                {} as GalleryRowMap
            )}));
    }, [data?.GALLERY]);

    if (!title || !description || !gallery) return null;

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
                className="flex flex-col gap-3 sm:gap-5 font-helvetica text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[13px] md:leading-[16px] lg:text-[14px] lg:leading-[17px] xl:text-[15px] xl:leading-[18px] tracking-[.15em]">
                {description.map((text, index) => <span key={`description-section-${index}`}>{text}</span>)}
            </div>
            <div className="w-full my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10">
                {gallery.map((g, index) => (
                    <div className="w-full" key={index}>
                        {g.TITLE?.[locale.toUpperCase() as keyof ITranslations] && <div className={cn(
                            'p-2 sm:p-3 md:p-4 lg:p-5',
                            'bg-primaryBlue uppercase font-bold text-white text-left',
                            'text-[20px] leading-[30px] sm:text-[26px] sm:leading-[37px] md:text-[28px] md:leading-[39px] lg:text-[30px] lg:leading-[41px] xl:text-[32px] xl:leading-[43px]',
                        )}>
                            {g.TITLE?.[locale.toUpperCase() as keyof ITranslations]}
                        </div>}
                        <div className="w-full grid" style={{gridTemplateAreas: `${getGridTemplateAreas(g.CONTENT)}`}}>
                            {Object.keys(g.CONTENT).map((key) => (
                                <div key={key} style={{gridArea: key, gridTemplateColumns: getGridColumns(g.CONTENT[key])}} className="grid grid-rows-[1fr] gap-0">
                                    {g.CONTENT[key].map(
                                        (col) => <GridImage key={col.ID} data={col} locale={locale} galleryId={g.ID} />
                                    )}
                                </div>))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
