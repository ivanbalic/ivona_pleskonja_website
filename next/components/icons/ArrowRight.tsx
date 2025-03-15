import * as React from "react";

export const ArrowRight = ({ color='#3769E6', className, width = '40px', height = '40px' }: { color?: string, className?: string, width?: string, height?: string }) => (
    <svg
        fill="#000000"
        width={width}
        height={height}
        viewBox="-4.5 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
        className={`cf-icon-svg ${className}`}
    >
        <path fill={color} d="M1.6 17.262a1.03 1.03 0 0 1-.728-1.757l6.073-6.073L.872 3.36a1.03 1.03 0 0 1 1.455-1.455l6.8 6.8a1.03 1.03 0 0 1 0 1.456l-6.8 6.8a1.025 1.025 0 0 1-.727.302z" />
    </svg>
);

