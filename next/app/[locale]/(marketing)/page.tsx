import React from "react";
import { Metadata } from "next";

import { getHomeMetadata } from "./metadata.config";
import { generatePersonSchema } from "@/lib/schema-generator";
import { SocialMedias } from "@/components/home/SocialMedias";
import { SignatureLogo } from "@/components/home/SignatureLogo";
import { HomePageCoverCarousel } from "@/components/home/HomePageCoverCarousel";

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata();
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <div className="relative w-full h-dvh">
        <HomePageCoverCarousel />
        <SignatureLogo />
        <SocialMedias />
      </div>
    </>
  );
}
