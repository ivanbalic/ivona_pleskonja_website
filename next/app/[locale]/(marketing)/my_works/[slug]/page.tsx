'use client';
import React, { useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ArtGallery } from "@/components/art-gallery/ArtGallery";
import { MyWorkDetails } from "@/components/my-works/MyWorkDetails";
import { SelectedImageProvider } from "@/context/SelectedImageContext";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import {getSubPageContentById } from "@/app/[locale]/(marketing)/my_works/pageContent";

export default function WorkDetailsPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const searchParams = useSearchParams();

    const page = getSubPageContentById(slug);

    const showGallery = useMemo(() => searchParams.has("gallery"), [searchParams]);

    if (!page) return null;

    return (
        <SelectedImageProvider>
            <Container className={cn('pt-[75px] md:pt-[100px] lg:pt-[125px] text-black min-h-screen', showGallery && 'bg-backgroundSecondary max-w-full')}>
                <SubNavBredCrumbs navItems={page.HISTORY ?? []} locale={locale} page={slug} subItemClass='max-[480px]:max-w-[250px] truncate' />
                { showGallery
                    ? <ArtGallery locale={locale} gallery={page.GALLERY} exhibitionId={page.EXHIBITION_ID} />
                    : <MyWorkDetails data={page} locale={locale} />
                }
            </Container>
        </SelectedImageProvider>
    );
}
