'use client';
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ISubNavItem, ITranslations } from "@/types/types";

export function SubNavBredCrumbs( { navItems, locale, page, compact = false }: { navItems: ISubNavItem[], locale: string, page: string, compact?: boolean }) {
    const items = !compact
        ? navItems
        : navItems.slice(navItems.length - 1, navItems.length)

    return (
        <div
            className={cn(
                'flex mt-5 flex-wrap',
                compact ? 'justify-start font-normal' : 'justify-center font-light',
                'font-helvetica text-black text-[16px] leading-[16px] tracking-[.15em]'
            )}>
            {compact &&
                <Link href={`/${locale}/${items?.[0]?.LINK}`}>
                    <ArrowLeft viewBox="-8 -3 24 24" color="#000000" width="24px" height="24px" />
                </Link>
            }
            {items.map(
                (content, index) => (
                    <div key={content.ID} className={
                        cn(
                            compact ? 'text-wrap' : 'text-nowrap',
                            content.ID === page && !compact ? 'font-bold' : '',
                            'px-[5px] max-md:rounded-[30px] hover:underline cursor-pointer',
                        )
                    }>
                        <Link
                            className='flex flex-col'
                            href={`/${locale}/${content.LINK}`}
                        >
                            {!compact
                                ? content.TITLE[locale.toUpperCase() as keyof ITranslations]
                                : content.TITLE[locale.toUpperCase() as keyof ITranslations]
                                    .split('/')
                                    .map((t, i, array) =>
                                        <span key={t}>{`${t}`}</span>)
                            }
                            {index < items.length - 1 ? ' / ' : ''}
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
