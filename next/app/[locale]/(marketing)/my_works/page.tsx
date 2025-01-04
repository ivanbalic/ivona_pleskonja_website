'use client';
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Title } from "@/types/types";
import hoverBorder from '@/public/images/my-work-hover-border.svg';
import {PAGE_CONTENT} from "@/app/[locale]/(marketing)/my_works/pageContent";

const getTitle = ( locale: string) => {
    return PAGE_CONTENT?.TITLE[locale.toUpperCase() as keyof Title];
};

const getContent = (locale: string)=> {
    return PAGE_CONTENT.CONTENT[locale.toUpperCase() as keyof Title];
};

export default function MyWorksPage({ params: { locale } }: { params: { locale: string } }) {
    const [hovered, setHovered] = useState<string | null>(null);
    return (
        <div className='pt-[75px] md:pt-[100px] lg:pt-[125px] px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px] bg-overlayBlue h-screen'>
            <div className="my-10 font-bold text-[30px] leading-[33px] md:text-[33px] md:leading-[36px] lg:text-[36px] lg:leading-[39px] tracking-[.15em]">
                <span>{getTitle(locale)}</span>
            </div>
            <div className="flex flex-col gap-2 mb-20 text-[20px] leading-[27px] md:text-[22px] md:leading-[29px] lg:text-[24px] lg:leading-[31px] font-helvetica tracking-[.15em]">
                {getContent(locale).map((item) => (
                    <Link
                        key={item.ID}
                        href={`/${locale}/my_works/${item.ID}`}
                        onMouseLeave={() => setHovered(null)}
                        onMouseEnter={() => setHovered(item.ID)}
                        className={cn(
                            item.DISABLED ? "pointer-events-none opacity-60" : "pointer-events-auto opacity-100",
                            "relative cursor-pointer w-fit bg-origin-border bg-contain bg-no-repeat bg-clip-border bg-top-left",
                        )}
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
