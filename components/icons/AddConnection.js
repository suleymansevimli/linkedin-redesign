import * as React from "react";

function SvgAddConnection(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M38 36.875V47a3 3 0 01-3 3H6a3 3 0 01-3-3V18a3 3 0 013-3h10.09"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5 3v24M27 15h23"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgAddConnection;
