import * as React from "react";

function SvgClose(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.035 2.785l27.93 27.93m-27.93 0l27.93-27.93"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgClose;
