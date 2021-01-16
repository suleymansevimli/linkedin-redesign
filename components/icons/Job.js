import * as React from "react";

function SvgJob(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 51 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={3}
        y={13}
        width={45}
        height={29}
        rx={6}
        stroke="currentColor"
        strokeWidth={5}
      />
      <path
        d="M17 9a6 6 0 016-6h5a6 6 0 016 6v4H17V9z"
        stroke="currentColor"
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgJob;
