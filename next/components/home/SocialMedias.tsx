'use client';
import React from "react";
import Link from "next/link";

import { MetaIcon } from "@/components/icons/MetaIcon";
import { useSlideConfig } from "@/components/home/useSlideConfig";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function SocialMedias() {
    const activeSlideConfig = useSlideConfig();

    const color = activeSlideConfig.COLOR;

    return (
        <div className="absolute z-10 bottom-0 right-0 flex flex-col gap-2 md:gap-3 lg:gap-5 items-center px-2 md:px-6 lg:px-10 pb-2 md:pb-6 lg:pb-10">
            <Link href="https://www.instagram.com/ivonapleskonja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" >
                <InstagramIcon color={color} className="transition duration-200 w-6 lg:w-10 max-w-[40px]" />
            </Link>
            <Link href="https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr" target="_blank" >
                <MetaIcon color={color} className="transition duration-200 w-6 lg:w-10 max-w-[40px]" />
            </Link>
        </div>
    );
}
