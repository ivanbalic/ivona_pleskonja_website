'use client';
import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { PAGE_CONTENT } from "@/app/[locale]/(marketing)/works/pageContent";

const getTitle = ( locale: string) => {
    return PAGE_CONTENT?.TITLE[locale.toUpperCase() as keyof ITranslations];
};

export default function MyWorksPage({ params: { locale } }: { params: { locale: string } }) {
    return (
        <div className='pt-[75px] md:pt-[100px] lg:pt-[125px] bg-overlayBlue h-screen'>
            <Container className="px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px] max-[1440px]:px-0">
                <div className="my-10 font-bold text-[30px] leading-[33px] md:text-[33px] md:leading-[36px] lg:text-[36px] lg:leading-[39px] tracking-[.15em]">
                    <span>{getTitle(locale)}</span>
                </div>
                <div className="flex flex-col gap-2 mb-20 text-[20px] leading-[27px] md:text-[22px] md:leading-[29px] lg:text-[24px] lg:leading-[31px] font-helvetica tracking-[.15em]">
                    {PAGE_CONTENT.CONTENT.map((item) => (
                        <Link
                            key={item.ID}
                            href={`/${locale}/${item.LINK ?? `works/${item.ID}`}`}
                            className={cn(
                                "hover:font-bold",
                                item.DISABLED ? "pointer-events-none opacity-60" : "pointer-events-auto opacity-100",
                                "relative cursor-pointer w-fit bg-origin-border bg-contain bg-no-repeat bg-clip-border bg-top-left uppercase",
                            )}
                        >
                            {item.TITLE[locale.toUpperCase() as keyof ITranslations]}
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
