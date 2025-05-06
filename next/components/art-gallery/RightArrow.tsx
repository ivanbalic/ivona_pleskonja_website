import React from "react";

import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/icons/ArrowRight";

export function RightArrow({onClick, className, width, height, color }: { onClick: () => void, className?: string, width?: string | undefined, height?: string | undefined, color?: string }) {
    return (
        <div className={cn("flex items-center absolute right-0 top-[50%]", className)} onClick={onClick}>
            <ArrowRight width={width} height={height} color={color} />
        </div>
    );
}
