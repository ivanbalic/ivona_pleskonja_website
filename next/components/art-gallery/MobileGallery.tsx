import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { LeftArrow } from "@/components/art-gallery/LeftArrow";
import { RightArrow } from "@/components/art-gallery/RightArrow";
import { useGalleryNavigation } from "@/components/art-gallery/hooks/useGalleryNavigation";
import {section} from "framer-motion/m";

export function MobileGallery({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    const [swipeDirection, setSwipeDirection] = useState<"LEFT" | "RIGHT">("LEFT");

    const { selectedImageIdRef, onPrev, onNext, selected } = useGalleryNavigation(gallery);

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

    const yearLabel = locale === 'ser' ? 'Godina' : 'Year';
    const techniqueLabel = locale === 'ser' ? 'Tehnika' : 'Technique';
    const dimensionsLabel = locale === 'ser' ? 'Dimenzije' : 'Dimensions';
    const nameLabel = locale === 'ser' ? 'Naziv dela' : 'Title of the work';
    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';
    const fragmentDimensionsLabel = locale === 'ser' ? 'Dimenzije svakog fragmenta' : 'Dimensions of each fragment';

    if(!selected) return null;

    return (
        <div {...handlers} className="md:hidden">
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
                        "relative h-full mt-5 pb-10",
                        "flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-[72px]",
                    )}>
                        <div className="relative flex justify-center items-center">
                            <LeftArrow color={selected.SRC?.COLOR} className="absolute lg:hidden left-[0]" width="24px" height="24px" onClick={() => handleSwipe("RIGHT")} />
                            <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className="max-h-full object-cover" placeholder="blur"/>
                            <RightArrow color={selected.SRC?.COLOR} className="absolute lg:hidden right-[0px]" width="24px" height="24px" onClick={() => handleSwipe("LEFT")} />
                        </div>
                        <div className="flex flex-1 justify-between flex-col">
                            <div className={cn("flex flex-1 flex-col justify-end items-start text-primaryBlue")}>
                                <div className="text-[32px] leading-[100%] tracking-[.15em] font-bold font-roboto-serif pb-[5px] uppercase">„{selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}“</div>
                                {selected.TYPE === 'vertical' && <div className="text-[32px] leading-[100%] tracking-[.15em] font-bold font-roboto-serif mt-[5px]">{selected.DETAILS?.SUBTITLE?.[locale.toUpperCase() as keyof ITranslations]}</div>}
                                {selected.TYPE === 'vertical'
                                    ? (
                                        <div className={cn(
                                            "flex flex-col font-helvetica text-[16px] leading-[100%] tracking-[.15em] italic my-5 text-left gap-1",
                                            selected.DETAILS?.CLASS_NAME
                                        )}>
                                            <div>{nameLabel}: {selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>
                                            <div>{dimensionsLabel}: {selected.DETAILS?.DIMENSIONS} {selected.DETAILS?.ADDITIONAL_DIMENSIONS_INFO ? selected.DETAILS?.ADDITIONAL_DIMENSIONS_INFO?.[locale.toUpperCase() as keyof ITranslations] : ''}</div>
                                            <div>{fragmentDimensionsLabel}: {selected.DETAILS?.FRAGMENT_DIMENSIONS}</div>
                                            <div>{techniqueLabel}: {selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                                            <div>{yearLabel}: {selected.DETAILS?.CREATED_AT}</div>
                                        </div>
                                    )
                                    : (
                                        <div className="flex flex-col gap-[5px] py-0.5 text-[16px] leading-[100%] tracking-[.05em] font-bold mb-5">
                                            <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                                            <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                                        </div>
                                    )
                                }
                                <div className="text-black font-helvetica text-[16px] leading-[24px] tracking-[.05em] mb-10" dangerouslySetInnerHTML={{ __html: selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations] ?? '' }}/>
                                <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[100%] tracking-[.15em] font-bold">{articleLinkLabel}</Link>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
