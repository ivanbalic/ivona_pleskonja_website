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
            <Container className="px-[16px] md:px-[135px]">
                <div className="my-10 font-bold text-[36px] leading-[39px] tracking-[.15em] font-roboto-serif">
                    <span>{getTitle(locale)}</span>
                </div>
                <div className="flex flex-col gap-6 text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] font-mono tracking-[.15em]">
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
