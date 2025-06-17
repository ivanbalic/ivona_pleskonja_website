'use client';
import React, { useEffect, useMemo, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { ITranslations } from "@/types/types";
import { Container } from '@/components/container';
import { ArtGallery } from '@/components/art-gallery/ArtGallery';
import { MyWorkDetails } from '@/components/my-works/MyWorkDetails';
import { SelectedImageProvider } from '@/context/SelectedImageContext';
import { SubNavBredCrumbs } from '@/components/subnav-bredcrumbs/SubNavBredCrumbs';
import { getSubPageContentById } from '@/app/[locale]/(marketing)/works/pageContent';

export default function WorkDetailsPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const searchParams = useSearchParams();

    const page = getSubPageContentById(slug);

    const galleryId = useMemo(() => searchParams.get("gallery"), [searchParams]);

    const showGallery = Boolean(galleryId);

    const gallery = useMemo(() => page?.GALLERY.find((g) => g.ID === parseInt(galleryId || '')), [galleryId, page?.GALLERY]);

    if (!page) return null;

    return (
        <SelectedImageProvider>
            <Container className={cn('pt-[85px] md:pt-[125px] px-4 md:px-20 text-black min-h-screen', showGallery && 'bg-backgroundSecondary max-w-full')}>
                <SubNavBredCrumbs compact={showGallery && isMobile} navItems={page.HISTORY ?? []} locale={locale} page={slug} />
                { showGallery
                    ? <ArtGallery locale={locale} gallery={gallery?.CONTENT} exhibitionId={page.EXHIBITION_ID} galleryTitle={gallery?.TITLE?.[locale.toUpperCase() as keyof ITranslations] ?? null} />
                    : <MyWorkDetails data={page} locale={locale} />
                }
            </Container>
        </SelectedImageProvider>
    );
}
