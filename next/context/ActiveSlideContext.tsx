'use client';
import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";

import {IActiveSlide} from "@/types/types";
import {usePathname} from "next/navigation";
import {getPage} from "@/lib/utils";

const ActiveSlideContext = createContext<IActiveSlide | undefined>(undefined);

export function useActiveSlide() {
    const context = useContext(ActiveSlideContext);
    if (!context) {
        throw new Error('useActiveSlide must be used within a ActiveSlideProvider');
    }

    return context;
}

export function ActiveSlideProvider({ children }: { children: ReactNode }) {
    const pathName = usePathname();

    const [activeSlide, setActiveSlide] = useState<number>(0);

    const onSlideChange = useCallback(
        (id: number) => setActiveSlide(id <= 2 ? id : 0),
        [setActiveSlide]
    );

    useEffect(() => {
        const page= getPage(pathName);

        if(page!== 'home') {
            setActiveSlide(0);
        }
    }, [pathName]);

    const value = useMemo(
        () => ({ activeSlide, onSlideChange}),
        [activeSlide, onSlideChange]
    );

    return <ActiveSlideContext.Provider value={value}>{children}</ActiveSlideContext.Provider>;
}
