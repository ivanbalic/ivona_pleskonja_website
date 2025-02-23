import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function ArtGallery ({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    const [autoModeStatus, setAutoModeStatus] = useState<boolean>(true);
    const [selected, setSelected] = useState<IGalleryRowItem | null>(null);
    const intervalIdRef = useRef<number | null>(null);

    const { selectedImageIdRef, selectedGalleryIdRef, onImageSelect } = useSelectedImage();

    const next = useMemo(() => gallery?.flat()[(selected?.ID ?? 0)], [selected]);
    const prev = useMemo(() => gallery?.flat()[(selected?.ID ?? 0) - 2], [selected]);

    const resetInterval = useCallback(function onResetInterval() {
        if(intervalIdRef.current === null) return;

        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        setAutoModeStatus(false);
    }, [intervalIdRef]);

    const onPrev = useCallback(function onPrevClick() {
        resetInterval();
        const prev = gallery?.flat()[(selectedImageIdRef.current ?? 0) - 2];

        if (!prev) return;

        onImageSelect(selectedGalleryIdRef.current, prev.ID);
    }, [selectedImageIdRef, onImageSelect, selectedGalleryIdRef]);

    const onNext = useCallback(function onNextClick() {
        resetInterval();
        const next = gallery?.flat()[(selectedImageIdRef.current ?? 0)];

        if (!next || !next.ID) return;

        onImageSelect(selectedGalleryIdRef.current, next.ID);
    }, [selectedImageIdRef, onImageSelect, selectedGalleryIdRef]);

    const startAutoMode = useCallback(function onAutoMode(){
        function onAutoImageChange(){
            const searchParams = new URLSearchParams(window.location.search);

            const currentImageId = Number(searchParams.get("image")) || 1;
            const currentGalleryId = Number(searchParams.get("gallery")) || 1;

            const next = gallery?.flat()[(currentImageId ?? 0)];

            if(!next) {
                onImageSelect(currentGalleryId, 1);
                return;
            }

            onImageSelect(currentGalleryId, next.ID);
        }

        if(intervalIdRef.current !== null) {
            resetInterval();
            return;
        }

        setAutoModeStatus(true);
        intervalIdRef.current = setInterval(onAutoImageChange, 5000) as unknown as number;
    },[next, onNext, onImageSelect, intervalIdRef]);

    const onArrowNavigation = (event: KeyboardEvent) => {
        const { key } = event;

        if(key === 'ArrowLeft') onPrev();
        if(key === 'ArrowRight') onNext();
    };

    useEffect(function onMount(){
        startAutoMode();
        window.addEventListener('keydown', onArrowNavigation);

        return function unmountCleanUp() {
            resetInterval();
            window.removeEventListener('keydown', onArrowNavigation);
        };
    }, []);

    useEffect(function onSelectedImageChange(){
            const selectedImage = gallery?.flat().find((item) => item.ID === selectedImageIdRef.current);

            if(!selectedImage) return;

            setSelected(selectedImage);
    }, [selectedImageIdRef.current, selectedGalleryIdRef.current]);

    const nextLabel = locale === 'ser' ? 'SLEDEĆA' : 'NEXT';
    const prevLabel = locale === 'ser' ? 'PRETHODNA' : 'PREV';
    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';

    if(!selected) return null;

    return (
        <Container
            className={cn(
                "h-full pt-10 pb-10 lg:pb-[135px]",
                "flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-[72px]",
                "px-[20px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[72px]"
        )}>
            <div className="flex justify-center items-center min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full lg:max-w-[60%] xl:max-w-full bg-white">
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
            </div>
            <div className="flex flex-1 justify-between flex-col">
                <div className={"hover:underline text-black font-bold text-[16px] leading-[21px] mb-5 flex justify-end cursor-pointer"} onClick={startAutoMode}>
                    {`Auto: ${autoModeStatus ? 'ON' : 'OFF'}`}
                </div>
                <div className="flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]">
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
                    <div className="text-black font-bold text-[16px] leading-[21px] mb-5">
                        <span className={cn("hover:underline", prev ? "cursor-pointer" : 'pointer-events-none opacity-40 cursor-not-allowed')} onClick={onPrev}>
                            {prevLabel}
                        </span>
                        /
                        <span className={cn("hover:underline", next ? "cursor-pointer" : 'pointer-events-none opacity-40 cursor-not-allowed')} onClick={onNext}>
                            {nextLabel}
                        </span>
                    </div>
                    <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[21px] font-bold">{articleLinkLabel}</Link>
                </div>
            </div>
        </Container>
    );
}
