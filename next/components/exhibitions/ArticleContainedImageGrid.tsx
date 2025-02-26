'use client';
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/exhibitions/sectionComponentMap";

const CONTAINED_GRID_WIDTH = 1360;

export function ArticleContainedImageGrid({ locale, section }: {
    locale: string,
    section: { TYPE: 'contained_image_grid', CONTENT: Record<string, any>[][], STYLE: Record<string, string> },
}) {
    if (!section) return null;

    return (
        <Container containerStyle={section.STYLE} className="flex flex-col md:px-10 pt-10">
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
