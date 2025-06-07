'use client';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Image from'next/image';

import { cn } from '@/lib/utils';
import { useIsMobile } from "@/hooks/useIsMobile";
import { Container } from '@/components/container';
import { IArticleCover, ITranslations } from '@/types/types';

function calculateOffset(height: number) {
    return Math.round(height / 2);
}

export function ArticleCover({ cover, locale }: { cover?: IArticleCover, locale: string }) {
    const isMobile = useIsMobile();
    const [coverImageOffset, setCoverImageOffset] = useState<number | null>(0);
    const coverRef = useRef<HTMLImageElement | null>(null);

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
            <Container containerStyle={{paddingBottom: `${coverImageOffset || ((cover.IMAGE.MAX_HEIGHT ?? 0) / 2)}px`, marginBottom: `${coverImageOffset || ((cover.IMAGE.MAX_HEIGHT ?? 0) / 2)}px`}} className="mt-10 md:pt-10">
                <Container className={cn(
                    'pb-5 md:pb-10',
                    'flex flex-col gap-4',
                    'px-4 md:px-[135px]',
                    'text-left md:text-center',
                )}>
                    <div className={cn(
                        'max-md:text-externalLink mb-4',
                        'text-[32px] md:text-[33px] leading-[100%] font-roboto-serif font-bold'
                    )}>{cover?.TITLE[locale.toUpperCase() as keyof ITranslations]}</div>
                    <div className={cn(
                        "text-[20px] md:text-[32px]",
                        "font-roboto-serif font-bold leading-[100%] tracking-[.15em]",
                    )}>
                        {cover?.TEXT[locale.toUpperCase() as keyof ITranslations]}
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 font-helvetica text-[16px] leading-[10px] md:leading-[100%] tracking-[.05em] md:tracking-[.15em] max-md:text-externalLink">
                        <div className="font-normal md:font-medium max-md:border-r border-externalLink max-md:pr-2">{cover.YEAR}</div>
                        <div
                            className="font-normal md:font-bold">{cover.AUTHOR[locale.toUpperCase() as keyof ITranslations]}</div>
                    </div>
                </Container>
                <Container className="absolute md:px-10">
                    <Image
                        priority
                        placeholder='blur'
                        fetchPriority='high'
                        ref={coverRef} src={cover.IMAGE.SRC ?? ''}
                        alt={cover.IMAGE.ALT ?? ''} className={cn('min-h-[150px] object-cover', `max-h-[${cover?.IMAGE.MAX_HEIGHT}px]`)}
                    />
                    {cover?.EXTERNAL_LINK.URL && !isMobile &&
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
