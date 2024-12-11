import React from "react";

import Link from "next/link";
import Image from "next/image";

import awards from '@/public/images/awards.svg';
import {Container} from "@/components/container";
import arrowDown from '@/public/images/arrow-down.svg';
import collections from '@/public/images/collections.svg';
import aboutMeCover from '@/public/images/about-me-cover.png';
import groupExhibitions from '@/public/images/group-exhibitions.svg';
import independentExhibitions from '@/public/images/independent-exhibitions.svg';

export default async function AboutMePage({ params }: { params: { locale: string } }) {
    return (
        <Container>
            <Image src={aboutMeCover} alt="about_me_cover" className="w-full" />
            <div className='px-10'>
                <div className="flex justify-between py-10 font-bold text-[36px] leading-[47.5px] tracking-[.15em]">
                    <span className="text-primaryBlue">UMETNIČKA BIOGRAFIJA</span>
                    <Image src={arrowDown} alt="arrow_down"/>
                </div>
                <div className="text-[24px] leading-[30px] tracking-[.15em] text-black font-text">
                    <span className="block"><span className="font-bold">Ivona Pleskonja</span> Rođena 16.10.1974. godine u Beogradu, Jugoslavija.</span>
                    <span className="font-bold text-primaryBlue">Fakultet likovnih umetnosti</span> u Beogradu upisala 1993. kao redovan student u klasi profesorke Anđelke Bojović, <span className="font-bold text-primaryBlue">Odsek slikarstvo</span>.

                    <span className='block my-10'>
                        <span className="font-bold">Diplomirala 1998. Magistrirala 2001.</span> na Fakultetu likovnih umetnosti u Beogradu, Odsek slikarstvo, kod iste profesorke.
                    </span>

                    <span className="block"><span className="font-bold">Doktorirala 2017.</span> na Fakultetu likovnih umetnosti u Beogradu, odsek slikarstvo, kod profesora Dimitrija Pecića</span>
                    <span className="blcok">Bila <span className="font-bold">stipendista fonda</span> Madlena Janković kao <span className="font-bold">mladi talenat.</span></span>
                    <span className="font-bold text-primaryBlue block">Član ULUS-a sa statusom slobodnog umetnika od 1998. godine.</span>
                </div>
            </div>
            <div className="flex flex-row border-2 text-overlayBlue h-[150px] my-20">
                <Link href={`/${params.locale}/about_me/awards`} replace className='border-r-2 flex-1 flex justify-center items-center'>
                    <Image src={awards} alt="awards" />
                </Link>
                <Link href={`/${params.locale}/about_me/independent_exhibitions`} className='border-r-2 flex-1 flex justify-center items-center'>
                    <Image src={independentExhibitions} alt="indapendant exhibitions" />
                </Link>
                <Link href={`/${params.locale}/about_me/group_exhibitions`} className='border-r-2 flex-1 flex justify-center items-center'>
                    <Image src={groupExhibitions} alt="group exibitions" />
                </Link>
                <Link href={`/${params.locale}/about_me/collections`} className="flex-1 flex justify-center items-center">
                    <Image src={collections} alt="collections" />
                </Link>
            </div>
        </Container>
    );
}
