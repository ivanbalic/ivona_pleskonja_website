import React from "react";

import Link from "next/link";
import Image from 'next/image';

import {cn} from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import arrowLeft from '@/public/images/about-me/arrow-left.svg';
import { SubNavBredCrumbs  } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { MENU_ITEMS_CONFIG } from "@/app/[locale]/(marketing)/about_me/pageContent";

const getTitle = (page: string, locale: string) => {
    const pageContent = MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
    const pageTitle = pageContent?.TITLE[locale.toUpperCase() as keyof ITranslations];
    return pageTitle?.toUpperCase();
};

const getContent = (page: string, locale: string)=> {
    const pageContent = MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
    return pageContent?.CONTENT[locale.toUpperCase() as keyof ITranslations];
};

export default function AboutMeSubPage({ params: { locale, slug} }: { params: { locale: string, slug: string } }) {
    return (
        <Container className={cn(
            'text-black',
            'pt-[75px] md:pt-[100px] lg:pt-[125px]',
            'px-5 sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]',
            )}
        >
            <SubNavBredCrumbs navItems={Object.values(MENU_ITEMS_CONFIG)} locale={locale} page={slug} subItemClass="max-[521px]:flex-1 max-[521px]:truncate" />
            <div className="flex gap-8 items-center my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10 font-bold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[36px] leading-[25px] sm:leading-[29px] md:leading-[33px] lg:leading-[37px] xl:leading-[39px] tracking-[.15em]">
                <Link href={`/${locale}/about_me`} className="flex items-center cursor-pointer w-6 md:w-8 lg:w-10 max-w-[40px]">
                    <Image src={arrowLeft} alt="arrowLeft" className="border-primaryBlue" />
                </Link>
                <span className="text-primaryBlue font-roboto-serif">{getTitle(slug, locale)}</span>
            </div>
            <div className="flex flex-col gap-0 sm:gap-0.5 md:gap-1 lg:gap-1.5 xl:gap-2 mb-20 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[31px] sm:leading-[33px] md:leading-[35px] lg:leading-[37px] xl:leading-[39px] font-helvetica tracking-[.15em]">
                {getContent(slug, locale).map((item, index) => (
                    <div className="flex gap-1" key={index}>
                        <span className="text-primaryBlue">{item.YEAR}</span>
                        <span>{item.AWARD}</span>
                    </div>
                ))}
            </div>
        </Container>
    );
}
