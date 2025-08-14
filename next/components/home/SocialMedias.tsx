'use client';
import React from "react";
import Link from "next/link";

import { MetaIcon } from "@/components/icons/MetaIcon";
import { useSlideConfig } from "@/components/home/useSlideConfig";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import {TikTokIcon} from "@/components/icons/TikTokIcon";

export function SocialMedias() {
    const activeSlideConfig = useSlideConfig();

    const color = activeSlideConfig.COLOR;

    return (
        <div className="absolute z-10 bottom-0 right-0 flex flex-col gap-2 md:gap-5 items-center px-4 md:px-6 lg:px-10 pb-4 md:pb-10">
            <Link href="https://www.instagram.com/ivonapleskonjafineart?igsh=eTQ5dzhnbnVzNGV1" target="_blank" >
                <InstagramIcon color={color} className="transition duration-200 w-6 lg:w-10 max-w-[40px]" />
            </Link>
            <Link href="https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr" target="_blank" >
                <MetaIcon color={color} className="transition duration-200 w-6 lg:w-10 max-w-[40px]" />
            </Link>
            <Link href="https://www.tiktok.com/@ivonapleskonja?_t=ZM-8ySKKdS4hRG&_r=1" target="_blank" >
                <TikTokIcon color={color} className="transition duration-200 w-6 lg:w-10 max-w-[40px]" />
            </Link>
        </div>
    );
}
