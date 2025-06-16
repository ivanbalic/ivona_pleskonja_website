'use client';
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ISubNavItem, ITranslations } from "@/types/types";

export function SubNavBredCrumbs({ navItems, locale, page, compact = false }: { navItems: ISubNavItem[], locale: string, page: string, compact?: boolean }) {
    const isMobile = useIsMobile();
    const items = !compact
        ? navItems
        : navItems.slice(navItems.length - 1, navItems.length);
    console.log('SubNavBredCrumbs: ', page);
    return (
        <div
            className={cn(
                'flex pt-5 flex-wrap',
                compact ? 'font-normal' : 'font-light',
                (page === 'exhibition' && isMobile) ? 'mx-4' : '',
                'font-helvetica text-black text-[16px] leading-[20px] tracking-[.15em]',
                compact || (page === 'exhibition' && isMobile) ? 'justify-start' : 'justify-center',
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
                            content.ID === page && !compact ? 'font-bold' : '',
                            'px-[5px] max-md:rounded-[30px] cursor-pointer',
                            compact || page === 'exhibition' ? 'text-wrap' : 'text-nowrap',
                            page === 'exhibition' ? 'max-md:text-white text-black' : 'text-black',
                            index === items.length - 1 && !compact && page !== 'exhibition' ? 'max-md:basis-full' : '',
                        )
                    }>
                        <Link
                            className={cn(
                                compact ? 'flex-col' : 'items-center',
                                'flex gap-2 justify-center ',
                            )}
                            href={`/${locale}/${content.LINK}`}
                        >
                            {!compact
                                ? <span className='hover:underline'>{content.TITLE[locale.toUpperCase() as keyof ITranslations]}</span>
                                : content.TITLE[locale.toUpperCase() as keyof ITranslations]
                                    .split('/')
                                    .map((t, i, array) =>
                                        <span key={t}>{`${t}`}</span>)
                            }
                            <span>{index < items.length - 1 ? ' / ' : ''}</span>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
}
