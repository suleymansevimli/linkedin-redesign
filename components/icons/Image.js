import * as React from "react";

function SvgImage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 56 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={3}
        y={3}
        width={50}
        height={36}
        rx={5}
        stroke="currentColor"
        strokeWidth={5}
      />
      <rect x={15.5} y={9} width={7} height={7} rx={3.5} fill="currentColor" />
      <path
        d="M48 37l-6.755-18.012c-1.297-3.461-6.193-3.461-7.49 0L27 37"
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        d="M28 38l-5.275-13.48c-1.327-3.39-6.123-3.39-7.45 0L10 38"
        stroke="currentColor"
        strokeWidth={4}
      />
    </svg>
  );
}

export default SvgImage;
