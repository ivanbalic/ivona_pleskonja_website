/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.WEBSITE_URL || "localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 4096],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    remotePatterns: [
      { hostname: process.env.IMAGE_HOSTNAME || "localhost" },
      {
        protocol: "https",
        hostname: "ivona-pleskonja.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["eng", "ser"],
    defaultLocale: "eng",
  },
  pageExtensions: ["ts", "tsx"],
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|jpeg|gif|ico|svgz|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    let redirections = [];
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/redirections`,
      );
      const result = await res.json();
      const redirectItems = result.data.map(({ source, destination }) => {
        return {
          source: `/:locale${source}`,
          destination: `/:locale${destination}`,
          permanent: false,
        };
      });

      redirections = redirections.concat(redirectItems);

      return redirections;
    } catch (error) {
      return [];
    }
  },
};

export default nextConfig;
