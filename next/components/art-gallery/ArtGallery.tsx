import React from 'react';

import { IGalleryRowItem } from '@/types/types';
import { MobileGallery } from "@/components/art-gallery/MobileGallery";
import { DesktopGallery } from "@/components/art-gallery/DesktopGallery";

export function ArtGallery ({ locale, gallery, exhibitionId }: { locale: string, gallery?: IGalleryRowItem[][], exhibitionId: number }) {
    return (
        <>
            <MobileGallery locale={locale} gallery={gallery} exhibitionId={exhibitionId} />
            <DesktopGallery locale={locale} gallery={gallery} exhibitionId={exhibitionId} />
        </>
    );
}
