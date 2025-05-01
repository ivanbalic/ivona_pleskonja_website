'use client';
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

import { useSlideConfig } from "@/components/home/useSlideConfig";


export function SignatureLogo() {
    const activeSlideConfig = useSlideConfig();

    const [height, setHeight] = useState(0);
    const signatureRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (signatureRef.current) {
            const rect = signatureRef.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    const imgSrc = activeSlideConfig.LOGO;

    return (
        <div className="absolute top-[77%] md:inset-y-1/2 w-screen">
            <Image ref={signatureRef} src={imgSrc} alt='signature-logo' className={`relative mx-auto`} style={{ bottom: `${height/2}px` }} />
        </div>
    );
}
