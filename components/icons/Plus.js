import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 3v39.5M3.25 22.75h39.5"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgPlus;
