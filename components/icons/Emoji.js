import * as React from "react";

function SvgEmoji(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={26.5}
        cy={26.5}
        r={23.5}
        stroke="currentColor"
        strokeWidth={5}
      />
      <rect x={14} y={15} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={32} y={15} width={7} height={7} rx={3.5} fill="currentColor" />
      <path
        d="M14 32c2 4 6.149 6.5 12.5 6.5S37 36 39 32"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgEmoji;
