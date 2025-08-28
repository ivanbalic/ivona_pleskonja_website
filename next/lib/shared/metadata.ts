import { strapiImage } from "../strapi/strapiImage";

export function generateMetadataObject(seo: any) {
  return {
    title: seo?.metaTitle || "Ivona Pleskonja",
    description: seo?.metaDescription || "Portfolio of Ivona Pleskonja",
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "Ivona Pleskonja",
      description:
        seo?.ogDescription ||
        seo?.metaDescription ||
        "Portfolio of Ivona Pleskonja",
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    robots: {
      index: seo?.robotsIndex || true,
      follow: seo?.robotsFollow || true,
      nocache: seo?.robotsNocache || true,
    },
    twitter: {
      card: seo?.twitterCard || "summary_large_image",
      title: seo?.twitterTitle || seo?.metaTitle || "Default Twitter Title",
      description:
        seo?.twitterDescription ||
        seo?.metaDescription ||
        "Default Twitter Description",
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
    other: {
      "application/ld+json": [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ivona Pleskonja",
          occupation: "Artist",
          image:
            "https://www.ivonapleskonja.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-me-cover.d2159c3e.webp&w=2048&q=75",
          url: "https://ivonapleskonja.com",
          sameAs: [
            "https://www.youtube.com/@ivonapleskonja",
            "https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr",
            "https://www.tiktok.com/@ivonapleskonja?_t=ZM-8ySKKdS4hRG&_r=1",
            "https://www.instagram.com/ivonapleskonjafineart?igsh=eTQ5dzhnbnVzNGV1",
          ],
          workExample: [
            {
              "@type": "VisualArtwork",
              name: "REVOLUTION FOR EVOLUTION",
              creator: "Ivona Pleskonja",
              artform: "Mixed media",
            },
            {
              "@type": "VisualArtwork",
              name: "GABRIEL",
              creator: "Ivona Pleskonja",
            },
            {
              "@type": "VisualArtwork",
              name: "CHIRON",
              creator: "Ivona Pleskonja",
            },
          ],
        },
      ],
    },
  };
}
