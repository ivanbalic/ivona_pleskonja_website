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

export function ArticleCover({ cover, locale }: { cover: IArticleCover, locale: string }) {
    const isMobile = useIsMobile();
    const [coverImageOffset, setCoverImageOffset] = useState<number | null>(0);
    const coverRef = useRef<HTMLImageElement | null>(null);
    const media = isMobile ? cover.MEDIA.MOBILE : cover.MEDIA.DESKTOP;

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
            <Container containerStyle={{paddingBottom: `${coverImageOffset || ((media.MAX_HEIGHT ?? 0) / 2)}px`, marginBottom: `${coverImageOffset || ((media.MAX_HEIGHT ?? 0) / 2)}px`}} className="mt-10 md:pt-10">
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
                        <div className="font-normal md:font-bold">
                            {cover.AUTHOR[locale.toUpperCase() as keyof ITranslations]}
                        </div>
                    </div>
                </Container>
                <Container className="absolute md:px-10 w-full">
                    <div className={cn("flex justify-center", media.CLASS_NAME)}>
                        {media?.TYPE === 'image'
                            ? <Image
                                priority
                                ref={coverRef}
                                placeholder='blur'
                                fetchPriority='high'
                                src={media?.SRC ?? ''}
                                alt={media?.ALT ?? ''}
                                className={cn('min-h-[150px] object-cover', `max-h-[${media?.MAX_HEIGHT}px]`)}
                            />
                            : (
                                <div ref={coverRef}>
                                    <video width={1440} poster={media?.POSTER} controls className='min-h-[150px] object-cover'>
                                        <source src={media?.SRC as string} type="video/mp4" />
                                    </video>
                                </div>
                            )
                        }
                    </div>
                    {cover?.EXTERNAL_LINK.URL &&
                        <Link style={{ marginTop: `-${isMobile ? coverImageOffset : 0}px`}} className={cn(
                            'z-[2] left-[calc(100%-152px)]',
                            'block fixed md:absolute w-fit',
                            'md:top-[calc(50%-80px)] md:left-[calc(100%-146px)]'
                        )}
                              href={cover?.EXTERNAL_LINK.URL ?? '#'}
                              target="_blank"
                        >
                            <div className={cn(
                                'text-[12px] leading-[100%]',
                                'bg-externalLink rounded-full w-[136px] h-[136px] px-[27.5px]',
                                'flex items-center justify-center text-black text-center font-helvetica',
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
