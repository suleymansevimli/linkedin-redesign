import * as React from "react";

function SvgPages(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 36 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32.709 41V8a5 5 0 00-5-5H7.999a5 5 0 00-5 5v33a5 5 0 005 5h19.71a5 5 0 005-5z"
        stroke="currentColor"
        strokeWidth={5}
      />
      <path
        fill="currentColor"
        d="M4.509 28h27v5h-27zM15.509 47v-9h5v9zM4.509 13h27v5h-27z"
      />
    </svg>
  );
}

export default SvgPages;
