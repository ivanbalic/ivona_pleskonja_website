'use client';
import React, {useEffect, useRef, useState} from "react";

import Image from "next/image";

import signature from '@/public/images/signature.svg';

export function SignatureLogo() {
    const [height, setHeight] = useState(0);
    const signatureRef = useRef(null);

    useEffect(() => {
        if (signatureRef.current) {
            const rect = signatureRef.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    return (
        <div className="absolute inset-y-1/2 w-screen">
            <Image ref={signatureRef} src={signature} alt='signature-logo' className={`relative mx-auto`} style={{ bottom: `${height/2}px` }} />
        </div>
    );
}
