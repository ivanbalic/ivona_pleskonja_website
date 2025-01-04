'use client';

import Link from "next/link";
import Image from 'next/image';

import { cn } from "@/lib/utils";
import { Translations } from "@/types/types";
import { Container } from "@/components/container";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { getExhibitionById } from "@/app/[locale]/(marketing)/exhibitions/[slug]/pageContent";

export default function ExhibitionDetails({ params: { locale, slug } }: { params: { locale: string, slug: string }}) {
    const exhibition = getExhibitionById(parseInt(slug));

    return (
        <div className="pt-[75px] md:pt-[100px] lg:pt-[125px] tracking-[.15em]">
            <SubNavBredCrumbs navItems={exhibition?.HISTORY ?? []} locale={locale} page={'exhibition'} subItemClass='max-[480px]:max-w-[250px] truncate' />
            <div className="bg-articleBgBlue">
                <Container className="mt-5 sm:mt-10 pt-5 sm:pt-10 pb-48 sm:pb-52 md:pb-40 min-[840px]:pb-44 min-[950px]:pb-48 min-[1200px]:pb-52 xl:pb-60">
                    <Container className={cn(
                        'flex flex-col gap-4 text-center',
                        'px-[5px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]'
                    )}>
                        <div className={cn(
                            "font-roboto-serif font-bold tracking-[.15em]",
                            "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]",
                            "leading-[25px] sm:leading-[29px] md:leading-[33px] lg:leading-[37px]"
                        )}>
                            {exhibition?.COVER_QUOTE?.TEXT[locale.toUpperCase() as keyof Translations]}
                        </div>
                        <div className="flex flex-col gap-2 font-helvetica text-[16px] leading-[19.5px]">
                            <div className="font-medium">{exhibition?.COVER_QUOTE.YEAR}</div>
                            <div className="font-bold">{exhibition?.COVER_QUOTE.AUTHOR[locale.toUpperCase() as keyof Translations]}</div>
                        </div>
                    </Container>
                    <Container className="absolute md:px-10 pt-10">
                        <Image src={exhibition?.COVER_QUOTE.IMAGE.SRC ?? ''} alt={exhibition?.COVER_QUOTE.IMAGE.ALT ?? ''} className="w-full min-h-[150px] object-cover" />
                        {exhibition?.EXTERNAL_LINK &&
                            <Link className={cn(
                                'absolute top-[0] left-[calc(100%-80px)]',
                                'md:top-[calc(50%-10px)] md:left-[calc(100%-110px)]',
                                'lg:top-[calc(50%-35px)] lg:left-[calc(100%-146px)]'
                            )}
                            href={exhibition?.EXTERNAL_LINK.URL ?? '#'}
                            target="_blank"
                            >
                                <div className={cn(
                                    'flex items-center justify-center text-black text-center font-helvetica',
                                    'text-[8px] md:text-[10px] lg:text-[12px] leading-[10.3px] md:leading-[12.3px] lg:leading-[14.3px]',
                                    'bg-externalLink rounded-full w-[80px] md:w-[100px] lg:w-[136px] h-[80px] md:h-[100px] lg:h-[136px] px-[11px]',
                                )}>
                                    {exhibition?.EXTERNAL_LINK.LABEL[locale.toUpperCase() as keyof Translations]}
                                </div>
                            </Link>
                        }
                    </Container>
                </Container>
            </div>
            <Container className={cn(
                'flex flex-col gap-5',
                'px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px]',
                'text-black max-sm:text-center font-helvetica tracking-[.05em]',
                'pb-10 pt-10 sm:pt-11 md:pt-24 min-[840px]:pt-32 lg:pt-36 min-[1100px]:pt-40 xl:pt-[200px]',
            )}>
                <div className="text-primaryBlue text-[16px] leading-[19.5px] font-bold uppercase">
                    {exhibition?.ARTICLE.TITLE[locale.toUpperCase() as keyof Translations]}
                </div>
                <div className={cn(
                    'text-[16px] leading-[19px]',
                    'flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-[60px] lg:gap-[90px]'
                )}>
                    <div className="flex flex-col gap-5 flex-1">
                        <p>{exhibition?.ARTICLE.PARAGRAPHS[0][locale.toUpperCase() as keyof Translations]}</p>
                        <p>{exhibition?.ARTICLE.PARAGRAPHS[1][locale.toUpperCase() as keyof Translations]}</p>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                        <p>{exhibition?.ARTICLE.PARAGRAPHS[2][locale.toUpperCase() as keyof Translations]}</p>
                        <p>{exhibition?.ARTICLE.PARAGRAPHS[3][locale.toUpperCase() as keyof Translations]}</p>
                    </div>
                </div>
            </Container>
            <Container className="flex flex-col md:px-10">
                <div className="flex flex-col xl:flex-row">
                    <div className={cn(
                        'flex flex-col gap-10 bg-articleBgBlue',
                        'font-helvetica italic max-xl:text-center',
                        'w-full xl:w-[59.41%] p-7 sm:p-10 md:p-[70px] lg:p-[80px] xl:p-[95px]',
                        'text-[20px] sm:text-[24px] md:text-[28px] leading-[25.5px] sm:leading-[29.5px] md:leading-[33.5px] tracking-[.05em]'
                    )}>
                        <p>{exhibition?.ARTICLE.QUOTES[0][locale.toUpperCase() as keyof Translations]}</p>
                        <p>{exhibition?.ARTICLE.QUOTES[1][locale.toUpperCase() as keyof Translations]}</p>
                    </div>
                    <div className="w-full xl:w-[40.58%]">
                        <Image className="h-full object-cover" src={exhibition?.ARTICLE.IMAGES[0].SRC ?? ''} alt={exhibition?.ARTICLE.IMAGES[0].ALT ?? ''} />
                    </div>
                </div>
                <Image className="w-full" src={exhibition?.ARTICLE.IMAGES[1].SRC ?? ''} alt={exhibition?.ARTICLE.IMAGES[1].ALT ?? ''} />
            </Container>
            <Container className={cn(
                'text-black max-sm:text-center font-helvetica tracking-[.05em]',
                'flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-[60px] lg:gap-[90px]',
                'py-10 px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px] text-[16px] leading-[19px]',
            )}>
                <div className="flex flex-col gap-5 flex-1">
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[4][locale.toUpperCase() as keyof Translations]}</p>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[5][locale.toUpperCase() as keyof Translations]}</p>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[6][locale.toUpperCase() as keyof Translations]}</p>
                </div>
                <div className="flex flex-col max-sm:gap-5 sm:justify-between flex-1">
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[7][locale.toUpperCase() as keyof Translations]}</p>
                    <p className={cn(
                        "italic text-primaryBlue tracking-[.05em]",
                        "text-[18px] sm:text-[22px] md:text-[26px] leading-[23.15px] sm:leading-[27.15px] md:leading-[31.15px]"
                    )}>
                        {exhibition?.ARTICLE.QUOTES[2][locale.toUpperCase() as keyof Translations]}
                    </p>
                </div>
            </Container>
            <Container className="flex flex-col md:flex-row max-[1440px]:max-w-[100vw]">
                <Image className="w-full md:w-[35.48%] max-h-[448px] object-cover" src={exhibition?.ARTICLE.IMAGES[2].SRC ?? ''} alt={exhibition?.ARTICLE.IMAGES[2].ALT ?? ''} />
                <Image className="w-full md:w-[64.51%] max-h-[448px] object-cover" src={exhibition?.ARTICLE.IMAGES[3].SRC ?? ''} alt={exhibition?.ARTICLE.IMAGES[3].ALT ?? ''} />
            </Container>
            <Container className={cn(
                'text-black max-sm:text-center font-helvetica tracking-[.05em]',
                'flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-[60px] lg:gap-[90px]',
                'py-10 px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px] text-[16px] leading-[19px]'
            )}>
                <div className="flex flex-col gap-5 flex-1">
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[8][locale.toUpperCase() as keyof Translations]}</p>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[9][locale.toUpperCase() as keyof Translations]}</p>
                </div>
                <div className="flex flex-1">
                    <p className={cn(
                        "italic text-primaryBlue tracking-[.05em]",
                        "text-[18px] sm:text-[22px] md:text-[26px] leading-[23.15px] sm:leading-[27.15px] md:leading-[31.15px]"
                    )}>
                        {exhibition?.ARTICLE.QUOTES[3][locale.toUpperCase() as keyof Translations]}
                    </p>
                </div>
            </Container>
            <div className="bg-articleBgBlue">
                <Container className={cn(
                    'flex flex-col gap-5',
                    'py-10 px-5 sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[135px]',
                    'font-helvetica tracking-[.05em] text-[16px] leading-[19px] max-sm:text-center'
                )}>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[10][locale.toUpperCase() as keyof Translations]}</p>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[11][locale.toUpperCase() as keyof Translations]}</p>
                    <p>{exhibition?.ARTICLE.PARAGRAPHS[12][locale.toUpperCase() as keyof Translations]}</p>
                </Container>
            </div>
        </div>
    );
}
