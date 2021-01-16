import * as React from "react";

function SvgDots(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 47 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={9} height={9} rx={4.5} fill="currentColor" />
      <rect x={19} width={9} height={9} rx={4.5} fill="currentColor" />
      <rect x={38} width={9} height={9} rx={4.5} fill="currentColor" />
    </svg>
  );
}

export default SvgDots;
