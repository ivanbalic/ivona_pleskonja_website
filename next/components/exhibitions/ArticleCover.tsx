'use client';
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { IArticleCover, ITranslations } from "@/types/types";

function calculateOffset(height: number) {
    return Math.round(height / 2);
}

export function ArticleCover({ cover, locale }: { cover?: IArticleCover, locale: string }) {
    const [coverImageOffset, setCoverImageOffset] = useState<number | null>(0);
    const coverRef = useRef<HTMLImageElement | null>(null);

    const [maxHeightClass, setMaxHeightClass] = useState<string>('');

    useEffect(function setMaxImageHeight() {
        if(!cover) return;

        setMaxHeightClass(`max-h-[${cover?.IMAGE.MAX_HEIGHT}px]`);
    }, [cover]);


    useEffect(() => {
        const coverElement = coverRef.current;

        if(!coverElement) return;

        function onResize(entries: any[]) {
            for(const entry of entries) {
                if(entry.target === coverElement) {
                    setCoverImageOffset(calculateOffset(entry.contentRect.height));
                }
            }
        }

        const resizeObserver = new ResizeObserver(onResize);

        resizeObserver.observe(coverElement);
        setCoverImageOffset(calculateOffset(coverElement.offsetHeight));

        return () => resizeObserver.unobserve(coverElement);
    }, [])

    if(!cover) return null;

    return (
        <div className="bg-articleBgBlue">
            <Container containerStyle={{paddingBottom: `${coverImageOffset}px`, marginBottom: `${coverImageOffset}px`}} className="mt-5 sm:mt-10 pt-5 sm:pt-10">
                <Container className={cn(
                    'pb-5 sm:pb-10',
                    'flex flex-col gap-4 text-center',
                    'px-[5px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]'
                )}>
                    <div className={cn(
                        "font-roboto-serif font-bold tracking-[.15em]",
                        "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]",
                        "leading-[25px] sm:leading-[29px] md:leading-[33px] lg:leading-[37px]"
                    )}>
                        {cover?.TEXT[locale.toUpperCase() as keyof ITranslations]}
                    </div>
                    <div className="flex flex-col gap-2 font-helvetica text-[16px] leading-[19.5px]">
                        <div className="font-medium">{cover.YEAR}</div>
                        <div
                            className="font-bold">{cover.AUTHOR[locale.toUpperCase() as keyof ITranslations]}</div>
                    </div>
                </Container>
                <Container className="absolute md:px-10">
                    <Image
                        priority
                        ref={coverRef} src={cover.IMAGE.SRC ?? ''}
                        alt={cover.IMAGE.ALT ?? ''} className={cn('min-h-[150px] object-cover', maxHeightClass)}
                    />
                    {cover?.EXTERNAL_LINK.URL &&
                        <Link className={cn(
                            'absolute top-[0] left-[calc(100%-80px)]',
                            'md:top-[calc(50%-10px)] md:left-[calc(100%-110px)]',
                            'lg:top-[calc(50%-35px)] lg:left-[calc(100%-146px)]'
                        )}
                              href={cover?.EXTERNAL_LINK.URL ?? '#'}
                              target="_blank"
                        >
                            <div className={cn(
                                'flex items-center justify-center text-black text-center font-helvetica',
                                'text-[8px] md:text-[10px] lg:text-[12px] leading-[10.3px] md:leading-[12.3px] lg:leading-[14.3px]',
                                'bg-externalLink rounded-full w-[80px] md:w-[100px] lg:w-[136px] h-[80px] md:h-[100px] lg:h-[136px] px-[11px]',
                            )}>
                                {cover?.EXTERNAL_LINK.LABEL[locale.toUpperCase() as keyof ITranslations]}
                            </div>
                        </Link>
                    }
                </Container>
            </Container>
        </div>
    );
}
