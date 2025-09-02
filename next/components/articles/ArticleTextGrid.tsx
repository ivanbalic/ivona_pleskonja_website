import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { getSectionComponentByType } from "@/components/articles/sectionComponentMap";

export function ArticleTextGrid({
  locale = "sr",
  section,
}: {
  locale: string;
  section: {
    TYPE: "text_grid";
    CLASS_NAME: string;
    CONTENT: Record<string, any>[][];
  };
}) {
  return (
    <Container
      className={cn(
        "py-5 md:py-10",
        "flex flex-col gap-5",
        "px-4 md:px-[135px]",
        "text-black font-helvetica tracking-[.05em]",
        section.CLASS_NAME,
      )}
    >
      <div
        className={cn(
          "text-[16px] leading-[24px] md:leading-[100%]",
          "flex flex-col md:flex-row gap-5 md:gap-[90px]",
        )}
      >
        {section.CONTENT.map((row: Record<string, any>[], rowKey: number) => (
          <div
            key={`${section.TYPE}_${rowKey}`}
            className="flex flex-col gap-5 flex-1"
          >
            {row.map((col: Record<string, any>, columnKey) => {
              const Component = getSectionComponentByType(col.TYPE);
              return (
                <Component
                  key={`${section.TYPE}_${rowKey}_${col.TYPE}_${columnKey}`}
                  // @ts-ignore
                  section={col}
                  locale={locale}
                />
              );
            })}
          </div>
        ))}
      </div>
    </Container>
  );
}
