import { useState } from "react";

import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { ChevronUp } from "@/components/icons/ChevronUp";
import { ChevronDown } from "@/components/icons/ChevronDown";
import { getSectionComponentByType } from "@/components/articles/sectionComponentMap";

const LABEL = {
    READ_MORE: {
        SER: 'PROČITAJ VIŠE',
        ENG: 'READ MORE',
    },
    READ_LESS: {
        SER: 'PROČITAJ MANJE',
        ENG: 'READ LESS',
    }
};

export function ArticleReadMoreButton({ locale, section }: { locale: string, section: { TYPE: 'text_grid', CLASS_NAME: string, CONTENT: Record<string, any>[][]}}) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Container>
            <div
                onClick={() => setExpanded(!expanded)}
            >
                <div className={cn(
                    expanded ? 'mb-0' : 'mb-5',
                    'flex justify-center items-center w-full gap-3',
                    'text-primaryBlue text-[16px] leading-[100%] tracking-[.05em] font-bold mt-5'
                )}>
                    {LABEL[(expanded ? 'READ_LESS' : 'READ_MORE') as keyof typeof LABEL][locale.toUpperCase() as keyof ITranslations]}
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expanded
                    ? (
                        section.CONTENT.map((row: Record<string, any>[], rowKey: number) =>
                            <div key={`${section.TYPE}_${rowKey}`} className="flex flex-col flex-1">
                                {row.map((col: Record<string, any>, columnKey) => {
                                    const Component = getSectionComponentByType(col.TYPE);
                                    // @ts-ignore
                                    return <Component key={`${section.TYPE}_${rowKey}_${col.TYPE}_${columnKey}`} section={col} locale={locale} />
                                })}
                            </div>
                        )
                    )
                    : null
                }
            </div>
        </Container>
    );
}
