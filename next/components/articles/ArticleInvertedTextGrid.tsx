'use client';
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/articles/sectionComponentMap";

const MAX_GRID_WIDTH = 1440;

export function ArticleInvertedTextGrid({ locale = 'ser', section }: {locale: string, section: { TYPE: 'inverted_text_grid', CLASS_NAME: string, CONTENT: Record<string, any>[][]}}) {
    const [containerWidth, setContainerWidth] = useState<number>();

    useEffect(() => {
        let width = MAX_GRID_WIDTH;

        if(window.innerWidth < MAX_GRID_WIDTH) width = window.innerWidth;

        setContainerWidth(width);
    },[]);
    return (
        <Container className={cn(
            'flex flex-col gap-5',
            'px-4 md:px-[135px]',
            'py-5 md:py-10 mt-5 md:mt-10',
            'bg-articleBgBlue font-helvetica tracking-[.05em]',
            'text-[16px] leading-[24px] md:leading-[100%]',
            section.CLASS_NAME
        )}>
            <div className={cn(
                'flex flex-col md:flex-row gap-5 md:gap-[90px] items-center justify-between w-full'
            )}>
                {section.CONTENT.map((row: Record<string, any>[], rowKey: number) =>
                    <div key={`${section.TYPE}_${rowKey}`} className="flex flex-col gap-5">
                        {row.map((col: Record<string, any>, columnKey) => {
                            const Component = getSectionComponentByType(col.TYPE);
                            // @ts-ignore
                            return <Component key={`${section.TYPE}_${rowKey}_${col.TYPE}_${columnKey}`} section={col} locale={locale} containerWidth={containerWidth} />
                        })}
                    </div>
                )}
            </div>
        </Container>
    )
}
