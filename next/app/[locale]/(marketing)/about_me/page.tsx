import React, { useCallback } from "react";

import Link from "next/link";
import Image from "next/image";

import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import arrowDown from '@/public/images/about-me/arrow-down.svg';
import aboutMeCover from '@/public/images/about-me/about-me-cover.png';
import { PAGE_CONTENT } from "@/app/[locale]/(marketing)/about_me/pageContent";
import { MENU_ITEMS_CONFIG } from "@/app/[locale]/(marketing)/about_me/pageContent";

export default function AboutMePage({ params: { locale } }: { params: { locale: string } }) {
    const getTextBySectionName = useCallback(function (sectionName: string){
        return PAGE_CONTENT[sectionName.toUpperCase() as keyof typeof PAGE_CONTENT][locale.toUpperCase() as keyof ITranslations];
    }, [locale]);

    return (
        <Container>
            <div className="w-full">
                <Image src={aboutMeCover} alt="about_me_cover" className="w-full object-cover" />
            </div>
            <div className='px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10'>
                <div className="flex justify-between py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-[47.5px] tracking-[.15em]">
                    <span className="text-primaryBlue">{getTextBySectionName('title')}</span>
                    <Image className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7" src={arrowDown} alt="arrow_down"/>
                </div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[30px] tracking-[.15em] text-black font-helvetica">
                    <span className={locale === 'ser' ? 'block' : 'inline'}><span className="font-bold">{getTextBySectionName('name')}</span>{getTextBySectionName('born')}</span>
                    <span>{getTextBySectionName('graduated')}</span><span className="font-bold text-primaryBlue">{getTextBySectionName('faculty')}</span>{getTextBySectionName('graduated_at')}<span className="font-bold text-primaryBlue">{getTextBySectionName('department')}</span>

                    <span className='block my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10'>
                        <span className="font-bold">{getTextBySectionName('ma_degree')}</span>{getTextBySectionName('ma_degree_details')}
                    </span>

                    <span className="block"><span className="font-bold">{getTextBySectionName('phd')}</span>{getTextBySectionName('phd_details')}</span>
                    <span className="blcok">{getTextBySectionName('scholarship_start')}<span className="font-bold">{getTextBySectionName('scholarship_holder')}</span>{getTextBySectionName('scholarship_and_associations_details')}<span className="font-bold">{getTextBySectionName('scholarship_end')}</span></span>
                    <span className="font-bold text-primaryBlue block">{getTextBySectionName('ulus_details')}</span>
                </div>
            </div>
            <div className="flex flex-row border border-borderSecondary text-overlayBlue h-[100px] sm:h-[125px] md:h-[150px] my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20">
                {Object.values(MENU_ITEMS_CONFIG).map((item) => (
                    <Link key={item.ID} href={`/${locale}/${item.LINK}`} replace className='border-r flex-1 flex justify-center items-center'>
                        <Image className="w-[90%] object-cover" src={item.BUTTON[locale.toUpperCase() as keyof ITranslations]} alt={item.ALT} />
                    </Link>
                ))}
            </div>
        </Container>
    );
}
