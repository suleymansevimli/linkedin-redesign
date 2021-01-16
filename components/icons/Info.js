import * as React from "react";

function SvgInfo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={26.5}
        cy={26.5}
        r={23.5}
        stroke="currentColor"
        strokeWidth={5}
      />
      <path
        d="M26 23.345V37m0-22v1.517"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgInfo;
