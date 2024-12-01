import { Metadata } from 'next';

import PageContent from '@/lib/shared/PageContent';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { generateMetadataObject } from '@/lib/shared/metadata';
import React from "react";
import Image from "next/image";
import cover from '../../../public/images/cover.jpg';
import signature from '../../../public/images/signature.svg';

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
    <Image src={cover} alt='hero' className='w-full h-screen object-cover' />
    <div className="absolute inset-y-1/2 w-screen">
      <Image src={signature} alt='signature-logo' className="my-0 mx-auto" />
    </div>
  </div>;
}
