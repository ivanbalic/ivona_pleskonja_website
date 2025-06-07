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
    NAME: {
        SER: string;
        ENG: string;
    };
    TECHNIQUE: {
        SER: string;
        ENG: string;
    };
    DESCRIPTION: {
        SER: string;
        ENG: string;
    };
}

export interface IGalleryRowItem {
    ID: number | null;
    ALT: string;
    GRID_PLACES: number;
    SRC: TSrc | null;
    DETAILS: IDescription | null;
}

export interface IArticleCover {
    TITLE: ITranslations;
    AUTHOR: ITranslations,
    YEAR: number,
    TEXT: ITranslations,
    IMAGE: {
        ALT: string,
        MAX_HEIGHT?: number,
        SRC: StaticImageData,
    },
    EXTERNAL_LINK: {
        URL: string,
        LABEL: ITranslations
    },
}
