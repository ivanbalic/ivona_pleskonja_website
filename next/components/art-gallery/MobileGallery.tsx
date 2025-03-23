import React, { useCallback, useEffect, useMemo, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { LeftArrow } from "@/components/art-gallery/LeftArrow";
import { RightArrow } from "@/components/art-gallery/RightArrow";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function MobileGallery({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }){
    const [selected, setSelected] = useState<IGalleryRowItem | null>(null);
    const [swipeDirection, setSwipeDirection] = useState<"LEFT" | "RIGHT">("LEFT");

    const { selectedImageIdRef, selectedGalleryIdRef, onImageSelect } = useSelectedImage();

    const lastImageId = useMemo(function getLastImageIndex() {
        return (gallery?.flat() ?? []).length;
    }, [gallery]);

    const onPrev = useCallback(function onPrevClick() {
        let prev = gallery?.flat()[(selectedImageIdRef.current ?? 0) - 2];

        let count = 1;
        while (!prev || prev.ID === null) {
            prev = gallery?.flat()[lastImageId - count];
            count++;
        }

        onImageSelect(selectedGalleryIdRef.current, prev?.ID ?? 0);
    }, [gallery, selectedImageIdRef, onImageSelect, selectedGalleryIdRef, lastImageId]);

    const onNext = useCallback(function onNextClick() {
        let nextIndex = selectedImageIdRef.current ?? 0;

        if(nextIndex === lastImageId) nextIndex = 0;

        let next = gallery?.flat()[(nextIndex ?? 0)];

        if (!next || next.ID === null) {
            next = gallery?.flat()[0] as IGalleryRowItem;
        }

        onImageSelect(selectedGalleryIdRef.current, next.ID);
    }, [selectedImageIdRef, lastImageId, gallery, onImageSelect, selectedGalleryIdRef]);

    const handleSwipe = (direction: string) => {
        if (direction === "LEFT") {
            setSwipeDirection("LEFT");
            setTimeout(onNext);
        } else if (direction === "RIGHT") {
            setSwipeDirection("RIGHT");
            setTimeout(onPrev);
        }
    };


    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    useEffect(function onSelectedImageChange(){
        const selectedImage = gallery?.flat().find((item) => item.ID === selectedImageIdRef.current);

        if(!selectedImage) return;

        setSelected(selectedImage);
    }, [selectedImageIdRef.current, selectedGalleryIdRef.current]);

    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';

    if(!selected) return null;

    return (
        <div {...handlers} className="lg:hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedImageIdRef.current}
                    initial={{ opacity: 0, x: swipeDirection === "LEFT" ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: swipeDirection === "LEFT" ? -100 : 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                >
                    <Container
                    className={cn(
                        "relative h-full mt-10 pb-10",
                        "flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-[72px]",
                        "px-[20px] sm:px-[30px] md:px-[45px] lg:px-[60px] xl:px-[72px]"
                    )}>
                        <div className="relative flex justify-center items-center min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full lg:max-w-[60%] xl:max-w-full bg-white">
                            <LeftArrow className="absolute lg:hidden left-[-24px]" width="24px" height="24px" onClick={() => handleSwipe("RIGHT")} />
                            <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className="max-h-full object-cover" placeholder="blur"/>
                            <RightArrow className="absolute lg:hidden right-[-24px]" width="24px" height="24px" onClick={() => handleSwipe("LEFT")} />
                        </div>
                        <div className="flex flex-1 justify-between flex-col">
                            <div className={cn("flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]")}>
                                <div className="text-[30px] xl:text-[32px] leading-[40.2px] xl:leading-[42.2px] font-bold">{selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>
                                <div className="flex flex-col text-[20px] xl:text-[22px] leading-[27px] xl:leading-[29px] font-bold mb-5">
                                    <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                                    <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                                </div>
                                <div className="text-black font-helvetica text-[16px] leading-[19px] mb-10 lg:mb-20">{selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations]}</div>
                                <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[21px] font-bold">{articleLinkLabel}</Link>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
