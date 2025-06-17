import { useCallback, useEffect, useMemo, useState } from "react";

import { IGalleryRowItem } from "@/types/types";
import { useSelectedImage } from "@/context/SelectedImageContext";

export function useGalleryNavigation(gallery: IGalleryRowItem[][] | null = null) {
    const [selected, setSelected] = useState<IGalleryRowItem | null>(null);

    const { selectedImageIdRef, selectedGalleryIdRef, onImageSelect } = useSelectedImage();

    const lastImageId = useMemo(function getLastImageIndex() {
        return (gallery?.flat() ?? []).length;
    }, [gallery]);

    const onPrev = useCallback(function onPrevClick() {
        let prev = gallery?.flat()[(selectedImageIdRef.current ?? 0) - 2];

        let count = 1;
        while (!prev || prev.ID === null) {
            prev = gallery?.flat()[lastImageId - count];
            count++;
        }

        onImageSelect(selectedGalleryIdRef.current, prev?.ID ?? 0);
    }, [gallery, selectedImageIdRef, onImageSelect, selectedGalleryIdRef, lastImageId]);

    const onNext = useCallback(function onNextClick() {
        let nextIndex = selectedImageIdRef.current ?? 0;

        if(nextIndex === lastImageId) nextIndex = 0;

        let next = gallery?.flat()[(nextIndex ?? 0)];

        if (!next || next.ID === null) {
            next = gallery?.flat()[0] as IGalleryRowItem;
        }

        onImageSelect(selectedGalleryIdRef.current, next.ID);
    }, [selectedImageIdRef, lastImageId, gallery, onImageSelect, selectedGalleryIdRef]);

    useEffect(function onSelectedImageChange(){
        const selectedImage = gallery?.flat().find((item) => item.ID === selectedImageIdRef.current);

        if(!selectedImage) return;

        setSelected(selectedImage);
    }, [selectedImageIdRef.current, selectedGalleryIdRef.current]);

    return {
        onPrev,
        onNext,
        selected,
        selectedImageIdRef,
    }
}
