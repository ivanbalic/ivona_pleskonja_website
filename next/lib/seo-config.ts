import { Metadata } from 'next';

interface SeoConfig {
    default: Metadata;
    templates: {
        artwork: (props: { title: string; description: string; image: string }) => Metadata;
        article: (props: { title: string; description: string; image: string }) => Metadata;
    };
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const seoConfig: SeoConfig = {
    default: {
        metadataBase: new URL(baseUrl),
        title: {
            default: 'Ivona Pleskonja - Contemporary Serbian Artist',
            template: '%s | Ivona Pleskonja'
        },
        description: 'Ivona Pleskonja – A contemporary Serbian artist specializing in mixed media, murals, and installations. Her work blends traditional craftsmanship with modern techniques.',
        keywords: ['contemporary art', 'Serbian artist', 'mixed media', 'murals', 'installations', 'fine art', 'modern art', 'Ivona Pleskonja', 'Belgrade artist', 'art exhibitions'],
        authors: [{ name: 'Ivona Pleskonja', url: baseUrl }],
        creator: 'Ivona Pleskonja',
        publisher: 'Ivona Pleskonja',
        formatDetection: {
            telephone: false,
            email: false,
            address: false,
        },
        alternates: {
            canonical: baseUrl,
            languages: {
                'en': `${baseUrl}/eng`,
                'sr': `${baseUrl}/ser`,
            }
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
            shortcut: '/favicon-32x32.png',
        },
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
        verification: {
            google: 'your-google-site-verification', // Add your Google verification code
        },
        openGraph: {
            type: 'website',
            siteName: 'Ivona Pleskonja',
            title: 'Ivona Pleskonja - Contemporary Serbian Artist',
            description: 'Ivona Pleskonja – A contemporary Serbian artist specializing in mixed media, murals, and installations.',
            url: baseUrl,
            images: [{
                url: `${baseUrl}/_next/static/media/contact-background.94c95d3c.svg`,
                width: 1200,
                height: 630,
                alt: 'Ivona Pleskonja Art',
            }],
            locale: 'en_US',
            alternateLocale: ['sr_RS'],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ivonapleskonja',
            creator: '@ivonapleskonja',
            title: 'Ivona Pleskonja - Contemporary Serbian Artist',
            description: 'Contemporary Serbian artist specializing in mixed media, murals, and installations.',
            images: [`${baseUrl}/_next/static/media/contact-background.94c95d3c.svg`],
        },
    },
    templates: {
        artwork: ({ title, description, image }) => ({
            title: title,
            description: description,
            openGraph: {
                title: `${title} | Ivona Pleskonja`,
                description: description,
                type: 'article',
                images: [{ url: image, width: 1200, height: 630, alt: title }],
            },
            twitter: {
                title: `${title} | Ivona Pleskonja`,
                description: description,
                images: [image],
            },
        }),
        article: ({ title, description, image }) => ({
            title: title,
            description: description,
            openGraph: {
                title: `${title} | Ivona Pleskonja`,
                description: description,
                type: 'article',
                images: [{ url: image, width: 1200, height: 630, alt: title }],
            },
            twitter: {
                title: `${title} | Ivona Pleskonja`,
                description: description,
                images: [image],
            },
        }),
    },
};
