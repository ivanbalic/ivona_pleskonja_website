import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";

export function ArticleQuote({ locale, section }: { locale: string, CLASS_NAME: string, section: Record<string, any> }) {
    return (
        <div className="flex flex-1">
            <p style={{ margin: section.CENTERED ? "0 auto" : undefined, textAlign: section.CENTERED ? "center" : "left"  }} className={cn(
                "text-[16px] md:text-[26px] leading-[100%]",
                "max-md:border-primaryBlue max-md:border-l max-md:pl-4",
                "italic text-primaryBlue tracking-[.05em] w-fit",
                section?.CLASS_NAME,
            )}>
                {section?.TEXT[locale.toUpperCase() as keyof ITranslations]}
            </p>
        </div>
    );
}
