import React from 'react'

import { Roboto_Serif } from "next/font/google";

import { Navbar } from '@/components/navbar';

const roboto_serif = Roboto_Serif({
    display: 'swap',
    style: ['normal'],
    subsets: ['latin-ext'],
    weight: ['400', '700'],
    variable: '--font-roboto-serif',
});

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale} className={`${roboto_serif.variable} antialiased`}>
            <body>
                <Navbar locale={locale} />
                {children}
            </body>
        </html>
    );
}
