'use client';
import Link from "next/link";
import {useRef, useEffect } from "react";

import { cn } from "@/lib/utils";
import { BackIcon } from "../icons/BackIcon";
import { ISubNavItem, ITranslations } from "@/types/types";

export function SubNavBredCrumbs( { navItems, locale, page }: { navItems: ISubNavItem[], locale: string, page: string, subItemClass?: string }) {
    const activeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!activeRef.current) return;

        activeRef.current.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "nearest" });
    },[activeRef]);

    return (
        <div
            className={cn(
                'flex mt-5 justify-center',
                'font-roboto-serif md:font-helvetica font-light',
                'text-center text-black text-[10px] md:text-[16px] leading-[20px] md:leading-[16px] tracking-[.15em]'
            )}>
            <Link href={`/${locale}/about_me`} className="flex md:hidden items-center cursor-pointer w-10 h-[30px] bg-inactiveTab p-2.5 rounded-[30px]">
                <BackIcon color="#000000" width="21px" height="16px" />
            </Link>
            <div className='flex max-md:bg-inactiveTab max-md:uppercase min-h-[30px] rounded-[30px] overflow-scroll'>
                {navItems.map(
                    (content, index) => (
                        <div
                            ref={content.ID === page ? activeRef : null}
                            key={content.ID}
                             className={cn(
                                 index ? 'md:border-l md:border-black pl-0' : '',
                                 content.ID === page ? 'font-bold max-md:text-white max-md:bg-primaryBlue' : '',
                                 'px-[10px] py-[5px] max-md:rounded-[30px] hover:underline cursor-pointer text-nowrap',
                        )}>
                            <Link
                                href={`/${locale}/${content.LINK}`}
                                className={cn(

                                )}
                            >
                                {content.TITLE[locale.toUpperCase() as keyof ITranslations]}
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
