import React, { useCallback, useMemo } from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function ArtGallery ({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    const { selectedImageId, selectedGalleryId, onImageSelect } = useSelectedImage();

    const selected = useMemo(() => {
        const selectedImage = gallery?.flat().find((item) => item.ID === selectedImageId);

        return selectedImage ? selectedImage : null;
    }, [gallery, selectedImageId]);
    const onPrev = useCallback(() => {
        const prev = gallery?.flat()[(selected?.ID ?? 0) - 2];

        if (!prev) return;

        onImageSelect(selectedGalleryId, prev.ID);
    }, [gallery, selected?.ID, onImageSelect, selectedGalleryId]);

    const onNext = useCallback(() => {
        const next = gallery?.flat()[(selected?.ID ?? 0)];

        if (!next || !next.ID) return;

        onImageSelect(selectedGalleryId, next.ID);
    }, [gallery, selected?.ID, onImageSelect, selectedGalleryId]);

    const nextLabel = locale === 'ser' ? 'SLEDEĆA' : 'NEXT';
    const prevLabel = locale === 'ser' ? 'PRETHODNA' : 'PREV';
    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';

    if(!selected) return null;

    return (
        <Container className={cn(
            "h-full pt-10 pb-10 lg:pb-[135px]",
            "flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-20",
            "px-[20px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]"
        )}>
            <div className="flex justify-center items-center min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full lg:max-w-[60%] xl:max-w-full bg-white">
                <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className="max-h-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]">
                <div className="text-black font-bold text-[16px] leading-[21px] mb-5">
                    <span className="cursor-pointer hover:underline" onClick={onPrev}>{prevLabel}</span> / <span className="cursor-pointer hover:underline" onClick={onNext}>{nextLabel}</span>
                </div>
                <div className="text-[30px] xl:text-[32px] leading-[40.2px] xl:leading-[42.2px] font-bold">{selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>
                <div className="flex flex-col text-[20px] xl:text-[22px] leading-[27px] xl:leading-[29px] font-bold mb-5">
                    <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                    <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                </div>
                <div className="text-black font-helvetica text-[16px] leading-[19px] mb-10 lg:mb-20">{selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations]}</div>
                <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[21px] font-bold">{articleLinkLabel}</Link>
            </div>
        </Container>
    );
}
