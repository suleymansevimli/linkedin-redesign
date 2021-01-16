import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 58 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={33.298}
        cy={24.373}
        r={15}
        transform="rotate(35 33.298 24.373)"
        stroke="currentColor"
        strokeWidth={5}
      />
      <rect
        x={22.933}
        y={34.816}
        width={5}
        height={17.832}
        rx={2.5}
        transform="rotate(35 22.933 34.816)"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
