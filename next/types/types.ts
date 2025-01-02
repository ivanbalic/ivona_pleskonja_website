export interface IActiveSlide {
    activeSlide: number;
    onSlideChange: (id: number) => void;
}

export type Translations = {
    SER: string;
    ENG: string;
}

export type Title = {
    SER: string,
    ENG: string,
};
