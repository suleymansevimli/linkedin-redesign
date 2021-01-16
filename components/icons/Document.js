import * as React from "react";

function SvgDocument(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 9a6 6 0 016-6h11.066a6 6 0 014.736 2.316L30 12l5.632 6.838A6 6 0 0137 22.653V40a6 6 0 01-6 6H9a6 6 0 01-6-6V9z"
        stroke="currentColor"
        strokeWidth={5}
      />
      <path
        d="M26 36H14M26 28H14"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgDocument;
