import React from "react";
import { Roboto_Serif } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import { ActiveSlideProvider } from "@/context/ActiveSlideContext";

import "./globals.css";

const roboto_serif = Roboto_Serif({
  display: "swap",
  style: ["normal"],
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  variable: "--font-roboto-serif",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang} className={`${roboto_serif.variable} antialiased`}>
      <body>
        <ActiveSlideProvider>{children}</ActiveSlideProvider>
      </body>
    </html>
  );
}
