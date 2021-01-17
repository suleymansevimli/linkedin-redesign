import * as React from "react";

function SvgNews(props) {
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
      <rect x={15} y={12} width={27} height={5} rx={2.5} fill="currentColor" />
      <rect x={15} y={25} width={19} height={5} rx={2.5} fill="currentColor" />
      <rect x={37} y={25} width={5} height={5} rx={2.5} fill="currentColor" />
    </svg>
  );
}

export default SvgNews;
