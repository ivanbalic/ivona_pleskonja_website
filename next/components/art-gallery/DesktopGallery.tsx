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

    const yearLabel = locale === 'ser' ? 'Godina' : 'Year';
    const techniqueLabel = locale === 'ser' ? 'Tehnika' : 'Technique';
    const dimensionsLabel = locale === 'ser' ? 'Dimenzije' : 'Dimensions';
    const nameLabel = locale === 'ser' ? 'Naziv dela' : 'Title of the work';
    const articleLinkLabel = locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION';
    const fragmentDimensionsLabel = locale === 'ser' ? 'Dimenzije svakog fragmenta' : 'Dimensions of each fragment';

    if(!selected) return null;

    return (
        <Container
            className={cn(
                "flex md:flex-row gap-[72px]",
                selected.TYPE === 'vertical' ? 'flex-col' : 'flex-row',
                "max-md:hidden",
                "h-full mt-20 pb-20 px-0 relative",
            )}>
            <LeftArrow width="40px" height="40px" className="absolute left-[-40px]" onClick={onPrev} />
            {selected.TYPE !== 'vertical' && <div className={cn(
                "flex justify-center items-center bg-white",
                "min-h-[200px] xl:h-[715px] max-h-full w-full xl:w-[739px] max-w-full md:max-w-[60%] xl:max-w-full"
            )}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImageIdRef.current}
                        initial={{opacity: 0, filter: "blur(10px)"}}
                        animate={{opacity: 1, filter: "blur(0px)"}}
                        exit={{opacity: 0, filter: "blur(10px)"}}
                        transition={{duration: 1, ease: "easeInOut"}}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className={cn("max-h-full object-cover", selected.CLASS_NAME)} placeholder="blur"/>
                    </motion.div>
                </AnimatePresence>
            </div>}
            <div className={cn(
                "flex flex-1 justify-between flex-col",
                selected.TYPE === 'vertical' ? 'text-center' : 'text-left',
            )}>
                <div className={cn("flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]")}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedImageIdRef.current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={cn(
                                "w-full h-full flex flex-col",
                                selected.TYPE === 'vertical' ? 'items-center justify-center' : 'justify-end items-start'
                            )}
                        >
                            <div className={cn(
                                selected.TYPE === 'vertical' ? 'justify-center items-center' : 'justify-end items-start',
                                "w-full flex flex-col text-[36px] leading-[100%] font-bold font-roboto-serif mb-[5px] uppercase"
                            )}>
                                {`„${selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}“`}
                            </div>
                            {selected.TYPE === 'vertical' && <div className="text-[32px] leading-[100%] font-bold font-roboto-serif mt-[5px]">{selected.DETAILS?.SUBTITLE?.[locale.toUpperCase() as keyof ITranslations]}</div>}
                            {selected.TYPE !== 'vertical' &&
                                <div className="w-full flex flex-col justify-end items-start text-[22px] leading-[100%] tracking-[.05em] font-bold mb-5">
                                    <div>{selected.DETAILS?.CREATED_AT} | {selected.DETAILS?.DIMENSIONS}</div>
                                    <div>{selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                                </div>
                            }
                            <div className={cn(
                                selected.TYPE === 'vertical' ? 'my-10': 'mb-20',
                                "text-black font-helvetica text-[16px] leading-[24px] tracking-[.05em]")}
                                 dangerouslySetInnerHTML={{__html: selected.DETAILS?.DESCRIPTION[locale.toUpperCase() as keyof ITranslations] ?? ''}}
                            />
                            {selected.TYPE === 'vertical' && <div className={cn(
                                "flex justify-center items-center bg-white",
                                "min-h-[200px] max-h-full xl:max-h-[715px] w-full max-w-full"
                            )}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedImageIdRef.current}
                                        initial={{opacity: 0, filter: "blur(10px)"}}
                                        animate={{opacity: 1, filter: "blur(0px)"}}
                                        exit={{opacity: 0, filter: "blur(10px)"}}
                                        transition={{duration: 1, ease: "easeInOut"}}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <Image src={selected.SRC?.FULL ?? ''} alt={selected.ALT} className={cn("max-h-full object-cover", selected.CLASS_NAME)} placeholder="blur"/>
                                    </motion.div>
                                </AnimatePresence>
                            </div>}
                            {selected.TYPE === 'vertical' && (
                                <div className={cn(
                                    "flex flex-col justify-start w-full font-helvetica text-[26px] leading-[100%] tracking-[.15em] italic my-5 text-left gap-1",
                                    selected.DETAILS?.CLASS_NAME
                                )}
                                >
                                    {selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations] && <div>{nameLabel}: {selected.DETAILS?.NAME[locale.toUpperCase() as keyof ITranslations]}</div>}
                                    {selected.DETAILS?.DIMENSIONS &&<div>{dimensionsLabel}: {selected.DETAILS?.DIMENSIONS} {selected.DETAILS?.ADDITIONAL_DIMENSIONS_INFO ? selected.DETAILS?.ADDITIONAL_DIMENSIONS_INFO?.[locale.toUpperCase() as keyof ITranslations] : ''}</div>}
                                    {selected.DETAILS?.FRAGMENT_DIMENSIONS && <div>{fragmentDimensionsLabel}: {selected.DETAILS?.FRAGMENT_DIMENSIONS}</div>}
                                    {selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations] &&
                                        <div>{techniqueLabel}: {selected.DETAILS?.TECHNIQUE[locale.toUpperCase() as keyof ITranslations]}</div>
                                    }
                                    {selected.DETAILS?.CREATED_AT && <div>{yearLabel}: {selected.DETAILS?.CREATED_AT}</div>}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                    <Link href={`/${locale}/articles/${exhibitionId}`} className="text-[16px] leading-[100%] tracking-[.15em] font-bold">{articleLinkLabel}</Link>
                </div>
            </div>
            <RightArrow width="40px" height="40px" className="absolute right-[-40px]" onClick={onNext} />
        </Container>
    );
}
