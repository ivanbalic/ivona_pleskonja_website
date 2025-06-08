import { ITranslations } from "@/types/types";

export function ArticleText({ section, locale = 'ser' }: { section?: { TYPE: 'text', CLASS_NAME?: string, TEXT: ITranslations }, locale?: string }) {
    if (!section) return null;

    const text = section.TEXT[locale.toUpperCase() as keyof ITranslations];

    if (!text) return null;

    return <p className={section?.CLASS_NAME}>{text}</p>;
}
