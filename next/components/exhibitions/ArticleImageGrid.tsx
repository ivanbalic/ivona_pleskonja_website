'use client';
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/exhibitions/sectionComponentMap";

const MAX_GRID_WIDTH = 1440;

export function ArticleImageGrid({ locale, section }: {
    locale: string,
    section: { TYPE: 'image-grid', CLASS_NAME: string,  CONTENT: Record<string,any>[][] }
}) {
    const [containerWidth, setContainerWidth] = useState<number>();

    useEffect(() => {
        let width = MAX_GRID_WIDTH;

        if(window.innerWidth < MAX_GRID_WIDTH) width = window.innerWidth;

        setContainerWidth(width);
    },[]);

    if (!section) return null;

    return (
        <Container className={cn(
            "flex flex-col pt-5 md:pt-10",
            section.CLASS_NAME
        )}>
            {section.CONTENT.map((row: Record<string, any>[], rowKey: number) =>
                <div key={`${section.TYPE}_${rowKey}`} className="flex flex-col md:flex-row">
                    {row.map((col: Record<string, any>, colKey: number)  => {
                        const Component = getSectionComponentByType(col.TYPE);
                        // @ts-ignore
                        return <Component key={`${section.TYPE}_${rowKey}_${col.TYPE}_${colKey}`} locale={locale} section={col} containerWidth={containerWidth} />;
                    })}
                </div>
            )}
        </Container>
    );
}
