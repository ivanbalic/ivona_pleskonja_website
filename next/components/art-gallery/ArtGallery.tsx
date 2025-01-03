import React, { useCallback, useMemo } from "react";

import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/container";
import { GalleryRowItem, Translations } from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function ArtGallery ({ locale, gallery, exhibitionId }: { locale: string, gallery: GalleryRowItem[][], exhibitionId: number }) {
    const { selectedImageId, onImageSelect } = useSelectedImage();

    const selected = useMemo(() => {
        const selectedImage = gallery.flat().find((item) => item.ID === selectedImageId);

        return selectedImage ? selectedImage : null;
    }, [gallery, selectedImageId]);
    const onPrev = useCallback(() => {
        const prev = gallery.flat()[(selected?.ID ?? 0) - 2];

        if (!prev) return;

        onImageSelect(prev.ID);
    }, [onImageSelect, gallery, selected?.ID]);

    const onNext = useCallback(() => {
        const next = gallery.flat()[(selected?.ID ?? 0)];

        if (!next) return;

        onImageSelect(next.ID);
    }, [onImageSelect, gallery, selected?.ID]);

    if(!selected) return null;

    return (
        <Container className="flex flex-col lg:flex-row gap-5 lg:gap-20 px-[20px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px] pt-10 pb-10 lg:pb-[135px] h-full">
            <div className="flex justify-center items-center lg:h-[715px] max-h-full w-full lg:w-[739px] max-w-full bg-white">
                <Image src={selected.SRC.FULL} alt={selected.ALT} className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]">
                <div className="text-black font-bold text-[16px] leading-[21px] mb-5">
                    <span className="cursor-pointer hover:underline" onClick={onPrev}>PREV</span> / <span className="cursor-pointer hover:underline" onClick={onNext}>NEXT</span>
                </div>
                <div className="text-[32px] leading-[42.2px] font-bold">{selected.DETAILS.NAME[locale.toUpperCase() as keyof Translations]}</div>
                <div className="flex flex-col text-[22px] leading-[29px] font-bold mb-5">
                    <div>{selected.DETAILS.CREATED_AT} | {selected.DETAILS.DIMENSIONS}</div>
                    <div>{selected.DETAILS.TECHNIQUE[locale.toUpperCase() as keyof Translations]}</div>
                </div>
                <div className="text-black font-text text-[16px] leading-[19px] mb-10 lg:mb-20">{selected.DETAILS.DESCRIPTION[locale.toUpperCase() as keyof Translations]}</div>
                <Link href={`/${locale}/exhibitions/${exhibitionId}`} className="text-[16px] leading-[21px] font-bold">{locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION'}</Link>
            </div>
        </Container>
    );
}
