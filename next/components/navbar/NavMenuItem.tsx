"use client";
import { ReactNode } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  hide?: boolean;
  target?: string;
  active?: boolean;
  className?: string;
  children: ReactNode;
};

export function NavMenuItem({
  href,
  hide,
  active,
  target,
  children,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-[62px] lg:leading-[84px] tracking-[.15em] text-white/50 hover:text-white cursor-pointer",
        (active || pathname?.includes(href)) && "text-white",
        (hide && "hidden"),
        className
      )}
      target={target}
    >
      {children}
    </Link>

  );
}
