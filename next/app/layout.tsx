import React from "react";

import { Locale, i18n } from '@/i18n.config';

import { ActiveSlideProvider } from "@/context/ActiveSlideContext";

import "./globals.css";

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>
      <ActiveSlideProvider>
        {children}
      </ActiveSlideProvider>
      </body>
    </html>
  );
}
