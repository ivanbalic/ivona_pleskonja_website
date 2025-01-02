import React from "react";

import {cn} from "@/lib/utils";
import { Translations } from "@/types/types";
import { Container } from "@/components/container";
import { SubNavBredCrumbs  } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { MENU_ITEMS_CONFIG } from "@/app/[locale]/(marketing)/about_me/pageContent";

const getTitle = (page: string, locale: string) => {
    const pageContent = MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
    const pageTitle = pageContent?.TITLE[locale.toUpperCase() as keyof Translations];
    return pageTitle?.toUpperCase();
};

const getContent = (page: string, locale: string)=> {
    const pageContent = MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
    return pageContent?.CONTENT[locale.toUpperCase() as keyof Translations];
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
            <div className="my-10 font-bold text-[36px] leading-[39px] tracking-[.15em]">
                <span className="text-primaryBlue">{getTitle(slug, locale)}</span>
            </div>
            <div className="flex flex-col gap-2 mb-20 text-[24px] leading-[39px] font-text tracking-[.15em]">
                {getContent(slug, locale).map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        </Container>
    );
}
