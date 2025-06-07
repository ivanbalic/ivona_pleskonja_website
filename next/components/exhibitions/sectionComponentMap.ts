import { ArticleText } from "@/components/exhibitions/ArticleText";
import { ArticleTitle } from "@/components/exhibitions/ArticleTitle";
import { ArticleImage } from "@/components/exhibitions/ArticleImage";
import { ArticleQuote } from "@/components/exhibitions/ArticleQuote";
import { ArticleTextGrid } from "@/components/exhibitions/ArticleTextGrid";
import { ArticleImageGrid } from "@/components/exhibitions/ArticleImageGrid";
import { ArticleInvertedQuote } from "@/components/exhibitions/ArticleInvertedQuote";
import {ArticleReadMoreButton} from "@/components/exhibitions/ArticleReadMoreButton";
import { ArticleInvertedTextGrid } from "@/components/exhibitions/ArticleInvertedTextGrid";
import { ArticleCarousel } from "@/components/exhibitions/article-carousel/ArticleCarousel";
import { ArticleContainedImageGrid } from "@/components/exhibitions/ArticleContainedImageGrid";

const SECTION_COMPONENT_MAP = Object.freeze({
    TEXT: ArticleText,
    TITLE: ArticleTitle,
    IMAGE: ArticleImage,
    QUOTE: ArticleQuote,
    CAROUSEL: ArticleCarousel,
    TEXT_GRID: ArticleTextGrid,
    IMAGE_GRID: ArticleImageGrid,
    READ_MORE: ArticleReadMoreButton,
    INVERTED_QUOTE: ArticleInvertedQuote,
    INVERTED_TEXT_GRID: ArticleInvertedTextGrid,
    CONTAINED_IMAGE_GRID: ArticleContainedImageGrid,
});

export function getSectionComponentByType(type: string){
    return SECTION_COMPONENT_MAP[type.toUpperCase() as keyof typeof SECTION_COMPONENT_MAP];
}
