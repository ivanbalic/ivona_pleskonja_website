import Link from "next/link";
import { Container } from "@/components/container";

const translations = {
  en: {
    title: "404",
    heading: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    returnHome: "Return Home",
  },
  sr: {
    title: "404",
    heading: "Stranica nije pronadjena.",
    description: "Stranica koju tražite ne postoji ili je premeštena.",
    returnHome: "Povratak na početnu",
  },
};

export default function NotFound({
  params: { locale },
}: {
  params: { locale: "en" | "sr" };
}) {
  const t = translations[locale];

  return (
    <Container className="flex flex-col items-center justify-center min-h-screen text-black px-4">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <h2 className="text-2xl mb-8">{t.heading}</h2>
      <p className="mb-8 text-center">{t.description}</p>
      <Link
        href={`/${locale}`}
        className="text-primaryBlue hover:underline transition-colors"
      >
        {t.returnHome}
      </Link>
    </Container>
  );
}
