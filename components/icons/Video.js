import * as React from "react";

function SvgVideo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 62 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={3}
        y={3}
        width={35.626}
        height={29.519}
        rx={5}
        stroke="currentColor"
        strokeWidth={5}
      />
      <path
        d="M39.515 15.768a6 6 0 014.473-5.802l7.34-1.932c3.804-1 7.526 1.869 7.526 5.803v7.845c0 3.934-3.722 6.803-7.526 5.802l-7.34-1.931a6 6 0 01-4.473-5.803v-3.982z"
        stroke="currentColor"
        strokeWidth={5}
      />
    </svg>
  );
}

export default SvgVideo;
