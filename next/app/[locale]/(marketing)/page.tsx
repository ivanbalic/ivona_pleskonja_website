import React from "react";
import { Metadata } from 'next';

import fetchContentType from '@/lib/strapi/fetchContentType';
import { generateMetadataObject } from '@/lib/shared/metadata';
import {HomePageCoverCarousel} from "@/components/HomePageCoverCarousel";
import {SignatureLogo} from "@/components/SignatureLogo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const pageData = await fetchContentType(
    'pages',
    `filters[slug][$eq]=homepage&filters[locale][$eq]=${params.locale}&populate=seo.metaImage`,
    true
  );

  const seo = pageData?.seo;
  const metadata = generateMetadataObject(seo);
  return metadata;
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  return <div className="relative w-full h-screen">
      <HomePageCoverCarousel />
      <SignatureLogo />
  </div>;
}
