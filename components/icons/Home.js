import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47 19L28.8 4.109a6 6 0 00-7.6 0L3 19"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14v24a3 3 0 003 3h25a3 3 0 003-3V14"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHome;
