import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ISubNavItem, ITranslations } from "@/types/types";

export function SubNavBredCrumbs( { navItems, locale, page, subItemClass = '' }: { navItems: ISubNavItem[], locale: string, page: string, subItemClass?: string }) {

    return (
        <div
            className={cn(
                'flex justify-center items-center gap-2 md:gap-3 lg:gap-5 mt-5 px-2 md:px-3 lg:px-5',
                'font-helvetica font-light text-black text-xs sm:text-sm lg:text-[16px] lg:leading-[19.4px] tracking-[.15em]'
            )}>
            {navItems.map(
                (content, index) => (
                    <div key={content.ID} className={cn(index ? 'border-l border-black pl-2 md:pl-3 lg:pl-5' : '', subItemClass)}>
                        <Link
                            href={`/${locale}/${content.LINK}`}
                            className={cn(
                                'hover:underline cursor-pointer',
                                content.ID === page ? 'font-bold' : '',
                            )}
                        >
                            {content.TITLE[locale.toUpperCase() as keyof ITranslations]}
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
