"use client";
import { ReactNode } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  target?: string;
  active?: boolean;
  className?: string;
  children: ReactNode;
};

export function NavMenuItem({
  children,
  href,
  active,
  target,
  className,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "",
        (active || pathname?.includes(href)) && "text-white",
        className
      )}
      target={target}
    >
      {children}
    </Link>

  );
}
