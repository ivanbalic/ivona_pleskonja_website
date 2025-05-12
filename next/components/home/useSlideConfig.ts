'use client';
import {useIsMobile} from "@/hooks/useIsMobile";
import { useActiveSlide } from "@/context/ActiveSlideContext";
import { SLIDES_CONFIG } from "@/components/home/homeSlidsConfig";

export function useSlideConfig() {
    const isMobile = useIsMobile();
    const { activeSlide } = useActiveSlide();



    const CONFIG = SLIDES_CONFIG[activeSlide as keyof typeof SLIDES_CONFIG];

    return isMobile ? CONFIG.MOBILE : CONFIG.DESKTOP;
}
