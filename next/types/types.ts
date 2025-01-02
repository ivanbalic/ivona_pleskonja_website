export interface IActiveSlide {
    activeSlide: number;
    onSlideChange: (id: number) => void;
}

export type Translations = {
    SER: string;
    ENG: string;
}
