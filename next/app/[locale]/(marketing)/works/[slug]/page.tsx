'use client';
import React, { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Container } from '@/components/container';
import { ArtGallery } from '@/components/art-gallery/ArtGallery';
import { MyWorkDetails } from '@/components/my-works/MyWorkDetails';
import { SelectedImageProvider } from '@/context/SelectedImageContext';
import { SubNavBredCrumbs } from '@/components/subnav-bredcrumbs/SubNavBredCrumbs';
import { getSubPageContentById } from '@/app/[locale]/(marketing)/works/pageContent';

export default function WorkDetailsPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const searchParams = useSearchParams();

    const page = getSubPageContentById(slug);

    const galleryId = useMemo(() => searchParams.get("gallery"), [searchParams]);

    const showGallery = Boolean(galleryId);

    const gallery = useMemo(() => page?.GALLERY.find((g) => g.ID === parseInt(galleryId || '')), [galleryId, page?.GALLERY]);

    if (!page) return null;

    return (
        <SelectedImageProvider>
            <Container className={cn('pt-[85px] md:pt-[125px] text-black min-h-screen', showGallery && 'bg-backgroundSecondary max-w-full')}>
                <SubNavBredCrumbs navItems={page.HISTORY ?? []} locale={locale} page={slug} />
                { showGallery
                    ? <ArtGallery locale={locale} gallery={gallery?.CONTENT} exhibitionId={page.EXHIBITION_ID} />
                    : <MyWorkDetails data={page} locale={locale} />
                }
            </Container>
        </SelectedImageProvider>
    );
}
