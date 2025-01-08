'use client';
import { ArticleText } from "@/components/exhibitions/ArticleText";
import { ArticleCover } from "@/components/exhibitions/ArticleCover";
import { ArticleTitle } from "@/components/exhibitions/ArticleTitle";
import { ArticleImage } from "@/components/exhibitions/ArticleImage";
import { ArticleQuote } from "@/components/exhibitions/ArticleQuote";
import { ArticleTextGrid } from "@/components/exhibitions/ArticleTextGrid";
import { ArticleCarousel } from "@/components/exhibitions/article-carousel/ArticleCarousel";
import { ArticleImageGrid } from "@/components/exhibitions/ArticleImageGrid";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { ArticleInvertedQuote } from "@/components/exhibitions/ArticleInvertedQuote";
import {ArticleInvertedTextGrid} from "@/components/exhibitions/ArticleInvertedTextGrid";
import { getExhibitionById } from "@/app/[locale]/(marketing)/exhibitions/[slug]/pageContent";
import { ArticleContainedImageGrid } from "@/components/exhibitions/ArticleContainedImageGrid";

const SECTION_COMPONENT_MAP = Object.freeze({
    TEXT: ArticleText,
    TITLE: ArticleTitle,
    IMAGE: ArticleImage,
    QUOTE: ArticleQuote,
    CAROUSEL: ArticleCarousel,
    TEXT_GRID: ArticleTextGrid,
    IMAGE_GRID: ArticleImageGrid,
    INVERTED_QUOTE: ArticleInvertedQuote,
    INVERTED_TEXT_GRID: ArticleInvertedTextGrid,
    CONTAINED_IMAGE_GRID: ArticleContainedImageGrid,
});

export function getSectionComponentByType(type: string){
    return SECTION_COMPONENT_MAP[type.toUpperCase() as keyof typeof SECTION_COMPONENT_MAP];
}

export default function ExhibitionDetails({ params: { locale, slug } }: { params: { locale: string, slug: string }}) {
    const exhibition = getExhibitionById(parseInt(slug));

    if(!exhibition) return null;

    return (
        <div className="pt-[75px] md:pt-[100px] lg:pt-[125px] tracking-[.15em] mb-20">
            <SubNavBredCrumbs navItems={exhibition.HISTORY ?? []} locale={locale} page={'exhibition'} subItemClass='max-[480px]:max-w-[250px] truncate' />
            <ArticleCover locale={locale} cover={exhibition.COVER} />
            {exhibition.SECTIONS.map((s, key) => {
                const Component = getSectionComponentByType(s.TYPE);
                // @ts-ignore
                return <Component key={`${s.TYPE}_${key}`} locale={locale} section={s} />
            })}
        </div>
    );
}
