import React from "react";

import Link from "next/link";
import Image from "next/image";

import awards from '@/public/images/awards.svg';
import { Container } from "@/components/container";
import arrowDown from '@/public/images/arrow-down.svg';
import collections from '@/public/images/collections.svg';
import aboutMeCover from '@/public/images/about-me-cover.png';
import groupExhibitions from '@/public/images/group-exhibitions.svg';
import { Translations } from "@/app/[locale]/(marketing)/my_works/[slug]/page";
import independentExhibitions from '@/public/images/independent-exhibitions.svg';

const PAGE_CONTENT = Object.freeze({
    TITLE: {
        SER: 'UMETNIČKA BIOGRAFIJA',
        ENG: 'UMETNIČKA BIOGRAFIJA',
    },
});

function getTitle(locale: string){
    return PAGE_CONTENT.TITLE[locale.toUpperCase() as keyof Translations];
}

export default function AboutMePage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <Container>
            <Image src={aboutMeCover} alt="about_me_cover" className="w-full" />
            <div className='px-5 sm:px-6 md:px-7 lg:px-8 xl:px-[42.5px]'>
                <div className="flex justify-between py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-[47.5px] tracking-[.15em]">
                    <span className="text-primaryBlue">{getTitle(locale)}</span>
                    <Image className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7" src={arrowDown} alt="arrow_down"/>
                </div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[30px] tracking-[.15em] text-black font-text">
                    <span className="block"><span className="font-bold">Ivona Pleskonja</span> Rođena 16.10.1974. godine u Beogradu, Jugoslavija.</span>
                    <span className="font-bold text-primaryBlue">Fakultet likovnih umetnosti</span> u Beogradu upisala 1993. kao redovan student u klasi profesorke Anđelke Bojović, <span className="font-bold text-primaryBlue">Odsek slikarstvo</span>.

                    <span className='block my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10'>
                        <span className="font-bold">Diplomirala 1998. Magistrirala 2001.</span> na Fakultetu likovnih umetnosti u Beogradu, Odsek slikarstvo, kod iste profesorke.
                    </span>

                    <span className="block"><span className="font-bold">Doktorirala 2017.</span> na Fakultetu likovnih umetnosti u Beogradu, odsek slikarstvo, kod profesora Dimitrija Pecića</span>
                    <span className="blcok">Bila <span className="font-bold">stipendista fonda</span> Madlena Janković kao <span className="font-bold">mladi talenat.</span></span>
                    <span className="font-bold text-primaryBlue block">Član ULUS-a sa statusom slobodnog umetnika od 1998. godine.</span>
                </div>
            </div>
            <div className="flex flex-row border border-borderSecondary text-overlayBlue h-[100px] sm:h-[125px] md:h-[150px] my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20">
                <Link href={`/${locale}/about_me/awards`} replace className='border-r flex-1 flex justify-center items-center'>
                    <Image className="w-[90%]" src={awards} alt="awards" />
                </Link>
                <Link href={`/${locale}/about_me/independent_exhibitions`} className='border-r flex-1 flex justify-center items-center'>
                    <Image className="w-[90%]" src={independentExhibitions} alt="indapendant exhibitions" />
                </Link>
                <Link href={`/${locale}/about_me/group_exhibitions`} className='border-r flex-1 flex justify-center items-center'>
                    <Image className="w-[90%]" src={groupExhibitions} alt="group exibitions" />
                </Link>
                <Link href={`/${locale}/about_me/collections`} className="flex-1 flex justify-center items-center">
                    <Image className="w-[90%]" src={collections} alt="collections" />
                </Link>
            </div>
        </Container>
    );
}
