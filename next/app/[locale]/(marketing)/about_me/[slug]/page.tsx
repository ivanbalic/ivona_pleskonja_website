import React from "react";

import { PAGE_CONTENT } from "./pageContent";
import { Container } from "@/components/container";
import {Translations} from "@/app/[locale]/(marketing)/my_works/[slug]/page";
import {SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";

const getTitle = (page: string, locale: string) => {
    const pageContent = PAGE_CONTENT[page.toUpperCase() as keyof typeof PAGE_CONTENT];
    const pageTitle = pageContent?.TITLE[locale.toUpperCase() as keyof Translations];
    return pageTitle?.toUpperCase();
};

const getContent = (page: string, locale: string)=> {
    const pageContent = PAGE_CONTENT[page.toUpperCase() as keyof typeof PAGE_CONTENT];
    return pageContent?.CONTENT[locale.toUpperCase() as keyof Translations];
};

export default function AboutMeSubPage({ params: { locale, slug} }: { params: { locale: string, slug: string } }) {
    return (
        <Container>
            <div className='px-[135px] pt-[125px] text-black'>
                <SubNavBredCrumbs navItems={Object.values(PAGE_CONTENT)} locale={locale} page={slug} />
                <div className="my-10 font-bold text-[36px] leading-[39px] tracking-[.15em]">
                    <span className="text-primaryBlue">{getTitle(slug, locale)}</span>
                </div>
                <div className="flex flex-col gap-2 mb-20 text-[24px] leading-[39px] font-text tracking-[.15em]">
                    {getContent(slug, locale).map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </Container>
    );
}
