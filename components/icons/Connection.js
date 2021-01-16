import * as React from "react";

function SvgConnection(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 66 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={3}
        y={3}
        width={36}
        height={25}
        rx={5}
        stroke="currentColor"
        strokeWidth={5}
      />
      <rect
        x={27}
        y={14}
        width={36}
        height={25}
        rx={5}
        stroke="currentColor"
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgConnection;
