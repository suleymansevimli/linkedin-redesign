import * as React from "react";

function SvgEye(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 57 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.5 3C41.5 3 54 15.5 54 15.5S41.5 28 28.5 28 3 15.5 3 15.5 15.5 3 28.5 3z"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={28.5}
        cy={15.5}
        r={10.5}
        stroke="currentColor"
        strokeWidth={4}
      />
    </svg>
  );
}

export default SvgEye;
