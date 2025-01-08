import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";

export function ArticleTitle({ section, locale = 'ser' }: { section?: { TYPE: 'title', TEXT: ITranslations }, locale?: string }) {
    if (!section) return null;

    return (
        <Container className={cn(
            'pt-10',
            'flex flex-col gap-5',
            'px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px]',
            'text-black max-sm:text-center font-helvetica tracking-[.05em]',
        )}>
            <div className="text-primaryBlue text-[16px] leading-[19.5px] font-bold uppercase">
                {section.TEXT[locale.toUpperCase() as keyof ITranslations]}
            </div>
        </Container>
    );
}
