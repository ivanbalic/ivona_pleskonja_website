'use client';

import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/exhibitions/sectionComponentMap";

const CONTAINED_GRID_WIDTH = 1440;

export function ArticleImageGrid({ locale, section }: { locale: string, section:{ TYPE: 'image-grid', CONTENT: Record<string,any>[][] }}) {
    return (
        <Container className="flex flex-col md:flex-row max-[1440px]:max-w-[100vw] pt-10">
            {section.CONTENT.map((row: Record<string, any>[], rowKey: number) =>
                <div key={`${section.TYPE}_${rowKey}`} className="flex flex-col lg:flex-row">
                    {row.map((col: Record<string, any>, colKey: number)  => {
                        const Component = getSectionComponentByType(col.TYPE);
                        // @ts-ignore
                        return <Component key={`${section.TYPE}_${rowKey}_${col.TYPE}_${colKey}`} locale={locale} section={col} containerWidth={CONTAINED_GRID_WIDTH} />;
                    })}
                </div>
            )}
        </Container>
    );
}
