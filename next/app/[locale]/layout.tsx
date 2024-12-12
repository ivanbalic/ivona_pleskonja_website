import React from 'react'

import { Navbar } from '@/components/navbar';

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body>
                <Navbar locale={locale} />
                {children}
            </body>
        </html>
    );
}
