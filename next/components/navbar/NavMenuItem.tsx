"use client";
import { ReactNode } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
  hide?: boolean;
  target?: string;
  className?: string;
  children: ReactNode;
  hovered?: string | null;
  setHovered?: (hovered: string | null) => void;
};

export function NavMenuItem({
  href,
  hide,
  label,
  target,
  hovered,
  children,
  className,
  setHovered,
}: Props) {
  const pathname = usePathname();

  const onMouseEnter = () => {
    if(!setHovered) return;

    setHovered(label);
  };

  const onMouseLeave = () => {
    if(!setHovered) return;

    setHovered(null);
  };

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "text-white hover:font-bold cursor-pointer",
        (hovered !== null && hovered !== label) && "opacity-50",
        (hide && "hidden"),
        className
      )}
      target={target}
    >
      {children}
    </Link>

  );
}
