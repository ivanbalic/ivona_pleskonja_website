'use client';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { ISelectedImage } from "@/types/types";

const SelectedImageContext = createContext<ISelectedImage | undefined>(undefined);

export function useSelectedImage() {
    const context = useContext(SelectedImageContext);

    if (!context) {
        throw new Error('useSelectedImage must be used within a SelectedImageProvider');
    }

    return context;
}

export function SelectedImageProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

    const onImageSelect = useCallback((selectedId: number) => {
        router.push(`?gallery=${selectedId}`);
        setSelectedImageId(selectedId);
    }, [router]);

    useEffect(() => {
        const selectedId = searchParams.get('gallery');

        if(!selectedId) return;

        setSelectedImageId(parseInt(selectedId));
    }, [searchParams]);

    const value = useMemo(() => ({ selectedImageId, onImageSelect }), [onImageSelect, selectedImageId])

    return <SelectedImageContext.Provider value={value}>{children}</SelectedImageContext.Provider>
}
