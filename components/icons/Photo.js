import * as React from "react";

function SvgPhoto(props) {
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
      <rect
        x={15}
        y={3}
        width={21}
        height={10}
        rx={1}
        stroke="currentColor"
        strokeWidth={5}
      />
      <circle
        cx={25.5}
        cy={27.5}
        r={6.5}
        stroke="currentColor"
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgPhoto;
