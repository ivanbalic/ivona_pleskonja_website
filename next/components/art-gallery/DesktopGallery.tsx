import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IGalleryRowItem, ITranslations } from "@/types/types";
import { LeftArrow } from "@/components/art-gallery/LeftArrow";
import { RightArrow } from "@/components/art-gallery/RightArrow";
import { useGalleryNavigation } from "@/components/art-gallery/hooks/useGalleryNavigation";

export function DesktopGallery({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    const { selectedImageIdRef, onPrev, onNext, selected } = useGalleryNavigation(gallery);

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

    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';

    if(!selected) return null;

    return (
        <Container
            className={cn(
                "max-md:hidden",
                "h-full mt-20 pb-20 px-0 relative",
                "flex flex-col md:flex-row gap-[72px]",
            )}>
            <LeftArrow width="40px" height="40px" className="absolute left-[-40px]" onClick={onPrev} />
            <div className={cn(
                "flex justify-center items-center bg-white",
                "min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full md:max-w-[60%] xl:max-w-full"

            )}>
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
                <div className={cn("flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]")}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedImageIdRef.current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="text-[32px] leading-[100%] font-bold font-roboto-serif mb-[5px]">{selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>
                            <div className="flex flex-col text-[22px] leading-[100%] tracking-[.05em] font-bold mb-5">
                                <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                                <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                            </div>
                            <div className="text-black font-helvetica text-[16px] leading-[24px] tracking-[.05em] mb-20">{selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations]}</div>
                        </motion.div>
                    </AnimatePresence>
                    <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[100%] tracking-[.15em] font-bold">{articleLinkLabel}</Link>
                </div>
            </div>
            <RightArrow width="40px" height="40px" className="absolute right-[-40px]" onClick={onNext} />
        </Container>
    );
}
