import * as React from "react";

function SvgHashtag(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 38 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={3} y={12} width={35} height={5} rx={2.5} fill="currentColor" />
      <rect
        width={44.086}
        height={5.104}
        rx={2.552}
        transform="matrix(.20547 -.97866 .9462 .32357 5 43.146)"
        fill="currentColor"
      />
      <rect y={25} width={35} height={5} rx={2.5} fill="currentColor" />
      <rect
        width={44.086}
        height={5.104}
        rx={2.552}
        transform="matrix(.20547 -.97866 .9462 .32357 18.888 43.146)"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHashtag;
