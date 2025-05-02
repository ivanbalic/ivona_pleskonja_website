import React from "react";

import { SocialMedias } from "@/components/home/SocialMedias";
import { SignatureLogo } from "@/components/home/SignatureLogo";
import { HomePageCoverCarousel } from "@/components/home/HomePageCoverCarousel";

export default function HomePage() {
    return (
      <div className="relative w-full h-screen">
          <HomePageCoverCarousel/>
          <SignatureLogo />
          <SocialMedias />
      </div>
  );
}
