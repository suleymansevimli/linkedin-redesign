import * as React from "react";

function SvgHamburger(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 47 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={47} height={5} rx={2.5} fill="currentColor" />
      <rect y={15} width={47} height={5} rx={2.5} fill="currentColor" />
      <rect y={30} width={47} height={5} rx={2.5} fill="currentColor" />
    </svg>
  );
}

export default SvgHamburger;
