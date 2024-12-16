import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Translations } from "@/app/[locale]/(marketing)/my_works/[slug]/page";

export interface SubNavItem {
    LINK: string;
    ID: string | number;
    TITLE: Translations;
}

export function SubNavBredCrumbs( { navItems, locale, page, subItemClass = '' }: { navItems: SubNavItem[], locale: string, page: string, subItemClass?: string }) {

    return (
        <div
            className='w-full flex justify-center items-center gap-2 sm:gap-5 mt-5 font-text font-light text-xs sm:text-[16px] sm:leading-[19.4px] tracking-[.15em]'>
            {navItems.map(
                (content, index) => (
                    <div key={content.ID} className={cn(index ? 'border-l border-black' : '', 'pl-2 sm:pl-5', subItemClass)}>
                        <Link
                            href={`/${locale}/${content.LINK}`}
                            className={cn(
                                'hover:underline cursor-pointer',
                                content.ID === page ? 'font-bold' : '',
                            )}
                        >
                            {/* @ts-ignore */}
                            {content.TITLE[locale.toUpperCase()]}
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
