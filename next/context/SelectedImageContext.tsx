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
    const [selectedGalleryId, setSelectedGalleryId] = useState<number | null>(null);

    const onImageSelect = useCallback((galleryId: number | null, imageId: number) => {
        router.push(`?gallery=${galleryId}&image=${imageId}`);

        setSelectedImageId(imageId);
        setSelectedGalleryId(galleryId);
    }, [router]);

    useEffect(() => {
        const selectedImage = searchParams.get('image');
        const selectedGallery = searchParams.get('gallery');

        if(!selectedGallery || !selectedImage) return;

        setSelectedImageId(parseInt(selectedImage));
        setSelectedGalleryId(parseInt(selectedGallery));
    }, [searchParams]);

    const value = useMemo(
        () => ({ selectedImageId, selectedGalleryId, onImageSelect }),
        [onImageSelect, selectedGalleryId, selectedImageId]
    );

    return <SelectedImageContext.Provider value={value}>{children}</SelectedImageContext.Provider>
}
