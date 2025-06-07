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
    if (!section) return null;

    return (
        <div className={cn(
            'p-4 md:p-[95px]',
            'font-helvetica italic max-xl:text-center w-full',
            'text-[16px] md:text-[26px] leading-[100%] tracking-[.05em]',
            'flex flex-col gap-10 bg-articleBgBlue items-center justify-center',
            getPercentWidth(section?.WIDTH, containerWidth) ?  `xl:w-[${getPercentWidth(section?.WIDTH, containerWidth)}%]` : 'xl:w-full',
            section.CLASS
        )}>
            <p className='max-md:text-left max-md:border-white max-md:border-l max-md:pl-4' dangerouslySetInnerHTML={{ __html: section.TEXT[locale.toUpperCase() as keyof ITranslations] }}></p>
        </div>
    );
}
