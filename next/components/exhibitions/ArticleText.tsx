import { ITranslations } from "@/types/types";

export function ArticleText({ section, locale = 'ser' }: { section?: { TYPE: 'text', TEXT: ITranslations }, locale?: string }) {
    if (!section) return null;

    return <p>{section.TEXT[locale.toUpperCase() as keyof ITranslations]}</p>;
}
