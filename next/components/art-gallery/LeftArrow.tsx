import React from "react";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "@/components/icons/ArrowLeft";

export function LeftArrow({onClick, className, width, height, color }: { onClick: () => void, className?: string, width?: string | undefined, height?: string | undefined, color?: string }) {
    return (
        <div className={cn("flex items-center absolute left-0 md:top-[50%]", className)} onClick={onClick}>
            <ArrowLeft width={width} height={height} color={color} />
        </div>
    );
}
