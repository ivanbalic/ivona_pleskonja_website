import React, { useCallback, useEffect, useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

function LeftArrow({onClick, className, width, height }: { onClick: () => void, className?: string, width?: string | undefined, height?: string | undefined }) {
 return (
     <div className={cn("flex items-center absolute left-0 top-[50%]", className)} onClick={onClick}>
         <ArrowLeft width={width} height={height} />
     </div>
 );
}

function RightArrow({onClick, className, width, height }: { onClick: () => void, className?: string, width?: string | undefined, height?: string | undefined }) {
 return (
     <div className={cn("flex items-center absolute right-0 top-[50%]", className)} onClick={onClick}>
         <ArrowRight width={width} height={height} />
     </div>
 );
}

export function ArtGallery ({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    const [selected, setSelected] = useState<IGalleryRowItem | null>(null);

    const { selectedImageIdRef, selectedGalleryIdRef, onImageSelect } = useSelectedImage();

    const next = useMemo(() => gallery?.flat()[(selected?.ID ?? 0)], [selected]);
    const prev = useMemo(() => gallery?.flat()[(selected?.ID ?? 0) - 2], [selected]);


    const onPrev = useCallback(function onPrevClick() {
        const prev = gallery?.flat()[(selectedImageIdRef.current ?? 0) - 2];

        if (!prev) return;

        onImageSelect(selectedGalleryIdRef.current, prev.ID);
    }, [selectedImageIdRef, onImageSelect, selectedGalleryIdRef]);

    const onNext = useCallback(function onNextClick() {
        const next = gallery?.flat()[(selectedImageIdRef.current ?? 0)];

        if (!next || !next.ID) return;

        onImageSelect(selectedGalleryIdRef.current, next.ID);
    }, [selectedImageIdRef, onImageSelect, selectedGalleryIdRef]);

    const onArrowNavigation = (event: KeyboardEvent) => {
        const { key } = event;

        if(key === 'ArrowLeft') onPrev();
        if(key === 'ArrowRight') onNext();
    };

    useEffect(function onMount(){
        window.addEventListener('keydown', onArrowNavigation);

        return function unmountCleanUp() {
            window.removeEventListener('keydown', onArrowNavigation);
        };
    }, []);

    useEffect(function onSelectedImageChange(){
            const selectedImage = gallery?.flat().find((item) => item.ID === selectedImageIdRef.current);

            if(!selectedImage) return;

            setSelected(selectedImage);
    }, [selectedImageIdRef.current, selectedGalleryIdRef.current]);

    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';

    if(!selected) return null;

    return (
        <Container
            className={cn(
                "h-full mt-10 pb-10 relative",
                "flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-[72px]",
                "px-[20px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[72px]"
        )}>
            <LeftArrow width="40px" height="40px" className={cn("max-lg:hidden", !prev ? 'opacity-70' : '')} onClick={onPrev} />
            <div className="max-lg:relative flex justify-center items-center min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full lg:max-w-[60%] xl:max-w-full bg-white">
                <LeftArrow className={cn("lg:hidden left-[-24px]", !prev ? 'opacity-70' : '')} width="24px" height="24px" onClick={onPrev} />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImageIdRef.current}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className="max-h-full object-cover" placeholder="blur"/>
                    </motion.div>
                </AnimatePresence>
                <RightArrow className={cn("lg:hidden right-[-24px]", !next ? 'opacity-70' : '')} width="24px" height="24px" onClick={onNext} />
            </div>
            <div className="flex flex-1 justify-between flex-col">
                <div className={cn("flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]")}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedImageIdRef.current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="text-[30px] xl:text-[32px] leading-[40.2px] xl:leading-[42.2px] font-bold">{selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>
                            <div className="flex flex-col text-[20px] xl:text-[22px] leading-[27px] xl:leading-[29px] font-bold mb-5">
                                <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                                <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                            </div>
                            <div className="text-black font-helvetica text-[16px] leading-[19px] mb-10 lg:mb-20">{selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations]}</div>
                        </motion.div>
                    </AnimatePresence>
                    <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[21px] font-bold">{articleLinkLabel}</Link>
                </div>
            </div>
            <RightArrow width="40px" height="40px" className={cn("max-lg:hidden", !next ? 'opacity-70' : '')} onClick={onNext} />
        </Container>
    );
}
