import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/exhibitions/sectionComponentMap";

export function ArticleTextGrid({ locale = 'ser', section }: {locale: string, section: { TYPE: 'text_grid', CONTENT: Record<string, any>[][]}}) {

    return (
        <Container className={cn(
            'pt-10',
            'flex flex-col gap-5',
            'px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px]',
            'text-black max-sm:text-center font-helvetica tracking-[.05em]',
        )}>
            <div className={cn(
                'text-[16px] leading-[19px]',
                'flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-[60px] lg:gap-[90px]'
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
