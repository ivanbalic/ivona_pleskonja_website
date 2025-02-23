'use client';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef } from "react";

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
    const selectedImageIdRef = useRef<number | null>(null);
    const selectedGalleryIdRef = useRef<number | null>(null);

    const onImageSelect = useCallback((galleryId: number | null, imageId: number | null) => {
        if (!imageId || !galleryId) return;

        router.push(`?gallery=${galleryId}&image=${imageId}`);

        selectedImageIdRef.current = imageId;
        selectedGalleryIdRef.current = galleryId;
    }, [router]);

    const getImageAndGalleryFromParams = () => {
        const selectedImage = searchParams.get('image');
        const selectedGallery = searchParams.get('gallery');

        if(!selectedGallery || !selectedImage) return;

        selectedImageIdRef.current = parseInt(selectedImage);
        selectedGalleryIdRef.current = parseInt(selectedGallery);
    };

    useEffect(() => {
        getImageAndGalleryFromParams();
    }, [searchParams]);

    useEffect(() => {
        getImageAndGalleryFromParams();
    }, []);

    const value = useMemo(
        () => ({ selectedImageIdRef, selectedGalleryIdRef, onImageSelect }),
        [onImageSelect, selectedGalleryIdRef.current, selectedImageIdRef.current]
    );

    return <SelectedImageContext.Provider value={value}>{children}</SelectedImageContext.Provider>
}
