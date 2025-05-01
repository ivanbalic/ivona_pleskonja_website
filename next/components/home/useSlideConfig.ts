'use client';
import { useEffect, useState } from "react";

import { useActiveSlide } from "@/context/ActiveSlideContext";
import { SLIDES_CONFIG } from "@/components/home/homeSlidsConfig";

export function useSlideConfig() {
    const { activeSlide } = useActiveSlide();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const CONFIG = SLIDES_CONFIG[activeSlide as keyof typeof SLIDES_CONFIG];

    return isMobile ? CONFIG.MOBILE : CONFIG.DESKTOP;
}
