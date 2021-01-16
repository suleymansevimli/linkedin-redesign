import * as React from "react";

function SvgTick(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 41 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 18.198l9.487 11.758c1.648 2.043 4.784 1.97 6.338-.146L38.5 3"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgTick;
