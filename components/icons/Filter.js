import * as React from "react";

function SvgFilter(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 47 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y={2} width={47} height={3} rx={1.5} fill="currentColor" />
      <rect y={18} width={47} height={3} rx={1.5} fill="currentColor" />
      <rect y={34} width={47} height={3} rx={1.5} fill="currentColor" />
      <rect
        width={11}
        height={7}
        rx={2}
        transform="matrix(-1 0 0 1 44 32)"
        fill="currentColor"
      />
      <rect
        width={11}
        height={7}
        rx={2}
        transform="matrix(-1 0 0 1 29 16)"
        fill="currentColor"
      />
      <rect
        width={11}
        height={7}
        rx={2}
        transform="matrix(-1 0 0 1 14 0)"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilter;
