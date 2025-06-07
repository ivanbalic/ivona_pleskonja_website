import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/exhibitions/sectionComponentMap";

export function ArticleInvertedTextGrid({ locale = 'ser', section }: {locale: string, section: { TYPE: 'text_grid', CONTENT: Record<string, any>[][]}}) {

    return (
        <Container className={cn(
            'flex flex-col gap-5',
            'px-4 md:px-[135px]',
            'py-5 md:py-10 mt-5 md:mt-10',
            'bg-articleBgBlue font-helvetica tracking-[.05em]',
        )}>
            <div className={cn(
                'text-[16px] leading-[100%]',
                'flex flex-col sm:flex-row gap-5 md:gap-[90px]'
            )}>
                {section.CONTENT.map((row: Record<string, any>[], rowKey: number) =>
                    <div key={`${section.TYPE}_${rowKey}`} className="flex flex-col gap-5 flex-1">
                        {row.map((col: Record<string, any>, columnKey) => {
                            const Component = getSectionComponentByType(col.TYPE);
                            // @ts-ignore
                            return <Component key={`${section.TYPE}_${rowKey}_${col.TYPE}_${columnKey}`} section={col} locale={locale} />
                        })}
                    </div>
                )}
            </div>
        </Container>
    )
}
