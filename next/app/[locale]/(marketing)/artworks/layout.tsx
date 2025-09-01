import { Metadata } from "next";
import { ReactNode } from "react";
import { getArtworksMetadata } from "../metadata.config";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getArtworksMetadata(params);
}

export default function ArtworksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
