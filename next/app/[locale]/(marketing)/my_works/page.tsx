'use client';
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {cn} from "@/lib/utils";
import hoverBorder from '@/public/images/my-work-hover-border.svg';

type Title = {
    SER: string,
    ENG: string,
};

const PAGE_CONTENT = Object.freeze({
    TITLE: {
        SER: "MOJI RADOVI",
        ENG: "MY WORKS"
    },
    CONTENT: {
        SER: [
            { ID: 'creating_of_light', TITLE: '2023 Stvaranje svetla / Nežni smo rodjeni'},
            // { ID: 'mural_life', TITLE: '2020 mural,Life'},
            // { ID: '11_strengths', TITLE: '2019 11 Snaga' },
        ],
        ENG: [
            { ID: 'creating_of_light', TITLE: '2023 Creating Of Light / We Are Born Tender'},
            // { ID: 'mural_life', TITLE: '2020 mural,Life'},
            // { ID: '11_strengths', TITLE: '2019 11 Strengths'},
        ]
    },
});

const getTitle = ( locale: string) => {
    return PAGE_CONTENT?.TITLE[locale.toUpperCase() as keyof Title];
};

const getContent = (locale: string)=> {
    return PAGE_CONTENT.CONTENT[locale.toUpperCase() as keyof Title];
};

export default function MyWorksPage({ params: { locale } }: { params: { locale: string } }) {
    const [hovered, setHovered] = useState<string | null>(null);
    return (
        <div className='pt-[75px] md:pt-[100px] lg:pt-[125px] px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px]  bg-overlayBlue h-screen'>
            <div className="my-10 font-bold text-[30px] leading-[33px] md:text-[33px] md:leading-[36px] lg:text-[36px] lg:leading-[39px] tracking-[.15em]">
                <span>{getTitle(locale)}</span>
            </div>
            <div className="flex flex-col gap-2 mb-20 text-[20px] leading-[27px] md:text-[22px] md:leading-[29px] lg:text-[24px] lg:leading-[31px] font-text tracking-[.15em]">
                {getContent(locale).map((item) => (
                    <Link
                        key={item.ID}
                        href={`/${locale}/my_works/${item.ID}`}
                        onMouseLeave={() => setHovered(null)}
                        onMouseEnter={() => setHovered(item.ID)}
                        className="relative cursor-pointer w-fit bg-origin-border bg-contain bg-no-repeat bg-clip-border bg-top-left"
                    >
                        <Image
                            src={hoverBorder}
                            alt='scatched-elipse'
                            className={cn("absolute right-[-10%] w-[120%] max-w-[120%]", hovered === item.ID ?  'block' : 'hidden')}
                        />
                        {item.TITLE}
                    </Link>
                ))}
            </div>
        </div>
    );
}
