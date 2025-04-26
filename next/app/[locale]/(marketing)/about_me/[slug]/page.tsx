import React from "react";

import Link from "next/link";

import {cn} from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { BackIcon } from "@/components/icons/BackIcon";
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
            'px-4 lg:px-[135px]',
            'pt-[100px] md:pt-[125px]',
            )}
        >
            <SubNavBredCrumbs navItems={Object.values(MENU_ITEMS_CONFIG)} locale={locale} page={slug} />
            <div className="flex gap-8 items-center my-5 md:my-10 font-bold text-[36px] leading-[39px] tracking-[.15em]">
                <Link href={`/${locale}/about_me`} className="hidden md:flex items-center cursor-pointer w-10">
                    <BackIcon />
                </Link>
                <span className="text-primaryBlue font-roboto-serif">{getTitle(slug, locale)}</span>
            </div>
            <div className="flex flex-col mb-20 text-base md:text-[24px] md:leading-[40px] font-helvetica tracking-[.05em]">
                {getContent(slug, locale).map((item, index) => (
                    <div key={index}>
                        <span className="text-primaryBlue mr-1">{item.YEAR}</span>
                        {item.AWARD}
                    </div>
                ))}
            </div>
        </Container>
    );
}
