import { StaticImageData } from "next/image";

export interface IActiveSlide {
    activeSlide: number;
    onSlideChange: (id: number) => void;
}

export interface ISelectedImage {
    selectedImageId: number | null;
    onImageSelect: (selected: number) => void;
}

export type Translations = {
    SER: string;
    ENG: string;
}

export type Title = {
    SER: string,
    ENG: string,
};

export interface SubNavItem {
    LINK: string;
    ID: string | number;
    TITLE: Translations;
}

export interface IMyWorks {
    ID: string;
    TITLE: Translations;
    TEMPLATE_ID: string;
    EXHIBITION_ID: number;
    HISTORY: SubNavItem[];
    DESCRIPTION: Translations[];
    GALLERY: GalleryRowItem[][];
}

export interface GalleryRowItem {
    ID: number;
    ALT: string;
    SRC: {
        FULL: StaticImageData;
        PREVIEW: StaticImageData;
    };
    DETAILS: {
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
    };
}
