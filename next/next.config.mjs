/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: process.env.IMAGE_HOSTNAME || "localhost" },
      {
        protocol: 'https',
        hostname: 'ivona-pleskonja.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  pageExtensions: ["ts", "tsx"],
  async redirects() {
    let redirections = [];
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/redirections`
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
