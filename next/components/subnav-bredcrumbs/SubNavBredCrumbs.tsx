import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ISubNavItem, ITranslations } from "@/types/types";

export function SubNavBredCrumbs( { navItems, locale, page, subItemClass = '' }: { navItems: ISubNavItem[], locale: string, page: string, subItemClass?: string }) {

    return (
        <div
            className={cn(
                'mt-5',
                'flex flex-wrap justify-center items-center gap-2',
                'font-helvetica font-light text-black text-[16px] leading-[16px] tracking-[.15em]',
            )}
        >
            {navItems.map(
                (content, index) => (
                    <div key={content.ID} className={cn(
                        subItemClass,
                        'flex items-center',
                        index < navItems.length - 1 ? 'after:w-[1px] after:h-4 after:bg-black after:inline-block after:skew-x-[-20deg] after:ml-2' : '',
                    )}>
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
