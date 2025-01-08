import React from "react";

import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
  containerStyle,
}: {
  className?: string;
  children: React.ReactNode;
  containerStyle?: React.CSSProperties;
}) => {
  return (
    <div className={cn(`max-w-[1440px] mx-auto`, className)} style={containerStyle}>
      {children}
    </div>
  );
};
