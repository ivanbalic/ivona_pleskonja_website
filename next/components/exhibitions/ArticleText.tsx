import { ITranslations } from "@/types/types";

export function ArticleText({ section, locale = 'ser' }: { section?: { TYPE: 'text', TEXT: ITranslations }, locale?: string }) {
    if (!section) return null;

    const text = section.TEXT[locale.toUpperCase() as keyof ITranslations];

    if (!text) return null;

    return <p>{text}</p>;
}
