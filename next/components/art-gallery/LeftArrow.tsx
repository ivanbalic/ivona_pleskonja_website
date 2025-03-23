import React from "react";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "@/components/icons/ArrowLeft";

export function LeftArrow({onClick, className, width, height }: { onClick: () => void, className?: string, width?: string | undefined, height?: string | undefined }) {
    return (
        <div className={cn("flex items-center absolute left-0 top-[50%]", className)} onClick={onClick}>
            <ArrowLeft width={width} height={height} />
        </div>
    );
}
