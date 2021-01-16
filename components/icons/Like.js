import * as React from "react";

function SvgLike(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 6.386C3.904-6.82-11.567 21.39 25 43 61.567 21.392 46.096-6.82 25 6.386z"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLike;
