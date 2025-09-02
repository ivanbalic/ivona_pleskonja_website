import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";

export function ArticleTitle({
  section,
  locale = "sr",
}: {
  section?: { TYPE: "title"; TEXT: ITranslations };
  locale?: string;
}) {
  if (!section) return null;

  return (
    <Container
      className={cn(
        "pt-5 md:pt-10",
        "flex flex-col gap-5",
        "px-4 md:px-[135px]",
        "text-black font-helvetica tracking-[.05em]",
      )}
    >
      <div className="text-primaryBlue text-[16px] leading-[100%] font-bold uppercase">
        {section.TEXT[locale.toUpperCase() as keyof ITranslations]}
      </div>
    </Container>
  );
}
