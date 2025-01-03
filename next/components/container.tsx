import React from "react";

import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`max-w-[1440px] mx-auto`, className)}>
      {children}
    </div>
  );
};
