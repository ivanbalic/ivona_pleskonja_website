'use client';
import React, { useCallback, useState } from "react";

import Link from "next/link";
import Image from 'next/image';

import { cn } from "@/lib/utils";
import { Translations } from "@/types/types";
import { Container } from "@/components/container";
import { GalleryRowItem, MyWorks } from "@/components/my-works/MyWorks";
import { SUBPAGE_CONTENT } from "@/app/[locale]/(marketing)/my_works/pageContent";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";

function getPageContentById(id: string): MyWorks | undefined {
    return Object.values(SUBPAGE_CONTENT).find((PAGE) => PAGE.ID === id);
}

export default function WorkDetailsPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const [selected, setSelected] = useState<GalleryRowItem | null>(null);

    const page = getPageContentById(slug);

    const onPrev = useCallback(() => {
        const prev = page?.GALLERY.flat()[(selected?.ID ?? 0) - 2];

        if (!prev) return;

        setSelected(prev);
    }, [page?.GALLERY, selected?.ID]);

    const onNext = useCallback(() => {
        const next = page?.GALLERY.flat()[(selected?.ID ?? 0)];

        if (!next) return;

        setSelected(next);
    }, [page?.GALLERY, selected?.ID]);

    if (!page) return null;

    return (
        <Container className={cn('pt-[75px] md:pt-[100px] lg:pt-[125px] text-black min-h-screen', selected && 'bg-backgroundSecondary max-w-full')}>
            <SubNavBredCrumbs navItems={page.HISTORY ?? []} locale={locale} page={slug} subItemClass='max-[480px]:max-w-[250px] truncate' />
            { selected
                ?
                <Container className="flex flex-col lg:flex-row gap-5 lg:gap-20 px-[20px] sm:px-[30px] md:px-[65px] lg:px-[100px] xl:px-[135px] pt-10 pb-10 lg:pb-[135px] h-full">
                    <div className="flex justify-center items-center lg:h-[715px] max-h-full w-full lg:w-[739px] max-w-full bg-white">
                        <Image src={selected.SRC.FULL} alt={selected.ALT} className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]">
                        <div className="text-black font-bold text-[16px] leading-[21px] mb-5">
                            <span className="cursor-pointer hover:underline" onClick={onPrev}>PREV</span> / <span className="cursor-pointer hover:underline" onClick={onNext}>NEXT</span>
                        </div>
                        <div className="text-[32px] leading-[42.2px] font-bold">{selected.DETAILS.NAME[locale.toUpperCase() as keyof Translations]}</div>
                        <div className="flex flex-col text-[22px] leading-[29px] font-bold mb-5">
                            <div>{selected.DETAILS.CREATED_AT} | {selected.DETAILS.DIMENSIONS}</div>
                            <div>{selected.DETAILS.TECHNIQUE[locale.toUpperCase() as keyof Translations]}</div>
                        </div>
                        <div className="text-black font-text text-[16px] leading-[19px] mb-10 lg:mb-20">{selected.DETAILS.DESCRIPTION[locale.toUpperCase() as keyof Translations]}</div>
                        <Link href={'/'} className="text-[16px] leading-[21px] font-bold">{locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION'}</Link>
                    </div>
                </Container>
                : <MyWorks data={page} locale={locale} onSelect={setSelected} />
            }
        </Container>
    );
}
