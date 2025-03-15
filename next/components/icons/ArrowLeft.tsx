import * as React from "react";

export const ArrowLeft = ({ color='#3769E6', className, width = '40px', height = '40px' }: { color?: string, className?: string, width?: string, height?: string }) => (
    <svg
        fill="#000000"
        width={width}
        height={height}
        viewBox="-4.5 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
        className={`cf-icon-svg ${className}`}
    >
        <path fill={color} d="M8.4 17.269a1.026 1.026 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z" />
    </svg>
);
