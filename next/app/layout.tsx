import type { Viewport } from "next";
import { Locale, i18n } from '@/i18n.config';

import "./globals.css";

import { ActiveSlideProvider } from "@/context/ActiveSlideContext";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

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
      <body className="antialiased">
      <ActiveSlideProvider>
        {children}
      </ActiveSlideProvider>
      </body>
    </html>
  );
}
