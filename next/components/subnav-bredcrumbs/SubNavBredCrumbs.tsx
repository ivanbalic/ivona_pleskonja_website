import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Translations } from "@/app/[locale]/(marketing)/my_works/[slug]/page";

export interface SubNavItem {
    LINK: string;
    ID: string | number;
    TITLE: Translations;
}

export function SubNavBredCrumbs( { navItems, locale, page }: { navItems: SubNavItem[], locale: string, page: string }) {

    return (
        <div
            className='flex justify-center gap-5 mt-5 font-text font-light text-[16px] leading-[19.4px] tracking-[.15em]'>
            {navItems.map(
                (content, index) => (
                    <Link href={`/${locale}/${content.LINK}`} key={content.ID} className={cn(
                        'hover:underline cursor-pointer', content.ID === page ? 'font-bold underline' : '',
                        index ? 'border-l-2 border-black pl-5' : '')}
                    >
                        {/* @ts-ignore */}
                        {content.TITLE[locale.toUpperCase()]}
                    </Link>
                )
            )}
        </div>
    );
}
