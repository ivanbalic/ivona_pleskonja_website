export function generateArtworkSchema(artwork: any) {
    return {
        '@context': 'https://schema.org',
        '@type': 'VisualArtwork',
        name: artwork.title,
        artist: {
            '@type': 'Person',
            name: 'Ivona Pleskonja',
            sameAs: [
                'https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr',
                'https://www.instagram.com/ivonapleskonjafineart',
                'https://www.tiktok.com/@ivonapleskonja',
                'https://www.youtube.com/@ivonapleskonja',
            ],
        },
        creator: {
            '@type': 'Person',
            name: 'Ivona Pleskonja',
        },
        artform: artwork.technique,
        artworkSurface: artwork.surface,
        width: artwork.dimensions.width,
        height: artwork.dimensions.height,
        description: artwork.description,
        image: artwork.image,
        dateCreated: artwork.createdAt,
    };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Ivona Pleskonja',
        jobTitle: 'Artist',
        image: 'https://ivonapleskonja.com/_next/static/media/contact-background.94c95d3c.svg',
        sameAs: [
            'https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr',
            'https://www.instagram.com/ivonapleskonjafineart',
            'https://www.tiktok.com/@ivonapleskonja',
            'https://www.youtube.com/@ivonapleskonja',
        ],
        worksFor: {
            '@type': 'Organization',
            name: 'Independent Artist',
        },
        nationality: {
            '@type': 'Country',
            name: 'Serbia',
        },
    };
}
