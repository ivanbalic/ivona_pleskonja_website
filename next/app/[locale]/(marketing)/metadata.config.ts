import { seoConfig } from "@/lib/seo-config";

export const getHomeMetadata = async () => ({
  ...seoConfig.default,
  alternates: {
    canonical: "https://ivonapleskonja.com",
    languages: {
      en: "https://ivonapleskonja.com/eng",
      sr: "https://ivonapleskonja.com/ser",
    },
  },
  openGraph: {
    ...seoConfig.default.openGraph,
    title: "Ivona Pleskonja - Contemporary Serbian Artist",
    url: "https://ivonapleskonja.com",
  },
});

export const getArtworksMetadata = async (params: { locale: string }) => ({
  ...seoConfig.default,
  title: "Artworks | Ivona Pleskonja",
  description:
    "Explore the artistic works of Ivona Pleskonja - contemporary Serbian artist featuring mixed media, murals, and installations.",
  alternates: {
    canonical: `https://ivonapleskonja.com/${params.locale}/artworks`,
    languages: {
      en: "https://ivonapleskonja.com/eng/artworks",
      sr: "https://ivonapleskonja.com/ser/artworks",
    },
  },
});

export const getAboutMetadata = async (params: { locale: string }) => ({
  ...seoConfig.default,
  title: "About Ivona Pleskonja",
  description:
    "Learn about Ivona Pleskonja, a contemporary Serbian artist. Discover her background, education, and artistic journey.",
  alternates: {
    canonical: `https://ivonapleskonja.com/${params.locale}/about_me`,
    languages: {
      en: "https://ivonapleskonja.com/eng/about_me",
      sr: "https://ivonapleskonja.com/ser/about_me",
    },
  },
});

export const getContactMetadata = async (params: { locale: string }) => ({
  ...seoConfig.default,
  title: "Contact | Ivona Pleskonja",
  description:
    "Get in touch with Ivona Pleskonja. Connect through social media, email, or phone.",
  alternates: {
    canonical: `https://ivonapleskonja.com/${params.locale}/contact`,
    languages: {
      en: "https://ivonapleskonja.com/eng/contact",
      sr: "https://ivonapleskonja.com/ser/contact",
    },
  },
});
