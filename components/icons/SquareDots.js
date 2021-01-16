import * as React from "react";

function SvgSquareDots(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={17} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={34} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect y={17} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={17} y={17} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={34} y={17} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect y={34} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={17} y={34} width={7} height={7} rx={3.5} fill="currentColor" />
      <rect x={34} y={34} width={7} height={7} rx={3.5} fill="currentColor" />
    </svg>
  );
}

export default SvgSquareDots;
