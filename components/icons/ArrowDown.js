import * as React from "react";

function SvgArrowDown(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.5l4 3 4-3"
        stroke="#071B2A"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgArrowDown;
