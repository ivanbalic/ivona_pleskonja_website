import { ArticleText } from "@/components/articles/ArticleText";
import { ArticleTitle } from "@/components/articles/ArticleTitle";
import { ArticleImage } from "@/components/articles/ArticleImage";
import { ArticleQuote } from "@/components/articles/ArticleQuote";
import { ArticleTextGrid } from "@/components/articles/ArticleTextGrid";
import { ArticleImageGrid } from "@/components/articles/ArticleImageGrid";
import { ArticleInvertedQuote } from "@/components/articles/ArticleInvertedQuote";
import {ArticleReadMoreButton} from "@/components/articles/ArticleReadMoreButton";
import { ArticleInvertedTextGrid } from "@/components/articles/ArticleInvertedTextGrid";
import { ArticleCarousel } from "@/components/articles/article-carousel/ArticleCarousel";
import { ArticleContainedImageGrid } from "@/components/articles/ArticleContainedImageGrid";

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
