import { MutableRefObject } from "react";
import { StaticImageData } from "next/image";

export interface IActiveSlide {
    activeSlide: number;
    onSlideChange: (id: number) => void;
}

export interface ISelectedImage {
    selectedImageIdRef: MutableRefObject<number | null>;
    selectedGalleryIdRef: MutableRefObject<number | null>;
    onImageSelect: (galleryId: number | null, imageId: number | null) => void;
}

export type ITranslations = {
    SER: string;
    ENG: string;
}

export interface ISubNavItem {
    LINK: string;
    ID: string | number;
    TITLE: ITranslations;
}

export interface IGallery {
    ID: number;
    TITLE: ITranslations | null;
    CONTENT: IGalleryRowItem[][];
}

export interface IMyWorks {
    ID: string;
    TEMPLATE_ID: string;
    GALLERY: IGallery[];
    TITLE: ITranslations;
    EXHIBITION_ID: number;
    HISTORY: ISubNavItem[];
    DESCRIPTION: ITranslations[];
}

type TSrc = {
    COLOR?: string;
    FULL: StaticImageData;
    PREVIEW: StaticImageData;
};

interface IDescription {
    CREATED_AT: string;
    DIMENSIONS: string;
    NAME: ITranslations;
    SUBTITLE?: ITranslations;
    TECHNIQUE: ITranslations;
    DESCRIPTION: ITranslations;
    FRAGMENT_DIMENSIONS?: string;
    ALTERNATIVE_NAME?: ITranslations;
    ADDITIONAL_DIMENSIONS_INFO?: ITranslations;
}

export interface IGalleryRowItem {
    ID: number | null;
    ALT: string;
    GRID_PLACES: number;
    SRC: TSrc | null;
    DETAILS: IDescription | null;
    TYPE?: 'vertical' | 'horizontal' | undefined;
}

export interface IArticleCover {
    TITLE: ITranslations;
    AUTHOR: ITranslations,
    YEAR: number | null,
    TEXT: ITranslations,
    MEDIA: {
        MOBILE: {
            ALT: string,
            TYPE: string,
            POSTER?: string,
            CLASS_NAME?: string,
            MAX_HEIGHT?: number,
            SRC: StaticImageData | string,
        } | null,
        DESKTOP: {
            ALT: string,
            TYPE: string,
            POSTER?: string,
            CLASS_NAME?: string,
            MAX_HEIGHT?: number,
            SRC: StaticImageData | string,
        } | null
    },
    EXTERNAL_LINK: {
        URL: string | null,
        LABEL: ITranslations
    },
}
