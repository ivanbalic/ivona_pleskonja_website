import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";

export function ArticleQuote({ locale, section }: { locale: string, section: Record<string, any> }) {
    return (
        <div className="flex flex-1">
            <p style={{ margin: section.CENTERED ? "0 auto" : undefined, textAlign: section.CENTERED ? "center" : "left"  }} className={cn(
                "italic text-primaryBlue tracking-[.05em] mt-auto w-fit",
                "text-[18px] sm:text-[22px] md:text-[26px] leading-[23.15px] sm:leading-[27.15px] md:leading-[31.15px]"
            )}>
                {section?.TEXT[locale.toUpperCase() as keyof ITranslations]}
            </p>
        </div>
    );
}
